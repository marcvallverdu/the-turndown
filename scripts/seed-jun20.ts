import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// JUN 20 — ROSEWOOD BRAND PROFILE
// Weekly growth loop: brand-intent page connected to the existing Rosewood London review.
// ============================================================================

const brands = [
  {
    name: `Rosewood`,
    slug: `rosewood`,
    tagline: `Heritage hotels with modern residential polish — strongest when the building, bar, and city still feel specific.`,
    hero_image: `https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600`,
    content_md: `# Rosewood

Rosewood is one of the more persuasive answers to a problem that keeps troubling luxury hotels: how do you make an international brand feel local without turning locality into decoration?

At its best, Rosewood does not sell a single look. It sells a way of occupying a building. The stronger properties feel residential rather than institutional, layered rather than glossy, and more interested in atmosphere than in obvious spectacle. That can mean an Edwardian courtyard hotel in London, a vertical city hotel in Hong Kong, a beach resort in the Caribbean, or a restored estate with enough history to resist being flattened into beige luxury.

## Origins

Rosewood began in 1979 with The Mansion on Turtle Creek in Dallas, a hotel that helped define the brand's early residential tone. The idea was not simply to make hotels prettier or more expensive. It was to make them feel like places with a host, a point of view, and enough local texture that the stay did not dissolve into brand anonymity.

The company has changed ownership and grown internationally, but that original promise still matters. Rosewood is most convincing when it behaves less like a chain and more like a collection of houses with shared standards.

## Design philosophy

The brand's useful phrase is often described as a sense of place, but the phrase only works when it changes the guest experience. Rosewood's best hotels use architecture, art, food, public rooms, and neighborhood context to make the property feel rooted. The design tends to be layered: proper materials, rich rooms, bars with personality, and public spaces that invite lingering rather than just circulation.

That also creates the main risk. Layering can become heaviness if the property loses discipline. Rosewood is rarely the right answer for travelers who want monastic minimalism or blank-canvas calm. It is a brand for people who like rooms with density, history, and some social charge.

## Service DNA

Rosewood service works best when it feels polished but not stiff. The tone is usually warmer than the most formal palace hotels and more adult than lifestyle luxury. A good Rosewood team should make the hotel feel run by people with taste, not just by people following a standard.

The brand's strongest properties understand that modern luxury guests want practical intelligence as much as ceremony: good restaurant guidance, smooth transfers, housekeeping that resets the room properly, and staff who can be personable without becoming overfamiliar.

## Best property in our current coverage

For The Turndown's current coverage, **Rosewood London** is the clearest entry point. The hotel has the brand's argument in miniature: a dramatic building, a courtyard arrival, generous rooms, a genuinely useful bar, and enough contemporary energy to avoid feeling trapped by heritage.

It is not the quietest London choice and it is not trying to be. The appeal is a grand city hotel with some pulse — a place for travelers who want London atmosphere without the harder formality of the old guard.

## Where Rosewood fits

Rosewood is a strong brand for city breaks, design-aware leisure trips, and travelers who want heritage softened by modern comfort. It competes less on absolute minimalism or resort fantasy than on mood: the lobby, the bar, the room texture, the sense that the building still has a life beyond the guest room.

Choose Rosewood when you want character without chaos, polish without palace stiffness, and a hotel that gives you a better version of the city rather than hiding you from it. Skip it if your ideal luxury stay is silent, sparse, and almost invisible. That is not usually Rosewood's lane.

## The Turndown take

Rosewood is strongest when it remembers that luxury is not just service standards or square footage. It is the feeling that the hotel could not be lifted out of its setting without losing the point.

That is why the brand matters. In an era when many expensive hotels have learned to look broadly competent and emotionally interchangeable, Rosewood's better properties still try to behave like places. The results vary by address, as they do with every growing collection, but the best Rosewoods have something many luxury hotels lack: a room you remember after you leave it.`,
    hotel_count: 1,
    founded_year: 1979,
    parent_company: `Rosewood Hotel Group`,
    best_property: `rosewood-london`,
    website: `https://www.rosewoodhotels.com`,
    published: 1
  }
];

const brandColumns = [
  `id`, `slug`, `name`, `tagline`, `hero_image`, `content_md`, `hotel_count`,
  `founded_year`, `parent_company`, `best_property`, `website`, `published`
];

const insertBrandQuery = `INSERT INTO brands (${brandColumns.join(`, `)}) VALUES (${brandColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting Jun 20 seed...`);
  console.log(`Brands: ${brands.length}`);

  for (const brand of brands) {
    const result = await pool.query(insertBrandQuery, [
      randomUUID(), brand.slug, brand.name, brand.tagline, brand.hero_image,
      brand.content_md, brand.hotel_count, brand.founded_year, brand.parent_company,
      brand.best_property, brand.website, brand.published
    ]);
    console.log(`${result.rowCount === 1 ? `Inserted` : `Skipped existing`} brand: ${brand.name}`);
  }

  const verification = await pool.query(
    `SELECT slug, name, published FROM brands WHERE slug = $1`,
    [`rosewood`]
  );

  if (verification.rowCount === 0) {
    throw new Error(`Verification failed: rosewood not found after seed`);
  }

  console.log(`Verified brand: ${verification.rows[0].slug} | ${verification.rows[0].name} | published=${verification.rows[0].published}`);
  console.log(`Jun 20 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
