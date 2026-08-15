import assert from 'node:assert/strict';
import {
  canonicalContentRoute,
  canonicalizeContentEnvelope,
  parseContentEnvelope,
  preflightContentPayload,
  versionIdFromChecksum
} from '../lib/content-publication';
import { renderMarkdown } from '../lib/markdown';
import { serializeJsonLd } from '../components/JsonLd';

const evidence = {
  sources: [{ id: 'official', url: 'https://example.com/source', checkedAt: '2026-08-15T10:00:00.000Z' }],
  claims: [{ claim: 'The property opened in 2026.', sourceIds: ['official'] }],
  hardGates: { truth: true, userValue: true, informationGain: true, internalLinks: true, editorialSameness: true },
  revisionCount: 1
};

const article = {
  schemaVersion: 1,
  contentType: 'article',
  slug: 'a-new-opening',
  payload: {
    title: 'A New Opening',
    subtitle: 'What travelers should know.',
    category: 'new-openings',
    heroImage: 'https://cdn.example.com/a-new-opening.jpg',
    contentMd: '## First look\n\nRead [the comparison](../versus/a-versus-b) and [another note](next-note).',
    hotelsMentioned: [],
    featured: false,
    createdAt: '2026-08-15T10:00:00.000Z',
    updatedAt: '2026-08-15T10:00:00.000Z'
  },
  evidence,
  media: [{
    url: 'https://cdn.example.com/a-new-opening.jpg',
    checksum: `sha256:${'a'.repeat(64)}`,
    provenance: 'generated:test/run-1',
    contentType: 'image/jpeg',
    width: 1200,
    height: 630,
    byteLength: 12345,
    retrievedAt: '2026-08-15T10:00:00.000Z'
  }],
  actor: 'content-loop',
  runId: 'run-2026-08-15'
};

const first = parseContentEnvelope(article);
const reordered = parseContentEnvelope({
  runId: article.runId,
  actor: article.actor,
  media: article.media,
  evidence: article.evidence,
  payload: { ...article.payload },
  slug: article.slug,
  contentType: article.contentType,
  schemaVersion: article.schemaVersion
});
assert.match(first.checksum, /^sha256:[0-9a-f]{64}$/);
assert.equal(first.versionId, versionIdFromChecksum(first.checksum));
assert.equal(first.canonical, canonicalizeContentEnvelope(first.envelope));
assert.equal(reordered.checksum, first.checksum, 'root key order must not affect canonical identity');
assert.equal(
  parseContentEnvelope({ ...article, actor: 'other', runId: 'other-run' }).checksum,
  first.checksum,
  'operational metadata must not alter content identity'
);

assert.equal(canonicalContentRoute('hotel', 'ritz-paris'), '/reviews/ritz-paris');
assert.equal(canonicalContentRoute('brand', 'aman'), '/brands/aman');
assert.equal(canonicalContentRoute('destination', 'paris'), '/destinations/paris');
assert.equal(canonicalContentRoute('article', 'story', 'the-details'), '/the-details/story');
assert.equal(canonicalContentRoute('article', 'story', 'versus'), '/versus/story');
assert.equal(canonicalContentRoute('article', 'story', 'new-openings'), '/new-openings/story');
assert.throws(() => canonicalContentRoute('article', 'story', 'reviews'), /category/i);

