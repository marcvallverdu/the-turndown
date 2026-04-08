import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// APR 8 — SINGITA KRUGER NATIONAL PARK + MOROCCO DESTINATION GUIDE
// Week 5: Morocco + Africa
// ============================================================================

const hotels = [
  {
    name: `Singita Kruger National Park`,
    slug: `singita-kruger-national-park`,
    brand: `Singita`,
    brand_slug: `singita`,
    location: `Sabi Sand Reserve & Kruger region, South Africa`,
    country: `South Africa`,
    country_slug: `south-africa`,
    region: `Africa`,
    region_slug: `africa`,
    latitude: -24.8074,
    longitude: 31.4947,
    price_range: `$$$$`,
    price_from: 2400,
    price_to: 6800,
    currency: `USD`,
    style: `Ultra-luxury safari lodge`,
    best_for: [`Safari`, `Service`, `Conservation-led travel`],
    hero_image: `https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200`,
      `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200`
    ],
    website: `https://singita.com/lodge/singita-kruger-national-park/`,
    booking_url: `https://singita.com/`,
    tagline: `Safari at its sharpest, where the game drives are serious and the luxury never turns soft in the head.`,
    verdict_best_for: `Travelers who want the emotional punch of a first-rate safari without sacrificing food, design, and service that can stand beside the best city hotels.`,
    verdict_skip_if: `You want a cheap box-ticking safari, dislike long game drives, or prefer your wilderness experience to feel rougher and less polished.`,
    verdict_standout: `The density of wildlife paired with guides who read the bush like critics read a novel, noticing what everyone else walks past.`,
    rating_overall: 9.7,
    rating_room: 9.5,
    rating_service: 9.8,
    rating_food: 9.3,
    rating_value: 8.7,
    rating_location: 9.9,
    featured: 1,
    review_intro: section([
      `Singita is one of the few names in safari that still means something precise. Plenty of lodges have copied the visual language of high-end bush travel, the weathered wood, the neutral linen, the bath with a view, the guide with easy charisma and a Land Cruiser polished for photography. Much fewer have matched the substance. What makes Singita's Kruger ecosystem so formidable is not that it is pretty, though it certainly is, or that it is expensive, which it undeniably is. It is that the operation has conviction. It believes a safari can be intellectually serious, emotionally moving, operationally exacting, and deeply comfortable all at once. That sounds obvious until you stay at enough properties that settle for only one or two of those qualities and market the gap as style.`,
      `The broader Singita footprint in the Kruger region spans several lodges, each with its own personality, but the core promise is consistent: exceptional wildlife access in private reserve territory bordering the national park, guides and trackers working at a level that justifies the rates, and hospitality that understands luxury is not the opposite of wilderness but the frame that allows you to absorb it properly. The land here is the main event. Dawn begins cold and blue, with dust rising behind the vehicle and francolins calling from the scrub. By mid-morning the light turns metallic, bleaching the grasses and pulling heat from every stone. At dusk the sky often does that African trick of becoming too large for ordinary language, pink and copper at the edges, the silhouettes of acacia branches holding still for a second before darkness takes over. The lodge is brilliant because it never competes with this. It amplifies it, edits it, gives it rhythm.`,
      `There is also a moral seriousness to Singita that matters. Luxury safari can drift into a kind of aestheticized extraction, guests flying in, photographing animals, leaving with the glow of righteousness and no understanding of how fragile the whole system is. Singita makes conservation part of the experience without turning the guest journey into homework. The anti-poaching work, community investment, habitat restoration, and long-term stewardship are not decorative paragraphs on a website. They are part of the brand's identity, and you feel that integrity in the guiding, the staffing, and the way the land is discussed. This is still a luxury product, of course, and a very costly one, but it is not an empty one. In a sector that can be alarmingly full of beige platitudes, that distinction matters.`
    ]),
    review_arrival: section([
      `Arrival depends on which lodge and airstrip you are using, but the emotional arc is broadly the same: the world narrows, then sharpens. You leave Johannesburg or Cape Town in a small aircraft, the city grids fall away, and the land below begins to look like the thing you came for, folded ridgelines, dry riverbeds, scattered trees, the occasional shimmer of water. By the time you land on the bush airstrip, you are already half converted. A staff member is waiting, often with a guide or tracker who can spot game on the transfer before you have even adjusted to the light. It is not unusual for the first ten minutes to include giraffe, impala, elephant, or something larger if the day is feeling generous. That immediate collapse of distance between travel and experience is one of safari's great pleasures, and Singita handles it beautifully.`,
      `The lodge arrival itself is calm rather than theatrical. Cold towels, something to drink, a briefing that is concise enough to be useful, and then straight into the practical poetry of the place: where breakfast happens, when the drives run, how the binoculars fit, which path to your suite is lit at night, what to do if an elephant wanders near the deck. Staff speak with the kind of relaxed confidence that only comes from repetition and competence. Nobody oversells. They do not need to. If anything, the tone is slightly understated, which I prefer. Safari works best when the property trusts the bush to do the seduction.`,
      `What stays with you from arrival is the shift in sensory priorities. In a city hotel, you notice lobby music, scenting, design signatures. Here you notice the wind in dry grass, the smell of dust after the vehicle stops, the way the air cools under shade, the low percussion of something unseen moving through brush beyond the building. The lodge creates shelter, but it never lets you forget where you are. That balance is harder than it looks. Some safari lodges stage wilderness from a safe distance. Singita makes you feel held by the property without insulating you from the pulse outside it. That is exactly the right note to hit.`
    ]),
    review_room: section([
      `Suites at Singita are polished enough to satisfy seasoned luxury travelers and restrained enough to avoid turning the bush into a backdrop for interior design vanity. The palette leans earthy, which is sensible, but there is more personality than the usual safari monotony of taupe on taupe. Stone floors keep the rooms cool, timber warms the edges, textiles add pattern without fuss, and the furniture is arranged for living rather than photographing. The beds are excellent, large, firm in the right places, and dressed in linens that feel crisp when you slide into them after an afternoon drive. Mosquito netting, where used, is practical rather than romantic nonsense. The rooms are designed around air, light, and the view line outward, which is what matters.`,
      `Bathrooms are generous and genuinely pleasurable: double vanities, deep tubs in some categories, indoor and outdoor showers depending on the lodge, and enough shelf space that two people can spread out without negotiating by toothpaste. The materials are tactile instead of flashy, matte stone, leather pulls, woven baskets, bronze fittings that improve with use. Mini-bars and tea setups are well judged, though the real luxury is the small pause before dawn when you wake to coffee quietly delivered and the world outside still half-dark. Safari rooms live or die by how they handle that transition between sleep and anticipation, and Singita has it down. You can step onto a deck with a blanket around your shoulders, hear a distant hyena whoop, and feel the entire day gathering itself.`,
      `What the rooms do especially well is remain emotionally useful after the first wow moment. Many luxury lodges impress for ten minutes, then flatten into mere square footage. Singita's rooms keep earning their keep. They are places where you actually want to spend the hot middle of the day reading, writing notes from the morning drive, taking a nap, or simply watching nyala move through the brush below. The plunge pools and decks are not gimmicks but instruments of pace. After hours of movement and concentration in the vehicle, the stillness of the suite matters. The room gives you somewhere to metabolize what you have just seen. That may be the most underrated part of safari design: not creating drama, but creating enough quiet for the drama to land.`
    ]),
    review_service: section([
      `Service at Singita is some of the most emotionally intelligent in luxury travel. Not just good for safari, good full stop. The staff understand that guests arrive with wildly different energies: honeymooners wanting to disappear into each other and the landscape, families with children vibrating from the sight of their first lion, seasoned safari people who care deeply about bird calls and spoor, exhausted executives trying to remember what silence feels like. The operation adapts to all of them without losing its own character. That flexibility is rare. It comes from training, yes, but also from a hospitality culture that values reading the room over reciting the script.`,
      `The guides and trackers are the stars, and rightly so. A great safari lives or dies by the people in the front seats, and Singita's teams are elite. Their knowledge is not merely encyclopedic, it is contextual. They do not bombard you with facts for the sake of sounding informed. They interpret. A set of tracks in dust becomes a story about timing, appetite, caution, and territory. The posture of a herd tells you what predator might be near. Bird alarm calls suddenly make sense as a language rather than background noise. The trackers in particular can feel almost absurd in their competence, reading broken stems, depressions in sand, or one half-erased paw print and turning the vehicle toward a sighting that seems impossible until it isn't. You pay a premium for this level of fieldcraft, and here at least you receive it.`,
      `Beyond the drives, the service remains impressively exact. Laundry returns quickly and folded properly. Dietary preferences are remembered after a single mention. Housekeeping works around the safari schedule with military grace, somehow resetting your room while you are at brunch or dinner without once making the operation feel visible. There is humor too, which matters. The best safari hospitality resists self-importance, and Singita generally gets that right. If I had one note, it is that the brand's polish can occasionally feel a touch global-luxury in cadence. A slightly rougher edge would not hurt. But that is a minor complaint against an operation that consistently performs at a level most competitors only describe in brochures.`
    ]),
    review_food: section([
      `Food is not why you come on safari, but when it is done well it becomes part of why you remember the trip. Singita's cooking is thoughtful, generous, and far above the standard safari compromise of acceptable meals buoyed by location. Breakfasts after the morning drive are particularly strong, because appetite in the bush is real. Fresh fruit actually tastes of something, eggs arrive precisely as ordered, pastries are competent rather than decorative, and there is enough variety to satisfy both the disciplined and the gloriously hungry. Lunch tends to be lighter, which is wise in the midday heat, salads with texture, grilled fish or chicken, vegetables with actual seasoning instead of spa-resort piety.`,
      `Dinner carries more ceremony, though the lodge wisely avoids making it fussy. Menus change, South African wines are poured with pride rather than as a token patriotic gesture, and there is usually a nice oscillation between refined plating and the primal satisfaction of being fed well after hours in the bush. Boma dinners or outdoor meals under stars can be wonderful when handled with restraint. Singita generally understands that atmosphere should heighten appetite, not smother it in performance. The best evenings are the simplest ones: a good red from the Cape, smoke in the air, the table animated by replays of the day's sightings, someone still half in disbelief over the leopard that stepped out at sunset.`,
      `The wine program deserves specific praise. South Africa remains undervalued in luxury hospitality relative to the quality of its bottles, and Singita makes a strong case for local drinking. Stellenbosch reds, Hemel-en-Aarde pinot noir, Swartland blends, serious chenin blancs, there is range and intelligence here, not just prestige labels for expense-account comfort. Bush minibars, picnic stops, and sundowner setups are also well judged. Safari teaches you that context alters flavor. A gin and tonic after a hot drive, with elephants in the distance and dust on your boots, tastes better than many tasting-menu pairings in cities. Singita knows this and does not overcomplicate it. Food here supports the experience instead of demanding top billing. That is exactly what it should do.`
    ]),
    review_details: section([
      `The details at Singita are where the difference between serious safari and luxury safari theatre becomes obvious. Vehicles are well maintained and configured for comfort without becoming ridiculous. Blankets are ready when dawn bites, ponchos appear if the weather turns, binoculars are decent, snack stops are timed by mood rather than spreadsheet, and the radios crackle with just enough information to build anticipation without turning the reserve into a traffic report. The viewing itself benefits from private reserve access, meaning off-road tracking is possible when appropriate and sightings can unfold with a patience the public park system cannot always allow. This matters immensely for cats, for den activity, for those long, half-hour stretches where nothing much seems to be happening until your guide quietly points out that everything is happening if you know how to look.`,
      `Back at the lodge, the architecture and amenities are calibrated to safari rhythm. Pools are cool relief rather than statement sculpture. Spa treatments exist, but wisely remain secondary. There are libraries and lounges where you can identify birds, review field guides, or simply stare into the middle distance while pretending to read. Fire pits and decks turn transition times into part of the day rather than dead space between scheduled events. Even the walkways and lighting are considered from the perspective of someone moving at night in a place where the darkness is real. The staff brief you on escorts, animal movement, and common sense without infantilizing you. Wilderness remains present in the mechanics of the stay, which keeps the whole experience honest.`,
      `Then there is the conservation layer, which is not a decorative add-on here. You hear about anti-poaching, habitat management, and local employment because those things are inseparable from the land you are enjoying. Singita's best detail may be that it gives you a more adult understanding of luxury. Not luxury as insulation from reality, but luxury as access to a place cared for properly, interpreted by experts, and protected with seriousness. In an era where many expensive experiences feel inflated and oddly vacant, that is worth more than another oversized tub or another scented candle ever could be.`
    ]),
    review_verdict: section([
      `Singita in the Kruger ecosystem is one of the finest safari experiences on the continent, and I do not say that lightly. The wildlife density is exceptional, the guiding and tracking are world-class, the rooms are beautiful without becoming silly, and the service understands that genuine luxury is mostly timing, intelligence, and restraint. You can absolutely spend less and still see animals. You can also spend almost as much elsewhere and receive something flatter, more generic, more obviously built for the brochure than for the actual guest. Singita earns its reputation because the operation is coherent from the runway pickup to the final game drive. Everything points in the same direction.`,
      `The question is whether the price feels justified. For travelers who care only about ticking off the Big Five, probably not. There are cheaper ways to collect sightings. But if you value the depth of the field experience, the quality of the guide conversation, the comfort that lets you stay alert rather than depleted, and the conservation ethos that gives the whole enterprise some spine, then yes, this is money spent on substance. I would particularly recommend Singita for first safari trips if budget allows, because it sets the standard correctly. It teaches you what to notice, which makes every later safari better, even if you never again travel at this level.`,
      `What remains after departure is not just the lion or leopard photograph, though you will almost certainly leave with one of those. It is the feeling of the day structured properly around wonder: coffee in the dark, the first tracks in the road, the stillness before a sighting, brunch when the sun is already high, a nap under a fan, the low golden hour before the evening drive, a drink in the bush while the sky burns down, the long exhale of dinner under stars. Singita gets that rhythm exactly right. In safari, that rhythm is everything. Here, it is close to perfect.`
    ])
  }
];

