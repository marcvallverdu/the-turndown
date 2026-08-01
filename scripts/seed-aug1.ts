import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// AUG 1 — MAYBOURNE BRAND PROFILE
// Weekly growth loop: active queued brand profile with The Connaught + The
// Berkeley reviewed inventory, plus London hub links.
// Sources checked: official Maybourne home/about/hotels/history pages, live The
// Turndown review routes, and live London best-hotel hub.
// ============================================================================

const brands = [
  {
    name: `Maybourne`,
    slug: `maybourne`,
    tagline: `London grand-hotel craft with sharper edges: Claridge's ceremony, Connaught discretion, Berkeley modernity, and a cautious expansion beyond Mayfair.`,
    hero_image: `https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600`,
    content_md: `# Maybourne

Maybourne is most useful to understand as a London hotel house before it is treated as a global brand. Its official portfolio now includes Claridge's, The Connaught, The Berkeley, The Emory, The Maybourne Beverly Hills, and The Maybourne Riviera, but the centre of gravity is still London: Mayfair, Knightsbridge, Belgravia, and the kind of hotel culture that turns a lobby, bar, doorman, or breakfast room into part of the trip.

That is why Maybourne is not interchangeable with the bigger luxury groups. It is less about standardising a promise across continents and more about operating a few highly distinct addresses with enough polish to feel coherent. The best Maybourne stay depends on which version of London you want: ceremony, discretion, fashion, or the newest all-suite gloss.

## The short answer

Choose Maybourne when you want London luxury with a strong sense of house style but do not want the same hotel repeated under different names. The Connaught is the discreet Mayfair choice. The Berkeley is the more contemporary Knightsbridge choice. Claridge's is the grand ceremonial institution. The Emory is the newer all-suite statement.

Skip Maybourne if you want minimalist retreat culture, resort sprawl, or a brand with dozens of destinations. Even outside London, the Maybourne argument is still built around urban theatre, design, dining, service, and address.

## The brand logic

Maybourne's strength is that its London hotels are siblings rather than clones. [The Connaught](/reviews/the-connaught) reads as Mayfair restraint: quieter, more private, and more suited to travelers who want the hotel to understand power without performing it. [The Berkeley](/reviews/the-berkeley) is the sharper Knightsbridge expression, with a more fashion-conscious mood and a stronger contemporary edge.

[Claridge's](/reviews/claridges) sits slightly differently in The Turndown's database because the hotel is a brand in its own right, but it is central to the Maybourne story. It gives the group its most ceremonial London reference point: Art Deco confidence, lobby theatre, and the sense that a grand hotel can still function as a social stage.

The useful distinction is not “old” versus “new.” It is tempo. The Connaught slows London down. The Berkeley makes it feel lighter and more current. Claridge's turns the stay into occasion. The Emory, which Maybourne describes as a modern all-suite hotel in Belgravia overlooking Hyde Park, pushes the group toward a more residential, design-led future.

## Where Maybourne works best

Maybourne works best for travelers who care about hotel atmosphere as much as room category. The official hotel list makes the pattern clear: the group is strongest in highly coded luxury neighborhoods — Mayfair, Knightsbridge, Belgravia, Beverly Hills, and the French Riviera — where the address carries meaning before you even reach the room.

That can be a virtue or a limitation. If the trip is about London rituals, restaurants, shopping, art, bars, and being close to the city's wealthiest old neighbourhoods, Maybourne is hard to avoid. If the trip is about disappearing into nature, sleeping in silence, or treating the hotel as a private retreat, [Aman](/brands/aman), [Six Senses](/brands/six-senses), or a resort-led brand may be a cleaner match.

## How it compares

Compared with [Four Seasons](/brands/four-seasons), Maybourne feels less global and less operationally standardised. Compared with [Rosewood](/brands/rosewood), it is more London-specific and less overtly residential in its brand language. Compared with [Belmond](/brands/belmond), it is less about journeys and historic resort theatre, and more about grand city hospitality with exacting food, drink, spa, and public-room culture.

For a London trip, the comparison is especially practical. Use [Best Luxury Hotels in London](/best-luxury-hotels/london) when you want the full field, then narrow by mood: The Connaught for quiet Mayfair, The Berkeley for Knightsbridge style, Rosewood London for a more clubby Holborn base, Bulgari for sleek Italian polish, and Claridge's for classic ceremony.

## Who should book Maybourne

Book Maybourne if the hotel is meant to be part of the London itinerary rather than a neutral base. It suits travelers who value bars, restaurants, arrivals, service choreography, and rooms that feel attached to a particular social world. It is a strong fit for celebrations, fashion or art trips, Mayfair business, Knightsbridge shopping, and repeat London travelers who already know which neighborhood mood they prefer.

Look elsewhere if you want anonymity, lightness, or a hotel that disappears behind the destination. Maybourne hotels tend to have personality. That is the point, but it also means choosing the wrong sibling can make the stay feel miscast.

## The Turndown verdict

Maybourne is compelling because it has not sanded down its best hotels into one global formula. The brand makes most sense when judged as a house of London characters: Claridge's as the institution, The Connaught as the discreet operator, The Berkeley as the modernist sibling, and The Emory as the new-design bet.

Start with [The Connaught](/reviews/the-connaught) if you want the quietest version of Maybourne. Choose [The Berkeley](/reviews/the-berkeley) if you want the group at its least formal. Keep [Claridge's](/reviews/claridges) in the comparison when the trip calls for ceremony. The best Maybourne hotel is not the one with the grandest name; it is the one whose version of London matches the trip you are actually taking.`,
    hotel_count: 6,
    founded_year: 2003,
    parent_company: `Maybourne Hotel Group`,
    best_property: `the-connaught`,
    website: `https://www.maybourne.com`,
    published: 1
  }
];

const brandColumns = [
  `id`, `slug`, `name`, `tagline`, `hero_image`, `content_md`, `hotel_count`,
  `founded_year`, `parent_company`, `best_property`, `website`, `published`
];

const insertBrandQuery = `INSERT INTO brands (${brandColumns.join(`, `)}) VALUES (${brandColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, tagline = EXCLUDED.tagline, hero_image = EXCLUDED.hero_image, content_md = EXCLUDED.content_md, hotel_count = EXCLUDED.hotel_count, founded_year = EXCLUDED.founded_year, parent_company = EXCLUDED.parent_company, best_property = EXCLUDED.best_property, website = EXCLUDED.website, published = EXCLUDED.published, updated_at = NOW()`;

const seed = async () => {
  console.log(`Starting Aug 1 seed...`);
  console.log(`Brands to upsert: ${brands.length}`);

  for (const brand of brands) {
    await pool.query(insertBrandQuery, [
      randomUUID(), brand.slug, brand.name, brand.tagline, brand.hero_image,
      brand.content_md, brand.hotel_count, brand.founded_year, brand.parent_company,
      brand.best_property, brand.website, brand.published
    ]);
    console.log(`Upserted brand: ${brand.name}`);
  }

  const verification = await pool.query(
    `SELECT slug, name, published FROM brands WHERE slug = $1`,
    [`maybourne`]
  );

  if (verification.rowCount === 0) {
    throw new Error(`Verification failed: maybourne not found after seed`);
  }

  console.log(`Verified brand: ${verification.rows[0].slug} | ${verification.rows[0].name} | published=${verification.rows[0].published}`);
  console.log(`Aug 1 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
