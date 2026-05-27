import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// MAY 27 — MARRAKECH DESTINATION GUIDE
// Ongoing weekly cadence
// ============================================================================

const destinations = [
  {
    name: `Marrakech`,
    slug: `marrakech`,
    country: `Morocco`,
    region: `Africa`,
    hero_image: `https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1600`,
    intro_md: `A city of dust, roses, and ritual—where the right luxury hotel gives you shade, silence, and a way back into Marrakech once the medina starts shouting.`,
    best_time: `March to May and October to November; winter is pleasant for city days, while high summer is only worth considering if you plan your life around thick walls, courtyards, and pools`,
    content_md: `# Marrakech

Marrakech can feel like a seduction or a full-contact sport. Often it is both in the same afternoon.

This is a city that does not ease you in gently. It announces itself in heat, dust, scooters, prayer calls, orange blossom, brass trays, diesel, mint, and the dry slap of courtyard doors closing behind you. You come for colour, but the real pleasure is contrast: the frenzy of the medina against the hush of a riad; the pink walls and low-slung streets against the theatrical calm of a grand hotel garden; the sensory overload outside against the highly edited world inside.

That contrast is why hotel choice matters so much in Marrakech. In plenty of luxury destinations, the hotel is an accessory to the trip. Here it is part of your survival strategy. A weak hotel leaves you stranded in decorative fantasy or logistical hassle. A strong one gives you rhythm: an early walk, a long shaded lunch, a pool when the city turns white with heat, and enough service intelligence to move you in and out of the action without friction.

## What Luxury Means in Marrakech

Luxury in Marrakech is not about sleek neutrality. This is not a city that rewards beige restraint. The best properties understand texture: tadelakt walls, cedar ceilings, patterned floors, candlelit courtyards, linen that feels cool against sun-warmed skin, and gardens dense enough to lower your pulse before you have even checked in.

But design alone is cheap theatre if the operation is wrong. Real luxury here means three things.

First, **temperature control**. I do not just mean air-conditioning, though you will want it. I mean the deeper craft of shade, water, courtyards, gardens, and architecture that takes the edge off the day.

Second, **service that can choreograph the city**. Marrakech is better when someone competent can arrange the obvious things cleanly—restaurant reservations, guides, hammams, shopping, transfers—and steer you away from the traps.

Third, **a sense of enclosure**. The city is exhausting in the best way, but exhausting all the same. A great Marrakech hotel feels like a private counterargument to the street outside.

## The Marrakech Hotel Geography That Actually Matters

### Inside the medina: atmosphere first

Staying in the medina is the purest version of the Marrakech fantasy. You wake to rooflines, birds, filtered light, and the feeling of living inside a secret. A great riad or small luxury property in the old city gives you immediate access to souks, historic sites, and the emotional texture that makes Marrakech worthwhile in the first place.

The trade-off is practicality. Cars cannot glide up to your door. Navigation can fray the nerves. Noise travels in strange ways. For first-timers, the medina can feel magical at breakfast and mildly punishing by dinner if the hotel is not expertly run.

This is the right choice if you want intimacy, atmosphere, and a closer relationship with the city than a resort can offer. It is less ideal if you want broad lawns, large pools, or the kind of service infrastructure only larger hotels can maintain.

### The Palmeraie: space, shade, and strategic distance

The **Palmeraie** gives you the Marrakech version of retreat. Palm groves, larger grounds, more generous pools, and a little separation from the old city’s constant demands. This is where the city starts to feel more like a proper resort destination.

The downside is obvious: you are staying outside the heart of things. If your idea of a Marrakech trip involves walking out the door and into the souks, the Palmeraie can feel detached. If your idea of a good holiday includes breakfast under trees, a late swim, and only selective exposure to the medina, it makes much more sense.

### Hivernage and beyond: polished but less transporting

The newer hotel zones, including **Hivernage**, can be convenient and comfortable, especially for travelers who want modern infrastructure and easy access by car. But many properties here feel more globally legible and less emotionally specific. That may be a virtue if you want predictability. It is a weakness if you came to Marrakech for atmosphere.

## Where We Would Stay

If I wanted the most complete luxury answer in Marrakech, I would book **Royal Mansour Marrakech**. It is extravagant, yes, but the extravagance has discipline. The private riads, the labyrinthine layout, the craftsmanship, the gardens, the service choreography—it all adds up to a hotel that understands why people come to Marrakech and how to protect them from its rougher edges without neutering the city.

If I wanted old-guard glamour with more visible social life, I would look at **La Mamounia**. It remains one of those hotels that people love to call overrated right up until they walk through the gardens at dusk. Then the spell tends to reassert itself. It is theatrical, famous, and not especially interested in modesty, which is precisely why it works.

For a more intimate medina stay, I would prioritise a property that understands privacy and logistics equally well. In Marrakech, charm without operational competence gets old fast.

## The Two Great Marrakech Hotels

### Royal Mansour Marrakech: the city perfected into ritual

Royal Mansour is almost absurdly polished, and I mean that as praise. It takes the architectural language of the medina—courtyards, riads, hidden doors, ornament, shadow—and reworks it at an almost fanatical level of detail. The result is less like a hotel and more like a private city designed by someone with unlimited patience and a serious budget.

What makes it exceptional is not only the craft. It is the sense of controlled privacy. You do not feel parked in a room; you feel contained in your own small domain. The service is similarly exacting. There is very little visible scramble. Things simply happen when they should.

This is the best choice for travelers who want luxury at the highest level, value discretion, and do not mind paying for a hotel that fully understands its own status.

### La Mamounia: glamour, gardens, and confidence

La Mamounia is a different proposition. Less private, more social. Less hushed, more performative. It is a grand hotel in the classic sense, and that still has its pleasures. The gardens are a real asset, especially in a city where heat can flatten the day. The public rooms have swagger. The entire property knows how to stage arrival, drinks, dinner, and evening mood.

There are travelers who will prefer Royal Mansour’s precision. I understand that. But La Mamounia offers something slightly looser and more romantic: a visible hotel life, a stronger sense of occasion, and a kind of old-world confidence that newer luxury brands spend fortunes trying to imitate.

## What Makes a Great Marrakech Hotel

First, **gardens matter more than views**. This is not a city where you book for dramatic skylines. You book for shade, scent, and the way a garden can turn the temperature down on both the air and your nervous system.

Second, **the pool has real strategic value**. By early afternoon, especially in warmer months, Marrakech becomes a city that strongly encourages retreat. A serious pool is not a decorative extra. It is part of the day’s architecture.

Third, **food should feel local without becoming costume**. Too many luxury hotels everywhere reduce regional cuisine to a few marketable dishes and some lanterns. The best Marrakech hotels understand seasoning, tea service, breakfast, late-night sweets, grilled meats, and how to make a meal feel rooted rather than themed.

Fourth, **concierge quality matters enormously**. Marrakech is full of people ready to sell you something, redirect you, overcharge you, or waste your time. A switched-on hotel can save a trip from mediocrity by arranging the right guide, the right driver, the right restaurant, and the right pace.

## How to Do Marrakech Properly

Marrakech improves when you stop trying to conquer it.

Do the medina early, before the heat and the density peak. Leave room for a return to the hotel in the middle of the day. Swim. Read. Sleep if you must. Then go back out in the late afternoon once the light softens and the city becomes seductive again.

Do not over-program. One palace, one museum, one proper wander through the souks, one excellent lunch, one long dinner—that is often plenty for a day here. The city punishes checklist behaviour.

A guide is worth it if they are genuinely good. A bad guide makes Marrakech feel extracted and mechanical. A good one helps you read the city’s layers and prevents the entire day becoming a negotiation.

Hammams are also worth doing properly rather than cheaply. In Marrakech, there is a vast difference between atmospheric and merely grubby, restorative and simply overhyped.

## Common Mistakes

The first mistake is booking somewhere visually attractive but operationally weak. Marrakech is full of photogenic properties. Many of them become less charming once you are sweating, lost, waiting for transport, or realising the bathroom is moodier than it is functional.

The second mistake is treating the medina as an all-day endurance event. Most people enjoy Marrakech more when they dip in and out.

The third is underestimating seasonality. Summer heat here is not a mild inconvenience. It changes what is pleasant, when you can walk, and how much patience you have left by noon.

The fourth is choosing a hotel that fights the trip you actually want. If you crave immersion, do not hide in the Palmeraie and complain about transfers. If you crave calm, do not book the most atmospheric riad you can find in the middle of the medina and then resent the noise and logistics.

## Best Time to Go

**March to May** is the sweet spot: warm enough to feel properly North African, but not yet punishing.

**October and November** are almost as good, with clearer light and a slightly more forgiving rhythm.

**Winter** can be excellent for city walking, rooftop lunches, and cool nights, though mornings and evenings can surprise people expecting permanent heat.

I would avoid **high summer** unless the hotel itself is a central part of the trip and you are happy to live by the pool, in the spa, or behind thick walls for much of the afternoon.

## The Verdict

Marrakech remains one of the world’s great short-haul luxury escapes because it offers something that too many polished destinations no longer can: friction, atmosphere, and relief, all in the same day. You go out into the city to be sharpened by it. You come back to the hotel to be restored.

That cycle is the entire point.

Get the hotel right and Marrakech feels intoxicating: lantern light on plaster, mint tea in a courtyard, the dry air after sunset, the call to prayer lifting across rooftops, and the private satisfaction of closing a carved wooden door behind you after a day in the souks.

Get it wrong and it can feel loud, hot, over-sold, and tiring.

That is why this is a hotel city as much as a destination city. The best stays in Marrakech do not merely house you. They translate the place into something livable, memorable, and—at the very top end—deeply glamorous.`,
    published: 1
  }
];

const destinationColumns = [
  `id`, `slug`, `name`, `country`, `region`, `hero_image`, `intro_md`,
  `best_time`, `content_md`, `published`
];

const insertDestinationQuery = `INSERT INTO destinations (${destinationColumns.join(`, `)}) VALUES (${destinationColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting May 27 seed...`);
  console.log(`Destinations: ${destinations.length}`);

  for (const destination of destinations) {
    await pool.query(insertDestinationQuery, [
      randomUUID(), destination.slug, destination.name, destination.country,
      destination.region, destination.hero_image, destination.intro_md,
      destination.best_time, destination.content_md, destination.published
    ]);
    console.log(`Inserted destination: ${destination.name}`);
  }

  console.log(`May 27 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
