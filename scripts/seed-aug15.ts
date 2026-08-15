import { Pool } from 'pg';
import { randomUUID } from 'crypto';
import { schema } from '../lib/schema';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// AUG 15 — ROSEWOOD LONDON VS THE CONNAUGHT
// Weekly growth loop: queued London decision-stage comparison.
// Sources checked: live The Turndown Rosewood London and The Connaught reviews;
// official Rosewood London home/Scarfes Bar pages; official Connaught home,
// Connaught Bar, and Aman Spa pages; live London best-hotel hub.
// ============================================================================

const articles = [
  {
    title: `Rosewood London vs The Connaught: Which London Luxury Hotel Should You Book?`,
    slug: `rosewood-london-vs-the-connaught`,
    category: `versus`,
    subtitle: `Rosewood London is the livelier Holborn grand hotel. The Connaught is the quieter Mayfair power address. The right choice depends less on star rating than on the London you want around you.`,
    hero_image: `https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600`,
    content_md: `# Rosewood London vs The Connaught

Rosewood London and The Connaught both work for travelers who want a serious London hotel rather than a generic luxury base. They just solve different problems.

**Choose Rosewood London if you want a grand hotel with more social energy, easier Covent Garden/Soho/West End access, and a bar-and-dining scene that feels part of the stay. Choose The Connaught if you want Mayfair discretion, quieter service choreography, stronger old-money intimacy, and the sense that the hotel is protecting you from London rather than plugging you into it.**

For the wider field, start with [Best Luxury Hotels in London](/best-luxury-hotels/london) and the [London destination guide](/destinations/london). For individual notes, read the full [Rosewood London review](/reviews/rosewood-london) and [The Connaught review](/reviews/the-connaught). If you are comparing Mayfair classics more narrowly, keep [Claridge's vs The Connaught](/versus/claridges-vs-connaught) open too.

## The quick verdict

| Decision point | Rosewood London | The Connaught |
| --- | --- | --- |
| Best for | Social London, theatre, bars, design-aware city breaks | Discreet Mayfair stays, repeat visitors, quiet luxury |
| Neighborhood | Holborn, with easy reach of Covent Garden, Soho, and the West End | Carlos Place in Mayfair, close to Mount Street and Bond Street |
| Mood | Clubby, polished, more open to non-guests | Residential, hushed, more private |
| Food and drink pull | Scarfes Bar, Holborn Dining Room, Mirror Room, Pie Room | Hélène Darroze, The Connaught Bar, Jean-Georges, Aman Spa ritual |
| Main trade-off | Less Mayfair prestige; more city movement around it | Less casual energy; a more expensive, contained world |
| Better first London luxury stay? | Yes, if you want London to feel lively and easy | Yes, if you already know you want Mayfair and quiet service |

## The simplest way to choose

The cleanest distinction is this: **Rosewood London is better when the trip is meant to spill into the city. The Connaught is better when the hotel is meant to hold the city at a distance.**

Rosewood sits in Holborn, which gives it a practical London advantage. Covent Garden, Soho, the British Museum, legal London, theatre nights, and central restaurant plans all feel close. The hotel's official positioning leans into the idea of a modern manor house, and the property backs that up with a courtyard arrival, multiple dining venues, and Scarfes Bar as a genuine evening draw.

The Connaught is not trying to be that kind of city hotel. It is a Mayfair retreat: smaller in emotional volume, more discreet in arrival, and more protective of guest privacy. The official hotel language emphasizes Mayfair Village, a quiet welcome, suites and rooms that blend tradition and modernity, and a deeply rooted Mount Street neighborhood. That is the point. You are not using The Connaught to unlock all of London quickly; you are choosing it because Mayfair is the version of London you want.

## Choose Rosewood London for a more open city stay

Rosewood London is the better fit if you want a luxury hotel with a little more movement around it. The courtyard entrance gives the arrival enough theatre, but the overall mood is less ceremonial than the Mayfair grand hotels. It is polished without asking you to perform.

The food and drink program is part of the argument. Rosewood's official pages put Scarfes Bar at the center of the hotel story: inventive cocktails, light bites, a fireplace-club mood, and an interior built around Gerald Scarfe's work. Holborn Dining Room, The Pie Room, Mirror Room afternoon tea, and the courtyard terrace make the hotel feel useful even when you are not leaving the building.

That matters for a London trip where the evenings are not all pre-planned. Rosewood gives you more ways to stay in without feeling trapped, and more reasons to invite someone to meet you at the hotel. It suits travelers who want luxury with a pulse: theatre nights, gallery days, cocktails, a softer version of British grandeur, and enough centrality to keep plans flexible.

Skip Rosewood if your London fantasy is pure Mayfair, if you want the hotel to feel almost private, or if a Holborn address feels less emotionally right than Carlos Place or Brook Street.

## Choose The Connaught for Mayfair discretion

The Connaught is the stronger choice when privacy, address, and service quietness matter more than urban convenience. It has a different kind of power: not louder, not newer, not more visibly grand — just more composed.

Officially, the hotel frames itself around Mayfair Village, Mount Street, rooms and suites that blend tradition and modernity, and a quiet welcome home. That language matches the way The Turndown's review positions it: a hotel for travelers who do not need the room, lobby, or bar to announce their taste to everyone else.

The supporting amenities are also more destination-like. The Connaught's own pages foreground Hélène Darroze at The Connaught, The Connaught Bar, The Connaught Grill, and Aman Spa. The bar is a serious point of difference, especially for travelers who care about cocktail culture, while Aman Spa gives the hotel a wellness claim that feels more special than a standard basement treatment room.

Book The Connaught if you want Mayfair mornings, Mount Street shopping, quiet staff choreography, and a hotel that makes London feel edited. Skip it if you want more obvious buzz, easier access to Soho or theatre nights on foot, or a hotel atmosphere that feels relaxed rather than deeply controlled.

## Rooms and service: comfort versus choreography

Both hotels are comfortable enough for this comparison to come down to personality rather than basic quality. Rosewood London tends to feel more open, generous, and club-like. Its rooms and public spaces support a busy city stay: return from meetings, change for dinner, have a drink downstairs, reset, repeat.

The Connaught feels more choreographed. The value is in the low-friction details: discreet arrival, quiet corridors, Mayfair calm, and service that tries not to make itself visible. That can feel magical if you value anticipation. It can feel overly controlled if you prefer a hotel with a little more looseness.

Neither choice should be sold as universally better. Rosewood is the easier recommendation for travelers who want London access and hotel atmosphere in equal measure. The Connaught is the sharper recommendation for travelers who already know they want discretion and are willing to pay for a hotel that compresses the city into a very specific Mayfair mood.

## Food, bars, and the evening question

This is where the decision becomes practical.

Choose Rosewood if you want the hotel bar to feel lively without becoming a scene you have to dress for like a ceremony. Scarfes Bar gives the property a clear social center, and the broader dining set — Holborn Dining Room, The Pie Room, Mirror Room, terrace — makes Rosewood more flexible for casual-to-polished evenings.

Choose The Connaught if the bar is meant to be a destination in itself. The Connaught Bar's official page describes an Agostino Perrone and Giorgio Bargiani-led cocktail program, a David Collins Studio interior, and a long-running reputation for world-class bar hospitality. Add Hélène Darroze and Aman Spa, and the hotel becomes less flexible but more rarefied.

The short version: **Rosewood is better for repeated use during a busy stay. The Connaught is better for a more deliberate hotel-centered evening.**

## Which one should you book?

Book **Rosewood London** if you want:

- a luxury hotel with more visible energy;
- easier access to Covent Garden, Soho, Bloomsbury, and the West End;
- a strong hotel bar without full Mayfair formality;
- a central London base that works for mixed business/leisure days;
- heritage style without old-guard stiffness.

Book **The Connaught** if you want:

- a Mayfair address that feels genuinely discreet;
- quiet service and a more private hotel rhythm;
- The Connaught Bar and Aman Spa as part of the reason to stay;
- a hotel that suits repeat London travelers more than checklist sightseeing;
- a stronger sense of old London power, edited down rather than dressed up.

For most first-time luxury London trips, Rosewood London is the easier fit because it connects more naturally to the city. For travelers who already know they want Mayfair — and who value privacy over convenience — The Connaught is the more precise choice.

The decision is not really Rosewood versus Connaught. It is open London versus protected London. Choose the version of the city you want to wake up inside.`,
    hotels_mentioned: [`rosewood-london`, `the-connaught`, `claridges`, `bulgari-hotel-london`],
    featured: 1,
    published: 1
  }
];

