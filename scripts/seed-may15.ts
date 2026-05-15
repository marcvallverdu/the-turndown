import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// MAY 15 — SINGAPORE DESTINATION GUIDE
// Ongoing weekly cadence fallback after the original 8-week plan ended
// ============================================================================

const destinations = [
  {
    name: `Singapore`,
    slug: `singapore`,
    country: `Singapore`,
    region: `Asia`,
    hero_image: `https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600`,
    intro_md: `A city that runs on precision, appetite, and humidity—where the best luxury hotels know when to lean into colonial theatre, when to sharpen the skyline, and when to disappear into tropical calm.`,
    best_time: `February to April for slightly drier weather, July to September for a livelier events calendar, year-round if you can handle heat and build the day around air-conditioning, pools, and late dinners`,
    content_md: `# Singapore

Singapore is one of the easiest luxury cities in the world to get wrong. Visitors arrive expecting efficiency, a polished skyline, and maybe a few famous hawker centres, then leave having stayed in a hotel that could just as easily have been in Dubai, Miami, or Hong Kong. The city deserves better than that.

At its best, Singapore is not sterile at all. It is lush, strict, delicious, slightly over-engineered, and strangely seductive once you stop demanding old-world chaos from it. The appeal is not romance in the Paris sense or urban voltage in the Tokyo sense. It is composure. Things work. Cars arrive when they should. Public spaces are clean without feeling dead. Gardens are treated as civic infrastructure. Even the humidity has a kind of authority.

The best hotels in Singapore understand this balance. They do not try to invent atmosphere out of nowhere. They use the city's actual strengths: tropical greenery, skyline drama, serious food culture, and a deep bench of service talent. Some lean into heritage. Some go fully contemporary. A few manage the difficult trick of making a highly managed city feel genuinely soft.

## What Luxury Looks Like in Singapore

Luxury here is less about escapism than calibration. You are not in a city that invites improvisation at every turn. You are in a city that rewards smart planning, strategic location, and hotels that know how to shape the rhythm of the day. A weak Singapore hotel leaves you with a handsome room and no emotional residue. A strong one gives you relief from the heat, help with dining, a view worth pausing for, and a clear sense of how to move through the city without wasting energy.

This matters more than travelers sometimes realize. Singapore can feel small on a map and tiring in practice. The weather slows you down. Crossing from one mood of the city to another can involve more taxis and more air-conditioned transitions than expected. The right hotel turns that into a pleasure; the wrong one makes the city feel transactional.

## The Three Best Hotel Strategies

There are three convincing ways to do Singapore at the top end.

The first is **heritage glamour**: a hotel with history, ritual, and the sort of service culture that gives shape to the stay. This is where **Raffles Singapore** still matters. Its white colonnades, ceiling fans, and old colonial theatre could easily have tipped into parody, but the hotel remains too well-run for that. Done well, a stay here feels ceremonial in the best sense.

The second is **sleek urban altitude**: skyline views, sharp design, and direct access to the modern city. This is the Singapore of Marina Bay, glass towers, rooftop bars, and rooms that feel suspended above the tropics. It suits travelers who want the city as spectacle and prefer their luxury with a little more forward motion.

The third is **resort calm inside city limits**. This is the rarest and arguably the smartest for repeat visitors. Singapore's density makes genuine retreat unusually valuable, which is why **Capella Singapore** has such a persuasive role in the market. Sentosa is not the answer for everyone, but if you want the city softened by palms, lawns, and sea air, it works beautifully.

## Where to Stay

### Raffles Singapore: still the grand old answer

Raffles is the city's obvious icon, and obvious does not always mean wrong. The hotel remains one of the few heritage properties in Asia whose fame has not entirely swallowed its usefulness. You stay here for atmosphere, for the suite-only layout, for the ritual of arrival, for afternoon tea that still feels anchored to place rather than performed for content. The best reason to book it, though, is simpler: the hotel gives Singapore a narrative frame.

This is especially valuable for first-time visitors. The Civic District location is practical, the service is deeply experienced, and the property gives the city a degree of historical texture that many business-heavy itineraries otherwise miss. The potential downside is obvious too. If you dislike colonial grandeur or find hotel mythmaking tiresome, Raffles may feel too staged. I think the answer is to accept the theatre and judge the execution. The execution remains strong.

### Capella Singapore: the smartest escape

Capella is where I would send travelers who already know Singapore, or who suspect they will want less urban hardness by day two. On Sentosa, in restored colonial buildings with contemporary additions, it creates a version of Singapore that feels improbably green. There are palms, broad lawns, sea light, and enough distance from the downtown core that the city loosens its collar.

This is not the right base if your priority is walking to dinner or popping in and out of central neighborhoods all day. It is the right base if you want breakfast in quiet, afternoons by the pool, and a return each evening that feels like a decompression chamber. Capella gives the city a resort register without collapsing into family-theme-park energy, which on Sentosa is a real achievement.

### Marina Bay and the downtown skyline set

If Singapore's visual appeal is the point, staying around Marina Bay makes perfect sense. This is the city of mirrored towers, dramatic night views, rooftop drinks, and efficient movement between shopping, business meetings, and headline attractions. **Marina Bay Sands** remains the obvious name, mostly because the infinity pool is a piece of global travel iconography now, but it is worth asking whether you want the hotel for the stay or for the checklist.

I understand the draw. The views are real, the scale is extraordinary, and for certain trips the spectacle lands. But the property can also feel like infrastructure wearing a luxury badge. If you want something more polished and less crowd-forward, downtown alternatives often make for a calmer experience.

### The river and older Singapore

One of the city's pleasures is the stretch around the Singapore River, Boat Quay, and Robertson Quay, where the urban mood softens slightly and evening walks feel more natural. Hotels in or near these zones can make the city feel less corporate and more social. They are particularly useful if your Singapore revolves around dinners, bars, and a less sealed-off relationship with the street.

## What Makes a Great Singapore Hotel

First, **service matters enormously here**. Singapore has one of the deepest talent pools in Asian hospitality, and it shows. At the top end, you should expect efficiency without coldness, concierges who can actually book useful tables, and housekeeping that understands rhythm. In a climate this humid and a city this precise, sloppiness is unusually visible.

Second, **the pool is not decorative**. In many cities, a pool is a nice extra. In Singapore, it is practical infrastructure. After a morning outside, the ability to reset in water and shade changes the whole day. I would take a great pool over a marginally larger suite every time here.

Third, **dining support matters more than in many hotel markets**. Singapore is one of the best food cities in the world, but that does not mean every famous booking is worth your time. A smart hotel should be able to steer you between tasting-menu formality, classic hotel dining, and serious local eating without treating hawker culture like a charming side quest. One of the pleasures of staying well in Singapore is eating across registers: one excellent hotel breakfast, one deeply informal lunch, one polished dinner, repeat.

## How to Plan the City Around the Hotel

Singapore works best when you stop trying to do too much in the midday heat. Mornings are for movement: museums, neighborhoods, gardens, architecture, the first round of shopping if that is your thing. Midday is for retreat: lunch somewhere shaded, time at the pool, maybe a spa treatment, certainly air-conditioning. Evenings are when the city becomes pleasurable again.

That makes hotel choice strategic. A great hotel in Singapore is not only where you sleep. It is where the day is broken into manageable chapters. You may come back more often than you would in London or New York, and that is not a sign you are doing less. It is a sign you are doing the city correctly.

## What to Prioritize by Traveler Type

If this is your **first luxury trip to Singapore**, I would lean toward **Raffles**. It gives the city shape, texture, and enough centrality to keep the trip easy.

If you are on a **short city break and want maximum skyline energy**, stay around **Marina Bay** or the downtown core and choose the strongest room, view, and pool combination you can justify.

If you are a **repeat visitor, honeymooner, or someone who simply values calm over constant access**, choose **Capella Singapore** and accept the trade-off. The city becomes much more breathable from there.

If food is your main obsession, prioritize a hotel with a truly switched-on concierge and do not let the hotel trap you into dining only on property. Singapore rewards range.

## Common Mistakes

The biggest mistake is assuming efficiency alone makes for pleasure. It does not. A flawlessly run but generic hotel in Singapore can leave you feeling as though you slept inside premium airport infrastructure.

The second mistake is choosing Sentosa without really wanting resort rhythm. If you stay there but spend all day resenting the transfers, that is on you.

The third mistake is overvaluing famous views and undervaluing service, shade, and food access. In Singapore, those quieter variables often determine whether the trip feels sharp or merely expensive.

## Where We Would Stay

My own shortlist would start with **Raffles Singapore** for first-time grandeur, **Capella Singapore** for actual exhale, and a strong downtown high-rise for travelers chasing skyline modernity. If I wanted to write the classic Singapore story, I would book Raffles. If I wanted to recover from a long-haul trip in style, I would book Capella. If I had forty-eight hours and meetings, I would choose efficient urban height and make the pool non-negotiable.

## The Verdict

Singapore is not a city for sloppy hotel choices. It is too climate-driven, too food-rich, and too dependent on rhythm for that. The best hotels here do not simply offer luxury in the abstract. They edit the city for you. They decide whether Singapore arrives as colonial romance, tropical retreat, or futuristic skyline theatre.

That is the real game. Choose the version of the city you want, then pick the hotel that sharpens it. Done well, Singapore feels less like a stopover and more like one of Asia's most quietly rewarding luxury stays. Done badly, it becomes an expensive blur of glass and humidity. The difference, more than most places, is the hotel.`,
    published: 1
  }
];

const destinationColumns = [
  `id`, `slug`, `name`, `country`, `region`, `hero_image`, `intro_md`,
  `best_time`, `content_md`, `published`
];

const insertDestinationQuery = `INSERT INTO destinations (${destinationColumns.join(`, `)}) VALUES (${destinationColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting May 15 seed...`);
  console.log(`Destinations: ${destinations.length}`);

  for (const destination of destinations) {
    await pool.query(insertDestinationQuery, [
      randomUUID(), destination.slug, destination.name, destination.country,
      destination.region, destination.hero_image, destination.intro_md,
      destination.best_time, destination.content_md, destination.published
    ]);
    console.log(`Inserted destination: ${destination.name}`);
  }

  console.log(`May 15 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
