# The Turndown — Build Task

## What This Is
Ultra-luxury hotel editorial site. Think Monocle or Cereal Magazine meets hotel reviews. 
Domain: theturndown.co

## Reference Codebases
- **BestStaycations** (`~/clawd/beststaycations/`) — SQLite + Next.js, property schema, similar architecture. USE THIS AS PRIMARY BASE.
- **PolarTourist** (`~/projects/polartourist/`) — Next.js + JSON data, blog structure, newsletter popup.

## Tech Stack
- Next.js 15+ (App Router, server components)
- SQLite via better-sqlite3 (like beststaycations)
- Tailwind CSS
- TypeScript
- No external DB dependency — everything in local SQLite

## Brand & Design

### Colors
- Background: warm ivory `#FAF8F5`
- Text: deep charcoal `#1A1A1A`  
- Accent: muted gold `#B8976A`
- Secondary: soft sage `#8A9A7B`
- Borders/subtle: `#E8E4DF`

### Typography
- Headlines: Cormorant Garant (serif, from Google Fonts)
- Body: Inter (sans-serif, from Google Fonts)
- Pull quotes: Cormorant Garant italic, oversized

### Design Principles
- Magazine-style with GENEROUS whitespace
- Full-bleed hero images on reviews
- No sidebar clutter, no banner ads feel
- Clean, minimal navigation — serif wordmark logo "The Turndown"
- Mobile-first responsive
- Think: Cereal Magazine online, not Condé Nast clutter

## Database Schema

```sql
CREATE TABLE hotels (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  brand TEXT,           -- e.g. "Aman", "Four Seasons", "Six Senses"
  brand_slug TEXT,
  location TEXT,        -- e.g. "Tokyo, Japan"
  country TEXT,
  country_slug TEXT,
  region TEXT,          -- e.g. "Asia", "Europe", "Maldives"
  region_slug TEXT,
  latitude REAL,
  longitude REAL,
  price_range TEXT,     -- e.g. "$800-2,500"
  price_from INTEGER,
  price_to INTEGER,
  currency TEXT DEFAULT 'USD',
  style TEXT,           -- e.g. "Minimalist", "Colonial", "Contemporary"
  best_for TEXT,        -- JSON array: ["Romance", "Wellness", "Solo"]
  hero_image TEXT,
  images TEXT,          -- JSON array of image URLs
  website TEXT,
  booking_url TEXT,
  tagline TEXT,         -- One-line verdict
  
  -- Editorial content (markdown)
  review_intro TEXT,
  review_arrival TEXT,
  review_room TEXT,
  review_service TEXT,
  review_food TEXT,
  review_details TEXT,
  review_verdict TEXT,
  verdict_best_for TEXT,   -- "Best for: couples seeking absolute silence"
  verdict_skip_if TEXT,    -- "Skip if: you need nightlife"
  verdict_standout TEXT,   -- "Standout: the rooftop onsen at sunset"
  
  rating_overall REAL,     -- out of 10, not 5
  rating_room REAL,
  rating_service REAL,
  rating_food REAL,
  rating_value REAL,
  rating_location REAL,
  
  published INTEGER DEFAULT 0,
  featured INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE brands (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  tagline TEXT,
  hero_image TEXT,
  content_md TEXT,         -- Full markdown article
  hotel_count INTEGER DEFAULT 0,
  founded_year INTEGER,
  parent_company TEXT,
  best_property TEXT,      -- slug reference
  website TEXT,
  published INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE destinations (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,       -- e.g. "Maldives", "Kyoto", "Santorini"
  country TEXT,
  region TEXT,
  hero_image TEXT,
  intro_md TEXT,
  best_time TEXT,           -- e.g. "November to April"
  content_md TEXT,          -- Full markdown guide
  published INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE articles (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  category TEXT NOT NULL,   -- "versus", "the-details", "new-openings"
  hero_image TEXT,
  content_md TEXT,          -- Full markdown
  hotels_mentioned TEXT,    -- JSON array of hotel slugs
  published INTEGER DEFAULT 0,
  featured INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE newsletter_subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  confirmed INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);
```

## Site Architecture / Routes

