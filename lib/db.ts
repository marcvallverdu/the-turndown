import { unstable_cache } from 'next/cache';
import { Pool } from 'pg';
import type { NewsletterArticle, NewsletterSendLog } from '@/lib/newsletter';

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Schema and publication authority are installed by the migration operator, never by the runtime role.
const ensureSchema = async () => {};

const activeHotels = `
  SELECT ci.legacy_id AS id, ci.slug, cv.id::text AS content_version, cv.payload_checksum AS content_checksum,
    cv.payload->>'name' AS name, cv.payload->>'brand' AS brand, cv.payload->>'brandSlug' AS brand_slug,
    cv.payload->>'location' AS location, cv.payload->>'country' AS country, cv.payload->>'countrySlug' AS country_slug,
    cv.payload->>'region' AS region, cv.payload->>'regionSlug' AS region_slug,
    (cv.payload->>'latitude')::double precision AS latitude, (cv.payload->>'longitude')::double precision AS longitude,
    cv.payload->>'priceRange' AS price_range, (cv.payload->>'priceFrom')::integer AS price_from,
    (cv.payload->>'priceTo')::integer AS price_to, cv.payload->>'currency' AS currency, cv.payload->>'style' AS style,
    CASE WHEN cv.created_by='migration:0001_content_publication' THEN cv.legacy_snapshot->>'best_for' ELSE (cv.payload->'bestFor')::text END AS best_for,
    cv.payload->>'heroImage' AS hero_image,
    CASE WHEN cv.created_by='migration:0001_content_publication' THEN cv.legacy_snapshot->>'images' ELSE (cv.payload->'images')::text END AS images,
    cv.payload->>'website' AS website, cv.payload->>'bookingUrl' AS booking_url, cv.payload->>'tagline' AS tagline,
    cv.payload->>'reviewIntro' AS review_intro, cv.payload->>'reviewArrival' AS review_arrival,
    cv.payload->>'reviewRoom' AS review_room, cv.payload->>'reviewService' AS review_service,
    cv.payload->>'reviewFood' AS review_food, cv.payload->>'reviewDetails' AS review_details,
    cv.payload->>'reviewVerdict' AS review_verdict, cv.payload->>'verdictBestFor' AS verdict_best_for,
    cv.payload->>'verdictSkipIf' AS verdict_skip_if, cv.payload->>'verdictStandout' AS verdict_standout,
    (cv.payload->>'ratingOverall')::double precision AS rating_overall, (cv.payload->>'ratingRoom')::double precision AS rating_room,
    (cv.payload->>'ratingService')::double precision AS rating_service, (cv.payload->>'ratingFood')::double precision AS rating_food,
    (cv.payload->>'ratingValue')::double precision AS rating_value, (cv.payload->>'ratingLocation')::double precision AS rating_location,
    1::integer AS published, (cv.payload->>'featured')::boolean::integer AS featured,
    (cv.payload->>'createdAt')::timestamptz AS created_at, (cv.payload->>'updatedAt')::timestamptz AS updated_at
  FROM public.content_items ci
  INNER JOIN public.content_versions cv
    ON cv.id=ci.active_version_id AND cv.item_id=ci.id AND cv.content_type=ci.content_type
  WHERE ci.content_type='hotel'`;

const activeBrands = `
  SELECT ci.legacy_id AS id,ci.slug,cv.id::text AS content_version,cv.payload_checksum AS content_checksum,cv.payload->>'name' AS name,cv.payload->>'tagline' AS tagline,
    cv.payload->>'heroImage' AS hero_image,cv.payload->>'contentMd' AS content_md,
    (cv.payload->>'hotelCount')::integer AS hotel_count,(cv.payload->>'foundedYear')::integer AS founded_year,
    cv.payload->>'parentCompany' AS parent_company,cv.payload->>'bestProperty' AS best_property,cv.payload->>'website' AS website,
    1::integer AS published,(cv.payload->>'createdAt')::timestamptz AS created_at,(cv.payload->>'updatedAt')::timestamptz AS updated_at
  FROM public.content_items ci INNER JOIN public.content_versions cv
    ON cv.id=ci.active_version_id AND cv.item_id=ci.id AND cv.content_type=ci.content_type
  WHERE ci.content_type='brand'`;

