import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// JUL 4 — IL SAN PIETRO DI POSITANO
// Weekly growth loop: queued Amalfi Coast hotel review with existing destination links.
// Sources checked: official Il San Pietro homepage, FAQ, facilities, rooms/suites pages.
// ============================================================================

const hotels = [
  {
    name: `Il San Pietro di Positano`,
    slug: `il-san-pietro-di-positano`,
    brand: `Independent`,
    brand_slug: `independent`,
    location: `Positano, Amalfi Coast, Italy`,
    country: `Italy`,
    country_slug: `italy`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 40.6142,
    longitude: 14.5085,
    price_range: `$$$$`,
    price_from: 1000,
    price_to: 6000,
    currency: `EUR`,
    style: `Cliffside Amalfi Classic`,
    best_for: [`Amalfi Coast`, `Sea Access`, `Romantic Escapes`],
    hero_image: `https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200`,
      `https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200`,
      `https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200`
    ],
    website: `https://www.ilsanpietro.com/`,
    booking_url: `https://www.ilsanpietro.com/`,
    tagline: `Positano's great cliffside hotel: private terraces, a lift to the sea, and enough old Amalfi theatre to make the setting feel earned.`,
    verdict_best_for: `Travelers who want the Amalfi Coast at its most cinematic without being trapped in the daily Positano crowd: sea access, terraces, dining, and a hotel that can be the point of the trip.`,
    verdict_skip_if: `You want to be in the centre of Positano every night, need a young-family resort, dislike stairs and vertical hotels, or prefer large contemporary resorts to intimate coastal classics.`,
    verdict_standout: `The private beach club reached by an elevator cut into the cliff, which turns the Amalfi Coast's hardest practical problem — access to the sea — into the hotel's best amenity.`,
    rating_overall: 9.3,
    rating_room: 9.0,
    rating_service: 9.2,
    rating_food: 9.1,
    rating_value: 8.0,
    rating_location: 9.6,
    featured: 1,
    review_intro: section([
      `Il San Pietro di Positano is one of the rare Amalfi Coast hotels that understands the coast's central contradiction. Everyone comes for the view, the cliffs, the water, the fantasy of living suspended between bougainvillea and sea. Everyone then discovers the practical problem: roads are slow, beaches are crowded, stairs are relentless, and Positano can turn from dream to queue with very little warning. Il San Pietro solves more of that problem than most hotels because it is not merely near the coast. It is engineered into it.`,
      `The property sits just outside the main Positano crush, close enough for the town to remain useful but far enough away for the hotel to keep its own atmosphere. Its official FAQ notes a complimentary 24-hour shuttle into Positano, while the facilities pages describe a private beach club reached by an elevator cut through the cliff. Those two details explain the hotel better than any string of luxury adjectives. Il San Pietro gives you the Amalfi Coast's theatre without asking you to negotiate every scene on foot.`,
      `This is not a minimalist resort pretending that the coast is a blank canvas. The mood is Mediterranean, family-rooted, and proudly local: terraces, ceramic detail, gardens, sea air, and a sense that the building has grown around the cliff rather than been imposed on it. The question is not whether Il San Pietro is beautiful. It is whether its specific version of beauty — vertical, romantic, seasonal, slightly old-world — fits the trip you actually want.`
    ]),
    review_arrival: section([
      `Arrival on the Amalfi Coast is never neutral. The road narrows, buses edge past stone walls, scooters treat physics as a suggestion, and the sea keeps appearing in flashes just when you need to be watching the bend. Il San Pietro's advantage is that it gives the journey a proper ending. You leave the busiest part of Positano behind, arrive at a cliffside address with space to breathe, and the hotel begins doing what good hotels in difficult destinations should do: lower the friction.`,
      `The location is a clever compromise. Staying in the centre of Positano has obvious romance, but it also means accepting crowds at the door and a daily choreography of steps, restaurants, taxis, and ferries. Il San Pietro is removed enough to feel private, yet connected enough by shuttle and sea access that it does not become a beautiful exile. That balance matters more here than it would in an easier destination. On the Amalfi Coast, logistics are not a footnote. They shape the whole stay.`,
      `The arrival sequence also sets the emotional terms. This is a hotel of terraces, views, and vertical reveals. You are constantly moving between levels: lobby to garden, terrace to restaurant, cliff to sea. A weaker hotel would turn that into inconvenience. Il San Pietro turns it into drama. The building's relationship with the rock is not decorative. It is the property's governing idea.`
    ]),
    review_room: section([
      `Rooms and suites at Il San Pietro are not standardized boxes with a sea-view premium attached. The hotel's own rooms page emphasizes that rooms are individually designed and that every category includes a private terrace overlooking the sea. That terrace is the key feature. On the Amalfi Coast, outdoor space is not an accessory; it is the room's second half. It is where mornings happen, where the coast becomes quiet enough to look at properly, and where the hotel earns much of its rate.`,
      `The style sits in the classic coastal register: bright Mediterranean color, hand-crafted detail, local ceramics, Italian textiles, and enough polish to keep the romance from tipping into rusticity. The smaller classic rooms start from a modest footprint by luxury-hotel standards, while larger categories add more space, bigger bathrooms, and grander terraces. That means category choice matters. If you are coming for the full Il San Pietro fantasy, do not treat the room as only a place to sleep. The terrace is part of the booking logic.`,
      `The best rooms here are less about novelty than placement. You are paying for light, privacy, elevation, and the ability to watch the coast without joining the daily traffic below. Travelers who want sleek city-hotel technology or a vast resort suite may find the mood too traditional. Travelers who want a room that feels emotionally attached to Positano rather than merely located near it will understand the appeal quickly.`
    ]),
    review_service: section([
      `Service at a hotel like Il San Pietro has to do two jobs. It must feel warm enough to match the family-owned coastal atmosphere, and it must be operationally strong enough to manage one of Europe's most impractical luxury destinations. Transfers, restaurant plans, beach timing, boat days, and shuttle movement all matter. A pretty terrace will not save a stay if the practical rhythm collapses.`,
      `The hotel's guest infrastructure is unusually important here. The 24-hour complimentary shuttle into Positano reduces dependence on the road, while the beach club, water shuttle, and seasonal complimentary boat cruise described by the hotel create ways to experience the coast without constantly re-entering the public scrum. That is service as design: not just a smiling staff member at breakfast, but a set of systems that make the destination easier to enjoy.`,
      `The tone should suit travelers who like hospitality with personality rather than corporate neutrality. Il San Pietro's identity is too specific for anonymous luxury. The risk, if you prefer hyper-formal Asian or Swiss precision, is that the Amalfi warmth may feel more relaxed than ceremonial. The gain is that the hotel feels like it belongs to this coastline, not to a spreadsheet of global standards.`
    ]),
    review_food: section([
      `Food is one of the reasons to stay rather than simply visit for the view. The hotel's dining is anchored by Zass, which the official FAQ describes as holding one Michelin star, and by Carlino, the more traditional seaside restaurant by the water. That split is exactly right for the setting. One restaurant gives the stay its polished evening ritual; the other keeps lunch closer to the sea.`,
      `Zass matters because Amalfi Coast hotels can too easily rely on scenery to do the work. Here the dining proposition has enough seriousness to stand beside the view. Chef Alois Vanlangenaeker's cooking is presented by the hotel as Mediterranean and ingredient-led, with produce tied to the region and the property's own gardens. The sensible expectation is not avant-garde performance but refined coastal cooking with enough technique to justify dressing for dinner.`,
      `Carlino is the more useful everyday pleasure: sea-level, relaxed, and better aligned with the part of the Amalfi Coast that makes people lose their judgment. A long lunch near the water, followed by a swim and the elevator back up the cliff, is the hotel's argument in miniature. The terrace bar adds the obvious sunset ritual. None of this is subtle, but Positano is not a subtle destination. The trick is making the theatre feel controlled.`
    ]),
    review_details: section([
      `The private beach club is the amenity that separates Il San Pietro from many Positano fantasies. The hotel describes it as the only private beach in Positano, reached by an elevator cut into the cliff and reserved for resident guests. Whether you are a beach person or not, that access changes the day. It gives the hotel a lower level, a sea rhythm, and a way to escape the traffic-and-stairs cycle that defines so much of the coast in high season.`,
      `The facilities are unusually complete for a cliffside Amalfi property: pool terrace, spa treatments, panoramic gym, a regulation-size sea-view tennis court, private boats, water shuttle, and the seasonal complimentary cruise from May to mid-October. The point is not that you will use everything. The point is that the hotel has enough built-in life to keep a stay from becoming a sequence of expensive taxis and restaurant reservations.`,
      `There are caveats. The hotel is seasonal, generally operating from April to October according to its FAQ. Children are welcomed from age ten and above, which supports the calmer atmosphere but makes it less suitable for young families. The property is vertical by nature, and although the cliff elevator solves the most important descent, this is still not the easiest choice for travelers who want flat resort convenience. Il San Pietro is a beautiful answer, but only to the right question.`
    ]),
    review_verdict: section([
      `Il San Pietro di Positano is one of the Amalfi Coast hotels that actually earns the mythology around it. Not because it is flawless, and not because Positano itself has become easier. It earns it because the hotel understands the coast's practical and emotional demands: privacy without isolation, sea access without public chaos, romance without total inconvenience, and enough dining and facilities to make staying put feel like a decision rather than a surrender.`,
      `Its closest competition is not simply another luxury hotel. It is the idea of staying in Positano proper, or choosing a grander address along the coast such as Belmond Caruso in Ravello. The distinction is clean. Ravello gives you height, gardens, and contemplative distance. Positano gives you theatrical immediacy. Il San Pietro gives you the useful middle: close to the performance, but not trapped inside it; built into the cliff, but with a private route to the water.`,
      `Book it if you want the Amalfi Coast as a full hotel experience rather than a logistical puzzle with a nice room attached. Skip it if you need nightlife at the doorstep, easy walking, young-child infrastructure, or contemporary minimalism. The hotel is romantic, vertical, seasonal, and deeply tied to its setting. That is the whole point. Used properly, it may be the most satisfying way to do Positano without being consumed by Positano.`
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
  console.log(`Starting Jul 4 seed...`);
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
    [`il-san-pietro-di-positano`]
  );

  if (verification.rowCount === 0) {
    throw new Error(`Verification failed: il-san-pietro-di-positano not found after seed`);
  }

  console.log(`Verified hotel: ${verification.rows[0].slug} | ${verification.rows[0].name} | published=${verification.rows[0].published}`);
  console.log(`Jul 4 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
