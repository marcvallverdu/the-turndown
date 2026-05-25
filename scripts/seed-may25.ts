import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// MAY 25 — BULGARI HOTEL TOKYO
// Ongoing weekly cadence
// ============================================================================

const hotels = [
  {
    name: `Bulgari Hotel Tokyo`,
    slug: `bulgari-hotel-tokyo`,
    brand: `Bulgari`,
    brand_slug: `bulgari`,
    location: `Yaesu, Tokyo, Japan`,
    country: `Japan`,
    country_slug: `japan`,
    region: `Asia`,
    region_slug: `asia`,
    latitude: 35.6799,
    longitude: 139.7714,
    price_range: `$$$$`,
    price_from: 1800,
    price_to: 5200,
    currency: `USD`,
    style: `Italian-Japanese High-Rise Glamour`,
    best_for: [`Couples`, `Design Lovers`, `Short City Breaks`],
    hero_image: `https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200`,
      `https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1200`
    ],
    website: `https://www.bulgarihotels.com/en_US/tokyo`,
    booking_url: `https://www.bulgarihotels.com/en_US/tokyo`,
    tagline: `Tokyo luxury with a Roman taste for drama and just enough Japanese discipline to keep it elegant.`,
    verdict_best_for: `Couples and style-conscious city travelers who want Tokyo with polish, privacy, and a stronger social charge than Aman can offer.`,
    verdict_skip_if: `You want the meditative hush of Aman Tokyo, deep neighborhood texture, or a rate that feels remotely sane for a short stay.`,
    verdict_standout: `The 45th-floor bar terrace and the glass-walled pool, both turning the Tokyo skyline into part of the theatre.`,
    rating_overall: 9.2,
    rating_room: 9.3,
    rating_service: 9.1,
    rating_food: 9.2,
    rating_value: 8.1,
    rating_location: 9.0,
    featured: 0,
    review_intro: section([
      `Bulgari Hotel Tokyo is one of those city hotels that makes its case in the first five minutes. Not because it is subtle, and not because Tokyo needs another quiet sanctuary in the sky, but because it understands mood with unusual precision. The hotel occupies floors 40 to 45 of Tokyo Midtown Yaesu, just beside Tokyo Station, and brings Bulgari's Roman house style into a part of the city that can otherwise feel all business and transfer corridors. That sounds like a clash on paper. In practice, it works better than it should. The Italian glamour gives warmth to the glass tower, while the Japanese detailing keeps the whole thing from drifting into jewelry-box excess.`,
      `This is not Aman Tokyo's temple calm, nor Janu's social buzz, nor the old-guard theatricality of the restored Park Hyatt. Bulgari lands somewhere else: urbane, plush, handsome, and faintly cinematic. There is a real point of view here. The hotel wants you to feel cosseted and slightly sharpened at the same time, the way a good city wardrobe does. You notice it in the dark polished woods, the bronze tones, the clean sightlines, the way the skyline keeps appearing behind everything like a stage set no one could afford to build.`,
      `Tokyo has become fiercely competitive at this level, which is good news for guests and bad news for any property that arrives with only branding and a high room rate. Bulgari clears that bar. It is not flawless, and I would not call it the single best luxury hotel in Tokyo. But it is absolutely one of the most persuasive if your idea of luxury includes a little voltage: excellent rooms, a genuinely strong spa and pool, serious dining, and a rooftop bar that makes even hardened hotel people admit the city looks ridiculous from up there.`
    ]),
    review_arrival: section([
      `Arrival starts at street level in Yaesu, which is not Tokyo at its prettiest. This matters because the hotel has to overcome a slightly corporate first impression. It does that with speed and control. You slip into a private entrance, are lifted high above the churn of buses and station traffic, and the atmosphere changes almost instantly. By the time the elevator opens on the 40th-floor lobby, the city has been reframed from hassle to spectacle. Staff greet you with the practiced ease you expect at this level, but the tone is less hushed than Aman and less ceremonious than some Tokyo grandees. Bulgari's version of welcome is polished and efficient, with warmth rather than ritual doing the work.`,
      `The public spaces are handsome in that specific Antonio Citterio way: expensive materials, sharp edges softened by light, furniture that looks wonderful and is actually comfortable. There is a peacock mosaic at the bar, a fireplace lounge, and enough layered texture to stop the lobby feeling like a generic international luxury box. Check-in is seated and smooth. Bags vanish without fuss. Tea appears. So does the sense that the hotel understands a city break guest has no patience for friction. The team gets you oriented briskly, points out the restaurants and spa without reciting a sales script, and moves you onward before the experience starts to congeal into process.`,
      `What the arrival does especially well is establish the hotel's personality. This is Tokyo viewed through an Italian house that likes glamour but hates sloppiness. The lobby has energy. The skyline is part of the room. You feel the proximity to Ginza and Marunouchi rather than being insulated from it. For some travelers that will be exactly the appeal: you are not being invited to disappear from Tokyo, only to occupy a more flattering version of it for a few nights.`
    ]),
    review_room: section([
      `Rooms are among the largest in Tokyo, starting at around 51 square metres, and the extra space makes an immediate difference. Many Tokyo luxury hotels are ingenious with layout but still unmistakably urban in scale. Bulgari gives you room to exhale. The design is a careful blend of Italian residential luxury and Japanese craft: warm elm, brushed metal, stone, hand-painted gold-toned ceilings, and textiles from Kyoto that keep the rooms from feeling imported wholesale from Milan. The palette stays controlled, mostly creams, tobacco, bronze, and soft charcoal, which is smart because the views are busy enough on their own.`,
      `The best thing about the rooms is not the opulence but the confidence. Automatic blinds rise to reveal the city the moment you enter. Beds are broad and deeply comfortable, dressed in linen that feels cool and weighty rather than fluffy. Bathrooms are properly indulgent, with tubs worth using, strong showers, and enough marble to remind you what you paid without tipping into vulgarity. There are thoughtful practical touches too: well-placed charging points, good task lighting, a sensible amount of storage, and acoustics that keep the room calmer than the neighborhood below has any right to allow.`,
      `If I have one reservation, it is that Bulgari's signature look can feel a shade too composed, as though every line has been adjusted half a degree toward perfection. Aman Tokyo feels spiritually transporting. Park Hyatt Tokyo feels cinematic in a more melancholic way. Bulgari feels impeccably dressed. That is not a criticism so much as a distinction. These rooms are for travelers who want beauty, comfort, and urban glamour, not monastic stillness. On that front they are very successful.`
    ]),
    review_service: section([
      `Service here is sharp, international, and notably free of Tokyo stiffness. The team is attentive without hovering and good at reading whether you want conversation, recommendations, or simply to be delivered efficiently to your room. That sounds basic, but plenty of luxury hotels still miss it. Bulgari gets the calibration right. Requests are handled quickly, staff seem empowered to solve small problems on the spot, and there is a welcome lack of overperformance. Nobody behaves as though they are auditioning to be your best friend or your butler in a period drama.`,
      `The concierge and front-of-house teams are strongest when dealing with the practical mechanics of Tokyo. Tokyo Station is next door, Ginza is walkable, and the city is vast enough that useful guidance matters. At Bulgari, recommendations tend to be crisp and usable rather than encyclopedic. The hotel feels built for guests who are in town for three or four nights and want the city unlocked cleanly: a good sushi counter, a smart cocktail bar, a driver at the right hour, a backup plan when rain changes the day. That operational intelligence suits the property's mood. It is luxury for people with plans.`,
      `Housekeeping is very good, though not quite transcendent. Rooms are reset precisely, turndown is prompt, and little details like water placement, lighting, and curtain lines are handled well. The standard is high. I just did not feel the near-telepathic softness you sometimes get at the very best Asian city hotels. Bulgari's service is polished and modern rather than deeply intimate. For many guests, especially on shorter stays, that will be preferable. It keeps the experience moving.`
    ]),
    review_food: section([
      `Food is an actual strength here, not a lifestyle accessory. Il Ristorante - Niko Romito gives the hotel serious culinary credibility, and the Italian-through-a-Japanese-lens idea makes sense in Tokyo, a city that rewards precision and ingredient clarity. The room itself is elegant without intimidation, and the cooking shows restraint where a lesser luxury hotel might reach for showmanship. Breakfast is also strong, with enough range to satisfy business travelers and leisure guests alike, but enough quality control that it still feels like a proper hotel breakfast rather than a buffet disguised by nicer crockery.`,
      `Sushi Hōseki is the opposite pleasure: intimate, exacting, and small enough to feel like a deliberate evening rather than just another hotel outlet. That contrast helps the property. One night you can lean into Italian polish and skyline glamour; the next you can disappear into an omakase counter with almost none of the surrounding theatrics. The Bvlgari Bar, meanwhile, is more than a token rooftop perch. It has become a real reason to stay here, particularly around sunset when the terrace comes alive and the city begins switching itself on below you.`,
      `This is not the hotel I would choose if the trip were built entirely around eating Tokyo. For that, I would probably stay somewhere smaller and spend my budget in the city. But for a luxury city hotel, Bulgari's food and drink offering is unusually complete. You can eat well, drink well, and feel no pressing need to leave every night. That matters more than hoteliers sometimes admit.`
    ]),
    review_details: section([
      `The spa is one of the hotel's clearest victories. Spread across roughly 1,800 square metres, it has enough scale to feel like a destination rather than a basement afterthought, and the 25-metre indoor pool is frankly terrific. Floor-to-ceiling glass turns laps into skyline theatre, while the vitality pool, saunas, and wet areas make it easy to lose a couple of hours here without apology. In a city where many urban spas are good but forgettable, Bulgari's has real presence. It helps that the design avoids faux-Zen clichés. The mood is calm, but still unmistakably urban and glamorous.`,
      `There are other smart details too. The location, while not romantic at street level, is genuinely useful: direct access to Tokyo Station, easy walks to Nihombashi and Ginza, and straightforward links almost anywhere you want to go. For a first or second Tokyo trip, that convenience is valuable. Public spaces are also unusually usable. The lounge invites lingering, the bar has genuine atmosphere, and the whole hotel gives the impression that someone thought seriously about how guests move through the day rather than merely how rooms photograph.`,
      `What Bulgari does not offer is the soulful sense of place some travelers want from Tokyo. The hotel gives you Japan through texture, craft, service discipline, and skyline, not through deep neighborhood immersion. Again, that is a choice, not an error. The details support the choice well. Fast Wi‑Fi, strong soundproofing, good fitness facilities, smooth elevators, and a general absence of operational irritation all contribute to a stay that feels expensive in the useful way: because very little is left to chance.`
    ]),
    review_verdict: section([
      `Bulgari Hotel Tokyo is one of the strongest luxury hotel additions the city has had in years because it knows exactly what it is selling. Not serenity for its own sake. Not heritage. Not Tokyo bohemia. It is selling metropolitan glamour, executed with enough taste and discipline to avoid becoming gaudy. The trickiest part of bringing a jewelry house into hospitality is avoiding the feeling that you are sleeping inside a branded object. Bulgari largely avoids that trap. The hotel feels designed, not merchandised.`,
      `Would I choose it over Aman Tokyo? If I wanted spiritual decompression, no. Would I choose it over some of Tokyo's older palace-style hotels? Very likely, yes. Bulgari is fresher, sharper, and better aligned with the way many people actually take city breaks now: a long weekend, a few excellent meals, a beautiful room, a serious spa, a bar worth dressing for, and a location that makes movement easy. It understands the modern luxury traveler without pandering to them.`,
      `The rate is undeniably steep, and Yaesu will never have the romance of a hidden lane in Kyoto or the old-fashioned grandeur of certain classic city hotels. But Bulgari is not trying to be either of those things. It is trying to give Tokyo a polished Roman accent and make the skyline feel seductive. On those terms, it succeeds. If you want a luxury hotel in Tokyo that feels glamorous, grown-up, and fully switched on, this is an easy recommendation.`
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
  console.log(`Starting May 25 seed...`);
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

  console.log(`May 25 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
