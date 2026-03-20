import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// MAR 20 — Amalfi Coast Destination Guide + Belmond Caruso vs Grand Hotel Tremezzo
// ============================================================================

const destinations = [
  {
    name: `Amalfi Coast`,
    slug: `amalfi-coast`,
    country: `Italy`,
    region: `Europe`,
    hero_image: `https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1600`,
    intro_md: `Vertical villages, terraced lemon groves, and a coastline so dramatic it feels like geography is showing off.`,
    best_time: `May to June, September to October`,
    content_md: `# Amalfi Coast

The Amalfi Coast is one of those places that photographs cannot prepare you for. The scale is wrong in pictures—you cannot feel how the villages cling to cliffs that plunge hundreds of meters to the Tyrrhenian Sea, cannot smell the lemon trees that perfume the air from terraces carved into rock over centuries, cannot hear the particular echo of church bells bouncing off limestone walls across a valley. The drive along the SS163, that narrow ribbon of road between Sorrento and Salerno, remains one of the great motoring experiences in Europe, assuming your driver has nerves and your stomach can handle hairpin turns above sheer drops. It is beautiful to the point of absurdity—a coastline that seems designed by someone who was told to make the Mediterranean dramatic and took the instruction personally.

## The Geography of Amalfi Coast Luxury

Understanding where to stay on the Amalfi Coast requires understanding the coastline's personality, which shifts dramatically between towns separated by only a few kilometers of cliff road.

**Ravello** sits above the coast, roughly 350 meters up, in a position that trades beach access for panoramic views that have inspired composers, writers, and travelers for centuries. Wagner wrote part of Parsifal here. Gore Vidal lived here for decades. The town is quieter than the coastal villages below, more contemplative, more suited to slow mornings on a terrace watching light change across the Gulf of Salerno. Belmond Hotel Caruso occupies a former eleventh-century palace on the cliff edge, with an infinity pool that has become one of the most photographed hotel amenities in Italy. Palazzo Avino provides an alternative that is more intimate, more design-forward, and equally spectacular in its views. Ravello is the right base for travelers who prioritize beauty, quiet, and a sense of elevation—both literal and spiritual—over beach days and nightlife.

**Positano** is the coast's most photogenic town, a cascade of pastel buildings tumbling from the road down to a pebble beach. The visual impact is immediate and overwhelming—this is the image that sells a thousand Italian holidays. The reality is more complicated. Positano is steep, hot in summer, and crowded with day-trippers who arrive by ferry and bus from Naples and Sorrento. The streets are narrow stairways, the restaurants charge tourist premiums, and finding genuine quiet requires retreat to your hotel. That said, the atmosphere is undeniably romantic, and the better hotels—Le Sirenuse, Il San Pietro—provide refuge from the crowds while immersing you in the town's visual drama. Positano works for travelers who want to be in the postcard, who enjoy people-watching and evening passeggiata, and who don't mind stairs.

**Amalfi town** itself occupies a slightly more practical position—flatter, with a proper harbour, a cathedral worth visiting, and restaurants that cater to locals as well as visitors. The town feels more authentic than Positano, less performatively beautiful, more like a place where people actually live. Hotel options are more limited at the true luxury end, but the town serves well as a base for exploring the coast, with ferry connections to Positano, Capri, and Salerno.

**Praiano**, between Positano and Amalfi, offers a quieter alternative with genuine village atmosphere. Casa Angelina provides a minimalist white counterpoint to the coast's traditional hotels. The town is less touristed, the beaches are smaller and harder to reach, and the pace is genuinely slow. Praiano suits travelers who want the Amalfi Coast experience without the Amalfi Coast crowds.

## What Defines Amalfi Coast Luxury

Luxury on the Amalfi Coast is defined less by amenities and more by position. A hotel's value is largely determined by where it sits on the cliff and what it sees from its terraces. The great hotels here—Le Sirenuse, Belmond Caruso, Il San Pietro—charge premiums that are essentially view taxes, and honestly, the views justify the premium. No spa, no matter how elaborate, can compete with sitting on a terrace above the Mediterranean watching a fishing boat cross a bay turned gold by the late afternoon sun.

Service on the coast tends toward Italian warmth rather than Swiss precision. Staff at the better hotels are genuinely hospitable—they bring you limoncello you didn't order, remember which table you preferred at breakfast, share opinions about which beach club is actually worth the boat ride. The service can feel casual by northern European or Asian luxury standards, but this informality is part of the coast's character. If you need your staff to stand at attention, you may find the Amalfi Coast frustrating. If you want them to treat you like a favorite cousin who has come to visit, you will feel right at home.

The food is the other defining element. Campanian cuisine at its best is devastatingly simple: tomatoes that taste like the sun grew them personally, mozzarella pulled hours ago, fish grilled with lemon and olive oil, pasta with clams and white wine. The best hotel restaurants respect this simplicity rather than overcomplicating it. The worst try to add international sophistication that the ingredients do not need and do not benefit from. When choosing a hotel, pay attention to the kitchen's philosophy. A dining room that serves spaghetti alle vongole with confidence is almost always better than one offering a "deconstructed Mediterranean tasting journey."

## When to Visit

The Amalfi Coast's season runs roughly from Easter through October, with most luxury hotels closing for winter. The sweet spots are May to mid-June and mid-September to mid-October—periods when the weather is warm but not brutal, the crowds are present but manageable, and the light has a quality that makes the coastline even more beautiful than usual, which feels like it should be physically impossible.

July and August bring serious heat, intense crowds, and pricing that reaches its annual peak. The coast functions during these months, but the experience is fundamentally different: longer waits for ferries, packed beaches, restaurant reservations essential, and the roads congested with tour buses that test the laws of physics on those hairpin turns. If summer is your only option, book early, choose a hotel with good pool facilities, and accept that you will share the experience with many thousands of other travelers.

The shoulder months offer the best ratio of weather to crowds. In May, the wisteria blooms purple across every pergola, the water is warming to swimming temperature, and the lemons are ripening on terraces that glow yellow against green hillsides. In September, the sea is at its warmest, the summer masses have retreated, and the fishing boats return to harbours that had been surrendered to tourist ferries. Late October can bring rain but also brings an emptiness to the coast that has its own beauty—the villages as they were before tourism remade them, quiet and salt-scoured and entirely themselves.

## Getting There and Getting Around

Naples airport is the most common gateway, roughly 60 to 90 minutes from the coast by car depending on your destination and the traffic gods. Sorrento is an alternative starting point, reached by the Circumvesuviana train from Naples—a journey that is either charmingly local or exhaustingly crowded depending on your mood. From Sorrento, the coast road begins its winding descent toward Positano.

The ferry system connects the major towns and extends to Capri, providing a transportation alternative that is scenic, avoids the road entirely, and serves prosecco on board. For moving between towns, ferries are vastly preferable to driving, which involves narrow roads shared with buses, scooters, and pedestrians who seem unaware that traffic exists.

Most luxury hotels offer private transfers from Naples or the airport, and some maintain boats for guest use. These services cost premium prices but eliminate the logistical stress that can undermine a holiday. The coast is small enough that a good concierge and a hotel boat can get you anywhere you need to be without ever sitting in traffic on the SS163.

## Practical Considerations

Hotels on the Amalfi Coast tend toward the expensive, particularly during high season. The premium reflects genuine operating costs—maintaining buildings on vertical terrain is extraordinarily expensive—as well as demand that consistently exceeds supply. The best properties book months in advance for summer, and popular dates like the first two weeks of August may require a year's notice.

Accessibility is a genuine concern. The coast's beauty comes from its topography, but that topography means stairs—everywhere, constantly, and often steep. Travelers with mobility challenges should research properties carefully and ask specific questions about accessibility. Some hotels have lifts to beach level; many do not. The streets of Positano are essentially continuous staircases. Ravello's elevation means most activities involve changing altitude.

Swimming conditions vary by beach and season. The water is clean and blue, but beaches are typically pebble rather than sand, and many are only accessible by boat. Beach clubs charge entrance fees and provide loungers and umbrellas, and during summer the better ones book up by mid-morning. Your hotel concierge can guide you toward the right beach for your preferences—a quiet cove reached by boat, a sociable beach club with a good lunch menu, or a wild stretch of coast where the rocks are your furniture and the company is your own.`,
    published: 1
  }
];

