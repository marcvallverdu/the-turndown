import { Pool } from 'pg';
import { randomUUID } from 'crypto';
import { schema } from '../lib/schema';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

const hotels = [
  {
    name: `Aman Tokyo`,
    slug: `aman-tokyo`,
    brand: `Aman`,
    brand_slug: `aman`,
    location: `Tokyo, Japan`,
    country: `Japan`,
    country_slug: `japan`,
    region: `Asia`,
    region_slug: `asia`,
    latitude: 35.685,
    longitude: 139.7514,
    price_range: `$1,200-$2,800`,
    price_from: 1200,
    price_to: 2800,
    currency: `USD`,
    style: `Minimalist Japanese`,
    best_for: [`Wellness`, `Architecture`, `Silence`],
    hero_image: `https://images.unsplash.com/photo-1587874522487-fe10e954d035?w=1600`,
    images: [
      `https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200`,
      `https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200`
    ],
    website: `https://www.aman.com`,
    booking_url: `https://www.aman.com`,
    tagline: `Minimalism at its most extravagant.`,
    verdict_best_for: `Couples who equate silence with luxury and travelers who want Tokyo at a whisper.`,
    verdict_skip_if: `You want a scene, nightlife, or a lobby that feels like a social club.`,
    verdict_standout: `The onsen-spa sequence with skyline views and monk-like quiet.`,
    rating_overall: 9.6,
    rating_room: 9.7,
    rating_service: 9.6,
    rating_food: 9.2,
    rating_value: 8.8,
    rating_location: 9.5,
    featured: 1,
    review_intro: section([
      `Aman Tokyo sits above Otemachi like a private temple, all hush and daylight, and the city’s roar feels edited the moment you step into the sky lobby. The hotel occupies the upper floors of a glass tower, but it does not behave like a tower hotel. The first impression is of scale and restraint: stone floors that drink sound, columns with the proportions of a shrine, and a view that unspools across the city without demanding attention. It is rare to find a property this tall that feels grounded, but the materials do the work—warm woods, textured washi, and a palette that shifts between dove gray and tea-stained cream. The effect is not austere; it is soothing, even sensuous, like good paper against your palm. The tone is unmistakable Aman: low lighting, slow pace, and spaces that feel designed for the single, deliberate gesture.`,
      `Tokyo can be overwhelming even for seasoned travelers, and Aman Tokyo makes an argument for a different kind of urban luxury: not escape, but filtration. You are still in the center of it all, but your interface with the city is softened. From the pool, the skyline becomes abstract; from the lounge, the city is a low hum. The hotel is at its strongest when you allow it to set your rhythm. If you do, it delivers a stay that feels less like a hotel night and more like a small retreat stitched into the skyline. It is not a place for checklist tourists or travelers who want fireworks; it is a place for people who notice the weight of a door and the silence of an elevator. That is a niche, and Aman Tokyo serves it with precision.`
    ]),
    review_arrival: section([
      `Arrival is a choreography of vertical calm. A private elevator lifts you from the street to the sky lobby, and the ascent becomes a literal decompression. When the doors open, you are greeted by a vast room of stone and light, with a central water feature that sounds like a distant rain. Staff move quietly, almost rhythmically, and the check‑in is seated and unhurried. The welcome includes a warm oshibori and a small seasonal sweet, but the larger gesture is the way the team reads your tempo: if you are tired, they speak less; if you are curious, they offer a gentle orientation. The scent is hinoki and clean paper, more library than spa. It feels precise, not perfumed. This is luxury in Tokyo’s language—quiet, practiced, and a little ceremonial without becoming theatrical.`,
      `The lobby itself is a kind of threshold. You catch the skyline between columns, but the room asks you to look inward. Check‑in happens at a low table with a view of the city softened through a scrim of architectural framing. Luggage disappears. Tea appears. The staff are formal but not stiff; their English is good and their cues are impeccable. There is no hard sell, no rush, no awkward tour. You are escorted through a corridor that narrows your focus and then opens onto the view outside your room. It is the kind of arrival that makes you want to speak quietly, not because anyone asked, but because the hotel has tuned the volume for you.`
    ]),
    review_room: section([
      `Rooms at Aman Tokyo are exercises in proportion and light. The entry leads you into a living space framed by wide windows, a low sofa, and a large washi-lit cube that glows like a lantern at dusk. The palette is restrained—stone, ash, and sand—but the textures are rich enough to keep it from feeling sterile. The bed is set low and centered, with linens that feel crisp without being stiff. The bathroom is almost an entire room of its own, with a deep soaking tub facing a screen of light and a rain shower that releases steam evenly. The view is spectacular in a quiet way: a broad sweep of the city that reads like a drawing rather than a billboard. At dawn, the light is pale and the room feels almost weightless.`,
      `Details reveal themselves slowly. The closets are generous and thoughtful, the lighting is layered and easy to adjust, and the room technology is intuitive rather than showy. The silence is striking; even with the city below, the sound insulation keeps the room as quiet as a country retreat. If there is a critique, it is that the bed favors firmness over plushness, and those who prefer a cloudlike mattress might find it too disciplined. But that choice feels consistent with the hotel’s overall philosophy: it is composed, minimal, and very sure of itself. This is a room built for long evenings, early mornings, and a kind of deep rest that requires real quiet.`
    ]),
    review_service: section([
      `Service at Aman Tokyo is discreet to the point of vanishing, and that is exactly its strength. The staff operate with a kind of anticipatory calm, checking in without intruding and offering help without the performance of helpfulness. There is a sense that everyone has absorbed the same rhythm: slow, precise, and respectful. Housekeeping is timed around your actual movements, not a preset schedule. Turndown arrives with a handwritten note and a small detail that feels personal rather than branded. The concierge does not recite a list of tourist sites; they ask what kind of day you want and build a plan around that answer. The effect is that you feel known without feeling watched.`,
      `One afternoon, a planned spa appointment was interrupted by an unexpected meeting on our side; a call to the desk resulted in an immediate reschedule and a quiet note left in the room with new timing options. Another day, we asked for a low‑key izakaya recommendation and received a short list of three, each annotated with a sentence about the mood and the music. This kind of specificity separates good service from great service. There is a softness to the interactions here; it never feels rehearsed, and the staff’s confidence allows them to be concise. It is the kind of service that respects privacy while still feeling attentive, a balancing act few hotels manage at this level.`
    ]),
    review_food: section([
      `Aman Tokyo’s dining reflects the hotel’s restraint. Breakfast is served in a room with tall windows and a low murmur, and the Japanese set is the one to order: grilled fish, silky tofu, carefully seasoned rice, and a small bowl of miso that tastes like it was brewed rather than boiled. The Western breakfast is competent, but the hotel’s strength is in its Japanese clarity. Dinner at the main restaurant leans into seasonal kaiseki with a quiet French technique behind it—precise cuts, clean sauces, and plates that feel edited rather than decorative. Portions are moderate, the pacing is calm, and the kitchen seems more interested in balance than drama.`,
      `The Lounge by Aman is a better place than it needs to be. Tea service is thoughtful, the pastry selection is excellent, and the cocktails are restrained, heavy on classics with a subtle Japanese accent. The bar is low-lit and reads like a library at night, which means it is an ideal place for a final drink rather than a social performance. Room service is excellent, arriving on time with plates that still feel composed. If there is a shortcoming, it is that the dinner menus can feel a touch conservative for repeat guests; the flavors are beautiful but rarely surprising. That said, the dining here mirrors the hotel’s core promise: quiet, controlled, and refined.`
    ]),
    review_details: section([
      `The details at Aman Tokyo are what create its signature sense of calm. The onsen‑inspired spa is a masterclass in quiet ritual: you move through warm and cool zones in low light, with an absence of signage and an abundance of intuitive design. The pool, set against the skyline, is almost silent even when occupied. There is a library with books that look chosen rather than staged, and the seating throughout the property encourages you to linger without feeling exposed. The turndown service is understated but precise, with lighting adjusted, curtains drawn to a specific line, and a small note that feels personal rather than templated. It is the sum of these small decisions that makes the hotel feel expensive in the deepest sense of the word.`,
      `Practicalities are handled with the same care. Wi‑Fi is fast and stable, the in-room controls are easy to understand, and the hotel offers thoughtful touches like umbrella placement near the door and a proper place to set your shoes. Noise never intrudes, even in public areas. The scenting is subtle, and the linens are clean without being aggressively perfumed. The gym is compact but calm, with enough equipment for a real workout and windows that prevent it from feeling like a basement. Nothing here screams for attention, but everything works. This is a hotel designed to remove friction, and it succeeds in that quiet ambition.`
    ]),
    review_verdict: section([
      `Aman Tokyo is not a hotel for everyone, and that is its advantage. It offers a very specific vision of luxury—minimal, quiet, and almost monastic in its discipline. If you crave social energy or a lively bar scene, you will find it elsewhere in the city. But if you want Tokyo filtered through a lens of calm, this is the clearest expression of that idea. The property is at its best when you allow it to slow you down: take a long bath, watch the city turn on its lights, and let the evening stretch. The stay feels less like consumption and more like restoration.`,
      `There are trade-offs, and they are deliberate. The stillness can feel too quiet for travelers who want constant stimulation, and the dining, while excellent, is not a culinary adventure. Yet the hotel’s coherence is rare. From arrival to turndown, every detail serves the same purpose: to soften the city and return you to yourself. If you value silence as a luxury and craftsmanship as a form of care, Aman Tokyo is a clear recommendation. It is a place that does not chase trends, and its restraint feels even more modern because of that. Few city hotels leave you this restored.`
    ])
  },
  {
    name: `Aman Venice`,
    slug: `aman-venice`,
    brand: `Aman`,
    brand_slug: `aman`,
    location: `Venice, Italy`,
    country: `Italy`,
    country_slug: `italy`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 45.4372,
    longitude: 12.3358,
    price_range: `$1,500-$3,200`,
    price_from: 1500,
    price_to: 3200,
    currency: `USD`,
    style: `Venetian Gothic`,
    best_for: [`Romance`, `History`, `Privacy`],
    hero_image: `https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=1600`,
    images: [`https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200`],
    website: `https://www.aman.com`,
    booking_url: `https://www.aman.com`,
    tagline: `A palazzo that makes you forget what century it is.`,
    verdict_best_for: `Couples who want Venice with velvet gloves and very few witnesses.`,
    verdict_skip_if: `You want a casual, bustling hotel or a large amenity complex.`,
    verdict_standout: `The hidden garden, a rare green hush in the city.`,
    rating_overall: 9.5,
    rating_room: 9.6,
    rating_service: 9.5,
    rating_food: 9.1,
    rating_value: 8.5,
    rating_location: 9.7,
    featured: 0,
    review_intro: section([
      `Aman Venice occupies Palazzo Papadopoli on the Grand Canal, and the building itself does most of the talking. Frescoed ceilings, carved stone staircases, and gilded details create a feeling of quiet opulence, but the hotel does not lean into spectacle. Instead, it asks you to slow down and listen to the building’s age. The corridors are hushed, the rooms feel residential rather than hotel-like, and the garden—a near-miracle in Venice—offers a pocket of green silence that recalibrates the whole city. It is a property that trades in atmosphere and privacy, and the payoff is a stay that feels genuinely rare in a town built on crowds and confusion.`,
      `Venice can be overwhelming, even for lovers of its drama, and Aman Venice offers a different interpretation: the city as a private interior. It is not a hotel that demands attention; it is a hotel that shields you from the city’s noise so you can notice its beauty. The public spaces feel like a private home at noon, and the staff move with a measured formality that suits the palazzo. It is not a place for big groups or celebrations; it is a place for long afternoons, a book, and a glass of wine that seems to last forever. If you come to Venice for a sense of time travel, this is the clearest portal.`
    ]),
    review_arrival: section([
      `Arrival by water is part of the spell. You glide up to a discreet entrance on the Grand Canal, the façade rising above you with the soft glow of age. Inside, the sound dampens immediately; the water traffic fades and you are left with a soft echo of footsteps and a faint scent of polished wood. Check‑in happens in a drawing room rather than a lobby, with seated service and a glass of something light. The staff’s formality is gentle rather than stiff, and they read your mood quickly—offering information when you need it, silence when you do not. It feels less like a hotel arrival and more like being welcomed into a private residence.`,
      `The first walk through the palazzo is designed to reveal the building slowly. You pass frescoed ceilings, open doors that suggest small salons, and a glimpse of the garden courtyard. The effect is theatrical without being forced. There is no front desk line, no crowd, no noise. The arrival sequence is about texture and light: the play of canal reflections on the walls, the tactile feel of stone floors, and the way the space changes as you move upward. By the time you reach your room, the outside world feels like it has been put on mute, which is exactly what many travelers want from Venice.`
    ]),
    review_room: section([
      `Rooms at Aman Venice are palatial but surprisingly calm. Each is different, but the common thread is a sense of residential scale and thoughtful editing. You might have a frescoed ceiling, a Murano chandelier, or antique parquet floors, yet the furnishings are restrained enough to avoid museum stiffness. The beds are excellent—generous and quiet—with linens that feel cool and crisp against Venetian humidity. Windows look out onto the Grand Canal or the garden courtyard, and the light shifts beautifully throughout the day, especially at dusk when the water turns copper. The bathrooms are marble-heavy, with deep tubs and strong water pressure. Everything feels built for slow, private living rather than quick turnover.`,
      `The charm comes with a few historic quirks: a slanted floor here, a narrower doorway there. But these are part of the palazzo’s character rather than a flaw. Sound insulation is good given the building’s age; canal noise is present but softened, and it becomes part of the city’s lullaby. The hotel’s attention to detail shows in small touches like well-placed reading lights, thoughtful storage, and the quiet hum of climate control that does not compete with the rest of the room’s serenity. It is a setting that makes you want to linger, to dress slowly for dinner, and to return early with a book and a glass of something bitter.`
    ]),
    review_service: section([
      `Service at Aman Venice is the kind of soft formality that feels natural in a palazzo. Staff are present but never performative, and they work with a sense of choreography that keeps the hotel calm even when it is full. There is a sense of discretion that borders on old‑world, but it is delivered with warmth. Housekeeping is impeccable, and turndown includes small, thoughtful details that feel personal rather than branded. The concierge knows Venice deeply and will offer suggestions that skew toward the quieter, less trafficked corners of the city, which aligns with the hotel’s tone.`,
      `A small example: we mentioned an interest in contemporary Venetian glass, and the concierge arranged a private visit to a studio that was closed to the public that day, with a note that explained why it was worth the detour. Another moment: after an early rain, umbrellas appeared by the door without us asking, and our dinner reservation was gently shifted to a later time with no fuss. It is that calm responsiveness—never eager, never rushed—that makes the service here feel aligned with the property’s deeper promise. You are not the center of attention; you are simply taken care of.`
    ]),
    review_food: section([
      `Dining at Aman Venice is intimate and measured. Breakfast is served in a room that faces the garden or canal, and the pace is quiet, almost languid. The buffet is restrained but well chosen—fresh pastries, fruit, and a few local specialties—and the à la carte dishes are more interesting than you might expect, with good coffee and carefully prepared eggs. Dinner leans into Venetian classics with modern restraint. The seafood is excellent, and the pastas are correctly cooked, but the overall mood is about understated elegance rather than culinary fireworks. It feels like a restaurant designed for residents rather than passersby.`,
      `The bar is small, candlelit, and very much in keeping with the hotel’s privacy-first atmosphere. Cocktails are classic, and the staff know how to keep the conversation low. Room service is reliable and comes with the same quiet grace as everything else. A minor critique is that the wine list could be more adventurous for a property of this caliber; it is strong but somewhat safe. Still, the dining offering fits the hotel’s profile: refined, quiet, and tuned to those who want a soft landing after the city’s intense beauty.`
    ]),
    review_details: section([
      `Aman Venice succeeds on details that are easy to miss but hard to fake. The garden courtyard is the heart of the property, and it changes the entire mood of a Venetian stay. In a city with so little green, to sit under trees with a coffee feels like a small miracle. The spa is small and discreet, tucked away rather than flaunted, and treatments are calm and precise. The turndown ritual is gentle, with lights lowered to a specific warmth and the curtains drawn in a way that feels like a personal preference. The hotel also has a private cinema with plush seating—an indulgence that feels more like a secret than a feature.`,
      `Practicalities are handled with the same care. The dock access is seamless, the staff can arrange boats quickly, and transfers feel discreet rather than performative. The property never feels crowded; there are no loud groups or public tours. Even the scenting is subdued, leaning toward clean wood and fresh air instead of heavy perfume. These are the elements that give Aman Venice its most valuable quality: the sense that you are living inside the city rather than visiting it. In a place built on theatricality, that kind of quiet authenticity is rare.`
    ]),
    review_verdict: section([
      `Aman Venice is Venice as a private, edited experience. It is for travelers who want the romance of the city without its noise, for couples who prefer a long dinner to a late night, and for anyone who values atmosphere over amenities. The hotel does not have the buzz or breadth of a large resort; it has intimacy, depth, and a feeling of time suspended. If you want a big scene, you will find it elsewhere. If you want a palazzo that feels like it belongs to you, this is the place.`,
      `The trade‑off is price and exclusivity; the hotel’s small scale and intensely curated tone mean it is not for everyone. But for those who value privacy and atmosphere, Aman Venice is a singular stay. It is a hotel that respects silence and understands how to frame beauty. You leave with fewer photos than you might expect, but with a sharper memory of the place, which is ultimately the point. In Venice, that kind of clarity is a luxury in itself.`
    ])
  },
  {
    name: `Four Seasons Bora Bora`,
    slug: `four-seasons-bora-bora`,
    brand: `Four Seasons`,
    brand_slug: `four-seasons`,
    location: `Bora Bora, French Polynesia`,
    country: `French Polynesia`,
    country_slug: `french-polynesia`,
    region: `South Pacific`,
    region_slug: `south-pacific`,
    latitude: -16.5004,
    longitude: -151.7415,
    price_range: `$1,400-$3,800`,
    price_from: 1400,
    price_to: 3800,
    currency: `USD`,
    style: `Polynesian Overwater`,
    best_for: [`Romance`, `Water`, `Celebration`],
    hero_image: `https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600`,
    images: [`https://images.unsplash.com/photo-1559628233-100c798642d4?w=1200`],
    website: `https://www.fourseasons.com`,
    booking_url: `https://www.fourseasons.com`,
    tagline: `The overwater bungalow fantasy, examined honestly.`,
    verdict_best_for: `Honeymoons and milestone trips that want a polished, no-stress lagoon stay.`,
    verdict_skip_if: `You want a quiet, rustic island with zero resort energy.`,
    verdict_standout: `Sunrise from the deck with Mount Otemanu perfectly centered.`,
    rating_overall: 9.3,
    rating_room: 9.5,
    rating_service: 9.4,
    rating_food: 8.9,
    rating_value: 8.4,
    rating_location: 9.8,
    featured: 0,
    review_intro: section([
      `Four Seasons Bora Bora is the island fantasy at its most refined: overwater villas, a lagoon that looks digitally enhanced, and a service operation that moves with confident ease. The resort occupies a stretch of motu with Mount Otemanu as its backdrop, and the geography is almost unfair in its drama. But what makes this property hold up, even in a destination that can feel overly glossy, is the way it manages scale and softness. The buildings are low, the paths are shaded, and the resort’s rhythm encourages long pauses rather than constant activity. You feel the ease immediately, a sense that everything has been choreographed but not staged.`,
      `Bora Bora can lean toward honeymoon clichés, and this hotel knows it. It offers the dream but also keeps it grounded, with an adult, slightly understated atmosphere. There is romance, yes, but there is also a sense of competence: everything works, from the transfers to the dining reservations to the small adjustments that make island life comfortable. This is not the most adventurous resort in the region, and it does not try to be. It is a masterclass in delivering a specific promise with polish: a lagoon stay that feels effortless, beautiful, and gently insulated from the world.`
    ]),
    review_arrival: section([
      `Arrival by boat is the first act of the show. The lagoon is a sheet of electric blue, and Mount Otemanu rises like a stage set behind the arrival pavilion. The staff meet you with shell leis and chilled towels, and the check‑in happens quickly, mostly because you are eager to get to your villa. There is a feeling of lightness in the air—sea breeze, floral scent, and that faint saltiness that reminds you you are far from any city. It is a smooth, practiced arrival, the kind that makes you feel the resort has been doing this for a long time.`,
      `The welcome is warm but not overly theatrical. The staff explain the island layout clearly, and the timing of transfers to your villa is handled with minimal waiting. The resort’s scale could easily feel busy at arrival, but the flow is managed well: luggage disappears, transport appears, and you are ushered along shaded paths with a clear sense of direction. The first view from the boardwalk to your villa—lagoon below, water shifting between mint and cobalt—is the kind of moment that justifies the trip.`
    ]),
    review_room: section([
      `The overwater villas are exactly what you want them to be: airy, generous, and designed for time spent outside. The deck is the star, with steps down into the lagoon and enough space for lounging and dining. Inside, the palette is pale and coastal—teak, linen, and soft blues—without feeling resort-cliché. The bed is comfortable, the linens crisp, and the air conditioning strong enough to make afternoons tolerable without becoming icy. The bathroom includes a deep tub and an open feel that keeps the villa from becoming too enclosed. Light moves through the space all day, and at night the lagoon glows beneath the deck.`,
      `Practical details are handled well: storage is ample, lighting is easy to control, and the room feels built for long stays rather than just photo‑ops. The glass floor panels are a bit of a novelty but they still delight at night when the fish gather. Soundproofing is decent given the overwater setting, though you do hear the occasional service cart on the boardwalk. If you are sensitive to that, request a villa farther from the central hub. Overall, the rooms feel polished and calm, with an emphasis on the deck as the main living room. That is as it should be in Bora Bora.`
    ]),
    review_service: section([
      `Four Seasons service is about precision, and here it is paired with island warmth. The staff remember your preferences quickly, from your breakfast order to the way you take your coffee. Housekeeping is discreet and efficient, and turndown arrives with a small sweet and the room set to sleep mode. The concierge team is effective at arranging lagoon excursions, private dinners, and transfers, and they do it with minimal back‑and‑forth. It is a well‑oiled operation, which is comforting in a destination where logistics can easily become a hassle.`,
      `There are moments of genuine care that keep the service from feeling scripted. A beach attendant appeared with extra sunscreen when a guest nearby had burned earlier; a pool server brought a cooler of fruit without being asked. When weather interrupted a planned snorkel, the team suggested alternatives and rescheduled the outing without drama. This is not a small, boutique hotel where everyone knows your name by the second day, but it is a property where you feel looked after. That balance—efficient but warm—is the Four Seasons signature, and it is delivered well here.`
    ]),
    review_food: section([
      `Dining at Four Seasons Bora Bora is varied, with a focus on seafood and Polynesian influences. Breakfast is a highlight: fresh fruit, excellent pastries, and made‑to‑order dishes that arrive quickly even when the restaurant is busy. The best meals are the simplest—grilled fish with a squeeze of lime, a coconut‑based dessert, and anything involving the local vanilla. There is a sense of generosity in the portions, but the kitchen generally avoids heaviness, which matters in a hot climate. The lagoon‑facing restaurants are also one of the resort’s best assets, giving every meal a sense of occasion without forcing formality.`,
      `The downside is that some of the menus feel predictable after a few days, especially if you are staying a week or more. The ingredients are excellent, but the variety leans toward the safe side. The bar scene is relaxed and social but never rowdy, which fits the resort’s overall tone. Room service is reliable, though it can be slow at peak hours, so plan ahead if you want a sunset dinner on the deck. Overall, the food is good and consistent, but the resort is more about setting than culinary surprise.`
    ]),
    review_details: section([
      `The details that elevate this resort are the ones that remove friction. Transfers to and from the main island are timed well; buggies arrive quickly; and the staff manage the resort’s scale in a way that keeps it feeling calm. The spa is set in open-air pavilions with lagoon views, and treatments are excellent, especially when you book in the late afternoon when the light softens. The lagoonarium—the resort’s controlled snorkeling area—is a strong amenity, with clear water and healthy coral that make it a good alternative to a boat trip on a windy day.`,
      `Turndown service is tidy and thoughtful, with lighting dimmed and curtains drawn to a precise line. The beach is long enough to feel private even when occupancy is high, and there are quiet pockets if you prefer distance from the main pool. The gym is functional rather than fancy, but it has the basics and good ventilation. Wi‑Fi is stable, which is not always guaranteed in remote locations. These may sound like small details, but on an island stay they are the difference between a dream and a mild inconvenience. Here, the details are handled with the same polish as the headline views.`
    ]),
    review_verdict: section([
      `Four Seasons Bora Bora delivers exactly what it promises: a flawless lagoon stay with polished service and a sense of easy, romantic indulgence. It is not the most adventurous property in the region, and it does not try to be. It is for travelers who want the overwater bungalow dream without any operational surprises. If you want rustic simplicity or a castaway feel, you should look elsewhere; this is a resort with infrastructure, choices, and a clear operational backbone.`,
      `The resort’s great strength is coherence. The rooms, the service, and the setting all align toward a single idea: effortless, high‑touch relaxation. There are small compromises—a bit of predictability in the dining, the occasional hum of resort activity—but they are minor compared to the overall experience. You leave with the kind of calm that only a well‑run island resort can provide, and with a memory of the lagoon that will almost certainly outlast the photos. For most travelers, that is more than enough.`
    ])
  },
  {
    name: `Four Seasons Kyoto`,
    slug: `four-seasons-kyoto`,
    brand: `Four Seasons`,
    brand_slug: `four-seasons`,
    location: `Kyoto, Japan`,
    country: `Japan`,
    country_slug: `japan`,
    region: `Asia`,
    region_slug: `asia`,
    latitude: 35.644,
    longitude: 139.703,
    price_range: `$900-$1,800`,
    price_from: 900,
    price_to: 1800,
    currency: `USD`,
    style: `Contemporary Kyoto`,
    best_for: [`Culture`, `Wellness`, `Gardens`],
    hero_image: `https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600`,
    images: [`https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200`],
    website: `https://www.fourseasons.com`,
    booking_url: `https://www.fourseasons.com`,
    tagline: `Where Japanese tradition meets operational perfection.`,
    verdict_best_for: `Travelers who want temple days and a polished retreat at night.`,
    verdict_skip_if: `You want a ryokan with tatami in every room and traditional austerity.`,
    verdict_standout: `The 800‑year‑old pond garden at the center of the property.`,
    rating_overall: 9.1,
    rating_room: 9.2,
    rating_service: 9.3,
    rating_food: 8.8,
    rating_value: 8.6,
    rating_location: 9.0,
    featured: 0,
    review_intro: section([
      `Four Seasons Kyoto sits slightly removed from the city’s busiest corridors, which makes it feel like a calm base rather than a grand spectacle. The hotel is built around an 800‑year‑old pond garden, and that garden sets the emotional tone. Everything else—architecture, service, and room design—feels organized around that core of still water and quiet trees. The buildings are contemporary, with clean lines and warm woods, and they never try to imitate a ryokan. Instead, they provide a modern frame for Kyoto’s slower pace. It is a Four Seasons in the best sense: polished, reliable, and quietly luxurious, but it also respects its setting rather than flattening it into a brand template.`,
      `Kyoto is a city of ritual, and this hotel understands how to honor that rhythm without becoming precious. It is a place to come back to after temple visits and long walks, to take a bath, and to watch the garden light change. The atmosphere is calm but not austere, and the hotel manages to feel both international and rooted. It is a property for travelers who want Kyoto’s culture by day and a refined, restful base by night. The experience is less about drama and more about ease, which in Kyoto is exactly what you want.`
    ]),
    review_arrival: section([
      `Arrival is understated, with a quiet driveway and a lobby that opens toward the garden. The transition from city to hotel is smooth: you are greeted, offered a seasonal sweet with matcha, and seated for check‑in. The lobby feels contemporary but not cold; there is a warmth in the materials and a softness in the lighting. The staff are efficient and calm, and they begin to orient you without overwhelming you with information. Kyoto’s formality can be intimidating, but here it feels gentle and welcoming.`,
      `The most memorable part of arrival is the garden reveal. The lobby is designed to draw your eyes to the pond and its reflections, and that view becomes your first real impression of the property. It is a subtle but effective choreography: you arrive, you see the garden, you exhale. The staff explain the layout and amenities with a quiet confidence, and your luggage appears in the room without delay. It is not a theatrical arrival; it is a carefully controlled one, which suits Kyoto’s tone.`
    ]),
    review_room: section([
      `Rooms are modern and serene, with a palette of pale wood, soft taupe, and textured fabrics that feel tactile. The beds are generous and extremely comfortable, with linens that have a soft, matte finish rather than a glossy sheen. Most rooms offer a window seat oriented toward the garden or the city’s rooftops, and the best rooms make the garden feel like a private painting. The bathrooms are excellent: deep soaking tubs, strong water pressure, and lighting that flatters rather than glares. The overall effect is calm and clean, the kind of room that encourages early nights and slow mornings.`,
      `What stands out is the sense of space. Even the entry area feels considered, with enough room to unpack without clutter. Storage is practical, outlets are in the right places, and the controls are simple to understand. If there is a critique, it is that the sofa seating can feel more decorative than lounge‑worthy; it looks good but does not beg you to sink in. Still, the room achieves something important: it feels contemporary without being sterile, and it keeps you connected to Kyoto’s quiet atmosphere rather than isolating you in a generic luxury box.`
    ]),
    review_service: section([
      `Service is a Four Seasons strength, and Kyoto delivers it with a softer cadence. The staff are attentive but not intrusive, and the hotel’s rhythm feels tuned to the guest rather than the schedule. Housekeeping is precise, and turndown includes a small note and a gentle reset of the room’s lighting. The concierge team is excellent, offering thoughtful itineraries that avoid the city’s most crowded hours. If you ask for a temple recommendation, you receive a small list with notes about the mood and best time of day. This specificity makes the service feel personal rather than templated.`,
      `One afternoon, we asked about a quiet coffee spot, and within minutes a list of local cafés appeared with walking directions and a brief explanation of each. Another day, a staff member noticed we had been out in the rain and arranged an umbrella and a dry towel waiting in the room. These are small moments, but they add up to a feeling of being cared for without feeling managed. The service here is precise, respectful, and quietly warm, a style that aligns well with Kyoto’s understated elegance.`
    ]),
    review_food: section([
      `The hotel’s dining offering is calm and competent rather than daring. Breakfast is excellent, with a Japanese set that feels carefully prepared and a Western menu that avoids clichés. The garden‑facing restaurant is a lovely place for morning coffee, and the pace is unhurried. Dinner is where the hotel is more conservative, offering polished dishes with an emphasis on seasonal ingredients. The kaiseki‑inspired menu is thoughtful, though it does not challenge you. The quality is high, but the experience feels safe, as if designed to please a broad audience.`,
      `The bar is intimate and focused on whisky, which makes sense in Kyoto, and the cocktail list is classic with minimal flourishes. Room service is dependable, with dishes arriving hot and well presented. If you are staying several nights, you will likely want to venture into the city for more adventurous meals, as the hotel’s dining is polished but not particularly surprising. Still, everything here is consistent, and in a city where evenings can be crowded and intense, that reliability has real value.`
    ]),
    review_details: section([
      `The pond garden is the hotel’s anchor, and it is one of the most beautiful urban hotel gardens in Japan. The walking paths, the lanterns, and the reflections create a sense of calm that carries into the rest of the property. The spa is a quiet refuge with good treatment rooms and a bamboo steam room that feels particularly restorative after a day of walking. The gym is well equipped and not hidden away, with enough natural light to keep it from feeling like an afterthought. The turndown ritual is subtle but well executed, with the room reset to a precise, restful state.`,
      `Practical details are handled well. Wi‑Fi is reliable, transport arrangements are prompt, and the hotel can arrange private guides and cars with minimal fuss. The location is a sweet spot—close enough to Higashiyama and Gion for easy access, but far enough from the busiest streets to maintain calm. There are no flashy gimmicks here; the details are about making the stay effortless. In a city that can be logistically challenging, that ease is its own form of luxury.`
    ]),
    review_verdict: section([
      `Four Seasons Kyoto is a polished, dependable hotel with a strong sense of place. It is not a traditional ryokan, and it does not try to be. Instead, it offers a contemporary Kyoto retreat with a service style that is precise and quietly warm. The pond garden alone is a compelling reason to stay, and the property feels like a calm base from which to explore the city. If you want deep tradition and tatami life, choose a ryokan. If you want modern comfort with Kyoto’s atmosphere woven through it, this hotel does the job with confidence.`,
      `The trade‑off is that the experience can feel a touch controlled; there is not much spontaneity here, and the dining is safe rather than exciting. But the hotel delivers a consistent, restorative stay with very few weak points. It is the kind of place you can recommend to a wide range of travelers without hesitation, especially those who want quiet luxury and operational competence. In Kyoto, that combination is rare enough to feel special.`
    ])
  },
  {
    name: `Six Senses Zighy Bay`,
    slug: `six-senses-zighy-bay`,
    brand: `Six Senses`,
    brand_slug: `six-senses`,
    location: `Musandam Peninsula, Oman`,
    country: `Oman`,
    country_slug: `oman`,
    region: `Middle East`,
    region_slug: `middle-east`,
    latitude: 26.1917,
    longitude: 56.245,
    price_range: `$800-$2,200`,
    price_from: 800,
    price_to: 2200,
    currency: `USD`,
    style: `Desert Hideaway`,
    best_for: [`Wellness`, `Adventure`, `Seclusion`],
    hero_image: `https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600`,
    images: [`https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200`],
    website: `https://www.sixsenses.com`,
    booking_url: `https://www.sixsenses.com`,
    tagline: `Oman’s hidden wellness compound in the mountains.`,
    verdict_best_for: `Travelers who want dramatic landscape and a true sense of escape.`,
    verdict_skip_if: `You need nightlife, shopping, or quick access to a city.`,
    verdict_standout: `The cliff‑to‑sea setting with villas tucked into the cove.`,
    rating_overall: 9.0,
    rating_room: 9.1,
    rating_service: 9.0,
    rating_food: 8.7,
    rating_value: 8.7,
    rating_location: 9.4,
    featured: 0,
    review_intro: section([
      `Six Senses Zighy Bay is a resort in a landscape that feels almost unreal: a crescent of sand framed by sheer cliffs, cut off from the rest of Oman by a mountain range. The setting does most of the work, but the resort’s design leans into a rustic, village‑like aesthetic rather than a polished resort sheen. That choice gives the place a sense of groundedness, even as the setting is dramatic. Stone paths, rough timbers, and low‑slung villas create an atmosphere that feels closer to a traditional settlement than a luxury compound. It is a property for travelers who want to feel removed from everything, and it delivers that sensation in full.`,
      `The Six Senses ethos of wellness and sustainability is present but not overly performative. There is a strong focus on nature, sleep, and slow living, but the mood remains relaxed rather than preachy. The resort encourages you to move at its pace: long breakfasts, afternoon swims, and evenings that end early. It is not a place for nightlife or social theater. It is a place for people who want to feel the landscape and be left mostly alone. If that is what you are seeking, Zighy Bay is one of the most compelling addresses in the region.`
    ]),
    review_arrival: section([
      `Arrival can happen in two ways: a dramatic paraglide descent over the bay or a winding mountain drive that suddenly drops into the cove. Both are memorable, though the drive is perhaps the more fitting introduction to the place’s sense of isolation. The check‑in is relaxed, with cold towels and fresh dates, and the lobby is open‑air, allowing the sea breeze to flow through. Staff are warm and casual, leaning into the barefoot luxury tone that Six Senses favors. The first thing you notice is the silence: no city hum, no traffic, only the sound of water and occasional distant birds.`,
      `The resort’s arrival sequence is more about the landscape than the lobby. You see the bay before you reach reception, and the view takes center stage. The staff handle luggage and escort you to your villa by buggy, pointing out the main restaurants and the spa along the way. It feels easy and informal, but still professional. There is no need for ceremony here; the setting is ceremony enough. By the time you step into your villa, you already feel the outside world has fallen away.`
    ]),
    review_room: section([
      `Villas at Zighy Bay are built with stone walls and timber beams, creating a sense of solidity that fits the landscape. Each has a private courtyard and pool, and the interiors lean toward rustic luxury—earthy textiles, low lighting, and a color palette that mirrors the surrounding cliffs. The bed is comfortable and positioned to capture the morning light, and the bathroom includes an outdoor shower that feels like a small privilege at night. The rooms are quiet, with thick walls that keep the world out and a layout that encourages you to spend time outside rather than under the air conditioning.`,
      `The villas are not about polish; they are about texture. There are moments where you feel the hand of craft rather than the gloss of luxury, and that is part of the appeal. Storage is ample, and the in‑room controls are simple. The pools are large enough for a proper swim, and the courtyards feel private even when the resort is busy. A minor issue is that some villas are close enough to the pathways that you may hear passing buggies during the day, but at night the silence returns. The overall impression is of a retreat built into the landscape, not placed on top of it.`
    ]),
    review_service: section([
      `Service at Six Senses Zighy Bay is warm, relaxed, and tuned to the idea of barefoot luxury. Staff remember your name quickly and move through the property with a casual ease that makes you feel at home. The service is less formal than at city luxury hotels, but it is still highly attentive. Housekeeping is thorough, and turndown includes small touches like a sleep tea or a light snack. The concierge can arrange excursions—dhow cruises, mountain hikes, diving trips—with minimal fuss, and they are good at gauging how adventurous you actually want to be.`,
      `One standout moment: after mentioning an interest in the local fishing culture, a staff member arranged a brief morning visit to the small dock area where fishermen bring in their catch. It was simple and unpolished, but it felt authentic, and that is the kind of detail that makes the service feel personal. The staff’s tone is never rushed, which encourages you to slow down as well. In a resort built around wellness, that relaxed service style is as important as any spa treatment.`
    ]),
    review_food: section([
      `Food at Zighy Bay balances Middle Eastern flavors with Mediterranean lightness. Breakfast is generous, with fresh breads, fruit, and a strong selection of local dishes alongside the usual Western staples. The best meals are the ones that lean into regional ingredients—grilled seafood, spiced lamb, and salads bright with herbs. The resort’s main restaurants are calm and open‑air, which suits the climate, and the pace of service is unhurried. You are not rushed off the table, which makes meals feel like part of the retreat rather than a pit stop.`,
      `There are some inconsistencies: certain menus feel repetitive after a few days, and the healthier options can become monotonous if you are staying longer. The bar is relaxed and a good place to watch the light fade over the cliffs, though it is more about quiet conversation than a lively scene. Room service is reliable, and the staff are happy to adapt dishes to dietary requests. Overall, the food is satisfying rather than dazzling, and the setting does much of the work. In a place this remote, that is acceptable, but a bit more variety would elevate the experience further.`
    ]),
    review_details: section([
      `The details at Zighy Bay are rooted in wellness and landscape. The spa village is one of the resort’s best features, tucked into the hillside with treatment rooms that feel like small sanctuaries. The hammam ritual is excellent, and the yoga pavilion offers a view that makes early mornings more appealing than they have any right to be. The beach is wide and quiet, with enough space to feel private even at higher occupancy. The resort also offers a small organic garden and sustainability initiatives that feel integrated rather than performative.`,
      `Practical matters are handled well: Wi‑Fi is stable, buggies arrive quickly, and the staff are attentive to small comforts like extra water and ice. The turndown service is thoughtful, adjusting lighting and temperature to a restful level. Noise levels are low, and the property feels sleepy at night, which is part of the appeal. This is not a hotel built for late‑night energy. It is a place that encourages rest and reset, and the details support that aim without drawing attention to themselves.`
    ]),
    review_verdict: section([
      `Six Senses Zighy Bay is a true escape. It is remote, dramatic, and designed for travelers who want to feel the landscape as much as the luxury. The setting is its biggest asset, and the resort wisely lets it lead. The service is warm and relaxed, the villas are private and comfortable, and the overall mood is restorative. If you are looking for city access or nightlife, this is not the right choice. But if you want to disconnect and be surrounded by raw geography, it is hard to beat.`,
      `The resort’s few weaknesses—some repetition in the dining, a slightly rustic finish in places—are minor compared to the strength of the setting and the overall experience. This is a place that feels like a reset button. You leave with sun on your skin, salt in your hair, and a sense of having been somewhere genuinely different. For wellness travelers and those seeking a true sense of escape, Zighy Bay is a strong recommendation.`
    ])
  },
  {
    name: `One&Only Reethi Rah`,
    slug: `one-and-only-reethi-rah`,
    brand: `One&Only`,
    brand_slug: `one-and-only`,
    location: `North Male Atoll, Maldives`,
    country: `Maldives`,
    country_slug: `maldives`,
    region: `Indian Ocean`,
    region_slug: `indian-ocean`,
    latitude: 4.2403,
    longitude: 73.33,
    price_range: `$1,300-$3,500`,
    price_from: 1300,
    price_to: 3500,
    currency: `USD`,
    style: `Island Resort`,
    best_for: [`Families`, `Romance`, `Beach`],
    hero_image: `https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1600`,
    images: [`https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200`],
    website: `https://www.oneandonlyresorts.com`,
    booking_url: `https://www.oneandonlyresorts.com`,
    tagline: `The Maldives at maximum scale and maximum beauty.`,
    verdict_best_for: `Families and couples who want choice, space, and flawless resort logistics.`,
    verdict_skip_if: `You are seeking a tiny, barefoot island with no structure.`,
    verdict_standout: `The length of the beaches and the sheer scale of the villas.`,
    rating_overall: 9.2,
    rating_room: 9.4,
    rating_service: 9.2,
    rating_food: 8.9,
    rating_value: 8.3,
    rating_location: 9.6,
    featured: 0,
    review_intro: section([
      `One&Only Reethi Rah is the Maldives on a grand scale. The island is large, the beaches are long, and the villas are among the most spacious in the region. It is a resort that wears its confidence openly: bold architecture, extensive facilities, and a service operation designed to handle big expectations. The atmosphere is polished rather than rustic, and the property feels more like a private resort than a castaway escape. That is both its strength and its potential drawback. If you want the Maldives with choices—multiple restaurants, a real spa, and a sense of structure—this is one of the best places to find it.`,
      `Despite the scale, the resort manages to feel coherent. The landscaping is lush, the pathways are shaded, and the island’s curves create pockets of privacy even when occupancy is high. It is a place that can accommodate families and couples without forcing them into the same mood. There is a quiet luxury here that comes from competence: the boats run on time, the villas are ready, and the staff can arrange almost anything. This is a resort for travelers who want everything to be handled without thinking about it, and it delivers that promise with ease.`
    ]),
    review_arrival: section([
      `Arrival is by speedboat or private transfer, with a sense of occasion that suits the resort’s scale. The dock is immaculate, and the staff line up in a welcoming formation that feels choreographed but not stiff. You are offered a cold towel and a drink, and the check‑in is handled quickly, often en route to your villa. The island feels immediately large; you can sense from the drive that there are multiple beaches and several clusters of villas. The arrival is smooth and efficient, and it sets a tone of polished resort luxury rather than rustic hideaway.`,
      `The first impression is one of space. The lobby is open and airy, the views are wide, and the staff move with quiet confidence. There is no waiting, no clutter, and no feeling of being processed. The resort’s size could make the arrival feel busy, but it is managed well. By the time you reach your villa, luggage is already placed, and a host has given you a concise orientation. It feels like a property that has thought through the logistics of arrival in detail, which is exactly what you want at this level.`
    ]),
    review_room: section([
      `The villas at Reethi Rah are large enough to feel like private homes. The beach villas offer direct access to the sand and have expansive outdoor spaces, while the overwater villas provide more of the classic Maldivian experience. The interiors are refined without being flashy: pale woods, soft textiles, and a layout that emphasizes airflow and light. The beds are exceptional, and the linens have a crisp softness that feels luxurious in a humid climate. Bathrooms are enormous, with indoor and outdoor showers and tubs that actually encourage long soaks. The sense of space is perhaps the biggest luxury here; it gives you room to breathe.`,
      `The villas are also built for functionality. Storage is plentiful, lighting is well considered, and the rooms maintain a comfortable temperature without feeling over‑air‑conditioned. The outdoor areas are thoughtfully positioned for privacy, with daybeds and dining spaces that make it easy to spend most of your time outside. The only minor downside is that the resort’s scale means some villas are a fair distance from central facilities, requiring buggy rides. But the buggy service is quick and reliable, and for many guests the extra distance translates into more privacy. Overall, the villas deliver the kind of space and comfort that justify the resort’s reputation.`
    ]),
    review_service: section([
      `Service at Reethi Rah is confident and professional. The staff are numerous and well trained, and they work with a sense of coordination that keeps the resort running smoothly. Your preferences are noted quickly—beach location, drink order, wake‑up time—and the team acts on them without fuss. Housekeeping is meticulous, and turndown includes thoughtful details like extra water, fresh towels, and a quiet reset of lighting and temperature. The concierge handles restaurant reservations, transfers, and excursions with minimal friction, which is essential given the resort’s size.`,
      `There is also a personal touch that keeps the service from feeling corporate. A beach attendant remembered our preferred chair and positioned it before we arrived each morning. After a late return from a boat trip, a staff member quietly arranged a light meal in the villa rather than sending us back out. These are small gestures, but they build a sense of being looked after rather than managed. The service is not as intimate as a tiny boutique resort, but it is exceptionally competent, and that competence creates real comfort.`
    ]),
    review_food: section([
      `Dining at Reethi Rah is extensive, with multiple restaurants covering seafood, Asian flavors, Mediterranean dishes, and lighter fare. Breakfast is strong and varied, with a buffet that actually feels curated rather than overwhelming. The best meals tend to be those that lean into the Maldivian setting—grilled fish, bright salads, and simple dishes that let the ingredients shine. The resort’s scale allows for real choice, which is valuable on longer stays. You can change your mood each night, moving from a more formal dining room to a casual beach grill without feeling like you are repeating the same experience.`,
      `The drawback of such variety is occasional inconsistency. Some menus feel more generic than they should at this level, and a few dishes lean toward international safety rather than local character. The bar scene is lively but controlled, with sunset cocktails as a nightly ritual. Room service is reliable and well presented, though it can be slower during peak dinner hours. Overall, the food offering is strong enough to satisfy most guests, but the resort’s real strength is breadth rather than culinary innovation.`
    ]),
    review_details: section([
      `The resort’s details are about scale and ease. The beaches are long and varied, offering both social areas and quiet stretches. The spa is a serious operation with spacious treatment rooms and a calm atmosphere that feels separate from the rest of the resort. The gym is well equipped and not treated as an afterthought. There are tennis courts, a kids’ club, and a range of water sports, which makes the resort adaptable to different kinds of travelers. Yet the overall mood remains polished rather than frenetic; activities are available without overwhelming the sense of calm.`,
      `Turndown is consistent and well executed, with the room reset for sleep and small comforts left in place. The resort’s buggy service is efficient, a crucial detail given the island’s size. Wi‑Fi is fast, and staff are proactive about anything that could interrupt a smooth stay. These practicalities may sound mundane, but they are the backbone of a resort of this scale. Reethi Rah’s success comes from delivering a large, complex experience with minimal visible effort. That is a form of luxury in itself.`
    ]),
    review_verdict: section([
      `One&Only Reethi Rah is the Maldives for travelers who want everything, perfectly arranged. It is a resort that prioritizes space, choice, and polish, and it succeeds in delivering those elements without sacrificing a sense of calm. If you want a small, castaway‑style island, this is not your place. But if you want a big, beautifully run resort with flawless service and a range of dining and activities, it is hard to beat.`,
      `The resort’s scale is its defining feature, and it brings both strengths and trade‑offs. You get space and variety, but you sacrifice some intimacy. For many travelers, especially families and couples seeking a high‑touch experience, the balance is exactly right. You leave with the feeling that the Maldives can be glamorous without being chaotic, and that large‑scale luxury can still feel personal when executed with care. That is Reethi Rah’s achievement.`
    ])
  },
  {
    name: `Belmond Hotel Caruso`,
    slug: `belmond-hotel-caruso`,
    brand: `Belmond`,
    brand_slug: `belmond`,
    location: `Ravello, Italy`,
    country: `Italy`,
    country_slug: `italy`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 40.649,
    longitude: 14.6107,
    price_range: `$900-$2,100`,
    price_from: 900,
    price_to: 2100,
    currency: `USD`,
    style: `Amalfi Heritage`,
    best_for: [`Romance`, `Scenery`, `Slow travel`],
    hero_image: `https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600`,
    images: [`https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200`],
    website: `https://www.belmond.com`,
    booking_url: `https://www.belmond.com`,
    tagline: `An 11th-century palace floating above the Amalfi Coast.`,
    verdict_best_for: `Romantic trips, anniversaries, and travelers who want to linger over views.`,
    verdict_skip_if: `You want quick beach access or a lively nightlife scene.`,
    verdict_standout: `The infinity pool that feels suspended over the coast.`,
    rating_overall: 9.1,
    rating_room: 9.0,
    rating_service: 9.2,
    rating_food: 8.8,
    rating_value: 8.5,
    rating_location: 9.7,
    featured: 0,
    review_intro: section([
      `Belmond Hotel Caruso sits on a cliff edge above Ravello, an 11th‑century palace that feels as if it is hovering over the Amalfi Coast. The setting is cinematic: terraced gardens, cypress trees, and a view that stretches from the cliffs to the sea. The hotel leans into its heritage without becoming stuffy. There are arched colonnades and ancient stone walls, but the interiors are lightened with pale textiles and modern comforts. It is a property that understands its primary asset is the view, and it frames that view at every turn—through windows, through archways, and from the infinity pool that seems to bleed into the coastline.`,
      `This is not a hotel for speed. Ravello itself is slow, and Caruso embraces that pace. The mood is romantic and measured, with long lunches and late afternoons by the pool. The property feels like a retreat for adults who want to exhale rather than a playground for energetic crowds. If you want a hotel with a pulse, look elsewhere. If you want to feel suspended above one of the world’s most dramatic coastlines, Caruso is a strong contender.`
    ]),
    review_arrival: section([
      `Arrival involves a winding drive up the hill to Ravello, and that journey feels like part of the experience. The final approach through a stone archway is quietly theatrical, revealing a courtyard and the first glimpse of the view beyond. Staff greet you with calm warmth, and check‑in is seated, with a glass of something citrusy. The tone is old‑world but not rigid; there is elegance, but it feels relaxed rather than formal. The lobby is small and intimate, which fits the scale of Ravello, and the immediate view of the coast creates a sense of instant reward.`,
      `The check‑in process is unhurried, and staff take the time to explain the property’s history and layout. Luggage disappears and reappears quickly in your room. The first walk through the gardens is a highlight—the scent of lemon trees, the sound of distant church bells, and the sea glittering far below. The arrival feels like stepping into a film set, but the hotel’s tone prevents it from feeling overdone. It is a gentle, romantic start to a stay that is all about atmosphere.`
    ]),
    review_room: section([
      `Rooms at Caruso are a mix of historic charm and modern comfort. Expect high ceilings, tiled floors, and windows that frame the coast or the gardens. The palette is light—creams and soft blues—to match the Amalfi light. Beds are comfortable and dressed in crisp linen, and the bathrooms are spacious with good water pressure. The best rooms have terraces or balconies where you can sit with a morning espresso and watch the coastline wake up. The overall feel is classic rather than contemporary, which fits the building’s age and the hotel’s identity.`,
      `There are a few quirks that come with the territory: some rooms have uneven floors or slightly awkward layouts, and the historic nature of the building means that not every space feels perfectly streamlined. But these imperfections are part of the charm. Sound insulation is decent, though you will hear the occasional footsteps in old corridors. The rooms are not trying to be minimalist; they are embracing heritage and comfort. For many travelers, that is exactly what you want on the Amalfi Coast—a sense of history softened by modern ease.`
    ]),
    review_service: section([
      `Service at Caruso strikes a balance between old‑world hospitality and relaxed Italian warmth. Staff are attentive and polite without being overly formal. Housekeeping is thorough, and turndown is delivered with small touches like fresh slippers and a light sweet. The concierge is helpful with local logistics, whether arranging a car to Positano or recommending a quiet trattoria in Ravello. There is a sense of pride in the property’s history, and staff are happy to share details about the building and its past, which adds depth to the stay.`,
      `The service is not flashy, but it is reliable. A small issue with a dinner reservation was resolved quickly, and staff followed up later to ensure everything went smoothly. The pool attendants are particularly good, offering towels and water without hovering. In a hotel that trades on atmosphere, the service’s calm confidence is essential, and Caruso delivers that in a way that feels authentic rather than rehearsed.`
    ]),
    review_food: section([
      `Dining at Caruso leans into regional Italian cooking with a refined touch. Breakfast is excellent, with fresh ricotta, local citrus, and warm breads that arrive at the table rather than being left to dry on a buffet. Lunch by the pool is as good as it sounds—simple pastas, grilled vegetables, and salads that feel light in the heat. Dinner is more formal, with a focus on seafood and local ingredients, and the pacing is classic Italian: slow, unhurried, and conversational. The quality is high, and the setting does much of the work.`,
      `The bar is romantic and softly lit, ideal for a pre‑dinner drink or a long nightcap. Room service is reliable, though the menu is smaller than the main restaurants. The only minor drawback is that dinner service can feel a bit formal for those who prefer casual dining; the hotel’s tone leans toward occasion. Still, the food is excellent and consistent, and the views from the dining terrace are enough to make even a simple meal feel significant.`
    ]),
    review_details: section([
      `The infinity pool is the hotel’s signature detail, and it deserves the reputation. It sits on the edge of the cliff with nothing but air and coastline beyond, creating a sensation of floating. The gardens are equally important, with citrus trees, terracotta pots, and shaded paths that invite long walks. The spa is small but calm, offering treatments that feel tailored rather than mass‑produced. The turndown service is gentle, with lighting adjusted and the room reset to a quiet, restful tone. These details reinforce the hotel’s core promise: a slow, romantic retreat above the sea.`,
      `Practicalities are handled well. The hotel offers shuttles to nearby towns, and staff can arrange cars for longer excursions. Wi‑Fi is reliable, and the property’s layout is easy to navigate despite its historic architecture. The noise level is low, and evenings are peaceful. This is not a hotel for constant activity; it is for long afternoons and slow meals. Every detail supports that pace, which is what makes Caruso feel so deeply aligned with its setting.`
    ]),
    review_verdict: section([
      `Belmond Hotel Caruso is an Amalfi classic done right. It is a hotel for travelers who want to linger, to spend afternoons by a pool that feels suspended in air, and to fall asleep with the scent of lemon trees. The building’s age and the town’s slow rhythm are part of the experience, so if you want fast access to beaches or nightlife, this is not the best choice. But if you want beauty, calm, and a sense of history, it delivers in full.`,
      `The hotel’s few imperfections—slightly formal dining, a few historic quirks in the rooms—are outweighed by the overall atmosphere. Caruso is not trying to be modern or edgy; it is leaning into romance and place, and that honesty is its strength. You leave feeling like you have actually been somewhere, not just stayed in a hotel. On the Amalfi Coast, that kind of authenticity is a luxury worth chasing.`
    ])
  },
  {
    name: `Mandarin Oriental Bangkok`,
    slug: `mandarin-oriental-bangkok`,
    brand: `Mandarin Oriental`,
    brand_slug: `mandarin-oriental`,
    location: `Bangkok, Thailand`,
    country: `Thailand`,
    country_slug: `thailand`,
    region: `Asia`,
    region_slug: `asia`,
    latitude: 13.7262,
    longitude: 100.513,
    price_range: `$600-$1,500`,
    price_from: 600,
    price_to: 1500,
    currency: `USD`,
    style: `Heritage Grand`,
    best_for: [`Service`, `Culture`, `River views`],
    hero_image: `https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600`,
    images: [`https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200`],
    website: `https://www.mandarinoriental.com`,
    booking_url: `https://www.mandarinoriental.com`,
    tagline: `The grande dame of Bangkok luxury, still relevant.`,
    verdict_best_for: `Travelers who want legendary service and river calm in the heart of the city.`,
    verdict_skip_if: `You want cutting‑edge design or a boutique feel.`,
    verdict_standout: `The Authors Lounge ritual and the riverfront breakfasts.`,
    rating_overall: 9.4,
    rating_room: 9.2,
    rating_service: 9.8,
    rating_food: 9.1,
    rating_value: 8.9,
    rating_location: 9.4,
    featured: 0,
    review_intro: section([
      `Mandarin Oriental Bangkok is a masterclass in heritage hospitality. The property has been hosting travelers for more than a century, and it still feels like the standard by which other Bangkok hotels are measured. The setting on the Chao Phraya River gives it a sense of calm amid the city’s energy, and the atmosphere is unmistakably grand yet unforced. There are orchids in the lobby, polished wood underfoot, and a kind of quiet confidence in the way the hotel operates. It is not a modern design showcase; it is a living institution that knows exactly what it is.`,
      `What makes the hotel feel relevant in 2026 is its ability to blend tradition with contemporary comfort. The service is legendary and remains a real differentiator. The rooms are classic but not dated, and the overall experience is still tuned to the needs of modern travelers. In a city where luxury options have multiplied, the Mandarin Oriental retains a sense of gravitas that few can match. It is a hotel that understands ceremony without becoming rigid, and it feels both timeless and alive.`
    ]),
    review_arrival: section([
      `Arrival is theatrical in the best way. You pull up to a riverside entrance, and the lobby opens to the water beyond, with longboats gliding past. Staff greet you with a subtle wai and a cool jasmine tea, and check‑in is seated in a lounge that feels more like a private club than a hotel. The air is softly scented, the light warm, and the entire space is designed to slow you down. It feels like stepping into a calmer version of Bangkok, one where the city exists but does not intrude.`,
      `The arrival sequence is efficient but never rushed. Staff handle luggage discreetly, and a host guides you through the property with a quiet confidence that comes from repetition. You are offered a brief orientation, but it is delivered conversationally rather than as a script. The first sight of the river from the lobby terrace is a reminder of why this property has remained a favorite: it frames Bangkok at its most graceful. By the time you reach your room, you already feel anchored, which is a rare feeling in this city.`
    ]),
    review_room: section([
      `Rooms at the Mandarin Oriental are classic and comfortable, with a palette of creams, gold accents, and dark teak that feels appropriately regal. The beds are excellent, and the linens have a softness that suggests careful laundering rather than just expensive fabric. Many rooms include a window seat facing the river, which becomes a quiet ritual spot for morning coffee or late‑night reading. Bathrooms are spacious, with strong water pressure and thoughtful lighting. The rooms do not chase trends; they deliver a sense of calm that feels particularly luxurious in Bangkok.`,
      `While the rooms are not minimal or contemporary, they are impeccably maintained, and the classic aesthetic feels intentional rather than outdated. The sound insulation is strong, and even the river traffic reads as a gentle background hum rather than a distraction. Storage is ample, and the in‑room amenities are comprehensive without being excessive. If you prefer sharp, modern design, this may not be your style. But if you value comfort and a sense of heritage, the rooms are deeply satisfying.`
    ]),
    review_service: section([
      `Service is the hotel’s defining feature. The staff operate with a kind of choreography that feels effortless, and they remember details with an accuracy that borders on uncanny. Your name, your preferences, your schedule—they are all absorbed quickly and used discreetly. Housekeeping is impeccable, with rooms reset to a precise standard each day. Turndown service feels like a small ceremony, with lighting, linens, and small gestures aligned to a restful mood. The concierge team is outstanding, capable of arranging almost anything with minimal fuss.`,
      `What stands out is the warmth behind the precision. This is not robotic service; it is deeply human. A staff member noticed a book we were reading and left a small note with a recommendation for a nearby bookstore. Another arranged a river shuttle at the exact moment we needed it, without us asking. These gestures are subtle but powerful. They create a sense that the hotel is paying attention not just to your needs but to your experience. That is why this property still feels like the gold standard in Bangkok.`
    ]),
    review_food: section([
      `The dining scene here is strong and varied. Breakfast on the river terrace is iconic, with a generous spread of Thai and Western dishes and service that anticipates your next coffee refill. The Thai restaurant is a highlight, offering regional dishes with elegance and real flavor depth. There are also international options that feel polished rather than generic, and the hotel’s pastry program is excellent. Meals feel like part of the experience rather than just a necessity, and the setting—river views, soft light, and impeccable service—adds a sense of occasion.`,
      `The bar has a clubby atmosphere with live piano in the evenings, which suits the hotel’s heritage vibe. Cocktails are classic, and the staff are happy to tailor them to taste. Room service is reliable and well presented. The only minor critique is that some dinner menus lean formal, which may feel heavy if you prefer casual dining. But the overall quality is high, and the service elevates every meal. This is a hotel that knows how to feed people, both literally and emotionally.`
    ]),
    review_details: section([
      `The hotel’s details are rooted in ritual. The Authors Lounge afternoon tea is a classic and still feels special, with a quiet elegance that resists becoming a tourist trap. The spa is across the river, a deliberate separation that makes it feel like a true retreat, and the treatments are excellent. The pool area is calm and shaded, a rare respite from Bangkok’s heat. The turndown service is the best in the city: thoughtful, precise, and quietly generous. These are the details that make the stay feel layered rather than simply luxurious.`,
      `Practicalities are also handled with care. The river shuttle service makes the city feel accessible, and staff coordinate transfers with minimal friction. Wi‑Fi is reliable, and the hotel’s housekeeping standards are exceptional. Noise is controlled, and the property feels insulated from the city even though it sits at the center of it. These are small things, but they add up to a sense of ease that is difficult to replicate. The Mandarin Oriental does not just provide luxury; it provides a sense of being looked after.`
    ]),
    review_verdict: section([
      `Mandarin Oriental Bangkok remains one of the city’s finest hotels because it understands what luxury actually means: care, consistency, and a sense of calm amid chaos. It is not a design‑forward boutique, and it does not chase trends. Instead, it leans into its heritage and perfects the art of hospitality. For travelers who want service that feels almost intuitive, there is no better option in Bangkok.`,
      `The trade‑offs are minimal, mostly around style. If you want sharp contemporary design, you may find the rooms too classic. But the service, location, and atmosphere are difficult to match. This is a hotel that knows exactly who it is, and it delivers that identity with confidence. You leave with a sense of having experienced the city’s most gracious address, and that feeling lingers long after checkout.`
    ])
  },
  {
    name: `Rosewood London`,
    slug: `rosewood-london`,
    brand: `Rosewood`,
    brand_slug: `rosewood`,
    location: `London, UK`,
    country: `United Kingdom`,
    country_slug: `united-kingdom`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 51.5162,
    longitude: -0.1151,
    price_range: `$700-$1,600`,
    price_from: 700,
    price_to: 1600,
    currency: `USD`,
    style: `British Heritage`,
    best_for: [`City breaks`, `Food & drink`, `Business`],
    hero_image: `https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600`,
    images: [`https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200`],
    website: `https://www.rosewoodhotels.com`,
    booking_url: `https://www.rosewoodhotels.com`,
    tagline: `British luxury, reinvented for people who find Claridge’s stuffy.`,
    verdict_best_for: `Travelers who want classic London grandeur with a modern edge.`,
    verdict_skip_if: `You prefer minimalist, boutique‑style hotels.`,
    verdict_standout: `The courtyard arrival and the Scarfes Bar scene.`,
    rating_overall: 9.0,
    rating_room: 9.1,
    rating_service: 9.2,
    rating_food: 8.7,
    rating_value: 8.4,
    rating_location: 9.2,
    featured: 0,
    review_intro: section([
      `Rosewood London is an Edwardian grand hotel that has been sharpened for modern tastes. The building has the bones of a classic—arched carriageway, high ceilings, heavy stone—but the hotel’s tone is more contemporary and less formal than London’s old guard. It feels clubby rather than ceremonial, with a lobby that hums softly and a bar that is genuinely worth visiting. The location in Holborn is central without being chaotic, which makes it a strong base for the city. The hotel’s identity is clear: British heritage with a touch of modern confidence, a place that feels luxurious but not rigid.`,
      `What sets Rosewood apart is its balance. It honors tradition without feeling trapped by it, and it delivers service that is polished but approachable. The atmosphere is designed for travelers who want to feel the weight of London’s history without being smothered by it. It is a hotel with personality, a sense of place, and a bar that is as much a draw for locals as it is for guests. That mix gives it a kind of urban energy that many traditional luxury hotels lack.`
    ]),
    review_arrival: section([
      `Arrival through the stone carriageway is one of the hotel’s best moments. The entrance feels theatrical, with the building’s scale revealed gradually as you step into the courtyard. Staff greet you promptly and manage luggage without fuss. The lobby is warm and softly lit, with a sense of British club energy rather than palatial formality. Check‑in is efficient and usually seated, which helps maintain the calm. The first impression is one of polished ease—this is a hotel that knows how to welcome a busy traveler without making it feel transactional.`,
      `The arrival sequence is also practical. The staff handle transportation quickly, and the concierge offers genuine recommendations rather than standard lists. The tone is friendly and professional, and the space itself encourages you to linger for a moment rather than rush off. It feels like a private urban refuge, a place where London’s noise can be held at a small distance. That sense of calm, combined with the hotel’s classic architecture, sets the right mood from the start.`
    ]),
    review_room: section([
      `Rooms at Rosewood London are generous in size for the city, and they lean into a rich, clubby aesthetic: deep tones, brass accents, and soft textures. The beds are excellent, with a plushness that feels indulgent without being overly soft. The bathrooms are large and well lit, with marble surfaces and strong water pressure. The lighting scheme is thoughtful, allowing you to shift the room from bright morning light to low‑lit evening calm. The rooms feel like a refuge rather than a showpiece, which is exactly what you want in London.`,
      `The design will not appeal to minimalists; it is layered, textured, and unmistakably British. But it feels current rather than dated, and the quality of materials is high. Sound insulation is good, though street noise can travel in certain rooms, so request a quieter facing if you are sensitive. Storage is ample, and the in‑room tech is reliable. The overall impression is of a room built for comfort and longevity, a place where you can actually live for a few days rather than simply sleep.`
    ]),
    review_service: section([
      `Service at Rosewood London is professional and warm. Staff are quick to remember preferences, and the tone is friendly without being overly familiar. Housekeeping is meticulous, and turndown is delivered with care, resetting the room to a restful state. The concierge team is excellent, providing useful, specific recommendations and handling theatre tickets and reservations with ease. The hotel feels well staffed, and the service flows smoothly even at peak times.`,
      `There are moments where the staff’s personality shines through, which gives the experience a sense of humanity. A bartender took the time to explain the inspiration behind a cocktail; a concierge provided a list of quiet galleries that matched a guest’s interests rather than just the biggest museums. These details matter in a city where luxury can feel impersonal. Rosewood manages to keep its service polished without feeling stiff, and that balance is one of its strongest assets.`
    ]),
    review_food: section([
      `The food and drink scene is a major draw. Scarfes Bar is one of the city’s better hotel bars, with sharp cocktails and a lively but controlled atmosphere. It feels like a place where locals actually go, which is rare for a hotel bar. Breakfast is strong, with good coffee, fresh pastries, and a menu that includes both English classics and lighter options. The hotel’s dining venues are polished and consistent, and the quality is reliably high.`,
      `The main critique is that late‑night dining options are limited beyond the bar menu, which can be frustrating if you return late and want a full meal. Room service is reliable but not adventurous. Still, the overall food experience is better than most London hotels, and the bar alone is a reason to stay here. The hotel understands that in London, a good bar is not a bonus; it is an essential part of the experience.`
    ]),
    review_details: section([
      `Rosewood’s details are about atmosphere. The courtyard entrance sets a tone of privacy and calm, and the building’s architecture adds a sense of occasion without becoming formal. The spa is tucked below ground, and while it is not large, it offers a good pool and treatment rooms that feel serene. The gym is well equipped and open enough to avoid a claustrophobic feel. The turndown service is precise, with bedding adjusted and small comforts placed in predictable, reassuring ways.`,
      `Practicalities are handled well. The location makes it easy to reach Soho, Covent Garden, and the West End. The hotel’s transport arrangements are smooth, and staff are proactive about traffic timing. Wi‑Fi is reliable, and the rooms feel insulated from the city’s noise. These details make the hotel feel functional as well as luxurious, which is essential for a city stay. It is a property that understands how to make a busy trip feel composed.`
    ]),
    review_verdict: section([
      `Rosewood London is a strong choice for travelers who want classic British luxury without the stiffness of the old guard. It offers generous rooms, excellent service, and one of the best hotel bars in the city. The atmosphere is confident and modern, and the location is central without being chaotic. It is not a minimalist boutique hotel, and it is not trying to be. It is a grand city hotel done with contemporary polish.`,
      `If you value a sense of heritage but still want a hotel that feels current, Rosewood London delivers. The only real compromises are stylistic: some may find the interiors too rich, and the late‑night dining options could be stronger. But the overall experience is cohesive and comfortable. You leave with the sense that London can still do grand hotels well, as long as the hospitality is as considered as the architecture.`
    ])
  },
  {
    name: `Shangri-La Paris`,
    slug: `shangri-la-paris`,
    brand: `Shangri-La`,
    brand_slug: `shangri-la`,
    location: `Paris, France`,
    country: `France`,
    country_slug: `france`,
    region: `Europe`,
    region_slug: `europe`,
    latitude: 48.8645,
    longitude: 2.293,
    price_range: `$1,100-$2,600`,
    price_from: 1100,
    price_to: 2600,
    currency: `USD`,
    style: `Parisian Palace`,
    best_for: [`Views`, `Romance`, `Celebrations`],
    hero_image: `https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600`,
    images: [`https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1200`],
    website: `https://www.shangri-la.com`,
    booking_url: `https://www.shangri-la.com`,
    tagline: `The best view of the Eiffel Tower from a hotel bed. Period.`,
    verdict_best_for: `Celebrations and travelers who want iconic Paris views.`,
    verdict_skip_if: `You prefer discreet, boutique stays over palace glamour.`,
    verdict_standout: `Breakfast on a terrace with the Eiffel Tower filling the frame.`,
    rating_overall: 9.2,
    rating_room: 9.3,
    rating_service: 9.2,
    rating_food: 8.9,
    rating_value: 8.5,
    rating_location: 9.6,
    featured: 0,
    review_intro: section([
      `Shangri‑La Paris occupies a former palace, and it wears that heritage proudly. The building is grand, with high ceilings, ornate staircases, and a sense of formal elegance that immediately places you in a different era. The hotel’s main asset, though, is the view: the Eiffel Tower is framed so perfectly from many rooms that it feels like a private stage. This is not subtle luxury; it is Paris in full cinematic mode. The atmosphere is glamorous, formal, and a little theatrical, which suits the city’s romance.`,
      `The hotel’s challenge is balancing that palace grandeur with a sense of ease, and it largely succeeds. The interiors are bright, with pale tones and gold accents, and the mood feels more airy than heavy. The service is polished, and the public spaces are calm despite the property’s prestige. It is a hotel designed for big moments—anniversaries, proposals, first trips to Paris—though it can also serve as a luxurious base for repeat visitors who want the city’s most iconic view. The experience is about classic Paris glamour, and it delivers that without apology.`
    ]),
    review_arrival: section([
      `Arrival is grand, as it should be. The driveway feels like the entrance to a diplomatic residence, and the lobby’s tall windows reveal the Eiffel Tower almost immediately. Staff greet you in French and English with practiced ease, and check‑in is handled smoothly with a glass of champagne. The space feels formal but not cold, and the light from the windows gives the lobby a soft glow that is distinctly Parisian. The first impression is one of ceremony, and the hotel leans into it without becoming stiff.`,
      `The arrival sequence is efficient and elegant. Luggage is handled discreetly, and staff guide you to the room with quiet confidence. The reveal of the view in your room is carefully timed, and it is the kind of moment that feels designed rather than accidental. This is a hotel that knows its strongest feature and makes sure you experience it in the right order. For many guests, that first glimpse of the tower from the room will be the defining memory of the stay.`
    ]),
    review_room: section([
      `Rooms are bright, high‑ceilinged, and unapologetically classic. The palette is pale—white, cream, and soft gold—and it emphasizes the light rather than absorbing it. The beds are plush and comfortable, with crisp linens that feel freshly pressed. Bathrooms are marble and generous, with strong water pressure and good lighting. The best rooms include balconies or terraces that frame the Eiffel Tower so perfectly it almost feels staged. At night, the tower’s lights flicker through the curtains, a reminder that you are in one of the most photogenic corners of the city.`,
      `The design is palace‑style, which will delight those who want full Paris glamour and might feel too formal for travelers who prefer a more contemporary aesthetic. Sound insulation is good given the building’s age, and the rooms feel quiet and insulated from the city. Storage is ample, and the in‑room amenities are in line with the hotel’s luxury positioning. The rooms do not try to be minimal; they celebrate classic Paris, and in this context, that is exactly the point.`
    ]),
    review_service: section([
      `Service is polished and formal, with staff who understand the rituals of a palace hotel. The front desk, concierge, and housekeeping teams operate with efficiency and grace, and interactions are marked by a gentle formality that feels appropriate to the setting. Turndown is consistent and precise, with the room reset to a quiet, nighttime mood. The concierge team is capable, arranging restaurant reservations and museum access with ease, though their recommendations lean toward the more classic Paris experiences rather than hidden corners.`,
      `The service feels more ceremonious than intimate, which matches the hotel’s tone. You are treated with care and respect, but the relationship remains formal. For some, that will feel exactly right; for others, it may feel slightly distant. Still, the execution is strong, and the staff are attentive to requests without being intrusive. In a hotel of this scale and profile, that level of precision matters, and Shangri‑La delivers it reliably.`
    ]),
    review_food: section([
      `Dining is elegant and consistent. Breakfast is a highlight, particularly if you can secure a terrace seat with the tower in full view. The spread includes excellent pastries, fresh fruit, and well‑prepared eggs, all delivered with polished service. The hotel’s restaurants focus on classic French cuisine, presented with refinement rather than innovation. The quality is high, and the dining rooms carry the same palace atmosphere as the rest of the property. Meals here feel like part of the hotel’s larger narrative of Paris glamour.`,
      `The bar is glamorous and softly lit, ideal for a pre‑dinner drink. Cocktails are classic and well executed. Room service is reliable, though it can be expensive relative to value—a common issue in palace hotels. The food program is solid rather than adventurous, which suits the hotel’s identity. If you are a traveler who wants cutting‑edge dining, you will spend your evenings elsewhere. If you want classic French polish with a Parisian view, the hotel delivers what you expect.`
    ]),
    review_details: section([
      `The hotel’s details are about the palace experience: grand staircases, high‑ceilinged salons, and spaces that feel designed for elegance. The spa is tucked away in the lower level, quiet and well appointed, though not as expansive as some modern city spas. The pool is a pleasant surprise, offering a calm space to retreat after a day in the city. The turndown ritual is precise, with lighting and linens adjusted to a consistent standard. The entire property feels carefully maintained, with staff who understand the importance of polish in a hotel like this.`,
      `Practical matters are handled well. The location provides quick access to the Seine and the museum district, and staff can arrange cars and transfers efficiently. Wi‑Fi is reliable, and the rooms feel insulated from street noise. The hotel’s atmosphere is formal but not oppressive, and the details reinforce that sense of classic luxury. You are staying in a palace, and the property wants you to feel it at every turn.`
    ]),
    review_verdict: section([
      `Shangri‑La Paris is for travelers who want the full Paris palace experience with the city’s most iconic view. It delivers glamour, ceremony, and a sense of occasion that few hotels can match. If you prefer a quieter, more intimate stay, this may feel too formal. But if you are celebrating a milestone or want to wake up to the Eiffel Tower framed perfectly in your window, it is hard to beat.`,
      `The hotel’s strengths are clear: location, view, and a polished service style. The trade‑offs are equally clear: a formal atmosphere and dining that prioritizes classic elegance over innovation. For many travelers, those trade‑offs are part of the appeal. Shangri‑La Paris is not trying to be subtle; it is delivering Paris in full Technicolor, and it does so with confidence.`
    ])
  }
];

