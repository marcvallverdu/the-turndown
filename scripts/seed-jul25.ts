import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// JUL 25 — BANGKOK DESTINATION GUIDE
// Weekly growth loop: active queued destination guide for best luxury hotels Bangkok.
// Sources checked: official Mandarin Oriental Bangkok, Capella Bangkok, Four
// Seasons Bangkok, Peninsula Bangkok, Tourism Authority of Thailand, and live
// The Turndown review routes for Capella/Mandarin Oriental Bangkok.
// ============================================================================

const destinations = [
  {
    name: `Bangkok`,
    slug: `bangkok`,
    country: `Thailand`,
    region: `Asia`,
    hero_image: `https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1600`,
    intro_md: `Bangkok luxury is a choice between river ceremony, contemporary resort calm, and vertical city polish. The right hotel decides whether the city feels exhilarating or merely exhausting.`,
    best_time: `November to February for cooler, drier weather; March and April are hot, while May to October can work if you accept rain and plan around traffic`,
    content_md: `# Bangkok

Bangkok is one of the few cities where choosing the hotel genuinely changes the trip. In Paris or London, a great address can refine the stay. In Bangkok, it can decide the entire rhythm: river or skytrain, ceremony or retreat, old-city temples or shopping districts, long meals by the Chao Phraya or quick crossings through traffic.

That is why the best Bangkok hotels should not be treated as interchangeable five-star rooms. The city has several luxury geographies, and each asks something different of the traveler. Riverside hotels slow the trip down and make Bangkok feel almost cinematic. Central business-district towers give you access, restaurants, malls, and air-conditioned efficiency. Smaller design-led addresses can feel more connected to neighborhood life, but only if you already know how you want to use the city.

The Turndown currently has full reviews of [Mandarin Oriental Bangkok](/reviews/mandarin-oriental-bangkok) and [Capella Bangkok](/reviews/capella-bangkok). Use this guide as the city-level decision layer: where to stay, when the river is worth the trade-off, and which kind of Bangkok luxury actually suits the trip.

## The Bangkok hotel decision

Bangkok rewards specificity. A vague search for the “best luxury hotel” quickly turns into a list of famous names that answer different questions.

**Choose the river** if the hotel is meant to be a refuge. The Chao Phraya gives Bangkok scale, light, movement, and a natural sense of arrival. It also creates friction. Road transfers can be slow, and some neighborhoods require a boat, a car, or both. The trade-off is that the best riverside hotels feel less like places to sleep and more like ways to interpret the city.

**Choose central Bangkok** if the trip is built around restaurants, shopping, meetings, galleries, or quick movement between neighborhoods. Sukhumvit, Phloen Chit, Siam, and the areas around Lumphini are usually more practical. The risk is that the stay becomes efficient but emotionally thinner: a polished tower above traffic rather than a hotel with a strong sense of place.

**Choose Charoen Krung** if you want the river without total heritage formality. This is where Bangkok's creative and old commercial layers overlap: shophouses, galleries, embassies, dining rooms, traffic, river piers, and a growing luxury-hotel cluster. It is not frictionless. It is more interesting than that.

## The river hotels

Bangkok's luxury conversation still begins on the Chao Phraya. The river gives the city a front door, and the best hotels along it understand that arrival matters.

**Mandarin Oriental Bangkok** is the grand-hotel answer. Mandarin Oriental describes the property as a Chao Phraya landmark that has hosted travelers for more than 150 years, and that heritage is not decorative here. It shapes the mood: ceremony, staff memory, polished public rooms, and the feeling that the hotel knows exactly what it represents. Book it if you want Bangkok with tradition, service gravity, and a strong sense of occasion. Skip it if you want the newest design language or a hotel that recedes quietly into the background.

**Capella Bangkok** is the more contemporary riverside answer. Capella describes the hotel as a low-rise sanctuary with 101 suites and villas facing the river, including villas at the water's edge. The mood is calmer, more residential, and more design-conscious than the old grande-dame model. It suits travelers who want Bangkok filtered through space, river views, wellness, and Charoen Krung texture rather than lobby mythology.

**Four Seasons Hotel Bangkok at Chao Phraya River** sits in the same riverside conversation but plays a broader resort-city role. Four Seasons positions it around contemporary design, Chao Phraya calm, pools, wellness, courtyards, and Michelin-recognized dining. For many travelers, this will be the most complete modern riverside package: less heritage than Mandarin Oriental, more scale and facility depth than a boutique hotel, and a strong argument for staying on-property between city outings.

**The Peninsula Bangkok** makes a different case from the opposite bank. Its advantage is space, river views, and a softer resort feeling across the water from the most compressed parts of the city. Peninsula's own material emphasizes its riverside setting and Peninsula Time flexible arrival/departure benefit. It is a good reminder that the “best” Bangkok hotel is often the one whose logistics match the way you actually travel.

## When not to stay on the river

The river is romantic. It is not always convenient.

If your Bangkok stay is only one or two nights and the agenda is restaurants, shopping, meetings, or a quick stopover, a central hotel may be easier. Traffic can make short distances feel comic. Boats help, but they do not solve every movement. A riverside hotel is strongest when you have enough time to let the river become part of the trip rather than a pretty obstacle between appointments.

The city-center luxury set is also improving. Park Hyatt Bangkok, Rosewood Bangkok, The Sukhothai, Siam Kempinski, and newer high-profile openings compete by offering direct access to malls, restaurants, parks, embassies, and transit. These hotels can make Bangkok feel sharper and more usable, even if they rarely deliver the same arrival romance as the Chao Phraya.

The simple rule: stay on the river when the hotel is part of the reason for coming. Stay central when Bangkok itself has to move quickly.

## First visit or return visit?

For a first serious Bangkok trip, the river usually makes the strongest emotional case. You see temples, ferries, barges, towers, dinner boats, old trading districts, and morning light in one frame. The city becomes legible. Mandarin Oriental and Capella are especially clear choices because they offer two distinct readings of that river: heritage institution versus contemporary sanctuary.

For a return trip, the answer depends on what you missed the first time. If you want galleries, restaurants, bars, and street-level wandering, Charoen Krung and nearby riverside hotels remain useful. If you want shopping, appointments, and frictionless movement, central Bangkok makes more sense. If you are using Bangkok as a stop before islands or northern Thailand, convenience may matter more than atmosphere.

Families should think hard about pools, connecting rooms, traffic tolerance, and whether children will enjoy boat transfers or find them tiring after flights. Couples can lean more heavily into mood: a river suite, dinner with a view, and slower mornings are often worth more than shaving fifteen minutes off a taxi ride.

## Best time to go

November through February is the easiest window: cooler by Bangkok standards, generally drier, and better suited to walking, temples, river movement, and rooftop evenings. It is also the most popular period, so the strongest rooms at the best hotels need early planning.

March and April are hot enough to change the way you use the city. A good hotel pool, spa, shaded terrace, and sensible car planning become more than amenities. They become survival tools. May through October brings more rain and humidity, but it can still work for travelers who plan loosely, use the hotel well, and do not treat every shower as a failed day.

## How to choose

Choose [Mandarin Oriental Bangkok](/reviews/mandarin-oriental-bangkok) if you want heritage, ceremony, and the most classic version of riverside Bangkok.

Choose [Capella Bangkok](/reviews/capella-bangkok) if you want contemporary calm, river-facing rooms, and a hotel that feels more like an urban resort than an institution.

Look closely at Four Seasons Bangkok if you want a large modern riverside hotel with serious facilities, pools, wellness, and dining depth.

Consider The Peninsula Bangkok if space, cross-river views, and a softer resort rhythm matter more than being on the most obvious side of town.

Stay central if you are optimizing for restaurants, shopping, business, or a short stopover. The best Bangkok hotel is not the one with the grandest lobby. It is the one that removes the right kind of friction from a city that has plenty to spare.

## The verdict

Bangkok is not a destination where luxury means escape from place. The best hotels work because they give you a controlled relationship with the city: river when you need scale, service when the heat and traffic start to grind, design when the city feels chaotic, and enough calm to make the next outing feel like a choice rather than an obligation.

For most first-timers with the budget, the river is still the answer. For travelers who know Bangkok, the decision becomes more interesting. Choose the hotel according to the trip's tempo, not its reputation. Bangkok will supply the intensity either way. Your hotel decides whether that intensity becomes pleasure.`,
    published: 1
  }
];

