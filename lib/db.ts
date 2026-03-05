import { Pool } from 'pg';
import { schema } from '@/lib/schema';

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

let schemaReady: Promise<unknown> | null = null;

const ensureSchema = async () => {
  if (!schemaReady) {
    schemaReady = pool.query(schema);
  }
  await schemaReady;
};

export type HotelFilters = {
  brandSlug?: string;
  destinationSlug?: string;
  minPrice?: number;
  maxPrice?: number;
};

async function fetchDestinationBySlug(slug: string) {
  await ensureSchema();
  const result = await pool.query(`SELECT * FROM destinations WHERE slug = $1 AND published = 1`, [slug]);
  return result.rows[0] as { name: string; country?: string } | undefined;
}

export async function getHotelBySlug(slug: string) {
  await ensureSchema();
  const result = await pool.query(`SELECT * FROM hotels WHERE slug = $1 AND published = 1`, [slug]);
  return result.rows[0] as any | undefined;
}

export async function getAllHotels(filters?: HotelFilters) {
  await ensureSchema();
  let query = `SELECT * FROM hotels WHERE published = 1`;
  const params: any[] = [];

  if (filters?.brandSlug) {
    params.push(filters.brandSlug);
    query += ` AND brand_slug = $${params.length}`;
  }

  if (filters?.destinationSlug) {
    const destination = await fetchDestinationBySlug(filters.destinationSlug);
    if (destination) {
      if ([`Tokyo`, `Paris`, `Bora Bora`].includes(destination.name)) {
        params.push(`%${destination.name}%`);
        query += ` AND location LIKE $${params.length}`;
      } else {
        const country = destination.country || destination.name;
        const countrySlug = country.toLowerCase().replace(/\s+/g, `-`);
        params.push(destination.name, countrySlug);
        query += ` AND (country = $${params.length - 1} OR country_slug = $${params.length})`;
      }
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

export async function getLatestHotels(limit = 4) {
  await ensureSchema();
  const result = await pool.query(
    `SELECT * FROM hotels WHERE published = 1 ORDER BY created_at DESC LIMIT $1`,
    [limit]
  );
  return result.rows as any[];
}

export async function getFeaturedHotels(limit = 1) {
  await ensureSchema();
  const result = await pool.query(
    `SELECT * FROM hotels WHERE published = 1 AND featured = 1 ORDER BY created_at DESC LIMIT $1`,
    [limit]
  );
  return result.rows as any[];
}

export async function getHotelsByBrand(brandSlug: string) {
  await ensureSchema();
  const result = await pool.query(
    `SELECT * FROM hotels WHERE brand_slug = $1 AND published = 1 ORDER BY created_at DESC`,
    [brandSlug]
  );
  return result.rows as any[];
}

export async function getHotelsByRegion(regionSlug: string, limit = 3) {
  await ensureSchema();
  const result = await pool.query(
    `SELECT * FROM hotels WHERE region_slug = $1 AND published = 1 ORDER BY created_at DESC LIMIT $2`,
    [regionSlug, limit]
  );
  return result.rows as any[];
}

export async function getAllBrands() {
  await ensureSchema();
  const result = await pool.query(`SELECT * FROM brands WHERE published = 1 ORDER BY name`);
  return result.rows as any[];
}

export async function getBrandBySlug(slug: string) {
  await ensureSchema();
  const result = await pool.query(`SELECT * FROM brands WHERE slug = $1 AND published = 1`, [slug]);
  return result.rows[0] as any | undefined;
}

export async function getAllDestinations() {
  await ensureSchema();
  const result = await pool.query(`SELECT * FROM destinations WHERE published = 1 ORDER BY name`);
  return result.rows as any[];
}

export async function getDestinationBySlug(slug: string) {
  await ensureSchema();
  const result = await pool.query(`SELECT * FROM destinations WHERE slug = $1 AND published = 1`, [slug]);
  return result.rows[0] as any | undefined;
}

export async function getHotelsForDestination(destination: { name: string; country?: string; slug: string }) {
  await ensureSchema();
  if ([`Tokyo`, `Paris`, `Bora Bora`].includes(destination.name)) {
    const result = await pool.query(
      `SELECT * FROM hotels WHERE location LIKE $1 AND published = 1 ORDER BY created_at DESC`,
      [`%${destination.name}%`]
    );
    return result.rows as any[];
  }

  const country = destination.country || destination.name;
  const result = await pool.query(
    `SELECT * FROM hotels WHERE country = $1 AND published = 1 ORDER BY created_at DESC`,
    [country]
  );
  return result.rows as any[];
}

export async function getArticlesByCategory(category: string) {
  await ensureSchema();
  const result = await pool.query(
    `SELECT * FROM articles WHERE category = $1 AND published = 1 ORDER BY created_at DESC`,
    [category]
  );
  return result.rows as any[];
}

export async function getArticleBySlug(slug: string) {
  await ensureSchema();
  const result = await pool.query(`SELECT * FROM articles WHERE slug = $1 AND published = 1`, [slug]);
  return result.rows[0] as any | undefined;
}

export async function getLatestArticleByCategory(category: string) {
  await ensureSchema();
  const result = await pool.query(
    `SELECT * FROM articles WHERE category = $1 AND published = 1 ORDER BY created_at DESC LIMIT 1`,
    [category]
  );
  return result.rows[0] as any | undefined;
}

export async function getArticlesForSitemap() {
  await ensureSchema();
  const result = await pool.query(`SELECT slug, category FROM articles WHERE published = 1`);
  return result.rows as { slug: string; category: string }[];
}

export async function insertNewsletterSubscriber(email: string) {
  await ensureSchema();
  await pool.query(
    `INSERT INTO newsletter_subscribers (email, confirmed) VALUES ($1, 1)
     ON CONFLICT (email) DO NOTHING`,
    [email]
  );
}

export default pool;
