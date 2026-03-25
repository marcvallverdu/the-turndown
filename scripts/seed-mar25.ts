import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// MAR 25 — CAPELLA BANGKOK + SONEVA BRAND PROFILE
// ============================================================================

const hotels = [
  {
    name: `Capella Bangkok`,
    slug: `capella-bangkok`,
    brand: `Capella`,
    brand_slug: `capella`,
    location: `Bangkok, Thailand`,
    country: `Thailand`,
    country_slug: `thailand`,
    region: `Asia`,
    region_slug: `asia`,
    latitude: 13.7078,
    longitude: 100.5140,
    price_range: `$$$$`,
    price_from: 900,
    price_to: 5500,
    currency: `USD`,
    style: `Riverside Urban Retreat`,
    best_for: [`River Views`, `Design`, `Dining`],
    hero_image: `https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200`,
      `https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200`
    ],
    website: `https://www.capellahotels.com/bangkok`,
    booking_url: `https://www.capellahotels.com/bangkok/book`,
    tagline: `Bangkok's most considered riverside hotel — where architecture argues with the skyline and wins.`,
    verdict_best_for: `Travelers who want Bangkok's finest hotel dining, genuine architectural ambition, and a riverside position that makes the Chao Phraya feel personal rather than panoramic.`,
    verdict_skip_if: `You prefer to be near BTS stations for easy exploration, find low-rise riverside properties too removed from Bangkok's vertical energy, or want a large pool scene.`,
    verdict_standout: `The Stella restaurant by Mauro Colagreco — a Michelin-starred chef cooking with Thai ingredients in a space that looks straight down the river bend.`,
    rating_overall: 9.4,
    rating_room: 9.5,
    rating_service: 9.3,
    rating_food: 9.6,
    rating_value: 8.4,
    rating_location: 9.0,
    featured: 1,
    review_intro: section([
      `Capella Bangkok sits on a bend of the Chao Phraya River in the Charoen Krung district, an area that was Bangkok's original commercial waterfront and is now undergoing the kind of slow creative renewal that gives neighborhoods texture without destroying their character. The hotel opened in 2020, which in Bangkok years means it arrived just as the city's luxury market was recalibrating. Mandarin Oriental and Peninsula had held the riverside for decades, operating as institutions with the gravitational pull of history. Capella entered this conversation with something different: not heritage, but intention. Every surface, every sight line, every material choice announces that someone sat down and thought hard about what a Bangkok hotel could be in the 2020s.`,
      `The architecture is by A49, a Thai firm, and the interiors by André Fu, the Hong Kong designer whose work at The Upper House established him as one of Asia's most thoughtful hotel thinkers. Fu's approach here rejects the two dominant modes of Bangkok luxury — the colonial-era grandeur of the Mandarin Oriental and the glass-tower minimalism of newer arrivals like the Park Hyatt. Instead, Capella Bangkok operates in a register that is warm, low-slung, and deeply attuned to its riverside position. The buildings never exceed four stories. The grounds are planted with mature trees that were here before the hotel was. Walkways follow the river's edge, and the rooms are arranged so that nearly every angle catches water, sky, or both. The overall impression is of a resort that happens to be in a capital city, which is both its greatest strength and its occasional limitation.`,
      `What makes Capella Bangkok genuinely interesting — as opposed to merely expensive — is its relationship with Bangkok itself. The hotel does not attempt to insulate you from the city in the way that many luxury properties do. The Charoen Krung neighborhood pushes right up to the hotel's boundaries: street food stalls, Chinese shophouses, motorcycle repair shops, a working flower market. You can walk out the gate and be in unfiltered Bangkok within seconds. This proximity gives the hotel a rootedness that properties in the Silom or Sukhumvit high-rise corridors cannot achieve. The river, too, is a living thing here — long-tail boats, rice barges, the orange ferry — not a decorative backdrop. You watch working Bangkok from your terrace, and it watches you back.`
    ]),
    review_arrival: section([
      `Getting to Capella Bangkok requires navigating some of the city's more congested arteries, depending on the time of day and your starting point. From Suvarnabhumi Airport, the drive takes between forty minutes and two hours, with Bangkok traffic being the unpredictable variable that turns all estimated arrival times into works of fiction. The hotel offers private transfers in comfortable sedans, and the drivers know the back routes through Charoen Krung's narrower streets, which helps. There is also the option of arriving by boat — the hotel operates a private pier — and during the evening rush, the river can genuinely be faster than the roads. The boat approach has the added advantage of delivering the hotel's best first impression: the low-rise buildings appearing along the riverbank, their warm lighting reflecting off the water, framed against Bangkok's high-rise skyline behind.`,
      `The entrance is intentionally understated. There is no grand porte-cochère, no sweeping driveway designed to accommodate tour buses. You arrive at a modest gate, step through into a garden courtyard, and the noise of the street drops away immediately. The transition is almost startlingly effective. A host greets you by name — they have been tracking your transfer — and walks you along a path shaded by frangipani trees to a reception pavilion that feels more like someone's living room than a hotel lobby. Furniture is arranged in conversational groupings. Fresh flowers sit on low tables. A drink appears — often a cold herbal infusion with butterfly pea flower, turning the glass a vivid blue — and check-in happens while you sit and decompress.`,
      `André Fu's design language is immediately apparent in the arrival sequence. The materials are warm — teak, terrazzo, rattan, linen — and the proportions are human-scaled. Nothing towers over you. The ceilings are low enough to feel intimate, the corridors wide enough to feel unhurried. By the time a host walks you to your room, navigating garden paths rather than carpeted hallways, you have already absorbed the hotel's central argument: that luxury in Bangkok does not require height, mass, or marble. It requires thought. The walk to the room passes the pool, the spa, glimpses of the river through the trees, and each view feels composed without feeling staged. It is a careful choreography that makes the property feel larger and more varied than its 101 rooms would suggest.`
    ]),
    review_room: section([
      `Capella Bangkok offers only suites and villas, a structural decision that immediately separates it from hotels where the entry-level product is a room and the suite is the upgrade. Here, the baseline is generous: the Riverfront Suite starts at 80 square meters, which gives you a proper living area, a bedroom with river views, a bathroom with both tub and walk-in rain shower, and a terrace long enough for morning yoga or evening drinks. The villas scale up dramatically — the four-bedroom Owner's Villa exceeds 750 square meters and includes a private pool, garden, and kitchen — but even the entry tier feels abundant. You are never conscious of space constraints, which is remarkable for a hotel in a city where real estate commands a premium.`,
      `André Fu's interiors in the rooms are the finest work I have seen him do. The palette draws from the river: muted greens, soft grays, warm sand tones, with accents in brass and dark wood. Every piece of furniture appears to have been selected individually rather than batch-ordered from a catalogue. The desks are substantial enough to work at. The sofas are deep enough to nap on. The beds use custom mattresses that land somewhere between the firmness of Japanese futons and the plushness of European luxury beds — a balance that suits the climate and the clientele. The linens are high-thread-count cotton that breathes in Bangkok's humidity, and the pillow selection is genuinely useful, not merely extensive.`,
      `The bathrooms are where the design ambition becomes most legible. Floor-to-ceiling windows open to private garden views — no neighboring building intrudes — and the bathtubs are positioned so you look out at greenery while soaking. The terrazzo floors are heated, which sounds absurd in tropical Bangkok until you step out of an air-conditioned room onto cool stone at six in the morning and understand the consideration. Amenities are by Aesop, a brand that signals seriousness without ostentation. The rain showers deliver water at a pressure that is both powerful and precise, and the towels are the heavy, tightly-woven kind that absorb rather than merely drape. Technology is handled with restraint: bedside panels control lights and curtains without requiring an engineering degree, and the Wi-Fi is fast and stable throughout the property. What the rooms avoid is equally important — there are no unnecessary screens, no branded merchandise cluttering surfaces, no aggressive minibar upselling. The space breathes.`
    ]),
    review_service: section([
      `Capella's service model assigns each guest a personal assistant — they call them Capella Culturists — whose job is to bridge the gap between the hotel and the city. This is not the standard butler model where someone handles your laundry and turndown. The Culturists are hired for their knowledge of Bangkok: they know which street food vendors are worth crossing the city for, which temples are meaningful rather than merely photogenic, which rooftop bars have the views without the crowds. They act as informed companions for the city rather than concierges who process requests. The best ones — and the quality varies, as it does with any program that relies on individual personality — will tell you frankly when a tourist attraction is not worth the trip and suggest an alternative that they personally love.`,
      `Beyond the Culturist program, the day-to-day service operates with a Thai warmth that feels effortless but is clearly the product of rigorous hiring and training. The restaurant staff in particular stand out: they know their menus thoroughly, make genuine recommendations rather than pushing expensive bottles, and time courses with the attentiveness of fine dining without the pretension. The pool attendants read the cues — bringing water when you have been in the sun, refreshing your towel without being asked, knowing when you want conversation and when you want to be left alone. The housekeeping team services rooms with invisible precision; you return to find everything refreshed but nothing rearranged.`,
      `Where the service occasionally shows its youth — Capella Bangkok is still only six years old — is in the handling of unusual or complex requests. The institutional memory that allows Mandarin Oriental's staff to solve problems reflexively, drawing on decades of accumulated experience, is still developing here. A complicated travel arrangement or an uncommon dietary requirement may require more back-and-forth than it would at a fifty-year-old property. This is not a serious shortcoming, and it diminishes with each passing year as the team builds its knowledge base. The attitude is unfailingly willing; the execution sometimes needs a beat to catch up. For most stays, this gap is invisible. For guests who generate complex logistics, it is worth noting.`
    ]),
    review_food: section([
      `The dining program at Capella Bangkok is, in my assessment, the strongest of any hotel in Southeast Asia. This is a bold claim in a region where Mandarin Oriental Bangkok has been feeding guests since the 1870s and where hotels like Rosewood Bangkok and Four Seasons have invested heavily in celebrity-chef partnerships. But Capella's food operates at a level of ambition and execution that justifies the superlative. The anchor is Stella, the restaurant from Mauro Colagreco — the Argentine-Italian chef behind Mirazur in Menton, which held the number-one position on the World's 50 Best list in 2019. Stella opened at Capella in 2024, and it has rapidly become one of Bangkok's most compelling dining destinations.`,
      `Colagreco's approach at Stella takes Thai produce — galangal, kaffir lime, jasmine, river prawns, northern hill-tribe herbs — and applies a technique rooted in Mediterranean coastal cooking. The result is food that tastes neither Thai nor European but distinctly of this place and this kitchen. A dish of river prawns might be grilled over coconut-shell charcoal and dressed with a kaffir lime beurre blanc that carries the fragrance of a Thai kitchen without mimicking its flavors. The smoked duck breast uses birds from a farm in Chiang Rai and is served with a galangal jus that would be at home in both Menton and Bangkok. The room itself is beautiful — floor-to-ceiling windows looking down the river bend, warm wood, candlelight — and the service matches the food's seriousness without any of the stiffness that plagues formal dining.`,
      `Beyond Stella, Côte by Mauro Colagreco offers more casual riverside dining with a menu that spans Mediterranean and Thai influences in shareable plates. The quality is only a half-step below the flagship — the pasta is made in-house, the grilled fish is fresh and simply treated, and the cocktails use Thai botanicals in ways that taste intentional rather than gimmicky. Breakfast is served at Côte and is excellent: proper Thai congee with hand-pulled shredded chicken, French pastries that would not embarrass a Parisian bakery, eggs cooked with the precision you would expect from a Colagreco operation, and single-origin Thai coffee from Doi Chaang that is smoky, complex, and far better than the generic hotel espresso most properties serve. The pool bar handles lunch with competent salads and sandwiches. Room service maintains kitchen standards, which at this property means room service is better than the main restaurants at most hotels.`
    ]),
    review_details: section([
      `The pool at Capella Bangkok is long enough for laps and positioned to catch the afternoon sun, with views through the trees to the river. It is not a scene pool — there are no DJ sets or champagne sprays — but rather a calm rectangle of water surrounded by teak loungers and potted palms. The atmosphere is consistently adult and quiet, even when the hotel is full. The adjacent bar serves drinks and light food without requiring you to get up; the staff bring menus and check in with appropriate frequency. For a hotel with only 101 keys, the pool never feels crowded.`,
      `The Auriga Spa occupies its own building, set back from the river in a garden that muffles the city entirely. The treatment menu blends Thai and Chinese healing traditions with contemporary techniques, and the therapists are skilled practitioners rather than junior staff rotating through a training program. The Thai massage is particularly good — firm, stretching, proper — and the herbal compress treatment uses a blend that the spa mixes on-site from locally sourced ingredients. The gym is compact but well-equipped with Technogym machines, free weights, and a dedicated yoga and Pilates space. Given the hotel's size, the fitness facilities are proportionate and well-maintained.`,
      `The Charoen Krung neighborhood surrounding Capella is worth exploring on foot, and the hotel provides maps and suggested walking routes that reveal the area's layers: Chinese temples, Art Deco shophouses, the Talat Noi market, riverside warehouses being converted into galleries and cafés. The hotel also operates complimentary boat shuttles to the nearest BTS Skytrain station and to the ICONSIAM shopping complex across the river, which solves the connectivity challenge that riverside locations in Bangkok present. The shuttle boats run frequently during the day and evening, and the journey — crossing the Chao Phraya while Bangkok's skyline slides past — is one of the small pleasures of staying here. The hotel's art collection, curated with work by Thai and Southeast Asian contemporary artists, rewards attention throughout the property.`
    ]),
    review_verdict: section([
      `Capella Bangkok is the most complete new luxury hotel Bangkok has produced in the last decade. It succeeds on architecture, on food, on service, and on a sense of place that is increasingly rare in a city where international hotel brands tend to replicate their global templates without reference to where they actually are. André Fu's design gives the property a visual identity that is warm, specific, and impossible to mistake for anywhere else. Colagreco's restaurants give it a dining program that alone justifies the stay. And the Charoen Krung location gives it a relationship with Bangkok — gritty, real, evolving — that tower hotels along Sukhumvit or Silom cannot achieve.`,
      `The competition is significant. Mandarin Oriental Bangkok remains the city's most storied address, with half a century of institutional memory and a riverside position that predates modern Bangkok. Peninsula Bangkok offers similar views with the polish and technology that the brand is known for. Rosewood Bangkok, in the Ploenchit high-rise district, appeals to guests who prefer urban energy over riverside calm. Four Seasons Bangkok at Chao Phraya River operates an enormous riverside compound with more facilities and family infrastructure than Capella offers. Against this field, Capella wins on design coherence, food quality, and a sense of editorial intelligence — the feeling that someone with strong taste made every decision.`,
      `The hotel's limitations are the flip side of its strengths. The riverside location means you are removed from the BTS network and the commercial districts where much of Bangkok's energy concentrates. The intimate scale means fewer amenities than larger properties — one pool, one spa, no kids' club, no tennis courts. The pricing places it at the top of the Bangkok market, where it competes on rate with hotels that offer more facilities. For travelers who prioritize location convenience, resort-scale amenities, or institutional heritage, other properties may serve better. But for those who value thoughtful design, outstanding food, and a hotel that feels like it belongs specifically and only here on this bend of the Chao Phraya, Capella Bangkok is the clear choice. It is the hotel I recommend most often when someone asks me where to stay in Bangkok, and I have never received a complaint.`
    ])
  }
];

