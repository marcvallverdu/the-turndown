import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// MAY 18 — PASSALACQUA
// Ongoing weekly cadence
// ============================================================================

const hotels = [
  {
    name: `Passalacqua`,
    slug: `passalacqua`,
    brand: `Passalacqua`,
    brand_slug: `passalacqua`,
    location: `Moltrasio, Lake Como, Italy`,
    country: `Italy`,
    country_slug: `italy`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 45.8607,
    longitude: 9.0958,
    price_range: `$$$$`,
    price_from: 1700,
    price_to: 8000,
    currency: `EUR`,
    style: `Aristocratic Lake Villa`,
    best_for: [`Romance`, `Quiet Glamour`, `Lake Como First-Timers`],
    hero_image: `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200`,
      `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200`
    ],
    website: `https://www.passalacqua.it/en/today/`,
    booking_url: `https://www.passalacqua.it/en/today/`,
    tagline: `Lake Como's most talked-about villa, polished until it gleams but still intimate enough to feel private.`,
    verdict_best_for: `Couples, celebratory travelers, and anyone who wants Lake Como at its most seductive without the scale and ceremony of an old palace hotel.`,
    verdict_skip_if: `You want a huge resort, need a deep children's program, or prefer contemporary minimalism to frescoes, silk, and theatrical Italian charm.`,
    verdict_standout: `The terraced gardens dropping toward the lake, with a pool that feels like it was placed there by someone who understood exactly how people dream about Como.`,
    rating_overall: 9.5,
    rating_room: 9.4,
    rating_service: 9.6,
    rating_food: 9.1,
    rating_value: 8.2,
    rating_location: 9.5,
    featured: 1,
    review_intro: section([
      `Passalacqua is the rare hotel that arrives trailing hype and still manages to feel better in person. On paper, the formula sounds almost too perfect: an eighteenth-century villa on the western shore of Lake Como, only twenty-four rooms, manicured gardens sliding toward the water, a glamorous Italian ownership story, and the kind of editorial praise that usually becomes exhausting by the time you check in. In reality, the place works because it is not trying to prove anything. The villa is grand, yes, but not stiff. The mood is lavish, but never vulgar. Most importantly, it has the one quality that separates a beautiful hotel from a memorable one: emotional temperature. Passalacqua feels warm from the first minute.`,
      `This was once a private residence, and the house memory still lingers. You notice it in the proportions of the rooms, in the way salons open onto staircases instead of anonymous corridors, and in the fact that the whole property seems arranged around pleasure rather than efficiency. Frescoed ceilings, velvet-lined sitting rooms, marble bathrooms, and old mirrors could have tilted the hotel toward museum-piece preciousness. They do not. There is too much life in the place for that. Staff move with brisk assurance, the gardens smell of cut grass and lemon leaf, and somewhere in the background there is almost always the soft percussion of lake water against stone.`,
      `Lake Como has no shortage of famous addresses, but Passalacqua occupies a particularly clever position in the market. Grand Hotel Tremezzo gives you scale and social energy. Villa d'Este gives you institution-level grandeur. Mandarin Oriental Lago di Como gives you polished modernity. Passalacqua gives you intimacy without austerity. It is the Como hotel for travelers who want to feel they have gained access to a private world, not merely booked a very expensive room.`
    ]),
    review_arrival: section([
      `You arrive through the village of Moltrasio, one of those handsome lake towns that seems permanently caught between faded nobility and ordinary Italian daily life. Laundry hangs from balconies. Elderly residents talk outside small cafés. Then the gates of Passalacqua open and the mood shifts in a single beat. A cypress-lined drive leads upward through the grounds, and the villa appears slowly enough to make the reveal feel earned. It is a smart piece of staging. By the time the building comes fully into view, you are already slightly under its spell.`,
      `Check-in does not happen with corporate choreography. Someone greets you like a host rather than a front-desk operative, takes your bag, offers a drink, and starts orienting you to the house in conversational fragments instead of memorised bullet points. This is a hotel that understands that arrival should lower your pulse. There is no hard sell, no overexplained wellness philosophy, no barrage of information about facilities. Instead, you get a sense of being gently absorbed into the rhythm of the place. That tone matters because so much of Passalacqua's appeal depends on making luxury feel relaxed rather than effortful.`,
      `The walk to the room deepens the impression. Staircases curve theatrically. Windows frame little flashes of lake. The air indoors stays cool in that old-villa way, as if stone and shade have been conspiring for centuries. Even before you see the room itself, you understand the central seduction of the property: this is not a hotel built around corridors and inventory. It is a villa adapted for guests, and that gives the whole stay a slightly illicit pleasure, as though you are being allowed to sleep inside someone else's impossibly beautiful life.`
    ]),
    review_room: section([
      `Rooms at Passalacqua are lavish without becoming heavy. The decorative vocabulary is unapologetically Italian: frescoes overhead, lacquered furniture, jewel-toned fabrics, marble with enough veining to qualify as scenery. Yet the rooms do not feel stage-set. They feel inhabited in the right way, thanks to details that soften the grandeur: books stacked casually on tables, curtains that hang with real weight, beds dressed in linen that feels crisp at first touch and almost liquid once you slide into it. There is a confidence to the interiors. Nothing begs for approval.`,
      `The best rooms have lake views that justify every cliché anyone has ever written about Como light. Morning arrives silver and pale blue; by late afternoon the water darkens and the hills across the lake look almost painted. In a weaker hotel, that view would do all the work. Here it is matched by bathrooms large enough to matter, with deep tubs, excellent showers, and amenities that smell clean and expensive rather than aggressively perfumed. Storage is generous, lighting is better judged than in many heritage properties, and the air-conditioning works quietly, which is more important on summer nights than hoteliers sometimes admit.`,
      `Technology is present but discreet. There are enough plugs, the Wi‑Fi behaves, and nothing about the room asks you to download an app in order to close a curtain. Good. A place like this would only cheapen itself by pretending that digital gimmicks are luxury. Real luxury here is spatial: windows that open, chairs you actually want to sit in, silence thick enough to notice, and a bed that makes you reconsider dinner because staying in suddenly seems like a plausible life choice.`
    ]),
    review_service: section([
      `Service at Passalacqua is its sharpest weapon. Plenty of luxury hotels are attentive; fewer manage to be attentive while feeling spontaneous. Here the staff give the impression of noticing everything without turning that into a performance. Water appears before you realise you are thirsty. A preferred table somehow becomes available at breakfast. A boat excursion is arranged with the ease of a friend making a phone call rather than a concierge launching an operation. The effect is not magic exactly, but very polished intuition.`,
      `What I liked most is that the staff seem genuinely at ease inside the house's glamour. No one acts intimidated by the setting, and that keeps guests from feeling intimidated too. The tone is warm, lightly playful, and unmistakably Italian. You are not managed from a distance. People chat, make recommendations with conviction, and steer you firmly when needed. Ask where to eat around the lake and you are more likely to get an opinion than a safe list. That is a virtue. A hotel at this level should not be neutral about quality.`,
      `Housekeeping is strong in the way the best housekeeping always is: mostly invisible until you notice how good you feel in the room every time you return. Turndown is thoughtful rather than ornamental. Curtains are drawn properly, lights are recalibrated, water is placed where your hand will find it in the dark, and the bed somehow looks even more inviting than it did that morning. There may be grander properties on the lake, but very few are run with this degree of supple precision.`
    ]),
    review_food: section([
      `Food at Passalacqua is less about formal culinary fireworks than about making the villa feel delicious from morning to night. That is the right call. Lake Como rewards appetite, but not necessarily tasting-menu solemnity. Breakfast is the meal that best captures the hotel's charm: excellent fruit, proper pastries, eggs cooked accurately, good coffee, and a setting that makes dawdling feel morally justified. If you sit outside, the lake does half the seasoning work for the table.`,
      `Lunch leans Italian in the most persuasive way: things you actually want to eat on a warm day near water. Tomatoes that taste fully alive, pasta that understands the value of restraint, fish treated simply because it does not need rescuing, gelato worth interrupting a conversation for. There is intelligence in the menu's refusal to overcomplicate itself. Too many luxury hotels confuse ambition with elaboration. Passalacqua is smarter than that. It knows that confidence often looks like doing less and doing it cleanly.`,
      `Dinner can feel romantic almost to the point of parody, except the quality keeps it on the right side of the line. Candlelight, polished service, low conversation, the lake outside going black: the setting is a seduction machine, but the kitchen largely holds up its end of the bargain. I would not call this the most thrilling food on Lake Como, and obsessive diners may still want to eat out on some nights. But as part of the whole Passalacqua atmosphere, the restaurant works beautifully.`
    ]),
    review_details: section([
      `The gardens are the defining amenity. They step down the hillside in theatrical layers, with clipped hedges, old trees, hidden corners, and just enough visual drama to keep every short walk from room to breakfast feeling cinematic. This kind of landscaping can easily become decorative excess; here it gives the property its emotional architecture. You do not merely look at the grounds. You move through them, and the experience changes your sense of the hotel from beautiful object to living place.`,
      `The pool is superbly placed, with the lake beyond and enough surrounding greenery to keep the mood secluded rather than performative. It is one of those pools that encourages lingering even when you are not swimming. The spa and fitness offerings are competent rather than transformative, which is fine. Passalacqua is not primarily a wellness retreat. Its version of wellness is old-fashioned and more convincing: sleep well, eat well, spend time outside, take a boat on the lake, read in the shade, and let the place do its work on your nervous system.`,
      `Practical matters are handled intelligently. Boat arrangements are easy. Transfers into Como and around the lake can be organised without friction. Wi‑Fi reaches where it should. Public rooms are inviting enough that you actually use them. Perhaps the most telling detail is that there are no obvious dead zones in the experience, no soulless corner where the illusion breaks and you suddenly remember operational spreadsheets exist. That continuity is hard to achieve. Passalacqua makes it look easy.`
    ]),
    review_verdict: section([
      `Passalacqua is one of the best luxury hotels in Italy because it understands that glamour without softness is exhausting. Everything here is beautiful, but beauty is not the endpoint. The villa, the lake, the interiors, the gardens, the service, all of it is arranged to make you feel loosened, admired, and slightly spoiled. That combination is harder to pull off than it sounds. Plenty of grand hotels can manage two of those qualities. Very few manage all three.`,
      `It is also a hotel with a clear point of view. If you want democratic bustle, choose elsewhere. If you want a giant resort with endless facilities, choose elsewhere. If you want cool, sparse contemporary design, definitely choose elsewhere. Passalacqua believes in romance, decoration, hospitality with personality, and luxury as theatre with a human face. I happen to think that is the correct belief system for Lake Como. The setting asks for sensuality, not restraint.`,
      `The price is painful, and there is no honest way around that. Value, in purely rational terms, is not the story here. But travelers do not come to places like this for rationality. They come for memory. Passalacqua is very, very good at creating memory: the crunch of gravel underfoot on the way to breakfast, the smell of the gardens after evening watering, the hush of the room once the shutters are drawn, the lake catching the last light like brushed metal. If that is the version of luxury you are chasing, this place delivers it with uncommon grace.`
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
  console.log(`Starting May 18 seed...`);
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

  console.log(`May 18 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