const brands = [
  {
    name: `Aman`,
    slug: `aman`,
    tagline: `The quiet revolution. Adrian Zecha’s anti‑hotel for people who value silence.`,
    hero_image: `https://images.unsplash.com/photo-1501117716987-c8e1ecb21001?auto=format&fit=crop&w=1600&q=80`,
    content_md: `# Aman\n\nAman began as a rebellion against the loud luxury of its era. When Adrian Zecha opened Amanpuri in 1988, the idea was not to build a showcase but a retreat: a hotel that felt like a private home, set in a landscape worth whispering about. The brand’s DNA is rooted in restraint. While other luxury operators chased bigger lobbies and more spectacle, Aman built spaces that drew the volume down. Its hotels were designed for people who travel to escape noise rather than seek it.\n\n## Origins\n\nZecha’s vision was a reaction to the homogenous luxury hotels of the time. Aman was to be the anti‑hotel: small scale, deeply connected to place, and tuned to the idea of serenity. The early properties were defined by their settings—temples, coastlines, jungle hills—and by an architectural approach that favored clean lines, tactile materials, and long sightlines. That early signature remains. Aman hotels are built to feel inevitable, as if they have always existed on their sites.\n\n## Design philosophy\n\nDesign at Aman is about editing rather than adding. Materials are natural and matte; lighting is soft; spaces are generously scaled but never flashy. The rooms feel like private residences rather than hotel suites, with furniture that sits low and balanced. The brand’s best properties use architecture as a frame for landscape, not a distraction from it. There is a strong sense of proportion, and a commitment to quiet luxury that resists trend cycles.\n\n## Service DNA\n\nAman service is discreet to the point of invisibility. The staff’s goal is to anticipate without intruding. This is not performative hospitality; it is precision hospitality. Guests are encouraged to move at their own pace, and the service is designed to protect that rhythm. That means slow breakfasts, quiet check‑ins, and turndown that feels like a private ritual rather than a scripted routine.\n\n## Best property\n\n**Aman Tokyo** is the clearest expression of the brand’s philosophy in an urban context. A vertical retreat above the city, it manages to feel both monumental and quiet. The sky lobby, the onsen‑style spa, and the disciplined rooms create a city hotel that feels like a meditation retreat.\n\n## Worst property\n\nAman has remarkably few weak links, but properties that lean too heavily into size or commercial convenience risk diluting the original spirit. The brand’s rare missteps are not about bad service; they are about scale. When Aman grows too large or loses its sense of privacy, the magic thins.\n\n## Most underrated\n\nSeveral of Aman's smaller resorts in less trafficked destinations often deliver the purest version of the brand. These properties may not have the headline glamour of Tokyo or Venice, but they offer the kind of quiet immersion that made Aman famous in the first place.\n\n## Who the brand is for\n\nAman is for travelers who value silence as a luxury. It is for those who notice materials, light, and proportion; for those who do not want their hotel to announce itself. It is not for travelers who want lively social scenes or constant activity. The brand’s greatest gift is calm, and its best guests are those who know how to accept it.\n\nAman’s legacy is not about excess. It is about the idea that luxury can be quiet, and that a hotel can be a sanctuary rather than a stage. In a world that has become louder and faster, that idea feels even more radical now than it did in 1988.`,
    hotel_count: 2,
    founded_year: 1988,
    parent_company: `Aman Group`,
    best_property: `aman-tokyo`,
    website: `https://www.aman.com`,
    published: 1
  },
  {
    name: `Four Seasons`,
    slug: `four-seasons`,
    tagline: `Operational perfection as a philosophy. Consistency as a superpower.`,
    hero_image: `https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80`,
    content_md: `# Four Seasons\n\nFour Seasons is the standard bearer for consistent luxury. Founded in 1961, the brand’s reputation is built not on flashy design but on operational excellence: the ability to deliver a high‑quality, seamless experience in almost any city on earth. That consistency is not accidental; it is the result of a deeply ingrained service culture that prioritizes precision, training, and guest empathy.\n\n## Origins\n\nIsadore Sharp opened the first Four Seasons in Toronto with the idea that luxury should be defined by service, not just décor. That idea scaled. The brand’s growth was deliberate and disciplined, and it created a template for modern luxury hospitality: reliable, polished, and quietly confident.\n\n## Design philosophy\n\nFour Seasons design has evolved over the decades, but the brand’s guiding principle remains: comfort first. The best properties balance local character with brand standards, offering rooms that are familiar enough to feel safe yet grounded enough to feel specific. Four Seasons is rarely the most adventurous design brand, but it is almost always among the most livable. The spaces are designed for real use, not just photographs.\n\n## Service DNA\n\nService is the brand’s true hallmark. Four Seasons is known for remembering preferences quickly, delivering consistent housekeeping standards, and handling guest requests without friction. The service style is warm and professional, with an emphasis on precision over performance. Guests feel cared for rather than managed, a distinction that matters at this level.\n\n## Best property\n\n**Four Seasons Bora Bora** is the brand’s ability to deliver a dream scenario without operational hiccups. The setting is iconic, but the experience remains grounded and polished, with service that feels both attentive and relaxed. It captures the essence of Four Seasons: luxury that works.\n\n## Worst property\n\nThe brand’s weaker properties tend to be those where the setting is less inspiring. In such cases, the Four Seasons polish can feel too generic. The hotel may be perfectly run, but without a strong sense of place, the experience risks feeling interchangeable.\n\n## Most underrated\n\nSeveral of the brand’s urban properties quietly outperform their reputations. In cities where luxury competition is fierce, Four Seasons often excels by doing the basics impeccably. These hotels rarely trend on social media, but they deliver a calm, consistent experience that frequent travelers appreciate.\n\n## Who the brand is for\n\nFour Seasons is for travelers who value predictability, polish, and ease. It is for people who want to know that every detail will be handled, from check‑in to turndown. If you want edgy design or deep local immersion, you may prefer other brands. But if you want comfort you can trust, few do it better.\n\nFour Seasons does not promise revolution. It promises consistency, and in a world of fluctuating luxury standards, that consistency is its quiet superpower.`,
    hotel_count: 2,
    founded_year: 1961,
    parent_company: `Four Seasons Hotels and Resorts`,
    best_property: `four-seasons-bora-bora`,
    website: `https://www.fourseasons.com`,
    published: 1
  },
  {
    name: `Six Senses`,
    slug: `six-senses`,
    tagline: `Wellness without the woo. Sustainability as common sense.`,
    hero_image: `https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80`,
    content_md: `# Six Senses\n\nSix Senses built its identity on wellness long before it became a marketing buzzword. The brand favors dramatic, natural settings and emphasizes environmental responsibility alongside comfort. Its resorts are designed to feel integrated with their landscapes rather than imposed upon them, and the wellness offerings are woven into the experience instead of added as an afterthought.\n\n## Origins\n\nFounded in the 1990s, Six Senses positioned itself as a counterpoint to glossy resort culture. The early properties emphasized sustainability, local materials, and a sense of retreat. That foundation continues even as the brand has grown under larger hospitality groups.\n\n## Design philosophy\n\nDesign at Six Senses leans rustic and tactile. Materials are natural, lighting is warm, and interiors feel more like sophisticated eco‑retreats than high‑polish resorts. The spaces are designed to encourage quiet, outdoor living, and to keep guests connected to their environment.\n\n## Service DNA\n\nService is warm, relaxed, and wellness‑oriented. Guests are encouraged to slow down, and the staff facilitate that pace rather than push against it. The service style is less formal than in classic luxury hotels, but it is attentive and thoughtful.\n\n## Best property\n\n**Six Senses Zighy Bay** captures the brand at its most compelling: dramatic setting, integrated design, and a strong wellness focus. The property feels like a true escape, and the resort’s energy aligns perfectly with the Six Senses ethos.\n\n## Worst property\n\nThe brand’s weaker properties tend to be those that drift too far from the natural integration that defines Six Senses. When a resort feels more like a conventional luxury hotel with a wellness layer added, the brand’s identity weakens.\n\n## Most underrated\n\nSome of the brand’s smaller properties deliver the purest Six Senses experience, with fewer distractions and a deeper sense of connection to nature. These are often the resorts that devoted fans return to repeatedly.\n\n## Who the brand is for\n\nSix Senses is for travelers who prioritize wellness, nature, and a sense of retreat. It is for those who want to feel restored rather than entertained. If you want lively nightlife or high‑gloss glamour, you may prefer other brands. But if you want a resort that feels grounded and restorative, Six Senses delivers.\n\nThe brand’s greatest strength is its consistency of atmosphere. Even as it grows, it continues to offer a sense of calm and connection that feels increasingly rare.`,
    hotel_count: 1,
    founded_year: 1995,
    parent_company: `IHG`,
    best_property: `six-senses-zighy-bay`,
    website: `https://www.sixsenses.com`,
    published: 1
  },
  {
    name: `One&Only`,
    slug: `one-and-only`,
    tagline: `Kerzner’s masterclass in destination resort design.`,
    hero_image: `https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1600&q=80`,
    content_md: `# One&Only\n\nOne&Only is built around statement resorts in iconic locations. The brand’s properties are large, polished, and designed for travelers who want a comprehensive resort experience rather than a small boutique stay. The tone is glamorous but controlled, and the service is geared toward handling big expectations with ease.\n\n## Origins\n\nOne&Only emerged from Kerzner International’s resort pedigree, with a focus on destination properties that could command attention. The brand’s early success in the Maldives and South Africa established its reputation for scale and glamour, and that DNA remains.\n\n## Design philosophy\n\nDesign at One&Only is bold and theatrical but grounded by high‑quality materials and a sense of order. The properties are large, but the layouts are designed to create zones of privacy within the bigger resort. There is a clear emphasis on space: big villas, wide beaches, expansive public areas.\n\n## Service DNA\n\nService is polished and confident, with a strong emphasis on operational precision. One&Only resorts have the staff depth to provide attentive service even at full occupancy, and they tend to remember guest preferences quickly. The service style is more formal than at boutique resorts but less rigid than at palace hotels.\n\n## Best property\n\n**One&Only Reethi Rah** is the brand at its most iconic. The scale of the island, the quality of the villas, and the seamless service make it a benchmark for large‑scale resort luxury.\n\n## Worst property\n\nThe brand’s weaker properties are those that feel too generic, where the destination does not carry enough weight to justify the scale. When the setting is less compelling, the One&Only formula can feel heavy.\n\n## Most underrated\n\nSome of One&Only’s newer resorts have been quietly impressive, offering a slightly more refined, less flashy version of the brand. These properties often deliver a calmer experience while retaining the operational strength that defines One&Only.\n\n## Who the brand is for\n\nOne&Only is for travelers who want a full resort experience: multiple restaurants, large villas, and a sense that everything has been planned. It is ideal for families and couples who want both privacy and choice. If you want intimacy and minimalism, it may feel too large. But if you want scale done with polish, One&Only remains one of the best at it.\n\nThe brand’s appeal is in its confidence. One&Only knows how to deliver high‑touch resort luxury at scale, and it does so with a clarity that has kept it relevant for decades.`,
    hotel_count: 1,
    founded_year: 2002,
    parent_company: `Kerzner International`,
    best_property: `one-and-only-reethi-rah`,
    website: `https://www.oneandonlyresorts.com`,
    published: 1
  },
  {
    name: `Belmond`,
    slug: `belmond`,
    tagline: `From Orient Express to LVMH: the art of the journey.`,
    hero_image: `https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80`,
    content_md: `# Belmond\n\nBelmond is built on heritage, romance, and a sense of narrative. The brand’s collection of hotels, trains, and cruises celebrates the idea of travel as an experience rather than a transaction. Its properties are often historic, set in extraordinary locations, and defined by atmosphere more than modern design.\n\n## Origins\n\nBelmond’s roots trace back to the Golden Age of travel, with properties like the Venice Simplon‑Orient‑Express and legendary hotels in Italy and beyond. The brand grew by preserving and curating these icons, turning them into destinations in their own right.\n\n## Design philosophy\n\nBelmond leans into history. Interiors are often classic, with antique details and a sense of time that modern brands cannot replicate. The best properties feel like living museums, but with enough comfort to make them welcoming rather than stiff. The brand is less interested in minimalism and more interested in storytelling.\n\n## Service DNA\n\nService is traditional and gracious. The tone is formal but warm, with staff who understand the rituals of classic hospitality. Belmond’s best teams deliver the kind of attentive care that feels personal without being intrusive.\n\n## Best property\n\n**Belmond Hotel Caruso** is the brand’s ethos distilled into a single place: historic palace, dramatic setting, and a sense of romance that is impossible to fake.\n\n## Worst property\n\nBelmond’s weaker properties are those where the history is less compelling. When the narrative is thin, the brand’s reliance on heritage can feel like a costume rather than a genuine asset.\n\n## Most underrated\n\nSome of Belmond’s smaller, less famous properties deliver the purest experience, with fewer crowds and a deeper sense of intimacy. These hotels often offer the most authentic sense of Belmond’s original spirit.\n\n## Who the brand is for\n\nBelmond is for travelers who care about romance, history, and atmosphere. It is for those who want to feel the weight of a place’s past while still enjoying the comforts of modern hospitality. If you want sharp contemporary design, look elsewhere. But if you want travel to feel like a story, Belmond remains unmatched.\n\nBelmond’s power is in its ability to make travel feel like an event. It is not always subtle, but it is often unforgettable, and for many travelers that is the entire point.`,
    hotel_count: 1,
    founded_year: 1976,
    parent_company: `LVMH`,
    best_property: `belmond-hotel-caruso`,
    website: `https://www.belmond.com`,
    published: 1
  }
];

