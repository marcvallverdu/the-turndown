import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// APR 13 — EDEN ROCK ST BARTHS + CHEVAL BLANC ST-BARTH
// Week 6: Caribbean + Islands
// ============================================================================

const hotels = [
  {
    name: `Eden Rock St Barths`,
    slug: `eden-rock-st-barths`,
    brand: `Belmond`,
    brand_slug: `belmond`,
    location: `St Jean, Saint Barthélemy`,
    country: `Saint Barthélemy`,
    country_slug: `saint-barthelemy`,
    region: `Caribbean`,
    region_slug: `caribbean`,
    latitude: 17.9021,
    longitude: -62.8337,
    price_range: `$$$$`,
    price_from: 1800,
    price_to: 9000,
    currency: `USD`,
    style: `Playful Riviera Glamour`,
    best_for: [`Beach Scene`, `Couples`, `Long Lunches`],
    hero_image: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200`,
      `https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200`
    ],
    website: `https://www.edenrockhotel.com/`,
    booking_url: `https://www.edenrockhotel.com/`,
    tagline: `The island's social heartbeat, with salt on its skin and zero interest in being shy.`,
    verdict_best_for: `Travelers who want St Barths at full volume, with a glamorous beach club, strong people-watching, and a hotel that actually feels alive.`,
    verdict_skip_if: `You want total seclusion, monk-like calm, or a property that fades politely into the background.`,
    verdict_standout: `The blufftop position above St Jean Bay, which gives the whole place a theatrical front-row view of the island's prettiest stretch of water.`,
    rating_overall: 9.3,
    rating_room: 9.1,
    rating_service: 9.2,
    rating_food: 9.3,
    rating_value: 8.1,
    rating_location: 9.8,
    featured: 1,
    review_intro: section([
      `Eden Rock is the St Barths hotel people imagine when they say they are going to St Barths. It is tanned, expensively casual, a little vain, and much more fun than it needs to be. The property sits on a rocky promontory at the edge of St Jean Bay, with rooms and suites scattered across the bluff, the beach, and the hillside behind. That geography matters because it gives the hotel drama from every angle. One moment you are looking straight down at translucent water folding over white sand, the next you are watching tiny planes skim over the hill and drop onto the island's famously short runway. Instead of ruining the mood, that flash of aviation theater somehow improves it. Eden Rock has always understood that glamour works best when it has a little motion in it.`,
      `What makes the place persuasive is that it does not try to flatten St Barths into generic luxury. Plenty of tropical resorts offer peace, symmetry, and anonymous suites in flattering neutrals. Eden Rock offers personality. The design is bright, slightly eccentric, full of color and art, and comfortable with the idea that luxury can be witty rather than solemn. You feel the legacy of old Caribbean society mixed with French polish and modern money, but the atmosphere avoids stiffness. The crowd is attractive, yes, but not in the sterile way of hotels where everyone looks as though they were hired for the afternoon. There are families with very good sunglasses, couples clearly on celebratory trips, and regulars who move through the place like they own a corner of the wind.`,
      `At its best, Eden Rock feels less like a resort and more like the island's best-addressed beach house, one with serious service and a kitchen that understands lunch matters. It is not the calmest stay on St Barths, nor the most private, nor the most spiritually cleansing. Good. St Barths is not really about spiritual cleansing. It is about sun, appetite, flirtation, and the pleasure of doing ordinary holiday things in a setting that sharpens all of them. Eden Rock gets that instinctively, which is why it remains the benchmark here.`
    ]),
    review_arrival: section([
      `Arrival at Eden Rock starts before the car stops. The drive from the airport is almost comically short, and then suddenly the bay opens up and the hotel appears on its bluff like a well-dressed spectator watching the beach below. Staff are waiting, but the welcome avoids the syrupy choreography that can make tropical arrivals feel packaged. You are greeted with ease rather than performance, luggage disappears efficiently, and within minutes you are standing in a reception area that lets the view do most of the talking. The hotel understands that first impressions in St Barths are a mix of heat, relief, and visual greed. It gets you into the picture quickly.`,
      `Check-in is smooth and human. There is useful island information instead of a long speech, and the staff tend to speak like people who know that no guest wants a lecture while wearing airport clothes in humid air. A cold towel, a drink, a quick explanation of where breakfast happens, how the beach setup works, which room path to take, and you are off. This briskness is a virtue. The island runs on a kind of stylish informality, and hotels that cling too tightly to old ritual feel slightly out of tune. Eden Rock reads the room correctly. The whole process has the confidence of a place that knows most guests came here to get into holiday mode fast, not admire administrative theater.`,
      `The walk to your room is part of the seduction. Paths twist along the rock, staircases reveal sudden slices of ocean, and the sound shifts constantly between surf, music, and the chatter from beach tables below. Even if your room is one of the hillside categories rather than the most dramatic blufftop suite, the layout keeps the sea visually present. You are never allowed to forget where you are. By the time the room door opens, the island has already started working on your posture. Shoulders drop. Pace slows. You begin making lunch decisions immediately, which is exactly the right sign.`
    ]),
    review_room: section([
      `Rooms and suites at Eden Rock vary more than at hotels built from a single architectural formula, and that variation is part of the appeal. Some are directly above the water with broad terraces and cinematic views across St Jean Bay. Others sit higher on the hill, quieter and more removed from the beach club pulse. The design never chases minimalism. Instead you get cheerful color, smart art choices, whitewashed textures, and enough visual looseness to feel Caribbean without tipping into cliché. The best accommodations are the ones that make the outdoors feel inseparable from the room itself. Doors slide back, air moves through, and the ocean takes over as your main decorative element.`,
      `The beds are properly good, which is more important on an island where long lunches often turn into long evenings. Linens are crisp, mattresses supportive without being hard, and blackout performance is strong enough to permit real sleep after the social energy downstairs. Bathrooms are generous in higher categories, with rainfall showers, deep tubs where applicable, and enough counter space to handle the equipment of serious warm-weather dressing. Amenities feel upscale without smelling like a duty-free experiment. Storage is sensible too, which matters on St Barths because people actually unpack here. The hotel attracts guests staying longer than a quick weekend, and the rooms are designed for that rhythm.`,
      `Where Eden Rock really wins is emotional texture. The rooms do not feel mass-produced or over-designed by someone terrified of offending taste. They feel inhabited, as though a glamorous friend with more money than restraint chose the palette and then hired excellent carpenters. That means not every detail is clinically perfect, but the overall effect is much more seductive than corporate perfection. You open the shutters in the morning and the room immediately belongs to the island. That relationship between interior and setting is what separates memorable beach hotels from merely expensive ones.`
    ]),
    review_service: section([
      `Service at Eden Rock is brisk, polished, and alive to the fact that guests here want things to feel easy, not ceremonial. The team is strong at reading whether you are in a sociable mood or a disappearing one. At breakfast they are warm and unhurried. On the beach they move faster, keeping towels fresh, drinks topped up, and lunch tables turning without making anyone feel hurried off their rosé. Around the rooms and concierge desk, the tone is competent rather than theatrical. This is the right approach. A hotel with this much visual personality would become exhausting if the staff were also performing at full volume all day. Instead they provide balance.`,
      `The concierge is particularly useful because St Barths rewards local judgment. On paper, the island is tiny. In practice, the difference between an average dinner slot and a great one, or between the right beach for the weather and the wrong one, matters a lot. The team knows the island's moods, traffic patterns, lunch scenes, and social geography. They can arrange beach clubs, boats, drivers, and reservations, but the real value is in the advice attached to those bookings. Which lunch drifts best into sunset. Which beach is worth the longer drive on a windy day. Which crowd a certain guest will enjoy and which they will hate. That calibration is where luxury becomes useful.`,
      `There are slicker service cultures in the world, and perhaps more invisible ones, but Eden Rock's style suits the property. You are looked after by people who seem to understand pleasure as an operational category. If a table wants to linger, they let it breathe. If you want your room refreshed while you are at the beach, it happens without fuss. If weather turns and boats are suddenly a bad idea, alternatives appear fast. The staff are not trying to impress you with rituals. They are trying to keep the holiday in motion, and they do that very well.`
    ]),
    review_food: section([
      `Food matters at Eden Rock because lunch matters in St Barths, and lunch here is one of the island's central acts. The Sand Bar is the hotel restaurant and social engine, facing the beach with the sort of glamorous ease other places spend fortunes trying to manufacture. The menu leans French-Caribbean with enough international confidence to keep regulars happy over multiple days. Salads have crunch and brightness rather than spa-diet sadness. Grilled fish arrives properly seasoned and actually tastes of the sea. Lobster pasta is rich in the way a beach holiday occasionally demands. The hotel understands that food near water should feel generous, sunny, and just a little dangerous to your self-restraint.`,
      `Breakfast is very strong, especially if taken slowly enough to watch the bay wake up. Fruit is vivid, viennoiserie is worth the carbs, coffee is taken seriously, and the egg dishes arrive with reassuring competence. There is no sense of the kitchen treating breakfast as a mandatory prelude to the "real" meals later in the day. It has the energy of a place that knows breakfast is often the point where guests decide whether a hotel is serious or just photogenic. Eden Rock passes that test easily. The room service menu is also more useful than average, with enough substance for the mornings when leaving your terrace feels unreasonable.`,
      `Dinner is good, though the hotel is arguably at its most convincing in daylight, when salt, sun, and appetite are all in alignment. Still, cocktails are well judged, wines are chosen with intelligence, and there is a welcome absence of menu gimmickry. The kitchen rarely tries to astonish. Sensibly, it aims to please a very demanding crowd in a place where the competition extends across the whole island. The result is a food program with enough style to satisfy the scene, and enough substance to satisfy people who have eaten very well elsewhere. That combination is harder than it looks.`
    ]),
    review_details: section([
      `The details that make Eden Rock work are all tied to movement and mood. The beach is public, as beaches are in St Barths, but the hotel's setup gives guests a privileged relationship to it: smart loungers, quick service, and the ability to move between room, sand, lunch table, and water with almost no friction. The blufftop element adds another dimension. Instead of a flat beachfront property, you get levels, stairs, terraces, and lookout points, so the whole hotel feels visually active. There is always another angle on the bay, another place from which the island looks as though it has been lit by its own stylist.`,
      `The small spa and wellness offer are competent, but this is not a property built around inwardness. Its true amenities are social and geographic. The airport is a minute away but never truly disruptive. Gustavia, Nikki Beach, shell boutiques, and boat departures are all close enough that the hotel can serve as a perfectly positioned base without losing its own identity. Art throughout the property adds to the sense of eccentric glamour rather than acting as decorative filler. Even practical details like water sports, transfers, and beach support are handled in a way that encourages spontaneity. You can decide to do things quickly here, which is a major luxury.` ,
      `Most importantly, Eden Rock never lets convenience become blandness. Plenty of high-end island hotels are efficient but emotionally flat. This one has a pulse. Music drifts up from the restaurant, sea light flashes off white walls, and the whole place seems built to remind you that elegance can still have some fun. The design, the bluff, the beach scene, the little micro-journeys from terrace to sand, all of it creates the sense of being in the right place on the island, not merely on the island.`
    ]),
    review_verdict: section([
      `Eden Rock is my pick for travelers who want St Barths to feel like St Barths rather than a generic luxury resort with better weather. It is the island in concentrated form: stylish, sun-drunk, expensive, sociable, and never entirely serious about itself. That does mean trade-offs. If you are after deep privacy, meditative silence, or design that fades into beige discretion, other hotels will suit you better. But if you came here for the pleasure of a glamorous beach life done properly, Eden Rock is hard to beat. It has the right amount of vanity, the right amount of appetite, and the right degree of chaos under tight control.`,
      `What keeps it from feeling superficial is that beneath the scene there is real operational competence. The rooms are comfortable, the service understands the island, and the food is far better than it needs to be for a hotel that could probably survive on location and legend alone. That integrity matters. It means the glamour is supported rather than faked. Guests are not just buying access to a famous name on a pretty bluff. They are buying a genuinely well-run stay in one of the Caribbean's most desirable addresses.`,
      `Would I recommend it without hesitation? Yes, for the right traveler, absolutely. Particularly for first-timers to St Barths, couples who want a trip with some energy in it, and regular luxury travelers bored of interchangeable island minimalism. Eden Rock knows exactly what it is. In hospitality, that kind of self-knowledge is rare, and on St Barths it is gold.`
    ])
  },
  {
    name: `Cheval Blanc St-Barth`,
    slug: `cheval-blanc-st-barth`,
    brand: `Cheval Blanc`,
    brand_slug: `cheval-blanc`,
    location: `Baie des Flamands, Saint Barthélemy`,
    country: `Saint Barthélemy`,
    country_slug: `saint-barthelemy`,
    region: `Caribbean`,
    region_slug: `caribbean`,
    latitude: 17.9215,
    longitude: -62.8637,
    price_range: `$$$$`,
    price_from: 2200,
    price_to: 12000,
    currency: `USD`,
    style: `French Caribbean Refinement`,
    best_for: [`Privacy`, `Couples`, `Quiet Luxury`],
    hero_image: `https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200`,
      `https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1200`
    ],
    website: `https://www.chevalblanc.com/en/maison/saint-barth/`,
    booking_url: `https://www.chevalblanc.com/en/maison/saint-barth/`,
    tagline: `An island retreat for people who prefer murmured excellence to applause.`,
    verdict_best_for: `Travelers who want St Barths without the social noise, with exquisite service, a beautiful beach, and a house style that is disciplined to the last detail.`,
    verdict_skip_if: `You want a buzzy beach club atmosphere or a hotel with more visible personality and less polish.`,
    verdict_standout: `The position on Flamands Beach, which offers one of the island's most serene and generous stretches of sand.`,
    rating_overall: 9.5,
    rating_room: 9.4,
    rating_service: 9.7,
    rating_food: 9.2,
    rating_value: 8.0,
    rating_location: 9.6,
    featured: 1,
    review_intro: section([
      `Cheval Blanc St-Barth is what happens when a brand built on French discretion and microscopic attention to detail applies itself to a Caribbean beach. The result is not loud, not scene-heavy, and not interested in begging for your affection. It simply does almost everything extremely well. Set on Baie des Flamands, one of the island's broadest and most beautiful beaches, the property has the calm confidence of a place that knows serenity is a luxury category in its own right. Where Eden Rock pulls you toward the island's social life, Cheval Blanc creates a more controlled mood. The energy is lower, the lines cleaner, the crowd quieter, and the pleasures more inward.`,
      `That does not mean sterile. The hotel has warmth, but it is edited warmth, the hospitality equivalent of very good tailoring. The buildings are low-slung and integrated into tropical gardens, with rooms, suites, and villas arranged to preserve privacy without making the property feel disconnected. The design language is light and airy, full of white, pale wood, woven textures, and subtle color that borrows from sea and foliage rather than competing with them. There is enough Caribbean softness to avoid feeling like a Parisian concept imported by force, yet the overall discipline is unmistakably French. The entire place seems to have been composed for exhale, but a very chic exhale.`,
      `What impresses most is the absence of compromise. Plenty of quiet luxury hotels are just muted hotels with high rates. Cheval Blanc is not muted by default. It is precise. The service is among the best in the Caribbean, the rooms are beautifully considered, and the beach setting is genuinely restorative. If Eden Rock is the island's extrovert, Cheval Blanc is its most accomplished introvert, and for many travelers that will be the greater temptation.`
    ]),
    review_arrival: section([
      `Arrival at Cheval Blanc St-Barth is intentionally understated. The transfer from the airport is quick, but the final approach along Flamands Beach feels hushed, as though the island is lowering its voice for the property. Staff meet you with polished warmth, not performative enthusiasm. The lobby is open, breezy, and visually calm, with the sort of natural materials and measured palette that immediately signal the house style. Nothing shouts for attention, which is the point. The hotel wants your nervous system to settle before your rational mind begins judging the details, and it succeeds.`,
      `Check-in is exceptionally smooth. Practical information is given clearly and selectively, and the tone suggests both attentiveness and respect for your mental bandwidth after travel. A drink arrives, luggage is handled invisibly, and a host walks you to your room through gardens that already establish one of the property's key strengths: the feeling of being screened from other guests without ever feeling boxed in. Paths bend, palms soften sightlines, and buildings reveal themselves slowly. The beach glints nearby, but not every second is spent insisting that you look at it. That restraint is a luxury in itself.`,
      `By the time you reach the room, the hotel's operating philosophy is obvious. This is a house designed to remove abrasion. There is no unnecessary friction, no overlong explanation, no staged spectacle. Instead you get calm transitions, intelligent pacing, and immediate trust in the hotel's systems. A lot of luxury properties talk about making guests feel at home. Cheval Blanc does something subtler and better. It makes you feel that every variable has already been thought through, so home can wait.`
    ]),
    review_room: section([
      `Rooms, suites, and villas at Cheval Blanc St-Barth are superbly judged. The design is gentle without becoming bland: white walls, pale oak, woven accents, cool stone underfoot, and textiles that add softness rather than fuss. Light is handled beautifully. During the day the rooms feel open and sun-touched; at night they shift into a cocooning calm that encourages staying in. The best categories have direct access to the beach or private pools, but even the entry-level rooms carry the same composure and quality. There is no sense that the hotel saves all of its intelligence for the top end and phones in the rest.`,
      `Beds are excellent in the quiet, expensive way that is increasingly rare. Mattresses are supportive, linens have real weight and finish, pillows are varied enough to satisfy different sleep habits, and the climate control works silently. Bathrooms continue the design discipline with generous mirrors, elegant stone surfaces, strong water pressure, and layouts that feel spacious rather than overbuilt. Amenities are very much in the LVMH orbit, but the integration feels organic because the entire property is already operating at that level of refinement. You notice the quality because it fits, not because it is announced.`,
      `Most importantly, the rooms have emotional balance. They are luxurious but not cold, tropical but not thematic, polished but not over-styled. Step onto a terrace and the room continues into the garden or the sea air rather than ending at a glass line. This continuity makes the stay feel seamless. You are not moving between hotel interior and island exterior. You are moving through variations of the same calm, which is exactly what a great beach hotel should achieve.`
    ]),
    review_service: section([
      `Service here is the decisive advantage. Cheval Blanc St-Barth operates with the kind of anticipatory precision that can easily slip into stiffness at lesser properties. It never does. Staff remember preferences quickly, communicate elegantly, and adjust their presence to your rhythm with impressive accuracy. If you want quiet efficiency, that is available immediately. If you want conversation, recommendations, or a bit more warmth, the team can meet that too. This flexibility is the hallmark of serious luxury. The hotel is not imposing a service style on the guest. It is shaping one around the guest.`,
      `The beach team is especially good because beach service is where many high-end island hotels reveal their weaknesses. Here, loungers are handled smoothly, drinks arrive promptly, and lunch service on the sand never slides into chaos. The concierge team is equally strong, with the sort of island knowledge that goes beyond a list of known hotspots. They understand wind, traffic, moods, and meal timing. They know when a guest wants a boat and when a guest only thinks they want a boat because they have not yet seen how good Flamands Beach looks in the afternoon light. Those judgment calls save people from making expensive mistakes, which is a highly underrated form of luxury.`,
      `Housekeeping is close to flawless. Rooms are reset with invisible exactness, personal items are respected, and turndown is thoughtful rather than merely decorative. The hotel as a whole runs with the consistency of a property where standards are internalized, not checked off. You feel that in every interaction. Nothing is extravagant for the sake of it. Everything is exact. On an island where plenty of places trade on beauty first and systems second, Cheval Blanc's operational intelligence is deeply impressive.`
    ]),
    review_food: section([
      `Dining at Cheval Blanc St-Barth is elegant, restrained, and genuinely satisfying. La Case, the signature restaurant, takes Caribbean ingredients and places them in a refined French frame without stripping them of flavor. Seafood is treated with respect, sauces are precise, and even lighter dishes have backbone. The room looks across Flamands Beach, which means lunch and dinner both benefit from that rare luxury-hotel gift: a setting that improves appetite rather than distracting from it. The menu never feels like culinary theater imported for prestige. It feels specific to the island, but sharpened by a kitchen that knows exactly how much refinement to apply.`,
      `Breakfast is one of those quietly perfect services that are easy to underestimate until you stay elsewhere. Pastries are excellent, fruit is vivid, juices taste alive, and the hot dishes arrive at proper temperature with actual care. There is enough variety to keep longer stays interesting without the whole thing descending into a buffet free-for-all. Room service is similarly strong, especially for guests leaning into the private, slow rhythm that the hotel invites. Coffee on your terrace, proper eggs, and sea air before anyone else is awake is a very convincing argument for never over-scheduling the day.`,
      `The drinks program is polished rather than flashy. Wines are chosen intelligently, cocktails are balanced, and the service style around meals keeps the mood from becoming too formal. This is important because Cheval Blanc could easily drift into preciousness if it forgot that beach destinations should still allow pleasure to breathe. Instead, the food and beverage offering feels like the rest of the hotel: highly controlled, beautifully executed, and just relaxed enough to remain seductive.`
    ]),
    review_details: section([
      `Flamands Beach is the hotel's headline asset, and it deserves the reputation. Wide, bright, and usually calmer in mood than St Jean, it gives the property a setting that feels genuinely restorative. The beach club infrastructure is handled with admirable restraint, so guests get comfort without the sense of being trapped inside an over-programmed scene. The pool area is elegant and calm, but the sea is the main event here. You can spend a whole day moving only between lounger, water, lunch table, and shaded terrace and feel that you have done something meaningful. That is excellent beach-hotel design.`,
      `The spa continues the house style of soft control. Treatments are well executed, the environment is soothing without being over-perfumed or theatrically spiritual, and the whole wellness offer feels integrated instead of bolted on. The gym is discreet and well-equipped. Gardens are beautifully kept. Pathways and lighting are handled so intelligently that moving around the property at night remains intimate rather than dimly inconvenient. Even practical details like buggy service, unpacking assistance, and transfer coordination operate with the same sense of finish.`,
      `Cheval Blanc also benefits from what it refuses to do. It does not overload guests with programming, noise, or obvious attempts at social engineering. There is no frantic need to prove relevance. This selective restraint gives the hotel rare coherence. Every detail, from landscaping to table spacing to room materials, supports the same message: privacy, ease, precision. That unity is why the property lingers in the mind longer than louder places often do.`
    ]),
    review_verdict: section([
      `Cheval Blanc St-Barth is the most complete quiet-luxury option on the island. I would recommend it to travelers who want the beauty of St Barths without feeling conscripted into its social theater. The beach is exceptional, the service is among the best in the Caribbean, and the rooms have that difficult blend of polish and softness that makes you want to stay in them rather than merely admire them. This is not a hotel trying to be famous. It is a hotel trying to be exact, and it succeeds.`,
      `The obvious downside is price. Cheval Blanc charges as though precision were a precious metal, and many nights it effectively is. Guests seeking value, buzz, or a looser mood will find stronger emotional returns elsewhere, especially if they actually want to spend their holiday in the island's visible social current. But for couples, privacy-minded families, and seasoned luxury travelers tired of properties that mistake silence for personality, Cheval Blanc offers something more substantive. It offers calm with skill behind it.`,
      `If Eden Rock is the version of St Barths that pours another glass and says stay out a little longer, Cheval Blanc is the version that lowers the lights, draws the curtains just enough, and makes sure tomorrow starts beautifully. Both are excellent. My stronger personal admiration goes to Cheval Blanc because it is harder to make restraint this compelling. On Flamands Beach, they have done exactly that.`
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
  console.log(`Starting Apr 13 seed — Eden Rock St Barths + Cheval Blanc St-Barth...`);

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

  console.log(`\nApr 13 seed complete! 2 hotels published.`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