const activeDestinations = `
  SELECT ci.legacy_id AS id,ci.slug,cv.id::text AS content_version,cv.payload_checksum AS content_checksum,cv.payload->>'name' AS name,cv.payload->>'country' AS country,
    cv.payload->>'region' AS region,cv.payload->>'heroImage' AS hero_image,cv.payload->>'introMd' AS intro_md,
    cv.payload->>'bestTime' AS best_time,cv.payload->>'contentMd' AS content_md,1::integer AS published,
    (cv.payload->>'createdAt')::timestamptz AS created_at,(cv.payload->>'updatedAt')::timestamptz AS updated_at
  FROM public.content_items ci INNER JOIN public.content_versions cv
    ON cv.id=ci.active_version_id AND cv.item_id=ci.id AND cv.content_type=ci.content_type
  WHERE ci.content_type='destination'`;

const activeArticles = `
  SELECT ci.legacy_id AS id,ci.slug,cv.id::text AS content_version,cv.payload_checksum AS content_checksum,cv.payload->>'title' AS title,cv.payload->>'subtitle' AS subtitle,
    cv.payload->>'category' AS category,cv.payload->>'heroImage' AS hero_image,cv.payload->>'contentMd' AS content_md,
    CASE WHEN cv.created_by='migration:0001_content_publication' THEN cv.legacy_snapshot->>'hotels_mentioned' ELSE (cv.payload->'hotelsMentioned')::text END AS hotels_mentioned,1::integer AS published,
    (cv.payload->>'featured')::boolean::integer AS featured,(cv.payload->>'createdAt')::timestamptz AS created_at,
    (cv.payload->>'updatedAt')::timestamptz AS updated_at
  FROM public.content_items ci INNER JOIN public.content_versions cv
    ON cv.id=ci.active_version_id AND cv.item_id=ci.id AND cv.content_type=ci.content_type
  WHERE ci.content_type='article' AND cv.payload->>'category' IN ('the-details','versus','new-openings')`;

export type HotelFilters = {
  brandSlug?: string;
  destinationSlug?: string;
  minPrice?: number;
  maxPrice?: number;
};

type DestinationScope = {
  clause: string;
  values: string[];
};

const locationScopedDestinationPatterns: Record<string, string[]> = {
  'amalfi-coast': ['%Amalfi%', '%Ravello%', '%Positano%'],
  bali: ['%Bali%', '%Ubud%', '%Uluwatu%'],
  bangkok: ['%Bangkok%'],
  'bora-bora': ['%Bora Bora%'],
  capri: ['%Capri%'],
  dubai: ['%Dubai%'],
  'french-riviera': ['%French Riviera%', '%Saint-Tropez%', '%St-Tropez%', '%Cap-Ferrat%', '%Cannes%', '%Nice, France%'],
  'italian-riviera': ['%Portofino%', '%Liguria%', '%Italian Riviera%'],
  kyoto: ['%Kyoto%'],
  'lake-como': ['%Lake Como%', '%Lago di Como%', '%Como%'],
  london: ['%London%'],
  mallorca: ['%Mallorca%'],
  marrakech: ['%Marrakech%'],
  'new-york': ['%New York%'],
  paris: ['%Paris%'],
  santorini: ['%Santorini%'],
  sicily: ['%Sicily%', '%Taormina%', '%Noto%', '%Palermo%'],
  singapore: ['%Singapore%'],
  tokyo: ['%Tokyo%']
};

const regionScopedDestinations: Record<string, string> = {
  caribbean: 'caribbean'
};

