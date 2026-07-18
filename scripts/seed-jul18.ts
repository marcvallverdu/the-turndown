import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// JUL 18 — FOUR SEASONS HOTEL GEORGE V, PARIS
// Weekly growth loop: active queued Paris Palace hotel review.
// Sources checked: official Four Seasons Paris homepage/accommodations/spa/dining
// pages and Four Seasons 2026 Michelin press note.
// ============================================================================

const hotels = [
  {
    name: `Four Seasons Hotel George V, Paris`,
    slug: `four-seasons-george-v-paris`,
    brand: `Four Seasons`,
    brand_slug: `four-seasons`,
    location: `Paris, France`,
    country: `France`,
    country_slug: `france`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 48.8687,
    longitude: 2.3004,
    price_range: `$$$$`,
    price_from: 1800,
    price_to: 12000,
    currency: `EUR`,
    style: `Paris Palace Grandeur`,
    best_for: [`Paris Palace Hotels`, `Michelin Dining`, `Golden Triangle`],
    hero_image: `https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200`,
      `https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=1200`,
      `https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=1200`
    ],
    website: `https://www.fourseasons.com/paris/`,
    booking_url: `https://www.fourseasons.com/paris/`,
    tagline: `Paris Palace luxury at its most operationally complete: Golden Triangle address, serious suites, six Michelin stars, and old-school Four Seasons control.`,
    verdict_best_for: `Travelers who want Paris handled at the highest traditional level: avenue George V location, grand-service choreography, major dining, spa depth, and enough room inventory to make a complicated city stay feel calm.`,
    verdict_skip_if: `You want a small Left Bank townhouse mood, contemporary minimalism, a fashion-forward boutique hotel, or a stay where the hotel disappears into the neighborhood rather than becoming part of the trip.`,
    verdict_standout: `The dining ecosystem: Le Cinq, L'Orangerie, and Le George collectively held six Michelin stars in the 2026 Michelin Guide France, giving the hotel a rare on-property reason to stay in for dinner.`,
    rating_overall: 9.4,
    rating_room: 9.2,
    rating_service: 9.5,
    rating_food: 9.7,
    rating_value: 8.1,
    rating_location: 9.6,
    featured: 1,
    review_intro: section([
      `Four Seasons Hotel George V, Paris is not trying to be the newest hotel in Paris, and that is the point. The official property history frames it as an Art Deco landmark built in 1928, set in the Golden Triangle just off the Champs-Elysees. In a city now crowded with palace hotels, fashion-house addresses, riverfront newcomers, and discreet Left Bank alternatives, the George V still makes its argument through scale, ceremony, and operational depth rather than novelty.`,
      `The hotel is at its best when the trip needs Paris to feel handled. It has 243 rooms according to Four Seasons, including large suites and Eiffel Tower-view categories; a spa with a proper pool and 24-hour fitness facilities; and a dining program that Four Seasons says held six Michelin stars across Le Cinq, L'Orangerie, and Le George in the 2026 Michelin Guide France. Those facts matter because they explain the kind of luxury on offer here. The George V is not a secret. It is infrastructure.`,
      `That infrastructure will not suit everyone. If you want residential quiet, experimental design, or a hotel that lets you pretend you live in Paris, look elsewhere. The George V is a grand hotel with the confidence and formality that implies. Used properly, though, it remains one of the most reliable answers to a demanding Paris stay: glamorous without being fragile, ceremonial without losing control, and large enough to absorb complex guest needs without making them feel complicated.`
    ]),
    review_arrival: section([
      `Arrival at the George V is built around the old Parisian virtues: a precise address, a controlled threshold, and the feeling that the street has been edited before you step inside. Avenue George V is close to the Champs-Elysees and the luxury-shopping spine of the 8th arrondissement, but the hotel experience is less about street energy than about removal from it. You enter a world of polished stone, flowers, soft lighting, and staff who know that the first task is to lower the temperature of the day.`,
      `The arrival sequence suits travelers who like ceremony. This is not a casual check-in counter with a laptop and a sofa. The mood is formal, but the better Four Seasons properties understand that formality should reduce friction rather than create distance. Luggage, cars, restaurant timings, spa bookings, and room readiness are the invisible tests. At a hotel like this, service is not judged by warmth alone. It is judged by whether the trip feels simpler after the hotel takes over.`,
      `The location is the other part of arrival. The Golden Triangle is convenient for haute couture appointments, palace-hotel dinners, flagship shopping, and first-time Paris landmarks, but it is not the city's most intimate neighborhood. That is the trade. George V gives you access and prestige rather than village texture. For some trips, that is exactly right. For others, Saint-Germain, the Marais, or a smaller Right Bank address will feel more emotionally connected to daily Paris.`
    ]),
    review_room: section([
      `The room product is one of the reasons the George V remains relevant. Four Seasons lists 243 rooms, with accommodations ranging from Superior and Deluxe rooms to Premier rooms, large suites, and signature suites including the Eiffel Tower Suite, The Penthouse, and the Royal Suite. The official accommodations page gives useful size context: Premier Rooms are listed at 50 to 60 square meters, while many suites move well beyond the scale of ordinary Paris hotel rooms. In a city where space is often the quiet disappointment, that matters.`,
      `The design language is traditional Paris Palace rather than minimalist. Expect the stay to lean into high ceilings, classical detail, marble bathrooms, proper storage, and a sense of apartment-like volume in the stronger categories. The best rooms are not only bigger; they support the way people actually use Paris hotels at this level: dressing for dinner, hosting a brief meeting, recovering from a long museum day, or spending a slow morning with the balcony doors open.`,
      `Category choice is important. A shorter first-time Paris stay can work in a room if the location is the priority. A longer stay, family trip, couture week, or special-occasion booking benefits from a suite because the George V's advantage is partly spatial. If you are choosing the hotel for a romantic, highly residential Paris mood, compare carefully against smaller palace alternatives and newer suite-led properties. If you are choosing it for reliability, space, and a room that can support a complicated itinerary, the logic is stronger.`
    ]),
    review_service: section([
      `Service is the George V's central promise. Four Seasons hotels are strongest when precision does not become sterility, and this property has the setting and guest mix to test that balance every day. The hotel has to serve fashion-week regulars, families on milestone trips, business travelers, restaurant guests, and first-time Paris visitors without letting the building feel chaotic. That requires systems as much as charm.`,
      `The service expectation here should be high-formality competence: cars handled cleanly, restaurant requests routed with authority, housekeeping timed properly, room-service standards protected, and concierge advice calibrated to whether the guest wants the obvious Paris or the quieter one. It is less likely to feel like a small independent hotel where personality leads the stay. It is more likely to feel like a practiced machine with enough human warmth to keep the polish from hardening.`,
      `That machine is the reason to book if Paris logistics make you tired. The George V is useful for travelers who do not want every choice to become a project: where to eat, how to move, when to book the spa, how to handle a late train, whether the children can be accommodated, how to make a formal evening run on time. The hotel is expensive enough that competence is not a bonus. It is the product.`
    ]),
    review_food: section([
      `Dining is the cleanest argument for the George V. Four Seasons' 2026 press note says Le Cinq, L'Orangerie, and Le George retained six Michelin stars between them in the Michelin Guide France: three for Le Cinq, two for L'Orangerie, and one for Le George, with Le George also recognized for its sustainable approach. That makes the hotel unusual even by Paris Palace standards. It is not merely a hotel with a good flagship restaurant. It is a serious dining address with several distinct rooms.`,
      `Le Cinq is the anchor. Four Seasons describes Christian Le Squer's restaurant as a three-Michelin-star expression of modern French cuisine, and the dining room gives the hotel much of its ceremonial weight. L'Orangerie offers the more luminous, nature-facing counterpoint, while Le George brings a Mediterranean and Italian register under Simone Zanoni. La Galerie and the bar complete the pattern: enough public life to make the hotel feel animated without requiring the guest to leave the building every evening.`,
      `This is a strength and a warning. If you want Paris primarily as a restaurant city outside the hotel, you may not need this much on-property gravity. If the stay is a celebration, a business trip, a winter weekend, or a schedule where one or two meals should be effortless and exceptional, the George V becomes far more persuasive. The dining program gives the hotel a second reason to exist beyond rooms and service.`
    ]),
    review_details: section([
      `The details are where the George V's size becomes an advantage. The spa is not a token treatment room. Four Seasons describes a dedicated spa with advanced facial and body treatments, an elegant pool, hammams, beauty services, and a fitness centre open 24 hours for hotel guests. In Paris, where many grand hotels have beautiful public rooms but compromised wellness footprints, that depth changes the stay. It gives the hotel a reset function after long days in the city.`,
      `The official accommodations and facilities notes also point to practical amenities that matter at this level: multilingual concierges, 24-hour in-room dining, family-friendly policies, premium Wi-Fi, and pet acceptance within stated limits. None of these is glamorous in isolation. Together, they are the quiet machinery that makes a Palace hotel useful rather than merely impressive.`,
      `The caveat is atmosphere. The George V is polished, formal, and visible. The floral installations, the restaurants, the lobby life, and the Avenue George V address all create a hotel that participates in Parisian spectacle. If you want discretion above all, a smaller property may suit you better. If you want Paris with the safety rails on, with every major hotel function covered and very little left to chance, the George V is built for that.`
    ]),
    review_verdict: section([
      `Four Seasons Hotel George V, Paris remains one of the most complete luxury hotels in the city because it understands its own role. It is not the quietest Paris hotel, not the most contemporary, and not the most intimate. It is the hotel for travelers who want the grand Palace apparatus to work: location, suites, flowers, dining, spa, concierge, housekeeping, cars, breakfast, and dinner all moving in the same direction.`,
      `The best comparison is not simply another Four Seasons. It is the wider Paris Palace field. Cheval Blanc Paris may feel newer and more river-facing. Ritz Paris has Place Vendome mythology. Le Bristol has Faubourg Saint-Honore ease. Plaza Athenee has avenue Montaigne fashion theater. The George V's distinction is breadth. It has the rare ability to feel like a landmark, a dining destination, and an operational base at once.`,
      `Book it when the hotel is meant to be a major part of the trip and when reliability matters as much as romance. Skip it when you want Paris to feel informal, neighborhood-led, or quietly residential. The George V is not trying to be a hidden address. It is a highly polished answer to a particular Paris question: what if the grand hotel still did almost everything well?`
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

const insertHotelQuery = `INSERT INTO hotels (${hotelColumns.join(`, `)}) VALUES (${hotelColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, brand = EXCLUDED.brand, brand_slug = EXCLUDED.brand_slug, location = EXCLUDED.location, country = EXCLUDED.country, country_slug = EXCLUDED.country_slug, region = EXCLUDED.region, region_slug = EXCLUDED.region_slug, latitude = EXCLUDED.latitude, longitude = EXCLUDED.longitude, price_range = EXCLUDED.price_range, price_from = EXCLUDED.price_from, price_to = EXCLUDED.price_to, currency = EXCLUDED.currency, style = EXCLUDED.style, best_for = EXCLUDED.best_for, hero_image = EXCLUDED.hero_image, images = EXCLUDED.images, website = EXCLUDED.website, booking_url = EXCLUDED.booking_url, tagline = EXCLUDED.tagline, review_intro = EXCLUDED.review_intro, review_arrival = EXCLUDED.review_arrival, review_room = EXCLUDED.review_room, review_service = EXCLUDED.review_service, review_food = EXCLUDED.review_food, review_details = EXCLUDED.review_details, review_verdict = EXCLUDED.review_verdict, verdict_best_for = EXCLUDED.verdict_best_for, verdict_skip_if = EXCLUDED.verdict_skip_if, verdict_standout = EXCLUDED.verdict_standout, rating_overall = EXCLUDED.rating_overall, rating_room = EXCLUDED.rating_room, rating_service = EXCLUDED.rating_service, rating_food = EXCLUDED.rating_food, rating_value = EXCLUDED.rating_value, rating_location = EXCLUDED.rating_location, published = EXCLUDED.published, featured = EXCLUDED.featured, updated_at = NOW()`;

const seed = async () => {
  console.log(`Starting Jul 18 seed...`);
  console.log(`Hotels to upsert: ${hotels.length}`);

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
    console.log(`Upserted hotel: ${hotel.name}`);
  }

  const verification = await pool.query(
    `SELECT slug, name, published FROM hotels WHERE slug = $1`,
    [`four-seasons-george-v-paris`]
  );

  if (verification.rowCount === 0) {
    throw new Error(`Verification failed: four-seasons-george-v-paris not found after seed`);
  }

  console.log(`Verified hotel: ${verification.rows[0].slug} | ${verification.rows[0].name} | published=${verification.rows[0].published}`);
  console.log(`Jul 18 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
