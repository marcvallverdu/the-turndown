import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// MAR 30 CONTENT: Belmond Reid's Palace + Six Senses Douro Valley
// ============================================================================

const hotels = [
  {
    name: `Belmond Reid's Palace`,
    slug: `belmond-reids-palace`,
    brand: `Belmond`,
    brand_slug: `belmond`,
    location: `Funchal, Madeira, Portugal`,
    country: `Portugal`,
    country_slug: `portugal`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 32.6378,
    longitude: -16.9024,
    price_range: `$$$$`,
    price_from: 550,
    price_to: 2200,
    currency: `EUR`,
    style: `Atlantic Cliff-Top Grand Dame`,
    best_for: [`Heritage`, `Gardens`, `Ocean Views`],
    hero_image: `https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200`,
      `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200`
    ],
    website: `https://www.belmond.com/hotels/europe/portugal/madeira/belmond-reids-palace`,
    booking_url: `https://www.belmond.com/hotels/europe/portugal/madeira/belmond-reids-palace/book`,
    tagline: `Madeira's original grand hotel—where Winston Churchill painted sunsets and the Atlantic still performs on cue.`,
    verdict_best_for: `Travelers who want old-school Atlantic grandeur, subtropical gardens, and a hotel that has been getting it right since 1891.`,
    verdict_skip_if: `You want beach access, contemporary design, or a hotel that caters to the Instagram generation.`,
    verdict_standout: `The cliff-top terraces at sunset, when the Atlantic turns gold and Funchal's harbour lights flicker on below.`,
    rating_overall: 9.1,
    rating_room: 8.9,
    rating_service: 9.3,
    rating_food: 9.0,
    rating_value: 8.7,
    rating_location: 9.5,
    featured: 1,
    review_intro: section([
      `Reid's Palace has occupied its cliff on the southern coast of Madeira since 1891, which means it has been watching the Atlantic for longer than most hotel brands have existed. The property was built by William Reid, a Scotsman who arrived in Madeira as a fourteen-year-old with no money and a talent for understanding what wealthy travellers wanted before they knew it themselves. What Reid understood was simple: give people a perch above the ocean, surround them with flowers, and leave them alone. The formula has barely changed in 130 years, and the fact that it still works is either a testament to timeless principles or a criticism of an industry addicted to reinvention. Either way, Reid's endures.`,
      `The hotel sits on a promontory that juts into the sea west of Funchal, commanding views that sweep from the harbour to the open Atlantic. The building is pink and white, layered across the cliff in terraces that descend through ten acres of subtropical gardens. Bougainvillea, bird-of-paradise, frangipani, banana palms, and species you cannot name cascade down the slope, creating a botanical density that feels almost aggressive in its beauty. The air smells of flowers and salt, a combination so specific to this place that catching it elsewhere immediately triggers memory.`,
      `Belmond acquired the property as part of its portfolio, and the stewardship has been careful. The renovations have modernised plumbing, added a spa, and refreshed interiors without erasing character. Reid's still feels like a grand hotel rather than a luxury product—a distinction that matters. The corridors are wide enough for two people to pass without sideways shuffling. The public rooms have the proportions of a previous century, when architects understood that ceiling height and natural light were not luxuries but necessities. The guests tend to return, year after year, which tells you more about the hotel than any review can.`
    ]),
    review_arrival: section([
      `The drive to Reid's Palace from Funchal airport takes about twenty minutes, climbing through the city's layered streets before the hotel's gates appear on the left. The entrance is modest by grand hotel standards—a covered portico, a discreet sign, a doorman who opens the car door with the unhurried efficiency of someone who has done this ten thousand times. There is no chandelier-studded lobby designed to make your jaw drop. Instead, you step into a reception hall that is elegant and cool, with tile floors and fresh flowers and the faint sound of the ocean somewhere below.`,
      `Check-in happens at a proper desk, with proper paperwork, handled by staff who ask about your flight and mean it. The formality is present but warm, Portuguese in its courtesy without being stiff. A porter takes your bags and walks you to your room, and this walk is where Reid's begins to reveal itself. The corridors open onto terraces, the terraces open onto gardens, and the gardens open onto the Atlantic. Each transition brings you closer to the view that Reid's was built to frame, and by the time you reach your room, you have left behind whatever you brought with you from the airport.`,
      `What makes the arrival distinctive is its pace. Reid's does not rush you through a streamlined check-in process designed to minimise friction. It invites you to slow down, to notice the tile patterns underfoot, to pause at a window and register that the light here is different—softer, warmer, filtered through subtropical air. The hotel trusts that its setting will do the work of impression, and it is right. By the time you step onto your balcony and see the ocean spread below, framed by palms and bougainvillea, you understand why people have been coming here for over a century. The arrival is not a process; it is a decompression.`
    ]),
    review_room: section([
      `Rooms at Reid's Palace range from garden-view doubles to ocean-facing suites, and the view is the deciding factor. Garden-view rooms are perfectly comfortable but miss the point; the ocean is why you are here, and paying the supplement for a sea-facing room is one of those hotel decisions that pays for itself within the first hour. The rooms have been updated with sensitivity, retaining period proportions—high ceilings, generous windows, proper wardrobes—while adding contemporary comforts. The palette runs toward creams and soft blues, with wooden furniture that feels inherited rather than purchased. The effect is residential, the kind of room you might find in the home of a well-off Madeiran family with good taste and no interest in trends.`,
      `Beds are excellent. The mattresses are firm enough to support but soft enough to sink into, dressed in crisp white linen that smells faintly of lavender. The pillows are generous, and the turndown service adds a chocolate and a weather card for the following day—a small touch that connects you to the island's rhythms. Bathrooms vary by room category but are generally well-appointed, with marble surfaces, deep bathtubs, and quality fixtures. The Penhaligon's toiletries are a nice match for the hotel's character: British heritage, quietly luxurious, no need to shout about it.`,
      `The balconies are the rooms' greatest feature. Even the smaller rooms have outdoor space sufficient for breakfast or evening drinks, and the larger suites offer terraces where you could comfortably spend an entire afternoon. The views are unobstructed—ocean, sky, and the distant silhouette of the Desertas Islands on clear days. The sound of the sea reaches every room, a constant murmur that becomes the stay's soundtrack. Air conditioning is available but rarely needed; the Atlantic breeze handles climate control more elegantly than any machine. At night, with the windows open and the ocean audible, Reid's rooms offer a quality of sleep that no urban hotel can match.`
    ]),
    review_service: section([
      `Service at Reid's Palace operates in a register that has largely disappeared from modern hospitality. The staff are formal without being rigid, attentive without being performative, and genuinely knowledgeable about the hotel, the island, and the particular needs of guests who return year after year. Many of the senior staff have worked at Reid's for decades, and this continuity creates a depth of institutional knowledge that no training programme can replicate. They know which rooms catch the morning light, which garden paths are best after rain, and which table in the restaurant offers the view that will stop you mid-sentence.`,
      `The concierge desk is staffed by people who understand Madeira with the fluency that only residents possess. They can arrange levada walks graded to your fitness level, book tables at restaurants in Funchal's old town that guidebooks have not yet discovered, and organise boat trips to the Desertas with a naturalist who knows the monk seal population by name. Their recommendations are personal rather than generic, delivered with the confidence of people who have tested every suggestion themselves. When they tell you to visit a particular viewpoint at a particular time of day, you should listen.`,
      `Housekeeping deserves particular mention. Rooms are serviced twice daily with an attention to detail that reflects genuine pride. The beds are made with hospital-corner precision, towels are replaced without displacing your belongings, and the bathroom is restored to perfection without the sterile feeling of a room that has been processed rather than cared for. Evening turndown includes drawn curtains, adjusted lighting, and that chocolate placed at exactly the angle where you will notice it without it appearing fussy. The service at Reid's is not about grand gestures; it is about a hundred small things done correctly, consistently, for 130 years.`
    ]),
    review_food: section([
      `Dining at Reid's Palace centres on the William Restaurant, a formal space with ocean views and a menu that draws on Portuguese and international traditions. The cooking is classical rather than avant-garde, which suits the hotel's character perfectly. Grilled fish—espada, the black scabbardfish that is Madeira's signature—is handled with respect, served simply with local vegetables and the kind of confidence that comes from knowing the ingredient is exceptional and does not need disguising. The beef, sourced from mainland Portugal, is properly aged and accurately cooked. The wine list is deep in Portuguese selections, including Madeiran wines that deserve far more attention than they receive on the global stage.`,
      `Breakfast is where Reid's truly excels. Served on the terrace overlooking the Atlantic, it is one of those meals that redefines what hotel breakfast can mean. The buffet includes tropical fruits grown in the hotel's own gardens—papaya, passion fruit, custard apple—alongside cured meats, local cheeses, and pastéis de nata that arrive warm from the kitchen. Eggs are cooked to order with the kind of precision that suggests the kitchen takes breakfast as seriously as dinner. The coffee is strong and Portuguese, served in proper cups rather than oversized mugs. Sitting on that terrace in the morning light, with the ocean below and a plate of fruit still warm from the sun, you understand why Churchill spent so many mornings here.`,
      `Afternoon tea on the terrace is Reid's most famous ritual, and it has earned its reputation. The setting is unbeatable: tiered gardens, ocean panorama, the particular quality of late-afternoon Madeiran light. The tea itself is proper—finger sandwiches, scones with clotted cream, and an array of pastries that balance Portuguese sweetness with British restraint. The Madeira cake, served at a Madeira hotel on the island of Madeira, achieves a level of contextual perfection that no other afternoon tea can match. It is easy to be cynical about hotel afternoon teas, but Reid's version silences the cynic. The Pool Terrace restaurant offers lighter fare for lunch, with grilled fish, salads, and the kind of honest cooking that tastes best in salt air and sunlight.`
    ]),
    review_details: section([
      `The gardens at Reid's Palace are a destination in themselves. Ten acres of subtropical planting cascade down the cliff, threaded with paths that descend through microclimates of shade and sun. The collection includes species from across the Portuguese empire—plants that arrived in Madeira centuries ago from Brazil, Mozambique, Goa, and Macau—creating a botanical diversity that reflects the island's history as a waystation between continents. The garden staff maintain this abundance with visible care, and the result is a landscape that feels wild without being neglected, curated without being manicured. Walking the paths at different times of day reveals different flowers in bloom, different light, different scents.`,
      `The spa, added in a renovation, occupies a terrace overlooking the ocean and offers treatments that incorporate local ingredients—passion fruit, Madeiran honey, volcanic clay. The treatment rooms are simple and calming, and the therapists are skilled. The pool, heated and positioned for ocean views, provides a good alternative to the sea. The fitness centre is adequate for maintenance but not a destination. For serious exercise, the island's levada walks—irrigation channels that traverse the mountains—offer the best workout in the most spectacular setting imaginable. The concierge can match you with a route that suits your ambition.`,
      `Practical matters: the hotel's cliff-top position means there is no direct beach access, which is worth understanding before booking. Funchal has several lido complexes with sea access, and the concierge can arrange transportation. The hotel does have a sea-level bathing platform, accessible via a lift, but it is not a beach. Wi-Fi is reliable throughout the property, though the garden paths and terraces are places where you might choose to disconnect. The hotel runs a shuttle to Funchal's centre, though the city is also walkable if you do not mind hills—and on Madeira, you will mind hills. The isolation of the cliff-top position is ultimately the hotel's greatest feature: you are removed from the city's noise without being distant from its pleasures.`
    ]),
    review_verdict: section([
      `Reid's Palace is not trying to be anything other than what it is: a grand hotel on a cliff above the Atlantic, surrounded by flowers, staffed by people who take pride in hospitality as a vocation. It does not chase trends, does not court influencers, and does not feel the need to justify its existence through constant reinvention. The hotel's confidence is quiet and absolute, the confidence of a place that has been proving its worth to guests since Queen Victoria was on the throne.`,
      `The hotel works best for travellers who value atmosphere over amenity lists, who find pleasure in gardens and ocean views rather than rooftop pools and celebrity restaurants, and who understand that the best luxury is often the least conspicuous. Reid's attracts a loyal clientele—couples marking anniversaries, British families who have been coming for generations, solo travellers who come to read and walk and eat well—and this loyalty creates an atmosphere of shared appreciation that enhances every stay.`,
      `Madeira itself is a remarkable island, volcanic and green and perpetually mild, and Reid's is the lens through which it is best experienced. Churchill came here to paint. George Bernard Shaw came to dance. Generations of travellers have come simply to sit on the terrace and watch the Atlantic do what the Atlantic does. The hotel facilitates these experiences with grace and without fuss. In an industry obsessed with disruption, Reid's Palace is a reminder that some things do not need disrupting. They just need maintaining, carefully and with love, which is exactly what Belmond continues to do.`
    ])
  },
  {
    name: `Six Senses Douro Valley`,
    slug: `six-senses-douro-valley`,
    brand: `Six Senses`,
    brand_slug: `six-senses`,
    location: `Lamego, Douro Valley, Portugal`,
    country: `Portugal`,
    country_slug: `portugal`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 41.0793,
    longitude: -7.8090,
    price_range: `$$$$`,
    price_from: 500,
    price_to: 1800,
    currency: `EUR`,
    style: `Wine Country Wellness`,
    best_for: [`Wellness`, `Wine`, `Nature`],
    hero_image: `https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200`,
      `https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200`
    ],
    website: `https://www.sixsenses.com/en/resorts/douro-valley`,
    booking_url: `https://www.sixsenses.com/en/resorts/douro-valley/book`,
    tagline: `A 19th-century manor house where port wine terraces meet Six Senses wellness—the Douro as you dreamed it.`,
    verdict_best_for: `Travellers seeking the rare intersection of serious wine country, serious wellness, and a landscape that earns its UNESCO status.`,
    verdict_skip_if: `You want beach access, nightlife, or a hotel where you can avoid conversations about terroir and tannins.`,
    verdict_standout: `The infinity pool hanging above the Douro River, with vine-covered hillsides rising on every side like a green amphitheatre.`,
    rating_overall: 9.3,
    rating_room: 9.2,
    rating_service: 9.1,
    rating_food: 9.4,
    rating_value: 9.0,
    rating_location: 9.6,
    featured: 1,
    review_intro: section([
      `The Douro Valley is one of those landscapes that makes you question why you have been spending holidays anywhere else. The river cuts through northern Portugal in a deep, winding gorge, and both banks rise steeply in terraces that have been planted with vines since the Romans decided this was a good place to make wine. They were right. The terraces, built by hand from schist stone over centuries, create a pattern of geometric beauty that UNESCO recognised in 2001 as a World Heritage Site. Into this setting, Six Senses has placed a resort that manages the difficult trick of feeling both luxurious and appropriate—a place that honours its surroundings rather than competing with them.`,
      `The property is built around a 19th-century manor house, the Quinta de Vale Abraão, which provides the kind of architectural anchor that purpose-built resorts can never achieve. The original building's stone walls, vaulted ceilings, and iron-railed balconies have been preserved and integrated into the resort's design, so that walking from reception to the spa feels like moving through layers of Portuguese history. Six Senses has added contemporary buildings that house additional rooms and the spa complex, but they sit below the manor's sightline, respecting the original structure's primacy. The overall effect is of a property that has grown organically from its site rather than landing upon it.`,
      `What makes Six Senses Douro Valley distinctive among luxury Portuguese hotels is its dual identity. This is simultaneously a serious wine destination and a serious wellness retreat, and it manages to serve both constituencies without either feeling compromised. The wine experiences—tastings, vineyard visits, harvest participation, a cellar that would impress any oenophile—are genuine rather than decorative. The wellness programming—Six Senses spa, yoga, Ayurvedic consultations, sleep programmes—draws on the brand's global expertise. The result is a hotel where you can spend the morning in a sound healing session and the afternoon tasting vintage port, and neither activity feels at odds with the other. This is the Douro's gift: a landscape so profoundly beautiful that it makes both indulgence and abstinence feel equally natural.`
    ]),
    review_arrival: section([
      `Getting to Six Senses Douro Valley requires commitment, which the hotel understands and turns into an advantage. The nearest major airport is Porto, roughly ninety minutes by car. The drive is unremarkable until you leave the motorway and enter the Douro Valley proper, at which point the landscape seizes your attention and does not let go. The road winds along the river's edge, climbing and descending through villages that cling to the hillside like barnacles on a hull. Vine terraces stretch above you in every direction, their geometry so precise that they look almost digital against the organic curves of the valley.`,
      `The hotel's entrance comes after a final climb through its own vineyards, and the first view of the manor house—stone walls glowing in afternoon light, the valley dropping away behind it—is genuinely arresting. The doorman greets you with the calm of someone who watches this reaction multiple times daily and never tires of it. The lobby occupies the manor's ground floor, a cool stone space where fresh flowers and the smell of wood smoke in winter create an immediate sense of arrival. Check-in is handled with Six Senses efficiency—quick, warm, focused on getting you into the landscape rather than trapping you in process.`,
      `The walk to your room is where the resort's layout begins to make sense. Paths wind through terraced gardens, past the outdoor pool, through groves of olive and cork trees. The buildings step down the hillside, and each turn reveals a different perspective of the valley below. By the time you reach your room, you have absorbed the resort's scale and rhythm—it is larger than the manor house suggests but never overwhelming, spread across its terrain in a way that creates privacy without isolation. The air is clean, scented with pine and grape and river, and the silence is the kind that only exists where human density is low and nature is doing most of the talking.`
    ]),
    review_room: section([
      `Rooms at Six Senses Douro Valley divide between those in the original manor house and those in the newer wings that step down the hillside. The manor rooms have the higher ceilings, the older stonework, and the feeling of inhabiting history. The newer rooms offer better views, more contemporary layouts, and private terraces that face the valley. Both are excellent; the choice is between character and panorama, and there is no wrong answer. The suites, particularly the Quinta Suites with their own plunge pools, provide the full experience—space, privacy, and a view that makes productive work almost impossible.`,
      `The design language across all rooms is Six Senses at its best: natural materials, muted tones, handcrafted details, and a deliberate absence of anything synthetic or forced. Floors are reclaimed wood or local stone. Fabrics are linen and cotton in earth tones. Furniture is solid and simple, designed for use rather than admiration. The beds are the brand's signature—organic mattresses, linen sheets, a pillow menu that offers genuine variety rather than the illusion of choice. The sleep quality at Six Senses is famously good, and the Douro setting enhances it: the valley is quiet after dark, the air is cool without being cold, and the blackout curtains work properly.`,
      `Bathrooms are generous and thoughtfully designed, with rain showers, deep soaking tubs positioned near windows for valley views while bathing, and Six Senses's own product line. The toiletries are free from the usual hotel chemicals, reflecting the brand's commitment to sustainability that extends from ingredient sourcing to packaging. Small details accumulate: a carafe of filtered water refilled daily, local fruit delivered to the room each afternoon, yoga mats stored in the closet for private practice on the terrace. These are not luxury gestures in the traditional sense; they are expressions of a philosophy that defines luxury as things that genuinely improve how you feel, rather than things that cost a lot and look impressive in photographs.`
    ]),
    review_service: section([
      `Service at Six Senses Douro Valley hits a register that is specifically Portuguese—warm, unhurried, genuine—amplified by the Six Senses training that teaches staff to treat guests as whole people rather than room numbers. The team is young, largely local, and visibly proud of both the hotel and the region. They speak about the Douro with the fluency of people who grew up watching the terraces change colour through the seasons, and this local knowledge transforms standard hotel interactions into something more like conversation.`,
      `The wine team deserves particular attention. The resident sommelier is not merely someone who can tell you about the wine list; they are a guide to a region whose viticultural history spans millennia. They can arrange visits to quintas (wine estates) that range from monumental operations producing thousands of cases to family properties where three generations still tread grapes by foot in granite lagares. These experiences are tailored to your knowledge level—there is no condescension for beginners and no simplification for experts. The wine dinners, held periodically with visiting winemakers, offer access to producers who rarely present their wines outside the valley.`,
      `The spa staff bring Six Senses's global wellness expertise to a setting that naturally supports it. Consultations are thorough, treatments are skilled, and the follow-up is genuine—therapists remember what they worked on and check in during subsequent visits. The wellness programming extends beyond the spa: yoga instructors adjust classes to the group's level, the Alchemy Bar teaches guests to make their own products from local ingredients, and the sleep programme addresses issues with the seriousness they deserve. What ties the service together is coherence. Every staff member, from the sommelier to the housekeeper, seems to understand and share the resort's values. This alignment creates an atmosphere where wellness and indulgence coexist naturally, where a morning meditation and an afternoon port tasting feel like complementary rather than contradictory activities.`
    ]),
    review_food: section([
      `Food at Six Senses Douro Valley is rooted in Portuguese tradition and the resort's own organic garden, and this combination produces some of the most honest hotel cooking in Europe. The main restaurant, the Vale de Abraão, serves a menu that changes with the seasons and draws heavily on regional ingredients: Trás-os-Montes chestnuts, Douro olive oil, Bairrada suckling pig, bacalhau prepared in ways that demonstrate why the Portuguese have 365 recipes for salt cod and consider each one essential. The cooking is technically accomplished but never pretentious, preferring to let the ingredients speak rather than drowning them in technique.`,
      `The wine pairings are where the dining experience becomes transcendent. The Douro produces some of Portugal's finest table wines alongside the port for which it is historically famous, and the sommelier team matches these wines to each course with precision that reveals dimensions in both the food and the drink. A simple dish of grilled sardines becomes something entirely different when accompanied by a young white from a vineyard you can see from your table. This connection between plate, glass, and landscape is the Douro's unique contribution to the dining experience, and Six Senses exploits it beautifully.`,
      `Breakfast is exceptional and reflects the Six Senses wellness philosophy without sacrificing pleasure. The buffet includes local honey from the resort's own hives, fresh bread from the wood-fired oven, fruit from the garden, and eggs from the property's chickens. For something more substantial, the kitchen produces a traditional Portuguese breakfast that includes presunto (cured ham), local cheese, and thick slabs of bread grilled over charcoal. The terrace seating, with views across the valley as morning mist lifts from the river, transforms breakfast from a meal into a meditation. The lighter options—smoothie bowls, overnight oats, fresh juices—are genuinely good rather than being the dutiful wellness options that many hotels offer as penance for their richer alternatives.`
    ]),
    review_details: section([
      `The spa at Six Senses Douro Valley is the resort's operational centre and one of the finest hotel spas in southern Europe. The facility is built into the hillside below the manor house, with treatment rooms that look out onto the valley through floor-to-ceiling windows. The thermal area includes an indoor pool, hammam, sauna, and a series of experience showers that move from tropical downpour to Nordic mist. The Alchemy Bar, where guests can blend their own oils, scrubs, and tonics using local ingredients, provides the kind of interactive wellness experience that feels engaging rather than gimmicky. The treatment menu spans massage, facials, Ayurveda, and traditional Chinese medicine, with practitioners who bring genuine expertise rather than resort-level competence.`,
      `The outdoor pool is the resort's visual centrepiece. An infinity-edge design, it appears to merge with the valley below, and swimming to its far edge gives you the sensation of floating above the Douro. The surrounding deck is well-furnished with loungers and parasols, and the pool bar serves food and drinks of adequate quality. For a more vigorous experience, the resort organises hiking along the valley's old trails, cycling through the vine terraces, kayaking on the Douro, and seasonal grape-picking experiences during harvest. The landscape is essentially a gymnasium, and the staff understand how to use it.`,
      `Practical considerations: the resort is remote, which is both its advantage and its limitation. You will need a car or the hotel's transfer service to reach Porto, other towns, or quintas beyond walking distance. The hotel can arrange a driver for wine-tasting excursions, which is the wise choice given the amount of tasting involved. Wi-Fi is reliable throughout the property, though the signal weakens in the gardens and vineyard, which you might consider a feature. The nearest town, Lamego, offers a beautiful baroque staircase and not much else in terms of entertainment, so this is a resort where you commit to the property and the valley rather than using the hotel as a base for broader exploration.`
    ]),
    review_verdict: section([
      `Six Senses Douro Valley achieves something rare: it places a genuinely excellent wellness resort in a genuinely excellent wine region without either identity compromising the other. This is a hotel where you can start the day with sunrise yoga on a terrace overlooking vine terraces, spend the afternoon tasting vintage port at a family quinta, and finish with a sound-healing session in the spa—and none of these activities feel forced or contradictory. The Douro Valley provides a landscape so beautiful that both indulgence and restraint feel equally appropriate, and Six Senses has built a resort that understands this.`,
      `The hotel works for couples who want a romantic escape with substance, for wine enthusiasts who want to immerse themselves in one of Europe's most important regions, and for wellness seekers who want their spa experience delivered in a setting of real natural beauty. It works less well for families with young children (though they are accommodated), for travellers who want urban proximity, or for those who prefer their luxury with more polish and less earthiness. The Six Senses aesthetic—natural materials, sustainability focus, wellness orientation—is not for everyone, and the hotel does not pretend otherwise.`,
      `The Douro Valley itself is Portugal's great hidden asset, a UNESCO landscape that receives a fraction of the attention lavished on the Algarve or Lisbon. Visiting now, before the river cruise industry fully discovers it, is wise. Six Senses has understood this landscape better than any other hotel operator in the valley, and the result is a property that feels not just located in the Douro but genuinely of it. The vine terraces that rise from the river, the manor house that has watched them for two centuries, the wine that they produce, and the meals that accompany it—all are woven into a stay that leaves you understanding a place rather than merely having visited it. That is the highest compliment a hotel can earn.`
    ])
  }
];

// ============================================================================
// DATABASE OPERATIONS
// ============================================================================

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

const insertHotelQuery = `INSERT INTO hotels (${hotelColumns.join(`, `)}) VALUES (${hotelColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting Mar 30 seed...`);
  console.log(`Hotels to insert: ${hotels.length}`);

  for (const hotel of hotels) {
    const result = await pool.query(insertHotelQuery, [
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
    console.log(`Inserted hotel: ${hotel.name} (rows: ${result.rowCount})`);
  }

  console.log(`Mar 30 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