```
/                           → Homepage (hero + latest reviews + featured)
/reviews                    → All reviews grid (filterable by brand, destination, price)
/reviews/[slug]             → Individual hotel review (MOST IMPORTANT PAGE)
/brands                     → Brand index
/brands/[slug]              → Brand profile page  
/destinations               → Destination index
/destinations/[slug]        → Destination guide
/versus                     → All comparisons
/versus/[slug]              → Individual comparison
/the-details                → Essays index
/the-details/[slug]         → Individual essay
/new-openings               → New hotel launches
/new-openings/[slug]        → Individual opening
/about                      → About page
/newsletter                 → Newsletter signup
/api/newsletter/subscribe   → Newsletter API
```

## Key Pages to Build

### Homepage
- Full-width hero with latest featured review
- "Latest Reviews" grid (3-4 cards)
- "The Details" — latest essay teaser
- "Browse by Brand" — horizontal scroll of brand logos/cards
- Newsletter signup section
- Clean footer with site links

### Review Page (most important)
- Full-bleed hero image
- Hotel name, brand badge, location
- Ratings sidebar (desktop) or top card (mobile) — overall + sub-ratings
- Content sections: The Arrival → The Room → The Service → Food & Drink → The Details
- "The Verdict" styled card at bottom (gold accent border)
  - Tagline verdict
  - Best for / Skip if / Standout
- "More from [Brand]" or "More in [Destination]" related reviews
- Breadcrumb: Home > Reviews > [Hotel Name]

### Review Card Component
- Hero image with subtle overlay
- Hotel name + brand + location
- Star-less rating (just the number /10)
- One-line verdict tagline
- Hover: slight zoom on image

### Brand Page
- Hero + brand logo area
- Editorial content (markdown rendered)
- Grid of all reviewed hotels for this brand
- Key stats: founded, parent company, number of properties

### Destination Guide
- Hero image
- Editorial intro
- Best time to visit
- Grid of reviewed hotels in this destination, organized by tier/brand

## Components to Build
1. `Header` — sticky, serif wordmark "The Turndown", minimal nav (Reviews, Brands, Destinations, The Details, About)
2. `Footer` — site links, newsletter mini-signup, "© The Turndown"
3. `ReviewCard` — used in grids everywhere
4. `VerdictCard` — the gold-bordered verdict box
5. `RatingDisplay` — elegant rating display (number out of 10)
6. `BrandBadge` — small styled badge showing hotel brand
7. `HeroImage` — full-bleed responsive hero with overlay text
8. `NewsletterSignup` — inline and popup variants
9. `Breadcrumbs` — subtle breadcrumb navigation
10. `MarkdownContent` — styled markdown renderer (for brand/destination/article content)
11. `FilterBar` — for review listing page (brand, destination, price range)

## Seed Data
Create seed data for **10 hotels** to make the site feel real at launch:

1. Aman Tokyo (Tokyo, Japan)
2. Aman Venice (Venice, Italy)  
3. Four Seasons Bora Bora (Bora Bora, French Polynesia)
4. Four Seasons Kyoto (Kyoto, Japan)
5. Six Senses Zighy Bay (Oman)
6. One&Only Reethi Rah (Maldives)
7. Belmond Hotel Caruso (Ravello, Italy)
8. Mandarin Oriental Bangkok (Bangkok, Thailand)
9. Rosewood London (London, UK)
10. Shangri-La Paris (Paris, France)

For each hotel:
- Write compelling, opinionated review content (at least 300+ words per section)
- Set realistic ratings
- Add a punchy verdict tagline
- Include best_for, skip_if, standout

Also seed:
- 5 brands (Aman, Four Seasons, Six Senses, One&Only, Belmond) with editorial profiles
- 5 destinations (Tokyo, Maldives, Italy, Paris, Bora Bora) with guides
- 2 "The Details" essays
- 1 "Versus" article

## SEO
- Proper meta tags on every page (title, description, OG, Twitter cards)
- JSON-LD structured data on review pages (Review, Hotel schema)
- Sitemap.ts
- Robots.ts
- Canonical URLs using theturndown.co

## What NOT to Build
- No user auth/login
- No comments
- No booking engine
- No admin panel (we'll manage content via DB directly)
- No analytics beyond a simple Umami/Plausible script tag placeholder
- No search (yet)

## Build Commands
```bash
npm run dev     # dev server
npm run build   # production build  
npm run seed    # seed the database with sample data
```

## Important
- Make the design BEAUTIFUL. This is a luxury editorial site — every pixel matters.
- Generous whitespace everywhere. Let content breathe.
- Hero images should be full-bleed and cinematic.
- The Verdict card should feel special — gold border, subtle background.
- Typography hierarchy should be clear: big serif headlines, clean sans body.
- Mobile experience should feel like reading a premium magazine app.
