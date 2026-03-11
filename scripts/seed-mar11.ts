import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// MAR 11 — CANAVES OIA EPITOME + COSTA NAVARINO
// Week 1: Greece + Santorini
// ============================================================================

const hotels = [
  {
    name: `Canaves Oia Epitome`,
    slug: `canaves-oia-epitome`,
    brand: `Canaves`,
    brand_slug: `canaves`,
    location: `Oia, Santorini, Greece`,
    country: `Greece`,
    country_slug: `greece`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 36.4618,
    longitude: 25.3753,
    price_range: `$$$$`,
    price_from: 800,
    price_to: 3200,
    currency: `EUR`,
    style: `Cycladic Minimalist`,
    best_for: [`Romance`, `Sunset Views`, `Infinity Pools`],
    hero_image: `https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200`,
      `https://images.unsplash.com/photo-1602343168585-44d907e28ba3?w=1200`
    ],
    website: `https://canaves.com/canaves-oia-epitome`,
    booking_url: `https://canaves.com/canaves-oia-epitome/book`,
    tagline: `Santorini's caldera, stripped to its essentials—white walls, blue water, nothing wasted.`,
    verdict_best_for: `Couples seeking a private, design-forward Santorini stay with plunge pools, caldera views, and enough seclusion to forget the cruise ships exist.`,
    verdict_skip_if: `You want direct beach access, a lively social scene, or find all-white interiors monotonous.`,
    verdict_standout: `The private infinity pools in every suite, each angled to frame the caldera as though it were painted specifically for you.`,
    rating_overall: 9.2,
    rating_room: 9.4,
    rating_service: 9.0,
    rating_food: 8.8,
    rating_value: 8.3,
    rating_location: 9.6,
    featured: 0,
    review_intro: section([
      `Canaves Oia Epitome exists because the original Canaves Oia Suites, perched in the village itself, had a problem that most hoteliers would envy: it was too popular, too photographed, too synonymous with the Santorini postcard. The Epitome, which opened in 2018 a short walk north along the caldera rim, represents the family's attempt to build something quieter, more private, and deliberately harder to stumble upon. The 24 suites sit below the path connecting Oia to Finikia, carved into volcanic rock and arranged so that each one faces the caldera without catching a neighbor's eye. The architecture is Cycladic in its bones—curved white walls, flat roofs, blue accents that rhyme with the Aegean—but the execution is sharper than the village vernacular. Lines are cleaner. Surfaces are smoother. The effect is a kind of distilled Santorini, the island's visual identity reduced to its most potent elements.`,
      `What separates the Epitome from the dozens of "luxury suites with caldera views" that have colonized Oia is restraint. The interiors don't overreach. There are no gold fixtures trying to signal opulence, no marble imported from somewhere more expensive. Instead, the palette holds steady at white, grey, and the occasional warm wood tone, letting the view—always the view—do the heavy lifting. The furniture is low and solid, with linen upholstery that looks like it belongs on a yacht. The lighting is warm without being dim, and the overall impression is of a space designed by someone who understood that the caldera is the decoration and everything else should get out of its way.`,
      `The Epitome also benefits from timing. It opened after the first wave of Santorini's luxury hotel boom had crested, which means the Canaves family had years of watching what worked and what didn't across the caldera's hospitality landscape. The mistakes of older properties—awkward layouts, undersized bathrooms, pools that look impressive in photos but can't actually be swum in—have been avoided here with quiet deliberation. Every suite feels finished rather than compromised, which is harder to achieve than it sounds on an island where construction is governed by slope angles and volcanic geology.`
    ]),
    review_arrival: section([
      `Getting to Canaves Oia Epitome involves the same ritual as reaching any caldera-edge hotel: a transfer from Fira's airport or port, a drive along Santorini's single main road, and then the particular drama of descending into Oia, where the street narrows and the sea appears in slices between whitewashed walls. The hotel arranges transfers that are smooth and air-conditioned, which matters more than it should given that Santorini's roads in high season can turn a twenty-minute drive into forty-five minutes of bumper-to-bumper frustration behind tour buses. A staff member meets you at a designated point—the hotel itself is not accessible by car—and walks you along a path that reveals the caldera in stages, the blue expanding with each step until the full panorama opens up and you understand, viscerally, why people keep coming to this island despite everything.`,
      `Check-in happens in a small reception area that doubles as a lounge, with cold towels and a glass of Assyrtiko that immediately resets whatever tension the transfer accumulated. The staff are unhurried, which is the correct speed for a hotel that has nowhere to rush toward. They explain the property's layout, point out the pool and restaurant, and then walk you to your suite along a stone path that descends the cliff in gentle switchbacks. The walk takes three or four minutes and involves stairs, which is worth noting for guests with mobility concerns—this is a hotel built into a cliff face, and the topography is non-negotiable.`,
      `The moment you enter the suite and see the caldera framed through floor-to-ceiling glass, with your private pool glinting in the foreground, the journey justifies itself completely. The arrival sequence at the Epitome is engineered for revelation: the compression of the transfer, the expansion of the caldera path, and then the private payoff of your own terrace. It's theatrical in the best sense—calculated to produce emotion without feeling manipulative. The staff disappear after orienting you, leaving you alone with the view and the silence, which is exactly the right instinct.`
    ]),
    review_room: section([
      `The suites at Canaves Oia Epitome follow a consistent grammar: white interiors, low-profile furniture, a bathroom that opens to natural light, and a terrace with a private infinity pool pointed directly at the caldera. The variation between categories is mainly about square footage and the generosity of the outdoor space. Even the entry-level Epitome Retreat Suite offers enough room to live comfortably without tripping over luggage, which puts it ahead of many Santorini competitors where "suite" is a generous description for what is essentially a cave with a balcony. The beds are king-sized and dressed in linens that feel genuinely premium—crisp, cool, and heavy enough to drape well. The mattresses hit the right firmness for warm-weather sleeping, where anything too soft becomes a trap.`,
      `Bathrooms are a highlight. Generous by any standard, they feature rainfall showers with strong pressure, separate soaking tubs in the higher categories, and double vanities with good lighting—the kind of lighting that lets you actually see what you're doing rather than the moody dimness that some design hotels mistake for atmosphere. The amenities are by Apivita, the Greek brand that uses local botanicals, and the products smell like Santorini in a bottle: honey, olive, thyme. It's a smart choice that connects the bathroom experience to the island rather than defaulting to the same French brand you'd find in a hotel three thousand miles away.`,
      `The private pools are the Epitome's strongest card. Each one is genuinely swimable—not merely a plunge pool for photographs—and the infinity edge creates the illusion that the water merges with the Aegean far below. The temperature is unheated, which means they're bracing in early season and perfect from June onward. The terrace furniture is comfortable and sun-oriented, with enough shade options to survive midday without retreating inside. The overall room experience at the Epitome is one of intelligent proportion: nothing is extravagant, but nothing feels missing. The design team understood that in Santorini, the room is really just a frame for the view, and they built frames that don't distract from the picture.`
    ]),
    review_service: section([
      `Service at Canaves Oia Epitome operates at a level that is warm without being effusive—a tone that suits the property's personality. The staff are predominantly Greek, with the particular blend of friendliness and directness that characterizes Cycladic hospitality. They remember your name quickly, learn your habits within a day, and offer suggestions with genuine enthusiasm rather than rote scripting. When the bartender notices you ordered the same wine two nights running, he mentions a vineyard visit that might interest you. When the pool attendant sees you prefer shade after noon, the umbrella appears without request. These are small calibrations, but they accumulate into something that feels attentive without being invasive.`,
      `The concierge function is handled by a small team who know the island thoroughly. Their recommendations for restaurants bypass the tourist traps with precision—they'll steer you to a taverna in Pyrgos where the owner still cooks, rather than the overpriced places lining Ammoudi Bay. They arrange boat charters, vineyard visits, and transfers to the volcanic hot springs with efficiency. What they don't do is oversell. If you ask about a particular restaurant and they think it's mediocre, they'll tell you so politely but clearly. This honesty is refreshing and builds trust that more corporate properties often lack.`,
      `Where the service shows its limits is in the restaurant, where the pace can feel slow during peak dinner hours when every suite is occupied. The kitchen is small, and the team doesn't rush, which is philosophically admirable but practically frustrating when you're hungry and the sun has already set. Housekeeping is thorough and well-timed, with a daily service that resets the suite completely and a turndown that adds candles on the terrace—a simple touch that transforms the evening atmosphere. Overall, the service at the Epitome is exactly what you'd want from a 24-suite hotel: personal, knowledgeable, and genuine, with the occasional rough edge that comes from being human rather than corporate.`
    ]),
    review_food: section([
      `Dining at Canaves Oia Epitome centers on the hotel's single restaurant, which occupies a terrace overlooking the caldera—a setting so spectacular that any kitchen would struggle to match it. The menu is contemporary Greek, drawing on Santorini's particular pantry: cherry tomatoes so sweet they taste candied, fava beans from Megalochori, capers that pop with brine, and seafood pulled from the Aegean with commendable frequency. The kitchen treats these ingredients with respect, keeping preparations simple enough that the quality of the raw material carries the dish. A grilled octopus arrives with just lemon, olive oil, and a scatter of capers, and it doesn't need anything else. The fava dip—smooth, earthy, finished with raw onion and a good pour of oil—is the kind of thing you eat three times during a stay and remember for months.`,
      `Breakfast is served on the same terrace and represents the best meal of the day, partly because the morning light on the caldera is incomparable and partly because the kitchen handles the morning well. Greek yogurt arrives thick enough to stand a spoon in, drizzled with local thyme honey. The eggs are cooked to order, and the freshly baked bread is warm and crusty. Fresh orange juice is genuinely fresh—not the reconstituted version that even expensive hotels sometimes try to pass off. The pastries lean Greek rather than French, with spinach pies and cheese-filled phyllo alongside croissants. It's a breakfast that makes you want to linger, which is the whole point.`,
      `Dinner is where the limitations show. The menu is small—necessarily so for a kitchen this size—and guests staying more than three nights will start to see repetition. The wine list focuses on Santorini and broader Greek labels, with the volcanic Assyrtiko wines well-represented and genuinely worth exploring. The sommelier knows the list personally and offers pairings that enhance rather than overshadow the food. The pricing is high, predictably for Santorini, but not outrageously so—a dinner for two with wine will run €150-200, which is reasonable given the quality and setting. For variety, the hotel's proximity to Oia village means that better restaurants are a short walk away, though securing reservations in high season requires planning.`
    ]),
    review_details: section([
      `The main pool at Canaves Oia Epitome is an infinity-edge beauty perched at the property's midpoint, with views across the caldera that make it a destination in itself. Loungers are well-spaced and comfortable, with towel service that appears without being summoned. The pool is large enough for actual swimming—maybe fifteen meters—and the water temperature is well-maintained. During peak season, the pool area fills by midday, but the beauty of a 24-suite hotel is that "full" still means manageable. There's a pool bar serving light lunches, cocktails, and the kind of frozen fruit platters that taste better than they have any right to in the afternoon heat.`,
      `The spa is compact—two treatment rooms—but the therapists are skilled, offering massages that draw on both Greek and broader Mediterranean techniques. The products are locally sourced, and the setting, with views over the caldera from the treatment bed, adds a dimension that larger spas cannot replicate. Gym facilities are minimal: a small room with a few machines and free weights, adequate for maintenance but not for serious training. The honest answer is that nobody comes to a caldera-edge hotel in Santorini to work out, and the Epitome doesn't pretend otherwise.`,
      `Practical details are handled well. Wi-Fi is fast throughout the property, which is notable because many Santorini hotels struggle with connectivity. The in-room technology is straightforward—no tablets or apps, just well-placed switches and reliable air conditioning. The hotel offers a shuttle to Oia village and to its sister properties, including the beach club at Canaves Oia Suites, which provides the beach access that the Epitome's clifftop position cannot. The shuttle runs frequently and removes the logistical friction that Santorini's geography creates. One genuinely special detail: the hotel arranges private dinners on your suite terrace, with a chef cooking a multi-course meal while the sun sets over the caldera. It's the kind of experience that costs more than it should and is worth every cent.`
    ]),
    review_verdict: section([
      `Canaves Oia Epitome delivers Santorini's essential promise—the caldera, the light, the Aegean—in a package that feels considered rather than accidental. The private pools, the clean design, and the service calibrate to a level that justifies the significant rates. It's not the cheapest option on the caldera, and it's not the most famous, but it may be the most intelligently designed. The Canaves family clearly learned from decades of operating on this island, and the Epitome represents the distillation of that knowledge into a property that avoids the common pitfalls of Santorini luxury.`,
      `The property suits couples, particularly those celebrating something. Honeymoons, anniversaries, milestone birthdays—the Epitome provides the romantic atmosphere and photographic opportunities that these occasions demand. It is not a family hotel, and it would be a strange choice for solo travelers or groups seeking nightlife. The demographic is intentional, and the hotel doesn't apologize for it. If you fall within its target, the experience is nearly flawless.`,
      `Compared to the competition, the Epitome holds its own against larger and more famous properties. Mystique and Katikies offer similar views with different aesthetics. Grace Hotel provides a slightly more polished food-and-beverage program. Andronis Concept adds a stronger wellness dimension. But the Epitome's combination of private pools, controlled scale, and design restraint creates a proposition that feels distinct. You leave the Epitome not just sunburned and photographed but genuinely rested, which is the harder outcome to achieve on an island that can overwhelm as easily as it enchants.`
    ])
  },
  {
    name: `Costa Navarino`,
    slug: `costa-navarino`,
    brand: `TEMES`,
    brand_slug: `temes`,
    location: `Messinia, Peloponnese, Greece`,
    country: `Greece`,
    country_slug: `greece`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 36.9631,
    longitude: 21.6536,
    price_range: `$$$`,
    price_from: 400,
    price_to: 1800,
    currency: `EUR`,
    style: `Mediterranean Resort Estate`,
    best_for: [`Golf`, `Families`, `Nature`, `Gastronomy`],
    hero_image: `https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200`,
      `https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200`
    ],
    website: `https://www.costanavarino.com`,
    booking_url: `https://www.costanavarino.com/book`,
    tagline: `Greece beyond the islands—where the Peloponnese meets serious resort ambition.`,
    verdict_best_for: `Families, golfers, and travelers seeking a complete Mediterranean resort with genuine Greek character, away from the island crowds.`,
    verdict_skip_if: `You want a small boutique experience, crave the Cycladic aesthetic, or have no interest in golf or large-scale resort life.`,
    verdict_standout: `The Dunes Course by Bernhard Langer—links-style golf along the Messenian coastline that rivals anything in the Mediterranean.`,
    rating_overall: 9.1,
    rating_room: 8.9,
    rating_service: 9.0,
    rating_food: 9.2,
    rating_value: 9.0,
    rating_location: 8.8,
    featured: 1,
    review_intro: section([
      `Costa Navarino is an argument against Greek cliché. While most luxury travelers associate Greece with island-hopping, whitewashed villages, and caldera sunsets, this resort occupies the southwest Peloponnese—mainland Greece, olive country, a landscape of rolling hills and long sandy beaches that owes nothing to the Cyclades. The development is the vision of TEMES, a Greek company backed by the Constantakopoulos family, who have spent over a decade and considerable capital transforming a stretch of Messenian coastline into one of the Mediterranean's most ambitious resort destinations. The scale is significant: two operational resort hotels (The Westin and The Romanos), a newer W hotel, signature golf courses designed by Bernhard Langer and José María Olazábal, and a footprint that extends across thousands of acres of protected landscape.`,
      `What makes Costa Navarino interesting rather than merely large is the philosophy behind it. The development was conceived with sustainability as a structural principle, not a marketing afterthought. The resort generates a significant portion of its energy from renewables, manages its own water treatment, and has planted over a million olive trees as part of a reforestation program. The architecture is low-rise and integrated into the landscape, avoiding the concrete towers that have scarred other Mediterranean coastlines. The Constantakopoulos family are Messenian, and their investment reads as an act of regional devotion rather than pure commerce—they are building something for their homeland, and that intention shows in decisions that a purely profit-driven developer would have made differently.`,
      `The resort's guest profile reflects its breadth. Golfers come for the courses, which are genuinely excellent—the Dunes Course, in particular, has earned rankings among Europe's finest. Families come for the beaches, the kids' programming, and the kind of space that allows children to run without bumping into honeymooners. Couples come for The Romanos, which offers a more intimate and upscale experience within the larger development. Food travelers come because the Messenian larder—olive oil, honey, wine, herbs, seafood—is one of the best in Greece, and the resort's restaurants take their sourcing seriously. This diversity of appeal is Costa Navarino's strength and, occasionally, its challenge: the resort tries to be many things, and it mostly succeeds, but the breadth can dilute the sense of identity that more focused properties achieve.`
    ]),
    review_arrival: section([
      `Arriving at Costa Navarino requires commitment. The nearest airport is Kalamata, a small regional hub with seasonal flights from European capitals and connections from Athens. The drive from Kalamata takes about forty-five minutes along roads that wind through olive groves and small villages, with occasional views of the Messenian Gulf. The route is genuinely beautiful—the Peloponnese has a quality of light that is softer and warmer than the Aegean islands—and the journey serves as a decompression chamber between the airport and the resort. For guests arriving from Athens, the drive is closer to three hours, which is long enough to make the Kalamata flight worth the connection.`,
      `The resort's entrance is deliberately understated: a low gateway that opens onto a tree-lined drive. There is no grand façade, no water feature announcing itself; instead, the landscape does the talking. Olive trees, wild herbs, and native plantings create an environment that feels preserved rather than constructed. Check-in at The Romanos (the more upscale of the two main properties) happens in a lobby that is large but well-proportioned, with stone floors, high ceilings, and views through to the gardens and sea beyond. Staff are warm and efficient, offering cold-pressed juice and cool towels that are welcome after even a short transfer in Messenian summer heat.`,
      `The orientation involves a property map that initially seems daunting—the resort is large enough to require shuttle buggies and a genuine sense of direction. Staff walk you through the key locations: your room, the nearest pool, the restaurant options, the spa, the beach access. They also mention the golf courses, the Navarino Agora (an outdoor dining and entertainment complex), and the archaeological site of ancient Messene, which is a short drive away. By the time you reach your room, you have the distinct sense that you could spend a week here and not run out of things to do, which is either exciting or overwhelming depending on your temperament.`
    ]),
    review_room: section([
      `Rooms at The Romanos—which is where most travelers reading this review will stay—are spacious and well-finished, with a design vocabulary that blends contemporary Mediterranean lines with local materials. The palette runs warm: terracotta, olive green, cream, and natural stone. The furniture is substantial without being heavy, with wood and woven textiles that feel regionally appropriate. The beds are large and comfortable, dressed in good-quality linens. The higher-category rooms and suites offer private pools and terraces that look out over the gardens toward the sea, and these are worth the upgrade—the terrace becomes your living room for the duration of the stay.`,
      `Bathrooms are generous, with natural stone surfaces, rainfall showers, and separate soaking tubs in the suites. The water pressure is strong and consistent, which may sound like a minor detail until you've experienced the plumbing surprises that some Greek properties deliver. The amenities are by Korres, the Greek brand that uses local botanicals, and the products are well-suited to the climate—light, fragrant, effective. The air conditioning is powerful and quiet, which is essential during the Messenian summer when temperatures regularly exceed 35°C. Blackout curtains work properly, and the soundproofing is good enough to muffle the corridor and neighboring rooms.`,
      `The rooms at The Westin, for comparison, are a step down in finish and design—they feel more like a well-run international resort and less like a destination hotel. The W Costa Navarino, the newest addition, skews younger and more design-forward, with bolder colors and a social atmosphere. But The Romanos hits the sweet spot for most luxury travelers: rooms that are comfortable, well-designed, and unpretentious, in a property that takes quality seriously without performing it. The sense of space—in the rooms, on the terraces, across the grounds—is the defining characteristic and the primary reason to choose Costa Navarino over a more compact island hotel.`
    ]),
    review_service: section([
      `Service at Costa Navarino reflects both the resort's scale and its Greek character. The staff are predominantly local—many from surrounding villages—and they bring a warmth and directness that feels authentic rather than trained. This is not the polished choreography of a Parisian palace or the intuitive anticipation of a Japanese ryokan. It is something more genuine and occasionally less smooth: people who are genuinely pleased to see you, who take personal pride in the region, and who will share their opinions about the best olive oil or the most beautiful beach with enthusiasm that no training manual could produce.`,
      `The concierge and guest relations teams handle the resort's complexity well. They navigate the dining reservations across multiple restaurants, arrange golf tee times, book spa treatments, and organize excursions to ancient Messene, the olive harvest experience, and local villages with efficiency. Their recommendations for off-property dining are particularly valuable—they'll point you to a fish taverna in the nearby village of Pylos where the catch arrives by boat each morning, or a family-run place in Methoni where the grandmother still makes the pies. These suggestions carry the authority of local knowledge, which no app or guidebook can replicate.`,
      `The service does have the occasional gap that comes with managing a large resort. Peak dinner times can produce waits at popular restaurants. The pool service, while friendly, can be slow when the resort is full. The buggy transfers between distant parts of the property sometimes require patience. These are scale problems rather than quality problems, and they are mostly forgiven because the staff are so clearly trying. The overall service philosophy seems to be: we may not be the most polished, but we are genuinely hospitable, and that distinction matters. In a hospitality industry increasingly populated by scripted interactions and corporate personas, Costa Navarino's human imperfections feel honest and, paradoxically, more luxurious than perfection.`
    ]),
    review_food: section([
      `Food at Costa Navarino is one of the resort's strongest arguments. The Messenian region is one of Greece's great food landscapes—the olive oil alone would justify a trip—and the resort's restaurants take this larder seriously. The Romanos houses Pero, the fine-dining option, where the chef builds multi-course menus around seasonal produce sourced from local farms and the resort's own gardens. The cooking is contemporary Greek, which means the flavors are familiar but the technique is precise: a lamb dish that tastes like the herb-scented hillsides where the animal grazed, a fish preparation that lets the quality of the catch speak without interference. The olive oil—used everywhere, poured generously—is a revelation if your reference point is supermarket bottles. This is oil with personality: peppery, grassy, almost thick enough to chew.`,
      `Beyond Pero, the resort offers a range of dining options that sustain long stays without repetition. The beach restaurant serves grilled seafood and salads with the simplicity they deserve. The Navarino Agora complex offers pizza, Asian-influenced dishes, and casual Greek fare in an outdoor setting that feels village-like. Barbouni, located at the beach, is excellent for lunch—fresh fish grilled over coals, served with nothing more than lemon and oil, eaten with your feet almost in the sand. The breakfast buffet at The Romanos deserves particular attention. The spread is vast and distinctly Greek: thick yogurt with local honey, fresh figs and grapes in season, cheese pies warm from the oven, cured meats from the region, and eggs prepared to order. The bread is baked on-site, and the coffee—Greek, strong, served in small cups—is exactly right.`,
      `The wine program draws heavily on the Peloponnese, showcasing Greek varietals that many international travelers haven't encountered: Agiorgitiko from Nemea, Moschofilero from Mantinia, and local Messenian labels that are available nowhere else. The sommelier team is enthusiastic about these wines and happy to guide exploration. Pricing across the restaurants is reasonable by resort standards—dinner at Pero with wine runs €100-150 per person, while the casual options are genuinely affordable. This is a meaningful distinction: at many luxury resorts, dining feels like an extension of the room rate, but at Costa Navarino, you can eat well without the bill becoming a secondary stressor.`
    ]),
    review_details: section([
      `The golf courses are Costa Navarino's marquee amenity and the reason many guests book in the first place. The Dunes Course, designed by Bernhard Langer, plays along the coast with views of the Messenian Gulf from nearly every hole. The layout is links-inspired, with firm fairways, strategic bunkering, and greens that reward precision over power. It is a genuine championship course, hosting European Tour events and ranking among the top layouts in Mediterranean Europe. The Bay Course, by Robert Trent Jones Jr., offers a more forgiving experience through olive groves and along the seafront. For serious golfers, these courses alone justify choosing Costa Navarino over island destinations, where golf options range from nonexistent to mediocre.`,
      `The Anazoe Spa is extensive and well-equipped, drawing on ancient Greek wellness traditions alongside contemporary treatments. The thermal area includes pools, hammams, and an outdoor thalassotherapy pool that uses heated seawater. The treatment menu spans massages, facials, and body wraps, many incorporating local ingredients—olive oil, wild herbs, beeswax. The gym is large and modern, with both free weights and machines, plus a dedicated area for yoga and Pilates. For families, the resort provides comprehensive programming: a kids' club with structured activities, a waterpark (at the Westin side), multiple pools, and enough space for children to explore safely. The beach is long and sandy, with calm water suitable for swimming and a gentle entry that works well for young children.`,
      `Beyond the resort, the surrounding region rewards exploration. Ancient Messene is one of Greece's best-preserved classical sites, a thirty-minute drive away, and the resort can arrange guided visits that bring the ruins to life. The fortress town of Methoni, with its Venetian castle jutting into the sea, provides a half-day excursion. Pylos, the nearest town, has a working harbor and a handful of genuine tavernas. The olive harvest experience—available in autumn—lets guests participate in picking and pressing olives, understanding the product that defines this landscape. These excursions are Costa Navarino's secret weapon: they connect guests to a region with deep history and living culture, providing context that resort-only stays can never achieve.`
    ]),
    review_verdict: section([
      `Costa Navarino is the antidote to the Santorini-Mykonos industrial complex. While the islands drown under cruise ships and influencers, the Peloponnese offers something the Cyclades cannot: space, authenticity, and a landscape that feels like Greece before the postcards took over. The resort delivers this landscape in a package that is comfortable, well-managed, and genuinely enjoyable for a range of travelers—golfers, families, couples, food lovers. It's not a boutique hotel; it's a resort, and it embraces that identity with confidence. The scale means it will never offer the intimacy of a twelve-room hideaway, but what it sacrifices in exclusivity it gains in breadth and value.`,
      `The comparison with island hotels is instructive. For the price of a standard room at a mid-tier Mykonos beach hotel, Costa Navarino offers a suite with a private pool, access to championship golf, a spa that could swallow most Cycladic properties whole, and a food program rooted in one of Greece's richest culinary regions. The value proposition is almost unfairly strong, and it explains why the resort's repeat-visit rate is among the highest in Greek hospitality. Guests who come once tend to come back, which is the most reliable endorsement any hotel can earn.`,
      `Costa Navarino is not without limitations. The location requires a domestic flight or a long drive, which adds friction that the islands avoid. The resort is large enough that some guests will feel overwhelmed by choice. The aesthetic, while pleasant, lacks the dramatic impact of caldera views or Cycladic minimalism. But these are trade-offs, not flaws, and for travelers willing to accept them, Costa Navarino offers something increasingly rare in Greek luxury tourism: a destination that feels like discovery rather than confirmation. The Peloponnese has been here for millennia; Costa Navarino simply gives you a comfortable place from which to appreciate it.`
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
  console.log(`Starting Mar 11 seed — Canaves Oia Epitome + Costa Navarino...`);

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
    console.log(`✓ Inserted hotel: ${hotel.name}`);
  }

  console.log(`\nMar 11 seed complete! 2 hotels added.`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