const destinationColumns = [
  `id`, `slug`, `name`, `country`, `region`, `hero_image`, `intro_md`,
  `best_time`, `content_md`, `published`
];

const insertDestinationQuery = `INSERT INTO destinations (${destinationColumns.join(`, `)}) VALUES (${destinationColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, country = EXCLUDED.country, region = EXCLUDED.region, hero_image = EXCLUDED.hero_image, intro_md = EXCLUDED.intro_md, best_time = EXCLUDED.best_time, content_md = EXCLUDED.content_md, published = EXCLUDED.published, updated_at = NOW()`;

const seed = async () => {
  console.log(`Starting Jul 25 seed...`);
  console.log(`Destinations to upsert: ${destinations.length}`);

  for (const destination of destinations) {
    await pool.query(insertDestinationQuery, [
      randomUUID(), destination.slug, destination.name, destination.country,
      destination.region, destination.hero_image, destination.intro_md,
      destination.best_time, destination.content_md, destination.published
    ]);
    console.log(`Upserted destination: ${destination.name}`);
  }

  const verification = await pool.query(
    `SELECT slug, name, published FROM destinations WHERE slug = $1`,
    [`bangkok`]
  );

  if (verification.rowCount === 0) {
    throw new Error(`Verification failed: bangkok not found after seed`);
  }

  console.log(`Verified destination: ${verification.rows[0].slug} | ${verification.rows[0].name} | published=${verification.rows[0].published}`);
  console.log(`Jul 25 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
