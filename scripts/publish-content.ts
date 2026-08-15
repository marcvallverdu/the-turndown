import { createHash, createHmac } from 'node:crypto';
import { lookup } from 'node:dns/promises';
import { readFile } from 'node:fs/promises';
import { request as httpsRequest } from 'node:https';
import { BlockList, isIP, type LookupFunction } from 'node:net';
import {
  canonicalContentRoute,
  parseContentEnvelope,
  preflightContentPayload,
  preflightStoredContentPayload,
  type ContentMedia,
  type ContentPreflight,
  type ContentType,
  type ValidatedContentEnvelope
} from '../lib/content-publication';

type QueryResult<Row = Record<string, unknown>> = { rows: Row[] };
export type PublicationDatabase = {
  query<Row = Record<string, unknown>>(text: string, values?: unknown[]): Promise<QueryResult<Row>>;
  end(): Promise<void>;
};

type Activation = {
  changed: boolean;
  item_id: string;
  content_type: ContentType;
  previous_version_id: string | null;
  previous_published: boolean;
  version_id: string;
  checksum: string;
  activation_event_id: string;
  payload?: Record<string, unknown> | null;
  media?: ContentMedia[] | null;
  created_by?: string | null;
};

type ActivePayload = {
  item_id: string;
  content_type: ContentType;
  slug: string;
  published: boolean;
  version_id: string | null;
  checksum: string | null;
  payload: Record<string, unknown> | null;
  media: ContentMedia[] | null;
  created_by: string | null;
};

export type PublisherCommand =
  | { command: 'publish'; files: string[]; baseUrl: string; unchangedPath: string; unchangedMarker: string }
  | { command: 'reactivate' | 'rollback'; contentType: ContentType; slug: string; versionId: string; actor: string; runId: string; baseUrl: string; unchangedPath: string; unchangedMarker: string };

const PRODUCTION_ORIGIN = 'https://theturndown.co';
const USER_AGENT = 'The-Turndown-Content-Publisher/1.0';
const ALLOWED_IMAGE_HOSTS = new Set(['images.unsplash.com', 'cdn.sanity.io', 'res.cloudinary.com']);
const MAX_MEDIA_BYTES = 20_000_000;

function usage(): never {
  throw new Error([
    'Usage:',
    '  tsx scripts/publish-content.ts publish <envelope.json> [...] --base-url https://theturndown.co [--unchanged-path /] [--unchanged-marker "The Turndown"]',
    '  tsx scripts/publish-content.ts reactivate <type> <slug> <version-id> --actor <actor> --run-id <run> --base-url https://theturndown.co',
    '  tsx scripts/publish-content.ts rollback <type> <slug> <version-id> --actor <actor> --run-id <run> --base-url https://theturndown.co'
  ].join('\n'));
}

function strictBaseUrl(value: string): string {
  let url: URL;
  try { url = new URL(value); } catch { throw new Error(`--base-url must equal ${PRODUCTION_ORIGIN}`); }
  if (url.origin !== PRODUCTION_ORIGIN || url.protocol !== 'https:' || url.username || url.password || url.hash || url.search || !['', '/'].includes(url.pathname)) {
    throw new Error(`--base-url must equal ${PRODUCTION_ORIGIN}`);
  }
  return url.origin;
}

