import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// APR 22 — BADRUTT'S PALACE + SWISS ALPS
// Week 7: Swiss Alps + Europe roundup
// ============================================================================

const hotels = [
  {
    name: `Badrutt's Palace Hotel`,
    slug: `badrutts-palace-hotel`,
    brand: `Badrutt's Palace`,
    brand_slug: `badrutts-palace`,
    location: `St. Moritz, Switzerland`,
    country: `Switzerland`,
    country_slug: `switzerland`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 46.4972,
    longitude: 9.8403,
    price_range: `$$$$`,
    price_from: 1400,
    price_to: 6200,
    currency: `USD`,
    style: `Alpine Grand Hotel`,
    best_for: [`Ski Weekends`, `Old-School Glamour`, `Winter Social Life`],
    hero_image: `https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200`,
      `https://images.unsplash.com/photo-1518632614184-6dbfbfbb6113?w=1200`
    ],
    website: `https://www.badruttspalace.com/`,
    booking_url: `https://www.badruttspalace.com/en/rooms-suites/`,
    tagline: `The original St. Moritz stage set, where winter society still knows how to make an entrance.`,
    verdict_best_for: `Travelers who want the full St. Moritz fantasy: lake views, black-tie energy, serious skiing, and a hotel that still believes arrival should feel dramatic.`,
    verdict_skip_if: `You dislike hotel theatre, want ski-in ski-out simplicity above all else, or prefer alpine minimalism to chandeliers and ritual.`,
    verdict_standout: `The way the lake, the towers, and the social whirl make the whole property feel less like a hotel and more like St. Moritz itself.`,
    rating_overall: 9.4,
    rating_room: 9.1,
    rating_service: 9.5,
    rating_food: 9.0,
    rating_value: 8.0,
    rating_location: 9.6,
    featured: 1,
    review_intro: section([
      `Badrutt's Palace is one of those hotels that makes modern luxury look a little timid. It opened in 1896, helped invent St. Moritz as winter theatre for the international rich, and still carries itself with the confidence of a place that knows it changed the game. From across the frozen lake, its towers look like a fairy-tale palace designed by someone with excellent tailoring and a deep belief in martinis before dinner. Inside, the mood is grand without being dusty. This is not a heritage property preserved behind velvet rope. It is a working machine for alpine glamour, and it still attracts the sort of crowd that dresses properly for the lobby.`,
      `That matters because Badrutt's Palace is inseparable from St. Moritz itself. Plenty of luxury alpine hotels offer views, fireplaces, and cashmere throws. Fewer feel like the center of the resort's social weather system. At Badrutt's, breakfast, ski departure, tea, apéritifs, and late-night drinks all carry a faint charge, as though something amusing or expensive might happen in the next room. The hotel understands that mountain luxury is not only about silence and pine-scented wellness. Sometimes it is about seeing and being seen, then sleeping extremely well afterward.`,
      `What keeps the place from slipping into parody is discipline. The service is sharp, the upkeep is excellent, and the property has been updated intelligently enough that you get the old-world fantasy without the old-world inconvenience. There are still chandeliers and floral arrangements and an admirable amount of ceremony, but there is also proper soundproofing, good bathrooms, a strong spa, and a ski operation that knows guests have no patience for logistical nonsense. Badrutt's is not subtle, and it would be weaker if it tried to be. The whole point is to lean into the alpine pageantry and do it better than anyone else.`
    ]),
    review_arrival: section([
      `Arrival at Badrutt's Palace is exactly as theatrical as you want it to be, which is to say very. The drive into St. Moritz has already done much of the atmospheric work, the high Engadin light, the expensive hush, the improbable neatness of the town, but the hotel lands the final blow. You pull up beneath the famous façade with the lake below and the mountains beyond, and the building looks unapologetically like a grand hotel should: turrets, stone, awnings, flags, doormen who appear to have been trained in the lost art of making people feel important without groveling. In winter especially, when the air bites and the lake is white with cold, the entrance has proper drama. Even before the car door shuts, you get that old St. Moritz sensation that the holiday has started not with rest but with style.`,
      `Inside, the lobby gives you what you came for. Fresh flowers, polished wood, marble, the kind of warm light that flatters fur, wool, and slightly tired faces after a transfer. Check-in is efficient but not rushed. Staff take coats, sort bags, offer a drink, and move the process along with practiced confidence. There is no startup-hotel fussiness here, no attempt to disguise administration as lifestyle theatre. Badrutt's understands that luxury check-in should be smooth, brief, and accompanied by the feeling that the hotel was fully prepared for your arrival long before you appeared. That confidence changes the guest immediately. You stop bracing for process and start settling into occasion.`,
      `The walk to the room matters. Corridors reveal old photographs, mountain views, and just enough decorative grandeur to keep the mood buoyant. You begin to understand the hotel's rhythm before you have even unpacked: downstairs is for social life, upstairs is for retreat, and both are handled seriously. By the time the room door opens, St. Moritz already feels edited into its most flattering form. That is one of the Palace's oldest tricks, and it still works beautifully. A weaker hotel would feel like costume. Here, it feels like continuity.`
    ]),
    review_room: section([
      `Rooms at Badrutt's Palace vary more than the website's polished photography suggests, which is common in old grand hotels built and renovated over many decades. Some have a more classic alpine feel, with richer fabrics, heavier detailing, and a sense of old Europe. Others are fresher and cleaner, leaning into pale woods, cream tones, and big windows that let the lake do the decorative heavy lifting. The smartest move is to book lake-facing if budget allows. The view across St. Moritzsee changes the entire emotional temperature of the stay. Morning light turns the room silver-blue, and at dusk the whole valley seems to soften. On stormy days, the lake and mountain cloud make the room feel even more cocooning.`,
      `Comfort is strong in the ways that actually matter. Beds are excellent, deeply supportive and dressed in linen that feels crisp rather than over-laundered. The heating is stable, which sounds basic until you stay in the Alps and discover how many luxury hotels still get room temperature slightly wrong. Bathrooms are generally very good, with marble, deep tubs in many categories, and showers that deliver proper pressure even when the building is full. Storage is generous, desks are useful, and blackout performance is strong enough to encourage serious sleep after late dinners and early ski starts. Even the seating is handled well enough that you can actually spend an hour reading by the window without perching awkwardly on decorative furniture.`,
      `What I like most is that the rooms do not chase alpine cliché. There is enough mountain character to remind you where you are, but not so much antler-and-loden nonsense that you feel trapped in a luxury chalet theme park. The better rooms strike a persuasive balance between old-world dignity and modern livability. They feel expensive because they are calm, proportionate, and genuinely practical. In a hotel with such a powerful social identity, that privacy matters. You can step out into the swirl of St. Moritz society, then come back upstairs and disappear properly. That sense of retreat is what turns the hotel from spectacle into somewhere you can happily stay for several nights.`
    ]),
    review_service: section([
      `Service at Badrutt's Palace is one of the reasons the hotel remains more than an icon. Plenty of famous properties survive on reputation while the operation underneath starts to wobble. That is not the case here. Staff are polished, quick, and unusually good at handling a mixed crowd that includes old family regulars, fashion people, discreet billionaires, and first-timers who have booked the dream and do not want to get anything wrong. The tone is formal enough to suit the setting but never brittle. You are looked after with assurance rather than choreography. There is real house knowledge here, not just expensive manners.`,
      `The concierge and front-of-house teams are especially strong because St. Moritz demands competence. Ski logistics, restaurant tables, car transfers, mountain timing, ice events, weather shifts, and dinner reservations all need handling with precision if a stay is to feel smooth rather than expensive and mildly annoying. The Palace gets this. They know when to push you toward a quicker departure, when to steer you away from a weak reservation, and when to quietly solve a problem before it reaches you. That kind of anticipatory judgment is the real luxury here. It is also what separates a famous hotel from a merely photogenic one.`,
      `Housekeeping is equally reliable. Rooms are reset with quiet exactness, turndown feels thoughtful rather than automatic, and little practical things, humidifiers, extra hangers, ski-gear drying, arrive without drama. The staff understand that grand-hotel charm only works when the infrastructure beneath it is ruthlessly competent. If I have one criticism, it is that service can occasionally feel slightly more polished than warm. But in St. Moritz, where many guests prefer elegance to intimacy, that is probably the right calibration. Better this than fake chumminess in a place built on ritual. The Palace knows its audience, and mostly serves them exactly as it should.`
    ]),
    review_food: section([
      `Food at Badrutt's Palace is broad rather than narrowly chef-driven, and that is the correct strategy for a hotel that functions as a small alpine universe. You are not here for one single culinary revelation. You are here for a full rhythm of breakfasts, lunches, tea, drinks, late dinners, and occasional indulgence after cold mountain days. Breakfast is excellent, with a generous buffet, strong breads and pastries, eggs done properly, and enough local and continental variation to keep repeat mornings from feeling stale. The dining rooms themselves help, all polished silver, mountain light, and just enough ceremony to make coffee feel more glamorous than it has any right to be.`,
      `Le Restaurant remains the classic expression of the house: old-school service, polished continental cooking, and a room that understands why people still dress for dinner in St. Moritz. Elsewhere in the hotel, the range matters. There is space for Japanese food, informal bites, fondue, clubby drinks, and the kind of comforting luxury dishes, veal, pasta, grilled fish, that guests actually want to eat between ski runs and cocktails. The point is not culinary extremism. The point is having enough quality across enough moods that the hotel never forces you out into town unless you want to go.`,
      `The bar scene is central to the property's appeal. This is one of those hotels where apéritifs are part of the architecture of the stay. Drinks are well made, the crowd is interesting, and the room carries that pleasant St. Moritz tension between inherited ritual and modern money. Room service is dependable too, which matters more here than in many city hotels. After a long lunch on the mountain or a late evening downstairs, the ability to order something good and disappear into your room feels like a serious amenity, not a consolation prize.`
    ]),
    review_details: section([
      `The details are where Badrutt's Palace proves it deserves its reputation. The ski services are smooth, with transport arranged efficiently, gear managed properly, and none of the faff that can make high-end ski trips feel strangely amateur. The indoor pool and spa are genuinely useful after a day on the slopes, not merely decorative wellness boxes added because the market demands them. There is enough thermal and treatment infrastructure to help the body catch up with the schedule, which in St. Moritz can easily swing from first lift to very late dinner. In a destination where people happily spend fortunes to save ten inconvenient minutes, this fluency matters.`,
      `The public spaces carry the hotel's emotional weight. The lobby is not a transitional area but a social arena. Tea has atmosphere. The corridors have memory. The florist deserves a medal. The famous staircase, the terraces, the lake views, the winter decorations, all of it contributes to a property that knows how to stage itself without feeling cynical. You are constantly reminded that this is a hotel built in an era when grandeur was considered a virtue, then maintained by people wise enough not to strip that grandeur out in pursuit of trendier respectability. Even the small visual gestures, flower color, lampshade glow, the line of chairs facing the lake, seem chosen by someone who understands mood.`,
      `Practicalities are handled with the same seriousness. The location is superb for St. Moritz proper, giving you immediate access to the town's boutiques, bars, and lakefront while remaining well connected to the ski areas. Transfers can be organized cleanly. Wi-Fi is reliable. Families are accommodated without letting the mood collapse. If anything, the Palace's most impressive detail is its balance. It manages to be iconic, social, beautiful, and operationally sharp at once. That combination is much rarer than hotel marketing would have you believe.`
    ]),
    review_verdict: section([
      `Badrutt's Palace is not just one of the best hotels in the Swiss Alps. It is one of the clearest expressions of what grand-hotel luxury can still do when nobody gets nervous and starts sanding off the personality. It gives you winter glamour with real conviction, but it also gives you comfort, competence, and enough modern infrastructure that the fantasy never becomes tiring. If you want the full St. Moritz experience, this is the address that explains why the resort still matters.`,
      `It will not suit everyone. Guests who want absolute privacy, minimalist design, or simple ski-in ski-out efficiency may find the whole performance a little too dressed-up. Rates are serious, and once lunch, drinks, and mountain life gather speed, the bill will remind you that St. Moritz has never confused itself with good value. But value is not really the argument here. The argument is whether the hotel delivers a distinct, memorable, deeply polished version of alpine luxury. It does, emphatically.`,
      `If I were booking a celebratory winter trip in the Alps and wanted equal parts social life and serious hospitality, Badrutt's Palace would sit near the top of the list. There are quieter hotels, more design-forward hotels, and more remote hotels. There are not many that feel this complete. The Palace knows exactly what it is, and the confidence of that knowledge is part of the pleasure. In luxury hospitality, self-knowledge is underrated. Here it is one of the main reasons the whole thing works so well.`
    ])
  }
];