// ============================================================================
// SONEVA BRAND PROFILE
// ============================================================================

const brands = [
  {
    name: `Soneva`,
    slug: `soneva`,
    tagline: `Barefoot luxury — where sustainability and hedonism stopped pretending to be opposites.`,
    hero_image: `https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1600`,
    content_md: `# Soneva

Soneva is the brand that proved you could charge a thousand dollars a night while asking guests to take their shoes off. Founded in 1995 by Sonu Shivdasani and his wife Eva Malmström — the name is a portmanteau of theirs — the company operates just five properties: Soneva Fushi and Soneva Jani in the Maldives, Soneva Kiri in Thailand, Soneva Secret in the Maldives, and Soneva Soul in the Maldives. This deliberate smallness is central to the brand's identity. Soneva does not franchise, does not manage properties for third parties, and does not rush openings to hit quarterly growth targets. Each resort is wholly owned, slowly built, and operated to standards that Sonu personally enforces with the fervour of someone who sleeps on-site more nights than most hotel CEOs spend in their offices annually.

## The Philosophy: Intelligent Luxury

Soneva's founding concept — "Intelligent Luxury" — has become the kind of phrase that marketing departments paste onto brochures without understanding it. At Soneva, it means something specific and consistently applied. The intelligence lies in understanding that luxury is not about adding more but about removing the unnecessary. No shoes (your feet touch sand and wood from arrival to departure). No news (televisions exist but are hidden, and the default state is off). No walls where the climate does not demand them (many villas are partially open-air). No processed ingredients in the kitchen if a fresh alternative exists. No plastic anywhere on the islands. The luxury lies in what replaces these subtractions: hand-made ice cream in forty flavours, private cinemas under the stars, astronomical observatories, glass-blowing studios, chocolate rooms, and wine cellars that would embarrass most Michelin-starred restaurants.

The environmental commitment is genuine and measurable, not greenwashed. Soneva calculates the carbon footprint of every guest's travel to reach the resort and offsets it through a 2% environmental levy that funds projects including reforestation in Thailand, water filtration systems in Myanmar, and renewable energy installations across Southeast Asia. The Soneva Foundation has distributed over $10 million since its inception. On-property, waste management is taken seriously: the resorts operate composting systems, recycling facilities, and water-bottling plants that eliminate single-use plastic. The organic gardens supply the kitchens with herbs, vegetables, and fruit. None of this is performative. The gardens are working operations, not manicured photo opportunities. The composting happens behind the scenes but is available for touring. Soneva treats sustainability as an operational requirement rather than a marketing angle, which is the only approach that produces real results.

## The Properties

**Soneva Fushi** in the Maldives was the original, opening in 1995 on the uninhabited island of Kunfunadhoo in the Baa Atoll. It remains, in many assessments including mine, the best resort in the Maldives. The island is large enough — 1.4 kilometres long — to sustain genuine exploration, with jungle paths, a mangrove-fringed lagoon, and dense vegetation that makes the villas feel truly private. The villas themselves are generous, with the smallest exceeding 300 square meters and the largest approaching 2,000. They are built from sustainable materials — reclaimed wood, local coral stone, bamboo — and designed to feel like places rather than products. Each villa has its own character; returning guests often request specific numbers.

The food at Soneva Fushi is extraordinary and constitutes a serious reason to visit. The main restaurant, Out of the Blue, serves a different cuisine each night — Japanese, Indian, Thai, Mediterranean — at a level that would earn acclaim in any city. Fresh in the Garden, an open-air restaurant set within the resort's organic garden, serves tasting menus using ingredients picked moments before cooking. The Crab Shack, positioned over the lagoon, is exactly what it sounds like and exactly as good as it should be. The chocolate room is open 24 hours and offers artisan chocolates made on-site. The ice cream parlour serves flavours that include Maldivian curry leaf and lemongrass — bizarre on paper, addictive in reality.

**Soneva Jani** opened in 2016 in the Noonu Atoll, offering overwater villas that are the largest in the Maldives and possibly the world. The signature feature is the retractable roof above the master bedroom, allowing you to fall asleep watching the equatorial night sky — and in the Maldives, where light pollution is effectively zero, that sky is staggering. The villas include private pools, water slides into the lagoon, and outdoor bathrooms that face open ocean. The resort sits within a five-island cluster, with different dining and activity options spread across the islands, connected by boat. Soneva Jani feels more polished and contemporary than Soneva Fushi — newer construction, sharper design — but also slightly less soulful. The trade-off between patina and perfection is real, and preferences will vary.

**Soneva Kiri** on Koh Kood, Thailand, brings the brand's philosophy to a dense tropical island in the Gulf of Thailand. The setting is different from the Maldives — jungle rather than lagoon, mountains rather than atolls — and the resort feels wilder and more adventurous. The signature experience is the Treepod Dining, where you are hoisted in a bamboo pod to treetop height and served a multi-course meal delivered by zip-line. This is spectacle, yes, but executed with enough culinary seriousness to earn respect. The Children's Den — a separate compound designed for younger guests — is the most ambitious kids' programme I have seen at any hotel, featuring a working pirate ship, a pottery studio, and a marine biology lab.

**Soneva Secret**, the newest Maldives addition, takes exclusivity further with only 14 villas spread across two private islands. It targets guests who find even Soneva Fushi too populated — a niche within a niche that Soneva fills with characteristically thoughtful execution.

## Design Language

Soneva's design vocabulary is recognisable but not repetitive. The common elements are natural materials (wood, stone, bamboo, thatch), generous proportions, indoor-outdoor flow, and a deliberate rusticity that takes immense effort to achieve convincingly. The villas are designed to feel discovered rather than designed — as though you stumbled upon a beautifully appointed treehouse or beach shack that someone happens to stock with Diptqyue candles and Hästens beds. This illusion of simplicity is Soneva's most sophisticated design trick. The engineering required to make a villa appear rustic while delivering five-star plumbing, silent air conditioning, and invisible technology is considerable.

The resorts integrate art throughout — installations, sculptures, repurposed objects — and the effect is whimsical rather than gallery-serious. A giant fish skeleton made from driftwood. A swing hung from a banyan tree. A mosaic path made from recycled glass. These touches give the properties personality and humour, qualities that more corporate luxury brands struggle to manufacture.

## Service and Culture

Soneva's service style is deliberately informal. Staff wear no uniforms — they dress in Soneva-branded casual clothing that looks like something you would actually choose to wear. First names are used universally. The tone is friendly, knowledgeable, and relaxed. This informality masks real competence: the Mr./Ms. Friday butlers (named after Robinson Crusoe's companion) are skilled professionals who manage villa maintenance, dining preferences, activity scheduling, and special occasions with quiet efficiency.

The barefoot policy is not a gimmick; it is a design choice that recalibrates your relationship to the resort. Within hours of arriving, you stop noticing that your feet are bare. Within days, putting shoes on feels strange. The physical sensation of sand and wood underfoot produces a grounding effect that air-conditioned lobbies and marble corridors cannot replicate. It is one of those ideas that sounds trivial and turns out to be transformative.

Staff retention at Soneva is high by hospitality standards, particularly in the Maldives where the transient workforce model dominates. Sonu's investment in staff housing, recreation, and career development produces loyalty that translates directly into service quality. Many senior staff have been with the company for a decade or more, and their depth of knowledge about returning guests creates a continuity that newer properties envy.

## Who Soneva Is For

Soneva appeals to a specific type of luxury traveller: someone who has stayed at enough five-star resorts to know what they do not want. They do not want marble lobbies. They do not want orchestrated formality. They do not want environmental destruction packaged as paradise. They want genuine quality — in food, in materials, in service, in environmental stewardship — delivered without pretence. Soneva guests tend to be well-travelled, environmentally conscious, and willing to pay a significant premium for authenticity.

The rates are high — among the highest in the Maldives, which is saying something — and the remote locations require effort to reach. Soneva Fushi and Jani involve seaplane transfers from Malé that are expensive and weather-dependent. Soneva Kiri requires a private charter flight from Bangkok. These logistical hurdles are, in Soneva's philosophy, features rather than bugs: they filter the guest list and protect the sense of remoteness that is central to the experience.

Soneva is less suited to travellers who want constant entertainment, lively social scenes, or the infrastructure of a large resort chain. The properties are quiet by design, with activity options that lean toward exploration and creativity rather than organised fun. There are no nightclubs, no shows, no motorised water sports. The excitement comes from the observatory at midnight, the dive site at dawn, the jungle trail at dusk. For guests who find that prospect appealing, Soneva has no real competitor. The brand has created a category of one.`,
    hotel_count: 5,
    founded_year: 1995,
    parent_company: `Soneva (Private)`,
    best_property: `soneva-fushi`,
    website: `https://www.soneva.com`,
    published: 1
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

const brandColumns = [
  `id`, `slug`, `name`, `tagline`, `hero_image`, `content_md`, `hotel_count`,
  `founded_year`, `parent_company`, `best_property`, `website`, `published`
];

const insertHotelQuery = `INSERT INTO hotels (${hotelColumns.join(`, `)}) VALUES (${hotelColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;
const insertBrandQuery = `INSERT INTO brands (${brandColumns.join(`, `)}) VALUES (${brandColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting Mar 25 seed...`);
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

  console.log(`Mar 25 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
