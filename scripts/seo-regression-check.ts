import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (path: string) => readFileSync(join(root, path), 'utf8');
const assert = (condition: unknown, message: string) => {
  if (!condition) throw new Error(message);
};

const routes = [
  'app/page.tsx',
  'app/reviews/page.tsx',
  'app/reviews/[slug]/page.tsx',
  'app/brands/page.tsx',
  'app/brands/[slug]/page.tsx',
  'app/destinations/page.tsx',
  'app/destinations/[slug]/page.tsx',
  'app/the-details/page.tsx',
  'app/the-details/[slug]/page.tsx',
  'app/versus/page.tsx',
  'app/versus/[slug]/page.tsx',
  'app/new-openings/page.tsx',
  'app/new-openings/[slug]/page.tsx'
];

for (const route of routes) {
  assert(!read(route).includes('force-dynamic'), `${route} should not force no-store rendering`);
}

const layout = read('app/layout.tsx');
assert(layout.includes('DEFAULT_OG_IMAGE'), 'layout should expose a default OG image');

const reviewsIndex = read('app/reviews/page.tsx');
assert(reviewsIndex.includes('generateMetadata'), 'reviews index should generate metadata from search params');
assert(reviewsIndex.includes('index: false') && reviewsIndex.includes('follow: true'), 'filtered review URLs should be noindex, follow');

const reviewDetail = read('app/reviews/[slug]/page.tsx');
assert(!reviewDetail.includes('aggregateRating'), 'review detail schema should not use fake aggregateRating');
assert(reviewDetail.includes("'@type': `Review`") || reviewDetail.includes("'@type': 'Review'"), 'review detail should emit editorial Review schema');
assert(reviewDetail.includes('datePublished') && reviewDetail.includes('dateModified'), 'review schema should include dates');
assert(reviewDetail.includes('rel="noopener noreferrer"'), 'official external link should use noopener noreferrer');
assert(reviewDetail.includes('rel="sponsored nofollow noopener noreferrer"'), 'booking link should use sponsored nofollow noopener noreferrer');

for (const [route, category] of [
  ['app/the-details/[slug]/page.tsx', 'the-details'],
  ['app/versus/[slug]/page.tsx', 'versus'],
  ['app/new-openings/[slug]/page.tsx', 'new-openings']
] as const) {
  const source = read(route);
  assert(source.includes('<JsonLd'), `${route} should render JSON-LD`);
  assert(source.includes('articleJsonLd'), `${route} should emit Article schema`);
  assert(source.includes(category), `${route} should keep the expected category`);
}

const dbHelpers = read('lib/db.ts');
for (const scopedDestination of ['lake-como', 'santorini', 'bali', 'italian-riviera', 'caribbean']) {
  assert(dbHelpers.includes(scopedDestination), `destination hotel queries should scope ${scopedDestination} before rendering best-hotel hubs`);
}
assert(dbHelpers.includes('location ILIKE'), 'subdestination hotel queries should match hotel location, not only country');
assert(dbHelpers.includes('region_slug ='), 'regional destination hotel queries should support region-scoped hubs');

const seoHelpers = read('lib/seo.ts');
assert(seoHelpers.includes("'@type': 'Article'"), 'articleJsonLd helper should emit Article schema');
assert(seoHelpers.includes('datePublished') && seoHelpers.includes('dateModified'), 'articleJsonLd helper should include Article dates');

const breadcrumbs = read('components/Breadcrumbs.tsx');
assert(breadcrumbs.includes('breadcrumbJsonLd'), 'Breadcrumbs component should emit BreadcrumbList JSON-LD');
assert(seoHelpers.includes('BreadcrumbList'), 'breadcrumb helper should emit BreadcrumbList schema');

const brandDetail = read('app/brands/[slug]/page.tsx');
assert(brandDetail.includes('rel="noopener noreferrer"'), 'brand external link should use noopener noreferrer');
assert(brandDetail.includes('getHotelsByBrand') && brandDetail.includes('index: false'), 'brand detail pages with no reviewed hotels should be noindex');

const destinationDetail = read('app/destinations/[slug]/page.tsx');
assert(destinationDetail.includes('getHotelsForDestination') && destinationDetail.includes('index: false'), 'destination detail pages with no reviewed hotels should be noindex');

const sitemap = read('app/sitemap.ts');
assert(!sitemap.includes('const now = new Date()'), 'sitemap should not stamp every hub URL with the current request time');
assert(sitemap.includes('brandsWithReviewedHotels') && sitemap.includes('destinationsWithReviewedHotels'), 'sitemap should exclude brand and destination pages without reviewed hotels');

console.log('SEO regression checks passed');
