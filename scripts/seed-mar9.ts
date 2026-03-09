import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// MARCH 9, 2026 — GREECE LAUNCH: AMANZOE + GRACE HOTEL SANTORINI
// ============================================================================

const hotels = [
  {
    name: `Amanzoe`,
    slug: `amanzoe`,
    brand: `Aman`,
    brand_slug: `aman`,
    location: `Porto Heli, Peloponnese, Greece`,
    country: `Greece`,
    country_slug: `greece`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 37.3241,
    longitude: 23.1456,
    price_range: `$$$$`,
    price_from: 1800,
    price_to: 8500,
    currency: `USD`,
    style: `Hilltop Hellenic Revival`,
    best_for: [`Seclusion`, `Architecture`, `Wellness`],
    hero_image: `https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200`,
      `https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200`
    ],
    website: `https://www.aman.com/hotels/amanzoe`,
    booking_url: `https://www.aman.com/hotels/amanzoe/book`,
    tagline: `A hilltop acropolis overlooking the Aegean—Aman's Hellenic masterpiece.`,
    verdict_best_for: `Travelers seeking complete seclusion, Aman's signature silence, and architecture that honors ancient Greece without pastiche.`,
    verdict_skip_if: `You want beach-town energy, easy access to nightlife, or find Aman's minimalism too austere for your taste.`,
    verdict_standout: `The view from the main pavilion at sunset, when the Aegean turns gold and the columns catch the dying light like something from antiquity.`,
    rating_overall: 9.6,
    rating_room: 9.7,
    rating_service: 9.5,
    rating_food: 9.2,
    rating_value: 8.4,
    rating_location: 9.8,
    featured: 1,
    review_intro: section([
      `Amanzoe rises from a hilltop in the Peloponnese like something that has always been there. The architecture—cream-colored columns, clean geometric forms, reflecting pools that mirror the sky—draws on classical Greek precedents without ever tipping into theme park territory. Ed Tuttle, the architect behind several of Aman's most celebrated properties, has created something that feels simultaneously ancient and utterly contemporary. The building materials are local stone and marble, aged and weathered in ways that suggest centuries rather than the decade-plus since the property opened in 2012. From certain angles, the columns could be ruins awaiting excavation. From others, they frame the Aegean with a precision that reveals their modernity.`,
      `The setting is deliberately remote. Porto Heli, the nearest town, is a sleepy harbor without the tourist infrastructure of Mykonos or Santorini. The Peloponnese itself remains one of Greece's least-visited regions, despite containing some of the country's most significant archaeological sites—Epidaurus, Mycenae, Nafplio. Amanzoe positions itself as a base for exploring this history, though many guests never leave the property at all. The resort's 38 pavilions and 23 villas are scattered across 80 hectares of olive groves and rolling hills, creating a sense of space that most Mediterranean destinations cannot offer. You can walk for twenty minutes without encountering another guest, which is precisely the point.`,
      `What makes Amanzoe work is Aman's understanding that luxury is often about absence rather than presence. There is no lobby in the conventional sense—guests are received in an open pavilion that flows into the landscape. There is no background music, no programmed entertainment, no sense that the resort is trying to fill your time. The property trusts its guests to find their own rhythm, offering exceptional facilities—spa, beach club, multiple pools—without imposing them. This restraint requires confidence, and Amanzoe has it in abundance. The resort knows what it is and does not apologize for what it is not. For travelers who share its values, the experience approaches perfection.`
    ]),
    review_arrival: section([
      `The journey to Amanzoe is part of the experience, though it requires commitment. Most guests fly into Athens and drive three hours through increasingly rural Peloponnese, watching the landscape shift from highway to olive groves to the final approach through the resort's private road. An alternative is the helicopter transfer, which deposits guests directly on the hilltop helipad and provides views of the coastline that justify the premium. Either way, arrival establishes the property's essential character: you are leaving the world behind. The gates close, the road narrows, and suddenly the columns appear against the sky.`,
      `Reception happens in the main pavilion, a soaring space defined by columns and the absence of walls. Staff appear with cold towels and chilled drinks—the house blend of citrus and herbs—while check-in formalities are completed with characteristic Aman efficiency. The paperwork is minimal, the conversation is warm but not excessive, and within minutes you are being escorted to your pavilion in a golf cart that winds through the property. The journey provides an orientation to Amanzoe's scale: the spa appears on one hillside, the beach club on another, the main pool shimmering somewhere in between.`,
      `Your pavilion reveals itself gradually. The approach is deliberately understated—a stone path, an olive tree, a wooden door. Then the door opens and the space unfolds: a vast living area, a private pool, a terrace that frames the Aegean through columns of your own. The bed is positioned to catch the morning light. The bathroom is a suite unto itself, with indoor and outdoor showers, a soaking tub, and materials that feel carved from the landscape. The minibar is stocked with Greek wines and local delicacies. A butler appears to explain the room's systems—extensive but intuitive—and to take preferences for the days ahead. Then silence returns, and you realize that Amanzoe has begun to work its particular magic.`
    ]),
    review_room: section([
      `The pavilions at Amanzoe are among the most architecturally significant hotel rooms in the world. Each is a freestanding structure with its own entrance, private pool, and terrace, designed to function as a complete residence rather than a mere sleeping space. The proportions are generous—even the smallest pavilions exceed 100 square meters—but the design never feels ostentatious. The materials are simple: marble floors, white walls, wooden beams that reference traditional Greek construction. The furniture is minimal and purposeful, selected for comfort rather than display. The overall effect is one of calm abundance, luxury achieved through quality and space rather than decoration.`,
      `The beds deserve special mention. Aman's custom mattresses are legendary in the industry, combining support and softness in ways that competitors struggle to replicate. The linens are high-thread-count Egyptian cotton, and the pillows are available in multiple firmness options. The blackout curtains achieve genuine darkness, though most guests leave them open to watch the stars. The climate control is precise and quiet, maintaining the perfect temperature without the intrusive hum that plagues many hotels. Sleep at Amanzoe is restorative in ways that feel almost medicinal, helped by the absence of urban noise and the clean mountain air.`,
      `Bathrooms are where the pavilions achieve their greatest impact. The space is divided between indoor and outdoor areas, with the outdoor shower positioned to catch views of the hills while maintaining privacy. The soaking tub is carved from a single block of marble, deep enough for genuine immersion. The twin vanities provide space for couples, and the toiletries are Aman's own line—understated, effective, and sufficiently luxurious without being cloying. A separate toilet room maintains hygiene, and the walk-in closet provides storage that long stays require. The villas extend this template with additional bedrooms, larger pools, and dedicated staff, but even the standard pavilions provide everything a discerning traveler could need.`
    ]),
    review_service: section([
      `Aman's service philosophy is distinctive: present but not performative, attentive but not intrusive. Staff seem to anticipate needs rather than respond to requests, appearing with water when you reach the pool, with shade when the sun intensifies, with suggestions when you seem uncertain. This anticipation requires both training and empathy, and Amanzoe's team demonstrates both in abundance. Many staff members have been with the property since opening, developing institutional knowledge that new hires cannot match. They remember your preferences from previous visits, recognize your rhythms within a day or two, and adjust their presence accordingly.`,
      `The butler service is comprehensive without being overwhelming. Each pavilion is assigned a dedicated staff member who handles everything from unpacking to restaurant reservations to arranging excursions. The relationship can be calibrated to your preferences—some guests want constant attention, others prefer to be left alone—and the butlers adapt quickly. They communicate through whatever channel you prefer: phone, messaging app, or the discreet placement of written notes. Their knowledge of the property and the region is encyclopedic, allowing them to solve problems before you recognize them as problems.`,
      `What distinguishes Amanzoe's service from competitors is its consistency across departments. The spa therapists, the restaurant staff, the beach club team, the housekeeping personnel—all operate to the same standards, with the same attention and the same restraint. There are no weak links, no departments where the experience diminishes. This consistency is rare in hospitality, where front-of-house polish often masks back-of-house shortcuts. At Amanzoe, the excellence runs through the entire operation, creating an environment where trust is earned and maintained. You stop worrying about details because you know they are handled.`
    ]),
    review_food: section([
      `Dining at Amanzoe centers on the main restaurant, an open-air space that captures the Aegean breeze and the panoramic views. The cuisine draws heavily on Greek traditions—fresh seafood, local vegetables, olive oil from the property's own groves—interpreted with contemporary technique and presented with aesthetic care. The grilled octopus, tender and charred in equal measure, has become a signature dish. The lamb, sourced from the Peloponnese, is prepared multiple ways depending on the cut. The vegetable dishes surprise with their intensity, showcasing produce grown in the resort's gardens or sourced from nearby farms.`,
      `Breakfast is a particular strength, served either in the restaurant or on your private terrace. The spread includes Greek yogurt with local honey, eggs prepared to order, freshly baked breads, and cold-pressed juices that actually taste of their ingredients. The coffee is excellent, and the staff remember your preferences from day one. Lingering over breakfast becomes a ritual, extended by the views and the absence of any reason to rush. Lunch at the beach club offers Mediterranean fare with an emphasis on seafood—grilled catches of the day, simply prepared, accompanied by salads that celebrate tomatoes and feta at their peak.`,
      `The wine program emphasizes Greek producers, many unfamiliar to international guests but deserving wider recognition. The sommelier team guides selections with enthusiasm rather than pretension, introducing guests to the indigenous varieties—Assyrtiko, Xinomavro, Agiorgitiko—that have gained critical acclaim in recent years. The cellar also includes international selections for those who prefer familiar names, but the Greek emphasis enriches the overall experience. Cocktails are well-made, the bar service extends late, and the option for private dining—on your terrace, by the pool, at a secluded spot on the property—adds flexibility for special occasions.`
    ]),
    review_details: section([
      `The spa at Amanzoe occupies its own hillside, reached via a path through olive groves that begins the relaxation before you arrive. The building itself is classical in form—columns, courtyards, reflecting pools—but the interior is contemporary and serene. Treatment rooms overlook the landscape, and the therapists are highly trained in both Western and Eastern modalities. The signature treatments draw on Greek traditions: olive oil massages, sea salt scrubs, therapies involving local herbs and honeys. The thermal area includes a hammam, cold plunge pools, and relaxation spaces that encourage lingering. The fitness center is well-equipped, and yoga sessions are offered in spaces that catch the morning light.`,
      `The beach club requires a short drive to the coast, where Aman has developed a private stretch of sand with loungers, umbrellas, and a restaurant serving lunch through sunset. The water is remarkably clear—the Aegean at its cleanest—and water sports equipment is available for those who want activity. The beach club has a different energy than the hilltop, more social and playful, though Aman's restraint persists. There is no loud music, no aggressive service, no attempt to create atmosphere beyond what the setting provides naturally. The transfer between hilltop and coast can be arranged through your butler, with golf carts waiting at both ends.`,
      `The property serves as an excellent base for exploring the Peloponnese's archaeological riches. The ancient theater at Epidaurus, still used for performances during summer, is thirty minutes away. Mycenae, where Agamemnon ruled and the Lion Gate still stands, is about an hour. Nafplio, arguably Greece's most beautiful town, offers wandering through Venetian architecture and seaside tavernas. Amanzoe can arrange private guides, ensure priority access, and pack picnic lunches for extended excursions. These experiences complement the resort's internal offerings, providing cultural depth for guests who want more than beach and spa.`
    ]),
    review_verdict: section([
      `Amanzoe represents Aman at its finest: a property where architecture, landscape, and service combine to create an experience that transcends ordinary hospitality. The setting is magnificent, the design is thoughtful, and the operation is flawless. For travelers who value seclusion, who appreciate quality without ostentation, who seek genuine peace rather than manufactured entertainment, Amanzoe delivers something increasingly rare. The property asks little of its guests—only that they slow down enough to receive what it offers. The Aegean spreads below, the columns catch the light, and time moves differently here.`,
      `The pricing is significant, among the highest in the Mediterranean, and the remote location demands commitment. Amanzoe is not for travelers who want walkable towns, nightlife, or the social scene that other Greek destinations provide. The property suits guests who want to escape rather than engage, who see their hotel as destination rather than base. For those travelers—and they are not the majority—Amanzoe represents something close to perfect. The hilltop acropolis, the silent mornings, the star-filled nights, the food that tastes of the land, the service that anticipates without intruding—these elements combine into an experience that lingers in memory long after departure.`,
      `You leave Amanzoe changed, though the change is subtle. The property recalibrates expectations, demonstrates what hospitality can achieve when resources and vision align. Subsequent hotels feel louder, busier, more anxious to please. The memory of those columns against the sky, that first view of the Aegean from your private terrace, the particular silence of the Peloponnese hills—these become reference points for evaluating everything that follows. Amanzoe does not try to be the best hotel in Greece; it simply is, and the lack of trying is perhaps its greatest achievement.`
    ])
  },
  {
    name: `Grace Hotel Santorini`,
    slug: `grace-hotel-santorini`,
    brand: `Auberge Resorts`,
    brand_slug: `auberge`,
    location: `Imerovigli, Santorini, Greece`,
    country: `Greece`,
    country_slug: `greece`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 36.4317,
    longitude: 25.4265,
    price_range: `$$$$`,
    price_from: 1200,
    price_to: 5500,
    currency: `USD`,
    style: `Caldera Minimalism`,
    best_for: [`Honeymoons`, `Sunset Views`, `Photography`],
    hero_image: `https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200`,
      `https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1200`
    ],
    website: `https://www.aubergeresorts.com/grace-santorini`,
    booking_url: `https://www.aubergeresorts.com/grace-santorini/book`,
    tagline: `The caldera view perfected—Santorini's most refined boutique address.`,
    verdict_best_for: `Couples seeking romantic Santorini without the crowds, exceptional design, and that infinity pool shot everyone wants.`,
    verdict_skip_if: `You want a large resort with extensive amenities, need a beach property, or find Santorini too photographed for your taste.`,
    verdict_standout: `The infinity pool cascading toward the caldera, best experienced in the late afternoon when the light softens and the ferry boats become silhouettes.`,
    rating_overall: 9.4,
    rating_room: 9.5,
    rating_service: 9.3,
    rating_food: 9.1,
    rating_value: 8.6,
    rating_location: 9.7,
    featured: 1,
    review_intro: section([
      `Grace Hotel Santorini occupies the position everyone wants and few can secure: the caldera rim at Imerovigli, the highest point on the island's western edge, with unobstructed views across the volcanic crater to Oia, Thirassia, and the open Aegean beyond. The location has attracted visitors since the property opened in 2007, but under Auberge Resorts Collection management since 2018, Grace has evolved from a beautiful boutique hotel into something more complete—a property where design, service, and cuisine align with the extraordinary setting. The white Cycladic architecture has been refined rather than reinvented, with interiors that achieve a minimalism more convincing than most Santorini properties attempt.`,
      `The property is intimate, just 20 rooms and suites plus the stunning Grace Villa, which means capacity rarely exceeds 50 guests. This scale creates an atmosphere that feels private rather than public, a sanctuary from Santorini's summer crowds while remaining connected to them. Imerovigli village is steps away, with its churches and restaurants and that famous walkway to Skaros Rock. Fira, the island's commercial center, is a fifteen-minute walk or five-minute ride. But many guests find little reason to leave, spending days by the infinity pool that has launched a thousand Instagram posts, dining on the terrace as the sun drops into the sea, and sleeping in suites that frame the caldera like gallery installations.`,
      `What distinguishes Grace from Santorini's other luxury options is its commitment to restraint. The temptation with such views is to overload the interiors, to add elements that compete with the natural drama. Grace resists this impulse entirely. The rooms are white on white, with carefully selected furniture that recedes rather than demands attention. The pool deck is similarly minimal—loungers, umbrellas, that infinite edge. The restaurant focuses on what the landscape offers rather than importing complexity. This restraint is sophisticated rather than austere, creating space for guests to absorb the setting rather than cataloging amenities. The caldera does the work; Grace has the wisdom to let it.`
    ]),
    review_arrival: section([
      `Arriving at Grace Hotel Santorini begins with the journey to Imerovigli, whether by car from the airport or ferry port, by helicopter if budget allows, or by the traditional taxi through traffic that tests patience during high season. The final approach through Imerovigli's narrow streets requires precision driving—the village was not designed for modern vehicles—and parking happens at a designated area where staff await with luggage assistance. Then the walk begins, through a gate and down steps that reveal the hotel gradually, each turn providing another glimpse of the caldera that intensifies anticipation. The arrival experience is theatrical by nature, the drama built into the topography rather than staged by the hotel.`,
      `Reception happens in a space that opens directly onto the view, ensuring that your first moments inside align your attention properly. Staff provide welcome drinks—something cool and local—while check-in formalities are completed with efficiency that respects your eagerness to reach your room. The paperwork is minimal, the information provided is practical rather than excessive, and within minutes a host is escorting you through the property's terraced pathways to your accommodations. The walk provides orientation: here is the pool, here is the restaurant, here is the spa tucked into the cliff. Each element is positioned to maximize the view, creating a sequence of revelations that continues until your own door opens.`,
      `Your room delivers immediately. The design ensures that the caldera fills the frame from the moment you enter, drawing your eye through the window or the private terrace to the water and the volcanic islands beyond. The bed is positioned to catch this view while waking, the furniture is arranged to frame it while sitting, and the private plunge pool (in higher categories) mirrors it while swimming. Staff explain the room's amenities—intuitive but thorough—and offer to unpack, arrange reservations, and handle any immediate needs. Then they withdraw, understanding that what guests most want at this moment is simply to absorb where they are.`
    ]),
    review_room: section([
      `Rooms at Grace Hotel Santorini achieve a difficult balance: they honor Cycladic tradition while providing contemporary comfort, they celebrate the view while remaining comfortable in their own right, and they minimize visual distraction while delivering genuine luxury. The palette is dominated by whites and creams, punctuated occasionally by a navy blue accent or a natural wood element. The materials are quality—linen, marble, polished concrete—but deployed with restraint. The overall effect is calm and contemplative, a space that encourages stillness rather than activity. These are rooms designed for romance and recovery, for slow mornings and long nights, for watching the light change across the caldera from breakfast through sunset and beyond.`,
      `The beds are excellent, positioned to capture the view from the first moment of waking. The linens are high-quality cotton, and the mattresses find the balance between support and softness that promotes genuine rest. Blackout curtains or shutters allow darkness despite the bright Santorini sun, though most guests leave them open to catch the morning light on the water. Air conditioning is powerful and quiet—essential during summer months—and the technology is intuitive, avoiding the frustrating interfaces that plague many design hotels. Storage is adequate for vacation stays, and the in-room amenities include thoughtful touches: Nespresso machines, quality toiletries, robes that actually fit.`,
      `Higher-category rooms and suites add private plunge pools or jacuzzis, larger terraces, and additional living space. The Grace Villa, occupying its own secluded position, provides a complete residence with multiple bedrooms, full kitchen, and terraces that command the best caldera angles on the property. But even the entry-level rooms deliver the essential Grace experience: that view, that design, that sense of being exactly where you should be. Bathrooms feature marble surfaces and rain showers, with cave-style elements in some categories that reference traditional Santorini construction. The execution throughout is precise, with attention to detail that justifies the significant pricing.`
    ]),
    review_service: section([
      `Service at Grace Hotel Santorini operates with the polish expected from Auberge management, refined by the intimate scale that allows genuine personalization. With rarely more than 40 guests on property, staff learn names quickly and remember preferences efficiently. The service style is warm without being intrusive, present when needed and invisible when not. This calibration matters particularly at a property where many guests are celebrating romantic occasions—honeymoons, anniversaries, proposals—and want privacy as much as attention. The staff understand these dynamics intuitively, appearing with champagne for special moments and disappearing for intimate ones.`,
      `The concierge function is handled expertly, with staff who know Santorini deeply and can arrange experiences beyond the standard offerings. They can secure reservations at restaurants that claim to be fully booked, arrange private boat tours to hot springs and volcanic islands, and suggest timing for excursions that avoids the cruise ship crowds. Their local knowledge extends to practical matters: which beaches are worth the drive, which wineries offer the best tastings, where to find authentic food away from tourist traps. This expertise transforms a beautiful stay into an informed one, helping guests discover the Santorini that lies beyond the Instagram clichés.`,
      `Pool and restaurant service deserve particular mention. The pool deck, limited in space but infinite in impact, is managed to ensure all guests receive attention despite the demand. Towels appear promptly, drinks are refreshed without request, and the prime loungers are rotated fairly rather than claimed by early risers. The restaurant team handles both casual pool lunches and more formal dinners with equal competence, adjusting their pace to match guests' moods. Housekeeping maintains the rooms to impeccable standards, with turndown service that includes small touches—weather cards, slippers positioned, curtains drawn to frame the sunset.`
    ]),
    review_food: section([
      `Dining at Grace Hotel Santorini benefits from the same restraint that defines the rest of the property. The Santoro restaurant serves Mediterranean cuisine with Greek emphasis, letting ingredients speak rather than overwhelming them with technique. The seafood is exceptional—sourced daily from local fishermen—whether grilled simply or prepared with more complexity. The vegetables, grown on the volcanic soil that gives Santorini's produce its distinctive intensity, need little embellishment. The chef understands that guests are eating with their eyes as much as their mouths, positioning every service to capture the caldera view, timing the evening meal to unfold as the sun sets.`,
      `Breakfast is included and executed beautifully, with both buffet options and à la carte dishes that showcase the best of Greek morning traditions. The yogurt with local honey, the eggs prepared to order, the fresh juices and strong coffee—all are excellent. The setting, on the same terrace that serves dinner, catches the morning light and the cool Aegean breeze, making lingering not just acceptable but encouraged. Many guests extend breakfast into a leisurely morning, ordering additional coffee and watching the ferry boats traverse the caldera below.`,
      `The poolside menu offers lighter fare for lunch: salads, grilled fish, mezze plates that encourage sharing. The food quality remains consistent with the evening service, and the informality of pool dining suits the mood. For special occasions, the hotel can arrange private dinners at various locations on the property, including the Grace Villa terrace when unoccupied or a secluded spot with maximum view exposure. The wine list emphasizes Santorini's renowned Assyrtiko, the volcanic white that has earned the island serious oenological respect, alongside other Greek and international selections curated by knowledgeable staff.`
    ]),
    review_details: section([
      `The infinity pool at Grace Hotel Santorini is the property's most photographed feature, and it delivers on its visual promise. The cascading design creates multiple levels, allowing guests to choose their position relative to the view. The water temperature is maintained at comfortable levels, and the chemical balance is precise—you can spend hours swimming without irritation. Loungers around the pool are high-quality and sufficient in number for the guest count, with umbrellas providing shade as the sun intensifies. The pool experience reaches its peak in the late afternoon, when the light softens and the caldera colors shift through gold and rose, creating the conditions for photographs that actually look like photographs rather than digital manipulations.`,
      `The spa is compact but well-conceived, offering treatments in a space carved into the cliff with views over the water. The therapists are skilled, and the menu includes both local treatments—using volcanic minerals and Santorini herbs—and international standards. The treatment rooms maintain the property's design aesthetic, with the same white minimalism and caldera framing that define the rest of Grace. Yoga sessions are offered on the terrace, and personal training can be arranged. A small fitness room provides essential equipment for those who need to maintain routines while traveling.`,
      `Grace's location in Imerovigli provides excellent access to Santorini's highlights. The famous walk to Skaros Rock begins essentially at the hotel's gate, offering a moderate hike with spectacular views. Fira is an easy walk or short ride south, providing restaurants, shops, and the cable car down to the old port. Oia lies to the north, reachable by the walking path along the caldera rim (around two hours) or by car in fifteen minutes. The hotel can arrange transfers to beaches on the island's eastern shore, where the water is calmer and the sand provides what the caldera cannot. Wine tours, boat excursions, and archaeological visits are all coordinated by the concierge with attention to timing that avoids peak crowds.`
    ]),
    review_verdict: section([
      `Grace Hotel Santorini achieves what every caldera property attempts: it honors the extraordinary setting without being diminished by it. The design is sophisticated, the service is polished, and the dining is excellent—but all these elements exist in service of the view rather than competition with it. The property understands that guests are here for the caldera, for that particular Santorini light, for the volcanic drama that has drawn travelers for generations. By focusing its resources on delivering that experience in the most refined possible way, Grace has become the standard against which other Santorini luxury properties are measured.`,
      `The limitations are inherent to the category: no beach access, limited amenities compared to larger resorts, high-season pricing that challenges even generous budgets. Grace suits couples seeking romance more than families seeking activity, travelers who want to absorb rather than explore, guests who value design sophistication over resort facilities. The intimate scale means limited restaurant options and a pool scene that, while never crowded, is also never private. These trade-offs are conscious choices rather than failures, reflecting a property that knows its market and serves it well.`,
      `You leave Grace Hotel Santorini with images burned into memory: the caldera at sunset, the infinity pool at dusk, the morning light on whitewashed walls. The property provides exactly what Santorini promises at its best, filtered through design sensibility and service quality that elevate the experience above the merely scenic. For travelers who understand what they are seeking—and who can secure a reservation during the competitive summer months—Grace represents Santorini's boutique pinnacle. The caldera does not disappoint, and neither does the hotel that frames it.`
    ])
  }
];