function destinationScope(destination: { name: string; country?: string; slug: string }, startIndex = 1): DestinationScope {
  const locationPatterns = locationScopedDestinationPatterns[destination.slug];
  if (locationPatterns?.length) {
    return {
      clause: `(${locationPatterns.map((_, index) => `location ILIKE $${startIndex + index}`).join(' OR ')})`,
      values: locationPatterns
    };
  }

  const regionSlug = regionScopedDestinations[destination.slug];
  if (regionSlug) {
    return {
      clause: `region_slug = $${startIndex}`,
      values: [regionSlug]
    };
  }

  const country = destination.country || destination.name;
  const countrySlug = country.toLowerCase().replace(/\s+/g, `-`);
  return {
    clause: `(country = $${startIndex} OR country_slug = $${startIndex + 1})`,
    values: [country, countrySlug]
  };
}

async function fetchDestinationBySlug(slug: string) {
  await ensureSchema();
  const result = await pool.query(`WITH destinations AS (${activeDestinations}) SELECT * FROM destinations WHERE slug = $1`, [slug]);
  return result.rows[0] as { name: string; country?: string } | undefined;
}

async function fetchGetHotelBySlug(slug: string) {
  await ensureSchema();
  const result = await pool.query(`WITH hotels AS (${activeHotels}) SELECT * FROM hotels WHERE slug = $1`, [slug]);
  return result.rows[0] as any | undefined;
}

async function fetchGetAllHotels(filters?: HotelFilters) {
  await ensureSchema();
  let query = `WITH hotels AS (${activeHotels}) SELECT * FROM hotels WHERE true`;
  const params: any[] = [];

  if (filters?.brandSlug) {
    params.push(filters.brandSlug);
    query += ` AND brand_slug = $${params.length}`;
  }

  if (filters?.destinationSlug) {
    const destination = await fetchDestinationBySlug(filters.destinationSlug);
    if (destination) {
      const scope = destinationScope(destination as { name: string; country?: string; slug: string }, params.length + 1);
      params.push(...scope.values);
      query += ` AND ${scope.clause}`;
    }
  }

  if (filters?.minPrice) {
    params.push(filters.minPrice);
    query += ` AND price_to >= $${params.length}`;
  }

  if (filters?.maxPrice) {
    params.push(filters.maxPrice);
    query += ` AND price_from <= $${params.length}`;
  }

  query += ` ORDER BY featured DESC, created_at DESC`;
  const result = await pool.query(query, params);
  return result.rows as any[];
}

async function fetchGetLatestHotels(limit = 4) {
  await ensureSchema();
  const result = await pool.query(
    `WITH hotels AS (${activeHotels}) SELECT * FROM hotels ORDER BY created_at DESC LIMIT $1`,
    [limit]
  );
  return result.rows as any[];
}

async function fetchGetFeaturedHotels(limit = 1) {
  await ensureSchema();
  const result = await pool.query(
    `WITH hotels AS (${activeHotels}) SELECT * FROM hotels WHERE featured = 1 ORDER BY created_at DESC LIMIT $1`,
    [limit]
  );
  return result.rows as any[];
}

async function fetchGetHotelsByBrand(brandSlug: string) {
  await ensureSchema();
  const result = await pool.query(
    `WITH hotels AS (${activeHotels}) SELECT * FROM hotels WHERE brand_slug = $1 ORDER BY created_at DESC`,
    [brandSlug]
  );
  return result.rows as any[];
}

async function fetchGetHotelsByRegion(regionSlug: string, limit = 3) {
  await ensureSchema();
  const result = await pool.query(
    `WITH hotels AS (${activeHotels}) SELECT * FROM hotels WHERE region_slug = $1 ORDER BY created_at DESC LIMIT $2`,
    [regionSlug, limit]
  );
  return result.rows as any[];
}

async function fetchGetHotelsBySlugs(slugs: string[]) {
  await ensureSchema();
  if (!slugs.length) return [];
  const result = await pool.query(
    `WITH hotels AS (${activeHotels}) SELECT * FROM hotels
     WHERE slug = ANY($1::text[])
     ORDER BY array_position($1::text[], slug)`,
    [slugs]
  );
  return result.rows as any[];
}