export function parsePublisherArgs(args: string[]): PublisherCommand {
  const command = args[0];
  if (!['publish', 'reactivate', 'rollback'].includes(command)) usage();
  const publishing = command === 'publish';
  const allowed = new Set(publishing
    ? ['--base-url', '--unchanged-path', '--unchanged-marker']
    : ['--actor', '--run-id', '--base-url', '--unchanged-path', '--unchanged-marker']);
  const options = new Map<string, string>();
  const positions: string[] = [];
  for (let index = 1; index < args.length; index += 1) {
    const token = args[index];
    if (!token.startsWith('--')) { positions.push(token); continue; }
    if (!allowed.has(token)) throw new Error(`unknown option: ${token}`);
    if (options.has(token)) throw new Error(`duplicate option: ${token}`);
    const value = args[++index];
    if (!value || value.startsWith('--')) throw new Error(`missing value for ${token}`);
    options.set(token, value);
  }
  const baseValue = options.get('--base-url');
  if (!baseValue) throw new Error('--base-url is required');
  const baseUrl = strictBaseUrl(baseValue);
  const unchangedPath = options.get('--unchanged-path') ?? '/';
  let unchangedUrl: URL;
  try { unchangedUrl = new URL(unchangedPath, baseUrl); } catch { throw new Error('--unchanged-path must be a safe same-origin absolute path'); }
  if (!unchangedPath.startsWith('/') || unchangedPath.startsWith('//') || unchangedPath.includes('\\') || /[\s#]/.test(unchangedPath) || unchangedUrl.origin !== baseUrl) {
    throw new Error('--unchanged-path must be a safe same-origin absolute path without a backslash');
  }
  const unchangedMarker = options.get('--unchanged-marker') ?? 'The Turndown';
  if (!unchangedMarker.trim() || unchangedMarker.length > 500) throw new Error('--unchanged-marker must be a non-empty semantic marker');
  if (publishing) {
    if (!positions.length) usage();
    return { command: 'publish', files: positions, baseUrl, unchangedPath, unchangedMarker };
  }
  if (positions.length !== 3) usage();
  const contentType = positions[0] as ContentType;
  if (!['hotel', 'brand', 'destination', 'article'].includes(contentType)) throw new Error('content type must be hotel, brand, destination, or article');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(positions[1])) throw new Error('slug must be lowercase kebab-case');
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(positions[2])) throw new Error('version-id must be a canonical UUID');
  const actor = options.get('--actor');
  const runId = options.get('--run-id');
  if (!actor || !runId) throw new Error('--actor and --run-id are required');
  return { command: command as 'reactivate' | 'rollback', contentType, slug: positions[1], versionId: positions[2], actor, runId, baseUrl, unchangedPath, unchangedMarker };
}

const privateAddresses = new BlockList();
for (const [network, prefix] of [
  ['0.0.0.0', 8], ['10.0.0.0', 8], ['100.64.0.0', 10], ['127.0.0.0', 8], ['169.254.0.0', 16], ['172.16.0.0', 12],
  ['192.0.0.0', 24], ['192.0.2.0', 24], ['192.88.99.0', 24], ['192.168.0.0', 16], ['198.18.0.0', 15],
  ['198.51.100.0', 24], ['203.0.113.0', 24], ['224.0.0.0', 4]
] as const) privateAddresses.addSubnet(network, prefix, 'ipv4');
for (const [network, prefix] of [
  ['::', 128], ['::1', 128], ['fc00::', 7], ['fe80::', 10], ['ff00::', 8], ['2001:db8::', 32]
] as const) privateAddresses.addSubnet(network, prefix, 'ipv6');

export function isPublicAddress(address: string): boolean {
  const family = isIP(address);
  if (!family) return false;
  if (family === 6 && address.toLowerCase().startsWith('::ffff:')) {
    const mapped = address.match(/::ffff:(\d+\.\d+\.\d+\.\d+)$/i)?.[1];
    return mapped ? isPublicAddress(mapped) : false;
  }
  return !privateAddresses.check(address, family === 4 ? 'ipv4' : 'ipv6');
}