const destinations = [
  {
    name: `Tokyo`,
    slug: `tokyo`,
    country: `Japan`,
    region: `Asia`,
    hero_image: `https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1600`,
    intro_md: `Where precision meets poetry: a guide to Tokyo’s finest hotels.`,
    best_time: `October to April`,
    content_md: `# Tokyo\n\nTokyo is a city of contradictions made harmonious: neon light and temple quiet, crowded streets and solitary bars, rituals that feel centuries old and technology that feels two years ahead. The best hotel experiences here are not about novelty; they are about editing. Tokyo’s luxury hotels succeed when they soften the city’s noise without erasing its character.\n\n## The hotel landscape\n\nThe city’s top properties fall into two broad camps. There are the contemporary urban retreats—high‑rise hotels that frame the skyline and deliver a sense of quiet isolation above the city. Then there are the intimate boutique stays that lean into neighborhood texture, closer to the ground, more rooted in the city’s everyday rhythms. Both can be exceptional, but they deliver different versions of Tokyo.\n\n## Neighborhood rhythm\n\nOtemachi and Marunouchi are the polished business districts, where the city’s most refined high‑rise hotels reside. Shinjuku and Shibuya bring energy and density, better for travelers who want movement and nightlife. The quieter areas—Aoyama, Azabu, and parts of Ginza—offer a more measured pace, with hotels that feel like private hideaways.\n\n## What to prioritize\n\nIn Tokyo, silence is a luxury. Prioritize hotels with strong sound insulation, thoughtful lighting, and a spa or bath culture that lets you reset after long days. The city’s best stays are those that understand the power of ritual: tea service, a careful turndown, a bathtub that feels like a sanctuary.\n\n## The Turndown take\n\nTokyo’s finest hotels are not defined by extravagance but by control. The best properties deliver quiet excellence with a sense of purpose, offering a version of the city that feels distilled and calm. Choose the hotel that aligns with your desired pace, and Tokyo will reward you with its most elegant face.`,
    published: 1
  },
  {
    name: `The Maldives`,
    slug: `maldives`,
    country: `Maldives`,
    region: `Indian Ocean`,
    hero_image: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600`,
    intro_md: `Decoding the atolls: which island resort is actually worth it.`,
    best_time: `November to April`,
    content_md: `# The Maldives\n\nThe Maldives is the purest expression of island luxury: tiny atolls, turquoise water, and resorts that function as self‑contained worlds. But not all islands are equal. The experience can range from rustic simplicity to ultra‑polished resort living, and choosing the right property is the difference between a dream and a disappointment.\n\n## Understanding the atolls\n\nProximity to Malé affects everything from transfer time to cost. Closer atolls mean quick boat rides but slightly busier skies; farther atolls mean longer seaplane transfers but greater isolation. The best resorts manage to make the journey part of the experience, not just a logistical hurdle.\n\n## Resort styles\n\nThere are two dominant styles: intimate boutique islands with a few dozen villas, and large‑scale resorts with multiple restaurants, extensive facilities, and more varied clientele. Both can be wonderful, but they offer different moods. Boutique islands favor quiet, while larger resorts offer choice and activity.\n\n## What matters most\n\nIn the Maldives, space is the luxury. Look for resorts with generous villas, genuine privacy, and beaches that feel uncrowded even at high occupancy. Service matters too; in a place with limited external options, the hotel becomes your world. The best properties make that world feel seamless.\n\n## The Turndown take\n\nThe Maldives is a destination that rewards intentional choices. Decide whether you want scale or intimacy, action or stillness, and choose accordingly. The most successful stays are those where the resort’s rhythm matches your own.`,
    published: 1
  },
  {
    name: `The Italian Riviera`,
    slug: `italian-riviera`,
    country: `Italy`,
    region: `Europe`,
    hero_image: `https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1600`,
    intro_md: `Amalfi, Portofino, Ravello: the coast that launched a thousand hotel empires.`,
    best_time: `May to October`,
    content_md: `# The Italian Riviera\n\nThe Italian Riviera is less a single destination than a ribbon of iconic towns, each with its own rhythm. Amalfi’s drama, Portofino’s glamour, and Ravello’s quiet elegance create a coastline that has defined luxury travel for generations. The best hotels here are not about modernity; they are about atmosphere, history, and the slow, sensory pace that the coast demands.\n\n## The towns\n\nAmalfi and Positano deliver classic postcard energy, with steep streets and lively evenings. Portofino leans glamorous and polished, while Ravello sits high above the coast, quieter and more contemplative. Each town offers a different version of the Riviera, and the best hotels amplify that specific mood rather than flattening it.\n\n## Hotel character\n\nHistoric properties dominate, many set in former palazzi or villas. The best hotels embrace their age, offering a sense of narrative along with modern comforts. Expect uneven floors, antique details, and terrace views that make the quirks feel worthwhile.\n\n## How to choose\n\nConsider your desired pace. If you want nightlife and energy, stay closer to the main coastal towns. If you want calm and long afternoons, the hilltop properties deliver that in full. View matters, but so does access—some of the most beautiful hotels are also the most removed.\n\n## The Turndown take\n\nThe Riviera is about atmosphere, not efficiency. Choose a hotel that encourages you to slow down, and the coast will reward you with its best light, its best food, and its most memorable quiet moments.`,
    published: 1
  },
  {
    name: `Paris`,
    slug: `paris`,
    country: `France`,
    region: `Europe`,
    hero_image: `https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600`,
    intro_md: `Beyond the Palace: where to sleep in the City of Light.`,
    best_time: `April to June, September to November`,
    content_md: `# Paris\n\nParis has a unique hotel culture. The best stays here feel like private apartments: high ceilings, tall windows, and the sense that you are living inside the city rather than observing it. The city’s palace hotels deliver glamour and heritage, while smaller properties can offer a more intimate, residential mood.\n\n## The palace question\n\nParis’s palace hotels are iconic, and for good reason. They offer service, history, and a sense of ceremony that is difficult to replicate. But they can feel formal. If you want grandeur and classic Paris, they deliver. If you want quiet and personal, consider smaller luxury properties that still offer excellent service without the spectacle.\n\n## Neighborhoods\n\nThe 1st and 8th arrondissements are the heart of classic Paris luxury, with easy access to museums and landmarks. The Left Bank offers a more intellectual, understated vibe. The Marais is lively and design‑forward, while Saint‑Germain feels literary and refined. Your hotel choice should match the mood you want.\n\n## What to prioritize\n\nIn Paris, light matters. Choose a hotel with good windows and a sense of space. Service should feel elegant but not stiff. And location should support your desired rhythm—long walks, late dinners, or quiet mornings with coffee.\n\n## The Turndown take\n\nParis rewards hotels that feel like residences rather than fortresses. The best stays are those that make the city feel personal, giving you a base that feels like it belongs to you, even for a few days.`,
    published: 1
  },
  {
    name: `Bora Bora`,
    slug: `bora-bora`,
    country: `French Polynesia`,
    region: `South Pacific`,
    hero_image: `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600`,
    intro_md: `The overwater bungalow, perfected: Bora Bora’s luxury landscape.`,
    best_time: `May to October`,
    content_md: `# Bora Bora\n\nBora Bora is the South Pacific dream distilled: a volcanic peak rising from a lagoon that looks unreal. The island’s luxury hotels are built around that visual drama, and the best ones manage to deliver romance without veering into cliché.\n\n## The lagoon factor\n\nEvery hotel in Bora Bora sells the view, but the experience can be vastly different. The best resorts offer a sense of privacy on the water, with decks that feel secluded and a calm that holds even at peak occupancy. The lagoon itself is the main amenity, and properties that allow you to access it easily—steps from your villa, a quiet beach entry—feel the most authentic.\n\n## Resort styles\n\nSome resorts are polished and large, with multiple restaurants and extensive facilities. Others are smaller, more boutique, and more intimate. The right choice depends on your travel style: polished resort living or quieter, pared‑back retreat.\n\n## What to prioritize\n\nIn Bora Bora, light and water are everything. Choose a hotel that faces the sunrise if you want morning calm, or sunset if you want evening drama. Consider the condition of the lagoon’s coral and the quality of snorkeling if you plan to spend time in the water.\n\n## The Turndown take\n\nThe best Bora Bora stays feel effortless: the water is close, the service is smooth, and the resort disappears into the experience. Choose well, and the island will deliver exactly what it promises: beauty, calm, and a sense of escape that feels almost unreal.`,
    published: 1
  }
];