const destinations = [
  {
    name: `Morocco`,
    slug: `morocco`,
    country: `Morocco`,
    region: `Africa`,
    hero_image: `https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600`,
    intro_md: `From Marrakech's perfumed grand hotels to Atlantic surf towns, desert camps, and mountain kasbahs, Morocco rewards travelers who like their luxury textured rather than sanitized.`,
    best_time: `March to May, late September to November`,
    content_md: `# Morocco

Morocco is one of those destinations that people describe badly because they are too overwhelmed or too charmed to be precise. They talk about color, chaos, spices, souks, desert stars, tiled courtyards, the call to prayer at dusk. All true, all insufficient. What matters for a luxury traveler is that Morocco remains one of the rare places where high-end hospitality still has to contend with a genuinely forceful sense of place. The country does not smooth itself out for your convenience. It seduces, exhausts, delights, and occasionally needles you. The best hotels understand this and do not try to erase it. They create relief, rhythm, and beauty without disconnecting you from the thing you came to feel.

That is Morocco's central luxury proposition in 2026. Not sterile perfection, not the interchangeable international fantasy of marble and orchids and concierge scripts, but immersion with a better mattress, a cleaner hammam, a car waiting when you have had enough of motorbikes in the medina. The country now has a serious luxury hotel ecosystem: palace hotels in Marrakech, design-forward retreats in the Atlas foothills, desert camps that are actually comfortable, riads restored with taste instead of tourist theatre, Atlantic coast properties where the light alone justifies the flight. But the best Moroccan trips depend less on star ratings than on sequencing. Morocco rewards movement between intensities.

## Understanding the Rhythm of Morocco

The mistake many first-time visitors make is treating Morocco as a checklist. Two nights in Marrakech, one in the desert, one in Fes, maybe a detour to Chefchaouen because Instagram made the blue walls look compulsory. The result is a blur of transfers, beautiful doors, and low-level exhaustion. Morocco is richer when treated as a set of moods rather than monuments.

There is the city mood: dense, fragrant, noisy, hypnotic, especially in Marrakech and Fes where every turn offers commerce, history, or both. There is the mountain mood: thinner air, red earth, villages clinging to slopes, paths that smell of thyme and dust. There is the desert mood: space, silence, theatrical skies, and the relief of visual simplicity after the density of the medinas. Then there is the coast, where Morocco exhales into wind, salt, sardines on the grill, and a pace that feels almost Portuguese in its softness.

A strong itinerary plays these against each other. It lets Marrakech overwhelm you a little, then sends you to the Atlas or the Atlantic before you start fantasizing about moving into a silent room with blackout curtains and no WhatsApp. It gives the desert enough time to feel like a place instead of a prop. It accepts that not every city deserves equal weight. Morocco is not hard to love. It is harder to pace well. That is the difference between a good trip and a superb one.

## Marrakech, Still the Center of Gravity

Marrakech remains the obvious entry point and, for many travelers, the emotional center of a Moroccan trip. The city has enough sensory force to make even excellent hotels feel like necessary acts of recovery. The medina still delivers what people fly for: narrow alleys with no clear logic until you surrender the need for logic, spice merchants performing certainty, orange juice stalls, copper hammered into shape, the occasional mopeds threading through spaces that seem physically impossible. Jemaa el-Fnaa remains both overexposed and still somehow irresistible, particularly at dusk when smoke rises from the food stalls and the square shifts from spectacle to organism.

Where to stay depends on what role you want the hotel to play. **Royal Mansour Marrakech** is the city's most accomplished luxury address, a private-riad fantasy executed with state-backed seriousness and almost absurd craftsmanship. Choose it if privacy, design, and total control matter most. **La Mamounia** is the grand, social answer, more theatrical, more glamorous, more willing to flirt with excess. Choose it if you want atmosphere, gardens, bars with pulse, and that delicious feeling of having arrived somewhere that still believes in glamour.

For travelers who want something smaller, the riad scene in the medina remains strong, but quality varies wildly. Some are exquisite, calm, and deeply personal. Others trade on decorative cliché and call it authenticity. The sweet spot is usually a well-run riad for a shorter cultural immersion, then a larger hotel outside the walls for decompression. Marrakech is best enjoyed in doses. Morning in the souks, lunch in a garden courtyard, a pause by the pool, then out again as the heat drops. The city rewards alternating exposure and retreat.

## The Atlas Mountains, Morocco's Best Contrast

If Marrakech is the opening argument, the Atlas Mountains are the necessary counterpoint. Within an hour or two of the city, the landscape changes completely. Flat pink walls give way to switchbacks, riverbeds, walnut groves, villages built from packed earth, and peaks that hold snow deep into spring. The air is cleaner, the soundscape gentler, and the scale of the land restores perspective in a way the medina never can.

This is where **Kasbah Tamadot** earns its reputation. Richard Branson's property could easily have become a glossy outsider's version of Berber romance. Instead, it works because the site is magnificent and the operation has matured. Terraces look over valley folds that change color by the hour. The rooms mix comfort with enough local reference to feel grounded. The service is warm, and the mountain activities, village walks, mule trails, market visits, provide a real sense of the region rather than a decorative one.

There are also more intimate mountain lodges and guesthouses, particularly around Imlil and the Ourika Valley, that make sense for travelers prioritizing hiking and simplicity over full luxury infrastructure. But for most readers of this site, the Atlas works best as a reset button after Marrakech. Two or three nights is enough to understand why the region matters. You sleep cooler, eat simpler food, look at longer horizons, and remember that Morocco is not only about decorative density. It is also about land.

## Fes, the Intellectual Counterpart

Fes lacks Marrakech's instinct for seduction, which is partly why some seasoned travelers prefer it. The city is less polished as a tourism product, more intellectually satisfying, and in places more difficult. The medina is older, denser, and less forgiving. The architecture is extraordinary, the craftsmanship real, and the feeling of historical continuity stronger. You come to Fes less for glamour and more for atmosphere with weight.

Luxury accommodation here tends toward restored palaces and serious riads rather than grand hotels. **Riad Fes** remains one of the stronger names, and **Palais Faraj** offers scale and views that help if the medina begins to press in. The city rewards travelers who care about history, craftsmanship, and scholarship, less so those who simply want the prettiest version of Moroccan travel. Tanneries, madrasas, hidden courtyards, old libraries, Fes asks you to pay attention. It is not as easy as Marrakech, and that is a virtue.

If time is limited, I would still send most first-time visitors to Marrakech over Fes. But on a second trip, or for travelers who prefer density of meaning over ease, Fes can be the more interesting city. Just do not combine the two on an overstuffed schedule. They compete rather than complement if rushed.

## The Desert, Which Must Be Handled Carefully

The Sahara occupies a peculiar place in Morocco's tourism imagination. Everyone wants the dunes, the stars, the camel silhouettes, the campfire under a black sky. Fair enough. The imagery earns its fame. But the desert is also where the worst travel clichés gather: thin luxury, fake authenticity, endless driving for too little time, camps built more for drone footage than for sleep.

The good version is still worth doing. In the Erg Chigaga or Merzouga areas, the best camps and lodges now offer proper bedding, thoughtful food, strong guiding, and enough design confidence to avoid both rough-it machismo and overdecorated fantasy. The key is to give the desert enough breathing room. If you drive all day, arrive at sunset, sleep one night, and leave at dawn, you have consumed a postcard rather than visited a landscape. Two nights is better. It allows one arrival, one full day of understanding the scale and silence, and one departure that does not feel like an escape room challenge.

I also think the desert works best later in a trip, after cities and maybe mountains. The emptiness lands harder that way. You need contrast for the silence to feel medicinal.

## The Atlantic Coast, Morocco's Most Underrated Luxury Play

If Morocco has a future growth area in luxury travel, it is the Atlantic coast. **Essaouira** already understands this. The city has sea air, white-and-blue architecture, a medina human enough to enjoy without wanting to lie down afterward, and a food culture built on grilled fish, olives, bread, and a wonderful lack of fuss. It is windy, gloriously so. That wind keeps temperatures civilized and gives the whole place a looseness Marrakech does not possess.

For years, Essaouira attracted artists, surfers, and Europeans who wanted Morocco without the hard sell. Now it also offers enough design hotels, smart riads, and elegant outskirts properties to satisfy higher-end travelers. It is particularly good for couples, solo travelers, and anyone whose nervous system improved just reading the sentence grilled sea bass by the ocean.

Further south, places like **Taghazout** and the road toward Agadir are becoming more sophisticated, though the development can be uneven. Surf camps have improved, wellness retreats are multiplying, and a handful of luxury properties now make the coast viable for longer stays. The danger is overdevelopment and imported sameness. The best coastal stays still feel tied to Morocco's textures, argan trees, whitewashed walls, sardines, mint tea, surfboards, Atlantic weather, rather than pretending to be southern California in a djellaba.

## What Morocco Does Better Than Almost Anywhere

First, craft. Proper Moroccan luxury still has access to a decorative tradition of astonishing depth. Zellige tile, carved cedar, tadelakt plaster, woven textiles, hammered metal, hand-dyed leather, these are not shallow stylistic references here. They are living techniques. When used well, they give hotels texture and moral weight. You are not looking at machine-manufactured simulations of artisanal beauty. You are surrounded by the thing itself.

Second, atmosphere. Morocco understands thresholds. Doors, courtyards, tunnels of shadow, gardens after heat, rooftops after crowds, hammams after dust. The country knows how to make relief feel earned, and hotels can build on that to extraordinary effect. A good Moroccan property does not just give you a room. It gives you transitions.

Third, sensory memory. Few destinations leave behind such vivid residue. The smell of orange blossom in a courtyard at breakfast. The metallic sound of a spoon against a tea glass. Dust on your shoes after walking through the medina. Cumin, charcoal smoke, cedar, diesel, jasmine, sea salt on the coast. Morocco lingers because it reaches you through more than sight.

## What to Eat and Drink

Moroccan food in hotels can sometimes become too polished for its own good, but the country's culinary strengths remain obvious if you know where to lean in. Tagines should taste concentrated, not sugary and vague. Couscous should have structure. Salads, especially tomato and cucumber, orange with cinnamon, roasted peppers slicked with olive oil, can be exceptional. Pastilla at its best is still one of the great celebratory dishes: crisp pastry, savory filling, sweetness in the right amount, tension rather than confusion.

Breakfast is often the most consistently rewarding meal. Fresh msemen, honey, jam, olives, eggs, amlou, orange juice that tastes of actual fruit, strong coffee or mint tea. The Atlantic coast adds seafood, obviously, and Essaouira in particular is a superb fish city. In Marrakech and Fes, excellent dining now spans traditional and more contemporary interpretations, but I would still choose one very good Moroccan meal over three international fusion menus every time.

Alcohol exists, though less prominently than in Europe. Top hotels pour well. Morocco also produces decent wine, especially from the Meknes region, and while you are unlikely to fly home evangelizing it, the better bottles are far more than an afterthought. Mint tea remains the greater ritual, though. Accept that it will be sweet. That sweetness is part of the point.

## A Strong First Itinerary

If I were building a first serious Morocco trip for someone who values luxury but wants the country rather than a polished summary of it, I would do this:

**Three nights in Marrakech.** One day for the medina and souks, one for gardens, museums, and slower wandering, one partially spent by the pool before a strong dinner. Stay at Royal Mansour if you want privacy and design discipline, La Mamounia if you want glamour and social energy.

**Two nights in the Atlas Mountains.** Reset the nervous system. Walk, read, sleep with the windows cracked if the season allows, and let the horizon lengthen again.

**Two nights in Essaouira.** Trade red dust for salt air, swap palace grandeur for white walls and fish on the grill, and remember Morocco also knows how to be easy.

If time allows, add **two nights in the desert** or **two nights in Fes**, depending on whether you want emptiness or intellectual density.

## Practical Notes

**When to go:** Spring and autumn are the sweet spots. March to May and late September through November offer the best balance of warmth, manageable city heat, and comfortable desert or mountain travel. Summer in Marrakech can be punishing. Winter is excellent for cities and the desert but can be cold in the mountains and at night.

**How to move around:** Private drivers are often worth the cost, not only for comfort but for pacing. Morocco's road journeys can be beautiful, but they are rarely quick. Domestic flights save time on long jumps, though reliability varies. Trains work well on some routes, especially between major northern cities, but luxury itineraries often benefit from car transfers.

**How long to stay:** Longer than you think, and in fewer places than your optimistic planning instincts suggest.

**How to buy well:** Carpets, ceramics, baskets, linens, lamps, leather goods, all of it can be excellent, but quality varies wildly. Buy where craftsmanship is visible, not where pressure is highest.

## The Verdict

Morocco remains one of the most rewarding luxury destinations within easy reach of Europe because it has not surrendered its rough edges. The point is not that the country is chaotic and therefore authentic. That is a lazy cliché. The point is that Morocco still asks something of the traveler: patience, curiosity, appetite, a tolerance for intensity, and a willingness to let beauty come wrapped in friction. The best hotels do not erase that relationship. They make it livable and memorable.

That is why Morocco works so well for thoughtful luxury travel. You can have extraordinary beds, proper service, serious design, and still spend the day in places that smell of leather, cedar smoke, sea wind, or dust after heat. You can move from one of the world's great grand hotels to a mountain terrace to a fish lunch by the Atlantic within a week and feel as though each place has argued with the last one in productive ways. Morocco gives you contrast, and contrast is what keeps travel alive.

Come for the courtyards and lantern light if you must. Stay for the much better reason: Morocco still knows how to make a traveler feel something sharp and specific, then offer them mint tea and a beautiful room in which to recover.` ,
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

const destinationColumns = [
  `id`, `slug`, `name`, `country`, `region`, `hero_image`, `intro_md`,
  `best_time`, `content_md`, `published`
];

const insertHotelQuery = `INSERT INTO hotels (${hotelColumns.join(`, `)}) VALUES (${hotelColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;
const insertDestinationQuery = `INSERT INTO destinations (${destinationColumns.join(`, `)}) VALUES (${destinationColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting Apr 8 seed — Singita Kruger National Park + Morocco destination guide...`);

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
    console.log(`✅ Inserted hotel: ${hotel.name}`);
  }

  for (const destination of destinations) {
    await pool.query(insertDestinationQuery, [
      randomUUID(), destination.slug, destination.name, destination.country,
      destination.region, destination.hero_image, destination.intro_md,
      destination.best_time, destination.content_md, destination.published
    ]);
    console.log(`✅ Inserted destination: ${destination.name}`);
  }

  console.log(`\nApr 8 seed complete! 1 hotel review and 1 destination guide published.`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