const destinations = [
  {
    name: `Swiss Alps`,
    slug: `swiss-alps`,
    country: `Switzerland`,
    region: `Europe`,
    hero_image: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600`,
    intro_md: `The Swiss Alps at their best offer more than ski prestige: they deliver precision, altitude, and a version of luxury that treats infrastructure as seriously as beauty.`,
    best_time: `December to March for winter sport and grand-hotel atmosphere; late June to September for hiking, lake swimming, and clearer value`,
    content_md: `# Swiss Alps

The Swiss Alps are where luxury travel stops pretending that scenery alone is enough. Yes, the mountains are absurdly beautiful. The light is clean, the lakes look edited, and even the train stations seem to have been ironed. But what makes the Swiss Alps compelling at the top end is not just natural grandeur. It is the way Switzerland has built an entire hospitality culture around making that grandeur usable. Slopes run on time. Trains connect elegantly. Ski rooms function properly. Breakfast starts when it should. Transfers are handled by people who dislike imprecision on moral grounds. In a region where weather, altitude, and logistics can ruin a trip if nobody is paying attention, Swiss discipline becomes part of the luxury.

That said, the Swiss Alps are not one thing. St. Moritz is not Verbier. Gstaad is not Zermatt. And the best trips begin by deciding what kind of mountain life you actually want. Some travelers imagine a silent chalet with deep snow and no social obligations. Others want fur coats, hotel bars, and the faint possibility of seeing someone famous looking slightly over-insulated in the lobby. Switzerland can do both, but not always in the same place. The mistake is treating the Alps as one interchangeable white backdrop for expensive cashmere.

## What Swiss Alpine Luxury Actually Feels Like

At its best, Swiss alpine luxury is not rustic. It is exact. Even in the most traditional grand hotels, there is usually a sense that somebody competent is controlling the temperature, the luggage, the ski timing, and the flow of the day. That competence is the hidden architecture of the experience. Plenty of mountain destinations elsewhere offer prettier chalets or looser charm. Switzerland offers reliability at altitude, which is far more valuable on the third day of a storm than it sounds in a brochure.

The mood also changes dramatically by season. In winter, the region is at its most ceremonial. Ski mornings begin early, terraces fill at lunch, and evenings split between spa recovery and serious dressing for dinner. In summer, the same resorts often reveal their better side. Crowds soften, lakes become swimmable, hiking replaces lift queues, and the hotels feel less like social stages and more like highly polished mountain retreats. If you love mountains but dislike peak-season ski theatre, summer in the Swiss Alps is one of Europe's great underappreciated luxuries.

## St. Moritz: Still the Grand Performance

St. Moritz remains the most theatrical expression of alpine luxury in Switzerland, which is precisely why many people dismiss it too quickly. Yes, it can be showy. Yes, there is old money, new money, horse racing on ice, and a lot of people who seem to own eyewear designed for attracting attention. But underneath the performance is a resort that genuinely knows how to host winter life at a very high level. The skiing is broad rather than extreme, the sun is generous, and the Engadin light gives everything a faint silver glamour.

**Badrutt's Palace Hotel** is the defining address because it embodies the whole St. Moritz proposition: grandeur, views, ritual, and serious service. If you want your mountain trip to feel like society with snow, book it. It is not for minimalists, and that is part of its charm.

## Zurich-as-Alpine-Gateway: The Smarter Hybrid

One of the more intelligent Swiss luxury strategies is not to stay deep in ski-resort life the whole time. Zurich, especially when paired with a hilltop property like **The Dolder Grand**, offers a softer version of alpine access. You get lake-and-mountain atmosphere, a major city’s infrastructure, and a serious spa, all without committing to full ski logistics every day. For travelers who want a wintry Swiss mood rather than a maximal ski week, this hybrid works brilliantly.

The Dolder is especially persuasive because it behaves like a resort even though it is technically a city hotel. That is useful if your trip is less about chasing vertical meters and more about clean air, polished service, and a few days of expensive decompression.

## The Main Swiss Luxury Styles

### Grand Hotels with Social Gravity

This is the classic Swiss fantasy: historic façades, lake or mountain views, proper bars, serious floristry, and guests who still believe dinner deserves structure. St. Moritz leads this category, but the appeal extends to other legacy addresses across the country. These hotels are not only places to sleep. They are stages for the whole trip. If you enjoy ritual, they are deeply satisfying.

### Chalet-Adjacent Privacy

For travelers who dislike public spectacle, Switzerland also offers private chalets and more discreet resort hotels where the emphasis is on family, fireplaces, wellness, and direct mountain access. These properties trade social electricity for space and ease. The advantage is privacy. The downside is that some can feel emotionally flat once the novelty of a very expensive sitting room wears off.

### Spa-Driven Mountain Retreats

This is where Switzerland is especially strong. The combination of altitude, clean air, and national competence produces some superb wellness stays. The best alpine spas here are not merely massage menus beside a plunge pool. They are full recovery systems, with thermal circuits, long swims, proper treatment programs, and rooms quiet enough to make them effective.

## When to Go

Winter, from December through March, is the obvious draw, especially for skiing. January and February deliver the most reliable snow, but they also bring the highest rates and the most social theatre. March can be excellent: longer days, sunnier terraces, and often superb skiing if conditions hold.

Summer is the clever alternative. From late June through September, many Swiss alpine resorts become hiking, cycling, and lake destinations with much calmer energy. Hotel terraces are glorious, mountain walks are genuinely restorative, and rates, while hardly cheap, can feel more sane relative to what you get. This is also when the scenery becomes more textured, green meadows, wildflowers, glacier water, rather than monochrome snow glamour.

Shoulder periods require caution. Some resorts and hotels partially shut between seasons, and a beautiful mountain town can feel oddly hollow if you arrive at the wrong week in late spring or late autumn. Always check what is actually open before congratulating yourself on finding a deal.

## What the Swiss Alps Do Better Than Anywhere Else

Switzerland's edge is not only beauty. It is friction reduction. You can build an alpine trip here that feels smooth from airport to platform to hotel to mountain. That sounds mundane until you compare it with destinations where every transfer turns into a negotiation and every weather change exposes weak planning. The Swiss Alps make luxury feel earned through competence.

The best hotels understand this intuitively. They do not rely on rustic fantasy or borrowed chalet clichés. They know guests are paying for order as much as indulgence. A great Swiss alpine stay gives you both: the emotional lift of dramatic scenery and the practical relief of systems that work.

## Verdict

The Swiss Alps are ideal for travelers who want mountain beauty without operational chaos, and for those who understand that precision can be deeply pleasurable. Come in winter if you want ski glamour and the full ceremonial version of alpine life. Come in summer if you want calmer, greener, more breathable luxury with fewer people trying to turn lunch into a performance.

If I were choosing, I would not book Switzerland for wildness. I would book it for elegance under pressure. The weather may change, the altitude may humble you, and the bill will almost certainly be ambitious. But when the trip is done well here, it feels almost absurdly clean: mountain air, sharp service, and the quiet thrill of everything working exactly as it should.`,
    published: 1
  }
];

const hotelColumns = [
  `id`, `slug`, `name`, `brand`, `brand_slug`, `location`, `country`, `country_slug`,
  `region`, `region_slug`, `latitude`, `longitude`, `price_range`, `price_from`,
  `price_to`, `currency`, `style`, `best_for`, `hero_image`, `images`, `website`,
  `booking_url`, `tagline`, `review_intro`, `review_arrival`, `review_room`,
  `review_service`, `review_food`, `review_details`, `review_verdict`,
  `verdict_best_for`, `verdict_skip_if`, `verdict_standout`, `rating_overall`,
  `rating_room`, `rating_service`, `rating_food`, `rating_value`, `rating_location`,
  `published`, `featured`
];

const destinationColumns = [
  `id`, `slug`, `name`, `country`, `region`, `hero_image`, `intro_md`,
  `best_time`, `content_md`, `published`
];

const insertHotelQuery = `INSERT INTO hotels (${hotelColumns.join(`, `)}) VALUES (${hotelColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;
const insertDestinationQuery = `INSERT INTO destinations (${destinationColumns.join(`, `)}) VALUES (${destinationColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting Apr 22 seed — Badrutt's Palace + Swiss Alps...`);

  for (const hotel of hotels) {
    await pool.query(insertHotelQuery, [
      randomUUID(), hotel.slug, hotel.name, hotel.brand, hotel.brand_slug,
      hotel.location, hotel.country, hotel.country_slug, hotel.region,
      hotel.region_slug, hotel.latitude, hotel.longitude, hotel.price_range,
      hotel.price_from, hotel.price_to, hotel.currency, hotel.style,
      JSON.stringify(hotel.best_for), hotel.hero_image, JSON.stringify(hotel.images),
      hotel.website, hotel.booking_url, hotel.tagline, hotel.review_intro,
      hotel.review_arrival, hotel.review_room, hotel.review_service,
      hotel.review_food, hotel.review_details, hotel.review_verdict,
      hotel.verdict_best_for, hotel.verdict_skip_if, hotel.verdict_standout,
      hotel.rating_overall, hotel.rating_room, hotel.rating_service,
      hotel.rating_food, hotel.rating_value, hotel.rating_location, 1, hotel.featured ?? 0
    ]);
    console.log(`Inserted hotel: ${hotel.name}`);
  }

  for (const destination of destinations) {
    await pool.query(insertDestinationQuery, [
      randomUUID(), destination.slug, destination.name, destination.country,
      destination.region, destination.hero_image, destination.intro_md,
      destination.best_time, destination.content_md, destination.published
    ]);
    console.log(`Inserted destination: ${destination.name}`);
  }

  console.log(`Apr 22 seed complete! 1 hotel and 1 destination published.`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