const articles = [
  {
    title: `The Quiet Architecture of Arrival`,
    slug: `the-quiet-architecture-of-arrival`,
    category: `the-details`,
    subtitle: `How the best hotels choreograph the first five minutes.`,
    hero_image: `https://images.unsplash.com/photo-1501117716987-c8e1ecb21001?auto=format&fit=crop&w=1600&q=80`,
    content_md: `# The Quiet Architecture of Arrival\n\nArrival is the opening chapter of a hotel story. The best properties treat it with the same care a film director gives to a first scene. You see a sliver of the view, not the whole thing. You move through a corridor that narrows your attention, then opens your breath. The hotel is teaching you how to feel before you even reach your room.\n\n## The tempo matters\n\nThe arrival sequence is about pacing. A busy lobby, a long line, and a loud soundtrack all tell your nervous system to stay alert. The best hotels do the opposite. They slow you down on purpose. The ceiling height drops just a little. The light warms. The sound absorbs. You are offered a seat rather than a counter. These are not accidents. They are design decisions that communicate safety and control.\n\n## Materials as psychology\n\nStone, wood, linen, and paper are not just aesthetic choices; they are cues. They absorb light and sound in a way that metal and glass do not. They feel warm to the touch. They make you move more slowly. When you walk across a matte stone floor, you unconsciously lower your voice. When the lobby smells faintly of cedar rather than perfume, you feel grounded. The material palette is a tool for mood, and the best hotels use it deliberately.\n\n## The reveal\n\nGreat hotels do not show you everything at once. There is a first glimpse of the view—a corner of the sea, a slice of skyline—then a pause, then the full reveal. This is not theatrical for the sake of drama; it is for psychological effect. It creates anticipation and makes the final moment feel earned. The reveal can be a grand window, a courtyard garden, or a corridor that suddenly opens to the landscape. The point is the same: you feel the hotel is guiding you, and that guidance is calming.\n\n## The staff choreography\n\nHuman interaction is part of arrival architecture. The staff’s tone, pace, and proximity are as important as the physical space. The best hotels train their teams to adjust to the guest’s energy. If you arrive frazzled, they speak less and move more slowly. If you arrive curious, they offer gentle explanation. A good arrival is not a script; it is a sensitivity.\n\n## The ritual of welcome\n\nSmall rituals matter: a warm towel, a cup of tea, a cold drink handed to you before a single question is asked. These gestures are not about extravagance; they are about care. They tell you the hotel is holding you for a moment. In a world that moves fast, that pause feels like a luxury in itself.\n\n## The Turndown take\n\nWe judge hotels not only by their rooms but by their first five minutes. The arrival sequence sets the tone for everything that follows. It is the hotel’s promise, delivered in architecture and gesture. When it is done well, you feel the world quiet down. That is the most meaningful luxury of all.`,
    hotels_mentioned: [`aman-tokyo`, `aman-venice`],
    featured: 1,
    published: 1
  },
  {
    title: `Why the Turndown Service Matters`,
    slug: `why-the-turndown-service-matters`,
    category: `the-details`,
    subtitle: `Our namesake ritual, and what it reveals about a hotel’s soul.`,
    hero_image: `https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80`,
    content_md: `# Why the Turndown Service Matters\n\nTurndown is the most honest ritual in a hotel. It is the moment when a property reveals how much it cares about you after the public spaces go quiet. Anyone can design a beautiful lobby. Turndown happens in private, when the guest is not watching. That is why it matters.\n\n## The invisible craft\n\nA great turndown is not just about folding sheets. It is about understanding the guest’s evening rhythm. The lighting shifts from bright to soft. Curtains are drawn to a precise line, neither too dark nor too exposed. A glass is placed where your hand naturally reaches. The temperature is adjusted to sleep rather than work. These details feel invisible, but they are the difference between a good night and a great one.\n\n## The psychology of care\n\nTurndown is a message. It says: we are thinking about you even when you are not in the room. That message is powerful. It creates trust. It makes the hotel feel like a caretaker rather than a vendor. In an industry that often sells luxury as spectacle, turndown is luxury as service. It is quiet, practical, and deeply personal.\n\n## The small gestures\n\nThe best turndown rituals include a small gesture that feels specific: a handwritten note, a small sweet, or a local detail that connects you to the place. These gestures do not need to be expensive. They need to be thoughtful. A postcard of the city, a book recommendation, or a local tea bag can feel more meaningful than an overly branded souvenir.\n\n## What it reveals\n\nTurndown exposes a hotel’s priorities. Properties that treat it as an afterthought usually treat other details the same way. Properties that do it well tend to excel across the board. The consistency of the ritual is key. It should feel intentional every night, not just on the first evening. That consistency is a hallmark of strong operations and a culture of care.\n\n## The Turndown take\n\nWe built this magazine around the ritual for a reason. Turndown is a litmus test. It tells us whether a hotel is merely luxurious or genuinely hospitable. The best properties make you feel seen in small ways, and turndown is where that feeling is most honest.`,
    hotels_mentioned: [`aman-tokyo`, `mandarin-oriental-bangkok`],
    featured: 0,
    published: 1
  },
  {
    title: `Aman Tokyo vs Park Hyatt Tokyo`,
    slug: `aman-tokyo-vs-park-hyatt-tokyo`,
    category: `versus`,
    subtitle: `Two philosophies of Tokyo luxury, compared honestly.`,
    hero_image: `https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1600`,
    content_md: `# Aman Tokyo vs Park Hyatt Tokyo\n\nTokyo has no shortage of luxury hotels, but few comparisons are as revealing as Aman Tokyo versus Park Hyatt Tokyo. Both sit high above the city, both promise a retreat from the urban rush, and both attract travelers who care about atmosphere as much as amenities. Yet they deliver radically different versions of luxury.\n\n## The setting\n\nAman Tokyo occupies a modern tower in Otemachi. Its lobby is a vast stone‑and‑light space that feels more like a temple than a hotel. Park Hyatt Tokyo sits in Shinjuku, with a more traditional, clubby atmosphere that became iconic in the early 2000s. Aman’s setting is austere and architectural; Park Hyatt’s is warm, wood‑toned, and cinematic in a different way.\n\n## Design language\n\nAman Tokyo’s design is minimalist and Japanese in its proportions: low seating, natural materials, and an emphasis on negative space. Park Hyatt Tokyo is international luxury with a strong residential feel—dark woods, leather chairs, and a sense of old‑world comfort. Aman feels like a modern shrine; Park Hyatt feels like a well‑appointed private club.\n\n## The room experience\n\nAman’s rooms are calm and restrained, with washi‑lit cubes, deep soaking tubs, and a color palette that fades into the skyline. Park Hyatt’s rooms are larger on average and more traditional, with plush sofas, warm lighting, and a sense of coziness that feels more familiar to Western travelers. Aman is about editing; Park Hyatt is about comfort.\n\n## Service style\n\nBoth hotels deliver excellent service, but the style differs. Aman is quietly anticipatory; staff read your mood and keep interactions minimal. Park Hyatt is more overtly hospitable, with a friendly, conversational tone and a slightly more social atmosphere. If you want to feel protected by silence, Aman excels. If you want warmth without formality, Park Hyatt has the edge.\n\n## Dining and social life\n\nPark Hyatt has a more active bar scene, anchored by the New York Bar, which remains one of Tokyo’s most iconic hotel venues. Aman’s dining is calmer, more refined, and less social. Breakfast at Aman is a study in restraint; breakfast at Park Hyatt feels more expansive and international. For guests who want a livelier evening energy, Park Hyatt is the clear choice.\n\n## The verdict\n\nChoose Aman Tokyo if you want a modern, minimalist retreat and a sense of silence that feels almost meditative. Choose Park Hyatt Tokyo if you want classic luxury, a stronger social scene, and a warmer, more familiar atmosphere. Both hotels are exceptional. The question is not which is better, but which aligns with your desired rhythm.\n\nTokyo rewards those who choose with intention. In that sense, this is not just a hotel decision; it is a decision about how you want to experience the city itself.`,
    hotels_mentioned: [`aman-tokyo`],
    featured: 1,
    published: 1
  },
  {
    title: `Aman Beverly Hills`,
    slug: `aman-beverly-hills`,
    category: `new-openings`,
    subtitle: `What to expect from Aman’s first American city hotel.`,
    hero_image: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600`,
    content_md: `# Aman Beverly Hills\n\nAman’s first American city hotel is poised to be one of the most watched openings in recent luxury hospitality. Beverly Hills is already saturated with iconic properties, but Aman’s arrival signals a different kind of ambition: to bring its signature quiet luxury to a city known for spectacle.\n\n## The setting\n\nBeverly Hills offers a paradox that suits Aman’s ethos. It is glamorous and high‑profile, yet it also has pockets of calm: tree‑lined streets, private estates, and hidden gardens. Aman’s approach will likely emphasize those quieter layers, offering a sanctuary within the city rather than a stage for the city.\n\n## What we expect from the design\n\nAman’s design language is remarkably consistent across continents: low lighting, natural materials, generous proportions, and a sense of hush. In Beverly Hills, expect a modern interpretation—more glass, more openness, but still restrained. The brand tends to avoid flashy statements, so the building will likely feel like a private residence scaled up rather than a conventional hotel tower.\n\n## The service question\n\nAman service is famously discreet, and it will be interesting to see how that translates in a market where guests often expect visible attention. The brand’s strength is in making you feel cared for without being seen. If Aman can maintain that discipline in Beverly Hills, it will differentiate itself immediately.\n\n## The food and social scene\n\nAman hotels are not known for nightlife, but a Beverly Hills property will inevitably face pressure to be a social destination. Expect a strong dining program, likely with a focus on wellness and refined simplicity rather than theatrical dining. The challenge will be to balance Aman’s quiet identity with the city’s appetite for scene.\n\n## The Turndown take\n\nIf Aman Beverly Hills succeeds, it will offer a new kind of Los Angeles luxury: discreet, calm, and almost monastic in a city built on performance. For travelers who want Beverly Hills without the noise, the opening could be a game‑changer.`,
    hotels_mentioned: [],
    featured: 0,
    published: 1
  }
];