async function fetchGetAllBrands() {
  await ensureSchema();
  const result = await pool.query(`WITH brands AS (${activeBrands}) SELECT * FROM brands ORDER BY name`);
  return result.rows as any[];
}

async function fetchGetBrandBySlug(slug: string) {
  await ensureSchema();
  const result = await pool.query(`WITH brands AS (${activeBrands}) SELECT * FROM brands WHERE slug = $1`, [slug]);
  return result.rows[0] as any | undefined;
}

async function fetchGetAllDestinations() {
  await ensureSchema();
  const result = await pool.query(`WITH destinations AS (${activeDestinations}) SELECT * FROM destinations ORDER BY name`);
  return result.rows as any[];
}

async function fetchGetDestinationBySlug(slug: string) {
  await ensureSchema();
  const result = await pool.query(`WITH destinations AS (${activeDestinations}) SELECT * FROM destinations WHERE slug = $1`, [slug]);
  return result.rows[0] as any | undefined;
}

async function fetchGetHotelsForDestination(destination: { name: string; country?: string; slug: string }) {
  await ensureSchema();
  const scope = destinationScope(destination);
  const result = await pool.query(
    `WITH hotels AS (${activeHotels}) SELECT * FROM hotels WHERE ${scope.clause} ORDER BY created_at DESC`,
    scope.values
  );
  return result.rows as any[];
}

async function fetchGetArticlesByCategory(category: string) {
  await ensureSchema();
  const result = await pool.query(
    `WITH articles AS (${activeArticles}) SELECT * FROM articles WHERE category = $1 ORDER BY created_at DESC`,
    [category]
  );
  return result.rows as any[];
}

async function fetchGetArticleBySlug(slug: string) {
  await ensureSchema();
  const result = await pool.query(`WITH articles AS (${activeArticles}) SELECT * FROM articles WHERE slug = $1`, [slug]);
  return result.rows[0] as any | undefined;
}

async function fetchGetArticleBySlugAndCategory(slug: string, category: string) {
  await ensureSchema();
  const result = await pool.query(
    `WITH articles AS (${activeArticles}) SELECT * FROM articles WHERE slug = $1 AND category = $2`,
    [slug, category]
  );
  return result.rows[0] as any | undefined;
}

async function fetchGetLatestArticleByCategory(category: string) {
  await ensureSchema();
  const result = await pool.query(
    `WITH articles AS (${activeArticles}) SELECT * FROM articles WHERE category = $1 ORDER BY created_at DESC LIMIT 1`,
    [category]
  );
  return result.rows[0] as any | undefined;
}

async function fetchGetArticlesForSitemap() {
  await ensureSchema();
  const result = await pool.query(
    `WITH articles AS (${activeArticles}) SELECT slug,category,created_at,updated_at FROM articles`
  );
  return result.rows as { slug: string; category: string; created_at: string; updated_at: string | null }[];
}


// Publication verification must converge quickly after an atomic pointer change.
const cacheOptions = { revalidate: 1 } as const;

