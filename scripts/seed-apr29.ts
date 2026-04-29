import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// APR 29 — PARK HYATT TOKYO + CAPELLA BRAND PROFILE
// Week 8: Asia expansion — Hong Kong, Kyoto, Tokyo
// ============================================================================

const hotels = [
  {
    name: `Park Hyatt Tokyo`,
    slug: `park-hyatt-tokyo`,
    brand: `Park Hyatt`,
    brand_slug: `park-hyatt`,
    location: `Tokyo, Japan`,
    country: `Japan`,
    country_slug: `japan`,
    region: `Asia`,
    region_slug: `asia`,
    latitude: 35.6856,
    longitude: 139.6906,
    price_range: `$$$$`,
    price_from: 850,
    price_to: 5200,
    currency: `USD`,
    style: `High-Rise Urban Icon`,
    best_for: [`Tokyo First-Timers`, `Skyline Views`, `Film-Hotel Pilgrims`],
    hero_image: `https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200`,
      `https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=1200`
    ],
    website: `https://www.hyatt.com/park-hyatt/en-US/tyoph-park-hyatt-tokyo`,
    booking_url: `https://www.hyatt.com/park-hyatt/en-US/tyoph-park-hyatt-tokyo`,
    tagline: `Tokyo's great cinematic hotel, newly restored and still floating above Shinjuku with more soul than most newer towers can buy.`,
    verdict_best_for: `Travelers who want the Tokyo skyline as a daily companion, serious hotel mythology, and a stay that feels quieter and stranger than the business district below.`,
    verdict_skip_if: `You want immediate street-level energy, ryokan intimacy, or a hotel that hides its 1990s DNA completely.`,
    verdict_standout: `The New York Bar at night, when the glass goes black, the city turns electric, and the hotel remembers exactly why it became an icon.`,
    rating_overall: 9.2,
    rating_room: 9.1,
    rating_service: 9.3,
    rating_food: 9.0,
    rating_value: 8.0,
    rating_location: 8.7,
    featured: 1,
    review_intro: section([
      `Park Hyatt Tokyo has always had more atmosphere than convenience, which is part of why people love it. It opened in 1994 on the upper floors of Kenzo Tange's Shinjuku Park Tower, looking down over Tokyo from a height that made the city feel both enormous and oddly private. Then Lost in Translation turned it into a cinematic shorthand for glamorous loneliness: jazz, jet lag, whisky, glass, night, the feeling of being suspended somewhere between continents. That association could have trapped the hotel in amber. Instead, after its 19-month restoration and December 2025 reopening, Park Hyatt Tokyo feels newly alert while still recognisably itself. The renovation did not erase the strange hush that made the place famous. It clarified it.`,
      `The hotel is not the easiest luxury address in Tokyo. It sits in Nishi-Shinjuku, away from the more immediately seductive hotel neighborhoods of Marunouchi, Ginza, Toranomon, or Aoyama. The approach can feel corporate and a little windswept, especially at street level, where the tower's scale is more impressive than intimate. But this slight awkwardness is also the point. Park Hyatt Tokyo is not a street hotel; it is a sky hotel. Its real life begins when the elevator rises and the city drops away beneath you. Up there, the granite, art, pale woods, books, flowers, and long views create a mood that is difficult to replicate. It is urban, but not frantic. Expensive, but not glossy. Famous, but still a little melancholic.`,
      `What makes the reopened hotel compelling is its refusal to chase the taste of newer Tokyo luxury. It has not tried to become Aman Tokyo, Janu Tokyo, Bulgari Tokyo, or Four Seasons Otemachi. It remains Park Hyatt Tokyo: architectural, vertical, quietly theatrical, a little aloof, with the confidence of a hotel whose best rooms do not need to shout because the city outside does enough shouting for everyone. The restoration by Jouin Manku sharpened materials, refreshed rooms, and improved comfort, but wisely left the emotional premise intact. This is still the hotel for people who want Tokyo at a distance close enough to feel thrilling and far enough away to process. That is a very specific kind of luxury, and Park Hyatt still owns it.`
    ]),
    review_arrival: section([
      `Arrival is the least romantic part of the Park Hyatt Tokyo experience, and I almost respect the hotel more for not pretending otherwise. The Shinjuku Park Tower is a monumental 1990s office complex, not a lantern-lit ryokan or a palace courtyard. Cars pull into a polished but businesslike arrival area, bags are collected, and the first impression is competent rather than intoxicating. If you arrive expecting immediate theatre, you may wonder whether the myth has been oversold. Then the vertical sequence begins. Staff guide you through the lower levels, the elevators climb, Tokyo starts falling away, and the hotel gradually reveals that its lobby is not on the ground because the ground was never the story.`,
      `The transition matters. By the time you reach the hotel floors, the mood has shifted from office-tower practicality to a more rarefied calm. Light changes. Materials become softer. Flowers appear with the kind of Japanese precision that makes abundance look controlled. The reception spaces have that Park Hyatt grammar of residential ease and expensive restraint: art books, sculpture, wood, stone, staff who do not overtalk. Check-in is seated and efficient, with enough warmth to soften the formality but not so much that the hotel loses its composure. After the renovation, the process feels smoother, less museum-like, and better calibrated for contemporary arrivals who may be coming off a long-haul flight and do not want a lecture on facilities.`,
      `What saves the arrival from anonymity is the view, which begins to assert itself in fragments and then all at once. Tokyo is not a skyline in the simple postcard sense. It is a field of light and structure, dense and endless, with Mount Fuji occasionally appearing like a trick of the imagination on clear days. Park Hyatt understands that this is its great first-act reveal. The staff do not need to oversell it. They simply move you through the building until the city does the work. A good arrival makes you excited. A better arrival changes your tempo. Here, the effect is subtler: you start speaking more quietly, looking outward more often, and remembering that Tokyo is best understood from alternating extremes of immersion and distance.`
    ]),
    review_room: section([
      `Rooms at Park Hyatt Tokyo have always been larger and calmer than Tokyo's average, and the restoration has made them feel less like preserved 1990s luxury and more like a considered continuation of it. The design still favors pale woods, stone, clean geometry, and a slightly residential serenity, but the surfaces feel fresher, the lighting is better, and the technology no longer asks guests to forgive it for being historic. The best rooms face west or south, where the city opens dramatically and, on clear winter mornings, Fuji appears with almost indecent clarity. If you are staying here, pay for the view. Without it, you are missing the central argument of the hotel.`,
      `The rooms work because they create psychological space as much as physical space. Tokyo can be exhilaratingly dense, and returning to a room high above Shinjuku gives the day somewhere to settle. Beds are properly excellent: supportive, quiet, and dressed in linen that feels crisp without being hotel-stiff. Seating areas are useful rather than decorative, with chairs you can read in and desks you can actually work from. Bathrooms retain the hotel's preference for stone, glass, and deep soaking, now with improved fittings and a more current sense of light. The tubs matter. A hot bath while the city glows below is one of the property's purest pleasures, especially after walking twenty thousand steps through Harajuku, Ginza, and the basement food halls of Shinjuku.`,
      `The renovation's greatest success is that the rooms still feel like Park Hyatt Tokyo, not a generic luxury refresh. There is a certain cinematic spareness here, a refusal to clutter the scene. Some guests may want more obvious Japanese craft, more warmth, or more of the decorative density found in newer hotels. I think restraint suits the building. The tower, the altitude, and the views already bring drama; the room's job is to provide stillness. Practicalities are strong: storage is generous by Tokyo standards, blackout performance is serious, sound insulation is excellent, and controls are far more intuitive than in the pre-renovation years. The result is not the flashiest room product in Tokyo, but it is one of the easiest to inhabit. It gives you the rare feeling of being alone with the city without being abandoned by the hotel.`
    ]),
    review_service: section([
      `Service at Park Hyatt Tokyo is polished in the Japanese international-hotel mode: formal, precise, gentle, and rarely flustered. This is not the hyper-personalized warmth of a small ryokan, nor the clubby familiarity of certain European grande dames. It is more architectural than emotional, which suits the property. Staff appear at the right moments, speak carefully, and solve problems without making a performance of helpfulness. The best interactions have a lovely quiet intelligence: a coat offered just before you realise the evening has cooled, a taxi timed with unnerving accuracy, a restaurant recommendation adjusted because someone noticed you were tired rather than ambitious.`,
      `The concierge team is especially important here because the location requires interpretation. Nishi-Shinjuku is useful but not obvious. You need help deciding when to take a taxi, when to use the station, which restaurants justify cross-city movement, and which supposedly essential neighborhoods can wait. A good concierge in Tokyo is less a gatekeeper than a strategist, and Park Hyatt's team generally understands this. They can handle the classic requests, from sushi counters to bar reservations, but they are most useful when shaping a day that does not become a logistical punishment. Tokyo rewards planning, and the hotel is good at turning appetite into itinerary.`,
      `Housekeeping is excellent, almost invisibly so. Rooms are reset with Japanese discipline and Park Hyatt softness: bath areas refreshed, linens corrected, surfaces cleared without personal effects being rearranged into moral judgement. Turndown is calm and useful rather than theatrical. Bottled water appears, curtains close, lighting lowers, and the room becomes evening-ready. Service in the restaurants and bars varies slightly by venue, with the New York Bar carrying more personality and the quieter dining rooms leaning more formal. If there is a criticism, it is that the hotel can occasionally feel emotionally reserved, especially for guests used to effusive luxury. But I would rather have Park Hyatt's composed competence than exaggerated warmth. The hotel is at its best when it behaves like a thoughtful host who trusts silence.`
    ]),
    review_food: section([
      `Food and drink are central to Park Hyatt Tokyo because the hotel is, in a sense, a collection of rooms in the sky. The New York Bar remains the defining venue, and it still works. It could have become a cosplay of its own fame, all selfie pilgrims and film nostalgia, but the bones are too strong for that: soaring glass, live jazz, low light, cocktails, and Tokyo stretching in every direction. Yes, people come because of the movie. They stay because the room understands night. The best time is not necessarily late, when the crowd thickens, but just as evening takes hold and the city begins changing from concrete to electricity. Order a martini or Japanese whisky, accept the cover charge as part of the theatre, and do not overcomplicate it.`,
      `The New York Grill, connected to the bar, has been refreshed without losing its high-altitude brasserie confidence. It is not where I would send someone for Tokyo's most delicate cooking; the city is too deep with better specialist restaurants for that. But as a hotel restaurant it succeeds because it gives you scale, protein, wine, and views in a room that feels like an occasion. The Japanese dining options are more restrained, with Kozue historically providing a quieter counterpoint through seasonal cooking and a stronger sense of place. Breakfast is handled with the kind of calm competence that makes jet lag less offensive: good fruit, careful eggs, Japanese options that feel like real choices rather than cultural garnish, and coffee strong enough to prepare you for Shinjuku Station.`,
      `Room service is better than it needs to be, which is important in a hotel where the room is part of the reason to stay. There are nights when eating at the desk or by the window, bathrobe on, skyline outside, feels more appealing than performing enthusiasm for another reservation. Park Hyatt understands that mood. The food arrives hot, neatly presented, and without the clatter that can make in-room dining feel like an intrusion. Overall, the dining is not the most adventurous in Tokyo and should not pretend to be. Its purpose is atmosphere, reliability, and a few indelible moments. On that brief, it delivers. The bar alone remains one of Asia's great hotel rooms, not because it is fashionable, but because it still knows how to make a night feel suspended.`
    ]),
    review_details: section([
      `The hotel's details are inseparable from its altitude. The Club on the Park, with pool, gym, and spa facilities high above the city, remains one of Tokyo's most distinctive urban wellness spaces. The pool is dramatic without being silly: long enough for proper swimming, bright with natural light, and positioned so the act of doing laps feels faintly surreal. After the renovation, the wellness areas feel cleaner and more current, but the essential pleasure is unchanged. You are exercising above a city of nearly impossible density, suspended in a quiet box of water and light. That contrast is the luxury. Treatments are competent and soothing, though I would not choose the hotel solely for spa culture. I would choose it because wellness here includes visual distance, and that is surprisingly restorative.`,
      `The library-like public spaces are another Park Hyatt signature. The hotel has always understood the value of books, art, flowers, and corners where guests can sit without being monetised every three minutes. In a city that can make even leisure feel scheduled, these pauses matter. Corridors and lounges carry a residential intelligence absent from many luxury towers. You feel that the hotel was designed by people who expected guests to linger, not just circulate from room to restaurant to car. The restored interiors keep that idea alive while removing some of the pre-renovation heaviness that had started to gather around the property.`,
      `Location remains the practical compromise. Shinjuku gives you transport, nightlife, parks, department stores, and a certain hard urban energy, but the tower is not as frictionless as hotels connected directly to Tokyo Station, Ginza, or Otemachi. You will use taxis more than you expect, and walking back late from Shinjuku's louder corners is not the hotel's most elegant moment. But the trade-off is worth it if you want the Park Hyatt mood. There is also something honest about staying here: Tokyo is not only polished retail and temple calm. It is office towers, train lines, neon, concrete, fatigue, beauty, and absurd scale. Park Hyatt does not deny that. It frames it, edits it, and gives you a place from which to look again.`
    ]),
    review_verdict: section([
      `Park Hyatt Tokyo is no longer Tokyo's newest or most technically dazzling luxury hotel. Good. It is more interesting than that. The city now has Aman minimalism, Bulgari gloss, Janu wellness-social energy, Four Seasons polish, Hoshinoya's ryokan-in-the-city experiment, and a growing field of design hotels with sharper neighborhood access. Park Hyatt cannot and should not try to beat all of them on every metric. Its power lies in a very particular emotional frequency: high above Shinjuku, cinematic but not sentimental, formal but not frozen, restored but not reinvented beyond recognition.`,
      `The hotel is best for travelers who understand that atmosphere is not a spreadsheet category. If you want the simplest logistics, stay near Tokyo Station or Ginza. If you want the deepest Japanese ritual, book a serious ryokan in Kyoto, Hakone, or beyond. If you want the most contemporary Tokyo luxury product, there are newer candidates with stronger claims. But if you want one of the great urban hotel experiences in Asia, a stay that turns the skyline into a companion and makes jet lag feel almost poetic, Park Hyatt Tokyo still matters. The renovation has made it easier to recommend, removing many of the old objections around dated rooms and tired surfaces while preserving the mood that made the hotel famous.`,
      `I would not call it flawless. The approach is awkward, rates can feel ambitious, and the service style may be too reserved for guests who equate luxury with constant warmth. But those are edges, not failures. Park Hyatt Tokyo has always been a hotel of distance: from the street, from ordinary time, from the version of yourself that rushes through cities without seeing them. Its best quality is the way it makes Tokyo feel both overwhelming and intimate in the same glance. Very few hotels can do that. Fewer still can do it after three decades, a film mythology, and a major renovation. Park Hyatt Tokyo has survived its own legend. That may be its most impressive achievement.`
    ])
  }
];