function imageDimensions(bytes: Buffer, contentType: ContentMedia['contentType']): { width: number; height: number } {
  if (contentType === 'image/png' && bytes.length >= 24 && bytes.subarray(1, 4).toString() === 'PNG') {
    return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
  }
  if (contentType === 'image/webp' && bytes.length >= 30 && bytes.subarray(0, 4).toString() === 'RIFF' && bytes.subarray(8, 12).toString() === 'WEBP') {
    const kind = bytes.subarray(12, 16).toString();
    if (kind === 'VP8X') return { width: 1 + bytes.readUIntLE(24, 3), height: 1 + bytes.readUIntLE(27, 3) };
    if (kind === 'VP8L') { const bits = bytes.readUInt32LE(21); return { width: (bits & 0x3fff) + 1, height: ((bits >>> 14) & 0x3fff) + 1 }; }
  }
  if (contentType === 'image/jpeg' && bytes[0] === 0xff && bytes[1] === 0xd8) {
    for (let offset = 2; offset + 9 < bytes.length;) {
      if (bytes[offset] !== 0xff) { offset += 1; continue; }
      const marker = bytes[offset + 1];
      const length = bytes.readUInt16BE(offset + 2);
      if (length < 2) break;
      if (marker >= 0xc0 && marker <= 0xc3) return { height: bytes.readUInt16BE(offset + 5), width: bytes.readUInt16BE(offset + 7) };
      offset += 2 + length;
    }
  }
  throw new Error(`cannot parse ${contentType} dimensions`);
}

async function fetchPinnedPublicMedia(rawUrl: string): Promise<{ bytes: Buffer; contentType: string | null }> {
  const url = new URL(rawUrl);
  if (url.protocol !== 'https:' || url.username || url.password || url.hash || (url.port && url.port !== '443')) throw new Error(`media ${rawUrl} must be a credential-free HTTPS URL on port 443`);
  if (!ALLOWED_IMAGE_HOSTS.has(url.hostname.toLowerCase())) throw new Error(`media ${rawUrl} is not on The Turndown image host allowlist`);
  const addresses = await lookup(url.hostname, { all: true, verbatim: true });
  if (!addresses.length || addresses.some(({ address }) => !isPublicAddress(address))) throw new Error(`media ${rawUrl} resolves to a non-public address`);
  const selected = addresses[0];
  const pinnedLookup: LookupFunction = (_hostname, options, callback) => {
    if (options.all) callback(null, [selected]);
    else callback(null, selected.address, selected.family);
  };
  return new Promise((resolve, reject) => {
    const request = httpsRequest(url, {
      method: 'GET', servername: url.hostname, lookup: pinnedLookup,
      headers: { 'user-agent': USER_AGENT, accept: 'image/png,image/jpeg,image/webp' }
    }, (response) => {
      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`media ${rawUrl} returned HTTP ${response.statusCode ?? 'unknown'}; redirects are forbidden`));
        return;
      }
      const chunks: Buffer[] = [];
      let size = 0;
      response.on('data', (chunk: Buffer) => {
        size += chunk.length;
        if (size > MAX_MEDIA_BYTES) request.destroy(new Error(`media ${rawUrl} exceeds ${MAX_MEDIA_BYTES} bytes`));
        else chunks.push(chunk);
      });
      response.on('end', () => resolve({
        bytes: Buffer.concat(chunks),
        contentType: String(response.headers['content-type'] ?? '').split(';', 1)[0].trim().toLowerCase() || null
      }));
    });
    request.setTimeout(15_000, () => request.destroy(new Error(`media ${rawUrl} timed out`)));
    request.on('error', reject);
    request.end();
  });
}

async function verifyMedia(media: ContentMedia): Promise<void> {
  const { bytes, contentType } = await fetchPinnedPublicMedia(media.url);
  if (!bytes.length || bytes.length !== media.byteLength) throw new Error(`media ${media.url} byte length mismatch`);
  if (contentType !== media.contentType) throw new Error(`media ${media.url} content type mismatch`);
  const checksum = `sha256:${createHash('sha256').update(bytes).digest('hex')}`;
  if (checksum !== media.checksum) throw new Error(`media ${media.url} checksum mismatch`);
  const dimensions = imageDimensions(bytes, media.contentType);
  if (dimensions.width !== media.width || dimensions.height !== media.height) throw new Error(`media ${media.url} dimension mismatch`);
}