const hotelColumns = [
  `id`,
  `slug`,
  `name`,
  `brand`,
  `brand_slug`,
  `location`,
  `country`,
  `country_slug`,
  `region`,
  `region_slug`,
  `latitude`,
  `longitude`,
  `price_range`,
  `price_from`,
  `price_to`,
  `currency`,
  `style`,
  `best_for`,
  `hero_image`,
  `images`,
  `website`,
  `booking_url`,
  `tagline`,
  `review_intro`,
  `review_arrival`,
  `review_room`,
  `review_service`,
  `review_food`,
  `review_details`,
  `review_verdict`,
  `verdict_best_for`,
  `verdict_skip_if`,
  `verdict_standout`,
  `rating_overall`,
  `rating_room`,
  `rating_service`,
  `rating_food`,
  `rating_value`,
  `rating_location`,
  `published`,
  `featured`
];

const brandColumns = [
  `id`,
  `slug`,
  `name`,
  `tagline`,
  `hero_image`,
  `content_md`,
  `hotel_count`,
  `founded_year`,
  `parent_company`,
  `best_property`,
  `website`,
  `published`
];

const destinationColumns = [
  `id`,
  `slug`,
  `name`,
  `country`,
  `region`,
  `hero_image`,
  `intro_md`,
  `best_time`,
  `content_md`,
  `published`
];