export const getHotelBySlug = unstable_cache(fetchGetHotelBySlug, ['getHotelBySlug'], cacheOptions);
export const getAllHotels = unstable_cache(fetchGetAllHotels, ['getAllHotels'], cacheOptions);
export const getLatestHotels = unstable_cache(fetchGetLatestHotels, ['getLatestHotels'], cacheOptions);
export const getFeaturedHotels = unstable_cache(fetchGetFeaturedHotels, ['getFeaturedHotels'], cacheOptions);
export const getHotelsByBrand = unstable_cache(fetchGetHotelsByBrand, ['getHotelsByBrand'], cacheOptions);
export const getHotelsByRegion = unstable_cache(fetchGetHotelsByRegion, ['getHotelsByRegion'], cacheOptions);
export const getHotelsBySlugs = unstable_cache(fetchGetHotelsBySlugs, ['getHotelsBySlugs'], cacheOptions);
export const getAllBrands = unstable_cache(fetchGetAllBrands, ['getAllBrands'], cacheOptions);
export const getBrandBySlug = unstable_cache(fetchGetBrandBySlug, ['getBrandBySlug'], cacheOptions);
export const getAllDestinations = unstable_cache(fetchGetAllDestinations, ['getAllDestinations'], cacheOptions);
export const getDestinationBySlug = unstable_cache(fetchGetDestinationBySlug, ['getDestinationBySlug'], cacheOptions);
export const getHotelsForDestination = unstable_cache(fetchGetHotelsForDestination, ['getHotelsForDestination'], cacheOptions);
export const getArticlesByCategory = unstable_cache(fetchGetArticlesByCategory, ['getArticlesByCategory'], cacheOptions);
export const getArticleBySlug = unstable_cache(fetchGetArticleBySlug, ['getArticleBySlug'], cacheOptions);
export const getArticleBySlugAndCategory = unstable_cache(fetchGetArticleBySlugAndCategory, ['getArticleBySlugAndCategory'], cacheOptions);
export const getLatestArticleByCategory = unstable_cache(fetchGetLatestArticleByCategory, ['getLatestArticleByCategory'], cacheOptions);
export const getArticlesForSitemap = unstable_cache(fetchGetArticlesForSitemap, ['getArticlesForSitemap'], cacheOptions);

export type NewsletterSubscriber = {
  id: number;
  email: string;
  confirmed: number;
  resend_contact_id?: string | null;
  resend_synced_at?: string | null;
};

export async function insertNewsletterSubscriber(email: string) {
  await ensureSchema();
  const result = await pool.query(
    `INSERT INTO newsletter_subscribers (email, confirmed, updated_at) VALUES ($1, 1, NOW())
     ON CONFLICT (email) DO UPDATE SET confirmed = 1, updated_at = NOW()
     RETURNING id, email, confirmed, resend_contact_id, resend_synced_at`,
    [email]
  );
  return result.rows[0] as NewsletterSubscriber;
}

export async function markNewsletterSubscriberSynced(email: string, resendContactId?: string | null) {
  await ensureSchema();
  await pool.query(
    `UPDATE newsletter_subscribers
     SET resend_contact_id = COALESCE($2, resend_contact_id), resend_synced_at = NOW(), updated_at = NOW()
     WHERE email = $1`,
    [email, resendContactId]
  );
}

export async function getConfirmedNewsletterSubscribers() {
  await ensureSchema();
  const result = await pool.query(
    `SELECT id, email, confirmed, resend_contact_id, resend_synced_at
     FROM newsletter_subscribers
     WHERE confirmed = 1
     ORDER BY created_at ASC`
  );
  return result.rows as NewsletterSubscriber[];
}

export async function getRecentNewsletterArticles(limit = 12) {
  await ensureSchema();
  const result = await pool.query(
    `WITH articles AS (${activeArticles}) SELECT slug,title,subtitle,category,created_at,content_version,content_checksum
     FROM articles
     ORDER BY created_at DESC
     LIMIT $1`,
    [limit]
  );
  return result.rows as Array<NewsletterArticle & { content_version: string; content_checksum: string }>;
}

export async function getNewsletterSendLogs() {
  await ensureSchema();
  const result = await pool.query(
    `SELECT article_slug, sent_at
     FROM newsletter_sends
     ORDER BY sent_at DESC`
  );
  return result.rows as NewsletterSendLog[];
}

export async function recordNewsletterSend(
  issueKey: string,
  articles: NewsletterArticle[],
  recipientCount: number,
  providerMessageIds: string[]
) {
  await ensureSchema();
  for (const article of articles) {
    await pool.query(
      `INSERT INTO newsletter_sends (issue_key, article_slug, recipient_count, provider_message_ids)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (issue_key, article_slug) DO NOTHING`,
      [issueKey, article.slug, recipientCount, JSON.stringify(providerMessageIds)]
    );
  }
}

export default pool;