async function verifyHistoricalMedia(state: ActivePayload): Promise<Record<string, unknown>[]> {
  if ((state.media ?? []).length) {
    await Promise.all((state.media ?? []).map(verifyMedia));
    return (state.media ?? []).map(({ url, checksum, byteLength, width, height }) => ({ url, checksum, byteLength, width, height, manifestBound: true }));
  }
  if (state.created_by !== 'migration:0001_content_publication' || !state.payload) throw new Error('historical version has no verifiable media manifest');
  const urls = [...new Set([
    state.payload.heroImage,
    ...(state.content_type === 'hotel' && Array.isArray(state.payload.images) ? state.payload.images : [])
  ].filter((value): value is string => typeof value === 'string'))];
  return Promise.all(urls.map(async (url) => {
    const { bytes, contentType } = await fetchPinnedPublicMedia(url);
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(contentType ?? '')) throw new Error(`legacy media ${url} uses an unsupported content type`);
    const dimensions = imageDimensions(bytes, contentType as ContentMedia['contentType']);
    return { url, checksum: `sha256:${createHash('sha256').update(bytes).digest('hex')}`, byteLength: bytes.length, ...dimensions, manifestBound: false, importedBaselineVerified: true };
  }));
}

export async function verifyInternalLinksBeforeWrite(baseUrl: string, route: string, links: string[]): Promise<void> {
  const paths = [...new Set(links.filter((link) => !link.startsWith('#') && link !== route))];
  await Promise.all(paths.map(async (path) => {
    if (path.includes('\\') || decodeURIComponent(path).includes('\\')) throw new Error(`internal link ${path} contains a backslash`);
    const resolved = new URL(path, baseUrl);
    if (resolved.origin !== baseUrl) throw new Error(`internal link ${path} escapes The Turndown origin`);
    const response = await fetch(resolved, { redirect: 'error', cache: 'no-store', signal: AbortSignal.timeout(15_000), headers: { 'user-agent': USER_AGENT } });
    if (!response.ok) throw new Error(`internal link ${path} returned HTTP ${response.status} before publication`);
  }));
}

async function loadAndPreflight(files: string[], baseUrl: string) {
  const parsed = await Promise.all(files.map(async (file) => ({ file, input: JSON.parse(await readFile(file, 'utf8')) as unknown })));
  const candidates = parsed.map(({ file, input }) => {
    try {
      const item = parseContentEnvelope(input);
      return { item, preflight: preflightContentPayload(item) };
    } catch (error) { throw new Error(`${file}: ${(error as Error).message}`); }
  });
  const identities = candidates.map(({ item }) => `${item.envelope.contentType}:${item.envelope.slug}`);
  if (new Set(identities).size !== identities.length) throw new Error('batch contains a duplicate content identity');
  await Promise.all([
    ...candidates.flatMap(({ item }) => item.envelope.media.map(verifyMedia)),
    ...candidates.map(({ preflight }) => verifyInternalLinksBeforeWrite(baseUrl, preflight.route, preflight.internalLinks))
  ]);
  return candidates;
}

async function transaction<T>(db: PublicationDatabase, action: () => Promise<T>): Promise<T> {
  await db.query('BEGIN');
  try {
    await db.query('SET LOCAL ROLE turndown_content_publisher');
    const result = await action();
    await db.query('COMMIT');
    return result;
  } catch (error) {
    await db.query('ROLLBACK');
    throw error;
  }
}

async function publishOne(db: PublicationDatabase, item: ValidatedContentEnvelope, preflight: ContentPreflight, key: Buffer): Promise<Activation> {
  return transaction(db, async () => {
    const baseValidation = { valid: true, validator: 'turndown-content-envelope-v1', checksum: item.checksum, preflight };
    const challenge = await db.query<{ challenge: string }>(
      'SELECT public.content_validation_challenge($1,$2,$3,$4::jsonb,$5::jsonb,$6::jsonb,$7::jsonb) AS challenge',
      [item.envelope.contentType, item.envelope.slug, item.checksum, JSON.stringify(item.envelope.payload), JSON.stringify(item.envelope.evidence), JSON.stringify(item.envelope.media), JSON.stringify(baseValidation)]
    );
    if (challenge.rows.length !== 1 || !/^[0-9a-f]{64}$/.test(challenge.rows[0].challenge)) throw new Error('database returned an invalid validation challenge');
    const validation = { ...baseValidation, validatorProof: createHmac('sha256', key).update(Buffer.from(challenge.rows[0].challenge, 'hex')).digest('hex') };
    const result = await db.query<Activation>(
      'SELECT * FROM public.publish_content_version($1,$2,$3,$4,$5::jsonb,$6::jsonb,$7::jsonb,$8,$9,$10::jsonb)',
      [item.envelope.contentType, item.envelope.slug, item.versionId, item.checksum, JSON.stringify(item.envelope.payload), JSON.stringify(item.envelope.evidence), JSON.stringify(item.envelope.media), item.envelope.actor, item.envelope.runId, JSON.stringify(validation)]
    );
    if (result.rows.length !== 1) throw new Error('publisher function returned an invalid result');
    return result.rows[0];
  });
}