const articleColumns = [
  `id`, `slug`, `title`, `subtitle`, `category`, `hero_image`, `content_md`,
  `hotels_mentioned`, `published`, `featured`
];

const insertArticleQuery = `INSERT INTO articles (${articleColumns.join(`, `)}) VALUES (${articleColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, subtitle = EXCLUDED.subtitle, category = EXCLUDED.category, hero_image = EXCLUDED.hero_image, content_md = EXCLUDED.content_md, hotels_mentioned = EXCLUDED.hotels_mentioned, published = EXCLUDED.published, featured = EXCLUDED.featured, updated_at = NOW()`;

const seed = async () => {
  console.log(`Starting Aug 15 seed...`);
  console.log(`Articles: ${articles.length}`);
  await pool.query(schema);

  for (const article of articles) {
    await pool.query(insertArticleQuery, [
      randomUUID(), article.slug, article.title, article.subtitle, article.category,
      article.hero_image, article.content_md, JSON.stringify(article.hotels_mentioned),
      article.published, article.featured
    ]);
    console.log(`Upserted article: ${article.title}`);
  }

  const verification = await pool.query(
    `SELECT slug, title, published FROM articles WHERE slug = $1`,
    [`rosewood-london-vs-the-connaught`]
  );

  if (verification.rowCount === 0) {
    throw new Error(`Verification failed: rosewood-london-vs-the-connaught not found after seed`);
  }

  console.log(`Verified article: ${verification.rows[0].slug} | ${verification.rows[0].title} | published=${verification.rows[0].published}`);
  console.log(`Aug 15 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
