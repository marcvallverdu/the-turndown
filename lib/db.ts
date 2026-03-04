import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { schema } from '@/lib/schema';

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'theturndown.db');
const db = new Database(dbPath);

db.pragma('foreign_keys = ON');
db.exec(schema);

export default db;

export type HotelFilters = {
  brandSlug?: string;
  destinationSlug?: string;
  minPrice?: number;
  maxPrice?: number;
};

function destinationFilterClause(destinationSlug?: string) {
  if (!destinationSlug) return { clause: '', params: [] as any[] };
  const destination = db
    .prepare('SELECT * FROM destinations WHERE slug = ? AND published = 1')
    .get(destinationSlug) as { name: string; country?: string } | undefined;
  if (!destination) return { clause: '', params: [] as any[] };

  const name = destination.name;
  const country = destination.country;
  if (['Tokyo', 'Paris', 'Bora Bora'].includes(name)) {
    return { clause: ' AND location LIKE ?', params: [`%${name}%`] };
  }

  return {
    clause: ' AND (country = ? OR country_slug = ?)',
    params: [name, (country || name).toLowerCase().replace(/\s+/g, '-')]
  };
}

export function getHotelBySlug(slug: string) {
  return db
    .prepare('SELECT * FROM hotels WHERE slug = ? AND published = 1')
    .get(slug) as any | undefined;
}

export function getAllHotels(filters?: HotelFilters) {
  let query = 'SELECT * FROM hotels WHERE published = 1';
  const params: any[] = [];

  if (filters?.brandSlug) {
    query += ' AND brand_slug = ?';
    params.push(filters.brandSlug);
  }

  const destinationClause = destinationFilterClause(filters?.destinationSlug);
  query += destinationClause.clause;
  params.push(...destinationClause.params);

  if (filters?.minPrice) {
    query += ' AND price_to >= ?';
    params.push(filters.minPrice);
  }

  if (filters?.maxPrice) {
    query += ' AND price_from <= ?';
    params.push(filters.maxPrice);
  }

  query += ' ORDER BY featured DESC, created_at DESC';
  return db.prepare(query).all(...params) as any[];
}

export function getLatestHotels(limit = 4) {
  return db
    .prepare('SELECT * FROM hotels WHERE published = 1 ORDER BY created_at DESC LIMIT ?')
    .all(limit) as any[];
}

export function getFeaturedHotels(limit = 1) {
  return db
    .prepare('SELECT * FROM hotels WHERE published = 1 AND featured = 1 ORDER BY created_at DESC LIMIT ?')
    .all(limit) as any[];
}

export function getHotelsByBrand(brandSlug: string) {
  return db
    .prepare('SELECT * FROM hotels WHERE brand_slug = ? AND published = 1 ORDER BY created_at DESC')
    .all(brandSlug) as any[];
}

export function getHotelsByRegion(regionSlug: string, limit = 3) {
  return db
    .prepare('SELECT * FROM hotels WHERE region_slug = ? AND published = 1 ORDER BY created_at DESC LIMIT ?')
    .all(regionSlug, limit) as any[];
}

export function getAllBrands() {
  return db.prepare('SELECT * FROM brands WHERE published = 1 ORDER BY name').all() as any[];
}

export function getBrandBySlug(slug: string) {
  return db.prepare('SELECT * FROM brands WHERE slug = ? AND published = 1').get(slug) as any | undefined;
}

export function getAllDestinations() {
  return db.prepare('SELECT * FROM destinations WHERE published = 1 ORDER BY name').all() as any[];
}

export function getDestinationBySlug(slug: string) {
  return db
    .prepare('SELECT * FROM destinations WHERE slug = ? AND published = 1')
    .get(slug) as any | undefined;
}

export function getHotelsForDestination(destination: { name: string; country?: string; slug: string }) {
  if (['Tokyo', 'Paris', 'Bora Bora'].includes(destination.name)) {
    return db
      .prepare('SELECT * FROM hotels WHERE location LIKE ? AND published = 1 ORDER BY created_at DESC')
      .all(`%${destination.name}%`) as any[];
  }

  const country = destination.country || destination.name;
  return db
    .prepare('SELECT * FROM hotels WHERE country = ? AND published = 1 ORDER BY created_at DESC')
    .all(country) as any[];
}

export function getArticlesByCategory(category: string) {
  return db
    .prepare('SELECT * FROM articles WHERE category = ? AND published = 1 ORDER BY created_at DESC')
    .all(category) as any[];
}

export function getArticleBySlug(slug: string) {
  return db
    .prepare('SELECT * FROM articles WHERE slug = ? AND published = 1')
    .get(slug) as any | undefined;
}

export function getLatestArticleByCategory(category: string) {
  return db
    .prepare('SELECT * FROM articles WHERE category = ? AND published = 1 ORDER BY created_at DESC LIMIT 1')
    .get(category) as any | undefined;
}