const articles = [
  {
    title: `Belmond Caruso vs Grand Hotel Tremezzo: Italian Luxury, Two Perspectives`,
    slug: `belmond-caruso-vs-grand-hotel-tremezzo`,
    category: `versus`,
    subtitle: `Amalfi Coast cliff palace meets Lake Como grande dame—two of Italy's most iconic hotels, separated by geography and philosophy.`,
    hero_image: `https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1600`,
    content_md: `# Belmond Caruso vs Grand Hotel Tremezzo

Italy has a talent for producing hotels that feel like they belong to their landscapes so completely that removing them would diminish the geography itself. Belmond Hotel Caruso in Ravello and Grand Hotel Tremezzo on Lake Como are two such properties—each so intertwined with its setting that comparing them means comparing not just hotels but entire worlds. One sits atop an Amalfi Coast cliff above the Mediterranean. The other stretches along the shore of Italy's deepest lake beneath Alpine peaks. Both charge serious money for the privilege of occupying some of the most photographed real estate in European hospitality. The question is not which is better—that depends entirely on what you want from a hotel—but which is better for you.

## The Settings

The settings are what sell these hotels, and both deliver landscapes that make you question whether nature is doing this on purpose.

**Belmond Caruso** occupies a former eleventh-century palace in Ravello, a hilltop town roughly 350 meters above the Tyrrhenian Sea. The property perches on the cliff edge, and the views from its terraces and infinity pool stretch across the Gulf of Salerno to a horizon where sea meets sky in a line that shifts from silver to gold through the day. The landscape is vertical and dramatic—terraced lemon groves cascade down the cliff below the hotel, fishing boats dot the water far below, and the distant shape of Capri appears as a blue shadow on clear days. The air smells of salt and citrus and the particular mineral scent of sun-warmed limestone. Ravello's elevation lifts you above the coastal crowds, creating a sense of remove that is both physical and psychological.

**Grand Hotel Tremezzo** sits directly on the western shore of Lake Como, in the stretch between Bellagio and Menaggio that captures the lake's widest panorama. The views are horizontal where Caruso's are vertical—the lake extends north toward the Alps, with mountains rising steeply on both sides and Bellagio's peninsula jutting into the water across the way. The landscape is lush and green, almost northern European in its vegetation, with cypress trees, camellias, and formal gardens that have been maintained since the hotel opened in 1910. Where Caruso feels Mediterranean and sun-baked, Tremezzo feels Alpine and garden-softened, with a climate that brings genuine autumn colours and occasional winter mist.

**Verdict:** If you want Mediterranean drama—cliffs, sea, blazing light—choose Caruso. If you want Alpine serenity—lake, mountains, botanical richness—choose Tremezzo. Both are extraordinary.

## The Architecture and Design

**Belmond Caruso** inhabits a building with a thousand years of history. The original palace dates to the eleventh century, with subsequent additions layering Romanesque, medieval, and baroque elements into a structure that feels archaeological in its complexity. The renovation by Belmond has been respectful, preserving original frescoed ceilings, stone arches, and terracotta floors while introducing contemporary comfort. The interiors are bright and airy—white walls, local ceramics, lemon-yellow accents—reflecting the southern Italian light that floods through tall windows. The overall aesthetic is aristocratic Southern Italian: not minimalist, not maximalist, but confident in its decorative choices and deeply connected to regional traditions.

**Grand Hotel Tremezzo** is a different proposition entirely. The building is Art Nouveau, constructed in 1910 during the great era of European lakeside hotel building. The façade is grand and symmetrical, painted in the warm ochre that characterises Italian palazzo architecture, with shuttered windows and a lakefront terrace that stretches the full width of the building. Inside, the interiors have been updated with a contemporary Italian sensibility that respects the building's period proportions while introducing modern materials and furniture. The palette is warmer and richer than Caruso's—deep blues, jade greens, burnished golds—reflecting the lake's cooler light and the tradition of northern Italian luxury.

**Verdict:** Caruso for those who appreciate historical layers and Mediterranean brightness. Tremezzo for lovers of belle époque grandeur with contemporary polish.

## The Rooms

**Caruso's** rooms and suites vary dramatically, as they occupy different wings and levels of a building that was never designed for uniformity. The best suites feature original frescoed ceilings, private terraces overlooking the Gulf of Salerno, and the particular pleasure of sleeping in a room where medieval princes once entertained. The less expensive rooms are smaller and less characterful but still comfortable, with the same bright Amalfi aesthetic. Bathrooms are well-appointed if not enormous, with locally sourced marble and Belmond's own amenity line. The unevenness of the building plan means room selection matters—a good travel advisor can steer you toward the suites with the best views and the most interesting architectural features.

**Tremezzo's** rooms occupy the original 1910 building and a contemporary wing added during renovations. The heritage rooms offer period details—higher ceilings, original plasterwork, a sense of grand hotel history—while the newer rooms provide larger bathrooms, more consistent layouts, and lake views through floor-to-ceiling windows. The lakefront suites are the clear stars, with terraces that put you directly above the water and views that encompass Bellagio, the mountains, and the slow passage of ferries and private boats. The Rooftop Suite, with its private pool and 360-degree views, ranks among the finest hotel accommodations in northern Italy.

**Verdict:** Both offer excellent rooms, but Tremezzo provides more consistency across categories while Caruso offers more drama at the top end.

## The Pools

This is where both hotels make their strongest visual statements, and honestly, this section alone might determine your choice.

**Caruso's** infinity pool is carved from the cliff edge, heated to a temperature that makes year-round swimming possible, and positioned to create the illusion that you are swimming directly into the Gulf of Salerno. The water's surface aligns with the horizon, and from inside the pool, the boundary between chlorinated water and Mediterranean sea disappears entirely. At sunset, the pool turns golden, then copper, then deep blue as the sky darkens and the coast's lights begin to appear far below. It is one of the most photographed hotel pools on earth, and unlike many famous amenities, it delivers exactly the experience the photographs promise—maybe more, because no photograph captures the warm stone under your feet, the sound of distant church bells, or the scent of lemon trees drifting across the terrace.

**Tremezzo's** pool situation is more complex and arguably more versatile. The hotel operates three pools: a grand lakefront pool that seems to pour into Lake Como, a smaller adults-only pool tucked into the gardens, and a heated indoor pool for days when the Alpine weather turns uncooperative. The lakefront pool is the showpiece—swimming toward the lake, with Bellagio visible across the water and mountains rising beyond, delivers the visual drama that Lake Como promises. The water spa, Grotto-style, adds thermal facilities that Caruso cannot match. What Tremezzo lacks in Caruso's singular dramatic gesture, it compensates with variety and all-weather capability.

**Verdict:** Caruso's pool is more iconic and dramatically positioned. Tremezzo's pool setup is more practical and versatile. If you want the single greatest pool moment, Caruso wins. If you want the best overall aquatic experience across a stay, Tremezzo has the edge.

## The Dining

**Belmond Caruso** operates Belvedere Restaurant on a terrace that might be the most beautifully positioned outdoor dining space on the Amalfi Coast—which, given the competition, is a bold claim. The kitchen focuses on Campanian cuisine with appropriate reverence: local seafood handled simply, pasta made fresh with flour and water and patience, vegetables from the hotel's garden that taste like the sun did most of the cooking. The lemons are everywhere—in the granita, the risotto, the fish preparation—and they should be, because Ravello's lemons are among the finest in Italy. The wine list leans heavily on Campanian producers, with Greco di Tufo and Fiano di Avellino whites that pair brilliantly with the seafood. Dinner on the terrace, as the last light leaves the Gulf and the stars come out, is one of those hotel dining experiences that justifies the premium attached to eating where you sleep.

**Grand Hotel Tremezzo** counters with La Terrazza, its lakefront restaurant that earned a Michelin star in recent years. The cuisine is more technically ambitious than Caruso's—northern Italian with contemporary technique, lake fish alongside Piedmontese ingredients, truffle and butter alongside olive oil and lemon. The tasting menus show genuine creativity, and the kitchen's ambition elevates Tremezzo's dining beyond typical hotel restaurant territory. T Beach, the lakefront casual venue, provides excellent lighter fare with your feet practically in the water. The breakfast, served on the terrace with the lake stretching before you, includes pastries that would hold up in Milan and espresso that would survive scrutiny in Naples.

**Verdict:** Tremezzo has the more accomplished kitchen and the Michelin credential. Caruso has the more romantic setting and food that is simpler but deeply connected to its place. Gastronomes lean Tremezzo; romantics lean Caruso.

## The Service

**Belmond Caruso** delivers the Belmond brand of service: warm, attentive, and inflected with local personality. The staff are mostly from the region, and their hospitality feels indigenous rather than trained—they are welcoming you to their coast, not performing a script. The pace is unhurried, which can read as either relaxed or slow depending on your temperament. Preferences are remembered, recommendations are genuine, and there is a particular warmth to the interactions that reflects both Belmond's culture and the Amalfi Coast's personality. The concierge team knows the coast intimately and can arrange experiences—private boat tours, cooking classes with local nonnas, access to gardens normally closed to the public—that transform a stay from pleasant to memorable.

**Grand Hotel Tremezzo** operates with slightly more polish and formality, reflecting both its larger scale and the northern Italian context. The service is efficient and professional, with staff who combine Italian charm with operational precision. The concierge handles Lake Como logistics expertly—boat transfers, villa visits, restaurant reservations in Bellagio and Varenna. The spa team is particularly strong, providing treatments with genuine skill. What Tremezzo's service sometimes lacks in spontaneous warmth compared to Caruso, it gains in consistency and reliability.

**Verdict:** Caruso for travellers who value warmth and spontaneity. Tremezzo for those who prefer consistency and polish. Both are excellent.

## The Experience

This is ultimately what separates these two hotels, beyond the rooms and the ratings and the amenities.

**Staying at Belmond Caruso** feels like inhabiting a private cliff-edge estate on the Mediterranean, with staff who treat you like an honoured guest rather than a customer. The experience is sensory and emotional—the heat of the sun on the terrace, the taste of a lemon picked from the tree beside your breakfast table, the sound of Ravello's bells marking the hours, the view from the infinity pool that compresses sky and sea into a single blue plane. It is a romantic hotel in the deepest sense: a place that engages your feelings and makes the ordinary—a morning coffee, an afternoon swim, a glass of wine at sunset—feel significant.

**Staying at Grand Hotel Tremezzo** feels like being a guest at a grand lakeside palazzo where the hosts have impeccable taste and bottomless resources. The experience is more varied—the three pools, the spa, the multiple dining venues, the proximity to Bellagio and other lake towns—and the hotel rewards exploration rather than contemplation. The atmosphere is social and elegant, with a guest list that tends toward well-traveled Europeans who know how to enjoy a hotel without making a production of it. There is more to do at Tremezzo, more ways to structure your days, more variety in the experience.

**Verdict:** Caruso is the hotel for standing still—for long terrace mornings, for getting lost in the view, for letting the Amalfi Coast work its slow magic. Tremezzo is the hotel for elegant motion—for lake excursions, spa afternoons, multiple dining experiences, and the pleasure of a hotel that provides variety within excellence.

## The Practical Stuff

**Getting there:** Caruso requires navigating the Amalfi Coast road from Naples airport (roughly 90 minutes) or Ravello's local roads. Tremezzo is approximately an hour from Milan Malpensa. Both journeys are scenic. Tremezzo is slightly easier to reach. Both hotels offer private transfers.

**Season:** Caruso operates roughly April through November. Tremezzo has a similar season but can be slightly cooler at the shoulders due to the Alpine location. Summer is peak at both, but Caruso's hilltop position provides better airflow than the coast below.

**Price:** Both sit in the upper tier of Italian luxury pricing. Tremezzo's range is wider, from accessible lake-view rooms to the extraordinary Rooftop Suite. Caruso's entry point is slightly higher, reflecting its smaller scale and the Amalfi Coast's premium positioning.

**Who should choose Belmond Caruso:** Couples on romantic occasions. Travelers who prioritize views and atmosphere over amenities. Anyone who finds the phrase "infinity pool on an Amalfi cliff" irresistible. People who want their luxury warm, personal, and southern.

**Who should choose Grand Hotel Tremezzo:** Travelers who want a complete lakeside experience with variety. Families who need multiple activities and dining options. Gastronomes interested in Michelin-level hotel dining. Anyone who wants to explore Lake Como from a perfectly positioned base.

Both are among Italy's finest hotels. Neither is a wrong choice. The right one depends on whether your Italian fantasy involves sea or lake, cliff or shore, contemplation or exploration. Either way, you are choosing well.`,
    hotels_mentioned: [`belmond-hotel-caruso`, `grand-hotel-tremezzo`],
    featured: 1,
    published: 1
  }
];

// ============================================================================
// DATABASE OPERATIONS
// ============================================================================

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
  console.log(`Starting Mar 20 seed...`);
  console.log(`Destinations to insert: ${destinations.length}`);
  console.log(`Articles to insert: ${articles.length}`);

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

  console.log(`Mar 20 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