async function activateHistorical(db: PublicationDatabase, command: Extract<PublisherCommand, { command: 'reactivate' | 'rollback' }>): Promise<Activation> {
  return transaction(db, async () => {
    const result = await db.query<Activation>('SELECT * FROM public.activate_content_version($1,$2,$3,$4,$5,$6)', [command.contentType, command.slug, command.versionId, command.command, command.actor, command.runId]);
    if (result.rows.length !== 1) throw new Error('activation function returned an invalid result');
    return result.rows[0];
  });
}

async function activePayload(db: PublicationDatabase, contentType: ContentType, slug: string): Promise<ActivePayload> {
  return transaction(db, async () => {
    const result = await db.query<ActivePayload>('SELECT * FROM public.read_active_content_payload($1,$2)', [contentType, slug]);
    if (result.rows.length !== 1) throw new Error(`content state unavailable: ${contentType}:${slug}`);
    return result.rows[0];
  });
}

async function recoverPending(db: PublicationDatabase, command: PublisherCommand, contentType: ContentType, slug: string): Promise<void> {
  const pending = await transaction(db, async () => (await db.query<Activation>('SELECT * FROM public.read_pending_content_activation($1,$2)', [contentType, slug])).rows);
  if (!pending.length) return;
  if (pending.length !== 1) throw new Error(`multiple pending activations: ${contentType}:${slug}`);
  await transaction(db, async () => {
    await db.query('SELECT public.rollback_failed_content_verification($1,$2,$3,$4)', [contentType, slug, pending[0].activation_event_id, 'recovered incomplete prior publication attempt']);
  });
  const evidence = await verifyRestored(db, command, contentType, slug, pending[0], pending[0].payload ?? undefined);
  await transaction(db, async () => { await db.query('SELECT public.record_content_restoration_verification($1,$2,$3,$4::jsonb)', [contentType, slug, pending[0].activation_event_id, JSON.stringify(evidence)]); });
}

