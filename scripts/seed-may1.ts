import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// MAY 1 — JAPAN DESTINATION GUIDE + ROOM SERVICE IS DEAD. LONG LIVE ROOM SERVICE.
// Week 8: Asia expansion — Hong Kong, Kyoto
// ============================================================================

const destinations = [
  {
    name: `Japan`,
    slug: `japan`,
    country: `Japan`,
    region: `Asia`,
    hero_image: `https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600`,
    intro_md: `Tokyo towers, Kyoto gardens, ryokan discipline, island retreats, and the rare hotels that understand Japan is not one mood but a country of precise contrasts.`,
    best_time: `March to May for blossom and spring light, October to November for maples and clear air, January to February for quieter cities and serious ryokan weather`,
    content_md: `# Japan

Japan is not a destination you solve with one hotel. It is too layered, too regional, too particular about rhythm. The mistake many luxury travelers make is treating the country as a clean sequence of famous stops: Tokyo, Kyoto, perhaps Hakone, maybe Naoshima if they have read the right magazines. That itinerary can work, but only if the hotels are chosen for what each place actually asks of you. Tokyo wants height, efficiency, food intelligence, and the ability to recover from scale. Kyoto wants quiet, garden access, and a pace slow enough for temples not to become tasks. The countryside wants bathing, seasonality, and the humility to let dinner happen according to the kitchen rather than your calendar.

Luxury in Japan is also a little different from luxury in Europe or the Maldives. It is less about visible abundance and more about calibration: the temperature of a bath, the knife work in breakfast pickles, the silence of a corridor, the exact moment a car appears, the way a paper screen filters late-afternoon light. The best hotels understand that Japan's appeal is not only aesthetic. It is procedural. Things are done carefully, often repeatedly, and the guest feels the accumulated effect as calm.

The weaker hotels misunderstand this and sell Japan as a mood board: tatami-adjacent textures, bamboo, ceramics, a bar with a few Japanese whiskies, and the word ritual deployed as decoration. The stronger ones are more serious. They help you move through the country without sanding off its complexity. They give you access, yes, but also interpretation.

## Tokyo: Choose Your Altitude

Tokyo is the obvious beginning, and it is still one of the great hotel cities in the world. The competition has become sharper: Aman Tokyo, Hoshinoya Tokyo, Four Seasons Otemachi, Bulgari Tokyo, Janu Tokyo, The Tokyo Edition, and the newly restored Park Hyatt Tokyo all make credible claims to different versions of the city. That range is useful because Tokyo itself refuses to be one thing.

**Aman Tokyo** remains the purest answer for travelers who want the city turned into abstraction: stone, washi paper, water, height, and a lobby that feels like a very expensive exhale. It works brilliantly if you want Tokyo softened and edited. **Park Hyatt Tokyo**, newly restored, is more cinematic and more emotionally specific. It is less convenient than the Marunouchi or Otemachi hotels, but the high-rise Shinjuku atmosphere is still singular: jazz, glass, night, and the feeling of being suspended above the most overwhelming city on earth.

**Hoshinoya Tokyo** is the interesting alternative for people who want ryokan thinking inside the city. It is not a traditional ryokan, and anyone pretending otherwise is being lazy, but it does offer a different urban rhythm: shoes off, tatami floors, shared lounge spaces, and hot spring bathing in the middle of the financial district. I would recommend it to repeat visitors more than first-timers. First-time Tokyo travelers often benefit from a hotel that makes logistics easier rather than more conceptual.

If you want direct efficiency, stay around Tokyo Station, Marunouchi, Otemachi, or Ginza. If you want atmosphere and do not mind taxis, Shinjuku and Aoyama become more interesting. Tokyo rewards neighborhood choice more than many visitors realize. The wrong hotel can make the city feel like a sequence of exhausting transfers; the right one turns scale into possibility.

## Kyoto: Silence Is the Luxury

Kyoto is where hotel choice matters most because the city can be ruined by crowds and rescued by timing. The best stays give you access to quiet before and after the day-trippers flood the obvious sites. **Aman Kyoto** is the most persuasive luxury retreat if you want landscape, privacy, and stillness. Its northern location is not frictionless, but that is part of the point. You trade walkability for moss, cedar, onsen-fed bathing, and a sense of removal that central Kyoto rarely provides at this level.

For travelers who want more urban access, the strongest Kyoto hotels sit closer to Higashiyama, Gion, or the river. The best versions allow early temple walks, late dinners, and a softer return at night. But I would be careful with Kyoto hotels that overpromise tradition. True ryokan hospitality is specific, structured, and often less flexible than international luxury guests expect. A five-star hotel borrowing the look without the discipline can feel expensive and thin.

The ideal Kyoto stay is not about doing everything. It is about editing. Choose one major temple early, one garden slowly, one proper lunch, one neighborhood walk, one bath, one dinner you do not rush. Then stop. Kyoto punishes greed and rewards repetition.

## Ryokan Country: Where Japan Becomes Physical

At some point, you should leave the big city hotel circuit and stay somewhere built around bathing and meals. Hakone is the obvious option because it pairs well with Tokyo, but the country is full of deeper choices: Izu for coastal air, Kaga and Kanazawa for craft and old hot-spring culture, Nikko for forest and shrine country, Kyushu for volcanic landscapes and onsen intensity, Hokkaido for snow, space, and summer softness.

A good ryokan is not merely a hotel with tatami. It is a schedule, a philosophy, and occasionally a gentle loss of control. Dinner may be served at a fixed time. The room may be rearranged while you bathe. Shoes come off. Silence matters. The whole stay is designed around seasonality, water, and restoration. This can be magical if you accept the structure. It can be irritating if you want everything à la carte.

Luxury travelers should be honest with themselves here. If you need a gym, cocktails, international breakfast, English spoken at every turn, and total flexibility, choose a ryokan-style luxury resort rather than a serious traditional inn. There is no shame in that. The shame is booking the wrong thing and then blaming the property for being exactly what it is.

## Naoshima, Setouchi, and the Art-Island Pull

Japan's art islands are now firmly on the luxury circuit, and for good reason. The Seto Inland Sea has a gentle, low-slung beauty that contrasts beautifully with Tokyo's vertical intensity and Kyoto's cultural density. Naoshima, Teshima, and Inujima offer architecture, museums, sea air, and a kind of quiet that feels unusually modern: not rustic, not polished, but stripped of excess.

Hotels in this region are less about conventional luxury and more about access to landscape and art. That can be refreshing. You are not there for a giant spa menu or a lobby scene. You are there because the act of moving between museum, ferry, island road, and water view changes the tempo of the trip. It is an excellent third stop after Tokyo and Kyoto if you have enough days and enough appetite for slowness.

## Food: The Real Reason to Plan Less

Japan is one of the few countries where hotel dining should not dominate the itinerary, even at the top end. The best meals may be in a department-store basement, a counter with eight seats, a soba shop with no interest in your hotel status, a kaiseki restaurant booked months ahead, or a breakfast tray at a ryokan where the grilled fish and rice are more memorable than most tasting menus.

A great hotel in Japan should help you eat better, not trap you inside its own restaurants. Concierge quality matters enormously. You need people who understand when a famous sushi counter is worth the effort, when a neighborhood izakaya will be more fun, when a tempura restaurant is too formal for your mood, and when the smartest dinner is actually room service because jet lag has won.

## When to Go

Spring is famous for a reason, but cherry blossom season can turn serenity into crowd management. If you are going in late March or early April, book early, pay more than you want, and structure days around morning and evening. Autumn may be the better luxury season: cooler air, sharp light, maples, better appetite, and fewer moments when you feel trapped inside someone else's postcard.

Winter is underrated, especially for Tokyo, Kyoto, and ryokan stays. The air is clear, baths feel better, food gets deeper, and the country is less theatrically crowded outside the New Year period. Summer can be punishingly humid unless you are heading to Hokkaido, the mountains, or coastal regions where the weather becomes part of the trip rather than an obstacle.

## Where We Would Stay

For a first serious luxury trip, I would do **four nights in Tokyo**, **three nights in Kyoto**, and **two nights at a ryokan or onsen retreat**. Tokyo should come first because the city gives the trip velocity. Kyoto should follow because it slows the eye. The ryokan ending is the reset, the point where the whole country moves from visual fascination into the body.

If money is no object, pair **Aman Tokyo** or **Park Hyatt Tokyo** with **Aman Kyoto**, then add a private onsen stay in Hakone, Izu, or Kyushu. If you want a more culturally textured itinerary, choose a slightly less insulated Tokyo hotel, stay closer to Gion or Higashiyama in Kyoto, and spend the saved money on better meals, private guides, and trains that do not require heroic luggage management.

## The Verdict

Japan's best hotels do not compete by shouting. They compete through precision, atmosphere, and their ability to make an overwhelming country feel navigable without making it feel simple. That is the balance to chase. Tokyo should feel alive but not exhausting. Kyoto should feel quiet but not embalmed. The countryside should feel restorative without becoming pious.

The real luxury of Japan is not just beauty. It is attention. The best stays teach you to notice smaller things: steam rising from a bath, cedar after rain, the sound of a train arriving exactly on time, the difference between a room that looks Japanese and one that understands Japanese space. Choose hotels that sharpen that attention rather than dull it with generic polish. Do that, and Japan becomes less a checklist of famous places and more a sequence of moods you will want to return to for years.`,
    published: 1
  }
];

