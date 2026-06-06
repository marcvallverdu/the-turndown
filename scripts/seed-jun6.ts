import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// JUN 6 — SICILY DESTINATION GUIDE
// Weekly content refresh
// ============================================================================

const destinations = [
  {
    name: `Sicily`,
    slug: `sicily`,
    country: `Italy`,
    region: `Europe`,
    hero_image: `https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1600`,
    intro_md: `Sicily is where Italian luxury becomes less polished and more interesting: Greek ruins, volcanic dust, convent hotels, hot stone towns, and a coastline that rewards precision over laziness.`,
    best_time: `May to June and September to October; July works if you want heat, Etna views, and sea days, while August is for travelers with reservations, patience, and a tolerance for crowds`,
    content_md: `# Sicily

Sicily is not an easy island, which is one reason luxury travel has become so interested in it. The island refuses to behave like a simple beach destination. It is too old, too layered, too hot in the wrong hour, too full of ruins and markets and church bells and volcanic shadow. A lazy hotel can make Sicily feel dusty and difficult. A good one turns that difficulty into texture.

The best stays here understand the island's contradictions. Sicily can be aristocratic and rough-edged in the same afternoon. It has Greek theatres, Norman mosaics, Arab-Norman palaces, baroque towns rebuilt after earthquakes, fishing ports that still smell properly of the sea, and vineyards growing in black Etna soil. It also has traffic, patchy service outside the best addresses, and distances that look innocent on a map until a mountain road or summer queue corrects you.

That means hotel choice matters. Sicily rewards travelers who know whether they want Taormina theatre, Noto honey-colored restraint, Palermo appetite, Etna wine-country air, or a resort that lets the island soften around the edges. Choose casually and you spend the trip in a car. Choose well and Sicily becomes one of Europe's richest luxury trips: not immaculate, but alive.

## What Luxury Means in Sicily

Sicilian luxury is not about smoothness alone. The island is too forceful for that. The strongest hotels here offer three things: a clear sense of place, operational competence, and enough shade to let you survive the middle of the day with grace.

The clear sense of place matters because Sicily punishes generic design. A room could have Carrara marble, linen curtains, and a serious bath, but if it could just as easily be in Mykonos or Mallorca, the hotel has missed the point. Sicily wants stone, courtyards, ceramics, citrus, iron balconies, lava rock, chapel silence, sea salt, and food that tastes like it has opinions.

Operational competence matters because the island can fray at the edges. Transfers, restaurant bookings, beach clubs, archaeological guides, Etna excursions, boats to the Aeolian Islands, and late-night arrivals all require someone who knows what they are doing. A good concierge in Sicily is not a decorative amenity. It is protection.

Shade matters because luxury on the island is partly about timing. Morning is for ruins, markets, swims, and church interiors still cool from the night. Afternoon is for pools, shutters, long lunches, and refusing to pretend that ambition is admirable in 34-degree heat. Evening is when the island gives itself back: stone streets warming your ankles, grilled swordfish, almond granita, the smell of jasmine and scooter exhaust, a glass of Etna Bianco that tastes sharper than the view suggests.

## Taormina: The Grand Stage

Taormina is the obvious luxury gateway and still the most cinematic. It hangs above the Ionian Sea with Mount Etna in the distance, all terraces, theatre views, bougainvillea, and social choreography. It is also crowded, expensive, and occasionally too pleased with itself. That is part of the bargain.

**San Domenico Palace, Four Seasons Hotel** is the hotel that reset the conversation. The former convent has the bones Sicily needs: cloisters, terraces, heavy stone, sea views, and a sense of drama that no designer had to invent. The White Lotus attention made it famous to a wider audience, but the hotel would matter without television. It gives Taormina the level of polish the town always wanted while preserving enough monastic gravity to keep the glamour from floating away.

The appeal is not only the view, though the view is absurd. It is the ability to step from a serious hotel into Taormina's evening performance without sacrificing calm when you return. The weakness is obvious: rates are high, demand is intense, and the town can feel compressed in peak season. Stay here if you want Sicily with theatre built in.

**Grand Hotel Timeo, A Belmond Hotel** remains the classic answer. It has one of the great hotel terraces in Italy, positioned beside the Greek theatre with Etna and the sea arranged almost too neatly in the background. Timeo is more old-school than San Domenico Palace and, in the right mood, more romantic. It suits travelers who want the grand-hotel version of Taormina: aperitifs, garden paths, polished service, and the sense that the view has been expecting you.

## Noto and the South-East: Baroque Heat and Better Taste

If Taormina is the stage, the south-east is the slow burn. Noto, Modica, Ragusa, and Siracusa offer a different Sicily: honey-colored churches, empty-feeling afternoon streets, pastry shops, noble palazzi, and a drier, more architectural beauty. This part of the island is where design-conscious travelers increasingly look when Taormina feels too obvious.

**Il San Corrado di Noto** is one of the most persuasive luxury bases in the area because it gives the south-east what it needs: space. The property sits outside town, which means you get resort ease without losing access to Noto's evening rituals. Rooms and suites are generous, the pool life is serious, and the atmosphere is calmer than the coastline. It works especially well for travelers who want baroque towns by morning and a proper retreat by afternoon.

The important thing in this part of Sicily is not to overfill the itinerary. Noto at sunset is enough. So is a morning in Ortigia, a lunch of raw prawns and cold white wine, a drive through dry stone walls and olive trees, a granita eaten standing up because the table you wanted was full. The pleasure lies in accumulation rather than conquest.

For smaller stays, the south-east has a growing set of restored masserie, palazzi, and countryside houses. Some are excellent; some are prettier online than they are operationally. The question to ask is whether the hotel can handle heat, housekeeping, breakfast, and restaurant advice with the same care it gives to its tiles.

## Palermo: Appetite, Noise, and Urban Sicily

Palermo is not where most luxury travelers begin, which is exactly why it deserves attention. It is louder, denser, and more difficult than Taormina or Noto, but it gives Sicily a city pulse: markets, palaces, churches, street food, opera, traffic, and an atmosphere that feels closer to the island's true engine room.

Luxury in Palermo is still uneven. The city has grand buildings and serious potential, but fewer hotels that deliver the full high-end apparatus. That can be a virtue if you travel well. Palermo is less about being cosseted and more about having a strong base, a clever guide, and the appetite to let the city happen to you.

Stay here for food, history, and energy. Do not stay here if your idea of Sicily is poolside quiet and perfect service. Palermo asks more of the traveler, and gives more back when met with curiosity.

## Etna: Wine, Altitude, and Volcanic Air

Mount Etna changes the island's mood. The air cools, the soil darkens, vines climb the slopes, and Sicily stops feeling purely Mediterranean. This is the island's most compelling answer to travelers who care about wine, landscape, and a little strangeness.

Etna hotels and country estates are rarely as polished as the top Taormina addresses, but they offer a different reward. You wake to volcanic light, visit wineries where Nerello Mascalese tastes of ash and red fruit, eat mushrooms, pistachios, and grilled meat, then look down toward the sea from a landscape that feels both fertile and unstable. It is a useful corrective to the idea that Sicily is only beaches and baroque towns.

A smart itinerary might combine two nights in Taormina, three in the south-east, and one or two near Etna if wine matters. Trying to do the entire island in one stay is how Sicily becomes a blur of roads and missed lunches.

## Where We Would Stay

For a first luxury trip, I would choose **San Domenico Palace** if the budget allows and the goal is the most complete Taormina stay. It has the position, the story, the service muscle, and the ability to make the town feel glamorous rather than merely busy.

For a more classical romantic stay, **Grand Hotel Timeo** is still hard to argue with. Its terrace is not subtle, but Sicily is not always improved by subtlety.

For a slower, more contemporary trip, I would build around **Il San Corrado di Noto** and use it as a base for Noto, Modica, Ragusa, Marzamemi, and Siracusa. This is the Sicily I would recommend to travelers who have already done the obvious Italian circuits and want something more textured.

For Palermo, I would lower the expectation of resort luxury and raise the expectation of city pleasure. The reward is not the hotel alone; it is the combination of a good room, a brilliant guide, a market breakfast, a chapel mosaic, and a dinner that makes Northern Italy feel emotionally under-seasoned.

## How to Plan Sicily Properly

Do not move every night. Sicily is large, roads can be slow, and the best parts of the island improve when you give them time. Two bases are better than five. Three only if you have at least ten days.

Do not treat August as neutral. It is hot, crowded, expensive, and socially intense. Some travelers love that charge. Others spend the whole trip wondering why every beautiful thing requires a queue. June and September are more intelligent months for most luxury travelers.

Book restaurants and guides early. Sicily's best meals are not always in the most polished rooms, and the best guides can turn a pile of stones into a morning you remember for years. The island's history is too dense to skim entirely on your own.

Be honest about beaches. Sicily has wonderful swimming, but it is not one long sandy resort strip. The best beaches may require driving, beach-club bookings, boats, stairs, or tolerance for crowds. If you want effortless sand outside the room, choose the hotel accordingly rather than assuming the island will arrange itself around you.

## Common Mistakes

The first mistake is trying to see all of Sicily in a week. Palermo, Taormina, Etna, Noto, Siracusa, Agrigento, the Aeolian Islands, and the western coast cannot be folded neatly into one elegant itinerary. Sicily resists efficiency, and efficiency is usually where luxury dies.

The second is choosing Taormina because it is famous, then complaining that it is famous. Taormina is beautiful and busy. That is the deal. If you want privacy, choose a hotel that can create it or look elsewhere on the island.

The third is underestimating the heat. Summer Sicily is physical. It changes what you can do, what you want to eat, how much you can walk, and whether that charming room without perfect air conditioning remains charming at 3 a.m.

The fourth is expecting mainland Italian smoothness. Sicily has its own tempo. Service can be brilliant at the top end and casual elsewhere. Roads can surprise you. Opening hours can feel theoretical. The traveler who needs constant control may find the island exasperating. The traveler who can release a little control may find it addictive.

## Best Time to Go

**May and June** are excellent: warm enough for sea days, bright enough for long evenings, and not yet fully consumed by peak-season pressure. June is especially good if you want summer energy without August saturation.

**September and October** are arguably better for food and atmosphere. The sea is warm, the light softens, and the island feels less strained. Etna wine country is particularly appealing as harvest energy moves through the slopes.

**July** is hot but workable if you plan intelligently: early starts, afternoon retreat, strong air conditioning, and dinners after the light has lowered. **August** should be chosen knowingly, not accidentally.

**Winter and early spring** reveal a quieter Sicily, especially in cities and archaeological sites, but many resort properties reduce services or close seasonally. This is a cultural trip more than a luxury-resort trip.

## The Verdict

Sicily is one of Europe's most rewarding luxury destinations precisely because it has not been flattened into perfect ease. The island still has edges. It still smells of frying panelle, hot stone, church wax, seaweed, citrus peel, and petrol. It still makes you work a little for the best moments.

That work is part of the pleasure. A hotel in Sicily should not erase the island. It should give you a better way to meet it: a terrace at the right hour, a driver who knows which road to avoid, a room that stays cool, a plate of red prawns, a glass from Etna, and enough local intelligence to keep beauty from becoming logistics.

Go for Taormina if you want drama. Go for Noto and the south-east if you want taste, architecture, and slower heat. Add Palermo if you have appetite and nerve. Add Etna if wine and altitude matter. Above all, do not ask Sicily to become simpler than it is. The island's difficulty is not a flaw. It is the thing that keeps the glamour from becoming empty.`,
    published: 1
  }
];

const destinationColumns = [
  `id`, `slug`, `name`, `country`, `region`, `hero_image`, `intro_md`,
  `best_time`, `content_md`, `published`
];

const insertDestinationQuery = `INSERT INTO destinations (${destinationColumns.join(`, `)}) VALUES (${destinationColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting Jun 6 seed...`);
  console.log(`Destinations: ${destinations.length}`);

  for (const destination of destinations) {
    const result = await pool.query(insertDestinationQuery, [
      randomUUID(), destination.slug, destination.name, destination.country,
      destination.region, destination.hero_image, destination.intro_md,
      destination.best_time, destination.content_md, destination.published
    ]);
    console.log(`${result.rowCount === 1 ? `Inserted` : `Skipped existing`} destination: ${destination.name}`);
  }

  const verification = await pool.query(
    `SELECT slug, name, published FROM destinations WHERE slug = $1`,
    [`sicily`]
  );

  if (verification.rowCount === 0) {
    throw new Error(`Verification failed: sicily not found after seed`);
  }

  console.log(`Verified destination: ${verification.rows[0].slug} | ${verification.rows[0].name} | published=${verification.rows[0].published}`);
  console.log(`Jun 6 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