function decodeHtml(value: string): string {
  return value.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
function htmlText(html: string): string { return decodeHtml(html.replace(/<script\b[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')).trim(); }
function attr(tag: string, name: string): string | null { return tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, 'i'))?.[1] ?? null; }
function tags(html: string, name: string): string[] { return html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) ?? []; }
export function blocksIndexing(value: string): boolean { return /(^|[,;:\s])(noindex|none)([,;\s]|$)/i.test(value); }

function indexPath(type: ContentType, payload: Record<string, unknown>): string {
  if (type === 'hotel') return '/reviews';
  if (type === 'brand') return '/brands';
  if (type === 'destination') return '/destinations';
  return `/${payload.category}`;
}

async function fetchResponse(url: string, expected = 200): Promise<Response> {
  const response = await fetch(url, { redirect: 'error', cache: 'no-store', signal: AbortSignal.timeout(15_000), headers: { 'user-agent': USER_AGENT } });
  if (response.status !== expected) throw new Error(`${url} returned HTTP ${response.status}; expected ${expected}`);
  return response;
}

async function verifySurfaces(command: PublisherCommand, contentType: ContentType, slug: string, versionId: string, checksum: string, payload: Record<string, unknown>, preflight: ContentPreflight): Promise<Record<string, unknown>> {
  const canonical = `${command.baseUrl}${preflight.route}`;
  const pageResponse = await fetchResponse(canonical);
  if (blocksIndexing(pageResponse.headers.get('x-robots-tag') ?? '')) throw new Error('detail page is excluded by X-Robots-Tag');
  const html = await pageResponse.text();
  const text = htmlText(html);
  const label = String(payload.title ?? payload.name ?? '');
  const title = decodeHtml(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '');
  if (!title.includes(label)) throw new Error('detail page title metadata does not include the active label');
  const descriptions = tags(html, 'meta').filter((tag) => attr(tag, 'name')?.toLowerCase() === 'description');
  if (descriptions.length !== 1 || !(attr(descriptions[0], 'content') ?? '').trim()) throw new Error('detail page description metadata is absent or ambiguous');
  const crawlerMeta = tags(html, 'meta').filter((tag) => {
    const name = attr(tag, 'name')?.toLowerCase() ?? '';
    return name === 'robots' || name === 'slurp' || name.endsWith('bot') || name.includes('bot-');
  });
  if (crawlerMeta.some((tag) => blocksIndexing(decodeHtml(attr(tag, 'content') ?? '')))) throw new Error('crawler-specific metadata excludes indexing');
  const canonicalTag = tags(html, 'link').find((tag) => attr(tag, 'rel')?.toLowerCase() === 'canonical');
  if (!canonicalTag || new URL(attr(canonicalTag, 'href') ?? '', command.baseUrl).toString() !== canonical) throw new Error('canonical metadata mismatch');
  const publicVersion = tags(html, 'meta').find((tag) => attr(tag, 'name')?.toLowerCase() === 'content-version');
  const publicChecksum = tags(html, 'meta').find((tag) => attr(tag, 'name')?.toLowerCase() === 'content-checksum');
  if (attr(publicVersion ?? '', 'content') !== versionId || attr(publicChecksum ?? '', 'content') !== checksum) throw new Error('public page does not expose the exact active version and checksum');
  for (const marker of preflight.bodyMarkers) if (!text.includes(marker)) throw new Error(`changed marker absent from detail page: ${marker.slice(0, 80)}`);
  const hrefs = new Set(tags(html, 'a').map((tag) => attr(tag, 'href')).filter((value): value is string => value !== null).flatMap((href) => {
    if (href.startsWith('#')) return [href];
    try { const resolved = new URL(href, canonical); return resolved.origin === command.baseUrl ? [`${resolved.pathname}${resolved.search}${resolved.hash}`] : []; } catch { return []; }
  }));
  for (const link of preflight.internalLinks) if (!link.startsWith('#') && !hrefs.has(link)) throw new Error(`rendered internal link absent: ${link}`);
  const jsonLd = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => JSON.parse(decodeHtml(match[1])) as unknown);
  if (!jsonLd.length || !JSON.stringify(jsonLd).includes(label)) throw new Error('detail page JSON-LD does not bind the active label');

  const index = indexPath(contentType, payload);
  const indexHtml = await (await fetchResponse(`${command.baseUrl}${index}`)).text();
  const indexMatches = [...indexHtml.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)]
    .filter((match) => attr(`<a ${match[1]}>`, 'href') === preflight.route)
    .map((match) => htmlText(match[2]));
  if (indexMatches.length !== 1 || !indexMatches[0].includes(label)) throw new Error('appropriate index lacks exact route/label membership');
  const sitemap = await (await fetchResponse(`${command.baseUrl}/sitemap.xml`)).text();
  const locs = [...sitemap.matchAll(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/gi)].map((match) => new URL(decodeHtml(match[1].trim())).toString());
  if (locs.filter((loc) => loc === canonical).length !== 1) throw new Error('sitemap lacks exact canonical membership');
  if (contentType === 'article') {
    const rss = await (await fetchResponse(`${command.baseUrl}/rss.xml`)).text();
    if (!rss.includes(`<link>${canonical}</link>`) || !rss.includes(`<guid isPermaLink="true">${canonical}</guid>`) || !rss.includes(`<turndown:version>${versionId}</turndown:version>`) || !rss.includes(`<turndown:checksum>${checksum}</turndown:checksum>`)) throw new Error('RSS does not contain the exact active article version and checksum');
  }
  const unchanged = htmlText(await (await fetchResponse(new URL(command.unchangedPath, command.baseUrl).toString())).text());
  if (!unchanged.includes(command.unchangedMarker)) throw new Error('unchanged route semantic marker mismatch');
  return { contentType, slug, versionId, checksum, page: preflight.route, index, sitemap: '/sitemap.xml', unchangedPath: command.unchangedPath, unchangedMarker: command.unchangedMarker };
}