// ============================================================================
// CAPELLA BRAND PROFILE
// ============================================================================

const brands = [
  {
    name: `Capella`,
    slug: `capella`,
    tagline: `Small-scale luxury with a strong sense of place, serious design, and far less corporate dead air than the big groups.`,
    hero_image: `https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600`,
    content_md: `# Capella

Capella is one of the more interesting luxury hotel brands because it has grown slowly enough to retain a point of view. In an industry where expansion often turns taste into a template, Capella still feels like a collection of individual hotels rather than a portfolio map coloured in for investors. The company began under Horst Schulze, one of the defining figures behind Ritz-Carlton's service culture, and is now part of Capella Hotel Group, headquartered in Singapore. That origin story matters because Capella's strongest properties combine two things luxury hotels often separate: disciplined service and genuine local texture.

The brand's promise is not loud. It does not sell barefoot rebellion like Soneva, monastic serenity like Aman, or heritage grandeur like Peninsula. Capella's lane is more subtle: intimate hotels in meaningful locations, designed with enough restraint to let the place speak, but operated with the precision expected at the top end of the market. At its best, a Capella hotel feels residential without becoming sleepy, local without slipping into costume, and expensive without needing to keep reminding you of the rate.

## The Philosophy: Locality With Discipline

The phrase every hotel brand uses now is sense of place, usually just before installing beige furniture and three pieces of commissioned craft. Capella is better than that. Its strongest hotels do not simply borrow local motifs; they structure the stay around the destination's emotional logic. In Bangkok, that means a low-rise riverside compound in Charoen Krung, where the Chao Phraya is a working river rather than a scenic backdrop. In Singapore, it means colonial buildings on Sentosa converted into a resort that feels leafy and private without denying the city nearby. In Ubud, it means Bill Bensley's theatrical tented camp in the Balinese jungle, a property so visually specific that it could not be mistaken for anywhere else.

The discipline comes from service. Capella's Culturist programme is the brand's signature idea: staff who operate somewhere between concierge, host, and informed local friend. This can sound gimmicky, but in the better hotels it works because the Culturists are not merely processing bookings. They interpret the destination. They tell you what is worth your time, which tourist ritual to avoid, when to cross the city, where to eat, and how to experience the place without reducing it to a checklist. In cities like Bangkok and Sydney, that interpretive layer is genuinely valuable.

## The Hotels

Capella Singapore remains the brand's foundational property and a useful expression of what the company does well. Set on Sentosa, it combines restored colonial buildings with contemporary extensions by Foster + Partners. The mood is quiet, green, and removed from Singapore's harder urban edges. It is not the hotel for travelers who want to step directly into hawker centres and financial-district energy. It is for those who want Singapore softened by palms, lawns, sea air, and a resort rhythm. The property's importance was sealed when it hosted the 2018 Trump-Kim summit, but the better reason to stay is simpler: it gives a highly managed city a sense of escape.

Capella Bangkok is the brand's current masterpiece. Opened on the Chao Phraya River in Charoen Krung, it rejects the high-rise glamour that dominates much of Bangkok luxury. André Fu's interiors are warm, low, and river-facing, with rooms and villas that treat water as the central decorative element. The hotel works because it has confidence in slowness. You are not sealed away from Bangkok; the neighborhood presses against the gates. But inside, the river, gardens, and scale create a persuasive calm. The food is also unusually strong, especially with Mauro Colagreco's presence giving the property culinary seriousness beyond the usual hotel-restaurant claims.

Capella Ubud is the eccentric sibling and possibly the purest example of theatrical luxury done with intelligence. Bill Bensley designed it as a camp of lavish tents set into the jungle, inspired by early European explorers in Bali. That premise could have gone horribly wrong. Instead, the property is exuberant, detailed, and deeply tied to its landscape. It is not restrained in the classic Capella Bangkok sense, but it is precise. Every tent has personality. The jungle is not wallpaper. The entire stay feels like entering one designer's very expensive dream, which is risky and memorable in equal measure.

Capella Sydney brought the brand into a grand urban heritage setting, converting the former Department of Education building near Circular Quay. This property matters because it shows Capella can handle city gravitas without becoming stiff. The building has weight: sandstone, arches, civic scale, a sense of institutional history softened by contemporary interiors. Sydney has not always had hotel stock equal to its natural beauty, and Capella helped raise the ceiling. It is formal enough to feel special, relaxed enough to feel Australian, and located well for both harbour and business life.

Capella Hanoi, designed again by Bill Bensley, is a smaller, operatic property near the Hanoi Opera House. The design leans into theatrical fantasy, with suites inspired by artists, singers, and performance. It is not for minimalists. But it has the advantage of being specific, which is increasingly rare. You may not want every hotel to be this decorated, but you remember it. That memorability is part of Capella's broader strength: the brand is willing to let individual properties have a real personality.

## Design Language

Capella does not have a single visual uniform, and that is a compliment. The unifying thread is not colour palette or furniture shape but scale, material seriousness, and narrative control. Properties tend to be intimate by luxury standards. They favour generous rooms, strong arrival sequences, and public spaces that feel like places to occupy rather than corridors to revenue outlets. Designers are chosen for specific projects rather than forced into a brand grid. André Fu's Bangkok and Bill Bensley's Ubud could hardly be more different, yet both feel Capella because both are committed to their setting.

This flexibility gives the brand an advantage over larger hotel groups whose properties often feel designed by committee. A Capella hotel can be calm, theatrical, urban, resort-like, colonial, or contemporary, provided the concept is coherent and the service supports it. The risk is inconsistency. Guests who fall in love with the soft restraint of Bangkok may find Hanoi too decorative or Ubud too eccentric. But I would rather a brand risk character than guarantee tasteful anonymity. Luxury travel has enough beige competence already.

## Service and Culture

Capella's service style is warmer and more personal than Aman, less ceremonious than Peninsula, and more locally engaged than many Four Seasons properties. The best teams have a conversational intelligence that feels refreshing after the scripted polish of larger brands. The Culturists are central to this. When the programme is strong, it can transform a stay by connecting guests to the destination in ways that feel natural rather than packaged. When it is weaker, it risks sounding like concierge service with a new title. Execution therefore matters enormously, and the brand's smaller scale helps maintain standards.

What Capella generally avoids is the dead-eyed luxury language that flattens so many hotels. Staff are allowed to have opinions. Recommendations can be specific. The tone is polished but not airless. This is important because the brand attracts travelers who have already done the obvious hotels and want something more particular. They do not need a lobby to impress them through scale. They need the hotel to help them understand why this address, this neighborhood, this building, this river bend or jungle clearing, was worth choosing.

## Who Capella Is For

Capella is for luxury travelers who want individuality without sacrificing operational reliability. It suits people who appreciate design, food, and neighborhood context, but who still want luggage handled, dinner booked, rooms cleaned perfectly, and transfers timed correctly. It is an excellent brand for second- or third-time visitors to a destination: people who no longer need the most famous address and are ready for the more interesting one. In Bangkok, that means choosing Charoen Krung over the familiar riverside institutions. In Singapore, it means choosing resort quiet over downtown efficiency. In Ubud, it means choosing theatrical immersion over neutral wellness minimalism.

It is less suited to travelers who want giant resort infrastructure, absolute brand predictability, or the social voltage of bigger luxury hotels. Capella properties are often intimate, sometimes quiet, and occasionally idiosyncratic. That is their strength. The brand's best hotels feel edited rather than expanded, cared for rather than rolled out. As Capella grows, the challenge will be preserving that sharpness. Expansion is where hotel brands usually lose their nerve. For now, Capella remains one of the few luxury groups whose new openings are still worth paying attention to, because there is a real chance they will add something to the conversation rather than merely another expensive bed in another expensive city.`,
    hotel_count: 8,
    founded_year: 2002,
    parent_company: `Capella Hotel Group`,
    best_property: `capella-bangkok`,
    website: `https://capellahotels.com`,
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
  console.log(`Starting Apr 29 seed...`);
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

  console.log(`Apr 29 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
