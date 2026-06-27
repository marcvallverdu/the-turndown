import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// JUN 27 — AMAN KYOTO VS FOUR SEASONS KYOTO
// Weekly growth loop: high-intent Kyoto comparison linked to existing reviews.
// ============================================================================

const articles = [
  {
    title: `Aman Kyoto vs Four Seasons Kyoto: Which Luxury Hotel Should You Book?`,
    slug: `aman-kyoto-vs-four-seasons-kyoto`,
    category: `versus`,
    subtitle: `Aman Kyoto is the retreat: forest, silence, onsen rhythm. Four Seasons Kyoto is the polished city-resort base: garden, facilities, and easier access.`,
    hero_image: `https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600`,
    content_md: `# Aman Kyoto vs Four Seasons Kyoto

Aman Kyoto and Four Seasons Kyoto answer two different versions of the same trip. **Book Aman Kyoto if you want Kyoto to feel like a private retreat. Book Four Seasons Kyoto if you want a more practical luxury base with stronger facilities and easier sightseeing logistics.**

Both hotels are expensive, polished, and serious about atmosphere. The difference is not simply which one is better. It is whether your Kyoto trip is built around stillness or access.

## The short answer

| Traveler type | Better fit | Why |
| --- | --- | --- |
| Honeymoon or special occasion built around quiet | Aman Kyoto | More secluded, more private, more emotionally distinctive |
| First Kyoto trip with temples, dining, and neighborhood movement | Four Seasons Kyoto | Easier base, broader facilities, less logistical friction |
| Design obsessive who wants restraint and landscape | Aman Kyoto | Forest paths, cedar, moss, and a stronger sense of removal |
| Family or multi-generation trip | Four Seasons Kyoto | Larger resort infrastructure and more flexible room/residence setup |
| Traveler who wants dining and city access every night | Four Seasons Kyoto | Better positioned for moving around Kyoto without the stay becoming car-dependent |

The Turndown verdict: **Aman Kyoto is the more memorable hotel; Four Seasons Kyoto is the more useful one.** That distinction matters.

## Location: retreat versus city base

[Aman Kyoto](/reviews/aman-kyoto) sits in Takagamine, north of central Kyoto, near Kinkaku-ji and removed from the denser tourist corridors. The setting is the argument: moss, cedar, stone paths, low buildings, and the feeling that the city has been edited out. That distance is beautiful when the trip is slow. It becomes friction when the itinerary is ambitious.

[Four Seasons Kyoto](/reviews/four-seasons-kyoto) is in Higashiyama, close enough to major sights and Kyoto Station to behave like a proper base. It is not in the middle of Gion nightlife, but it is far easier to use for temple days, dinners, shopping, and rail movement. The pond garden gives it a retreat quality without making the whole stay feel remote.

Choose Aman if the hotel is the point. Choose Four Seasons if Kyoto is the point and the hotel needs to support the city.

## Rooms and mood

Aman Kyoto's rooms are about subtraction: dark timber, stone, paper, muted fabrics, and views that make the landscape feel like part of the architecture. The best rooms do not shout. They create privacy and quiet, which is exactly what Aman guests are paying for. The trade-off is that the aesthetic can feel controlled if you want warmth, color, or obvious local theatre.

Four Seasons Kyoto is more conventionally comfortable. The rooms are contemporary, calm, and easier to recommend to a wide range of travelers. They have strong bathrooms, practical storage, polished beds, and a softer city-resort language. The design is less singular than Aman, but also less demanding. You do not have to be in the mood for monastic luxury to enjoy it.

## Service and facilities

Aman Kyoto's service is quiet and highly edited. Staff appear when useful, disappear when not, and keep the stay moving at a slow, controlled pace. It works because the whole property has one emotional brief: preserve calm. The spa and bathing rhythm strengthen that retreat logic.

Four Seasons Kyoto has the broader machine. It is stronger for guests who want concierge depth, family logistics, a more complete city-resort facility set, and a smoother base for moving in and out of the city. The service is polished, warm, and less hushed than Aman. For many travelers, that makes it easier.

## Food and evenings

Neither hotel should be chosen as a pure food destination in a city like Kyoto. Aman Kyoto's dining supports the retreat: quiet, seasonal, polished, and best when you want to stay inside the spell. Four Seasons Kyoto is more flexible and better suited to guests who will mix hotel meals with outside restaurants.

If your ideal evening is bath, garden, dinner, early sleep, Aman makes sense. If your ideal evening might involve Gion, Pontocho, or a restaurant across town, Four Seasons is the safer base.

## Price and value

Aman Kyoto is usually the harder value case because the premium is tied to atmosphere, privacy, and rarity. Those are real luxuries, but they only pay off if you use the hotel properly. A packed sightseeing schedule makes Aman feel like an expensive room far from where you keep going.

Four Seasons Kyoto is still very expensive, but its value is easier to justify across more trip types. You get strong rooms, a serious garden, service depth, facilities, and better access. It may be less magical, but it wastes less of your itinerary.

## Who should book Aman Kyoto

Book Aman Kyoto if you want:

- a slower Kyoto trip built around calm rather than coverage;
- a romantic or restorative stay where the property itself matters;
- privacy, forest atmosphere, bathing, and design restraint;
- a hotel that feels removed from the city rather than embedded in it.

Skip it if your plan involves multiple neighborhoods every day, late dinners out, or a first-timer's need to see everything.

## Who should book Four Seasons Kyoto

Book Four Seasons Kyoto if you want:

- a luxury hotel that still works as a practical Kyoto base;
- easier access to sightseeing, restaurants, and transport;
- more facilities and a broader service machine;
- a stay that suits couples, families, and first-time visitors equally well.

Skip it if you want the most distinctive, secluded, emotionally specific hotel in Kyoto. That is Aman's lane.

## Final verdict

The cleaner recommendation is this: **Aman Kyoto for stillness; Four Seasons Kyoto for access.**

Aman is the hotel you remember as a mood: forest, baths, silence, soft light, and the feeling that Kyoto has been reduced to one private landscape. Four Seasons is the hotel you recommend to more people: polished, comfortable, operationally strong, and better positioned for actually using the city.

If this is a once-in-a-decade romantic stay and the budget is comfortable, Aman Kyoto is the stronger emotional choice. If this is a first Kyoto trip, a family trip, or a culture-heavy itinerary, Four Seasons Kyoto is the wiser booking. Neither is the wrong answer. They simply ask for different trips.`,
    hotels_mentioned: [`aman-kyoto`, `four-seasons-kyoto`],
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
  console.log(`Starting Jun 27 seed...`);
  console.log(`Articles: ${articles.length}`);

  for (const article of articles) {
    const result = await pool.query(insertArticleQuery, [
      randomUUID(), article.slug, article.title, article.subtitle, article.category,
      article.hero_image, article.content_md, JSON.stringify(article.hotels_mentioned),
      article.published, article.featured
    ]);
    console.log(`${result.rowCount === 1 ? `Upserted` : `Skipped`} article: ${article.title}`);
  }

  const verification = await pool.query(
    `SELECT slug, title, published FROM articles WHERE slug = $1`,
    [`aman-kyoto-vs-four-seasons-kyoto`]
  );

  if (verification.rowCount === 0) {
    throw new Error(`Verification failed: aman-kyoto-vs-four-seasons-kyoto not found after seed`);
  }

  console.log(`Verified article: ${verification.rows[0].slug} | ${verification.rows[0].title} | published=${verification.rows[0].published}`);
  console.log(`Jun 27 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