async function verifySurfacesEventually(command: PublisherCommand, contentType: ContentType, slug: string, versionId: string, checksum: string, payload: Record<string, unknown>, preflight: ContentPreflight): Promise<Record<string, unknown>> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= 10; attempt += 1) {
    try {
      return await verifySurfaces(command, contentType, slug, versionId, checksum, payload, preflight);
    } catch (error) {
      lastError = error;
      if (attempt < 10) await new Promise((resolve) => setTimeout(resolve, 1_000));
    }
  }
  throw lastError;
}

async function verifyAbsent(command: PublisherCommand, contentType: ContentType, slug: string, payload: Record<string, unknown>): Promise<void> {
  const route = canonicalContentRoute(contentType, slug, contentType === 'article' ? String(payload.category) : undefined);
  await fetchResponse(`${command.baseUrl}${route}`, 404);
  const indexHtml = await (await fetchResponse(`${command.baseUrl}${indexPath(contentType, payload)}`)).text();
  if (tags(indexHtml, 'a').some((tag) => attr(tag, 'href') === route)) throw new Error('failed first publication remains in its index');
  const sitemap = await (await fetchResponse(`${command.baseUrl}/sitemap.xml`)).text();
  if ([...sitemap.matchAll(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/gi)].some((match) => decodeHtml(match[1].trim()) === `${command.baseUrl}${route}`)) throw new Error('failed first publication remains in sitemap');
  if (contentType === 'article') {
    const rss = await (await fetchResponse(`${command.baseUrl}/rss.xml`)).text();
    if (rss.includes(`${command.baseUrl}${route}`)) throw new Error('failed first publication remains in RSS');
  }
}

async function verifyRestored(db: PublicationDatabase, command: PublisherCommand, contentType: ContentType, slug: string, activation: Activation, failedPayload?: Record<string, unknown>): Promise<Record<string, unknown>> {
  const restored = await activePayload(db, contentType, slug);
  if (!activation.previous_published || !activation.previous_version_id) {
    if (restored.published || restored.version_id !== null) throw new Error('failed activation did not restore unpublished state');
    if (!failedPayload) throw new Error('failed first publication payload is unavailable for public absence verification');
    await verifyAbsent(command, contentType, slug, failedPayload);
    return { restoredPublished: false, routeAbsent: true, activationEventId: activation.activation_event_id };
  }
  if (!restored.published || !restored.payload || !restored.checksum || restored.version_id !== activation.previous_version_id) throw new Error('failed activation did not restore its exact predecessor');
  const mediaEvidence = await verifyHistoricalMedia(restored);
  const preflight = preflightStoredContentPayload(contentType, slug, restored.payload, restored.checksum);
  return { ...(await verifySurfacesEventually(command, contentType, slug, restored.version_id, restored.checksum, restored.payload, preflight)), media: mediaEvidence };
}