// ============================================================================
// DATABASE OPERATIONS
// ============================================================================

async function seed() {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
    
    // Insert hotels
    for (const hotel of hotels) {
      await client.query(`
        INSERT INTO hotels (
          id, name, slug, brand, brand_slug, location, country, country_slug,
          region, region_slug, latitude, longitude, price_range, price_from,
          price_to, currency, style, best_for, hero_image, images, website,
          booking_url, tagline, verdict_best_for, verdict_skip_if,
          verdict_standout, rating_overall, rating_room, rating_service,
          rating_food, rating_value, rating_location, featured,
          review_intro, review_arrival, review_room, review_service,
          review_food, review_details, review_verdict, published
        ) VALUES (
          gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,
          $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26,
          $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, 1
        )
        ON CONFLICT (slug) DO NOTHING
      `, [
        hotel.name, hotel.slug, hotel.brand, hotel.brand_slug, hotel.location,
        hotel.country, hotel.country_slug, hotel.region, hotel.region_slug,
        hotel.latitude, hotel.longitude, hotel.price_range, hotel.price_from,
        hotel.price_to, hotel.currency, hotel.style, hotel.best_for,
        hotel.hero_image, hotel.images, hotel.website, hotel.booking_url,
        hotel.tagline, hotel.verdict_best_for, hotel.verdict_skip_if,
        hotel.verdict_standout, hotel.rating_overall, hotel.rating_room,
        hotel.rating_service, hotel.rating_food, hotel.rating_value,
        hotel.rating_location, hotel.featured, hotel.review_intro,
        hotel.review_arrival, hotel.review_room, hotel.review_service,
        hotel.review_food, hotel.review_details, hotel.review_verdict
      ]);
      console.log(`✓ Inserted hotel: ${hotel.name}`);
    }
    
    await client.query('COMMIT');
    console.log(`\n✅ Seeded ${hotels.length} hotels for March 9, 2026`);
    
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error seeding data:', error);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
