import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// APR 20 — THE DOLDER GRAND + CHEVAL BLANC ST-TROPEZ
// Week 7: Swiss Alps + Europe roundup
// ============================================================================

const hotels = [
  {
    name: `The Dolder Grand`,
    slug: `the-dolder-grand`,
    brand: `The Dolder Grand`,
    brand_slug: `the-dolder-grand`,
    location: `Zurich, Switzerland`,
    country: `Switzerland`,
    country_slug: `switzerland`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 47.3763,
    longitude: 8.5672,
    price_range: `$$$$`,
    price_from: 950,
    price_to: 4200,
    currency: `USD`,
    style: `Belle Époque Hilltop Palace`,
    best_for: [`Spa Weekends`, `City Escapes`, `Design-Literate Travelers`],
    hero_image: `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200`,
      `https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200`
    ],
    website: `https://www.thedoldergrand.com/`,
    booking_url: `https://www.thedoldergrand.com/en/rooms-suites/`,
    tagline: `Zurich's grand hilltop escape, where serious art, serious money, and serious recovery all meet under one roof.`,
    verdict_best_for: `Travelers who want a city hotel that behaves like a resort, with a superb spa, sharp views over Zurich, and enough polish to justify the climb uphill.`,
    verdict_skip_if: `You need to be in walking distance of Bahnhofstrasse all day or you prefer old palaces left entirely untouched by contemporary design.`,
    verdict_standout: `The way the historic main building and Norman Foster extension create a hotel that feels simultaneously stately and very current.`,
    rating_overall: 9.2,
    rating_room: 9.2,
    rating_service: 9.1,
    rating_food: 9.0,
    rating_value: 8.1,
    rating_location: 8.9,
    featured: 1,
    review_intro: section([
      `The Dolder Grand is the rare city hotel that persuades you to stop treating the city as the main event. Set high above Zurich on the Adlisberg hillside, it looks down over the lake, the old town, and the neat financial certainty of the city below, yet the mood is less business hotel than private refuge for people with expensive coats and no interest in being hurried. The original building opened in 1899, all turreted grandeur and late-Belle-Époque confidence. The later Norman Foster expansion could have ruined that old-world romance. Instead, it gives the property its edge. The old palace still provides the fantasy, but the newer wings prevent the whole experience from slipping into heritage cosplay. That combination is what makes the Dolder relevant rather than merely beautiful.`,
      `Zurich has many virtues, but theatricality is not usually one of them. The Dolder supplies it without becoming vulgar. You arrive through quiet woodland, not city traffic. Public rooms carry enough scale to feel ceremonial, but the atmosphere stays controlled, almost Swiss to a fault. Then there is the art collection, scattered through the property with real conviction rather than lobby-decor tokenism. Murakami, Botero, Dalí, Haring, even a full-scale sculpture on the grounds, all of it signals that this hotel expects guests to notice things. That expectation changes the mood. The Dolder is not selling anonymous comfort. It is selling cultivated removal.`,
      `What I like most is that the hotel understands luxury as atmosphere plus infrastructure. You come for the hilltop drama and stay for the excellent spa, serious rooms, and the peculiar pleasure of sleeping above Zurich rather than inside it. It is not the most intimate luxury hotel in Switzerland, nor the warmest, nor the most obviously charming. But it may be the most persuasive option for travelers who want a refined urban base with enough distance from urban life to feel restorative. In a city that can occasionally feel a little too buttoned-up, the Dolder adds some breadth, some view, and just enough decadence.`
    ]),
    review_arrival: section([
      `Arrival at the Dolder begins with separation. The road curls upward through trees, and almost immediately Zurich's polished businesslike rhythm falls away. That approach matters because it resets your expectations. This is technically a city hotel, but the journey insists on a different identity. You are not pulling up to a curbside entrance with taxis idling outside and office workers hurrying past. You are approaching a hilltop estate. When the historic façade finally appears, all pale stone, towers, and self-belief, it lands exactly as intended. The building has the confidence of a place constructed before modern hospitality discovered understatement.`,
      `The welcome is polished and efficient, with a front desk team that understands the difference between warmth and chatter. Bags disappear quickly, coats are handled properly, and check-in tends to be brisk in the best Swiss sense, meaning no time is wasted but no one makes you feel processed. The lobby and reception spaces deliver the first proof that the hotel's marriage of eras actually works. Historic bones frame contemporary furniture, museum-level art, and enough visual quiet to keep the building from feeling stuffed with its own pedigree. You can sense the Foster intervention without it shouting for attention. That restraint takes intelligence.`,
      `Then comes the real seduction, the movement through the property toward the rooms. Corridors open toward huge windows, and the city begins reappearing below you in flashes of water, rooftops, and distant light. In the right weather, Zurich looks almost miniature from up here, which gives the hotel a faintly superior air, as if it is gently reminding you that perspective is one of the things you paid for. By the time the room door opens, you have already absorbed the main pleasure of the Dolder. It is not simply luxury. It is altitude, stillness, and the relief of no longer being in the middle of things.`
    ]),
    review_room: section([
      `Rooms at the Dolder vary substantially depending on whether you stay in the historic building or the newer wings, but the better choice is usually the modern side unless you are specifically attached to period romance. The Foster-designed rooms are cleaner, calmer, and make better use of the views, with floor-to-ceiling windows in many categories that turn Zurich, the lake, and the surrounding woods into part of the interior design. The palette leans toward pale neutrals, polished wood, and subtly glossy surfaces, all of it handled with a precision that feels expensive rather than cold. Beds are excellent, properly supportive and dressed in linens that manage the difficult trick of feeling both crisp and soft.`,
      `Bathrooms are a major strength. Marble is used generously but not pompously, lighting is flattering, and the deep tubs in many rooms are the sort that actually invite use after a long flight or a long afternoon in the spa. Showers have the pressure and temperature stability you expect at this level, but not every hotel delivers. Here, they do. The practical details are equally convincing. Desks are large enough for real work, wardrobes are generous, blackout performance is strong, and sound insulation is excellent. That last point matters because the whole point of the Dolder is retreat. If a hotel built around serenity cannot deliver silence, it has failed at the concept level. The Dolder does not fail.`,
      `Emotionally, the rooms feel more adult than seductive, and I mean that as praise. They do not beg for your attention with decorative tricks. They assume you will appreciate proportion, materials, and space. Some luxury travelers may prefer a stronger sense of theater or a more obviously Swiss texture, but I think the restraint works in the hotel's favor. The views supply enough drama. Inside, the rooms keep your pulse low. After a day in Zurich, that calm feels not bland but corrective. These are rooms designed for decompression, not display, and they succeed beautifully.`
    ]),
    review_service: section([
      `Service at the Dolder is smooth, discreet, and more polished than affectionate. That may sound like a caveat, but it is really a description of the house style. The staff are highly competent, generally elegant, and very good at keeping the guest experience frictionless. Restaurant reservations are handled well, luggage and valet service move quickly, and any request involving transport into Zurich tends to be sorted with efficient confidence. What you do not always get is the emotional warmth found at certain old-school grand hotels or more intimate alpine properties. The Dolder's team tends to operate with composure first and personality second. For many guests, especially on a short luxury city break, that will feel exactly right.`,
      `Where the service stands out is in calibration. Staff seem to understand that the hotel hosts a mixed crowd, wellness weekenders, finance people, couples on celebratory trips, art-world regulars, and international guests using Zurich as a stopover, and they modulate accordingly. Spa guests are shepherded gently. Business travelers are moved through quickly. Leisure guests receive more narrative around the property and dining options. This flexibility helps the hotel avoid the stiffness that can creep into luxury operations in cities where precision is prized above charm. The concierge team is particularly solid, not flashy but useful. They know Zurich's restaurants, lake excursions, museums, and practical logistics well enough to be genuinely valuable, which is more than can be said for many luxury concierges living off outdated reputations.`,
      `Housekeeping and turndown are very strong. Rooms are reset with quiet exactness, personal items are respected, and the whole back-of-house machine feels unusually well tuned. You notice this most in the absence of annoyance. Nothing arrives late, nothing feels forgotten, and the hotel rarely creates those minor irritations that quietly poison luxury stays. If I have a criticism, it is simply that the service can feel a touch too polished, as though everyone has been instructed not to crease the surface. But that reserve is also part of the Dolder's identity. It is a hotel that prefers elegance to exuberance, and the staff embody that choice.`
    ]),
    review_food: section([
      `Food at the Dolder is serious, which is fortunate because the hotel makes dining a central part of the stay rather than an afterthought. The headline is The Restaurant, the Michelin-starred fine-dining room, where the cooking aims high and often lands. This is not one of those luxury-hotel tasting menus that mistakes complexity for pleasure. There is discipline here, and enough Swiss clarity in the execution to prevent the food from turning florid. Ingredients are handled with confidence, sauces are balanced, and service in the dining room is polished without becoming theatrical. It is a restaurant worth booking even if you are not staying in the hotel, which is always the correct benchmark.`,
      `Saltz provides the more relaxed counterpart, and in some ways it is the more important outlet because it is where many guests will actually spend time. The room is lively, visually sharper, and less beholden to ceremonial luxury-dining codes. Breakfast is also served here, and it is excellent. The buffet is broad without feeling generic, the breads and pastries are strong, egg dishes arrive correctly, and there is enough local character, Bircher muesli, proper cheeses, excellent cured meats, to remind you that Switzerland can feed people very well when it feels like it. The terrace in good weather is one of the best breakfast settings in Zurich.`,
      `The bar and lounge offerings are equally competent, if not wildly memorable. Cocktails are well made, wines are chosen intelligently, and room service is dependable enough that staying in can feel like a good decision rather than a compromise. That matters at a hotel where the whole point is retreat. The Dolder does not have the most emotionally charged food scene in European luxury hospitality, but it does have something arguably more useful. You can eat well throughout the day without once feeling that the hotel is phoning it in. That consistency supports the whole property.`
    ]),
    review_details: section([
      `The spa is the reason many guests book the Dolder, and it more than justifies the hotel's reputation. Vast by city-hotel standards, it has the scale and ambition of a destination wellness property, with long indoor pools, thermal circuits, steam rooms, saunas, relaxation zones, and treatment spaces that make most urban luxury spas feel decorative. The design is sleek but not sterile, and crucially, the whole operation runs with order. You do not feel trapped in a glossy maze of robes and whispers. You feel that the hotel has taken recovery seriously. After a day of walking Zurich or a long-haul arrival, the spa is not just pleasant. It changes the stay.`,
      `Then there is the art. Hotels talk about collections all the time, usually meaning a handful of tasteful works in corridors. The Dolder's art program is real. You move past major contemporary names in public spaces and on the grounds, and the effect is cumulative. It gives the hotel cultural confidence that many luxury properties try to fake through decorative abstraction and coffee-table books. Here, the art is part of the identity. Combined with the architecture, it creates a property that feels intellectually inhabited rather than merely expensively furnished.`,
      `Practical details are equally strong. There is a shuttle into central Zurich, which helps offset the hilltop location. Fitness facilities are excellent. Outdoor spaces and terraces make the most of summer, while the interior holds up beautifully in cold weather. Even the slight inconvenience of being above town turns into a virtue once you understand the trade. You give up instant walkability and gain silence, space, and perspective. That is a smart exchange, especially in Zurich, where the city center is easy enough to reach but harder to emotionally escape once you are in it.`
    ]),
    review_verdict: section([
      `The Dolder Grand is my pick for travelers who want Zurich without having to live inside Zurich for every waking minute. It gives you the city when you want it, then lets you retreat above it with a real spa, serious rooms, and enough atmosphere to make the return uphill feel satisfying every time. The old palace shell supplies glamour. The contemporary extensions supply sanity. Few historic luxury hotels have modernized this intelligently. Many become either museums with minibars or sleek redesigns that flatten their own character. The Dolder avoids both traps.`,
      `It is not perfect. The location will frustrate guests who want to walk out the door into the city. The service, while excellent, can feel slightly reserved. Rates are ambitious, especially once dining and spa indulgence start accumulating. And if your idea of Swiss hotel luxury is a deeply traditional palace with heavier doses of old-world ritual, the Dolder may feel a touch too contemporary. But those are not flaws so much as clarifications. This hotel knows what it is. It is a sophisticated hilltop refuge with an urban address, not a nostalgic fantasy in the center of town.`,
      `Would I stay here over a more central Zurich grande dame? Yes, almost certainly, especially for a long weekend. The Dolder gives more than sleep and polish. It gives distance, and distance is often the ingredient that turns luxury from surface treatment into actual restoration. In that respect, it is one of Europe's most convincing city escapes.`
    ])
  },
  {
    name: `Cheval Blanc St-Tropez`,
    slug: `cheval-blanc-st-tropez`,
    brand: `Cheval Blanc`,
    brand_slug: `cheval-blanc`,
    location: `St-Tropez, France`,
    country: `France`,
    country_slug: `france`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 43.2615,
    longitude: 6.6106,
    price_range: `$$$$`,
    price_from: 1900,
    price_to: 11000,
    currency: `USD`,
    style: `Riviera Beach House Perfection`,
    best_for: [`Beach Club Days`, `Couples`, `Riviera Regulars`],
    hero_image: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200`,
      `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200`
    ],
    website: `https://www.chevalblanc.com/en/maison/st-tropez/`,
    booking_url: `https://www.chevalblanc.com/en/maison/st-tropez/`,
    tagline: `The most disciplined kind of Riviera pleasure, right on Baie des Canoubiers and close enough to town to be useful.`,
    verdict_best_for: `Travelers who want St-Tropez glamour with genuine quiet, an excellent beach, and service precise enough to handle the Riviera without making it feel exhausting.`,
    verdict_skip_if: `You want to be in the middle of the Port's spectacle all day or you prefer a louder, more obviously scene-driven hotel.`,
    verdict_standout: `The combination of direct beach access and a mood that feels private rather than performative, which is surprisingly hard to find in St-Tropez.`,
    rating_overall: 9.4,
    rating_room: 9.3,
    rating_service: 9.6,
    rating_food: 9.2,
    rating_value: 8.0,
    rating_location: 9.4,
    featured: 1,
    review_intro: section([
      `Cheval Blanc St-Tropez is proof that the Riviera does not need to shout to seduce. Set on the Baie des Canoubiers, just outside the center of St-Tropez, the hotel occupies one of the smartest positions in town. You are close enough to the port, the shops, and the nightly theatre to join the circus whenever the mood strikes, but far enough away to sleep, swim, and have lunch without feeling that everyone around you is auditioning for attention. That alone makes it valuable. St-Tropez is a place of extraordinary beauty and slightly exhausting self-awareness. Cheval Blanc understands both parts of that equation and builds its charm around the escape hatch.`,
      `The property began life as La Résidence de la Pinède, and while the Cheval Blanc transformation sharpened everything, it did not erase the essential appeal of the site. This is still a low-slung beachside hotel rather than a palace, which suits the Riviera far better than faux grandeur ever could. The design is airy, tactile, sun-washed, and exact. Pale woods, white fabrics, sea colors, and just enough pattern to stop things becoming antiseptic. It feels expensive in the way a perfectly cut linen jacket feels expensive. You sense the work in the ease. That is a harder effect to achieve than the usual luxury tricks of more marble, more gold, more obvious gesture.`,
      `What makes Cheval Blanc St-Tropez superior to many famous Riviera addresses is that it has actual discipline. The crowd is chic, of course. The boats still matter. Lunch still stretches. Rosé still appears with suspicious ease. But the hotel itself never becomes silly. Service has backbone, the rooms are genuinely comfortable, and the beach setting gives the whole stay a soft marine rhythm that smooths out St-Tropez's worst tendencies. It is glamorous, yes, but it is glamorous with judgment. On this stretch of coast, that is close to priceless.`
    ]),
    review_arrival: section([
      `Arrival is refreshingly untheatrical by Riviera standards. The drive from the center of St-Tropez takes only minutes, but it feels like a psychological retreat, from port-side traffic, market crowds, and too many white outfits, toward something quieter and more coherent. The hotel sits directly on the bay, and even before you step inside, the air changes. You smell salt rather than exhaust, hear water rather than engines, and the whole mood loosens by a notch. Staff are waiting, but the welcome is composed rather than over-rehearsed. Bags are taken quickly, names are handled gracefully, and there is none of the flustered, scene-adjacent energy that infects lesser hotels in town during high season.`,
      `The reception spaces immediately announce the house style. Light, proportion, and texture do the work. There is no need for decorative strain because the sea is right there, and the hotel is smart enough not to compete with it. Check-in is brisk, often completed while seated, and the information delivered is practical rather than performative. Staff explain beach arrangements, transfers into town, restaurant timings, and the shape of the property with the confidence of people who know exactly what guests need and exactly what they do not. That economy of effort is very Cheval Blanc. Nothing is wasted, least of all your patience.`,
      `The short walk to the rooms is part of the seduction. Gardens soften the paths, glimpses of the bay keep interrupting your field of vision, and the scale of the hotel becomes clear. This is not a vast resort. It is an intimate, carefully controlled house by the sea. When the room opens, the transition feels seamless because the whole arrival has been built around one idea, lowering friction until the only thing left is pleasure. In St-Tropez, where logistics and vanity can so easily crowd out ease, that is a major achievement.`
    ]),
    review_room: section([
      `Rooms and suites at Cheval Blanc St-Tropez are beautifully judged. They do not try to overpower you with square footage or decorative drama. Instead they focus on livability, texture, and a quiet Riviera elegance that is almost impossible to fake. The palette leans toward white, cream, pale oak, soft blue, and sandy neutrals, with the occasional marine note to keep everything anchored to the bay outside. Light moves beautifully through the rooms, especially in the morning, and terraces or balconies in many categories extend the experience outward so that the sea never feels conceptually separate from the stay.`,
      `Comfort is serious rather than showy. Beds are excellent, soft in the right places and deeply sleep-inducing after a day of sun and lunch and swimming. Bathrooms are polished and spacious, with strong showers, generous vanities, and bathtubs where applicable that are more than decorative. The details are where the price starts to make sense. Closets are intelligently arranged, controls are intuitive, soundproofing is strong, and the whole room functions with the sort of silent competence that only reveals itself when it is absent elsewhere. At many Riviera hotels, style arrives long before sleep quality. Here, they arrive together.`,
      `The emotional tone of the rooms matters too. They feel intimate without being cramped, luxurious without being stiff, and above all private. That privacy is one of the hotel's great strengths. Even when the property is full, the rooms offer a sense of withdrawal from the social atmosphere of St-Tropez. You can come back from the port, shut the doors, and feel the coast exhale around you. That transition is incredibly valuable. A lot of places in St-Tropez are fun for three hours and exhausting for three nights. Cheval Blanc's rooms make the opposite case. They are built for staying.`
    ]),
    review_service: section([
      `Service here is among the strongest on the Riviera because it combines polish with judgment. That distinction matters. Many luxury hotels in the South of France can perform attentiveness. Fewer know when to speed up, when to disappear, when to protect a guest from the chaos around them, and when to gently improve a plan without making a fuss about it. Cheval Blanc does. The staff are elegant but never brittle, warm but never cloying. They remember names and preferences quickly, and they move with the sort of quiet purpose that suggests the operation has been tuned relentlessly behind the scenes.`,
      `The beach and pool teams are particularly good. This is where Riviera service often falls apart, under the pressure of sun, appetite, vanity, and too many last-minute whims. Here, loungers are handled smoothly, drinks arrive promptly, towels appear before you need them, and lunch tables are managed with calm authority. The concierge team is equally useful. They understand St-Tropez not as a postcard but as a system, traffic, boats, dinner slots, beach club timing, market mornings, fashion-store openings, and all the tiny seasonal variables that determine whether a day feels effortless or idiotic. That kind of local intelligence is worth far more than generic charm.`,
      `Housekeeping is close to flawless. Turndown is thoughtful, room refreshes happen without friction, and personal items are treated with precision rather than nervousness. There is a sense throughout that the hotel has trained its staff not just to complete tasks but to protect mood. That is a high-level hospitality skill. You are not simply cared for here. Your experience is edited on your behalf, with annoying edges quietly removed. In a destination that so often confuses glamour with inconvenience, that is one of the strongest compliments I can give.`
    ]),
    review_food: section([
      `Dining at Cheval Blanc St-Tropez is a genuine asset, not merely a support service for the beach. La Vague d'Or, the three-Michelin-starred restaurant under chef Arnaud Donckele, gives the property one of the most serious culinary addresses on this stretch of coast. The cooking is intricate without becoming fussy, deeply Mediterranean without shrinking into cliché, and driven by a sense of flavor architecture that is rare even at this level. Sauces, broths, infusions, and reductions are handled with almost obsessive care, but the pleasure remains sensuous rather than academic. It is one of those restaurants that justifies dressing for dinner because the food has enough conviction to meet the ceremony.`,
      `For daily life, the more relaxed beachside and terrace dining matters just as much, and the hotel handles that transition well. Breakfast is excellent: precise fruit, beautiful pastries, good coffee, eggs exactly right, and enough savory depth to keep the whole thing from feeling like a sugar-coated Riviera cliché. Lunches have the right coastal appetite, grilled fish, vegetables that still taste of sun, chilled rosé, and a pacing that encourages the day to unravel slowly. Importantly, the informal dining never feels secondary. The same standards of product and execution remain in place, just translated into a lighter register.`,
      `Room service is also dependable, which is more relevant than it sounds in St-Tropez, where the right choice is often to stay on your terrace after an over-social day. Cocktails are elegant and balanced, wines are intelligently selected, and the overall food program reflects the wider hotel ethos: pleasure controlled by taste. There are louder places to eat on the Riviera and certainly more performative ones, but very few manage to feed guests this well across both the ceremonial high end and the lazy middle of the day. Cheval Blanc does, and it strengthens the entire stay.`
    ]),
    review_details: section([
      `The beach is the hotel's decisive advantage. Direct access to the Baie des Canoubiers gives Cheval Blanc something many St-Tropez hotels lack, a genuine maritime life rather than a decorative relationship to the coast. You can swim properly, walk the edge of the bay, and settle into a day shaped by water instead of traffic. The beach club setup is polished but not oppressive. Loungers are comfortable, service is efficient, and the whole environment feels private enough to be restorative while still carrying the faint Riviera charge people come here for. The pool is handsome, but like at any self-respecting beach hotel, it plays supporting role to the sea.`,
      `The Guerlain spa is excellent, more polished than mystical, which suits the property. Treatments are well executed, the atmosphere is serene without being overdesigned, and the wellness component feels integrated rather than bolted on for checklist purposes. There is a good gym, well-kept gardens, and an overall sense that every shared space has been considered from the point of view of pace. Nothing feels over-programmed. That restraint is especially attractive in St-Tropez, where too many luxury properties try to convert every hour into content. Here, the details encourage lingering rather than performing.`,
      `Practicalities are just as strong. The hotel can get you into town quickly when you want the port, shopping, or dinner, and just as quickly get you away again. That duality is its secret weapon. You can have St-Tropez in full color, then return to a place that behaves as though tranquility is still a respectable ambition. The property's scale helps. It feels personal rather than sprawling, and every operational detail, from transfers to table timing, supports that intimacy. In a destination built on appetite and spectacle, Cheval Blanc's gift is knowing exactly how much of each to allow.`
    ]),
    review_verdict: section([
      `Cheval Blanc St-Tropez is one of the very best places to stay on the Riviera because it understands that glamour without control becomes tiresome. The hotel gives you the pleasures people come here for, sea light, beautiful lunch, elegant rooms, strong service, proximity to town, but strips out much of the nonsense. That makes it more restful than many rivals and, in the long run, more luxurious. It is not trying to be the loudest address in St-Tropez. It is trying to be the most complete, and I think it comes very close.`,
      `The obvious drawback is cost. This is a seriously expensive hotel in a seriously expensive destination, and once beach time, lunch, transfers, and dinner begin stacking up, restraint is no longer merely aesthetic. But unlike some famous Riviera properties, the money buys tangible quality, not just a famous name attached to a mediocre room and a lot of bronzed crowd management. The rooms are excellent. The food is genuinely ambitious. The service has real depth. The beach matters. Those are structural advantages, not mood-board fantasies.`,
      `If you want St-Tropez at full volume, there are louder stages. If you want old-school Riviera nostalgia with heavier decorative flourish, there are more theatrical options. But if you want the Riviera cleaned up by people with real taste, this is where I would book. Cheval Blanc St-Tropez has the rare quality of making indulgence feel composed. On this coast, that is about as sophisticated as luxury gets.`
    ])
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

const insertHotelQuery = `INSERT INTO hotels (${hotelColumns.join(`, `)}) VALUES (${hotelColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting Apr 20 seed — The Dolder Grand + Cheval Blanc St-Tropez...`);

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

  console.log(`Apr 20 seed complete! 2 hotels published.`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