const articles = [
  {
    title: `Room Service Is Dead. Long Live Room Service.`,
    slug: `room-service-is-dead-long-live-room-service`,
    category: `essay`,
    subtitle: `The most unfashionable hotel ritual is also one of the clearest tests of whether luxury still knows how to say yes.`,
    hero_image: `https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1600`,
    content_md: `# Room Service Is Dead. Long Live Room Service.

Room service has become the embarrassing uncle of luxury hospitality. Hotels still mention it, guests still use it, operators still complain about it, and almost everyone pretends not to care until they are jet-lagged, underdressed, hungry, and unwilling to perform the small social theatre of a restaurant. Then room service suddenly becomes civilization.

For years the industry has tried to quietly kill it. Menus have shrunk. Hours have shortened. Delivery charges have multiplied. Some hotels replaced proper carts with paper bags, some replaced menus with QR codes, and some replaced the entire idea with a suggestion that guests use a delivery app. This is often described as modernization. It is usually cost cutting wearing better shoes.

I understand the economics. Room service is operationally ridiculous. It asks a hotel to produce restaurant-standard food at unpredictable times, move it through corridors and elevators, deliver it with grace, preserve temperature and presentation, clear it later, and make the whole thing feel effortless to one guest in one room. A dining room at least gathers demand in one place. Room service scatters it across the building like confetti.

But that is precisely why it matters. Luxury hospitality is not defined by what is easy to provide. It is defined by the frictions a hotel is willing to absorb on behalf of the guest. Room service is inefficient, intimate, and faintly absurd. It is also one of the last great expressions of hotel generosity.

## The Problem With Modern Room Service

The decline did not happen because guests stopped wanting food in rooms. It happened because hotels decided the full version was too expensive, then trained guests to expect less. The classic ritual involved a proper trolley, hot plates, linen, a flower perhaps, condiments in real dishes, toast still warm enough to justify itself, coffee in a pot, and a server who could transform a desk or balcony into a temporary dining room. The whole thing had a little ceremony. Not much, but enough.

Today, too often, breakfast arrives in cardboard. Dinner arrives under plastic. The menu has been reduced to a club sandwich, a burger, a Caesar salad, and one pasta dish that tastes like a legal compromise. Nobody sets the table because there is no table to set. The tray sits on the edge of a bed while the guest tries not to spill soup on a duvet that costs more than a domestic flight.

This is not progress. It is the hollowing out of a ritual while keeping the charge. If a hotel wants to offer casual takeaway-style in-room dining at casual prices, fine. But luxury hotels charging luxury money should not pretend a paper bag is an evolution of service. It is an admission of defeat.

The QR-code menu is another small tragedy. I am not against technology when it removes friction. But scanning a code, pinching around a poorly designed mobile menu, tapping through modifiers, and wondering whether anyone in the kitchen has seen the order is not elegance. It is admin. A proper room-service call used to be a human interaction, and sometimes a useful one. A good order-taker could steer you away from the dish that travelled badly, suggest something lighter after a late arrival, or tell you honestly that the soup was excellent tonight. That small intelligence is disappearing.

## Why Guests Still Love It

Room service survives because hotels are not only places where people sleep. They are places where people are temporarily released from the normal rules of domestic life. At home, eating dinner in bed is faintly depressing. In a hotel, under the right conditions, it is decadent. The difference is not the food alone. It is context: linen, view, anonymity, the sensation of being looked after without having to host anyone in return.

There are specific moments when room service is not a lazy choice but the best choice. The first night after a long-haul flight, when your body has no idea what meal it is supposed to want. The evening after walking twenty thousand steps through a city. The morning before an early train. The night after a wedding, when removing shoes feels like a moral victory. The solo business trip when you have spent all day speaking and cannot face another human conversation conducted over sourdough.

There is also a private pleasure in controlling the pace. Restaurants ask you to match their rhythm. Room service lets the evening belong to you. You can eat in a robe, answer emails badly, watch a film you would deny watching, stare out at Tokyo or London or Lake Como, and let the day dissolve without negotiating lighting, music, or neighboring tables. That privacy is not an extra. It is the product.

Breakfast is the purest version. A good room-service breakfast can make a hotel feel twice as luxurious. Coffee arrives before language is required. Toast is properly covered. Fruit is cold. Eggs are hot. The newspaper or weather card sits nearby. Curtains open. The city or sea appears. For ten minutes, the world seems unusually well arranged. This may not sound innovative, which is exactly the point. Not everything valuable needs reinvention.

## The Economics Are Bad, But So What?

Operators will point out, correctly, that room service is expensive to run and often low-margin. Staff have to be available across awkward hours. Kitchens need breadth without predictable volume. A single order can consume time that would produce more revenue elsewhere. Waste is high. Delivery is delicate. Clearing trays is thankless. Guests complain if the fries are soft, which they often are because physics exists.

All true. But luxury hotels are full of bad economics that guests value precisely because they are uneconomic. A concierge who spends forty minutes fixing one dinner reservation is not efficient. A pool heated in winter is not efficient. Twice-daily housekeeping is not efficient. A doorman remembering names, a florist changing arrangements before they look tired, a bartender stirring one perfect martini instead of batch-pouring efficiency into glassware: none of this survives a purely utilitarian spreadsheet.

The question is not whether room service is profitable in isolation. The question is whether it supports the broader promise of the hotel. At the high end, I think it does. A hotel that cannot feed a guest well in their own room is making a statement about where its hospitality ends. Sometimes that boundary is reasonable. In a lean boutique hotel, I can accept it. In a serious five-star charging serious rates, I cannot.

This does not mean every hotel needs a 60-item menu at 3 a.m. That version belongs to another era, and not always a better one. But the answer to excess should be intelligence, not abandonment. A smaller menu can be better if it is designed around what travels well. Soups, rice dishes, grilled fish, proper salads, roast chicken, breakfast trays, excellent desserts, a few local dishes that can survive the elevator journey. The best room service is not the most extensive. It is the most honest about what it can deliver beautifully.

## What Great Room Service Looks Like Now

The modern standard should be simple. First, the menu should be edited by someone who understands rooms, not just kitchens. Anything that collapses, congeals, steams itself to death, or arrives looking punished should be removed. The room-service menu is not a restaurant menu with wheels. It is its own format.

Second, delivery should still feel like service. Use real plates. Use proper cutlery. Use linen when the room and price point justify it. Set the table if there is one. Do not hand a guest a bag at the door of a suite that costs more than a mortgage payment. The physical choreography matters because it tells the guest whether the hotel considers the order an inconvenience or an extension of hospitality.

Third, timing should be honest. If breakfast will take forty minutes, say forty. Guests can handle reality better than optimism. The crime is promising twenty and delivering lukewarm eggs after fifty. Luxury is not always speed. Often it is reliability.

Fourth, clearance should not become the guest's problem. Nothing kills the romance of room service faster than a trolley of dead plates haunting the corridor until morning. It is ugly, unhygienic, and faintly tragic. A hotel that can deliver beautifully but not clear discreetly has only solved half the ritual.

Finally, the human voice should return. Let guests call. Let someone answer who knows the menu. Apps can exist for convenience, but they should not replace judgment. Hospitality is partly the art of being told, kindly, what is wise. At midnight after a flight, I do not want a checkout screen. I want someone to say the chicken soup is good, the burger will take longer, and yes, they can send extra toast.

## The Emotional Case

Room service matters because it preserves one of the hotel room's central fantasies: the room as temporary private world. That fantasy has been under pressure. Rooms have become smaller, lobbies more social, hotel brands more obsessed with programming, and public spaces increasingly designed to pull guests out where they can be monetized. There is nothing wrong with lively hotels. But not every guest wants to be activated. Some want to be left alone with a tray, a view, and the small pleasure of not explaining themselves.

This is especially true in luxury travel, where the public performance of taste can become exhausting. Restaurants require choices, clothes, posture, and occasionally conversation with people who say things like chef's journey without irony. Room service offers retreat. It lets the guest step out of the social contract while still being cared for. That combination is rare and valuable.

There is also something beautifully adult about it when done well. A martini delivered to a balcony. A pot of tea during rain. A bowl of noodles after a delayed flight. Club sandwiches with too many fries. Strawberries at midnight. These are not world-historical pleasures, but hotels are built from such pleasures. The danger in modern hospitality is that operators become so focused on concepts, collaborations, and brand positioning that they forget the ordinary things guests quietly love.

## The Verdict

Room service is not dead because guests stopped wanting it. It is dying because many hotels stopped respecting it. They kept the line item and removed the care. They replaced ritual with packaging, judgment with interfaces, and generosity with a delivery fee.

The comeback does not require nostalgia. It requires seriousness. Make the menu smaller. Make the food better suited to travel. Charge fairly, or at least transparently. Deliver it properly. Clear it quickly. Let a human being answer the phone. Treat the guest eating alone in a robe with the same dignity as the guest ordering Dover sole under a chandelier.

I am not sentimental about every old hotel habit. Some deserved to disappear. But room service, at its best, remains one of the clearest expressions of what a hotel can do that home cannot. It turns privacy into pleasure. It makes fatigue feel catered to rather than merely endured. It allows the room to become not just where the guest sleeps, but where the trip softens.

So yes, room service is inefficient. It is operationally awkward, financially irritating, and often abused by guests with bad timing and worse appetites. Long live room service. Luxury should still have a few beautiful inefficiencies left.`,
    hotels_mentioned: [`aman-tokyo`, `park-hyatt-tokyo`, `aman-kyoto`],
    featured: 1,
    published: 1
  }
];

