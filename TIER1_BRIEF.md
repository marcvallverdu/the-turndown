# Tier 1 Content Generation Brief

Create `scripts/seed-tier1.ts` that ADDS new content to the existing PostgreSQL database (does NOT delete existing data). Use the same structure as `scripts/seed.ts` — import Pool from pg, connect via DATABASE_URL, use parameterized queries.

## Writing Style (CRITICAL)

Voice: A well-traveled insider who notices what others miss. Not pretentious, not sycophantic. Honest, observant, occasionally wry.

- **Sensory details:** What does the lobby smell like? What do you hear at 6am? How does the linen feel?
- **Specificity:** Don't say "beautiful views" — say "floor-to-ceiling glass framing the Shinjuku skyline"
- **Opinions:** Take positions. "The restaurant is overpriced." "This is the single best hotel pool in Southeast Asia."
- **NO generic phrases:** Ban "nestled in", "world-class", "unparalleled", "curated experience", "bespoke", "seamlessly blends"
- **Vary sentence length.** Short punchy. Then longer flowing descriptions.

Use backtick template literals for ALL strings to avoid apostrophe issues.

## Content to Generate

### 1. NEW HOTEL REVIEWS (15 hotels)

Each hotel needs ALL these fields with REAL editorial content (300-500 words per section):
- review_intro, review_arrival, review_room, review_service, review_food, review_details, review_verdict
- tagline (punchy one-liner), verdict_best_for, verdict_skip_if, verdict_standout
- best_for (JSON array), style, ratings (realistic, 7.5-9.8 range, not all 9+)
- hero_image (use relevant Unsplash URLs with ?w=1600), images (array of 2 Unsplash URLs)
- website, booking_url (use hotel's actual URLs)
- price_range ("$$$" or "$$$$"), price_from/price_to (realistic per-night USD)

**London Hotels:**
1. **Claridge's** — Art deco grandeur, the Mayfair institution. Brand: Claridge's, brand_slug: claridges. Location: London, UK. Region: Europe. Style: Art Deco Grande Dame.
2. **The Connaught** — Mayfair restraint meets modern luxury. Brand: Maybourne, brand_slug: maybourne. Location: London, UK.
3. **The Berkeley** — Knightsbridge's most fashion-forward hotel. Brand: Maybourne, brand_slug: maybourne. Location: London, UK.
4. **Bulgari Hotel London** — Italian design in Knightsbridge. Brand: Bulgari, brand_slug: bulgari. Location: London, UK.
5. **Corinthia London** — The grande dame of Whitehall. Brand: Corinthia, brand_slug: corinthia. Location: London, UK.

**Dubai Hotels:**
6. **Burj Al Arab** — The world's most famous hotel silhouette. Brand: Jumeirah, brand_slug: jumeirah. Location: Dubai, UAE. Region: Middle East.
7. **One&Only Royal Mirage** — Old-world Arabian romance. Brand: One&Only, brand_slug: one-and-only. Location: Dubai, UAE.
8. **Four Seasons Resort Dubai at Jumeirah Beach** — Beach luxury done right. Brand: Four Seasons, brand_slug: four-seasons. Location: Dubai, UAE.
9. **Atlantis The Royal** — Dubai's maximalist new icon. Brand: Atlantis, brand_slug: atlantis. Location: Dubai, UAE.

**Bali Hotels:**
10. **Four Seasons Resort Bali at Sayan** — The Ayung River valley retreat. Brand: Four Seasons, brand_slug: four-seasons. Location: Ubud, Bali, Indonesia. Region: Asia.
11. **Bulgari Resort Bali** — Clifftop Italian design in the tropics. Brand: Bulgari, brand_slug: bulgari. Location: Uluwatu, Bali, Indonesia.
12. **Capella Ubud** — Bill Bensley's jungle fantasy. Brand: Capella, brand_slug: capella. Location: Ubud, Bali, Indonesia.

**New York Hotels:**
13. **Aman New York** — Aman's first true city hotel. Brand: Aman, brand_slug: aman. Location: New York, USA. Region: North America.
14. **The Mark** — Upper East Side maximalism. Brand: The Mark, brand_slug: the-mark. Location: New York, USA.

**Singapore:**
15. **Raffles Singapore** — The grande dame reborn. Brand: Raffles, brand_slug: raffles. Location: Singapore. Region: Asia.

### 2. NEW BRAND PROFILES (6 brands)

Each brand needs: name, slug, tagline, hero_image (Unsplash), content_md (1500+ words of real editorial — founder story, design philosophy, service DNA, best property, worst property, most underrated, who it's for), hotel_count, founded_year, parent_company, best_property, website, published: 1.

1. **Peninsula** — slug: peninsula. Founded: 1928. Parent: The Hongkong and Shanghai Hotels. Best: Peninsula Hong Kong. 10 hotels.
2. **Raffles** — slug: raffles. Founded: 1887. Parent: Accor. Best: Raffles Singapore. 18 hotels.
3. **Nobu** — slug: nobu. Founded: 2013. Parent: Nobu Hospitality. Best: Nobu Malibu. 15 hotels.
4. **Taj** — slug: taj. Founded: 1903. Parent: IHCL (Tata). Best: Taj Mahal Palace Mumbai. 100+ hotels.
5. **Bulgari** — slug: bulgari. Founded: 2004 (hotels). Parent: LVMH/Marriott. Best: Bulgari Paris. 8 hotels.
6. **Cheval Blanc** — slug: cheval-blanc. Founded: 2006. Parent: LVMH. Best: Cheval Blanc Paris. 6 hotels.

### 3. NEW DESTINATION GUIDES (4 destinations)

Each destination needs: name, slug, country, region, hero_image, intro_md (short intro), best_time, content_md (1000+ words — when to go, what to expect, which hotels and why, honest advice), published: 1.

1. **London** — slug: london. Country: United Kingdom. Region: Europe.
2. **Dubai** — slug: dubai. Country: UAE. Region: Middle East.
3. **Bali** — slug: bali. Country: Indonesia. Region: Asia.
4. **New York** — slug: new-york. Country: United States. Region: North America.

### 4. ROUNDUP ARTICLES (2 articles, category: "the-details")

Each needs: title, slug, subtitle, category: "the-details", hero_image, content_md (2000+ words, magazine-quality editorial with specific hotel recommendations), published: 1, featured: 0.

1. **"The 25 Best Hotels in the World (2026)"** — slug: best-hotels-world-2026. Opinionated ranked list with brief paragraphs for each. Include our reviewed hotels + others.
2. **"The Best Luxury Hotels in London: An Honest Guide"** — slug: best-luxury-hotels-london. In-depth London luxury hotel guide covering 8-10 properties.

### 5. VERSUS ARTICLES (2 articles, category: "versus")

1. **"Claridge's vs The Connaught"** — slug: claridges-vs-connaught. 1500+ words comparing the two Mayfair icons.
2. **"Bulgari London vs Rosewood London"** — slug: bulgari-vs-rosewood-london. Modern London luxury compared.

## Technical Requirements

- Script must be runnable: `DATABASE_URL=... npx tsx scripts/seed-tier1.ts`
- Use `INSERT INTO ... ON CONFLICT (slug) DO NOTHING` to avoid duplicates if re-run
- Use backtick template literals for ALL content strings
- All hotel slugs must be URL-safe (lowercase, hyphens)
- All Unsplash image URLs should use real photo IDs (search for relevant ones)
- Test that the script compiles: `npx tsc --noEmit scripts/seed-tier1.ts` or just run it

## When Done

1. Run the seed script against the database
2. `npm run build` must still pass
3. `git add -A && git commit -m "content: tier 1 — 15 hotels, 6 brands, 4 destinations, 4 articles"`
4. `git push`
5. Then run: `openclaw system event --text "Done: Tier 1 content seeded — 15 new hotels, 6 brands, 4 destinations, 4 articles" --mode now`