async function activateAndVerify(db: PublicationDatabase, command: PublisherCommand, contentType: ContentType, slug: string, activation: Activation, supplied?: { payload: Record<string, unknown>; preflight: ContentPreflight }): Promise<void> {
  let attemptedPayload = supplied?.payload;
  let mediaEvidence: Record<string, unknown>[] | undefined;
  try {
    let payload = attemptedPayload;
    let preflight = supplied?.preflight;
    if (!payload || !preflight) {
      const active = await activePayload(db, contentType, slug);
      if (!active.published || !active.payload || !active.checksum || active.version_id !== activation.version_id || active.checksum !== activation.checksum) throw new Error('activation did not produce the expected active payload');
      payload = active.payload;
      attemptedPayload = payload;
      mediaEvidence = await verifyHistoricalMedia(active);
      preflight = preflightStoredContentPayload(contentType, slug, payload, active.checksum);
      await verifyInternalLinksBeforeWrite(command.baseUrl, preflight.route, preflight.internalLinks);
    }
    const evidence = { ...(await verifySurfacesEventually(command, contentType, slug, activation.version_id, activation.checksum, payload, preflight)), ...(mediaEvidence ? { media: mediaEvidence } : {}) };
    await transaction(db, async () => { await db.query('SELECT public.record_content_verification($1,$2,$3,$4,$5,$6::jsonb)', [contentType, slug, activation.activation_event_id, activation.version_id, activation.checksum, JSON.stringify(evidence)]); });
  } catch (error) {
    await transaction(db, async () => { await db.query('SELECT public.rollback_failed_content_verification($1,$2,$3,$4)', [contentType, slug, activation.activation_event_id, (error as Error).message]); });
    const evidence = await verifyRestored(db, command, contentType, slug, activation, attemptedPayload);
    await transaction(db, async () => { await db.query('SELECT public.record_content_restoration_verification($1,$2,$3,$4::jsonb)', [contentType, slug, activation.activation_event_id, JSON.stringify(evidence)]); });
    throw error;
  }
}

async function defaultCreateDatabase(connectionString: string): Promise<PublicationDatabase> {
  const { Pool } = await import('pg');
  return new Pool({ connectionString, max: 1, statement_timeout: 30_000 });
}

type PublisherDependencies = { createDatabase?: (connectionString: string) => PublicationDatabase | Promise<PublicationDatabase> };

export async function runPublisher(args: string[], env: Record<string, string | undefined> = process.env, dependencies: PublisherDependencies = {}): Promise<void> {
  const command = parsePublisherArgs(args);
  // Every file, schema, checksum, renderer, internal-link, and media check completes before DB construction.
  const candidates = command.command === 'publish' ? await loadAndPreflight(command.files, command.baseUrl) : [];
  const keyHex = env.CONTENT_VALIDATION_HMAC_KEY ?? '';
  if (command.command === 'publish' && !/^[0-9a-f]{64}$/.test(keyHex)) throw new Error('CONTENT_VALIDATION_HMAC_KEY must be 64 lowercase hex characters');
  const connectionString = env.CONTENT_PUBLISHER_DATABASE_URL;
  if (!connectionString) throw new Error('CONTENT_PUBLISHER_DATABASE_URL is required; DATABASE_URL is intentionally not accepted');
  const db = await (dependencies.createDatabase ?? defaultCreateDatabase)(connectionString);
  try {
    if (command.command === 'publish') {
      const key = Buffer.from(keyHex, 'hex');
      for (const { item, preflight } of candidates) {
        await recoverPending(db, command, item.envelope.contentType, item.envelope.slug);
        const activation = await publishOne(db, item, preflight, key);
        await activateAndVerify(db, command, item.envelope.contentType, item.envelope.slug, activation, { payload: item.envelope.payload, preflight });
        console.log(`${activation.changed ? 'published' : 'already active'}: ${item.envelope.contentType}:${item.envelope.slug} ${activation.version_id} ${activation.checksum}`);
      }
      return;
    }
    await recoverPending(db, command, command.contentType, command.slug);
    const activation = await activateHistorical(db, command);
    await activateAndVerify(db, command, command.contentType, command.slug, activation);
    console.log(`${activation.changed ? command.command : 'already active'}: ${command.contentType}:${command.slug} ${activation.version_id} ${activation.checksum}`);
  } finally { await db.end(); }
}

if (process.env.NODE_ENV !== 'test') {
  runPublisher(process.argv.slice(2)).catch((error) => {
    console.error((error as Error).message);
    process.exitCode = 1;
  });
}
