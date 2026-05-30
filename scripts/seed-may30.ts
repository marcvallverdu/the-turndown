import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// MAY 30 — CAPRI DESTINATION GUIDE
// Weekly content refresh
// ============================================================================

const destinations = [
  {
    name: `Capri`,
    slug: `capri`,
    country: `Italy`,
    region: `Europe`,
    hero_image: `https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600`,
    intro_md: `Capri is not a beach holiday so much as a theatre of light, stone, boats, linen, and stairs. The right hotel decides whether the island feels glamorous or merely crowded.`,
    best_time: `May to mid-June and September to early October; July and August only if you book early, love heat, and can afford to let the hotel protect you from the day-trip crush`,
    content_md: `# Capri

Capri is easy to misunderstand. People arrive expecting beaches and discover cliffs. They expect an island and find a stage set. They expect simplicity because the map is small, then spend half the trip negotiating taxis, porters, funicular queues, lunch reservations, boat times, and the strange social pressure of the Piazzetta after dark.

The island is beautiful in a way that feels almost aggressive. The water below the Faraglioni turns impossible shades of blue. Bougainvillea spills over white walls. Lemon trees lean into hotel terraces. At night, the lanes smell of warm stone, perfume, and the first bitter sip of Campari. But Capri is also crowded, expensive, vertical, and ruthlessly seasonal. The same qualities that make it irresistible can make it tiring if you choose the wrong base.

That is why hotels matter here more than they do in most Mediterranean destinations. A good Capri hotel does not simply give you a room. It gives you a way to handle the island: when to move, when to disappear, where to swim, where to eat, and how to enjoy Capri without being consumed by the machinery built around enjoying Capri.

## What Luxury Means on Capri

Luxury on Capri is not about acreage. The island is too compact and too steep for the sprawling resort fantasy. It is about position, timing, and insulation.

The best hotels give you three things. First, **a view with consequence**: sea, rock, garden, or village life arranged in a way that makes staying put feel like an intelligent decision. Second, **logistical intelligence**: luggage handled cleanly from the marina, restaurant tables secured before you realise you need them, boat days arranged around weather rather than wishful thinking. Third, **a private rhythm** that lets you step in and out of the island's performance.

Capri's great weakness is overexposure. Too many visitors experience it at the exact wrong hours: arriving by ferry late morning, pushing through town at noon, eating somewhere convenient, photographing the same views, and leaving irritated by the crowd they helped create. The overnight guest has a different island available. Early morning belongs to hotel terraces, empty lanes, and first boats. Late evening belongs to linen jackets, low voices, and the soft clatter of dinner service after the day-trippers have gone.

A serious hotel helps you live in those better hours.

## Capri or Anacapri?

This is the first real choice.

**Capri town** is the social centre. Stay here if you want the Piazzetta nearby, if you like walking out after dinner, if boutiques and bars matter, and if the glamour of the island is part of the point. The trade-off is density. Capri town can feel thrilling at 10 p.m. and punishing at 2 p.m. A hotel here needs either a protected garden, a serious pool, or enough height and privacy to keep the street from invading the stay.

**Anacapri** is calmer, higher, and more removed. It has a looser tempo and better access to a quieter version of the island, especially around Monte Solaro and the western side. Stay here if you want space, views, and a little distance from the nightly circuit. The trade-off is that you are not in the centre of the Capri performance. That may be exactly the point.

Neither answer is universally better. Capri town gives you theatre. Anacapri gives you air. The mistake is booking one while secretly wanting the other.

## Where We Would Stay

If I wanted the most polished luxury answer on the island, I would start with **Jumeirah Capri Palace** in Anacapri. It understands the island's need for retreat. The hotel has the confidence of a proper Mediterranean grande dame without forcing the guest to live inside a museum. The art, the pool, the restaurants, the medical-spa legacy, and the height above the busier parts of the island all add up to a stay that feels controlled rather than merely decorative.

If I wanted the old Capri social fantasy, I would look toward **Grand Hotel Quisisana**. It sits at the centre of the action and has the kind of name that still carries weight on the island. This is not where you go to hide from Capri. It is where you go to inhabit it. The value depends on whether that proximity feels glamorous or exhausting to you.

For a smaller, more design-conscious stay, **Hotel La Palma** and **Capri Tiberio Palace** make sense for travelers who want Capri town without quite surrendering to old-hotel ceremony. The island has become more interesting at this end of the market: less stiff, more colourful, but still dependent on whether the operation can manage Capri's high-season pressure.

## The Hotels That Define the Choice

### Jumeirah Capri Palace: Anacapri with polish

Capri Palace works because it does not pretend the island is effortless. It gives you a calmer platform from which to approach it. The location in Anacapri lowers the temperature immediately: fewer crowds at the door, more space in the day, and a clearer sense that the hotel can be a destination rather than only a sleeping address.

The mood is Mediterranean but not rustic. White walls, art, tiled floors, sea-facing terraces, and a pool scene that feels grown-up rather than frantic. The better rooms and suites use the island's light well, which matters on Capri. Interiors can date quickly in this part of the world when hoteliers lean too hard into nautical cliché; Capri Palace generally avoids that trap by feeling collected rather than themed.

Its strongest advantage is rhythm. You can spend the morning on a boat, retreat for lunch and a swim, avoid the worst afternoon crush, then re-enter the island later when the light softens. That is the right way to do Capri.

### Grand Hotel Quisisana: the centre of the myth

Quisisana is Capri as social institution. Its address near the Piazzetta gives it a gravitational pull that no out-of-town property can replicate. You stay here because you want the island's old ritual: breakfast before the lanes fill, shopping within minutes, evening drinks, a slow dinner, and the pleasure of returning through town as if the whole place were an extended hotel lobby.

That proximity is both asset and liability. If you want privacy above all, there are better choices. If you want Capri's theatre with minimal friction, Quisisana still makes a compelling case. The hotel is at its best when you treat it as a grand base rather than a secluded resort.

### Hotel La Palma: the new centre

Hotel La Palma has given Capri town a more contemporary luxury option: brighter, sharper, less trapped by nostalgia. It suits travelers who want the location but not necessarily the full grande-dame posture. The risk with any fashionable Capri hotel is that the scene begins to outrun the stay. The test is simple: does the room feel as considered at midnight as the restaurant does at nine? When it does, the hotel becomes useful rather than merely photogenic.

### Capri Tiberio Palace: colour, character, and a little distance

Tiberio Palace sits close enough to Capri town to participate, but with enough personality to feel distinct. It is a good option for guests who dislike beige luxury and want a hotel with more wit. Capri rewards properties that can be playful without becoming silly; the island already supplies enough drama.

## How to Do Capri Properly

Stay overnight. That is the first rule. Capri as a day trip is mostly logistics and crowd management. Capri as an overnight stay begins to make sense after the last ferries thin out and the island exhales.

Book a boat, but do not romanticise it blindly. The best Capri day on the water starts early, follows conditions, and avoids treating the Blue Grotto as a moral obligation. A good skipper matters more than a famous itinerary. Swim where the water looks inviting, eat somewhere that does not require turning lunch into a performance, and come back before the sun has scraped all pleasure from your shoulders.

Use mornings seriously. Walk early to the Gardens of Augustus, down toward Marina Piccola, or through Anacapri before the heat gets muscular. By noon, Capri becomes less about exploration and more about managing exposure. That is when a good hotel pool, terrace, or shaded lunch proves its value.

Do not over-schedule restaurants. Capri has excellent meals and many mediocre expensive ones. A hotel concierge with taste can save you from the places that survive entirely on location and linen. You want seafood that tastes of the island, tomatoes with salt and oil, cold white wine, and enough simplicity to let the setting do its work.

## Common Mistakes

The first mistake is treating Capri like a beach destination. There are beach clubs and places to swim, but this is a rocky island of coves, platforms, boats, and ladders. If you need long sandy beaches, go elsewhere.

The second is staying in Capri town while craving peace. The centre is wonderful in the right mood and oppressive in the wrong one. Be honest about your tolerance for crowds, heat, and social density.

The third is ignoring luggage and arrival logistics. The marina can be chaotic, especially in high season. A hotel that handles arrival well is not a minor convenience; it is the difference between beginning the trip elegantly and starting it sweaty, cross, and overcharged.

The fourth is visiting only in August because that is when everyone else goes. Capri in August has glamour, but it also has maximum heat, maximum prices, and maximum compression. May, June, September, and early October usually reveal a better island.

## Best Time to Go

**May and early June** are excellent: the island is awake, the light is clean, flowers are still doing their work, and the worst summer density has not arrived.

**September and early October** may be even better if swimming matters. The sea is warmer, the evenings are softer, and the island feels less frantic once the peak-season charge begins to drain away.

**July and August** are not impossible, but they require money, patience, and a hotel that can protect the middle of the day. Book restaurants, boats, and transfers early, then stop pretending spontaneity will save you.

**Winter** is a different island: atmospheric, quiet, and often sleepy. Many luxury hotels close or reduce operations, so this is not the moment for the full Capri fantasy.

## The Verdict

Capri is still worth it, but only if you stop asking it to be easy. The island's glamour has always depended on friction: the climb from the marina, the narrow lanes, the boat-only coves, the impossibility of moving invisibly through a place everyone wants to see.

The right hotel turns that friction into texture. It gives you shade when the lanes are full, a terrace when the ferry crowds arrive, a boat before the water gets busy, and a bed close enough to the island you actually came for.

Choose Capri town if you want to be inside the performance. Choose Anacapri if you want to watch it from slightly above. Choose badly and Capri can feel like an expensive queue with good views. Choose well and it becomes what it has always promised to be: a small, glittering, deeply impractical island where the evening light makes almost every inconvenience forgivable.`,
    published: 1
  }
];

const destinationColumns = [
  `id`, `slug`, `name`, `country`, `region`, `hero_image`, `intro_md`,
  `best_time`, `content_md`, `published`
];

const insertDestinationQuery = `INSERT INTO destinations (${destinationColumns.join(`, `)}) VALUES (${destinationColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting May 30 seed...`);
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
    [`capri`]
  );

  if (verification.rowCount === 0) {
    throw new Error(`Verification failed: capri not found after seed`);
  }

  console.log(`Verified destination: ${verification.rows[0].slug} | ${verification.rows[0].name} | published=${verification.rows[0].published}`);
  console.log(`May 30 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
