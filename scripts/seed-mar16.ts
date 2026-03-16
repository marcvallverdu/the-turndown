import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// MAR 16 — GRAND HOTEL TREMEZZO + BELMOND HOTEL SPLENDIDO
// Italian Riviera & Lake Como expansion
// ============================================================================

const hotels = [
  {
    name: `Grand Hotel Tremezzo`,
    slug: `grand-hotel-tremezzo`,
    brand: `Grand Hotel Tremezzo`,
    brand_slug: `grand-hotel-tremezzo`,
    location: `Tremezzo, Lake Como, Italy`,
    country: `Italy`,
    country_slug: `italy`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 45.9867,
    longitude: 9.2267,
    price_range: `$$$$`,
    price_from: 800,
    price_to: 4500,
    currency: `EUR`,
    style: `Art Nouveau Lake Palace`,
    best_for: [`Romance`, `Lake Views`, `Historic Grandeur`],
    hero_image: `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200`,
      `https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200`
    ],
    website: `https://www.grandhoteltremezzo.com`,
    booking_url: `https://www.grandhoteltremezzo.com/en/book`,
    tagline: `The art nouveau palace that owns Lake Como's most famous view.`,
    verdict_best_for: `Couples and design lovers who want a hotel that frames Bellagio across the water like a living painting, with service rooted in Italian family tradition.`,
    verdict_skip_if: `You need urban convenience, prefer minimalist interiors, or are uncomfortable with the social choreography of a grand European lake hotel.`,
    verdict_standout: `The floating pool on Lake Como—you are literally swimming in the lake, framed by mountains, staring at Bellagio. Nothing else compares.`,
    rating_overall: 9.3,
    rating_room: 9.2,
    rating_service: 9.4,
    rating_food: 9.1,
    rating_value: 8.4,
    rating_location: 9.8,
    featured: 1,
    review_intro: section([
      `Grand Hotel Tremezzo sits at the geographic and emotional centre of Lake Como, occupying a position on the western shore that faces Bellagio directly across the water. The view is absurd. You step onto your balcony and the entire composition—the peninsula, the mountains splitting into two lake arms, the morning light turning the surface from slate to mercury—looks like someone hired a set designer with an unlimited budget. The hotel has held this view since 1910, when the De Santis family opened it as a liberty-style palace for the European aristocracy making their way along the Grand Tour. Over a century later, the family still runs it. That continuity matters more than any renovation.`,
      `The building itself is art nouveau at its most confident. The façade is a wash of cream and terracotta, with wrought-iron balconies and tall windows that pull the lake into every room. Inside, the public spaces mix period details—frescoed ceilings, terrazzo floors, silk wall coverings—with contemporary touches that feel considered rather than imposed. There is no anxiety about identity here. The hotel knows exactly what it is: an Italian grand dame that has earned the right to age gracefully while still throwing a good party. The gardens slope toward the water through a succession of terraces planted with camellias, azaleas, and old magnolias, and the scent after rain is heavy and sweet, the kind of perfume that perfumers spend careers trying to bottle.`,
      `What separates Tremezzo from Como's other grand hotels—Villa d'Este, the obvious rival—is temperament. Villa d'Este is formal, institutional, a place where heads of state dine and hedge fund conferences convene. Tremezzo is warmer, more personal, still shaped by family ownership in ways that corporate hotels cannot replicate. The staff have been here for years, sometimes decades, and they treat returning guests like distant relatives arriving for a long weekend. First-timers are absorbed into this atmosphere quickly. There is a generosity of spirit at Tremezzo that makes the prices feel less like a transaction and more like membership dues to a very good club. The hotel does not try to be all things to all travelers. It is specifically, unapologetically, a Lake Como hotel, and it does that one thing better than almost anywhere on earth.`
    ]),
    review_arrival: section([
      `Getting to Tremezzo requires commitment, and the journey is part of the seduction. From Milan Malpensa, you drive north through the flatlands of Lombardy until the mountains close in and the road begins to curve along the lake's western shore. The last stretch—narrow, winding, with glimpses of water through stone villages—builds anticipation in a way that no airport transfer in Dubai ever could. You arrive not with a sense of having been deposited but of having traveled, which is a distinction that matters. The hotel entrance faces the road rather than the lake, a practical necessity that creates a satisfying reveal: you walk through the lobby, and then the view hits you through the far windows. Every guest pauses. The staff know this and give you a moment.`,
      `Check-in happens at a reception desk that retains its original proportions—human-scaled, not corporate. The process is efficient but unhurried, conducted in the Italian manner: a genuine inquiry about your journey, an offer of prosecco or fresh lemonade, a sense that the staff are pleased to see you rather than processing your arrival. Luggage disappears with the quiet competence that characterises Italian hotel porters, who seem to treat suitcases as extensions of their guests' dignity. A host walks you to your room, narrating the hotel's geography as you go: the spa is here, the pool is through those doors, the restaurant terrace overlooks the lake from that direction.`,
      `The corridors are wide and well-lit, lined with period furniture and mirrors that catch the lake light from open doorways. The carpet is soft, the air is cool, and the noise of the road vanishes completely once you pass the lobby. By the time your door opens, you have already adjusted to the hotel's pace, which is slower and more deliberate than whatever you left behind. The room key is a proper key, heavy and brass, and the lock turns with a mechanical click that feels satisfyingly analogue. These details are not accidental. Tremezzo understands that arrival is a transition, not a transaction, and it manages every sensory element of that transition with the care of a theatre director blocking a first scene.`
    ]),
    review_room: section([
      `Rooms at Tremezzo divide between those in the original 1910 building and those in the newer Palazzo and Park wings, but the quality is consistent and the design language coherent. The palette draws from the lake: soft blues, muted greens, cream, and touches of gold that catch afternoon light. The furniture mixes antique pieces with contemporary Italian design—a Murano glass lamp beside a nineteenth-century writing desk—and the effect is layered rather than cluttered. Beds are dressed in Italian linen that has the slightly crisp, cool texture of sheets dried in mountain air. The mattresses hit the right firmness: supportive enough for a good night's sleep, soft enough that you sink in rather than perch on top. Pillows are plentiful and varied, and the turndown service leaves a small chocolate and a weather card for the following day.`,
      `The real draw, of course, is the view. Lake-facing rooms command a premium that is entirely justified. You wake to the sight of Bellagio across the water, the mountains behind it, and the light performing its daily show of colour changes. Balconies are generous enough for breakfast—two chairs, a small table, enough room to stretch your legs—and the wrought-iron railings frame the view like a picture. Bathrooms vary by room category but share common virtues: good marble, decent water pressure, separate tubs and showers in the better rooms, and amenities by Acqua di Parma that smell of citrus and clean linen. The tubs in the lakeside suites are positioned by windows, which means you can soak while watching ferries cross between the shores. This is not a gimmick; it is one of those simple pleasures that luxury hotels exist to provide.`,
      `Technology is handled with restraint. The Wi-Fi works well, there are enough outlets for modern needs, and the televisions are large without dominating the rooms. There are no iPads controlling the curtains, no apps required to summon housekeeping. The light switches are where you expect them. The minibar is stocked with Italian wines, local beers, and Nespresso capsules that produce adequate coffee. Air conditioning functions quietly and effectively, which matters during Como's humid summers. The rooms are not the most technologically advanced you will encounter in a luxury hotel, but they are among the most livable—spaces designed around the assumption that you will actually spend time in them, reading, sleeping, watching the lake change moods, rather than merely photographing them and leaving.`
    ]),
    review_service: section([
      `Service at Tremezzo operates on an Italian model that prioritises warmth and intuition over rigid protocol. The staff do not follow scripts; they read guests. A couple celebrating an anniversary will find champagne and flowers without having mentioned the occasion. A family with young children will receive extra towels and pool toys before asking. A solo traveler working from the terrace will be left in peace with periodic, silent coffee refills. This adaptability comes from experience and tenure: many of the senior staff have been at the hotel for fifteen or twenty years, and their knowledge of returning guests is encyclopaedic. They remember room preferences, dietary restrictions, and the names of children who visited as toddlers and now return as teenagers.`,
      `The concierge desk is genuinely useful rather than performatively knowledgeable. They can arrange boat hire for lake exploration, secure tables at Trattoria del Fagiano in Bellagio (which does not take reservations from outsiders), organise cooking classes with local chefs, and book ferry crossings timed to avoid crowds at Villa Carlotta. Their recommendations for restaurants in the surrounding villages are current and honest—they will steer you away from tourist traps and toward the osteria in Lenno where the owner's mother still makes the pasta. This local knowledge is Tremezzo's competitive advantage over newer, more corporate properties.`,
      `Housekeeping is thorough and discreet. Rooms are serviced twice daily, with the evening turndown including drawn curtains, lowered lighting, and fresh water. The timing is good—they seem to know when you have left for dinner and use the window efficiently. Nothing is moved unnecessarily; your books remain open to the right page, your sunglasses stay where you left them. The pool and beach teams are attentive without hovering, offering towels and drinks with a lightness of touch that reflects genuine hospitality training rather than checklist compliance. There is an ease to the service at Tremezzo that takes a few days to fully appreciate. It feels, at its best, like being looked after by people who enjoy their work and take pride in the hotel's reputation—which, given the family ownership, they have a personal stake in maintaining.`
    ]),
    review_food: section([
      `Dining at Tremezzo centres on La Terrazza, the lakeside restaurant that serves as the hotel's culinary anchor. The setting alone would justify a visit: tables arranged along the terrace with views across the water, candles reflecting off the surface as the sky turns from pink to violet to black. But the kitchen delivers substance to match the scenery. Chef Osvaldo Presazzi runs a menu rooted in Lombard traditions—lake fish, risotto, veal—with enough contemporary technique to keep it interesting without tipping into pretension. The risotto with perch from the lake is a house signature, cooked with a patience that most restaurants abandon, the rice releasing its starch slowly until each grain is creamy but distinct. The local burrata, served with tomatoes from the hotel's garden, is simple and devastating.`,
      `Breakfast is a production worth waking early for. The buffet covers Italian and international territory with equal confidence: prosciutto sliced to order, eggs prepared any way you like, pastries that arrive warm from the kitchen, fresh fruit that actually tastes of fruit. The Milanese panettone, lightly toasted and served with mascarpone, is dangerously good. Coffee is serious—proper Italian espresso that delivers the caffeine hit with concentrated flavour rather than American volume. You can eat inside or on the terrace, and the morning view across the lake, with mist still clinging to the mountains, makes the terrace the obvious choice. The staff learn your breakfast preferences quickly and begin preparing your usual order when they see you approaching, which is a small touch that feels disproportionately generous.`,
      `The T Bar by the pool serves lighter fare during the day—salads, sandwiches, grilled fish—and transitions into a cocktail bar in the evening. The Negroni Sbagliato, made with prosecco instead of gin, is the house drink and perfectly suited to the setting. T Spa Restaurant offers a healthier menu for guests emerging from treatments. Room service is available and reliable, though eating in your room when the terrace is available feels like a waste. The wine list leans heavily on Italian producers, as it should, with good representation from Lombardy, Piedmont, and Tuscany. The sommelier is knowledgeable and unpretentious, happy to suggest bottles that pair with the menu without defaulting to the most expensive options. There is no Michelin star here, and the kitchen does not chase one. The food is excellent within its register: sophisticated Italian cooking that respects ingredients and setting, served with warmth and pace that match the lake's own rhythms.`
    ]),
    review_details: section([
      `The floating pool is Tremezzo's signature amenity and its most photographed feature, for good reason. Built directly on the lake, it gives you the sensation of swimming in Como itself, with water at the same level as the lake surface and Bellagio filling your field of vision. The temperature is maintained year-round, which matters given the lake's coolness. Surrounding the pool are loungers and a service team that delivers drinks, towels, and light meals with impressive efficiency. The main infinity pool, located in the gardens, offers a more conventional but equally beautiful swimming experience, with views across manicured grounds to the water. There is also a private beach—small, exclusive, accessed by a short walk through the gardens—where you can swim directly in the lake and lie on pebbles warmed by the sun.`,
      `The T Spa occupies a modern building within the grounds and offers a well-curated menu of treatments that draw on both Italian wellness traditions and contemporary techniques. The fitness centre is adequate for maintenance but not a destination. The real wellness here comes from the lake itself: the air, the light, the pace of life that the setting imposes. Gardens deserve particular mention. Tremezzo's grounds are not merely decorative but genuinely botanical, maintained by a team that takes visible pride in the collection. Centuries-old trees provide shade, seasonal flowers provide colour, and hidden paths lead to viewpoints and benches positioned for maximum contemplation. Walking the grounds at different times of day reveals different characters: bright and energetic in the morning, drowsy and fragrant in the afternoon, romantic and mysterious at dusk.`,
      `Practical matters are handled well. The hotel offers a private boat service to Bellagio and other lake towns, which eliminates the sometimes unreliable public ferry schedule. Parking is available for guests with cars, and the concierge can arrange transfers from Milan airports. The Wi-Fi reaches the gardens and pool areas, which is more useful than it sounds—working from a lounger overlooking Lake Como is a legitimate life improvement. The hotel shop stocks Italian luxury brands alongside local crafts and food products. The library, small but well-stocked, offers a rainy-day refuge with views across the water. These details contribute to the sense that Tremezzo has thought about every aspect of a lake stay and addressed each one with care and taste, creating a property where the only difficult decision is whether to do something or nothing at all.`
    ]),
    review_verdict: section([
      `Grand Hotel Tremezzo is the finest hotel on Lake Como for travelers who want their luxury delivered with warmth, history, and a view that makes you question whether anything else in life really matters. The floating pool is genuinely special, the dining is excellent, the service operates with an Italian generosity that corporate hotels cannot replicate, and the rooms frame the lake like they were designed by someone who understood that the real product here is not thread count or marble but the privilege of waking up in one of the most beautiful places on earth. The family ownership shows in everything: the flowers in the lobby, the retention of staff who know the hotel's rhythms, the willingness to invest in the property year after year without losing its character.`,
      `The competition is real. Villa d'Este, down the shore, offers a more formal and institutional experience that some travelers prefer. Mandarin Oriental Lago di Como, a newer arrival, brings contemporary design and a global brand's infrastructure. Passalacqua, the latest sensation, has captured attention with its intimate scale and editorial buzz. Each has its merits. But Tremezzo occupies a middle ground that none of them quite matches: grand enough to feel special, personal enough to feel welcoming, historic enough to feel authentic, and current enough to feel comfortable. It is the Como hotel that delivers on the promise of the destination without overwhelming you with its own ambitions.`,
      `You leave Tremezzo with the lake in your bloodstream. The light across the water at sunset, the scent of the gardens after rain, the particular warmth of the staff who said goodbye as though they expected you back—these are the memories that persist long after the details of room numbers and restaurant menus have faded. This is what a great hotel does: it becomes inseparable from the place, so that remembering one means remembering the other. Grand Hotel Tremezzo is not just the best way to experience Lake Como; for many travelers, it is Lake Como, and no amount of alternatives will change that.`
    ])
  },
  {
    name: `Belmond Hotel Splendido`,
    slug: `belmond-hotel-splendido`,
    brand: `Belmond`,
    brand_slug: `belmond`,
    location: `Portofino, Liguria, Italy`,
    country: `Italy`,
    country_slug: `italy`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 44.3033,
    longitude: 9.2100,
    price_range: `$$$$`,
    price_from: 1200,
    price_to: 5500,
    currency: `EUR`,
    style: `Riviera Legend`,
    best_for: [`Romance`, `Mediterranean Views`, `Celebrity Heritage`],
    hero_image: `https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200`,
      `https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200`
    ],
    website: `https://www.belmond.com/hotels/europe/italy/portofino/belmond-hotel-splendido`,
    booking_url: `https://www.belmond.com/hotels/europe/italy/portofino/belmond-hotel-splendido/book`,
    tagline: `The hillside monastery where Hollywood fell in love with the Italian Riviera.`,
    verdict_best_for: `Romantic travelers who want the definitive Riviera experience: a hillside perch above Portofino, decades of Hollywood glamour soaked into the walls, and Mediterranean light that makes everything look like a film still.`,
    verdict_skip_if: `You need a beach at your doorstep, prefer modern interiors, or find the cult of Portofino's exclusivity more off-putting than alluring.`,
    verdict_standout: `The terrace at sunset. The harbour below turns gold, the fishing boats rock gently, the parasol pines frame the view, and you understand why Elizabeth Taylor kept coming back.`,
    rating_overall: 9.2,
    rating_room: 9.0,
    rating_service: 9.3,
    rating_food: 9.1,
    rating_value: 7.8,
    rating_location: 9.7,
    featured: 1,
    review_intro: section([
      `Belmond Hotel Splendido clings to the hillside above Portofino like a handsome ruin that someone forgot to let decay. The building started life as a sixteenth-century Benedictine monastery, which explains the thick stone walls, the terraced gardens, and the sense of remove from the port below. The monks chose well: the position commands a view of the harbour, the headland, and the open Ligurian Sea that is so consistently beautiful it begins to feel like a hallucination. The conversion to a hotel happened in the early twentieth century, and the guest list since then reads like a casting call for every major film of the last seventy years. Richard Burton and Elizabeth Taylor, Humphrey Bogart and Lauren Bacall, Clark Gable, Rex Harrison—the bar practically rings with their ghosts. This history is not incidental to the hotel's appeal; it is the hotel's appeal. You come to Splendido to feel like a character in a story that has been running since before you were born.`,
      `The hotel is seasonal, open roughly from April to November, which gives it a rhythm that year-round properties lack. Opening day feels like the start of a season, a curtain rising on a show that will run for seven months before the set is struck. This seasonality preserves something precious: the sense that the hotel is an event rather than a service, that staying here is participation in a tradition rather than a commercial transaction. When Splendido closes for winter, it retreats into the hillside and waits, and when it opens again in spring, the wisteria has bloomed, the pool has been polished, and the staff have returned from wherever Italian hotel workers go when the season ends—refreshed, tanned, and ready to perform.`,
      `What makes Splendido work in 2026, beyond the history and the view, is Belmond's careful stewardship. The LVMH-owned brand has invested in the property without modernising it into anonymity. The bones remain: the stone corridors, the terracotta tiles, the wooden shutters that creak when you open them to the morning light. Contemporary comforts have been layered in—better mattresses, updated bathrooms, a spa that did not exist when Bogart was mixing martinis on the terrace—but the spirit is intact. This is a hotel that understands its own mythology and respects it enough to let it breathe rather than trying to improve it. The mythology, after all, is what you are buying.`
    ]),
    review_arrival: section([
      `Reaching Splendido requires navigating one of the most famously narrow roads in European hospitality. From the coast road, you turn toward Portofino, and the road immediately tightens to a single lane that winds through olive groves and past stone walls draped in bougainvillea. If you are driving yourself, the experience is mildly terrifying; if you have opted for the hotel transfer, you can sit back and watch as the driver handles oncoming traffic, blind corners, and the occasional Vespa with the calm authority of someone who has done this ten thousand times. The road is part of the experience. By the time you arrive, you have earned the view.`,
      `The entrance is set into the hillside, modest by grand hotel standards: a gate, a short drive, a forecourt where the hotel rises above you in layers of cream stone and green shutters. Staff appear immediately—not in a rush, but with the relaxed confidence of people welcoming you to their home. Luggage is handled, the car is parked, and you are guided into the lobby, which is cool and dim after the Ligurian sun. The scent is distinctive: old stone, lemon verbena, and something resinous from the pines that surround the property. Check-in is handled with Italian ease, more conversation than procedure, with cold drinks offered and consumed while someone locates your room key and asks about your journey.`,
      `Then comes the terrace. Every arrival at Splendido involves the terrace reveal, and no amount of prior knowledge or photographs prepares you for it. You step through the doors and the harbour of Portofino opens below you—the painted houses, the fishing boats, the yachts, the green headland curving into the sea. The perspective is elevated enough to give you the full composition but close enough that you can hear the harbour sounds: the gentle knock of boats against the quay, the faint buzz of conversation from the piazzetta, a church bell marking the hour. The staff let you absorb this. They have seen the reaction before and they know it cannot be hurried. After a moment, someone gently suggests showing you to your room, and the spell shifts rather than breaks.`
    ]),
    review_room: section([
      `Rooms at Splendido vary enormously in size, aspect, and character, a consequence of converting a monastery into a hotel over multiple decades. The best rooms face the harbour, with balconies or terraces that provide private versions of the public terrace's view. These are worth the premium—sometimes a steep one—because the view is the reason you are here, and having it from your bed changes the nature of the stay. You will wake at dawn, open the shutters, and see the harbour in its most honest light: no tourists yet, the fishing boats heading out, the water still and silver. That moment alone justifies the room upgrade.`,
      `The interiors are traditional Italian country house: terracotta floors, whitewashed walls, antique furniture in dark wood, fabrics in muted florals and stripes. The aesthetic has been refreshed but not reinvented—there is no temptation to Instagram minimalism here, no terrazzo-and-brass makeover. The rooms feel like rooms, not design statements, and their comfort is physical rather than visual. Beds are good, dressed in Italian linen that softens with each wash. Wardrobes are real wardrobes, not sliding panels, and they smell faintly of cedar. Bathrooms have been modernised sensibly, with good marble, strong showers, and amenities by the house line that smell of Mediterranean herbs. Some of the larger suites retain original monastery features—stone arches, small niches, and the occasional exposed beam that reminds you of the building's ecclesiastical past.`,
      `Air conditioning works effectively, which matters during Ligurian summers when the hillside traps heat. The Wi-Fi is reliable. The minibars are stocked with Italian wines and local specialities. But the rooms' real amenity is silence. The hillside location, the thick monastery walls, and the absence of through-traffic create a quiet that is almost tactile. At night, with the shutters open, you hear nothing but crickets, the distant murmur of the harbour, and occasionally the low note of a ferry horn. This silence is Splendido's secret luxury—more valuable than any thread count, more restorative than any spa treatment. The rooms deliver what the best hotel rooms always deliver: a sense of refuge, of being held in a space that has been prepared with care for your comfort and your peace.`
    ]),
    review_service: section([
      `Service at Splendido follows the seasonal Italian model: a core team that returns year after year, supplemented by newcomers who are trained to match. The returning staff are the hotel's greatest asset. They know the property's rhythms, the quirks of individual rooms, the best table on the terrace for sunset, and the shortcut through the gardens that avoids the steepest stairs. Their loyalty to the hotel is palpable and creates a continuity that guests sense even on a first visit. You feel that you are being looked after by people who care about this specific place, not by employees rotating through a brand's portfolio.`,
      `The tone is Italian in the best sense: warm, expressive, generous, with an instinct for when to engage and when to withdraw. Staff at Splendido are comfortable with conversation in a way that British or Japanese hotel staff often are not—they will recommend a dish with genuine passion, debate the merits of a hiking trail, or share a local legend about the monastery's original monks. This personality does not cross into overfamiliarity; there is a line, and the better staff walk it with instinctive grace. The concierge is knowledgeable about the Ligurian coast beyond Portofino, able to arrange boat trips to San Fruttuoso, hiking in the Parco Naturale, or dinner reservations in the harbour villages that most tourists overlook.`,
      `The pool service is excellent, with attentive staff managing a relatively compact space without creating congestion. The restaurant team deserve particular praise for their ability to pace meals to the Italian rhythm—never rushing, never dragging—and for their knowledge of the wine list, which spans the local Vermentino and Pigato through to broader Italian selections. Housekeeping operates with the thoroughness you expect at this level, though the monastery architecture occasionally creates challenges: some rooms require navigating narrow corridors and unexpected stairs, and staff handle these logistics with impressive good humour. Overall, the service at Splendido feels less like a luxury hotel operation and more like the running of a very well-managed private estate, where the hosts take personal pride in every guest's experience.`
    ]),
    review_food: section([
      `La Terrazza is the restaurant that matters, and it matters primarily because of where it sits. The terrace extends from the hotel's south face, suspended above the harbour with the kind of panoramic exposure that makes food critics forget to take notes. Tables are shaded by parasols and framed by climbing plants, and the light at lunch is the warm, diffused gold that makes the Italian Riviera the Italian Riviera. The menu is Ligurian at heart: pesto made with Prà basil and pine nuts from the hills, trofie pasta twisted by hand, fresh fish pulled from the sea that morning and grilled with olive oil and lemon. The cooking is not revolutionary, but it does not need to be. When your ingredients are this good and your setting this extraordinary, the kitchen's job is clarity, not cleverness, and La Terrazza's kitchen understands this perfectly.`,
      `Breakfast is a languid affair that rewards early rising. The terrace fills with morning light, and the harbour below is at its quietest and most photogenic. The spread is Italian-continental: fresh pastries, fruit, prosciutto, cheese, eggs cooked to order, and coffee that arrives strong and hot in proper cups. The orange juice is squeezed fresh and tastes of actual oranges, a distinction that sounds trivial until you have endured the powdered versions served at lesser hotels. You can linger here for an hour or more, reading, watching the boats, eating another cornetto because the first one was too good to be a singular event. The staff pace the service to the mood of the table, which is exactly how breakfast should work in a place where the morning is the destination.`,
      `The poolside restaurant offers lighter options through the day—salads, grilled fish, focaccia from the local bakery—and the quality is higher than you might expect from a pool kitchen. The bar, both inside and on the terrace, serves proper Ligurian aperitivi: the Spritz here is made with local prosecco and tastes of the coast. The wine list is a strength, particularly for regional selections. The Vermentino from the Cinque Terre vineyards pairs beautifully with the seafood, and the sommelier can guide you through the Ligurian whites with genuine enthusiasm. Room service is available but feels wrong at Splendido—you have a terrace, you have a view, you have a restaurant that serves food this good in a setting this beautiful. Use them.`
    ]),
    review_details: section([
      `The pool is beautifully positioned on a terrace cut into the hillside, with views over the harbour and the sea. It is not enormous—space on the hillside is finite—but it is attractive and well-maintained, surrounded by loungers and shaded areas that fill predictably during peak hours. Smart guests claim their spots early and hold them through the afternoon. The pool service delivers drinks and food efficiently, and the atmosphere is more relaxed than competitive, though high season brings a certain jostling for the best positions. For those who prefer salt water, the hotel operates Splendido Mare, a sister property on the harbour itself with direct access to the waterfront. A shuttle connects the two, and Mare's position provides an entirely different Portofino experience—ground level, immersed in the village's daily life, with boats passing close enough to touch.`,
      `The spa offers a focused menu of treatments in a space that makes the most of its limited footprint. Massages and facials are the core offerings, executed with skill using products that smell of the Mediterranean. The fitness centre is modest but functional, equipped with the essentials for maintaining a routine. Honestly, the best exercise at Splendido is the walk to Portofino: a steep, winding path through olive groves and gardens that drops you into the village in about fifteen minutes. The return journey is more demanding—uphill, usually in the warmth—but the fitness benefit and the views make it preferable to any treadmill. The hotel's gardens are themselves an amenity, layered down the hillside in terraces planted with Mediterranean species: bougainvillea, jasmine, oleander, and the parasol pines that define the Ligurian landscape.`,
      `Practical considerations: Portofino is small and exclusive, which means limited shopping, limited nightlife, and limited tolerance for crowds. During peak summer days, day-trippers from cruise ships and coaches can overwhelm the harbour. Splendido's hillside position insulates you from this—you look down on the chaos rather than wading through it—but the harbour itself can lose its charm between noon and four on busy days. The hotel arranges boat excursions that provide an alternative, taking you along the coast to swim in quiet coves and visit villages that the day-trippers never reach. The helicopter transfer from Genoa or Milan is available for those who wish to skip the road entirely, arriving with maximum drama and minimum traffic anxiety. These logistics are part of the Splendido experience: the hotel exists in a place that is difficult to reach and impossible to forget, and the difficulty is part of the magic.`
    ]),
    review_verdict: section([
      `Belmond Hotel Splendido is the Italian Riviera distilled into a single hotel. The monastery bones, the hillside gardens, the harbour view, the history of Hollywood royalty drinking Negronis on the terrace—these elements combine into an experience that no amount of contemporary design or brand engineering can replicate. The hotel succeeds because it is a product of its place in a way that most luxury hotels merely aspire to. Portofino without Splendido would still be Portofino, but Splendido without Portofino would be unimaginable. The two are intertwined, each making the other more compelling, and a stay at the hotel is really a stay in the village, experienced from the most privileged vantage point available.`,
      `The limitations are real and worth acknowledging. The prices are extreme, particularly for the harbour-view rooms, and the value proposition depends heavily on the view you are paying for. The rooms, while comfortable, are not the most contemporary or technologically advanced. The seasonal operation means availability is compressed into seven months, driving rates higher. And Portofino itself, for all its beauty, is tiny—two or three days exhaust its diversions, and longer stays require excursions along the coast. These are the trade-offs of a destination hotel: you come for a specific experience, and when that experience is complete, you leave.`,
      `But what an experience it is. There are moments at Splendido—watching the sunset paint the harbour from the terrace, eating trofie al pesto while the sea glitters below, walking through the gardens as the scent of jasmine thickens in the evening air—that rank among the finest in luxury travel. These are not manufactured moments; they are products of place, time, and a hotel that has spent decades learning how to frame them. Belmond's stewardship has preserved what matters while improving what needed improving, and the result is a hotel that feels simultaneously timeless and vital. You leave Splendido lighter than you arrived, carrying with you the particular warmth of the Ligurian light and the knowledge that some places on earth really are as beautiful as people say.`
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
  console.log(`Starting Mar 16 seed...`);
  console.log(`Hotels to insert: ${hotels.length}`);

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

  console.log(`Mar 16 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
