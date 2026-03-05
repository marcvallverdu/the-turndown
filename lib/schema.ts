export const schema = `
CREATE TABLE IF NOT EXISTS hotels (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  brand TEXT,
  brand_slug TEXT,
  location TEXT,
  country TEXT,
  country_slug TEXT,
  region TEXT,
  region_slug TEXT,
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  price_range TEXT,
  price_from INTEGER,
  price_to INTEGER,
  currency TEXT DEFAULT 'USD',
  style TEXT,
  best_for TEXT,
  hero_image TEXT,
  images TEXT,
  website TEXT,
  booking_url TEXT,
  tagline TEXT,
  review_intro TEXT,
  review_arrival TEXT,
  review_room TEXT,
  review_service TEXT,
  review_food TEXT,
  review_details TEXT,
  review_verdict TEXT,
  verdict_best_for TEXT,
  verdict_skip_if TEXT,
  verdict_standout TEXT,
  rating_overall DOUBLE PRECISION,
  rating_room DOUBLE PRECISION,
  rating_service DOUBLE PRECISION,
  rating_food DOUBLE PRECISION,
  rating_value DOUBLE PRECISION,
  rating_location DOUBLE PRECISION,
  published INTEGER DEFAULT 0,
  featured INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS brands (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  tagline TEXT,
  hero_image TEXT,
  content_md TEXT,
  hotel_count INTEGER DEFAULT 0,
  founded_year INTEGER,
  parent_company TEXT,
  best_property TEXT,
  website TEXT,
  published INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS destinations (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  country TEXT,
  region TEXT,
  hero_image TEXT,
  intro_md TEXT,
  best_time TEXT,
  content_md TEXT,
  published INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  category TEXT NOT NULL,
  hero_image TEXT,
  content_md TEXT,
  hotels_mentioned TEXT,
  published INTEGER DEFAULT 0,
  featured INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  confirmed INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_hotels_brand ON hotels(brand_slug);
CREATE INDEX IF NOT EXISTS idx_hotels_country ON hotels(country_slug);
CREATE INDEX IF NOT EXISTS idx_hotels_region ON hotels(region_slug);
CREATE INDEX IF NOT EXISTS idx_hotels_featured ON hotels(featured);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
`;