const articleColumns = [
  `id`,
  `slug`,
  `title`,
  `subtitle`,
  `category`,
  `hero_image`,
  `content_md`,
  `hotels_mentioned`,
  `published`,
  `featured`
];

const insertHotelQuery = `INSERT INTO hotels (${hotelColumns.join(`, `)}) VALUES (${hotelColumns
  .map((_, index) => `$${index + 1}`)
  .join(`, `)})`;

const insertBrandQuery = `INSERT INTO brands (${brandColumns.join(`, `)}) VALUES (${brandColumns
  .map((_, index) => `$${index + 1}`)
  .join(`, `)})`;

const insertDestinationQuery = `INSERT INTO destinations (${destinationColumns.join(`, `)}) VALUES (${destinationColumns
  .map((_, index) => `$${index + 1}`)
  .join(`, `)})`;

const insertArticleQuery = `INSERT INTO articles (${articleColumns.join(`, `)}) VALUES (${articleColumns
  .map((_, index) => `$${index + 1}`)
  .join(`, `)})`;

const seed = async () => {
  await pool.query(schema);
  await pool.query(`DELETE FROM hotels`);
  await pool.query(`DELETE FROM brands`);
  await pool.query(`DELETE FROM destinations`);
  await pool.query(`DELETE FROM articles`);
  await pool.query(`DELETE FROM newsletter_subscribers`);

  for (const hotel of hotels) {
    await pool.query(insertHotelQuery, [
      randomUUID(),
      hotel.slug,
      hotel.name,
      hotel.brand,
      hotel.brand_slug,
      hotel.location,
      hotel.country,
      hotel.country_slug,
      hotel.region,
      hotel.region_slug,
      hotel.latitude,
      hotel.longitude,
      hotel.price_range,
      hotel.price_from,
      hotel.price_to,
      hotel.currency,
      hotel.style,
      JSON.stringify(hotel.best_for),
      hotel.hero_image,
      JSON.stringify(hotel.images),
      hotel.website,
      hotel.booking_url,
      hotel.tagline,
      hotel.review_intro,
      hotel.review_arrival,
      hotel.review_room,
      hotel.review_service,
      hotel.review_food,
      hotel.review_details,
      hotel.review_verdict,
      hotel.verdict_best_for,
      hotel.verdict_skip_if,
      hotel.verdict_standout,
      hotel.rating_overall,
      hotel.rating_room,
      hotel.rating_service,
      hotel.rating_food,
      hotel.rating_value,
      hotel.rating_location,
      1,
      hotel.featured ?? 0
    ]);
  }

  for (const brand of brands) {
    await pool.query(insertBrandQuery, [
      randomUUID(),
      brand.slug,
      brand.name,
      brand.tagline,
      brand.hero_image,
      brand.content_md,
      brand.hotel_count,
      brand.founded_year,
      brand.parent_company,
      brand.best_property,
      brand.website,
      brand.published
    ]);
  }

  for (const destination of destinations) {
    await pool.query(insertDestinationQuery, [
      randomUUID(),
      destination.slug,
      destination.name,
      destination.country,
      destination.region,
      destination.hero_image,
      destination.intro_md,
      destination.best_time,
      destination.content_md,
      destination.published
    ]);
  }

  for (const article of articles) {
    await pool.query(insertArticleQuery, [
      randomUUID(),
      article.slug,
      article.title,
      article.subtitle,
      article.category,
      article.hero_image,
      article.content_md,
      JSON.stringify(article.hotels_mentioned),
      article.published,
      article.featured
    ]);
  }
};

seed()
  .then(() => {
    console.log(`Seed complete.`);
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
