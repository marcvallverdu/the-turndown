import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// JUL 11 — MANDARIN ORIENTAL BRAND PROFILE
// Weekly growth loop: active queued brand profile with reviewed Bangkok + Lake Como inventory.
// Sources checked: official Mandarin Oriental history/company pages and current official stay page.
// ============================================================================

const brands = [
  {
    name: `Mandarin Oriental`,
    slug: `mandarin-oriental`,
    tagline: `Asian service heritage, polished city hotels, and a brand that still feels strongest when ceremony is backed by place.`,
    hero_image: `https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600`,
    content_md: `# Mandarin Oriental

Mandarin Oriental is one of the few global luxury hotel brands whose origin story still explains the product. The official company history traces the modern group to The Mandarin in Hong Kong, opened in 1963, and The Oriental in Bangkok, partly acquired by the group in 1974. Those two hotels gave the brand both halves of its identity: Hong Kong precision and Bangkok grace.

That matters because Mandarin Oriental is not at its best when it behaves like a generic international luxury chain. It is at its best when the hotel has a real city rhythm, a serious service culture, and enough local texture to make the fan logo feel earned rather than decorative.

## The short answer

Choose Mandarin Oriental when you want polished, service-led luxury with a strong urban base. The brand is especially persuasive in cities where logistics, dining, spa, and concierge depth matter as much as the room itself.

Skip it when you want small-house intimacy, experimental design, or a resort that feels deliberately unplugged from the city around it. Mandarin Oriental is usually more ceremonial than bohemian, more exacting than casual, and more comfortable with grandeur than with understatement.

## The brand logic

The best Mandarin Oriental hotels understand that luxury is not only material. It is choreography: luggage moving without fuss, restaurants handled with authority, spa time feeling protected, breakfast paced correctly, and staff reading whether the guest wants ceremony or quiet.

That is why [Mandarin Oriental Bangkok](/reviews/mandarin-oriental-bangkok) remains the cleanest expression of the brand. It has the river, the history, the Authors' Lounge ritual, and a service style that can feel almost institutional without becoming cold. In Bangkok, the brand's formality has emotional weight because the hotel helped define the city's luxury-hotel language.

[Mandarin Oriental, Lago di Como](/reviews/mandarin-oriental-lago-di-como) shows the other side of the portfolio. It brings the brand's operational polish to a softer resort setting, where Como's lake rhythm matters more than urban ceremony. The result is more contemporary and less mythic than Bangkok, but useful for travelers who want a global luxury machine inside an Italian lakeside stay.

## Where Mandarin Oriental works best

Mandarin Oriental is strongest in destinations where service solves real travel friction. Bangkok, Hong Kong, Tokyo, Paris, Milan, London, Singapore, and Lake Como are not interchangeable, but they share a useful pattern: the guest often needs more than a beautiful room. They need routing, reservations, local interpretation, wellness, dining, and a hotel that can make an intense destination feel manageable.

That is also the brand's weakness. In places where travelers want a looser, more residential, or more design-forward stay, Mandarin Oriental can feel too formal. The better properties soften that with local architecture, gardens, river frontage, or restaurant culture. The weaker ones can risk becoming beautifully serviced but emotionally neutral.

## How it compares

Compared with [Four Seasons](/brands/four-seasons), Mandarin Oriental usually feels more Asian in service grammar and more ceremonial in tone. Compared with [Aman](/brands/aman), it is less secluded and more city-capable. Compared with [Capella](/brands/capella), it is less intimate but often deeper in infrastructure. Compared with [Raffles](/brands/raffles), it is less nostalgic and more operationally modern.

The useful distinction is this: Mandarin Oriental is a brand for travelers who want the stay to feel handled. Not anonymous, not flashy, not necessarily surprising — handled.

## Who should book Mandarin Oriental

Book Mandarin Oriental if you value service memory, strong concierge teams, serious spas, polished restaurants, and a sense of ceremony that still leaves room for local setting. It is a good fit for business-plus-leisure trips, first visits to complex cities, multigenerational luxury travel, and travelers who prefer care and consistency over design novelty.

Look elsewhere if the trip is built around privacy, retreat, or the feeling of discovering a smaller independent address. Mandarin Oriental can be elegant, warm, and extremely competent, but it is rarely trying to disappear.

## The Turndown verdict

Mandarin Oriental remains relevant because its best hotels make old-fashioned luxury feel useful. The brand does not need to be the newest or the loudest when it remembers its original advantage: service as a form of calm.

Start with Bangkok if you want the myth. Consider Lake Como if you want the brand in resort mode. Use the rest of the portfolio selectively, looking for properties where Mandarin Oriental's precision is matched by a destination that gives the stay its own emotional charge.`,
    hotel_count: 46,
    founded_year: 1963,
    parent_company: `Jardine Matheson Group`,
    best_property: `mandarin-oriental-bangkok`,
    website: `https://www.mandarinoriental.com`,
    published: 1
  }
];

const brandColumns = [
  `id`, `slug`, `name`, `tagline`, `hero_image`, `content_md`, `hotel_count`,
  `founded_year`, `parent_company`, `best_property`, `website`, `published`
];

const insertBrandQuery = `INSERT INTO brands (${brandColumns.join(`, `)}) VALUES (${brandColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, tagline = EXCLUDED.tagline, hero_image = EXCLUDED.hero_image, content_md = EXCLUDED.content_md, hotel_count = EXCLUDED.hotel_count, founded_year = EXCLUDED.founded_year, parent_company = EXCLUDED.parent_company, best_property = EXCLUDED.best_property, website = EXCLUDED.website, published = EXCLUDED.published, updated_at = NOW()`;

const seed = async () => {
  console.log(`Starting Jul 11 seed...`);
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
    [`mandarin-oriental`]
  );

  if (verification.rowCount === 0) {
    throw new Error(`Verification failed: mandarin-oriental not found after seed`);
  }

  console.log(`Verified brand: ${verification.rows[0].slug} | ${verification.rows[0].name} | published=${verification.rows[0].published}`);
  console.log(`Jul 11 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
