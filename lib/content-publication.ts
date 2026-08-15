import { createHash } from 'node:crypto';
import { inspectRenderedMarkdown, MARKDOWN_RENDERER_ID } from './markdown';

export const CONTENT_TYPES = ['hotel', 'brand', 'destination', 'article'] as const;
export const ARTICLE_CATEGORIES = ['the-details', 'versus', 'new-openings'] as const;
export type ContentType = (typeof CONTENT_TYPES)[number];
export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

export type ContentSource = { id: string; url: string; checkedAt: string };
export type ContentClaim = { claim: string; sourceIds: string[] };
export type ContentMedia = {
  url: string;
  checksum: string;
  provenance: string;
  contentType: 'image/png' | 'image/jpeg' | 'image/webp';
  width: number;
  height: number;
  byteLength: number;
  retrievedAt: string;
};

export type ContentEvidence = {
  sources: ContentSource[];
  claims: ContentClaim[];
  hardGates: { truth: true; userValue: true; informationGain: true; internalLinks: true; editorialSameness: true };
  revisionCount: number;
};

export type ContentEnvelope = {
  schemaVersion: 1;
  contentType: ContentType;
  slug: string;
  payload: Record<string, unknown>;
  evidence: ContentEvidence;
  media: ContentMedia[];
  actor: string;
  runId: string;
};

export type ValidatedContentEnvelope = {
  envelope: ContentEnvelope;
  canonical: string;
  checksum: string;
  versionId: string;
};

export type ContentPreflight = {
  checksum: string;
  renderer: typeof MARKDOWN_RENDERER_ID;
  route: string;
  internalLinks: string[];
  bodyMarkers: string[];
};

const ROOT_KEYS = ['schemaVersion', 'contentType', 'slug', 'payload', 'evidence', 'media', 'actor', 'runId'] as const;
const EVIDENCE_KEYS = ['sources', 'claims', 'hardGates', 'revisionCount'] as const;
const GATE_KEYS = ['truth', 'userValue', 'informationGain', 'internalLinks', 'editorialSameness'] as const;
const MEDIA_KEYS = ['url', 'checksum', 'provenance', 'contentType', 'width', 'height', 'byteLength', 'retrievedAt'] as const;

const HOTEL_KEYS = [
  'name', 'brand', 'brandSlug', 'location', 'country', 'countrySlug', 'region', 'regionSlug', 'latitude', 'longitude',
  'priceRange', 'priceFrom', 'priceTo', 'currency', 'style', 'bestFor', 'heroImage', 'images', 'website', 'bookingUrl',
  'tagline', 'reviewIntro', 'reviewArrival', 'reviewRoom', 'reviewService', 'reviewFood', 'reviewDetails', 'reviewVerdict',
  'verdictBestFor', 'verdictSkipIf', 'verdictStandout', 'ratingOverall', 'ratingRoom', 'ratingService', 'ratingFood',
  'ratingValue', 'ratingLocation', 'featured', 'createdAt', 'updatedAt'
] as const;
const BRAND_KEYS = ['name', 'tagline', 'heroImage', 'contentMd', 'hotelCount', 'foundedYear', 'parentCompany', 'bestProperty', 'website', 'createdAt', 'updatedAt'] as const;
const DESTINATION_KEYS = ['name', 'country', 'region', 'heroImage', 'introMd', 'bestTime', 'contentMd', 'createdAt', 'updatedAt'] as const;
const ARTICLE_KEYS = ['title', 'subtitle', 'category', 'heroImage', 'contentMd', 'hotelsMentioned', 'featured', 'createdAt', 'updatedAt'] as const;

function fail(path: string, message: string): never {
  throw new Error(`${path}: ${message}`);
}

function strictObject(value: unknown, path: string, keys: readonly string[]): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail(path, 'must be an object');
  const result = value as Record<string, unknown>;
  const unknown = Object.keys(result).filter((key) => !keys.includes(key));
  if (unknown.length) fail(path, `unknown field(s): ${unknown.join(', ')}`);
  const missing = keys.filter((key) => !(key in result));
  if (missing.length) fail(path, `missing field(s): ${missing.join(', ')}`);
  return result;
}

