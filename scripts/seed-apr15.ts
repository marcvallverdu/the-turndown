import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// APR 15 — COMO PARROT CAY + COMO BRAND PROFILE
// Week 6: Caribbean + Islands
// ============================================================================

const hotels = [
  {
    name: `COMO Parrot Cay`,
    slug: `como-parrot-cay`,
    brand: `COMO`,
    brand_slug: `como`,
    location: `Parrot Cay, Turks and Caicos`,
    country: `Turks and Caicos Islands`,
    country_slug: `turks-and-caicos-islands`,
    region: `Caribbean`,
    region_slug: `caribbean`,
    latitude: 21.8622,
    longitude: -72.1702,
    price_range: `$$$$`,
    price_from: 1200,
    price_to: 9000,
    currency: `USD`,
    style: `Barefoot Wellness Hideaway`,
    best_for: [`Privacy`, `Beach`, `Wellness`],
    hero_image: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200`,
      `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200`
    ],
    website: `https://www.comohotels.com/turks-and-caicos/como-parrot-cay`,
    booking_url: `https://www.comohotels.com/turks-and-caicos/como-parrot-cay/book`,
    tagline: `A private island that understands silence, sea light, and the value of leaving people alone.`,
    verdict_best_for: `Travelers who want real privacy, an excellent spa, and a Caribbean beach that feels improbably empty even in high season.`,
    verdict_skip_if: `You want nightlife, a social scene, or a resort that entertains you every fifteen minutes.`,
    verdict_standout: `The mile-long beach, which looks like a desktop wallpaper until you realize there are almost no footprints on it.`,
    rating_overall: 9.3,
    rating_room: 9.2,
    rating_service: 9.1,
    rating_food: 8.9,
    rating_value: 8.2,
    rating_location: 9.7,
    featured: 1,
    review_intro: section([
      `COMO Parrot Cay sits on its own private island in the Turks and Caicos, reached only by boat, which immediately filters the mood and the guest list. The transfer is short, about thirty minutes from Providenciales once you have made it through the airport, but it does an important psychological job. The main island's villas, grocery stores, and golf-cart sprawl fall away, and the hotel begins to feel less like a Caribbean resort and more like a controlled retreat. Parrot Cay has attracted enough celebrity owners over the years to generate lazy headlines, but fame is not the interesting part. The interesting part is how carefully the property protects boredom in the best sense of the word: no noise, no pressure, no unnecessary stimulation, just sea, wind, and a lot of white sand stretching into impossible blues.`,
      `The hotel opened under COMO in the late 1990s, and unlike many tropical luxury resorts of that era, it has aged well because its design never chased fashion. The architecture is low, pale, and restrained, pulling from colonial Caribbean forms without turning them into costume. White timber, teak, louvered shutters, broad verandas, ceiling fans, and rooms that open generously to the outside all create the feeling of a private estate rather than a machine for extracting room revenue. The style is recognizably COMO: disciplined, wellness-aware, quietly expensive, allergic to clutter. If you are expecting decorative Caribbean maximalism, bright colors, or a resort trying to perform local charm, this place will feel austere. If you understand that space itself is a luxury, it feels exactly right.`,
      `What separates COMO Parrot Cay from many beach resorts in this region is its seriousness about atmosphere. The beach is magnificent, yes, but plenty of islands can offer turquoise water and photogenic sand. What is rarer is a property with the confidence not to over-program its own setting. There are families here, honeymooners, health-focused regulars, and the occasional very rich person hiding in plain sight, but the resort absorbs them all into a prevailing hush. Mornings begin with bicycles rolling down sandy paths and coffee on shaded terraces. Afternoons slow further. Evenings belong to the sound of tree frogs and the low candlelit murmur of dinner. It is a hotel built around the idea that luxury should lower your pulse rather than raise it.`
    ]),
    review_arrival: section([
      `Getting to COMO Parrot Cay involves the usual Caribbean choreography of flights, immigration lines, and luggage roulette, but the property handles the final act well. Once you land in Providenciales, a representative meets you, helps with bags, and sends you onward by car to the marina. The boat transfer is covered, comfortable, and quick enough that it never turns into an ordeal. You skim past shallow turquoise flats, low mangroves, and the occasional bonefish boat, and by the time the dock at Parrot Cay comes into view you have already shifted down a gear. That shift matters. Hotels that require a transfer should earn it. This one does.`,
      `The arrival itself is understated. There is no lobby in the grand-hotel sense, no theatrical reveal, no welcome ritual designed for social media. Instead there is a low open-sided reception pavilion, cold towels, something fresh to drink, and staff who speak in the calm low register that the hotel seems to cultivate as a house style. Check-in happens efficiently while you sit, not while you queue. Luggage disappears. A host explains the island's simple geography, which mostly consists of beach, spa, restaurants, villas, and sandy paths connecting them. You quickly understand that the property's greatest virtue is not complexity but clarity. Nothing here is trying to impress you through abundance.`,
      `A buggy takes you to your room or suite through coconut groves and sea grape trees, with glimpses of the beach arriving in flashes through the foliage. The first impression on entering the accommodation is usually one of air and light. Even the entry categories feel open to the elements in a way that many resorts only simulate. Shutters, verandas, and ceiling fans make the room feel connected to the island rather than sealed off from it. That sense of permeability defines the arrival experience as a whole. You do not cross a threshold into a self-contained fantasy. You cross into a slightly more refined version of the landscape outside.`
    ]),
    review_room: section([
      `The rooms, suites, and beach houses at COMO Parrot Cay are studies in restraint. The palette is almost monastic by Caribbean standards: white walls, pale woods, crisp linen, mosquito-net draping, dark teak furniture, and just enough texture to keep the spaces from feeling ascetic. The effect is not minimalism for its own sake. It is a design choice that lets the changing light, the sea outside, and the rustle of palms do the decorative work. Beds are excellent, large and properly dressed in linens that feel cool even in humid weather. Air conditioning is effective but not aggressive, and the ceiling fans mean you can often avoid the sealed-box chill that plagues tropical hotels obsessed with indoor climate control.`,
      `Bathrooms are generous and intelligently laid out, with double vanities in most categories, good lighting, strong showers, and deep soaking tubs in the higher tiers. COMO's Shambhala products are among the better hotel amenities in circulation, smelling of clean botanicals rather than synthetic spa fantasy. Storage is ample, which sounds minor until you spend a week in a resort where luggage lives permanently on the floor. Here, the rooms are built for actual inhabitation. The terraces and verandas matter as much as the indoor square footage, providing shaded outdoor living that turns a morning coffee or post-swim read into part of the stay rather than an afterthought.`,
      `The larger villas and beach houses are where Parrot Cay becomes genuinely difficult to leave. Many come with private pools, direct or near-direct beach access, outdoor showers, and enough separation from neighbors that you can forget the hotel is hosting anyone else. The décor remains disciplined in these categories, which is smart. The extravagance lies in proportion, privacy, and access to the beach, not in louder furniture. This is not a resort that equates luxury with more objects. It equates it with fewer interruptions. That decision gives the accommodations a lasting elegance that trendier tropical design rarely manages.`
    ]),
    review_service: section([
      `Service at COMO Parrot Cay is warm but lightly worn, like linen rather than silk. The team is not trying to dazzle you with choreography. They are trying to make the island run smoothly, and most of the time they succeed. Staff quickly learn names and routines, especially if you stay more than a couple of nights. Breakfast orders begin to arrive with less explanation. Your preferred pool setup is remembered. The buggy drivers develop an instinct for when you want conversation and when you want the ride in silence. That tonal accuracy matters in a property built around calm. Over-eager service would ruin the mood.`,
      `The spa staff deserve particular praise. COMO's wellness reputation is not just branding here. Therapists are technically strong, the yoga teachers are serious without being sanctimonious, and the reception team handles the slightly fiddly logistics of classes, treatments, and consultations with patience. Good wellness service is often less about effusion than confidence. You want people who know what they are doing and do not wrap every interaction in pseudo-spiritual fluff. Parrot Cay largely gets that balance right. The same is true on the beach, where attendants appear when useful, disappear when not, and do not make lounging feel like a managed activity.`,
      `Where service can slip is pace. Island time is a cliché until your lunch takes longer than promised or a buggy requires a second call. None of this becomes serious, and many guests will read it as part of the place's relaxed rhythm. Still, there are moments when a touch more urgency would improve the experience without damaging the mood. This is the trade-off at many resorts that prioritize softness over hard-edged efficiency. Personally, I would take Parrot Cay's occasional delay over the robotic perfection of a property that feels operationally joyless. But if your idea of five-star service is total Swiss-watch precision, calibrate expectations accordingly.`
    ]),
    review_food: section([
      `Food is where many private-island resorts expose themselves. Isolation can produce high prices and low ambition, with kitchens leaning on logistics as an excuse. COMO Parrot Cay performs better than that. Lotus, the main restaurant, serves Asian-influenced dishes and much of the excellent COMO Shambhala menu, which means you can eat grilled local fish with green papaya salad at lunch and still choose a clean, vegetable-forward dinner if that is the mood you are in. Terrace handles breakfast and more traditional evening dining, with Caribbean ingredients treated sensibly rather than overworked. The quality is consistently high even if it does not quite reach destination-restaurant status.`,
      `Breakfast is one of the resort's stronger daily rituals. Tropical fruit arrives ripe rather than decorative, pastries are properly made, eggs come as ordered, and the juices taste fresh instead of pre-negotiated. The Shambhala options, often a weak point at wellness-forward hotels that seem to confuse health with punishment, are genuinely good. Grain bowls have texture, not just virtue. Smoothies taste of fruit, not powdered penance. Coffee is decent, which should not be notable at this level but still is. You can eat lightly here without feeling deprived, or order a full Western breakfast and go to the beach happy. The flexibility is appreciated.`,
      `Dinner is more atmospheric than revelatory, but that is not necessarily a criticism. Guests come to Parrot Cay to stay on the island, and the restaurants understand their role as part of the evening rhythm rather than standalone spectacles. Candles, sea breeze, soft conversation, and a menu that mixes local seafood with Thai, Japanese, and Mediterranean influences create an experience that is pleasurable and easy. The wine list is well chosen if expensive, as private-island wine lists tend to be. Room service is reliable and often a better-than-expected option, especially if you are staying in a villa and have no desire to dress for dinner. The honest verdict is this: you will eat well here, sometimes very well, but the beach remains the star.`
    ]),
    review_details: section([
      `The beach is the reason most people book, and it deserves the hype. It is long, broad, powder-soft, and so lightly populated that you can walk for ages without weaving around other guests. The water shifts from clear pale blue at the shore to richer stripes of aquamarine and cobalt farther out, with very little seaweed and almost absurdly gentle gradients. It is one of those beaches that recalibrates your standards and makes crowded Caribbean shores feel faintly insulting afterward. The pool, by contrast, is handsome but secondary, useful for laps or families but never as compelling as the sea a few steps away.`,
      `The COMO Shambhala Retreat is the property's other major asset. Treatment rooms sit among palms, yoga happens in open-sided pavilions, and the whole operation benefits from COMO's long experience in packaging wellness without making it feel evangelical. There is a proper gym, Pilates, tennis, paddleboarding, kayaking, and enough low-key activity to prevent rest from turning into stagnation. But again, the point is the tone. Nothing here is delivered with the forced perkiness that ruins so many resort activity programs. If you want to spend three days doing nothing but reading, swimming, and sleeping, the hotel regards this as a sensible use of your time.`,
      `The island itself is also an amenity. Sandy roads, bicycles leaning outside cottages, little glimpses of marsh and mangrove beyond the hotel core, and the occasional weather shift rolling in across the flats all give Parrot Cay a feeling of being somewhere specific rather than nowhere in particular. There is not much commerce, no village to wander into, and very little beyond the resort infrastructure. Normally I would count that as a weakness. Here it is the whole proposition. The hotel has been smart enough to realize that remoteness is not a side effect. It is the product.`
    ]),
    review_verdict: section([
      `COMO Parrot Cay is one of the Caribbean's most persuasive arguments for simplicity. Not cheap simplicity, obviously. This is a deeply expensive private-island hotel. But it is simple in the sense that the essentials are unusually well judged: a beautiful beach, strong rooms, a serious spa, good-enough food, and a service style that does not intrude on the reason you came. Many luxury resorts overbuild and overpromise. Parrot Cay edits. That restraint is the source of its charm and its authority.`,
      `It also has a clear point of view. This is not a family mega-resort, not a nightlife island, not a design object screaming for attention. It is for people who want quiet, privacy, and enough comfort that the outside world can fade without friction. If you need constant novelty, restaurant hopping, or a lively bar after dinner, you may find the place too subdued by day three. If, however, your idea of success is forgetting what day it is while walking a near-empty beach before breakfast, it is close to ideal.`,
      `The Caribbean is full of hotels that sell paradise in large loud fonts. COMO Parrot Cay does not need to. It trusts the sea, the light, and the sensation of being left alone in a beautiful place. That is a smarter luxury proposition than most resorts manage. It is not perfect, and the pricing requires conviction, but as a private-island escape built for decompression rather than performance, it is among the region's best.`
    ])
  }
];