const image = (url: string) => ({ url, checksum: `sha256:${'b'.repeat(64)}`, provenance: 'test fixture', contentType: 'image/jpeg', width: 1200, height: 630, byteLength: 42, retrievedAt: '2026-08-15T10:00:00.000Z' });
const common = { schemaVersion: 1, evidence, actor: 'content-loop', runId: 'route-contracts' };
const brand = { ...common, contentType: 'brand', slug: 'fixture-brand', payload: { name: 'Fixture Brand', tagline: 'A clear point of view.', heroImage: 'https://cdn.example.com/brand.jpg', contentMd: '## Brand story\n\nUseful detail.', hotelCount: 1, foundedYear: 1999, parentCompany: null, bestProperty: null, website: 'https://example.com/', createdAt: '2026-08-15T10:00:00.000Z', updatedAt: '2026-08-15T10:00:00.000Z' }, media: [image('https://cdn.example.com/brand.jpg')] };
const destination = { ...common, contentType: 'destination', slug: 'fixture-place', payload: { name: 'Fixture Place', country: 'France', region: 'Europe', heroImage: 'https://cdn.example.com/place.jpg', introMd: 'A useful destination introduction.', bestTime: 'Spring', contentMd: '## Where to stay\n\nUseful detail.', createdAt: '2026-08-15T10:00:00.000Z', updatedAt: '2026-08-15T10:00:00.000Z' }, media: [image('https://cdn.example.com/place.jpg')] };
const hotel = { ...common, contentType: 'hotel', slug: 'fixture-hotel', payload: { name: 'Fixture Hotel', brand: 'Fixture Brand', brandSlug: 'fixture-brand', location: 'London', country: 'United Kingdom', countrySlug: 'united-kingdom', region: 'Europe', regionSlug: 'europe', latitude: 51.5, longitude: -0.1, priceRange: '$$$$', priceFrom: 500, priceTo: 900, currency: 'GBP', style: 'Classic', bestFor: ['weekends'], heroImage: 'https://cdn.example.com/hotel.jpg', images: [], website: 'https://example.com/', bookingUrl: null, tagline: 'A fixture worth booking.', reviewIntro: 'Introduction.', reviewArrival: 'Arrival.', reviewRoom: 'Room.', reviewService: 'Service.', reviewFood: 'Food.', reviewDetails: 'Details.', reviewVerdict: 'Verdict.', verdictBestFor: null, verdictSkipIf: null, verdictStandout: null, ratingOverall: 9, ratingRoom: 9, ratingService: 9, ratingFood: 8, ratingValue: 8, ratingLocation: 9, featured: false, createdAt: '2026-08-15T10:00:00.000Z', updatedAt: '2026-08-15T10:00:00.000Z' }, media: [image('https://cdn.example.com/hotel.jpg')] };
assert.equal(parseContentEnvelope(brand).envelope.contentType, 'brand');
assert.equal(parseContentEnvelope(destination).envelope.contentType, 'destination');
assert.equal(parseContentEnvelope(hotel).envelope.contentType, 'hotel');
assert.throws(() => parseContentEnvelope({ ...brand, payload: { ...brand.payload, tagline: 42 } }), /tagline/i);
assert.throws(() => parseContentEnvelope({ ...destination, payload: { ...destination.payload, introMd: 42 } }), /introMd/i);
assert.throws(() => parseContentEnvelope({ ...hotel, payload: { ...hotel.payload, reviewVerdict: 42 } }), /reviewVerdict/i);

const preflight = preflightContentPayload(first);
assert.equal(preflight.renderer, 'the-turndown-marked-gfm-breaks-sanitized-v1');
assert.deepEqual(preflight.internalLinks, ['/new-openings/next-note', '/versus/a-versus-b']);
assert.match(preflight.bodyMarkers.join(' '), /First look/);

const xss = parseContentEnvelope({
  ...article,
  payload: {
    ...article.payload,
    contentMd: '<script>alert(1)</script> Safe.'
  },
  media: article.media
});
const xssPreflight = preflightContentPayload(xss);
assert.equal(xssPreflight.renderer, 'the-turndown-marked-gfm-breaks-sanitized-v1');
const xssHtml = renderMarkdown(xss.envelope.payload.contentMd as string);
assert.doesNotMatch(xssHtml, /<script|onerror|javascript:/i);
assert.match(xssHtml, /Safe/);
assert.doesNotMatch(renderMarkdown('<img src="https://example.com/x.jpg" onerror="alert(2)">'), /<img|onerror/i);
assert.throws(() => parseContentEnvelope({ ...hotel, payload: { ...hotel.payload, latitude: 0.0000001 } }), /decimal/i);
assert.throws(() => preflightContentPayload(parseContentEnvelope({ ...article, payload: { ...article.payload, contentMd: 'See [section](#missing).' } })), /fragment/i);
assert.equal(serializeJsonLd({ name: '</script><script>alert(1)</script>' }).includes('</script>'), false);
assert.match(serializeJsonLd({ name: '<safe>' }), /\\u003c/);

for (const candidate of [
  { ...article, unexpected: true },
  { ...article, contentType: 'guide' },
  { ...article, slug: 'Bad Slug' },
  { ...article, payload: { ...article.payload, category: 'reviews' } },
  { ...article, payload: { ...article.payload, subtitle: 42 } },
  { ...article, payload: { ...article.payload, contentMd: 42 } },
  { ...article, payload: { ...article.payload, heroImage: 'http://example.com/unsafe.jpg' }, media: [] },
  { ...article, payload: { ...article.payload, unexpected: true } },
  { ...article, evidence: { ...evidence, claims: [{ claim: 'Unsupported', sourceIds: ['missing'] }] } },
  { ...article, evidence: { ...evidence, hardGates: { ...evidence.hardGates, truth: false } } }
]) {
  assert.throws(() => parseContentEnvelope(candidate));
}

assert.throws(
  () => parseContentEnvelope({ ...article, payload: { ...article.payload, contentMd: 'See [bad](/\\evil.example/x).' } }),
  /escaping|backslash|link/i
);

assert.throws(
  () => parseContentEnvelope({ ...article, payload: { ...article.payload, heroImage: 'https://cdn.example.com/image.jpg' } }),
  /media|manifest/i
);

console.log('content publication deterministic tests passed');