function text(value: unknown, path: string, max: number): string {
  if (typeof value !== 'string' || value.length === 0 || value.length > max || value !== value.trim()) {
    fail(path, `must be a non-empty trimmed string of at most ${max} characters`);
  }
  return value;
}

function nullableText(value: unknown, path: string, max: number): string | null {
  return value === null ? null : text(value, path, max);
}

function boolean(value: unknown, path: string): boolean {
  if (typeof value !== 'boolean') fail(path, 'must be a boolean');
  return value;
}

function integer(value: unknown, path: string, min: number, max: number): number {
  if (!Number.isSafeInteger(value) || (value as number) < min || (value as number) > max) fail(path, `must be an integer from ${min} to ${max}`);
  return value as number;
}

function nullableInteger(value: unknown, path: string, min: number, max: number): number | null {
  return value === null ? null : integer(value, path, min, max);
}

function nullableNumber(value: unknown, path: string, min: number, max: number): number | null {
  if (value === null) return null;
  if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max) fail(path, `must be a number from ${min} to ${max}`);
  if (Number(value.toFixed(6)) !== value) fail(path, 'must use at most 6 decimal places');
  return value;
}

function strings(value: unknown, path: string, maxItems: number, maxLength: number): string[] {
  if (!Array.isArray(value) || value.length > maxItems) fail(path, `must be an array of at most ${maxItems} strings`);
  const result = value.map((entry, index) => text(entry, `${path}[${index}]`, maxLength));
  if (new Set(result).size !== result.length) fail(path, 'contains a duplicate value');
  return result;
}

function canonicalHttpsUrl(value: unknown, path: string): string {
  const raw = text(value, path, 2048);
  let url: URL;
  try { url = new URL(raw); } catch { fail(path, 'must be an absolute URL'); }
  if (url.protocol !== 'https:' || url.username || url.password || url.hash) fail(path, 'must be a credential-free HTTPS URL without a fragment');
  if (url.toString() !== raw) fail(path, 'must be a canonical URL');
  return raw;
}

function nullableUrl(value: unknown, path: string): string | null {
  return value === null ? null : canonicalHttpsUrl(value, path);
}

function timestamp(value: unknown, path: string): string {
  const raw = text(value, path, 64);
  const parsed = new Date(raw);
  if (!Number.isFinite(parsed.getTime()) || parsed.toISOString() !== raw) fail(path, 'must be a canonical UTC ISO timestamp');
  return raw;
}

