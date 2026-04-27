import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// APR 27 — THE PENINSULA HONG KONG + AMAN KYOTO
// Week 8: Asia expansion — Hong Kong, Kyoto
// ============================================================================

const hotels = [
  {
    name: `The Peninsula Hong Kong`,
    slug: `the-peninsula-hong-kong`,
    brand: `The Peninsula Hotels`,
    brand_slug: `the-peninsula-hotels`,
    location: `Hong Kong`,
    country: `Hong Kong`,
    country_slug: `hong-kong`,
    region: `Asia`,
    region_slug: `asia`,
    latitude: 22.2953,
    longitude: 114.1715,
    price_range: `$$$$`,
    price_from: 780,
    price_to: 4200,
    currency: `USD`,
    style: `Colonial Grande Dame`,
    best_for: [`Old-School Service`, `Harbour Views`, `Classic City Hotels`],
    hero_image: `https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?w=1200`,
      `https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200`
    ],
    website: `https://www.peninsula.com/en/hong-kong/5-star-luxury-hotel-kowloon`,
    booking_url: `https://www.peninsula.com/en/hong-kong/5-star-luxury-hotel-kowloon`,
    tagline: `Hong Kong's grand old hotel still understands that elegance is a discipline, not a marketing theme.`,
    verdict_best_for: `Travelers who want historic glamour, polished service, and a hotel that still treats arrival, tea, and harbour views as serious matters.`,
    verdict_skip_if: `You prefer sharp-edged contemporary design, dislike ceremony, or want a resort mood rather than a formal city hotel with opinions.`,
    verdict_standout: `The collision of old Hong Kong ritual and high-functioning modern comfort, especially when the harbour starts glittering after dark.`,
    rating_overall: 9.4,
    rating_room: 9.2,
    rating_service: 9.7,
    rating_food: 9.2,
    rating_value: 8.3,
    rating_location: 9.6,
    featured: 1,
    review_intro: section([
      `The Peninsula Hong Kong is one of those rare hotels that feels inseparable from its city. Opened in 1928 on Salisbury Road in Tsim Sha Tsui, it has watched Hong Kong reinvent itself over and over, from colonial port to financial powerhouse to restless global crossroads, and somehow it still looks entirely at ease. Plenty of famous hotels age into reverence and then into irrelevance. The Peninsula has avoided that fate because it understands something simple and difficult: legacy only matters if the current stay is excellent. The grandeur is obvious from the first look at the façade and the domed lobby beyond it, but what keeps the place alive is not nostalgia. It is competence, timing, and a very Hong Kong mix of polish and efficiency.`,
      `This is not a shy hotel. The pageboys in white gloves, the afternoon tea line, the discreet fleet of green Rolls-Royces, the harbour-facing rooms, all of it signals that The Peninsula knows exactly what role it is playing. But the performance is backed by substance. The 1994 tower expansion gave the property height, light, and much-needed room to breathe; later refurbishments added technology and cleaner detailing without sanding away the old spirit. That balance matters. A weaker renovation would have turned the hotel into either a museum with USB ports or a luxury business box wearing a heritage costume. The Peninsula feels neither dusty nor generic. It feels lived-in, alert, and expensive in ways you can actually use.`,
      `What I admire most is its refusal to become casual just because modern luxury often confuses informality with sophistication. The Peninsula still believes in proper tea, pressed linens, formal greetings, and dining rooms with posture. In the wrong hands that could feel stiff. Here it feels convincing, because the hotel does not merely perform elegance; it organizes the whole stay around it. When Hong Kong outside is flashing, vertical, humid, and overstimulated, The Peninsula offers a different rhythm. It slows the pulse without dulling the senses. That is why it remains the city's defining hotel rather than just one of its historic addresses.`
    ]),
    review_arrival: section([
      `Arrival at The Peninsula is still one of the great city-hotel set pieces in Asia. Salisbury Road is all movement, buses, shoppers, hotel cars, the thick urban hum of Kowloon, and then the doors open and the temperature of the day changes. The lobby is airy, high-ceilinged, and astonishingly composed for a place that sees this much traffic. Palms rise toward the stained glass, polished floors catch the light, and the room holds that peculiar hush grand hotels create when they are run properly. Even when it is busy, and during afternoon tea it often is, the atmosphere never tips into chaos. The staff seem to absorb the pressure before it reaches guests, which is exactly their job.`,
      `Check-in is smooth and formal without becoming drawn out. Bags disappear quickly, names are handled with confidence, and you are escorted rather than pointed. The welcome has warmth, but it is controlled warmth. No one is trying to become your friend in thirty seconds. Instead the hotel offers something better: assurance. You feel that people here know the building, know the city, and know how to move guests through the first twenty minutes of a stay without wasting time or flattening the occasion. That combination of pace and ceremony is harder to get right than it looks. In Hong Kong especially, where efficiency often wins at the expense of atmosphere, The Peninsula gives you both.`,
      `The journey to the room sharpens the impression. The transition from the older public rooms to the tower spaces tells the hotel's story in architectural form: heritage below, modern comfort above, all stitched together more elegantly than you might expect. Corridors are hushed, lighting is flattering, and by the time the door opens you understand the house style. This is a hotel that wants to reassure you immediately that everything has been thought through, from luggage timing to elevator flow to the line of sight from lobby to lift. Great arrivals do not only impress. They remove friction so completely that the stay starts before you have consciously noticed it.`
    ]),
    review_room: section([
      `The smartest room choice at The Peninsula is usually in the tower, particularly if you can secure a harbour view. The design here is more contemporary than in the original wing, but not cold: cream upholstery, dark woods, a little lacquer, subtle Chinese detailing, and windows large enough to make Victoria Harbour feel like part of the furniture. At night the skyline does the decorative work for everyone. During the day, ferries cut across the water and the whole room gains that moving, silver-blue energy that only great harbour cities can provide. It is a view with tempo, not just prettiness.`,
      `Comfort is exceptionally well handled. Beds are deep, supportive, and dressed in crisp linen that feels properly luxurious rather than over-softened. Bathrooms remain a strong point, with marble, excellent showers, deep soaking tubs in many categories, and enough counter space that two people can get ready without passive-aggressive choreography. The in-room technology, once famous for being ahead of its time, still feels intelligent rather than gimmicky. Lighting, curtains, climate, and entertainment are all easy to control, and the practical details matter just as much as the visual ones. Storage is generous, desks are usable, blackout performance is excellent, and sound insulation does the crucial work of muting one of the most kinetic cities on earth.`,
      `What the rooms do especially well is bridge the mood of old Peninsula glamour with the functional expectations of a modern long-haul traveler. They are not minimalist, and thank God for that. But they are also not cluttered with decorative reverence. The better rooms feel spacious, composed, and quietly indulgent, exactly what you want after the sensory overload of Hong Kong. Some newer luxury hotels in the city can feel sharper on first impression. Few are easier to actually live in for several nights. The Peninsula's rooms do not try to reinvent the city hotel. They simply execute it at a very high level, with enough grace to make the old formula feel fresh again.`
    ]),
    review_service: section([
      `Service is where The Peninsula justifies its reputation. Plenty of hotels can stage grandeur; fewer can deliver the deep operational fluency that makes grandeur feel effortless instead of theatrical. Here, the team understands pacing. Requests are handled quickly, but without the anxious over-eagerness that can make luxury service feel transactional. Staff remember names, preferences, and room numbers with startling accuracy. Housekeeping seems to operate on a sixth sense. Concierge recommendations tend to be precise rather than generic. If you need an old-school Cantonese lunch, a late-evening harbour transfer, or a smart fix for a rain-soaked wardrobe crisis, the response is immediate and calm.`,
      `What makes the service persuasive is not just attentiveness but judgment. Hong Kong is a city that rewards decisiveness, and the best Peninsula staff have it. They know when to move fast and when to slow a moment down. They can be formal with guests who want formality, lighter with those who do not, and they rarely misread the mood. That flexibility is invaluable in a hotel whose clientele ranges from old family regulars to first-time luxury travelers doing the classic Asia swing. No one is made to feel out of place, yet the tone of the hotel remains intact. That is sophisticated hospitality.`,
      `Turndown, room servicing, dining-room choreography, and luggage handling are all exceptionally polished. The obvious risk at a hotel this famous is that service becomes dutiful rather than human. The Peninsula avoids that trap more often than not. There is still personality in the interactions, just never sloppiness. If I have one small criticism, it is that the style of service can feel a touch formal for travelers who now prefer relaxed luxury. But that is also part of the contract. You do not check into The Peninsula for studied casualness. You check in because the hotel still believes discipline is part of pleasure, and the staff deliver that belief with impressive consistency.`
    ]),
    review_food: section([
      `Food has always been central to The Peninsula's identity, and happily the hotel still eats like a serious Hong Kong address rather than a lobby monument living off its name. The most iconic ritual is afternoon tea in The Lobby, beneath the palms and string music, where tourists, regulars, and well-dressed locals all submit to the same choreography of silver stands, petits fours, and immaculate people-watching. It is famous enough to be at risk of becoming self-parody, but the room's atmosphere and the staff's precision keep it charming. More importantly, the tea is not just scenic. It is genuinely pleasurable, with good sandwiches, proper scones, and a sense that tradition is being maintained rather than embalmed.`,
      `Beyond tea, the hotel has range. Gaddi's remains one of the old names in Hong Kong fine dining, all crystal, old-school French formality, and dishes that still value sauce work and confidence over concept noise. Felix, by contrast, brings skyline drama and a more contemporary energy, still useful for a glamorous drink even if the room threatens to steal focus from the plate. Spring Moon gives the hotel its Cantonese authority, and that matters. In Hong Kong, a luxury hotel without strong Chinese dining feels incomplete. Here the property understands that local credibility is not optional. The restaurant roster reflects the city's layered appetite rather than offering a single imported luxury script.`,
      `Breakfast is also excellent, which is often the simplest test of whether a grand hotel takes daily life seriously. Eggs are done properly, the pastry game is strong, congee and Asian options feel considered rather than token, and coffee arrives like someone actually cares about the person who has to begin the day. Room service is dependable too, with enough depth and polish that staying in can feel like a choice rather than defeat. Overall the food program does what the best hotel dining should do: it supports multiple moods, from ceremonial to private, without any obvious weak spots.`
    ]),
    review_details: section([
      `The details at The Peninsula are almost absurdly well maintained, and that is a compliment. The famous green Rolls-Royces are not just a branding flourish; they are part of a larger operational worldview in which transport, timing, and presentation matter. The helipad on the tower still gives the hotel a flash of old Hong Kong bravado, while the spa and pool offer a calmer counterpoint above the city. The pool especially, with views over the skyline, provides that rare city-hotel sensation of hovering above the urban machinery instead of merely enduring it. The shopping arcade downstairs could easily feel like dead luxury real estate, but instead it reinforces the sense that the hotel belongs to a more ceremonious era of travel, one in which a hotel was an address as much as a bedroom block.`,
      `Location is another major strength. Tsim Sha Tsui is busy, commercial, and not remotely delicate, but that is exactly why the hotel works so well here. Step outside and Hong Kong hits you in full: neon residue, ferry traffic, luxury malls, back-street noodle shops, harbour walks, and relentless momentum. Step back inside and the hotel edits the city into something legible and elegant. Access to the Star Ferry, the MTR, and the waterfront makes sightseeing and business movement easy, while the harbour-facing position keeps the place emotionally tied to Hong Kong's grandest spectacle. This is not an isolated urban sanctuary. It is a front-row seat with thick carpets.`,
      `Even small things are handled with uncommon seriousness: stationery with weight, flowers that smell of actual floristry rather than procurement, umbrellas that appear before rain becomes an issue, staff who can tell you exactly how long it will take to reach Central at different hours. These details accumulate into trust. You stop second-guessing the day because the hotel has already done so on your behalf. That is one of the central luxuries The Peninsula sells, and it remains very good at it.`
    ]),
    review_verdict: section([
      `The Peninsula Hong Kong remains one of Asia's essential city hotels because it understands the difference between history and heritage theatre. Yes, it is iconic. Yes, the lobby is famous. Yes, the rituals are intact. But none of that would matter if the hotel had lost its edge. It has not. The rooms are strong, the service is first-rate, the dining has depth, and the entire property still feels tuned to the city around it rather than trapped in memory. That is a real achievement for a hotel coming up on a century of existence.`,
      `It will not suit everyone. If your ideal Hong Kong stay is sleek, minimalist, and lightly anonymous, there are shinier options. If you hate any hint of ceremony, the pageboys and tea lines may test your patience. Rates are substantial, particularly once you start using the hotel as intended, with cars, dining, and a room category worthy of the setting. But these are clarifications, not damning flaws. The Peninsula is not trying to be a flexible luxury blank canvas. It is offering a very specific version of urban elegance, and it delivers it with confidence.`,
      `What tips it from excellent to memorable is the way the hotel interprets Hong Kong itself. It gives you colonial residue without embalming it, Chinese energy without flattening it into generic cosmopolitan gloss, and service that feels both ceremonial and fast. That combination is not easy to find now, especially in cities where luxury keeps drifting toward interchangeable neutrality. The Peninsula still has edges, which is part of its charm.`,
      `If I were sending someone to Hong Kong for the first time and they wanted one hotel that explains the city's glamour, speed, and layered identity in a single stay, this would still be near the top of the list. You can absolutely find newer rooms elsewhere. You will struggle to find the same combination of history, location, ritual, and operational sharpness. The Peninsula's real luxury is not simply beauty. It is continuity made useful. In hospitality, that is far rarer than it sounds.`
    ])
  },
  {
    name: `Aman Kyoto`,
    slug: `aman-kyoto`,
    brand: `Aman`,
    brand_slug: `aman`,
    location: `Kyoto, Japan`,
    country: `Japan`,
    country_slug: `japan`,
    region: `Asia`,
    region_slug: `asia`,
    latitude: 35.0441,
    longitude: 135.7293,
    price_range: `$$$$`,
    price_from: 1850,
    price_to: 7200,
    currency: `USD`,
    style: `Forest Minimalism`,
    best_for: [`Quiet Luxury`, `Wellness`, `Temple-Hopping with Money`],
    hero_image: `https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200`,
      `https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200`
    ],
    website: `https://www.aman.com/resorts/aman-kyoto`,
    booking_url: `https://www.aman.com/resorts/aman-kyoto`,
    tagline: `Kyoto distilled to cedar, moss, steam, and silence, then refined with Aman money and restraint.`,
    verdict_best_for: `Travelers who want seclusion, beautiful restraint, and a Kyoto stay built around stillness rather than sightseeing speed-runs.`,
    verdict_skip_if: `You want to be able to walk into Gion, chase nightlife, or save money while doing either of those things.`,
    verdict_standout: `The private garden setting and the onsen-fed spa create a version of Kyoto that feels monastic in mood and very expensive in execution.`,
    rating_overall: 9.5,
    rating_room: 9.4,
    rating_service: 9.4,
    rating_food: 8.9,
    rating_value: 7.9,
    rating_location: 8.8,
    featured: 1,
    review_intro: section([
      `Aman Kyoto is one of those hotels that makes you question whether you want a city at all. It sits in Takagamine, in northern Kyoto, near Kinkaku-ji and a cluster of temple sites, but the property itself feels less like a hotel in Kyoto than a private landscape with rooms discreetly inserted into it. Moss, cedar, maple, stone paths, filtered light, and a deep, cultivated quiet set the tone from the start. The site was originally assembled decades ago as a garden for a museum project that never materialized, and that half-finished ambition turned out to be a gift. Aman inherited not just land but mood: a hidden, highly composed piece of forest already carrying the sense that human beings should tread lightly here.`,
      `That hidden-garden feeling is the entire point. Kyoto has no shortage of beautiful hotels, but many of them are engaged in a difficult balancing act between tourism and tranquillity. Aman Kyoto resolves the tension by stepping away from the city center altogether. You trade walkability and immediacy for silence, air, and the luxury of not hearing the next table's itinerary. Architecturally the property is classic Aman, clean lines, dark timber, low-slung pavilions, long sightlines, and an almost stubborn refusal to add anything unnecessary. In lesser hands such minimalism can feel smug. Here it feels grounded because the landscape does most of the speaking. The hotel knows when to stay quiet.`,
      `What I like most is that Aman Kyoto does not try to imitate a traditional ryokan. It borrows Japanese materials, spatial rhythm, baths, and reverence for seasonality, but it remains unmistakably an Aman resort: international, polished, deeply controlled, and calibrated for guests who expect their serenity to come with serious thread counts and flawless logistics. That may sound clinical, but the property is more emotional than that. Morning mist in the garden, the smell of wet cedar after rain, the slow drift between room, onsen, tea, and dinner, these things create a stay that is less about checking off Kyoto and more about inhabiting one exquisitely edited corner of it.`
    ]),
    review_arrival: section([
      `Arrival at Aman Kyoto is intentionally understated. The drive from Kyoto Station is not especially glamorous, and that is part of the reveal. Ordinary roads, residential stretches, local traffic, and then suddenly the property folds around you and the city falls away. There is no bombastic entrance sequence, no giant lobby trying to prove the room rate. Instead you cross into a private garden and the atmosphere tightens immediately: stone underfoot, filtered light through the trees, the faint sound of water, staff who speak softly because the place itself seems to insist on it. The effect is immediate and clever. Without making a speech about calm, the hotel makes calm feel like the only available register.`,
      `Check-in happens with the usual Aman smoothness, seated, unhurried, and free of visible paperwork stress. Tea appears, practical information is delivered sparingly, and you are given just enough orientation to understand the property without shattering the mood. This matters because Aman Kyoto can initially feel almost too discreet. Paths disappear into trees, pavilions sit low against the terrain, and the whole place seems designed to conceal itself until the last possible second. The staff know this and guide the first encounter carefully, letting the guest discover the atmosphere while ensuring nobody feels geographically adrift.`,
      `The walk to the room is one of the strongest parts of the arrival. Rather than a corridor, you move through the landscape itself, along stone and timber routes that keep framing the garden in slightly different ways. In rain, the property is magnificent; in autumn, almost unfairly pretty; in winter, stark and meditative. By the time you reach the room, the hotel has done something valuable: it has slowed you down without making the process feel ceremonial. You arrive not with a burst of excitement, but with the very different pleasure of realizing your shoulders have dropped somewhere along the way.`
    ]),
    review_room: section([
      `Rooms at Aman Kyoto are beautiful in the way expensive restraint can be beautiful when nobody loses their nerve and adds decorative clutter. The palette is wood, stone, paper, charcoal, cream, and the changing greens or reds outside the windows. Nothing shouts. Nothing begs to be photographed, though of course everything is photogenic. The better rooms frame the garden with such precision that the landscape feels like moving art, and the seasonal shifts matter enormously. Spring light softens the timber, summer gives you dense green privacy, autumn turns the view into lacquered fire, and winter strips everything back to line and texture. The rooms do not overpower those changes; they receive them.`,
      `Comfort is extremely high. Beds are superb, deep and supportive, wrapped in linens that feel cool and exact. Bathrooms are a major strength, with generous wet areas, deep soaking tubs, and excellent showers, plus the kind of lighting that makes every surface look calmer than it has any right to. Many rooms include hinoki or stone bathing elements that make staying in feel like a legitimate use of a Kyoto afternoon. Storage is smart, climate control is quiet and reliable, and the technology remains discreet. Aman, when it is doing things well, understands that luxury tech should disappear into confidence. Aman Kyoto mostly gets this right.`,
      `The emotional achievement of the rooms is privacy. Not secrecy, not isolation, but true privacy, the sense that the world has receded and will stay receded until you choose otherwise. That is surprisingly hard to engineer in a high-end hotel. Many luxury rooms are quiet; fewer feel inward-looking in the right way. Here the architecture, the spacing, and the garden do the work together. If I have one caveat, it is that some guests may find the aesthetic almost too controlled, especially if they want richer local texture or a more obviously traditional Japanese atmosphere. But for travelers drawn to Aman's language of silence, proportion, and material confidence, these rooms are deeply persuasive.`
    ]),
    review_service: section([
      `Service at Aman Kyoto is polished, hushed, and highly intentional. The staff are less overtly warm than at some ryokan and less theatrically anticipatory than at certain classic grand hotels, but that is exactly the right tone for the property. Anything louder would break the spell. Requests are handled efficiently, but always in a way that seems to respect the quiet architecture of the stay. Cars appear when needed, dinner reservations are managed cleanly, and the team is particularly good at helping guests navigate Kyoto without turning every outing into a military campaign. That matters more than it might sound. From this location, the logistics of temple visits, shopping, and dining require planning, and the staff's calm competence keeps the distance from becoming annoying.`,
      `What stands out most is the consistency of the service language. From front desk to spa to restaurant to housekeeping, everyone seems to understand the same brief: be precise, be gentle, do not over-explain, and never force charm where calm will do. In many luxury hotels that can create a slightly bloodless atmosphere. Aman Kyoto avoids that by grounding the service in attentiveness rather than script. Tea appears at the right moments, room refreshes happen invisibly, and little needs are spotted before they become spoken requests. There is care here, just expressed in a quiet register.`,
      `Housekeeping is especially strong. Rooms are reset with the sort of invisible excellence that only becomes noticeable when it fails elsewhere. Slippers are aligned, bathing areas refreshed, the room returned to composure each time you step out. Spa staff are similarly accomplished, both technically and atmospherically. If I were being exacting, I would say that the service can occasionally feel more Aman than Kyoto, more globally polished than locally intimate. Some guests may prefer a touch more personality. But the hotel's chosen idiom is serenity through discipline, and the staff deliver that with remarkable steadiness.`
    ]),
    review_food: section([
      `Dining is the least overwhelming part of Aman Kyoto, which is not the same thing as weak. It is good, sometimes very good, but the hotel is not a major food destination in the way some urban Japanese luxury properties are. The Living Pavilion by Aman handles breakfast and much of the all-day rhythm, and the room itself, open to the garden, is beautifully judged. Morning here is one of the quiet pleasures of the stay: careful fruit, excellent rice, grilled fish, elegant Japanese breakfast options, and Western alternatives executed without condescension. Coffee is serious, tea even more so, and the whole thing is paced to support the atmosphere rather than kick against it.`,
      `Dinner tends to lean into seasonal Japanese ingredients with Aman's international polish. At its best, the food echoes the property's architecture: clear, restrained, and exact. The challenge is that Kyoto is one of the world's great eating cities, and the hotel inevitably competes with the imagination of what else you might be having somewhere in Gion or downtown. That makes adequacy feel smaller here than it would elsewhere. Aman Kyoto wisely avoids trying to out-theatrical the city. Instead it focuses on setting, ingredient quality, and the pleasure of not having to leave the grounds after a day of temple visits and walking. In that context, the dining works well.`,
      `The hotel also does small rituals nicely, tea, sweets, in-room dining, post-onsen indulgence, and that matters because the stay is built around internal rhythm as much as external exploration. Room service is dependable, well presented, and genuinely useful when the weather turns or the day has emptied you out. I would not book Aman Kyoto purely for the restaurants. I would book it knowing the food is good enough to support the broader experience and clever enough not to fight the mood. In a property like this, that is the right kind of culinary intelligence.`
    ]),
    review_details: section([
      `The details are what make Aman Kyoto feel so costly and, for the right traveler, worth it. The garden is not just scenery; it is the central amenity. Paths through moss and cedar slow every movement, and the seasonal shifts turn ordinary walks between room and restaurant into part of the stay's emotional arc. Nearness to Kinkaku-ji and other northern Kyoto temple sites is useful, but the real luxury is returning to a property that feels untouched by the bus groups you just escaped. The onsen-fed spa strengthens that sense of remove. Hot water, steam, cedar scent, low light, and the general Aman gift for making wellness feel architectural rather than decorative all come together beautifully here.`,
      `The spa itself is excellent, though not flashy. Treatments are strong, the thermal elements are convincing, and the whole area carries the same restraint as the rest of the property. You do not come here for a giant menu of pseudo-scientific wellness promises. You come for bathing, recovery, and calm executed with precision. The gym is discreet but well equipped, and private experiences, meditation, temple visits, craft workshops, are handled with the seamless competence Aman guests expect. Again, the hotel's real skill is editing. It presents Kyoto as something you can enter and leave deliberately, rather than being swallowed whole by it.`,
      `The main practical drawback is location. For some guests, thirty minutes in a car to central Kyoto will start to feel like friction, especially if the plan is aggressive sightseeing and multiple dinners out. But I think that criticism misses the point unless your itinerary is badly matched to the property. Aman Kyoto is not a base for speed. It is a retreat with temple access. Once you accept that, the details start reading correctly: pathways instead of hallways, garden views instead of city lights, silence instead of convenience. The hotel has chosen its priorities and executed them with unusual conviction.`
    ]),
    review_verdict: section([
      `Aman Kyoto is one of the most beautiful hotels in Japan, and also one of the clearest examples of luxury through subtraction. It removes noise, friction, visual clutter, and social pressure until what remains is landscape, architecture, bathing, sleep, and the soft ritual of being looked after quietly. For travelers who want Kyoto to feel contemplative rather than crowded, that is incredibly seductive. The rooms are gorgeous, the setting is rare, and the overall mood is hard to replicate elsewhere in the city.`,
      `The caveats are obvious and important. It is extremely expensive. The location is inconvenient if your priority is hopping between neighborhoods. The dining, while good, is not the single defining reason to stay. And if you want the warmth and ritual density of a true ryokan, you may find the Aman style a little too globally polished. None of those are hidden flaws. They are simply the cost of a hotel that has chosen serenity over versatility and executed that choice with almost ruthless coherence.`,
      `What you are really buying here is permission to experience Kyoto differently. Not faster, not more comprehensively, but more quietly. The property encourages fewer plans, longer pauses, and a more seasonal kind of attention. For some travelers that will feel restrictive. For the right ones it will feel like rescue. Very few hotels are this committed to a single emotional outcome, and fewer still can deliver it without becoming precious.`,
      `Would I recommend it? Absolutely, but specifically. This is not the Kyoto hotel for everyone. It is the Kyoto hotel for people who want stillness with money behind it, who understand that a room can be a form of mental architecture, and who are willing to trade convenience for atmosphere. In that lane, it is superb. Aman Kyoto does not show you all of Kyoto. It gives you one very exact, very beautiful version of it, and if that version matches your mood, the stay can feel almost medicinal.`
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
  console.log(`Starting Apr 27 seed — The Peninsula Hong Kong + Aman Kyoto...`);

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

  console.log(`Apr 27 seed complete! 2 hotels published.`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
