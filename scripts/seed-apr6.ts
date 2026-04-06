import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// APR 6 — ROYAL MANSOUR MARRAKECH + LA MAMOUNIA
// Week 5: Morocco + Africa
// ============================================================================

const hotels = [
  {
    name: `Royal Mansour Marrakech`,
    slug: `royal-mansour-marrakech`,
    brand: `Royal Mansour`,
    brand_slug: `royal-mansour`,
    location: `Marrakech, Morocco`,
    country: `Morocco`,
    country_slug: `morocco`,
    region: `Africa`,
    region_slug: `africa`,
    latitude: 31.6258,
    longitude: -7.9981,
    price_range: `$$$$`,
    price_from: 1400,
    price_to: 6500,
    currency: `EUR`,
    style: `Palatial Moroccan`,
    best_for: [`Privacy`, `Design`, `Spa`],
    hero_image: `https://images.unsplash.com/photo-1548013146-72479768bada?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1518544866330-4e48f456a2f5?w=1200`,
      `https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200`
    ],
    website: `https://www.royalmansour.com/en/marrakech/`,
    booking_url: `https://www.royalmansour.com/en/marrakech/booking/`,
    tagline: `Marrakech at its most disciplined and extravagant — a medina built for absolute privacy.`,
    verdict_best_for: `Travelers who want the craft, scent, and drama of Marrakech without surrendering privacy for a second.`,
    verdict_skip_if: `You prefer a looser, more social hotel atmosphere or want something less formal and less composed.`,
    verdict_standout: `The private riads — not suites, but full vertical houses — which make most luxury rooms feel timid.`,
    rating_overall: 9.6,
    rating_room: 9.8,
    rating_service: 9.6,
    rating_food: 9.2,
    rating_value: 8.4,
    rating_location: 9.4,
    featured: 1,
    review_intro: section([
      `Royal Mansour is one of those hotels that makes the word hotel feel slightly inadequate. Commissioned by King Mohammed VI and built by hundreds of Moroccan artisans over years rather than months, it is less a property than a proposition: what if Marrakech's visual language — zellige tile, carved cedar, bronze lanterns, tadelakt plaster, the rustle of palms behind walls — were executed without compromise, with state resources and monastic patience? The result is spectacular, though spectacular in a very particular way. This is not a loud palace with marble atriums and a chandelier the size of a moon. It is a walled city of private riads, hidden courtyards, and geometric beauty that reveals itself slowly, the way the old medina does, except here everything has been polished to an almost impossible finish.`,
      `What separates Royal Mansour from lesser luxury in Marrakech is discipline. Many hotels in the city lean so hard on romance that they become costume drama: too many lanterns, too much rosewater, too much decorative longing for a Morocco they half-invented for foreign guests. Royal Mansour does not need to exaggerate. The craftsmanship is real. The stucco work is so fine it looks embroidered. Cedar ceilings are hand-painted rather than machine-printed to look hand-painted. Even the silence feels expensive. The hotel sits just outside the medina walls, close enough that the city remains audible in the distance — motorbikes, the faint call to prayer, the evening pulse of Marrakech — but contained behind gates and gardens so carefully controlled that the noise never gets the last word.`,
      `The best way to understand Royal Mansour is as a privacy machine disguised as a fantasy. Guests do not stay in rooms but in three-storey riads, each with its own roof terrace and plunge pool. Staff move through an underground tunnel network so that service seems to materialize rather than arrive. Public spaces are glorious, but the hotel is designed around withdrawal rather than display. If La Mamounia is Marrakech performing for the room, Royal Mansour is Marrakech distilled, lowered to a whisper, then delivered with perfect posture.`
    ]),
    review_arrival: section([
      `Arrival at Royal Mansour is choreographed with the confidence of somewhere that knows it has no peers in the city. You turn off the traffic near the medina and pass through gates into a world of clipped hedges, olive trees, and pale stone where every line feels measured. The entrance sequence is not theatrical in the obvious sense — no fanfare, no crowding of staff — but it is deeply composed. Doors open at exactly the right moment. Luggage disappears without fuss. Mint tea is served at a pace that suggests nobody here has ever rushed for anything in their lives. The lobby, if it can even be called that, is a mosaic of salons and courtyards rather than one grand statement room, and that matters. Royal Mansour does not announce itself in a single gesture. It seduces by accumulation.`,
      `Check-in happens seated, quietly, usually with a tray of dates and a briefing that feels more like orientation to a private residence than registration at a hotel. Staff explain the layout with the understanding that it is slightly disorienting at first: paths through gardens, hidden lounges, restaurants tucked behind carved doors, the spa at the far side like a separate kingdom. Then comes the first of many small reveals. A staff member leads you down a path lined with orange trees and through an unassuming door into your riad. Suddenly the scale changes. What looked from outside like a compact cluster of terracotta volumes turns out to be an entire house — entry salon, staircase, bedroom above, roof terrace on top — and the genius of the concept lands all at once.`,
      `Few hotels transition you from city noise to privacy as effectively as Royal Mansour. The medina may be a few minutes away, but by the time the riad door closes behind you, Marrakech feels abstracted into scent and memory: orange blossom, hot dust, the metallic sweetness of mint. It is an arrival that does something rare in luxury hospitality. It lowers your pulse without becoming bland. You feel calmer, yes, but also slightly alert, because the beauty around you is too intricate to ignore.`
    ]),
    review_room: section([
      `Calling the accommodations rooms would be absurd. At Royal Mansour you stay in riads, and that distinction is structural rather than semantic. Even the entry categories unfold across three floors: a sitting room below, bedroom and bathroom in the middle, and a roof terrace above with loungers and usually a plunge pool. The architecture changes the psychology of the stay. Instead of occupying a hotel room temporarily, you inhabit a vertical private house. You climb your own staircase, close your own carved cedar door, and disappear. In a city where intimacy is often performed through dim lighting and decorative screens, Royal Mansour achieves it through actual separation. It is deeply persuasive.`,
      `The design is as rich as anything in Morocco, but crucially it never tips into clutter. Walls shimmer with hand-cut tile. Plaster cornices have the delicacy of lace. The carved wood is dense with pattern but so precisely executed that it reads as rhythm rather than noise. Bedrooms are quiet, almost monastic in their calm compared with the lower salons. Beds are excellent — tall, cloud-soft without being vague, dressed in crisp linens and generously sized pillows. Heavy curtains block light effectively, though part of the pleasure is waking early and letting the Marrakech sun leak through latticework onto the floor. Bathrooms are a study in polished sensuality: tadelakt surfaces, deep soaking tubs, mirrors framed in metalwork, and enough space that two people can get ready without negotiating territory.`,
      `Technology is present but tactful. Climate control works flawlessly, a non-negotiable in Marrakech heat. Wi-Fi is strong. Lighting scenes are intuitive rather than over-programmed. But none of this competes with the architecture. The real luxury is the way the riad holds temperature, shadow, and sound. Stand on the roof at dusk and you hear birds, the soft movement of leaves, and the city beyond the walls. Sit downstairs in the salon with the doors open and you feel a moving ribbon of cooler air passing through the courtyard. Most hotels give you a beautiful room. Royal Mansour gives you a miniature domestic world, and once you have had that, conventional suites feel oddly flat.`
    ]),
    review_service: section([
      `Service at Royal Mansour operates according to one governing principle: invisibility with precision. The underground staff tunnels are not a gimmick; they are the architectural expression of the hotel's philosophy. Meals appear without a housekeeping cart blocking the corridor. Bags vanish. Rooms are refreshed while you are at breakfast, and somehow not a minute too early or too late. The effect can feel almost supernatural at first, but beneath it is rigorous coordination. Staff do not fuss or flutter. They read the guest, then calibrate. If you want warmth and conversation, they have it. If you want silence and efficiency, they withdraw instantly. This emotional agility is one of the hotel's strongest achievements.`,
      `There is also something pleasingly unpretentious about how competent everyone is. Concierges can secure the obvious things — restaurant bookings, shopping guides, airport transfers — but the real value lies in the finer judgment calls. Which galleries are worth a morning. Which souk route avoids the worst of the tourist churn. Which hammam elsewhere in the city is genuinely local rather than an 'authentic' performance sold to foreigners. Restaurant staff know when to linger and when to leave. Housekeeping notices the book you have left open and returns it to the same page rather than snapping it shut for tidiness. Small gestures, yes, but luxury is mostly a pile of small gestures executed consistently.`,
      `If there is a criticism, it is that Royal Mansour can sometimes feel almost too perfect. The polish is so extreme that spontaneity has little room to breathe. You are never badly served, but you are also rarely surprised by a flash of eccentric human warmth in the way you might be at an older hotel with more personality in the seams. Some guests will prefer that immaculate control. Others may find themselves admiring the service more than loving it. Still, in operational terms, this is one of the best-run hotels in the world, and admiration is not a small thing.`
    ]),
    review_food: section([
      `Food at Royal Mansour is serious without becoming solemn. The headline names matter less than the overall standard, which is consistently high across breakfast, poolside lunches, formal dinners, and room service taken on a roof terrace while the evening call to prayer moves over the city. La Grande Table Marocaine is the anchor and remains the clearest expression of the hotel: deeply Moroccan, ornate in presentation, but grounded in real flavor. Tagines arrive glossy and concentrated rather than muddy. Pastilla has the proper contrast between brittle sweetness and savory depth. Mechoui lamb is so tender it seems to give up before the knife arrives. The room itself, all lantern light and carved detail, could have been oppressive in less confident hands, but here it feels stately rather than overdone.`,
      `Breakfast is one of the great pleasures of staying here. Served in a garden setting where light filters through leaves and birds provide a soundtrack more convincing than any curated playlist, it manages to be both generous and elegant. Moroccan msemen, local honey, ripe fruit, fresh orange juice, eggs however you like them, and pastries that are actually worth your time. The bread basket deserves special praise: warm, varied, and with the kind of crust that proves someone in the kitchen cares. Lunches by the pool or in the gardens lean lighter — grilled fish, salads heavy with herbs, excellent vegetable dishes, and juices that taste as though they were pressed a minute earlier because they probably were.`,
      `What Royal Mansour does particularly well is pacing. Meals do not drag, but neither do they arrive with urban impatience. Wine service is thoughtful, with a list that does not ignore Morocco's improving domestic bottles. Room service, often an afterthought at luxury properties, is predictably polished and comforting here. The only slight limitation is that dining, like the hotel more broadly, favors refinement over risk. You are unlikely to eat anything radically inventive. But then Royal Mansour is not trying to be Copenhagen in a kaftan. It is trying to do elegance, generosity, and craftsmanship at the highest level, and on those terms it succeeds.`
    ]),
    review_details: section([
      `The details are where Royal Mansour becomes almost absurdly impressive. Start with the gardens, which act as emotional infrastructure as much as landscaping. Paths curve between palms, roses, and citrus trees in a way that makes even a short walk to breakfast feel restorative. Fountains are tuned to be audible but not dominant. The main pool is long, photogenic, and calm, though the private roof terraces of the riads mean many guests treat it more as backdrop than destination. The spa is a separate monument altogether — an immense white latticework structure filled with filtered light, columns, hammams, treatment rooms, and one of the most beautiful indoor pools in the city. Plenty of hotels have good spas. Very few have spa spaces that alter your sense of proportion when you enter them.`,
      `Then there is the craftsmanship. Everywhere you look, something has been made by hand and made properly. Bronze doors feel weighty. Cedar screens cast patterned shadows that move with the afternoon sun. The zellige is not merely decorative but alive with tiny imperfections that remind you how much labor sits beneath the hotel's polish. This matters because it gives the property moral texture. Royal Mansour is extravagant, certainly, but not in the hollow international-luxury sense of imported marble and interchangeable furniture. Its extravagance is rooted in Moroccan craft traditions, and that makes the experience richer than simple opulence.`,
      `Practical details are equally well handled. The location is ideal if you want access to the medina without sleeping inside its intensity. The gym is excellent. Transfers are seamless. Security is discreet but serious. Families can stay here, but the atmosphere belongs more naturally to couples and solo travelers who want seclusion. Above all, the hotel understands the power of thresholds — gates, doors, curtains, staircases, courtyards — and uses them to create rhythm throughout the day. You move not just through space but through degrees of intimacy, and that architectural intelligence lingers in memory long after you leave.`
    ]),
    review_verdict: section([
      `Royal Mansour is, in my view, the most impressive hotel in Marrakech and one of the most accomplished luxury properties anywhere. Not the most charming, not necessarily the most fun, but the most complete. It takes the visual and sensory language of Morocco and executes it with a level of seriousness, craft, and financial muscle that no competitor can quite match. The private riad concept alone changes the standard by which privacy is judged. Add the spa, the gardens, the operational precision, and the sheer density of beautiful things made by skilled human hands, and the case becomes overwhelming.`,
      `The price is formidable, and this is not a hotel that hides from that fact. You are paying for an experience that very few places on earth can offer, and whether that feels justified depends on what you value. If you want sociability, looseness, and old-world glamour, La Mamounia may seduce you more. If you want intimacy, control, and a kind of aesthetic perfectionism that borders on obsession, Royal Mansour is the right answer. I would recommend it especially for first-time Marrakech visitors who want to experience the city's beauty but know they will also need refuge from its intensity. The hotel does that balancing act better than anyone.`,
      `What stays with you is not one single grand moment but the cumulative effect of coherence. The carved ceiling over the staircase. The hush of the spa. Breakfast under the trees. The feeling of climbing to your roof as the city darkens and hearing the call to prayer spread beyond the walls. Royal Mansour is expensive, yes, and at times almost unnervingly immaculate. But it is also one of the rare modern luxury hotels with a fully formed point of view. That alone is worth respect. In this case, it is also worth the stay.`
    ])
  },
  {
    name: `La Mamounia`,
    slug: `la-mamounia`,
    brand: `La Mamounia`,
    brand_slug: `la-mamounia`,
    location: `Marrakech, Morocco`,
    country: `Morocco`,
    country_slug: `morocco`,
    region: `Africa`,
    region_slug: `africa`,
    latitude: 31.6217,
    longitude: -8.0008,
    price_range: `$$$$`,
    price_from: 950,
    price_to: 4200,
    currency: `EUR`,
    style: `Grand Hotel Moroccan`,
    best_for: [`Atmosphere`, `History`, `Gardens`],
    hero_image: `https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200`,
      `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200`
    ],
    website: `https://www.mamounia.com/`,
    booking_url: `https://www.mamounia.com/en/book/`,
    tagline: `Marrakech in full lipstick and silk — glamorous, fragrant, and gloriously unapologetic.`,
    verdict_best_for: `Travelers who want to feel the pulse of old-school luxury and don't mind a little theater with their mint tea.`,
    verdict_skip_if: `You want strict privacy, contemporary restraint, or a hotel that disappears quietly into the background.`,
    verdict_standout: `The gardens and public spaces, which make almost every arrival feel like the start of a very expensive film.`,
    rating_overall: 9.3,
    rating_room: 9.0,
    rating_service: 9.1,
    rating_food: 9.1,
    rating_value: 8.6,
    rating_location: 9.6,
    featured: 1,
    review_intro: section([
      `La Mamounia is not subtle, which is precisely why so many people love it. Where Royal Mansour whispers, La Mamounia sweeps into the room trailing amber, cigarette smoke from another century, and the memory of every famous guest who has ever behaved badly in a beautiful place. This is one of the grand hotels that still believes in glamour as a living art form. Opened in 1923 on grounds that once belonged to a royal orchard, it has hosted everyone from Churchill to fashion editors to couples who want their holiday to feel like a myth they can wear. In a city already full of visual seduction, La Mamounia somehow manages to turn the dial higher without losing control.`,
      `Part of its magic is that it understands Marrakech as performance and as refuge at the same time. The city beyond the gates is noisy, layered, impatient, fragrant, and occasionally exhausting. La Mamounia responds not by muting that energy but by translating it into a more luxurious register. The colors deepen. The lantern light becomes flattering rather than chaotic. The gardens smell of orange blossom and clipped rosemary rather than hot traffic and street grills. Jacques Garcia's famously decadent interiors remain the subject of argument, which is usually a sign that they matter. Yes, some rooms of the hotel border on operatic. Yes, there are moments when the red lacquer, black marble, and endless glints of gold feel almost too pleased with themselves. That is part of the point. La Mamounia is a hotel with vanity, and vanity suits it.`,
      `What saves the property from sliding into parody is its age and confidence. Beneath the styling is a real institution, a place with habits, rituals, and a rhythm established over decades. The gardens are not decorative filler but one of the great hotel landscapes in the world. The bars remain lively because people genuinely want to be in them, not because PR teams have instructed them to. The hotel knows it is famous, but it also knows fame only matters if the martini is cold, the bed is comfortable, and breakfast under the palms makes you forgive the previous night's excess.`
    ]),
    review_arrival: section([
      `Arrival at La Mamounia is one of the best scenes in Marrakech, perhaps because it understands exactly what scene it is staging. You approach through the famous gardens, past palms, cactus, and rose beds, and the city begins to dissolve before you have even reached the porte-cochère. Staff in immaculate uniforms open doors with practiced warmth, luggage is swept away, and within moments you are standing in an entrance hall that looks as though it was designed by someone who believed no surface should go undecorated if decoration could make a guest feel more alive. There is polished stone underfoot, carved plaster overhead, lantern light thrown across dark walls, and a kind of perfumed dimness that makes everyone look improved.`,
      `Check-in can be busy at peak moments — this is a famous hotel and behaves like one — but the team handles the flow with more grace than chaos. Mint tea appears quickly, and there is usually enough seating in the surrounding salons that waiting, if it happens, feels more atmospheric than irritating. The best part of the arrival sequence is the walk to your room, because it forces the hotel to reveal its layers. You pass boutiques, courtyards, tiled corridors, alcoves full of flowers, and glimpses of the gardens outside. Unlike the controlled privacy of Royal Mansour, La Mamounia wants you to notice the spectacle. It wants you to feel you've entered somewhere storied and a little decadent.`,
      `The first minutes here are especially persuasive if you arrive in late afternoon. The light turns honeyed, the gardens glow, and the interior lamps begin to pull the spaces inward. By the time the door to your room opens, the city has been transformed from something to navigate into something to watch from a velvet chair. Few hotels stage the emotional transition from travel fatigue to excitement this well. It is one reason guests forgive the occasional operational wobble. The opening act is just too good.`
    ]),
    review_room: section([
      `Rooms at La Mamounia do not always have the architectural bravura of its public spaces, but they possess something just as important: a sense of place. Many luxury hotels now offer rooms that could be in Doha, Miami, or Singapore if you swapped the art and minibar snacks. La Mamounia's rooms could only be here. Even after renovations, they retain the Jacques Garcia vocabulary of lacquered surfaces, rich fabrics, dark woods, and carefully staged pools of light. Some guests find them seductive; others find them a little theatrical after midnight. I fall in the first camp, mostly because the hotel never pretends neutrality is more virtuous than style.`,
      `The best rooms and suites look onto the gardens or the Koutoubia, and those views matter. Open the shutters in the morning and suddenly the whole room makes sense — the warm palette, the filtered light, the inward softness designed to contrast with the white blaze outside. Beds are excellent, with plush but supportive mattresses and linens that manage the trick of feeling crisp and inviting at once. Storage is decent, though not especially inventive. Bathrooms vary by category, but the stronger ones pair black-and-white marble with generous tubs, separate showers, and enough space to spread out your toiletries without colonizing the sink. Amenities are luxurious, and housekeeping keeps everything immaculate.`,
      `The main limitation is that not every room feels equally current. Some categories are more persuasive than others, and La Mamounia is a hotel where room selection matters more than it should at this price point. The riads and signature suites are predictably superb, but even among standard rooms there is variation in brightness, views, and overall freshness. It is worth paying for a garden-facing room if budget permits. Still, even the less remarkable accommodations are cushioned by the fact that this is not a hotel you visit to hide in your room. You sleep well here, certainly, but La Mamounia's greatest seductions happen outside the door.`
    ]),
    review_service: section([
      `Service at La Mamounia is warmer and more characterful than at many highly polished luxury hotels, but it is also less perfectly drilled. That trade-off will delight some guests and irritate others. The staff often feel as though they belong to the hotel's social life rather than merely its operating system. Bartenders remember how you like your negroni. Breakfast servers tease gently if you order the same pastry basket every morning. The concierge talks about the city like someone who lives in it rather than someone reciting from an approved sales script. This human texture is part of the hotel's charm. The place feels inhabited rather than managed into lifeless perfection.`,
      `At the same time, La Mamounia can occasionally fumble the details. A bag may take longer than expected. A poolside order can require a reminder. Restaurant pacing sometimes drifts from languid to simply slow. None of this usually reaches the level of serious complaint, but it does mean the hotel must be understood on its own terms. If Royal Mansour is a finely engineered watch, La Mamounia is a vintage Cartier lighter — gorgeous, full of personality, and occasionally in need of a second flick. I say that with affection, because in the best grand hotels a little imperfection can make the experience feel more human rather than less luxurious.`,
      `What the staff do exceptionally well is atmosphere management. They know when to amplify the glamour and when to create calm. In the bars, service has just enough swagger. In the gardens at breakfast, it softens. In the spa, it slows to a hush. This adaptability matters because La Mamounia contains several different hotels within one property: a social grand hotel, a romantic hideaway, a wellness retreat, a fashionable stage set. Service here is not flawless, but it is emotionally intelligent, and that counts for a great deal.`
    ]),
    review_food: section([
      `La Mamounia has long understood that a grand hotel lives or dies partly by what happens after sunset, and its food and drink program is one of the reasons it remains central to Marrakech rather than merely historic. The restaurants cover enough ground to keep a multi-night stay interesting: excellent Moroccan food, strong Italian, and French-inflected dining that leans more to indulgence than novelty. But the culinary heart remains Moroccan. Here the city's flavors are polished rather than sanitized. Tagines are deep and aromatic, not dulled for foreign palates. Salads come bright with herbs and citrus. Couscous has actual texture rather than banquet mush. The kitchen respects generosity, which is exactly right for Marrakech.`,
      `Breakfast in the gardens is the meal that seals the deal for many guests. It is one of those hotel breakfasts that makes you suspicious of your life back home. Orange juice tastes as though the fruit was still on the tree an hour earlier. The msemen are hot and flaky. Jars of honey, amlou, jams, and olive oil line the table like edible souvenirs. Egg dishes are reliable, coffee is better than it used to be, and there is enough local character in the spread that breakfast feels anchored to place rather than built from international five-star templates. If you can, linger. La Mamounia rewards the slow breakfast more than almost anywhere in Europe or North Africa.`,
      `The bars are arguably as important as the restaurants. Churchill's bar, with its low light and old-school confidence, remains one of the best places in Marrakech for a proper drink. This matters because luxury is not just what you eat but where you want the evening to go afterward. La Mamounia still knows how to host the hour after dinner — cocktails, piano, conversations that improve as the room darkens. Room service is also better than grand-hotel room service has any right to be, especially if what you want is late-night comfort with a silver-domed lid and zero effort. The only thing missing is radical experimentation, but La Mamounia's cuisine is not about provocation. It is about pleasure, and it is very good at that.`
    ]),
    review_details: section([
      `The gardens are the soul of La Mamounia. Seven hectares of palms, roses, olive trees, cactus, and paths that seem designed for aimless drifting, they are among the few hotel landscapes in the world that could justify staying even if the building itself were ordinary. Fortunately, the building is far from ordinary. Morning walks here are restorative in a way few urban hotels can match. The smell shifts through the day — damp earth at breakfast, citrus and heat by noon, jasmine and dust after sunset — and those shifts become part of the memory of the stay. The pool, set amid all this greenery, feels less like a resort amenity than a glamorous pause button.`,
      `The spa is also impressive, though in a different register from Royal Mansour's almost sacred whiteness. La Mamounia's spa is moodier, more sensuous, all steam, shadow, and polished surfaces. The hammam treatments are excellent and should be considered mandatory for first-time guests. There is a seriousness to wellness here, but not the faintly moral tone some luxury spas adopt. The message is simpler: you are in Marrakech, you are tired, and heat, water, black soap, and vigorous exfoliation will return you to yourself. Hard to argue with that. The gym is solid, and the boutique arcade manages to be tempting without feeling like an airport concourse in silk slippers.`,
      `Location is another strength. The hotel sits just outside the medina with immediate access to the souks, the Koutoubia, and the newer parts of the city, which makes it ideal for guests who want to move between intensity and retreat several times a day. Security is discreet. The people-watching is first-rate. And there are countless atmospheric corners — tiled benches, shadowed salons, terraces for smoking or reading — that give the property depth beyond its headline glamour. La Mamounia works because it understands that a great hotel is not only a sequence of services but a sequence of moods.`
    ]),
    review_verdict: section([
      `La Mamounia remains one of the great grand hotels of the world not because it is the most efficient or the most private, but because it understands pleasure better than most of its rivals. It knows the value of a dramatic entrance, a fragrant garden, a low-lit bar, a breakfast that turns into an event, and interiors that are willing to flirt. In a global luxury scene increasingly obsessed with minimalism and wellness neutrality, La Mamounia still believes that hotels should be seductive. I think that is a strength, not a flaw.`,
      `It is not perfect. Some rooms feel more persuasive than others. Service, while warm and often excellent, is not always metronomic. Guests seeking invisibility and total seclusion may find the social energy too noticeable. But to judge La Mamounia by the criteria of a private retreat would be to miss what makes it extraordinary. This is a social palace, a stage set with real roots, and it performs that role beautifully. Choose it if you want to feel Marrakech rather than simply observe it from a safe remove. Choose Royal Mansour if you want to control the city by deciding exactly when and how it reaches you.`,
      `Would I return? Absolutely. Not every trip, not for every mood, but whenever I wanted old-school glamour and the sense that travel should occasionally be excessive in the right ways. La Mamounia is one of those increasingly rare hotels with a pulse you can feel in the public rooms. It still has style, memory, and enough confidence to resist the beige smoothing-out of international luxury. In 2026 that feels almost rebellious. Long may it continue.`
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
  console.log(`Starting Apr 6 seed — Royal Mansour Marrakech + La Mamounia...`);

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
    console.log(`✅ Inserted hotel: ${hotel.name}`);
  }

  console.log(`\nApr 6 seed complete! 2 hotels published.`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