function safeMarkdown(value: unknown, path: string): string | null {
  const markdown = nullableText(value, path, 500_000);
  if (markdown && (markdown.includes('\\') || /\]\(\s*(?:javascript|data|file):/i.test(markdown) || /\]\(\s*\/\//.test(markdown))) {
    fail(path, 'contains an unsafe, escaping, or backslash link');
  }
  return markdown;
}

function validateHotel(raw: Record<string, unknown>): Record<string, unknown> {
  strictObject(raw, 'payload', HOTEL_KEYS);
  const result: Record<string, unknown> = {
    name: text(raw.name, 'payload.name', 300),
    brand: nullableText(raw.brand, 'payload.brand', 200),
    brandSlug: nullableText(raw.brandSlug, 'payload.brandSlug', 160),
    location: nullableText(raw.location, 'payload.location', 300),
    country: nullableText(raw.country, 'payload.country', 160),
    countrySlug: nullableText(raw.countrySlug, 'payload.countrySlug', 160),
    region: nullableText(raw.region, 'payload.region', 160),
    regionSlug: nullableText(raw.regionSlug, 'payload.regionSlug', 160),
    latitude: nullableNumber(raw.latitude, 'payload.latitude', -90, 90),
    longitude: nullableNumber(raw.longitude, 'payload.longitude', -180, 180),
    priceRange: nullableText(raw.priceRange, 'payload.priceRange', 100),
    priceFrom: nullableInteger(raw.priceFrom, 'payload.priceFrom', 0, 10_000_000),
    priceTo: nullableInteger(raw.priceTo, 'payload.priceTo', 0, 10_000_000),
    currency: text(raw.currency, 'payload.currency', 3),
    style: nullableText(raw.style, 'payload.style', 300),
    bestFor: strings(raw.bestFor, 'payload.bestFor', 50, 200),
    heroImage: nullableUrl(raw.heroImage, 'payload.heroImage'),
    images: Array.isArray(raw.images) ? raw.images.map((entry, index) => canonicalHttpsUrl(entry, `payload.images[${index}]`)) : fail('payload.images', 'must be an array'),
    website: nullableUrl(raw.website, 'payload.website'),
    bookingUrl: nullableUrl(raw.bookingUrl, 'payload.bookingUrl'),
    tagline: nullableText(raw.tagline, 'payload.tagline', 2_000),
    reviewIntro: nullableText(raw.reviewIntro, 'payload.reviewIntro', 100_000),
    reviewArrival: nullableText(raw.reviewArrival, 'payload.reviewArrival', 100_000),
    reviewRoom: nullableText(raw.reviewRoom, 'payload.reviewRoom', 100_000),
    reviewService: nullableText(raw.reviewService, 'payload.reviewService', 100_000),
    reviewFood: nullableText(raw.reviewFood, 'payload.reviewFood', 100_000),
    reviewDetails: nullableText(raw.reviewDetails, 'payload.reviewDetails', 100_000),
    reviewVerdict: nullableText(raw.reviewVerdict, 'payload.reviewVerdict', 100_000),
    verdictBestFor: nullableText(raw.verdictBestFor, 'payload.verdictBestFor', 10_000),
    verdictSkipIf: nullableText(raw.verdictSkipIf, 'payload.verdictSkipIf', 10_000),
    verdictStandout: nullableText(raw.verdictStandout, 'payload.verdictStandout', 10_000),
    ratingOverall: nullableNumber(raw.ratingOverall, 'payload.ratingOverall', 0, 10),
    ratingRoom: nullableNumber(raw.ratingRoom, 'payload.ratingRoom', 0, 10),
    ratingService: nullableNumber(raw.ratingService, 'payload.ratingService', 0, 10),
    ratingFood: nullableNumber(raw.ratingFood, 'payload.ratingFood', 0, 10),
    ratingValue: nullableNumber(raw.ratingValue, 'payload.ratingValue', 0, 10),
    ratingLocation: nullableNumber(raw.ratingLocation, 'payload.ratingLocation', 0, 10),
    featured: boolean(raw.featured, 'payload.featured'),
    createdAt: timestamp(raw.createdAt, 'payload.createdAt'),
    updatedAt: timestamp(raw.updatedAt, 'payload.updatedAt')
  };
  if ((result.priceFrom as number | null) !== null && (result.priceTo as number | null) !== null && (result.priceFrom as number) > (result.priceTo as number)) fail('payload.priceFrom', 'must not exceed priceTo');
  return result;
}

function validateBrand(raw: Record<string, unknown>): Record<string, unknown> {
  strictObject(raw, 'payload', BRAND_KEYS);
  return {
    name: text(raw.name, 'payload.name', 300), tagline: nullableText(raw.tagline, 'payload.tagline', 2_000),
    heroImage: nullableUrl(raw.heroImage, 'payload.heroImage'), contentMd: safeMarkdown(raw.contentMd, 'payload.contentMd'),
    hotelCount: integer(raw.hotelCount, 'payload.hotelCount', 0, 1_000_000), foundedYear: nullableInteger(raw.foundedYear, 'payload.foundedYear', 1000, 3000),
    parentCompany: nullableText(raw.parentCompany, 'payload.parentCompany', 300), bestProperty: nullableText(raw.bestProperty, 'payload.bestProperty', 300),
    website: nullableUrl(raw.website, 'payload.website'), createdAt: timestamp(raw.createdAt, 'payload.createdAt'), updatedAt: timestamp(raw.updatedAt, 'payload.updatedAt')
  };
}

function validateDestination(raw: Record<string, unknown>): Record<string, unknown> {
  strictObject(raw, 'payload', DESTINATION_KEYS);
  return {
    name: text(raw.name, 'payload.name', 300), country: nullableText(raw.country, 'payload.country', 200), region: nullableText(raw.region, 'payload.region', 200),
    heroImage: nullableUrl(raw.heroImage, 'payload.heroImage'), introMd: safeMarkdown(raw.introMd, 'payload.introMd'), bestTime: nullableText(raw.bestTime, 'payload.bestTime', 2_000),
    contentMd: safeMarkdown(raw.contentMd, 'payload.contentMd'), createdAt: timestamp(raw.createdAt, 'payload.createdAt'), updatedAt: timestamp(raw.updatedAt, 'payload.updatedAt')
  };
}

function validateArticle(raw: Record<string, unknown>): Record<string, unknown> {
  strictObject(raw, 'payload', ARTICLE_KEYS);
  const category = text(raw.category, 'payload.category', 32);
  if (!ARTICLE_CATEGORIES.includes(category as ArticleCategory)) fail('payload.category', `must be one of ${ARTICLE_CATEGORIES.join(', ')}`);
  return {
    title: text(raw.title, 'payload.title', 300), subtitle: nullableText(raw.subtitle, 'payload.subtitle', 2_000), category,
    heroImage: nullableUrl(raw.heroImage, 'payload.heroImage'), contentMd: safeMarkdown(raw.contentMd, 'payload.contentMd'),
    hotelsMentioned: strings(raw.hotelsMentioned, 'payload.hotelsMentioned', 100, 160), featured: boolean(raw.featured, 'payload.featured'),
    createdAt: timestamp(raw.createdAt, 'payload.createdAt'), updatedAt: timestamp(raw.updatedAt, 'payload.updatedAt')
  };
}

function validateEvidence(value: unknown): ContentEvidence {
  const raw = strictObject(value, 'evidence', EVIDENCE_KEYS);
  if (!Array.isArray(raw.sources) || raw.sources.length < 1 || raw.sources.length > 100) fail('evidence.sources', 'must contain 1 to 100 sources');
  const sources = raw.sources.map((entry, index) => {
    const source = strictObject(entry, `evidence.sources[${index}]`, ['id', 'url', 'checkedAt']);
    return { id: text(source.id, `evidence.sources[${index}].id`, 100), url: canonicalHttpsUrl(source.url, `evidence.sources[${index}].url`), checkedAt: timestamp(source.checkedAt, `evidence.sources[${index}].checkedAt`) };
  });
  if (new Set(sources.map(({ id }) => id)).size !== sources.length || new Set(sources.map(({ url }) => url)).size !== sources.length) fail('evidence.sources', 'contains a duplicate source ID or URL');
  const sourceIds = new Set(sources.map(({ id }) => id));
  if (!Array.isArray(raw.claims) || raw.claims.length < 1 || raw.claims.length > 200) fail('evidence.claims', 'must contain 1 to 200 claims');
  const claims = raw.claims.map((entry, index) => {
    const claim = strictObject(entry, `evidence.claims[${index}]`, ['claim', 'sourceIds']);
    const ids = strings(claim.sourceIds, `evidence.claims[${index}].sourceIds`, 20, 100);
    if (ids.length === 0) fail(`evidence.claims[${index}].sourceIds`, 'must not be empty');
    for (const id of ids) if (!sourceIds.has(id)) fail(`evidence.claims[${index}].sourceIds`, `references unknown source ID ${id}`);
    return { claim: text(claim.claim, `evidence.claims[${index}].claim`, 2_000), sourceIds: ids };
  });
  const rawGates = strictObject(raw.hardGates, 'evidence.hardGates', GATE_KEYS);
  for (const gate of GATE_KEYS) if (rawGates[gate] !== true) fail(`evidence.hardGates.${gate}`, 'must equal true');
  return { sources, claims, hardGates: { truth: true, userValue: true, informationGain: true, internalLinks: true, editorialSameness: true }, revisionCount: integer(raw.revisionCount, 'evidence.revisionCount', 0, 2) };
}

function validateMedia(value: unknown): ContentMedia[] {
  if (!Array.isArray(value) || value.length > 100) fail('media', 'must be an array of at most 100 entries');
  const media = value.map((entry, index) => {
    const raw = strictObject(entry, `media[${index}]`, MEDIA_KEYS);
    const checksum = text(raw.checksum, `media[${index}].checksum`, 71);
    if (!/^sha256:[0-9a-f]{64}$/.test(checksum)) fail(`media[${index}].checksum`, 'must use sha256:<64 lowercase hex>');
    const contentType = text(raw.contentType, `media[${index}].contentType`, 80);
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(contentType)) fail(`media[${index}].contentType`, 'uses an unsupported image type');
    return {
      url: canonicalHttpsUrl(raw.url, `media[${index}].url`), checksum,
      provenance: text(raw.provenance, `media[${index}].provenance`, 2_000), contentType: contentType as ContentMedia['contentType'],
      width: integer(raw.width, `media[${index}].width`, 1, 20_000), height: integer(raw.height, `media[${index}].height`, 1, 20_000),
      byteLength: integer(raw.byteLength, `media[${index}].byteLength`, 1, 20_000_000), retrievedAt: timestamp(raw.retrievedAt, `media[${index}].retrievedAt`)
    };
  });
  if (new Set(media.map(({ url }) => url)).size !== media.length) fail('media', 'contains a duplicate URL');
  return media;
}