const brands = [
  {
    name: `COMO`,
    slug: `como`,
    tagline: `Quiet luxury before quiet luxury became an exhausted phrase.`,
    hero_image: `https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600`,
    content_md: `# COMO

COMO is one of the few hotel brands that has built a real identity out of restraint. In an industry addicted to overstatement, that alone is worth respecting. Founded by Christina Ong in the early 1990s, the Singapore-based company grew from fashion and lifestyle roots into a hotel group with a surprisingly coherent worldview. That worldview is not hard to summarize. Space matters. Light matters. Food matters. Wellness matters. Noise, clutter, and hospitality theatrics usually do not.

The brand's portfolio is intentionally small, which helps. COMO has never chased scale the way the major luxury groups have. Instead it has assembled a selective collection that includes city hotels, island retreats, ski properties, and a handful of deeply desirable leisure resorts: COMO The Halkin and COMO Metropolitan in London, COMO Uma Ubud and COMO Shambhala Estate in Bali, COMO Parrot Cay in Turks and Caicos, COMO Cocoa Island and COMO Maalifushi in the Maldives, COMO Castello Del Nero in Tuscany, COMO Alpina Dolomites in Italy, and a few others. Not every property is equally essential, but most feel recognizably related. That is harder than it sounds. Many hotel brands share logos more convincingly than values. COMO actually behaves like a brand with taste.

## The COMO Philosophy

At its best, COMO sells a version of luxury built around calm control. Rooms are rarely cluttered. Public spaces breathe. Service is attentive without becoming syrupy. Restaurants usually avoid the stale luxury-hotel trap of trying to please everyone and delight no one. Wellness is not bolted on as a revenue center. It sits close to the center of the brand's identity.

This does not mean every COMO property feels like a spa with room keys. That would be unbearable. It means the company thinks carefully about how guests actually want to feel during a stay. Better sleep. Cleaner food if desired. Strong massage therapists. Good yoga. Spaces that lower anxiety rather than raise it. The result is that even the urban hotels often feel more composed than their competitors. A COMO hotel rarely overwhelms on first glance. It improves as your nervous system catches up.

There is also a distinctly Asian discipline to the brand, even when the properties are in Europe or the Caribbean. By that I mean a seriousness about hospitality systems, proportion, and tonal control. COMO does not generally go in for old-world pomp, nor does it chase the kind of hyper-social scene-making that some newer luxury groups treat as a business model. It prefers understatement, and because it has preferred understatement for decades, it feels authentic rather than reactive.

## Design Language

COMO's visual language is one of the clearest in high-end hospitality. Clean lines, natural materials, pale palettes, excellent beds, intelligent lighting, and layouts that prioritize flow over decorative fuss. The brand has worked with designers such as Paola Navone and Koichiro Ikebuchi, and while individual properties reflect their contexts, the common thread is obvious. A COMO room tends to look edited. Not empty, just edited. You sense that every extra object failed to make the cut.

This can read as elegant or severe depending on the property and your taste. At COMO The Halkin, the old London townhouse shell collides slightly with the brand's restraint, creating a polished if less emotionally memorable hotel. At COMO Castello Del Nero in Tuscany, the balance is more interesting because the contemporary calm is set against a historic estate with frescoes, cypress-lined drives, and all the drama that the Tuscan countryside supplies for free. At COMO Parrot Cay and Cocoa Island, the design language feels most convincing because the landscapes are so strong that the hotel can afford to step back.

The best COMO properties understand that restraint is not the same as blandness. The rooms feel considered, not generic. Textures matter. Views are framed rather than merely exposed. Wellness areas avoid mystical kitsch. Restaurants have atmosphere without needing twelve layers of mood lighting. When the formula slips, it usually slips toward excessive smoothness, a sense that the brand's discipline has ironed out some of the local character. But even then, the baseline quality remains high.

## Wellness, Actually Taken Seriously

COMO Shambhala is the engine behind much of the brand's reputation, and unlike many branded wellness concepts, it has depth. Treatments are generally excellent. Therapists are well trained. Yoga and Pilates programming tends to be serious enough for people who actually practice, not just people who occasionally post from a mat. The food program includes health-focused menus that are unusually edible, a sentence that sounds backhanded until you remember how many hotel wellness menus taste like punishment.

COMO Shambhala Estate in Bali is the purest expression of this side of the brand. Hidden in the jungle outside Ubud, it operates as a full-spectrum wellness retreat with resident experts, hydrotherapy facilities, movement classes, and programs built around stress, nutrition, fitness, and sleep. It can be life-changing for the right guest and slightly intense for the wrong one. The point is that it has conviction. This is not an ordinary luxury hotel that added a green juice. It is a property built around the idea that travel can alter how you feel in your body.

Even at less explicitly wellness-driven COMO hotels, the Shambhala influence improves the basics. Gyms tend to be better than average. Spa menus make sense. In-room wellness details, from bath products to yoga mats to sleep support, are integrated thoughtfully. The brand understands something important: modern luxury travelers often want indulgence and repair at the same time.

## Food and Drink

COMO's food has long been better than it strictly needed to be. That sounds like faint praise, but it is not. Hotel groups often assume that location, design, or loyalty-program gravity will compensate for mediocre kitchens. COMO generally refuses that shortcut. The Metropolitan in London became genuinely famous for Nobu, which helped define the hotel when the brand's city properties were first making their reputations. Since then the group has continued to take restaurants seriously, even where the concepts are quieter.

The other notable thing is that healthy food at COMO is not treated like a side menu for the virtuous few. Shambhala cuisine sits alongside more indulgent options and is developed with enough technical care that choosing it does not feel like self-denial. This matters because many guests at COMO properties want flexibility rather than ideology. One meal might be grilled fish, bitter leaves, and a broth bright with herbs. The next might be pasta, dessert, and a very decent bottle of wine. The brand is smart enough not to moralize.

Bars are less central to the COMO identity, and that is one place where some properties feel slightly underpowered compared with grander or more socially ambitious rivals. You rarely choose COMO because you have heard its bars are electric. You choose it because you assume you will eat well and sleep better than usual.

## Best Properties in the Portfolio

**COMO Parrot Cay** remains one of the brand's signature achievements. The private-island setting in Turks and Caicos, the huge beach, the spa, and the disciplined design language make it one of the Caribbean's strongest luxury resorts, especially for guests who value privacy over scene.

**COMO Shambhala Estate** is probably the brand's most conceptually complete property. If you care about wellness beyond the Instagram version of wellness, it is the one to know.

**COMO Cocoa Island** in the Maldives is another standout, more intimate than many Maldivian competitors and truer to the brand's uncluttered style than the newer overwater spectacle resorts that dominate the market.

**COMO Castello Del Nero** deserves mention because it proves the brand can work in old-world Europe without losing itself. The estate gives COMO the drama its design sometimes refuses, and the combination is appealing.

## Where COMO Can Miss

The downside of such a controlled brand identity is that some properties can feel a little too serene, especially in cities where a bit more friction or atmosphere would help. Not every traveler wants their hotel to whisper. Sometimes you want edge, wit, sociability, or a stronger local accent. COMO is not usually the brand for that.

Because the company prefers discipline to theatrics, some first impressions can undersell the actual quality. A Rosewood or a Cheval Blanc may land a bigger emotional punch on arrival. A classic palace hotel may offer more memorable public rooms. A lifestyle-luxury hybrid may create more evening energy. COMO wins later, in the texture of the stay, the quality of sleep, the usefulness of the spa, and the realization that nothing has irritated you for forty-eight hours.

This also means the brand is less suited to travelers who want constant stimulation, family-heavy programming, or obvious wow moments. The wow at COMO is usually subtler than that. It is the way the room works. The way the treatment helps. The way the breakfast leaves you feeling better rather than merely full. For some guests that is the highest form of luxury. For others it may feel too controlled.

## Who COMO Is For

COMO appeals to travelers who have outgrown hospitality noise. People who value privacy, design intelligence, and wellness that is actually well executed. It is for guests who notice bed quality, shower pressure, air, layout, and food, and who do not need a hotel to perform excitement every hour. The brand also suits solo travelers well, particularly at the retreat properties, because its calm does not feel couple-coded in the way some island and wellness resorts do.

It is less well suited to travelers seeking old-school glamour, maximalist indulgence, or the social charge of a buzzy hotel. If you want to be seen, choose elsewhere. If you want to feel better, COMO is often a very good bet.

The best compliment I can give the brand is this: COMO understood quiet luxury long before the phrase was cheapened by marketing departments. It built a hotel language around calm, quality, and physical wellbeing, then had the good sense not to shout about it too much. In hospitality, that kind of confidence is rare.`,
    hotel_count: 11,
    founded_year: 1991,
    parent_company: `COMO Group`,
    best_property: `como-parrot-cay`,
    website: `https://www.comohotels.com`,
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

const brandColumns = [
  `id`, `slug`, `name`, `tagline`, `hero_image`, `content_md`, `hotel_count`,
  `founded_year`, `parent_company`, `best_property`, `website`, `published`
];

const insertHotelQuery = `INSERT INTO hotels (${hotelColumns.join(`, `)}) VALUES (${hotelColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;
const insertBrandQuery = `INSERT INTO brands (${brandColumns.join(`, `)}) VALUES (${brandColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting Apr 15 seed...`);
  console.log(`Hotels: ${hotels.length} | Brands: ${brands.length}`);

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

  for (const brand of brands) {
    await pool.query(insertBrandQuery, [
      randomUUID(), brand.slug, brand.name, brand.tagline, brand.hero_image,
      brand.content_md, brand.hotel_count, brand.founded_year, brand.parent_company,
      brand.best_property, brand.website, brand.published
    ]);
    console.log(`Inserted brand: ${brand.name}`);
  }

  console.log(`Apr 15 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
