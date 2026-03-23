import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// MAR 23 — FOUR SEASONS KOH SAMUI + SONEVA KIRI
// ============================================================================

const hotels = [
  {
    name: `Four Seasons Resort Koh Samui`,
    slug: `four-seasons-koh-samui`,
    brand: `Four Seasons`,
    brand_slug: `four-seasons`,
    location: `Koh Samui, Thailand`,
    country: `Thailand`,
    country_slug: `thailand`,
    region: `Asia`,
    region_slug: `asia`,
    latitude: 9.5656,
    longitude: 100.0620,
    price_range: `$$$$`,
    price_from: 700,
    price_to: 3200,
    currency: `USD`,
    style: `Hillside Tropical Retreat`,
    best_for: [`Romance`, `Beach`, `Wellness`],
    hero_image: `https://images.unsplash.com/photo-1540541338287-41700c1d5072?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200`,
      `https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200`
    ],
    website: `https://www.fourseasons.com/kohsamui`,
    booking_url: `https://www.fourseasons.com/kohsamui/book`,
    tagline: `A hillside coconut plantation turned into Thailand's most polished island escape.`,
    verdict_best_for: `Couples and honeymooners seeking a private villa experience with Four Seasons service, excellent beaches, and Thai wellness traditions done properly.`,
    verdict_skip_if: `You want flat terrain (this resort is steep), lively nightlife within walking distance, or prefer the raw authenticity of smaller Thai guesthouses.`,
    verdict_standout: `The private plunge pools in every villa, each angled toward the Gulf of Thailand so the water appears to spill directly into the sea.`,
    rating_overall: 9.3,
    rating_room: 9.4,
    rating_service: 9.5,
    rating_food: 9.1,
    rating_value: 8.6,
    rating_location: 9.2,
    featured: 1,
    review_intro: section([
      `Four Seasons Resort Koh Samui occupies a former coconut plantation on the northwestern tip of the island, a stretch of hillside that drops steeply toward a private bay. The setting is the first thing to understand about this property: it is vertical. Villas cascade down the slope in tiers, connected by paths and an internal buggy system that operates continuously. If you have mobility concerns or simply dislike inclines, this matters. For everyone else, the topography is the resort's defining advantage. Each villa sits above the one below, creating privacy through elevation rather than distance. You look out over treetops and ocean, not into your neighbor's bathroom.`,
      `The resort opened in 2007 and has matured beautifully. Tropical properties age differently than urban ones—salt air and humidity test materials constantly—and Four Seasons has invested in maintenance that keeps the villas feeling fresh without erasing the patina that makes a resort feel settled rather than just opened. The coconut palms from the original plantation remain, their trunks now thick and gnarled, lending the grounds a sense of place that imported landscaping cannot achieve. Between the palms, frangipani and bougainvillea provide color, and the overall impression is of a property that grew from the hillside rather than being imposed upon it.`,
      `What distinguishes Four Seasons Koh Samui from the island's other luxury options—and there are many, from Banyan Tree to Conrad to the clutch of independent villas along the northern coast—is the combination of polished service and genuine Thai character. The resort feels Thai in a way that some international-brand properties do not. The spa draws on actual Thai healing traditions rather than generic "Asian-inspired" treatments. The food program includes serious Thai cuisine alongside the expected international options. The staff, almost entirely Thai, bring a warmth and grace that feels cultural rather than trained. Four Seasons has been smart enough to let Koh Samui be Koh Samui.`
    ]),
    review_arrival: section([
      `Getting to Four Seasons Koh Samui requires either a flight to the island's small airport—operated exclusively by Bangkok Airways, which keeps fares high but volumes manageable—or a ferry from the mainland, which is cheaper but slower and significantly less comfortable. The airport transfer takes about thirty minutes, winding through the island's commercial strip before turning off onto a private road that climbs through palm groves to the resort entrance. The transition from the mild chaos of Samui's main road to the calm of the resort grounds is abrupt and welcome.`,
      `The reception area sits at the top of the hill, an open-air pavilion with views that immediately explain why this location was chosen. Staff greet you with cold towels and a chilled lemongrass drink, and the check-in process is handled while you take in the panorama: the Gulf of Thailand stretching to the horizon, fishing boats dotting the water, the faint outline of Koh Phangan visible on clear days. It is a calculated reveal, and it works. The administrative details—passport scanning, credit card authorization—happen almost peripherally while your attention is held by the view.`,
      `A host then drives you to your villa by buggy, navigating the steep paths with practiced ease. The journey downhill takes a few minutes and doubles as an orientation: here is the gym, here is the spa, here is the beachfront restaurant. Your villa door opens onto a private terrace with plunge pool, and the host walks you through the space—where the lights are controlled, how the outdoor shower works, which button summons a buggy. The whole process, from car to villa, takes perhaps twenty minutes. By the time the host leaves, you have already kicked off your shoes and the flight feels distant. That speed of decompression is a skill, and this resort has perfected it.`
    ]),
    review_room: section([
      `The villas at Four Seasons Koh Samui come in several configurations, but the bones are consistent: a generous bedroom with floor-to-ceiling glass facing the ocean, an outdoor terrace with private plunge pool, a bathroom that opens to the elements, and enough indoor-outdoor flow that the distinction between the two becomes academic. The smallest category—the One-Bedroom Pool Villa—measures around 70 square meters of interior space, which is ample for two people, and the terrace roughly doubles that. You live outside here. The bed faces the view, the bathtub faces the view, and the pool faces the view. The designers understood the assignment.`,
      `Materials are warm and natural: teak floors, limestone walls, rattan furniture, cotton linens in whites and creams. The palette avoids the heavy dark woods that many Southeast Asian resorts favor, choosing instead a lighter aesthetic that feels breezy and modern. The villas have been refreshed since opening, with updated fixtures and technology, but the original design language was sound enough that the changes feel evolutionary rather than corrective. The outdoor showers are a particular pleasure—stone-walled enclosures open to the sky, with rain heads that deliver water at exactly the right temperature and pressure. Showering while watching clouds drift overhead is one of those simple tropical luxuries that never gets old.`,
      `The beds deserve specific mention. Four Seasons has long taken sleep seriously, and the mattresses here are exceptional: firm enough to support, soft enough to sink into, dressed in high-thread-count cotton that stays cool in the humidity. Pillows come in multiple firmnesses, and a pillow menu is available for the particularly discerning. The blackout curtains work completely, which matters when the tropical sun arrives at six in the morning with alarming enthusiasm. Air conditioning is quiet and effective, though on cooler evenings—December through February—you can open the sliding doors and sleep to the sound of waves and cicadas. That is the better option when the weather allows it.`
    ]),
    review_service: section([
      `Four Seasons service worldwide operates on a template of anticipation and reliability, and Koh Samui executes that template with the additional warmth that Thai culture brings to hospitality. The staff here smile because they mean it, not because a training manual told them to. This is a distinction you feel rather than analyze, but it changes the atmosphere of the entire resort. Interactions are warm without being intrusive, attentive without hovering, and genuinely helpful in ways that go beyond the transactional. When you mention offhandedly that you liked the green papaya salad at lunch, it appears on your villa terrace the next afternoon without being ordered.`,
      `The buggy drivers deserve particular credit. In a resort this steep, you summon buggies frequently—to meals, to the beach, to the spa, back to your villa—and the response time is consistently under five minutes. The drivers know the resort intimately and double as informal guides, pointing out wildlife (monitor lizards are common on the hillside paths), recommending dishes, and sharing local knowledge. They operate in the space between staff and friends, which is precisely where the best hospitality lives. The concierge team handles island logistics with competence: boat trips to Ang Thong Marine Park, Muay Thai experiences, temple visits, restaurant reservations in Fisherman's Village.`,
      `Housekeeping is thorough and respectfully timed. Rooms are serviced twice daily, with the evening turndown including small touches—a folded towel animal on the bed (charming or cheesy depending on your disposition), mosquito coils lit on the terrace, curtains drawn, the minibar checked and restocked. Personal items are never moved unnecessarily, and the staff have a knack for making the villa feel refreshed without making it feel invaded. The spa reception team coordinates scheduling with skill, fitting treatments around meal times and activities without requiring you to plan your own logistics. This invisible coordination—the sense that someone is thinking about the flow of your day so you don't have to—is the hallmark of Four Seasons service at its best.`
    ]),
    review_food: section([
      `The food program at Four Seasons Koh Samui is anchored by three venues: Koh Thai Kitchen, the beachfront restaurant serving Thai cuisine; Pla Pla, the Mediterranean-influenced seafood grill near the pool; and the all-day dining room that handles breakfast and international options. Of these, Koh Thai Kitchen is the star, and it punches well above what most resort Thai restaurants achieve. The kitchen takes southern Thai cooking seriously—the curries carry real heat, the herbs are fresh and pungent, the fish sauce is funky in the way good fish sauce should be. The massaman curry uses beef cheek braised until it collapses, swimming in a sauce that balances sweet, sour, salty, and spicy with genuine skill. The som tum arrives with a mortar-pounded texture that shows it was made to order, not batch-prepared.`,
      `Breakfast is a strength. The buffet is extensive—tropical fruits cut that morning, freshly baked pastries, a congee station with toppings that rotate daily, an egg station that handles every preparation—but the real move is the à la carte Thai breakfast options. The khao tom (rice soup) with poached egg and crispy garlic is a perfect morning dish: light, warming, savory. The Thai omelette, stuffed with minced pork and served with sriracha, is the kind of thing you crave once you have had it. Coffee is properly made, with single-origin Thai beans available alongside the standard espresso offerings. The fresh coconut water, served in the shell, tastes different from anything bottled.`,
      `Pla Pla works best at sunset, when the beachfront setting comes alive. The grilled seafood is reliable—the prawns are local and sweet, the fish is line-caught and simply prepared—though the Mediterranean influences feel less assured than the Thai cooking elsewhere on property. The wine list is competent without being exciting, which is forgivable given that most guests are drinking cocktails or cold Singha beer in this climate. Room service maintains kitchen quality and is available at practical hours. For travelers venturing off-property, the concierge can arrange dinner at Fisherman's Village or the excellent restaurants along Bophut beach, but honestly, the on-site options are good enough that leaving feels unnecessary rather than limiting.`
    ]),
    review_details: section([
      `The beach at Four Seasons Koh Samui is a private crescent of soft sand that faces west, catching the afternoon sun and providing sunsets that are genuinely spectacular. The water is calm—the bay is protected by a headland—and the swimming is safe and pleasant. Beach staff set up loungers each morning, offer towels and water without being asked, and will bring food and drinks from the nearby restaurant. During high season, the beach is busy by luxury resort standards, which means perhaps thirty loungers are occupied. It never feels crowded. The snorkeling directly off the beach is modest, but the resort arranges boat trips to better sites within the marine park.`,
      `The spa is built into the hillside, with treatment rooms that look out through floor-to-ceiling glass into the jungle canopy. The menu spans Thai massage (the real thing, with proper stretching and pressure work that leaves you reorganized), oil-based relaxation treatments, herbal compresses, and facial therapies. The therapists are skilled and consistent—you will not get the variance in quality that plagues many resort spas. The signature treatment, a two-hour Thai herbal journey, uses locally sourced herbs in a compress that is heated and pressed along energy lines. It is both therapeutic and deeply relaxing. The gym is small but well-equipped, with a dedicated yoga pavilion that hosts daily classes overlooking the bay.`,
      `The resort's infinity pool sits at mid-level on the hillside and is long enough for proper laps. The water is maintained at a temperature that feels refreshing rather than tepid—a detail that matters in the tropics. Families with young children should note that the resort accommodates them gracefully, with a kids' club and family pool, but the overall atmosphere leans romantic and adult. The steep terrain and open-air villa design require supervision of small children, and the resort is honest about this during booking. Two tennis courts sit near the beach, and equipment is complimentary. The resort can arrange private island tours, Thai cooking classes, and visits to local temples and markets—all handled with the logistical polish you'd expect from the brand.`
    ]),
    review_verdict: section([
      `Four Seasons Koh Samui does what the brand does best: it takes a strong location, applies serious resources and genuine care, and produces an experience that runs smoothly enough to feel effortless. The hillside setting provides privacy and views that flat beachfront resorts cannot match. The Thai character of the food and spa programs gives the property an identity beyond the Four Seasons template. The service is warm and anticipatory without tipping into performance. For couples celebrating something, for honeymooners who want polish without pretension, for anyone seeking a tropical escape where the details have been properly thought through, this resort delivers.`,
      `The limitations are worth noting. The steep terrain is not for everyone—guests with mobility challenges or very young children will find the constant elevation changes tiring. Koh Samui itself is a developed tourist island; if you are seeking undiscovered Thailand, this is not it. The flights via Bangkok Airways carry a premium that feels like a toll booth. And the pricing, while reasonable by Four Seasons standards, places this firmly in the luxury category for a Thai island where alternatives exist at a fraction of the cost. The question is whether Four Seasons execution justifies the premium over, say, a well-run independent villa. For most guests, it does.`,
      `The resort competes directly with Banyan Tree Samui, which offers similar villa-with-pool configurations on a different part of the island, and with Conrad Koh Samui, which provides a more contemporary aesthetic at somewhat lower rates. Against Banyan Tree, Four Seasons wins on food and service consistency. Against Conrad, it wins on warmth and Thai character. Neither competitor matches the combination of location, service, and culinary quality that Four Seasons has assembled here. You leave Koh Samui sun-darkened and rested, with the particular contentment that comes from a place where nothing went wrong because someone made sure nothing would.`
    ])
  },
  {
    name: `Soneva Kiri`,
    slug: `soneva-kiri`,
    brand: `Soneva`,
    brand_slug: `soneva`,
    location: `Koh Kood, Thailand`,
    country: `Thailand`,
    country_slug: `thailand`,
    region: `Asia`,
    region_slug: `asia`,
    latitude: 11.6430,
    longitude: 102.5590,
    price_range: `$$$$`,
    price_from: 1800,
    price_to: 8000,
    currency: `USD`,
    style: `Barefoot Luxury Jungle`,
    best_for: [`Seclusion`, `Sustainability`, `Families`, `Stargazing`],
    hero_image: `https://images.unsplash.com/photo-1540541338287-41700c1d5072?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200`,
      `https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200`
    ],
    website: `https://soneva.com/soneva-kiri`,
    booking_url: `https://soneva.com/soneva-kiri/book`,
    tagline: `Barefoot luxury on Thailand's last unspoiled island—where your shoes stay in a bag and the stars come out in force.`,
    verdict_best_for: `Families with children who want genuine adventure, eco-conscious travelers seeking sustainability with substance, and anyone craving true seclusion without sacrificing comfort.`,
    verdict_skip_if: `You want nightlife, easy shopping access, quick connections to other destinations, or find the barefoot philosophy more gimmick than genuine.`,
    verdict_standout: `The treetop dining pod, hoisted by cable into the rainforest canopy where a flying waiter zip-lines your courses to you forty feet above the ground.`,
    rating_overall: 9.5,
    rating_room: 9.6,
    rating_service: 9.3,
    rating_food: 9.4,
    rating_value: 8.2,
    rating_location: 9.7,
    featured: 1,
    review_intro: section([
      `Soneva Kiri sits on Koh Kood, Thailand's fourth-largest island and, by a significant margin, its least developed. Getting here requires effort: a flight from Bangkok to Trat province, followed by a speedboat across the Gulf of Thailand that takes roughly an hour depending on sea conditions. Soneva operates its own private airstrip with charter flights from Bangkok, which cuts the journey to ninety minutes door-to-resort but adds substantially to the cost. The remoteness is deliberate. Sonu Shivdasani, who founded Soneva with his wife Eva, has always chosen locations that require a journey, believing that the act of arrival should feel like crossing a threshold into a different world. Koh Kood delivers on that promise. The island has no nightclubs, no 7-Elevens, no traffic jams. What it has are mangrove forests, waterfalls, fishing villages, and water so clear you can see the sand patterns from a boat deck.`,
      `The resort sprawls across a forested headland, with villas scattered through the jungle at respectful distances from one another. The design philosophy is Soneva's trademark "intelligent luxury"—properties that look casual, even rustic, but are underpinned by serious investment in sustainability, technology, and guest comfort. The structures use reclaimed wood, local stone, and thatched roofing that blends with the forest canopy. From above, the resort is nearly invisible. From inside, each villa feels like a treehouse built by someone with an unlimited budget and a deep respect for the forest around it. This is not the manicured tropical aesthetic of a Maldivian resort; it is wilder, more textured, more alive.`,
      `What makes Soneva Kiri remarkable is the ambition behind its apparent simplicity. The resort runs a serious sustainability program—waste-to-wealth recycling, an organic garden that supplies the kitchens, a coral restoration initiative, water bottling on-site to eliminate plastic. The observatory houses a telescope powerful enough to see Saturn's rings. The children's program, The Den, is a standalone complex of treehouses, water slides, and creative workshops that may be the best kids' club in Southeast Asia. The food program spans nine dining concepts. None of this is obvious from the outside. The resort presents itself as a barefoot beach escape, but beneath that surface is a machine running on conviction and capital. Soneva Kiri does not just look different from other luxury resorts; it thinks differently.`
    ]),
    review_arrival: section([
      `The journey to Soneva Kiri is part of the experience, whether you choose to see it that way or not. The private charter option—a turboprop from Bangkok's Don Mueang airport to the resort's own grass airstrip on Koh Kood—is the preferred route for guests willing to pay the supplement. The flight crosses the Thai countryside, passing over rice paddies and fishing villages before the Gulf islands appear below. Landing on a grass runway surrounded by jungle is theatrical in the best sense. Staff meet you at the strip with cold towels and coconut water, and a short drive through forest delivers you to the resort. The entire transfer from Bangkok takes under two hours, which is remarkable given how remote the destination feels.`,
      `The commercial route—scheduled flight to Trat, then speedboat—is longer and rougher, particularly if seas are choppy. Soneva arranges everything, but the boat ride can be uncomfortable for those prone to motion sickness. Either way, arrival at the resort dock involves stepping onto a wooden jetty where a host is waiting with your villa assignment and a genuine smile. Shoes come off here. Literally. Soneva provides a cloth bag for your footwear, and you are encouraged to go barefoot for the duration of your stay. The paths are smooth and well-maintained, and after an initial self-consciousness, most guests adapt within an hour. Something about bare feet on warm earth changes your posture, slows your pace, reconnects you with the ground.`,
      `Your host drives you to your villa in an electric buggy, navigating jungle paths dappled with light. The briefing is relaxed—here is the ice cream parlor (complimentary, all day), here is the cinema (open-air, films nightly), here is the organic garden, here is The Den for the children. The villa door opens into a space that makes you involuntarily exhale. The proportions are dramatic—double-height ceilings, sliding walls that disappear to reveal the ocean or the jungle—and the materials are raw and warm. Your host shows you the outdoor bathroom, the private pool, the sundeck, and then leaves you alone. The silence after they go is profound: birdsong, waves, the creak of bamboo in the wind. You have arrived somewhere that takes its distance from the world seriously.`
    ]),
    review_room: section([
      `The villas at Soneva Kiri are among the largest in Southeast Asian hospitality. The entry-level Cliff Pool Villa Reserve offers roughly 250 square meters of indoor space, plus a private pool, outdoor bathroom, sundeck, and garden. The larger residences—some with up to six bedrooms—reach proportions that feel closer to private estates than hotel rooms. The design language throughout is "refined rustic": exposed wooden beams, polished concrete floors, woven rattan screens, and stone walls that feel solid and cool to the touch. Nothing is painted or plastered. The materials are honest, and their imperfections—the grain of the wood, the texture of the stone—become part of the aesthetic.`,
      `The bedrooms are generous and calm. The beds are built from reclaimed timber, dressed in organic cotton linens that feel crisp and breathable. Mosquito nets drape from the ceiling, more for atmosphere than necessity—the villa screening is effective—though sleeping beneath them with the doors open to the night air is one of those tropical pleasures that justifies the journey. The mattresses are excellent, firm with a yielding top layer, and the pillow selection is extensive. Air conditioning is available but the villa design encourages natural ventilation: the cross-breezes through the open walls keep temperatures comfortable through most of the year, and ceiling fans supplement on still nights.`,
      `The bathrooms are where Soneva Kiri's design philosophy reaches its most expressive. Many villas feature outdoor bathrooms carved from natural rock, with rain showers that flow between boulders and freestanding tubs positioned to face the ocean or the jungle canopy. The effect is primal and luxurious simultaneously—you are bathing in nature, but the water pressure is perfect and the products (Soneva's own line, made with ingredients from the resort's garden) are excellent. Indoor bathrooms provide backup for rainy days, with double vanities, heated towel rails, and lighting that manages to be flattering without feeling artificial. The overall villa experience is one of space, texture, and a particular kind of freedom. You move between indoor and outdoor, between clothed and unclothed, between connected and unreachable, and the architecture facilitates all of it without judgment.`
    ]),
    review_service: section([
      `Soneva calls its villa hosts "Mr. or Ms. Friday"—a Robinson Crusoe reference that signals the brand's playful self-awareness. Each villa is assigned a dedicated host who functions as butler, concierge, and guide. The quality of this relationship varies, as it does with any personalized service model, but the best Mr. Fridays are exceptional: anticipating meal preferences, arranging activities, managing children's schedules, and providing local knowledge with genuine enthusiasm. They learn your rhythms quickly—when you wake, when you prefer not to be disturbed, how you take your coffee—and adjust their presence accordingly. The relationship feels less like staff-guest and more like a skilled host looking after friends.`,
      `Beyond the villa hosts, the broader team operates with the relaxed professionalism that Soneva cultivates across its properties. The tone is informal—first names, casual dress, easy conversation—but the competence beneath the informality is real. Restaurant staff know the menus thoroughly and can guide you through unfamiliar Thai dishes with knowledge rather than scripts. The spa therapists are properly trained and maintain consistency across treatments. The children's club staff engage with kids as individuals, remembering names, interests, and fears. This consistency across departments suggests a service culture that runs deeper than training manuals.`,
      `Where Soneva Kiri's service occasionally falters is in precision. The barefoot philosophy extends to a certain looseness in timing and logistics that polished brands like Four Seasons would not tolerate. Meals can arrive slowly. Buggy waits can stretch beyond comfort. Information between departments does not always flow seamlessly. These are minor frustrations, and they may be inherent trade-offs of the relaxed atmosphere that makes the resort special. But guests accustomed to Swiss-watch operations should calibrate expectations. Soneva Kiri trades a degree of efficiency for warmth and character, and for most guests, that trade is favorable. The staff genuinely care, and that caring covers a multitude of minor operational sins.`
    ]),
    review_food: section([
      `The dining program at Soneva Kiri is absurdly ambitious for a remote island resort. Nine concepts span Thai, Japanese, Indian, Mediterranean, and raw food cuisine, plus a chocolate room, an ice cream parlor, and a cheese and charcuterie cave. The variety would be meaningless if the execution were poor, but Soneva has invested in kitchens and talent that deliver quality across almost every venue. The standout is the Thai restaurant, Benz's, which serves southern Thai cooking with an authenticity that would hold up in Bangkok. The curries use hand-pounded paste made fresh each day. The seafood is caught by local fishermen that morning. The flavors are bold—properly spicy, properly sour, properly funky with fermented shrimp and fish sauce—and the presentation is beautiful without being fussy.`,
      `Breakfast is a production spread across multiple stations in the main restaurant, with everything from fresh tropical fruit and house-baked pastries to made-to-order Thai dishes and a juice bar using produce from the resort's organic garden. The garden itself is worth visiting: two acres of herbs, vegetables, and fruit trees that supply an impressive percentage of the kitchen's needs. The connection between garden and plate is not just marketing—you taste it in the tomatoes, the basil, the chili. The mushroom cultivation room produces oyster and shiitake varieties that appear in dishes across multiple restaurants. The resort takes food provenance seriously, and the results are tangible.`,
      `The treetop dining pod is the resort's most famous culinary experience, and it lives up to the hype. You are winched into a bamboo pod suspended in the canopy, forty feet above the ground, where a waiter on a zip-line delivers courses of Thai-fusion cuisine. The food is surprisingly good given the logistical constraints—the kitchen for this operation sits in a nearby treehouse—and the setting is genuinely magical, particularly at sunset when the jungle below goes golden. The ice cream parlor offers dozens of flavors, made on-site, available at any hour, and complimentary. The chocolate room operates similarly. These freely available indulgences contribute to the resort's atmosphere of abundance without waste. Room service is available but feels like a missed opportunity given the dining options; you are better served eating in the restaurants where the food is freshest and the settings most dramatic.`
    ]),
    review_details: section([
      `The observatory at Soneva Kiri houses a telescope that would be at home in a university astronomy department. Koh Kood's minimal light pollution makes the night sky here genuinely spectacular—the Milky Way is visible to the naked eye on clear nights, and through the telescope, you can see Jupiter's moons, Saturn's rings, and lunar craters in startling detail. An in-house astronomer hosts nightly viewings and can tailor sessions to your interests. For families with children, this alone justifies the trip. It transforms abstract science into visceral experience. The Den, Soneva Kiri's children's facility, is not a glorified babysitting service but a genuine destination for young guests. The complex includes treehouses, a water slide, a pirate ship, art studios, a music room, and outdoor adventure areas designed to challenge and engage children from toddlers to teenagers.`,
      `The spa draws on Thai healing traditions with genuine respect. Treatments include proper Thai massage—the stretching, pressure-point work that is more therapeutic than relaxing—alongside gentler oil-based therapies, herbal treatments using plants from the resort's garden, and sound healing sessions. The treatment rooms are open-air pavilions positioned to catch breezes and jungle sounds. The therapists are excellent and consistent. The wellness programming extends beyond the spa to include yoga, meditation, fitness classes, and nutrition consultations. The organic garden offers morning harvesting sessions where guests pick ingredients that later appear in their meals. Snorkeling and diving are available directly from the resort's beaches, with coral restoration sites providing both ecological education and underwater beauty.`,
      `Sustainability is not a marketing add-on at Soneva Kiri but a foundational principle. The waste-to-wealth program processes all resort waste on-site, converting organic matter to compost and biogas, recycling glass into building materials, and transforming plastic waste into fuel. The resort bottles its own water, eliminating thousands of plastic bottles annually. A mangrove restoration project has replanted significant areas along the coastline. The coral nursery grows fragments that are transplanted to degraded reef areas. Energy comes partly from solar panels, with a roadmap toward further renewable integration. These initiatives are visible to guests—the recycling center is open for tours, the garden is accessible, the coral project accepts volunteers—but they are not performative. They represent genuine operational commitments that cost real money and require sustained effort. Whether sustainability at this price point constitutes true ecological responsibility is a fair question, but Soneva's efforts are substantive.`
    ]),
    review_verdict: section([
      `Soneva Kiri is not a typical luxury resort, and comparing it to conventional competitors misses the point. The property operates on a different set of values: environmental responsibility, genuine engagement with place, intellectual curiosity, and a particular definition of luxury that prioritizes experience over polish. The barefoot philosophy is not a gimmick but a signal. This is a resort that asks you to slow down, pay attention, and reconnect with things that hotels usually insulate you from—the ground beneath your feet, the food you eat, the sky above you, the ecosystem around you. For travelers who respond to that invitation, Soneva Kiri is transformative.`,
      `The caveats are real. The remoteness adds cost and complexity. The rates are among the highest in Southeast Asia, and the all-inclusive supplements push daily spend into territory that only a specific economic bracket can access. The relaxed service style will frustrate guests who expect military precision. The jungle setting means insects, humidity, and occasional wildlife encounters that the squeamish will not appreciate. The island offers virtually nothing beyond the resort, so guests seeking variety or exploration beyond the property may feel confined. And the philosophical positioning—sustainability, barefoot luxury, intelligent design—can feel preachy if you are not already sympathetic to those values.`,
      `But for the right traveler, Soneva Kiri offers something that almost no other resort in Southeast Asia can match. The villas are extraordinary. The food program is deep and genuinely excellent. The children's facilities are the best in the region. The sustainability commitments are substantive. The observatory turns a clear night into an education. The overall atmosphere—unhurried, curious, grounded—creates a stay that lingers in memory long after the tan has faded. In a market saturated with interchangeable luxury beach resorts, Soneva Kiri stands apart by asking a different question: not "how much can we provide?" but "what actually matters?" The answer, it turns out, involves bare feet, good food, dark skies, and the sound of waves on an island that the rest of the world has not yet found.`
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
  console.log(`Starting Mar 23 seed...`);
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

  console.log(`Mar 23 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