function jsonbKeyOrder(left: string, right: string): number {
  return Buffer.byteLength(left, 'utf8') - Buffer.byteLength(right, 'utf8') || Buffer.from(left).compare(Buffer.from(right));
}

function canonicalJson(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(', ')}]`;
  const record = value as Record<string, unknown>;
  return `{${Object.keys(record).sort(jsonbKeyOrder).map((key) => `${JSON.stringify(key)}: ${canonicalJson(record[key])}`).join(', ')}}`;
}

export function canonicalizeContentEnvelope(envelope: ContentEnvelope): string {
  return canonicalJson({ schemaVersion: envelope.schemaVersion, contentType: envelope.contentType, slug: envelope.slug, payload: envelope.payload });
}

export function versionIdFromChecksum(checksum: string): string {
  if (!/^sha256:[0-9a-f]{64}$/.test(checksum)) fail('checksum', 'must use sha256:<64 lowercase hex>');
  const hex = checksum.slice(7, 39).split('');
  hex[12] = '5';
  hex[16] = ((Number.parseInt(hex[16], 16) & 0x3) | 0x8).toString(16);
  return `${hex.slice(0, 8).join('')}-${hex.slice(8, 12).join('')}-${hex.slice(12, 16).join('')}-${hex.slice(16, 20).join('')}-${hex.slice(20, 32).join('')}`;
}

export function canonicalContentRoute(contentType: string, slug: string, category?: string): string {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) fail('slug', 'must be a lowercase kebab-case route segment');
  if (contentType === 'hotel') return `/reviews/${slug}`;
  if (contentType === 'brand') return `/brands/${slug}`;
  if (contentType === 'destination') return `/destinations/${slug}`;
  if (contentType === 'article') {
    if (!ARTICLE_CATEGORIES.includes(category as ArticleCategory)) fail('category', `must be one of ${ARTICLE_CATEGORIES.join(', ')}`);
    return `/${category}/${slug}`;
  }
  return fail('contentType', `must be one of ${CONTENT_TYPES.join(', ')}`);
}

export function parseContentEnvelope(input: unknown): ValidatedContentEnvelope {
  const root = strictObject(input, 'envelope', ROOT_KEYS);
  if (root.schemaVersion !== 1) fail('schemaVersion', 'must equal 1');
  const contentType = text(root.contentType, 'contentType', 32) as ContentType;
  if (!CONTENT_TYPES.includes(contentType)) fail('contentType', `must be one of ${CONTENT_TYPES.join(', ')}`);
  const slug = text(root.slug, 'slug', 160);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) fail('slug', 'must be a lowercase kebab-case route segment');
  if (!root.payload || typeof root.payload !== 'object' || Array.isArray(root.payload)) fail('payload', 'must be an object');
  const payload = contentType === 'hotel' ? validateHotel(root.payload as Record<string, unknown>)
    : contentType === 'brand' ? validateBrand(root.payload as Record<string, unknown>)
      : contentType === 'destination' ? validateDestination(root.payload as Record<string, unknown>)
        : validateArticle(root.payload as Record<string, unknown>);
  const evidence = validateEvidence(root.evidence);
  const media = validateMedia(root.media);
  const markdown = ['contentMd', 'introMd'].map((key) => payload[key]).filter((value): value is string => typeof value === 'string').join('\n\n');
  const markdownImages = inspectRenderedMarkdown(markdown).images;
  const referencedMedia = [payload.heroImage, ...(contentType === 'hotel' ? payload.images as string[] : []), ...markdownImages].filter((url): url is string => typeof url === 'string');
  if (new Set(referencedMedia).size !== referencedMedia.length) fail('payload', 'contains a duplicate media URL');
  if (referencedMedia.length !== media.length || referencedMedia.some((url) => media.filter((entry) => entry.url === url).length !== 1)) {
    fail('media', 'manifest must bind every referenced image exactly once and contain no unreferenced entries');
  }
  const envelope: ContentEnvelope = {
    schemaVersion: 1, contentType, slug, payload, evidence, media,
    actor: text(root.actor, 'actor', 200), runId: text(root.runId, 'runId', 200)
  };
  const canonical = canonicalizeContentEnvelope(envelope);
  const checksum = `sha256:${createHash('sha256').update(canonical).digest('hex')}`;
  return { envelope, canonical, checksum, versionId: versionIdFromChecksum(checksum) };
}

export function preflightContentPayload(item: ValidatedContentEnvelope): ContentPreflight {
  const canonical = canonicalizeContentEnvelope(item.envelope);
  if (canonical !== item.canonical) fail('preflight', 'canonical payload changed after validation');
  const checksum = `sha256:${createHash('sha256').update(canonical).digest('hex')}`;
  if (checksum !== item.checksum) fail('preflight', 'checksum does not bind the exact payload');
  const category = item.envelope.contentType === 'article' ? item.envelope.payload.category as string : undefined;
  const route = canonicalContentRoute(item.envelope.contentType, item.envelope.slug, category);
  const markdown = ['contentMd', 'introMd'].map((key) => item.envelope.payload[key]).filter((value): value is string => typeof value === 'string').join('\n\n');
  const rendered = inspectRenderedMarkdown(markdown);
  const routeUrl = new URL(route, 'https://theturndown.co');
  const internalLinks: string[] = [];
  for (const href of rendered.links) {
    let decoded: string;
    try { decoded = decodeURIComponent(href); } catch { fail('payload', 'contains a malformed encoded link'); }
    if (href.includes('\\') || decoded.includes('\\') || href.startsWith('//') || /\s|[<>"']/.test(href)) fail('payload', 'contains a malformed, escaping, or cross-origin link');
    if (href.startsWith('#')) fail('payload', 'fragment-only internal links are not supported because their targets cannot be verified independently');
    let resolved: URL;
    try { resolved = new URL(href, routeUrl); } catch { fail('payload', 'contains an invalid rendered link'); }
    if (resolved.hash) fail('payload', 'fragment links are not supported because their targets cannot be verified independently');
    if (resolved.origin === routeUrl.origin) internalLinks.push(`${resolved.pathname}${resolved.search}${resolved.hash}`);
  }
  const fallback = String(item.envelope.payload.title ?? item.envelope.payload.name ?? '');
  const renderedText = rendered.text || fallback;
  if (!renderedText) fail('preflight', 'renderer produced no visible content marker');
  return {
    checksum, renderer: MARKDOWN_RENDERER_ID, route,
    internalLinks: [...new Set(internalLinks)].sort(),
    bodyMarkers: [...new Set([fallback, renderedText.slice(0, 160), renderedText.slice(-160)].filter(Boolean))]
  };
}

export function preflightStoredContentPayload(contentType: ContentType, slug: string, payload: Record<string, unknown>, checksum: string): ContentPreflight {
  const envelope = { schemaVersion: 1 as const, contentType, slug, payload };
  const canonical = canonicalJson(envelope);
  const actualChecksum = `sha256:${createHash('sha256').update(canonical).digest('hex')}`;
  if (actualChecksum !== checksum) fail('preflight', 'stored checksum does not bind the active payload');
  return preflightContentPayload({
    envelope: { ...envelope, evidence: {} as ContentEvidence, media: [], actor: 'stored', runId: 'stored' },
    canonical,
    checksum,
    versionId: versionIdFromChecksum(checksum)
  });
}
