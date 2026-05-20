import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// MAY 20 — FRENCH RIVIERA DESTINATION GUIDE
// Ongoing weekly cadence
// ============================================================================

const destinations = [
  {
    name: `French Riviera`,
    slug: `french-riviera`,
    country: `France`,
    region: `Europe`,
    hero_image: `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600`,
    intro_md: `A coast of old money, sea light, and grand hotels that still know how to make an entrance—where to stay from Cap-Ferrat to Saint-Tropez without wasting a night on the wrong postcode.`,
    best_time: `May to June, September to early October`,
    content_md: `# French Riviera

The French Riviera is one of the few hotel markets in the world where glamour is not marketing language but basic infrastructure. This stretch of Mediterranean coast has spent more than a century training itself to host beautiful, rich, distracted people in a manner that feels both polished and faintly amused. It knows how to do arrival. It knows how to do terrace lunches. It knows how to make a room looking onto the sea feel like a social credential.

It also gets misread constantly. Too many travelers treat the Riviera as one interchangeable ribbon of yachts, beach clubs, and expensive rosé. In practice, it is a chain of distinct moods. Cap-Ferrat is calm, green, and discreetly moneyed. Nice is urban and democratic, with enough grit to keep things from turning too lacquered. Cannes is theatrical and slightly ridiculous, which can be either a bug or a feature depending on your tolerance for performance. Saint-Tropez remains seductive when you catch it at the right angle, but exhausting when you arrive with the same idea as everybody else.

The best Riviera hotels understand that the coast is not only about views. It is about editing the social temperature around you. A great hotel here decides whether your trip feels hushed, cinematic, flirtatious, or overexposed. Choose well and the Riviera feels timeless. Choose badly and it feels like a traffic jam in linen.

## What Luxury Means on the Riviera

Riviera luxury is rarely minimal. Even the quieter properties tend to prefer a little theatre: striped parasols, polished brass, old pines, white tablecloths moving in the sea breeze, the ritual of changing for dinner because the evening seems to ask for it. This is not the Maldives and it is not Mykonos. The point is not total retreat or relentless scene-chasing. The point is elegance with enough public life around it to keep the days from becoming sleepy.

That is why hotel choice matters so much. On this coast, you are often buying access to a mood more than to a room. The top properties sell proximity to water, yes, but also rhythm: breakfast on a terrace, a proper swim before lunch, a useful concierge, a boat arranged without fuss, an aperitif in a room full of people who look as though they came from somewhere interesting. Riviera hotels succeed when they make that sequence feel natural rather than staged.

## The Riviera Geography That Actually Matters

### Cap-Ferrat: the polished answer

If you want the most classically luxurious version of the Riviera, start with **Saint-Jean-Cap-Ferrat**. The peninsula has the sort of dense green beauty that money protects well: umbrella pines, stone walls, gardens dropping toward the water, villas hidden just enough to sharpen curiosity. It feels removed from the road noise and social hustle that define other parts of the coast.

This is where **Grand-Hôtel du Cap-Ferrat, A Four Seasons Hotel** still earns its reputation. The property has scale, lineage, and one of the most persuasive pool clubs in European hospitality. More importantly, it understands Riviera restraint. The glamour is obvious, but it is not desperate. You come here for old-school service, sea-facing calm, and the feeling that the coast's grand-hotel tradition still has real life in it.

Cap-Ferrat suits honeymooners, multi-generational families who value privacy, and travelers who want the Riviera without the peacocking. If your idea of fun is being able to hear the cicadas at breakfast, this is your zone.

### Nice: the city break that can actually hold luxury

Nice is sometimes treated as a gateway rather than a destination. That is lazy. It is the Riviera's most livable city, with broad boulevards, a genuinely useful airport, an old town that still feels alive, and a seafront whose faded grandeur remains part of the appeal. The luxury hotel scene here is stronger than people give it credit for.

The best Nice stays work for travelers who want more than a resort loop. You can swim in the morning, eat socca for lunch, browse galleries or markets in the afternoon, and still dress up for dinner. The city gives the coast texture. It also gives you options when the beach-club monoculture starts to feel repetitive.

### Cannes: if you want spectacle, admit it

Cannes is at its best when you stop pretending you are above it. Yes, the Croisette can feel overlit and overcomposed. Yes, parts of town are basically commerce in white trousers. But there is a reason luxury travelers keep coming back. Cannes knows how to do promenade glamour better than almost anywhere in Europe.

The classic addresses matter here because they give shape to the chaos. A strong hotel in Cannes turns the city's flash into energy rather than noise. Stay somewhere weak and you will feel trapped inside a glossy trade fair.

This is the right base if you want shopping, nightlife, beach clubs, and a little more movement than the quieter corners of the coast provide. It is not the most soulful part of the Riviera, but it can be tremendous fun if you lean into it.

### Saint-Tropez: still beautiful, still a trap if handled badly

Saint-Tropez has spent decades being caricatured, not always unfairly. In high summer it can feel like a competition between traffic, tables, and tans. Yet the underlying appeal is still real. The light is softer here. The old port remains charming in the early morning. The best hotels just outside the frenzy create a version of Saint-Tropez that feels sexy rather than merely crowded.

If you come, come with strategy. Stay somewhere that gives you distance from the daily circus, use the town selectively, and let the trip revolve around long lunches, sea swims, and unhurried evenings rather than trying to brute-force every famous address in one weekend.

## Where We Would Stay

If I wanted the Riviera in its most complete grand form, I would book **Grand-Hôtel du Cap-Ferrat**. It is still the benchmark because it understands proportion. Nothing is rushed, nothing feels cheaply updated, and the whole property makes the coast look the way people hope it will look when they book this part of France.

If I wanted a more playful, design-forward Riviera base with serious social capital, I would look hard at **Hotel du Cap-Eden-Roc** in Antibes. It is one of those hotels whose mythology can be annoying until you are actually there. Then the sea, the pines, and the old-money confidence do the convincing. This is Riviera life at full volume, but with enough space and beauty to keep it from becoming vulgar.

For Saint-Tropez, I would prioritize a hotel that buys you calm first and scene second. The town is more enjoyable when you can dip into it and leave. Too many people reverse the equation and spend their holiday paying to be inconvenienced.

## What Makes a Strong Riviera Hotel

First, **outdoor space matters more than square footage**. A compact room with a proper terrace and sea air will beat a larger room facing a car park every time. On this coast, private outdoor living is not a bonus. It is the point.

Second, **service should feel socially intelligent**. The Riviera attracts a mix of old regulars, first-timers, celebrities, families, and people who like to be noticed. Staff at the best hotels know how to read the room quickly and adjust without turning deferential or stiff. You want confidence, not fawning.

Third, **the lunch offering matters almost as much as dinner**. This is a coast built around the middle of the day: grilled fish, raw vegetables that actually taste of sun, cold rosé that is better than it needs to be, and the long drift from lunch table to water. A Riviera hotel that cannot feed you well at one in the afternoon is missing the plot.

Fourth, **access to the sea is not interchangeable**. Some properties have a proper swimming platform or beach club setup; others merely have a view. Do not confuse the two. Looking at water and entering it are completely different pleasures.

## How to Do the Riviera Properly

The Riviera improves when you slow it down. One market town in the morning, a swim before lunch, a long meal, a nap or a book, then dinner late enough that the heat has gone out of the air. People who try to attack the coast like a checklist usually end up spending half their holiday in traffic.

A car helps for flexibility, but it also tempts you to over-range. I would rather stay in one excellent hotel and make a few smart day moves than sleep in three mediocre places just to tick off more pins on the map. The coast is short enough to explore selectively and long enough to punish indecision.

Boat time is worth prioritising. Even a modest half-day on the water explains the Riviera to you properly: the shifting blue, the villas hidden in the trees, the little inlets only visible from offshore, the sense that the coastline was designed to be admired at a slight distance. If your hotel can arrange a boat cleanly, that is a real advantage.

## Common Mistakes

The first mistake is coming in July or August and then acting surprised by what July or August on the Riviera feels like. If you hate traffic, inflated rates, and beach clubs at full roar, go in May, June, or September and save yourself the complaint.

The second is overvaluing fame. Some Riviera addresses are famous because they are excellent. Others are famous because they were excellent twenty years ago and now coast on memory. This market is too expensive for nostalgia bookings.

The third is choosing a base that fights your actual trip. If you want calm, do not stay in the loudest part of Cannes. If you want nightlife, do not maroon yourself somewhere serene and then complain you need a driver every evening. The Riviera rewards honesty about what kind of holiday you are actually taking.

## Best Time to Go

**May and June** are the sweet spot. The coast feels awake, the sea begins to warm, hotel terraces are lively, and the whole place has that early-season sharpness before summer tips into congestion.

**September** is nearly as good and arguably better for seasoned travelers. The water is warm, the light is honeyed, and the mood is less frantic. You still get glamour, but with a little more breathing room.

I am much less interested in the Riviera in peak August unless your tolerance for crowds is unusually high or your social calendar specifically depends on being there then. Winter has its own melancholic charm in Nice, but if the goal is classic Riviera luxury, shoulder season wins.

## The Verdict

The French Riviera remains one of Europe's great luxury hotel destinations because it still offers something that newer resort markets cannot manufacture: social history, architectural memory, and a style of pleasure that feels inherited rather than invented by branding teams. Even when it is showy, it is showy with lineage.

The trick is not to ask the Riviera to be something it is not. It is not a secret. It is not cheap. It is not especially forgiving of poor planning. But when you get the hotel right, the whole coast clicks into focus: sea light at breakfast, salt on your skin after a swim, the hum of a terrace before dinner, and the particular satisfaction of a place that still believes glamour should be done properly.

That belief is why the Riviera endures. Beneath the headlines, the yachts, and the occasional absurdity, it still knows how to offer one of travel's simplest and hardest pleasures: a beautiful room by the sea in a place that understands exactly why you came.`,
    published: 1
  }
];

const destinationColumns = [
  `id`, `slug`, `name`, `country`, `region`, `hero_image`, `intro_md`,
  `best_time`, `content_md`, `published`
];

const insertDestinationQuery = `INSERT INTO destinations (${destinationColumns.join(`, `)}) VALUES (${destinationColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting May 20 seed...`);
  console.log(`Destinations: ${destinations.length}`);

  for (const destination of destinations) {
    await pool.query(insertDestinationQuery, [
      randomUUID(), destination.slug, destination.name, destination.country,
      destination.region, destination.hero_image, destination.intro_md,
      destination.best_time, destination.content_md, destination.published
    ]);
    console.log(`Inserted destination: ${destination.name}`);
  }

  console.log(`May 20 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