const destinationColumns = [
  `id`, `slug`, `name`, `country`, `region`, `hero_image`, `intro_md`,
  `best_time`, `content_md`, `published`
];

const articleColumns = [
  `id`, `slug`, `title`, `subtitle`, `category`, `hero_image`, `content_md`,
  `hotels_mentioned`, `published`, `featured`
];

const insertDestinationQuery = `INSERT INTO destinations (${destinationColumns.join(`, `)}) VALUES (${destinationColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;
const insertArticleQuery = `INSERT INTO articles (${articleColumns.join(`, `)}) VALUES (${articleColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting May 1 seed...`);
  console.log(`Destinations: ${destinations.length} | Articles: ${articles.length}`);

  for (const destination of destinations) {
    await pool.query(insertDestinationQuery, [
      randomUUID(), destination.slug, destination.name, destination.country,
      destination.region, destination.hero_image, destination.intro_md,
      destination.best_time, destination.content_md, destination.published
    ]);
    console.log(`Inserted destination: ${destination.name}`);
  }

  for (const article of articles) {
    await pool.query(insertArticleQuery, [
      randomUUID(), article.slug, article.title, article.subtitle, article.category,
      article.hero_image, article.content_md, JSON.stringify(article.hotels_mentioned),
      article.published, article.featured
    ]);
    console.log(`Inserted article: ${article.title}`);
  }

  console.log(`May 1 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
