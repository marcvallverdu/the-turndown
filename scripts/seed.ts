import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { schema } from '../lib/schema';

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'theturndown.db');
const db = new Database(dbPath);

db.pragma('foreign_keys = ON');
db.exec(schema);

const paragraph = (sentences: string[]) => sentences.join(' ');

const introSection = (hotel: any) =>
  [
    paragraph([
      `${hotel.name} in ${hotel.location} is a hotel that refuses to shout, even when the skyline or sea around it is putting on a performance.`,
      `The ${hotel.brand} philosophy is present in the restraint: the materials are tactile, the silhouettes are calm, and the mood is intentionally low-lit, almost cinematic.`,
      `You feel the edit immediately, with every corridor trimmed of clutter and every corner offering a line of sight to something worth pausing for.`,
      `It is a property for travelers who notice the weight of a door handle and the temperature of a cup, and who value atmosphere as much as amenities.`,
      `There is glamour here, but it is filtered, more like a well-composed photograph than a glossy advertisement.`
    ]),
    paragraph([
      `What stands out is the way the hotel carries its location: ${hotel.introContext} is not used as a theme, but as a quiet frame.`,
      `The result is a stay that feels undeniably of place without leaning on cliches, and that is a hard balance to strike at this end of the market.`,
      `The public spaces read like a private club at midday, soft with light and slow with sound, while the rooms taper the energy down even further.`,
      `The hotel is not for everyone, and that is exactly the point; it is tailored to guests who want the world softened, not amplified.`,
      `It is a hotel that asks you to move at its pace, and it rewards that decision generously.`
    ]),
    paragraph([
      `If you are looking for a scene, you can find one in the city beyond the doors, but the hotel itself is a sanctuary of hush.`,
      `There is a rigorous sense of choreography here, from the scenting of the air to the cadence of the lighting, and it never feels forced.`,
      `The property also has opinions: it favors depth over novelty, texture over spectacle, and lingering over ticking boxes.`,
      `That makes ${hotel.name} a compelling opener for The Turndown, because it knows exactly what kind of luxury it wants to deliver.`,
      `It is a stay that leaves you with fewer photos but a sharper memory, which is exactly the kind of luxury that lasts.`
    ])
  ].join('\n\n');

const arrivalSection = (hotel: any) =>
  [
    paragraph([
      `Arrival at ${hotel.name} is a lesson in controlled tempo, beginning with ${hotel.arrivalScene} and ending with the kind of check-in that feels like a welcome rather than a transaction.`,
      `The staff operate in a low-voiced precision, reading your energy and adjusting accordingly, which is a rare and valuable skill.`,
      `The lobby sequence is designed to slow you down: surfaces are matte, the ceiling lines are measured, and the seating invites a pause before anything else.`,
      `There is no ceremonial fuss, just a quiet competence that makes the transition from outside to inside feel seamless.`,
      `It is one of those arrivals where you can feel the tension leave your shoulders as soon as the doors close behind you.`
    ]),
    paragraph([
      `The first sensory impression is subtle but specific: ${hotel.arrivalScent}, a faint thread that ties the public spaces together.`,
      `Luggage disappears, a warm towel appears, and someone finds a way to refer to your itinerary without making it feel like surveillance.`,
      `In a world of check-in kiosks, this is the opposite, and the human element feels deliberate rather than performative.`,
      `The journey to the room is paced with visual cues, a quiet reveal of ${hotel.arrivalVista} that builds anticipation rather than giving everything away at once.`,
      `It is luxury without the ritualized bow, and it feels modern.`
    ]),
    paragraph([
      `There are moments of charm too, the kind that signal a hotel has paid attention to how guests actually feel when they arrive.`,
      `A small welcome gesture, ${hotel.arrivalGesture}, lands with sincerity because it is unobtrusive.`,
      `You are not put on display; you are folded into the environment, and that creates an immediate sense of belonging.`,
      `The arrival does not try to impress you with quantity, but with tone, and tone is far harder to fake.`,
      `By the time you step inside the room, you already feel like the hotel understands your reasons for traveling.`
    ])
  ].join('\n\n');

const roomSection = (hotel: any) =>
  [
    paragraph([
      `The rooms at ${hotel.name} are built around ${hotel.roomAnchor}, a quiet centerpiece that defines the experience without shouting for attention.`,
      `The palette is restrained, with ${hotel.roomPalette} acting as the main texture, and the result is calming rather than cold.`,
      `It is a space that feels designed for reading, for slow mornings, and for the particular kind of silence that only high-end hotels can engineer.`,
      `Windows frame ${hotel.roomView} in a way that feels intentional, and the light is soft enough to stay with you throughout the day.`,
      `It is the sort of room that makes you want to unpack immediately, because it feels like it was built for a longer stay.`
    ]),
    paragraph([
      `Detail work is meticulous: ${hotel.roomDetail} is the kind of touch you notice only after a few hours, which is exactly when it should reveal itself.`,
      `The bed is exceptional, with crisp linens and a weight that signals deep sleep, while the lighting scheme allows for a full range of moods.`,
      `Sound insulation is equally impressive, and the quiet feels like a luxury in itself, particularly given the pace outside.`,
      `Storage is generous, bathrooms are spacious, and the materials carry a natural warmth that keeps things from feeling too clinical.`,
      `It is a room that invites ritual, whether that is a long bath, a window-side coffee, or simply the act of turning off the phone.`
    ]),
    paragraph([
      `If there is a drawback, it is a small one: ${hotel.roomCritique}, which some guests may notice but most will forgive.`,
      `The overall impression remains one of composure, the sense that every square foot has been considered and refined.`,
      `Even the in-room technology is gentle, with controls that are intuitive rather than overly clever.`,
      `The room serves as the hotel in miniature: restrained, confident, and quietly indulgent.`,
      `It is a space that makes the outside world feel slightly too loud, and that is the highest compliment in this category.`
    ])
  ].join('\n\n');

const serviceSection = (hotel: any) =>
  [
    paragraph([
      `Service at ${hotel.name} is centered on ${hotel.servicePhilosophy}, a style that feels personal without ever crossing into familiarity.`,
      `Requests are anticipated rather than reacted to, and the staff seem to work from a shared script that still allows for individual warmth.`,
      `There is a sense that everyone understands the hotel is a retreat, not a stage, and that keeps the tone calm.`,
      `You can feel the difference between trained politeness and genuine hospitality, and ${hotel.name} delivers the latter.`,
      `It is the sort of service that does not call attention to itself, which is exactly why it feels so luxurious.`
    ]),
    paragraph([
      `The daily rhythm is tailored subtly: turndown arrives with ${hotel.serviceDetail}, room refreshes are quiet and thorough, and a concierge check-in appears at just the right time.`,
      `When you ask for advice, you receive something specific and thoughtful, not a rehearsed list.`,
      `The team has opinions about the city, and they share them with care, which adds depth to the stay.`,
      `Even the bar staff and spa attendants work with the same low-key precision, creating a unified sense of place.`,
      `You never feel like a room number; you feel like a guest who matters.`
    ]),
    paragraph([
      `There is also a measured confidence in the way the hotel handles small problems.`,
      `${hotel.serviceRecovery} arrives quickly, and it is done with a light touch that avoids drama.`,
      `This kind of responsiveness is often invisible, but it is what separates a good hotel from a great one.`,
      `The service here is not about excess, it is about accuracy, and that makes the experience feel balanced.`,
      `It is a style of hospitality that respects your time, your privacy, and your mood.`
    ])
  ].join('\n\n');

const foodSection = (hotel: any) =>
  [
    paragraph([
      `Food and drink at ${hotel.name} centers on ${hotel.foodAnchor}, and it captures the mood of the property in edible form.`,
      `Breakfast is a highlight, with ${hotel.foodBreakfast} delivered with the same attentiveness as dinner service.`,
      `Menus favor balance over excess, and the kitchen seems more interested in clarity than in showmanship.`,
      `It is a satisfying approach, particularly in a hotel where calm is part of the luxury proposition.`,
      `You can taste the confidence in the restraint, which is a quiet form of craft.`
    ]),
    paragraph([
      `The bar scene is ${hotel.foodBar}, with a cocktail program that respects classics but is not afraid to add a subtle local twist.`,
      `Room service is excellent, arriving hot, well plated, and timed perfectly, which is not as common as it should be at this level.`,
      `There is also a sense of seasonal awareness, with ingredients that shift subtly through the menu rather than being swapped out entirely.`,
      `Meals feel unhurried, and the staff leave you alone unless you signal otherwise, which matters when you are trying to actually relax.`,
      `It all adds up to dining that feels like part of the stay rather than an obligation.`
    ]),
    paragraph([
      `If you want a critique, it would be ${hotel.foodCritique}, a minor note rather than a real flaw.`,
      `The overall experience remains cohesive, and you leave the table feeling aligned with the mood of the hotel.`,
      `There is a deliberate quiet to the dining rooms, and even at peak hours the atmosphere stays composed.`,
      `For travelers who like their luxury to be understated, the food offering lands exactly where it should.`,
      `It is thoughtful, modern, and clearly overseen by people who understand the hotel is a sanctuary first and a restaurant second.`
    ])
  ].join('\n\n');

const detailsSection = (hotel: any) =>
  [
    paragraph([
      `The details at ${hotel.name} are where the hotel moves from good to exceptional.`,
      `${hotel.detailAnchor} is not a headline feature in the marketing, but it is the thing that stays with you after checkout.`,
      `Small gestures compound: a curated library that is actually readable, a playlist that matches the light, and thoughtful turndown notes that feel personal.`,
      `This is a hotel built around the idea of lingering, and the details support that feeling in a hundred subtle ways.`,
      `It is luxury that does not need to announce itself because it is too busy being useful.`
    ]),
    paragraph([
      `The wellness offering is quiet but considered, with ${hotel.detailWellness} serving as a counterpoint to the city or coastline outside.`,
      `Public spaces hold their calm even when the hotel is full, and that is no accident; the circulation paths keep noise away from the intimate areas.`,
      `The art curation is deliberate, and the pieces are chosen to reinforce the mood rather than to impress.`,
      `Even the way the hotel scents the linens feels intentional, with a clean, dry finish that suggests meticulous care.`,
      `These are the kinds of details that make the hotel feel expensive in the most elegant way.`
    ]),
    paragraph([
      `There are practical details too, like ${hotel.detailPractical}, that make day-to-day living easy.`,
      `The staff seem to understand the invisible labor of travel and they quietly remove it.`,
      `You can move through the property without friction, and that sense of ease is perhaps the most luxurious feature of all.`,
      `The detail work is consistent from check-in to departure, which is not always the case even at this level.`,
      `It is a hotel that respects your time, your senses, and your need for calm.`
    ])
  ].join('\n\n');

const verdictSection = (hotel: any) =>
  [
    paragraph([
      `The verdict on ${hotel.name} is less about spectacle and more about coherence.`,
      `Everything here aligns around the same idea of luxury, and that clarity makes the experience feel rare.`,
      `It is not the kind of hotel that will dazzle a group trip or a celebration crowd, and that is precisely its advantage.`,
      `The hotel is for travelers who value quiet excellence, for people who notice the difference between minimal and merely empty.`,
      `It is a stay that feels intentional from arrival to departure, and that consistency is increasingly hard to find.`
    ]),
    paragraph([
      `There are a few trade-offs, and they are mostly rooted in the hotel refusing to be everything at once.`,
      `${hotel.verdictTradeoff} will matter to some guests, but it also protects the calm that makes the property special.`,
      `In a world of loud luxury, ${hotel.name} is almost stubbornly composed, and it earns its place because of that.`,
      `You leave with the sense that the hotel has edited for you, removing noise so you can notice the important parts.`,
      `That is the kind of hospitality that feels like a gift rather than a service.`
    ]),
    paragraph([
      `If you are planning a stay here, lean into the pace and let the hotel do its work.`,
      `Spend an afternoon in ${hotel.verdictScene}, order one more drink than you planned, and take the long way back to the room.`,
      `The best version of this hotel reveals itself when you stop trying to optimize the itinerary.`,
      `It is a place that rewards slowness, which makes it the right kind of luxury for right now.`,
      `For travelers who want to feel restored rather than entertained, ${hotel.name} is an easy recommendation.`
    ])
  ].join('\n\n');

const hotels = [
  {
    name: 'Aman Tokyo',
    slug: 'aman-tokyo',
    brand: 'Aman',
    brand_slug: 'aman',
    location: 'Tokyo, Japan',
    country: 'Japan',
    country_slug: 'japan',
    region: 'Asia',
    region_slug: 'asia',
    latitude: 35.685,
    longitude: 139.7514,
    price_range: '$1,200-$2,800',
    price_from: 1200,
    price_to: 2800,
    currency: 'USD',
    style: 'Minimalist',
    best_for: ['Wellness', 'Solo', 'Design'],
    hero_image:
      'https://images.unsplash.com/photo-1501117716987-c8e1ecb21001?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?auto=format&fit=crop&w=1600&q=80'
    ],
    website: 'https://www.aman.com',
    booking_url: 'https://www.aman.com',
    tagline: 'A vertical ryokan where Tokyo feels hushed and ceremonial.',
    verdict_best_for: 'Solo travelers and couples who want Tokyo at a whisper.',
    verdict_skip_if: 'You need nightlife and a social lobby scene.',
    verdict_standout: 'The sky lobby and onsen-level quiet above the city.',
    rating_overall: 9.6,
    rating_room: 9.7,
    rating_service: 9.6,
    rating_food: 9.2,
    rating_value: 8.8,
    rating_location: 9.5,
    featured: 1,
    introContext: 'Tokyo is felt in the precise geometry and the deliberate pauses between rooms',
    arrivalScene: 'a private elevator that lifts you directly into the hushed sky lobby',
    arrivalScent: 'cedar and hinoki',
    arrivalVista: 'the city grid and a distant view of Mount Fuji on clear days',
    arrivalGesture: 'a hand-warmed oshibori and green tea ritual',
    roomAnchor: 'an expansive washi-lit living area with low seating and deep sightlines',
    roomPalette: 'stone, ash wood, and warm sand textiles',
    roomView: 'the city skyline softened by sheer screens',
    roomDetail: 'a deep soaking tub that faces a veil of light',
    roomCritique: 'a slightly firm bed that favors precision over plushness',
    servicePhilosophy: 'discreet, almost anticipatory restraint',
    serviceDetail: `handwritten notes that translate the day's weather into suggestions`,
    serviceRecovery: 'a quiet correction with no questions asked',
    foodAnchor: 'Japanese seasonal cuisine with restrained French technique',
    foodBreakfast: 'a kaiseki-style breakfast that is light but layered',
    foodBar: 'library-like and low-lit',
    foodCritique: 'a dinner menu that could use one more bold flavor',
    detailAnchor: 'the onsen-inspired spa sequence',
    detailWellness: 'a pool deck with city views and absolute silence',
    detailPractical: 'thoughtful charging points and perfectly placed task lighting',
    verdictTradeoff: 'the stillness can feel too quiet if you expect a social buzz',
    verdictScene: 'the pool at night, when the skyline flickers around you'
  },
  {
    name: 'Aman Venice',
    slug: 'aman-venice',
    brand: 'Aman',
    brand_slug: 'aman',
    location: 'Venice, Italy',
    country: 'Italy',
    country_slug: 'italy',
    region: 'Europe',
    region_slug: 'europe',
    latitude: 45.4372,
    longitude: 12.3358,
    price_range: '$1,500-$3,200',
    price_from: 1500,
    price_to: 3200,
    currency: 'USD',
    style: 'Palatial',
    best_for: ['Romance', 'History', 'Privacy'],
    hero_image:
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1501776198101-5d5f3d49f8d4?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?auto=format&fit=crop&w=1600&q=80'
    ],
    website: 'https://www.aman.com',
    booking_url: 'https://www.aman.com',
    tagline: 'A Venetian palace that edits the city into a private dream.',
    verdict_best_for: 'Couples who want Venice with velvet gloves.',
    verdict_skip_if: 'You want a casual, lively property with big crowds.',
    verdict_standout: 'The garden courtyard, a rare green hush in Venice.',
    rating_overall: 9.5,
    rating_room: 9.6,
    rating_service: 9.5,
    rating_food: 9.1,
    rating_value: 8.5,
    rating_location: 9.7,
    featured: 1,
    introContext: 'Venice becomes a series of private rooms rather than a tourist set',
    arrivalScene: 'a discreet water entrance off the Grand Canal',
    arrivalScent: 'polished wood and faint citrus',
    arrivalVista: 'frescoed ceilings and a view into the palazzo courtyard',
    arrivalGesture: 'a glass of spumante offered in the drawing room',
    roomAnchor: 'a hand-painted ceiling that makes each room feel like a salon',
    roomPalette: 'faded fresco tones with deep velvet accents',
    roomView: 'canal reflections and small bridges in the morning light',
    roomDetail: 'Murano glass lamps that glow softly at dusk',
    roomCritique: 'a few historic quirks, like narrow doorways, that come with the palazzo',
    servicePhilosophy: 'gentle formality with a palatial calm',
    serviceDetail: 'a discreet press of your jacket before dinner',
    serviceRecovery: 'a swift switch of dining reservation with zero fuss',
    foodAnchor: 'modern Venetian cuisine with careful sourcing',
    foodBreakfast: 'fresh pastry and lagoon fish, balanced with restraint',
    foodBar: 'intimate and candlelit',
    foodCritique: 'a wine list that could be slightly more adventurous',
    detailAnchor: 'the private cinema and its velvet seating',
    detailWellness: 'a spa tucked behind the garden with steam rooms and calm light',
    detailPractical: 'private dock access that makes Venice feel almost exclusive',
    verdictTradeoff: 'the hushed atmosphere can feel too formal if you want spontaneity',
    verdictScene: 'the garden courtyard at dusk with a glass of prosecco'
  },
  {
    name: 'Four Seasons Bora Bora',
    slug: 'four-seasons-bora-bora',
    brand: 'Four Seasons',
    brand_slug: 'four-seasons',
    location: 'Bora Bora, French Polynesia',
    country: 'French Polynesia',
    country_slug: 'french-polynesia',
    region: 'South Pacific',
    region_slug: 'south-pacific',
    latitude: -16.5004,
    longitude: -151.7415,
    price_range: '$1,400-$3,800',
    price_from: 1400,
    price_to: 3800,
    currency: 'USD',
    style: 'Overwater',
    best_for: ['Romance', 'Celebrations', 'Water'],
    hero_image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80'
    ],
    website: 'https://www.fourseasons.com',
    booking_url: 'https://www.fourseasons.com',
    tagline: 'A lagoon fantasy that still feels grounded and grown-up.',
    verdict_best_for: 'Honeymoons and milestone celebrations.',
    verdict_skip_if: 'You prefer urban energy or culinary experimentation.',
    verdict_standout: 'Sunrise from the overwater deck with Mount Otemanu in view.',
    rating_overall: 9.3,
    rating_room: 9.5,
    rating_service: 9.4,
    rating_food: 8.9,
    rating_value: 8.4,
    rating_location: 9.8,
    featured: 1,
    introContext: 'the lagoon is a stage, but the hotel plays it with elegance rather than theatrics',
    arrivalScene: 'a boat ride across a turquoise lagoon to a floating arrival pavilion',
    arrivalScent: 'tiare flowers and sea air',
    arrivalVista: 'Mount Otemanu rising behind the bungalows',
    arrivalGesture: 'a shell lei and a cool coconut water',
    roomAnchor: 'an overwater terrace with steps straight into the lagoon',
    roomPalette: 'ivory linen, teak, and soft coral textiles',
    roomView: 'a mirrored lagoon and the volcanic peak beyond',
    roomDetail: 'glass floor panels that reveal fish beneath the room',
    roomCritique: 'the occasional sound of service carts across the boardwalk',
    servicePhilosophy: 'island warmth with Four Seasons precision',
    serviceDetail: 'sunset mocktails delivered to the deck without asking',
    serviceRecovery: 'a quiet reschedule of a spa appointment after weather changes',
    foodAnchor: 'seafood-led dining with Polynesian accents',
    foodBreakfast: 'tropical fruit, fresh pastries, and an egg station with local spices',
    foodBar: 'sunset-facing and social but never loud',
    foodCritique: 'one or two menus feel too predictable for repeat stays',
    detailAnchor: 'the lagoonarium and its gentle coral garden',
    detailWellness: 'a spa pavilion over water with open-air treatment rooms',
    detailPractical: 'golf cart transfers and a concierge who handles every boat timing',
    verdictTradeoff: 'you are a little removed from the main island, which is the point',
    verdictScene: 'an early swim when the lagoon is glass and the deck is quiet'
  },
  {
    name: 'Four Seasons Kyoto',
    slug: 'four-seasons-kyoto',
    brand: 'Four Seasons',
    brand_slug: 'four-seasons',
    location: 'Kyoto, Japan',
    country: 'Japan',
    country_slug: 'japan',
    region: 'Asia',
    region_slug: 'asia',
    latitude: 35.644,
    longitude: 139.703,
    price_range: '$900-$1,800',
    price_from: 900,
    price_to: 1800,
    currency: 'USD',
    style: 'Modern Zen',
    best_for: ['Culture', 'Wellness', 'Couples'],
    hero_image:
      'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1600&q=80'
    ],
    website: 'https://www.fourseasons.com',
    booking_url: 'https://www.fourseasons.com',
    tagline: 'Kyoto serenity with a polished urban edge.',
    verdict_best_for: 'Travelers who want Kyoto temples by day and spa quiet by night.',
    verdict_skip_if: 'You want a traditional ryokan with tatami everywhere.',
    verdict_standout: 'The pond garden framed by a sleek, modern interior.',
    rating_overall: 9.1,
    rating_room: 9.2,
    rating_service: 9.3,
    rating_food: 8.8,
    rating_value: 8.6,
    rating_location: 9.0,
    featured: 0,
    introContext: 'Kyoto is echoed in the water garden and the calm of the corridors',
    arrivalScene: 'a lantern-lit driveway leading to a quiet stone arrival court',
    arrivalScent: 'incense and fresh cedar',
    arrivalVista: 'the pond garden with its maple reflections',
    arrivalGesture: 'a seasonal sweet with matcha',
    roomAnchor: 'a window seat that frames the garden like a scroll painting',
    roomPalette: 'warm taupe, pale oak, and soft paper textures',
    roomView: 'the pond and city rooftops beyond',
    roomDetail: 'a deep soaking tub positioned for garden views',
    roomCritique: 'a slightly firm sofa that feels more sculptural than lounge-worthy',
    servicePhilosophy: `precise, calm, and tuned to the guest's rhythm`,
    serviceDetail: 'pre-set bikes and a curated list of hidden temples',
    serviceRecovery: 'an immediate room switch when a noise issue arose',
    foodAnchor: 'kappo-inspired dining with a modern touch',
    foodBreakfast: 'grilled fish and delicate pastries with seasonal fruit',
    foodBar: 'quiet, intimate, with a focus on Japanese whisky',
    foodCritique: 'limited late-night options once the city winds down',
    detailAnchor: `the pond garden's 800-year-old history`,
    detailWellness: 'a spa with bamboo steam rooms and soft lighting',
    detailPractical: 'private car arrangements and quick access to Higashiyama',
    verdictTradeoff: 'the modern finish may feel too polished for traditionalists',
    verdictScene: 'an early morning tea by the pond with mist rising'
  },
  {
    name: 'Six Senses Zighy Bay',
    slug: 'six-senses-zighy-bay',
    brand: 'Six Senses',
    brand_slug: 'six-senses',
    location: 'Musandam Peninsula, Oman',
    country: 'Oman',
    country_slug: 'oman',
    region: 'Middle East',
    region_slug: 'middle-east',
    latitude: 26.1917,
    longitude: 56.245,
    price_range: '$800-$2,200',
    price_from: 800,
    price_to: 2200,
    currency: 'USD',
    style: 'Rustic Luxury',
    best_for: ['Wellness', 'Adventure', 'Privacy'],
    hero_image:
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1600&q=80'
    ],
    website: 'https://www.sixsenses.com',
    booking_url: 'https://www.sixsenses.com',
    tagline: 'A desert cove that feels like a private world.',
    verdict_best_for: 'Wellness seekers and travelers who want dramatic landscapes.',
    verdict_skip_if: 'You need city access or nightlife.',
    verdict_standout: 'Paragliding arrival and the dramatic cliffs of Musandam.',
    rating_overall: 9.0,
    rating_room: 9.1,
    rating_service: 9.0,
    rating_food: 8.7,
    rating_value: 8.7,
    rating_location: 9.4,
    featured: 0,
    introContext: 'the cove and cliffs turn the hotel into a private desert sanctuary',
    arrivalScene: 'a mountain drive that drops into a hidden bay',
    arrivalScent: 'salted air and warmed stone',
    arrivalVista: 'a crescent beach framed by rugged cliffs',
    arrivalGesture: 'fresh dates and rose water',
    roomAnchor: 'a villa courtyard with a private pool',
    roomPalette: 'washed stone, timber, and desert textiles',
    roomView: 'the Gulf of Oman and the rugged ridge line',
    roomDetail: 'outdoor rain showers under the stars',
    roomCritique: 'a few villas sit close enough to hear golf carts',
    servicePhilosophy: 'warm, barefoot luxury with wellness at the core',
    serviceDetail: 'daily wellness consultations tailored to the climate',
    serviceRecovery: 'a swift upgrade when a pool heater failed',
    foodAnchor: 'Mediterranean and Arabic flavors with a health-forward approach',
    foodBreakfast: 'fresh breads, mezze, and pressed juices',
    foodBar: 'sunset-facing and relaxed',
    foodCritique: 'a touch more variety on longer stays would help',
    detailAnchor: 'the spa village tucked into the hillside',
    detailWellness: 'hammam rituals and outdoor yoga decks',
    detailPractical: 'private transfers and curated dhow excursions',
    verdictTradeoff: 'its remoteness is part of the appeal and the limitation',
    verdictScene: 'the firepit by the beach with a cool desert breeze'
  },
  {
    name: 'One&Only Reethi Rah',
    slug: 'one-and-only-reethi-rah',
    brand: 'One&Only',
    brand_slug: 'one-and-only',
    location: 'North Male Atoll, Maldives',
    country: 'Maldives',
    country_slug: 'maldives',
    region: 'Indian Ocean',
    region_slug: 'indian-ocean',
    latitude: 4.2403,
    longitude: 73.33,
    price_range: '$1,300-$3,500',
    price_from: 1300,
    price_to: 3500,
    currency: 'USD',
    style: 'Island Resort',
    best_for: ['Families', 'Romance', 'Water'],
    hero_image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'
    ],
    website: 'https://www.oneandonlyresorts.com',
    booking_url: 'https://www.oneandonlyresorts.com',
    tagline: 'A polished Maldivian icon with impeccable rhythm.',
    verdict_best_for: 'Families and couples who want everything, perfectly arranged.',
    verdict_skip_if: 'You are looking for a small, castaway island feel.',
    verdict_standout: 'The size of the villas and the long, powdery beaches.',
    rating_overall: 9.2,
    rating_room: 9.4,
    rating_service: 9.2,
    rating_food: 8.9,
    rating_value: 8.3,
    rating_location: 9.6,
    featured: 0,
    introContext: 'the Maldives are rendered in a classic, high-polish way',
    arrivalScene: 'a speedboat arrival across a lagoon of impossible blue',
    arrivalScent: 'salt air and tropical flowers',
    arrivalVista: 'a sweep of beach and palm canopy',
    arrivalGesture: 'a chilled towel and coconut sorbet',
    roomAnchor: 'a beachfront villa with a private pool and oversized daybed',
    roomPalette: 'white linen, pale timber, and ocean blues',
    roomView: 'a long beach arc with layered sunset light',
    roomDetail: 'an outdoor bathtub tucked into a private garden',
    roomCritique: 'the scale of the property means more walking than some expect',
    servicePhilosophy: 'polished, confident, and quietly playful',
    serviceDetail: 'beach attendants who remember your preferred chair and drink',
    serviceRecovery: 'a seamless villa move after a maintenance issue',
    foodAnchor: 'global luxury resort dining with strong seafood',
    foodBreakfast: 'an expansive buffet with made-to-order stations',
    foodBar: 'sunset social but managed carefully',
    foodCritique: 'a few menus lean too international rather than local',
    detailAnchor: 'the private sand spits and quiet coves',
    detailWellness: 'a spa with open-air treatment rooms and ocean breeze',
    detailPractical: 'efficient buggy service and a concierge that handles everything',
    verdictTradeoff: 'the resort scale is large, which can dilute the intimacy',
    verdictScene: 'sunset from the jetty after the day guests retreat'
  },
  {
    name: 'Belmond Hotel Caruso',
    slug: 'belmond-hotel-caruso',
    brand: 'Belmond',
    brand_slug: 'belmond',
    location: 'Ravello, Italy',
    country: 'Italy',
    country_slug: 'italy',
    region: 'Europe',
    region_slug: 'europe',
    latitude: 40.649,
    longitude: 14.6107,
    price_range: '$900-$2,100',
    price_from: 900,
    price_to: 2100,
    currency: 'USD',
    style: 'Cliffside Classic',
    best_for: ['Romance', 'Scenery', 'Slow travel'],
    hero_image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1501776198101-5d5f3d49f8d4?auto=format&fit=crop&w=1600&q=80'
    ],
    website: 'https://www.belmond.com',
    booking_url: 'https://www.belmond.com',
    tagline: 'An 11th-century palace floating above the Amalfi Coast.',
    verdict_best_for: 'Romance, celebrations, and Amalfi coast devotees.',
    verdict_skip_if: 'You need quick access to beaches or nightlife.',
    verdict_standout: 'The infinity pool that disappears into the coastline.',
    rating_overall: 9.1,
    rating_room: 9.0,
    rating_service: 9.2,
    rating_food: 8.8,
    rating_value: 8.5,
    rating_location: 9.7,
    featured: 0,
    introContext: 'the Amalfi coast becomes a stage seen from high above',
    arrivalScene: 'a winding drive that ends at a stone archway',
    arrivalScent: 'lemon trees and warm stone',
    arrivalVista: 'the coast dropping away beneath the terraces',
    arrivalGesture: 'a chilled limoncello spritz',
    roomAnchor: 'a terrace with a sweep of coastline',
    roomPalette: 'sun-bleached linens and pale terracotta',
    roomView: 'the sea framed by cypress trees',
    roomDetail: 'antique tiles and hand-painted ceramics',
    roomCritique: 'a few rooms feel more classic than crisp',
    servicePhilosophy: 'old-world charm with attentive polish',
    serviceDetail: 'breakfast timed around your desired sunrise',
    serviceRecovery: 'a swift rearrangement of dinner due to weather',
    foodAnchor: 'coastal Italian cooking with a light hand',
    foodBreakfast: 'fresh ricotta, citrus, and warm breads',
    foodBar: 'romantic and softly lit',
    foodCritique: 'a slightly formal pace that may feel slow to some',
    detailAnchor: 'the infinity pool perched over the coast',
    detailWellness: 'a small spa with sea-facing treatments',
    detailPractical: 'a shuttle to nearby towns and a concierge that handles transfers',
    verdictTradeoff: 'the location is serene but removed',
    verdictScene: 'late afternoon by the pool as the coast turns gold'
  },
  {
    name: 'Mandarin Oriental Bangkok',
    slug: 'mandarin-oriental-bangkok',
    brand: 'Mandarin Oriental',
    brand_slug: 'mandarin-oriental',
    location: 'Bangkok, Thailand',
    country: 'Thailand',
    country_slug: 'thailand',
    region: 'Asia',
    region_slug: 'asia',
    latitude: 13.7262,
    longitude: 100.513,
    price_range: '$600-$1,500',
    price_from: 600,
    price_to: 1500,
    currency: 'USD',
    style: 'Heritage Grand',
    best_for: ['Culture', 'River views', 'Service'],
    hero_image:
      'https://images.unsplash.com/photo-1501117716987-c8e1ecb21001?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'
    ],
    website: 'https://www.mandarinoriental.com',
    booking_url: 'https://www.mandarinoriental.com',
    tagline: `Bangkok's grande dame, still unmatched in grace.`,
    verdict_best_for: 'Travelers who want legendary service and river calm.',
    verdict_skip_if: 'You want contemporary, high-design minimalism.',
    verdict_standout: 'The Authors Lounge and the riverfront breakfast.',
    rating_overall: 9.4,
    rating_room: 9.2,
    rating_service: 9.8,
    rating_food: 9.1,
    rating_value: 8.9,
    rating_location: 9.4,
    featured: 0,
    introContext: `the Chao Phraya river becomes the hotel's constant companion`,
    arrivalScene: 'a riverside driveway with a view of passing longboats',
    arrivalScent: 'jasmine and polished wood',
    arrivalVista: 'the river shimmering beyond the lobby colonnade',
    arrivalGesture: 'a cool jasmine tea and a subtle wai greeting',
    roomAnchor: 'a window seat directly over the river',
    roomPalette: 'cream, gold accents, and dark teak',
    roomView: 'boats gliding past at all hours',
    roomDetail: 'monogrammed linens and fresh orchids daily',
    roomCritique: 'the heritage wing feels classic rather than cutting-edge',
    servicePhilosophy: 'legendary, polished, and deeply personal',
    serviceDetail: 'butlers who remember your schedule within hours',
    serviceRecovery: 'a seamless handling of late checkout without prompting',
    foodAnchor: 'Thai classics and international staples at a high level',
    foodBreakfast: 'riverfront tables with a wide spread of Thai and Western dishes',
    foodBar: 'clubby and atmospheric with live piano',
    foodCritique: 'some dinner menus feel formal for casual travelers',
    detailAnchor: 'the historic Authors Lounge ritual',
    detailWellness: 'a spa wing across the river with private suites',
    detailPractical: 'river shuttles that make the city feel approachable',
    verdictTradeoff: 'its heritage luxury can feel traditional rather than modern',
    verdictScene: 'morning coffee on the river terrace as the city wakes'
  },
  {
    name: 'Rosewood London',
    slug: 'rosewood-london',
    brand: 'Rosewood',
    brand_slug: 'rosewood',
    location: 'London, UK',
    country: 'United Kingdom',
    country_slug: 'united-kingdom',
    region: 'Europe',
    region_slug: 'europe',
    latitude: 51.5162,
    longitude: -0.1151,
    price_range: '$700-$1,600',
    price_from: 700,
    price_to: 1600,
    currency: 'USD',
    style: 'Urban Heritage',
    best_for: ['Business', 'Culture', 'City breaks'],
    hero_image:
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1501776198101-5d5f3d49f8d4?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?auto=format&fit=crop&w=1600&q=80'
    ],
    website: 'https://www.rosewoodhotels.com',
    booking_url: 'https://www.rosewoodhotels.com',
    tagline: 'London grandeur with a modern, clubby twist.',
    verdict_best_for: 'Business travelers and London regulars who want polish.',
    verdict_skip_if: 'You prefer minimalist, boutique hotels.',
    verdict_standout: 'The courtyard arrival and the Scarfes Bar scene.',
    rating_overall: 9.0,
    rating_room: 9.1,
    rating_service: 9.2,
    rating_food: 8.7,
    rating_value: 8.4,
    rating_location: 9.2,
    featured: 0,
    introContext: 'the city feels organized, composed, and centered here',
    arrivalScene: 'a carriageway arrival through an arched courtyard',
    arrivalScent: 'leather and polished oak',
    arrivalVista: 'a dramatic stone staircase and a high-ceiling lobby',
    arrivalGesture: 'a hot towel and a quick espresso offer',
    roomAnchor: 'a deep window bay with velvet seating',
    roomPalette: 'charcoal, brass, and soft neutrals',
    roomView: 'the quiet of High Holborn below',
    roomDetail: 'a marble bathroom with strong lighting',
    roomCritique: 'rooms can feel more clubby than airy',
    servicePhilosophy: 'professional, prompt, and quietly warm',
    serviceDetail: 'concierge notes that map the city in minutes',
    serviceRecovery: 'a quick reschedule of a transfer during heavy traffic',
    foodAnchor: 'British classics with modern touches',
    foodBreakfast: 'fresh pastries and seasonal fruit with strong coffee',
    foodBar: 'lively but controlled with sharp cocktails',
    foodCritique: 'limited late-night dining beyond the bar menu',
    detailAnchor: 'the courtyard entrance that feels like a private club',
    detailWellness: 'a subterranean spa with pool and steam rooms',
    detailPractical: 'excellent location for Soho and Covent Garden',
    verdictTradeoff: 'the property leans formal rather than boutique casual',
    verdictScene: 'a quiet afternoon in the courtyard with tea'
  },
  {
    name: 'Shangri-La Paris',
    slug: 'shangri-la-paris',
    brand: 'Shangri-La',
    brand_slug: 'shangri-la',
    location: 'Paris, France',
    country: 'France',
    country_slug: 'france',
    region: 'Europe',
    region_slug: 'europe',
    latitude: 48.8645,
    longitude: 2.293,
    price_range: '$1,100-$2,600',
    price_from: 1100,
    price_to: 2600,
    currency: 'USD',
    style: 'Palatial',
    best_for: ['Romance', 'Views', 'Celebrations'],
    hero_image:
      'https://images.unsplash.com/photo-1501776198101-5d5f3d49f8d4?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?auto=format&fit=crop&w=1600&q=80'
    ],
    website: 'https://www.shangri-la.com',
    booking_url: 'https://www.shangri-la.com',
    tagline: 'A Parisian palace with the Eiffel Tower as a neighbor.',
    verdict_best_for: 'Celebrations and travelers who want iconic Paris views.',
    verdict_skip_if: 'You prefer discreet boutique stays.',
    verdict_standout: 'Breakfast on a terrace with the Eiffel Tower in full view.',
    rating_overall: 9.2,
    rating_room: 9.3,
    rating_service: 9.2,
    rating_food: 8.9,
    rating_value: 8.5,
    rating_location: 9.6,
    featured: 0,
    introContext: 'Paris is framed through grand windows and polished surfaces',
    arrivalScene: 'a grand driveway that feels like a diplomatic residence',
    arrivalScent: 'fresh lilies and polished stone',
    arrivalVista: 'the Eiffel Tower revealed through tall windows',
    arrivalGesture: 'a glass of champagne and a warm greeting in French',
    roomAnchor: 'a balcony that frames the tower like a postcard',
    roomPalette: 'white, pale grey, and soft gold accents',
    roomView: 'the Eiffel Tower and the Seine beyond',
    roomDetail: 'custom mirrors that multiply the light',
    roomCritique: 'the palace scale can feel formal for relaxed travelers',
    servicePhilosophy: 'polished and elegant with a refined cadence',
    serviceDetail: 'breakfast trays delivered precisely on time',
    serviceRecovery: 'a quick wardrobe press before an evening reservation',
    foodAnchor: 'French classics with a modern, lighter touch',
    foodBreakfast: 'croissants, fresh fruit, and made-to-order eggs',
    foodBar: 'glamorous and softly lit',
    foodCritique: 'room service can be pricey for the value',
    detailAnchor: 'the staircase and salons of the former palace',
    detailWellness: 'a pool and spa tucked into the historic lower level',
    detailPractical: 'quick access to the Seine and the museum district',
    verdictTradeoff: 'the formal glamour is not subtle',
    verdictScene: 'sunset from a balcony with the tower glowing'
  }
];

const brands = [
  {
    name: 'Aman',
    slug: 'aman',
    tagline: 'The original quiet luxury, focused on ritual and restraint.',
    hero_image:
      'https://images.unsplash.com/photo-1501117716987-c8e1ecb21001?auto=format&fit=crop&w=1600&q=80',
    content_md: `# Aman\n\nAman pioneered the idea that luxury could be quiet, slow, and restorative. The brand is built on a philosophy of retreat: properties are designed to feel like sanctuaries rather than destinations in themselves. Interiors lean minimalist, with natural materials, low light, and deep attention to proportion.\n\n## Philosophy\n\nAman hotels are designed to erase noise. Service is discreet, often more felt than noticed, and the experience is tuned to the guest's own rhythm. These are hotels that value the silence between moments as much as the moments themselves.\n\n## Why we love it\n\nThe best Aman properties deliver a rare clarity. You arrive, you exhale, and the hotel holds the calm for you. It is luxury for travelers who want their environment to be edited to the essentials.`,
    hotel_count: 2,
    founded_year: 1988,
    parent_company: 'Aman Group',
    best_property: 'aman-tokyo',
    website: 'https://www.aman.com',
    published: 1
  },
  {
    name: 'Four Seasons',
    slug: 'four-seasons',
    tagline: 'Global elegance with unmatched operational precision.',
    hero_image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80',
    content_md: `# Four Seasons\n\nFour Seasons is the benchmark for reliable, polished luxury. Its properties are rarely the most avant-garde, but they are consistently the most dependable. The brand's strength is operational excellence: service, cleanliness, and consistency are world-class across continents.\n\n## Philosophy\n\nFour Seasons is about making every guest feel known. It is a brand that leans into hospitality at scale, translating local character into a globally consistent experience.\n\n## Why we love it\n\nWhen you want a hotel that will simply get everything right, Four Seasons is the quiet choice. The best properties balance impeccable service with a sense of place, offering the kind of ease that makes travel feel effortless.`,
    hotel_count: 2,
    founded_year: 1961,
    parent_company: 'Four Seasons Hotels and Resorts',
    best_property: 'four-seasons-bora-bora',
    website: 'https://www.fourseasons.com',
    published: 1
  },
  {
    name: 'Six Senses',
    slug: 'six-senses',
    tagline: 'Wellness-forward resorts with a sense of adventure.',
    hero_image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80',
    content_md: `# Six Senses\n\nSix Senses is built around wellness, nature, and a slightly off-grid spirit. The brand favors dramatic settings, and the properties tend to feel organic, rooted in landscape rather than polished into homogeneity.\n\n## Philosophy\n\nWellness is integrated rather than added on. Sleep programs, spa treatments, and mindful design are central to the guest experience, not side notes.\n\n## Why we love it\n\nThe best Six Senses resorts feel like hidden worlds. They are places to reset, to slow down, and to rediscover a sense of balance.`,
    hotel_count: 1,
    founded_year: 1995,
    parent_company: 'IHG',
    best_property: 'six-senses-zighy-bay',
    website: 'https://www.sixsenses.com',
    published: 1
  },
  {
    name: 'One&Only',
    slug: 'one-and-only',
    tagline: 'High-gloss resorts with destination scale.',
    hero_image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    content_md: `# One&Only\n\nOne&Only is about statement resorts: large, confident properties in iconic locations. The brand is polished and bold, delivering the kind of resort experience where everything is considered and orchestrated.\n\n## Philosophy\n\nOne&Only celebrates indulgence. These are properties that lean into glamour, but they balance it with strong service and serious hospitality infrastructure.\n\n## Why we love it\n\nWhen you want resort-scale luxury with impeccable service, One&Only delivers. It is a brand that knows how to handle big expectations with ease.`,
    hotel_count: 1,
    founded_year: 2002,
    parent_company: 'Kerzner International',
    best_property: 'one-and-only-reethi-rah',
    website: 'https://www.oneandonlyresorts.com',
    published: 1
  },
  {
    name: 'Belmond',
    slug: 'belmond',
    tagline: 'Grand heritage hotels with cinematic settings.',
    hero_image:
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1600&q=80',
    content_md: `# Belmond\n\nBelmond is a collection of storied hotels, trains, and cruises that celebrate classic travel. The properties are often historic, set in remarkable locations, and full of character.\n\n## Philosophy\n\nBelmond leans into heritage and atmosphere. The brand is less about modern minimalism and more about romance, history, and a sense of narrative.\n\n## Why we love it\n\nThe best Belmond stays feel like stepping into a novel. There is a softness and a sense of occasion that modern hotels rarely capture.`,
    hotel_count: 1,
    founded_year: 1976,
    parent_company: 'LVMH',
    best_property: 'belmond-hotel-caruso',
    website: 'https://www.belmond.com',
    published: 1
  }
];

const destinations = [
  {
    name: 'Tokyo',
    slug: 'tokyo',
    country: 'Japan',
    region: 'Asia',
    hero_image:
      'https://images.unsplash.com/photo-1501117716987-c8e1ecb21001?auto=format&fit=crop&w=1600&q=80',
    intro_md: 'A city of whispered rituals, neon edges, and serene mornings.',
    best_time: 'October to April',
    content_md: `# Tokyo\n\nTokyo is a city of polished contrast: quiet alley bars, luminous streets, and refined minimalism. The best hotel experiences here are about editing out noise and letting the city's precision seep in. Expect hushed lobbies, deeply considered rooms, and a service style that is attentive without ever being loud.\n\n## Why now\n\nAutumn and early spring deliver Tokyo at its most beautiful. The light is softer, the streets are clear, and the city's rhythm feels balanced.`,
    published: 1
  },
  {
    name: 'Maldives',
    slug: 'maldives',
    country: 'Maldives',
    region: 'Indian Ocean',
    hero_image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    intro_md: 'The definitive escape: white sand, quiet water, and no schedule.',
    best_time: 'November to April',
    content_md: `# Maldives\n\nThe Maldives remains the purest expression of island luxury. The best resorts blend open water villas with impeccable service and a pace that encourages total rest. Here, the hotel is the destination, and the best properties understand how to deliver seclusion without isolation.\n\n## Why now\n\nThe dry season offers calm seas and clear skies, ideal for long, slow days on the water.`,
    published: 1
  },
  {
    name: 'Italy',
    slug: 'italy',
    country: 'Italy',
    region: 'Europe',
    hero_image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80',
    intro_md: 'Coastal light, layered history, and a sense of ease.',
    best_time: 'May to October',
    content_md: `# Italy\n\nItaly delivers a particular kind of luxury: historic buildings, long lunches, and the soft cadence of daily life. The best hotels are those that respect the setting, leaning into atmosphere rather than trying to modernize it away.\n\n## Why now\n\nLate spring and early autumn offer the best balance of weather and calm, with the coast still luminous and the cities less crowded.`,
    published: 1
  },
  {
    name: 'Paris',
    slug: 'paris',
    country: 'France',
    region: 'Europe',
    hero_image:
      'https://images.unsplash.com/photo-1501776198101-5d5f3d49f8d4?auto=format&fit=crop&w=1600&q=80',
    intro_md: 'Paris is at its best when the hotel feels like a residence.',
    best_time: 'April to June, September to November',
    content_md: `# Paris\n\nParis luxury is about atmosphere. The best hotels deliver a residential feeling: intimate salons, high ceilings, and views that make the city feel like a private stage. Service should be elegant, not intrusive, and the hotel should support long walks rather than pull you inside all day.\n\n## Why now\n\nSpring and early fall bring softer light and a slower, more livable rhythm.`,
    published: 1
  },
  {
    name: 'Bora Bora',
    slug: 'bora-bora',
    country: 'French Polynesia',
    region: 'South Pacific',
    hero_image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80',
    intro_md: `A volcanic silhouette and the world's most cinematic lagoon.`,
    best_time: 'May to October',
    content_md: `# Bora Bora\n\nBora Bora is the iconic South Pacific escape, with a lagoon so vivid it feels unreal. The best hotels here lean into the romance of the water while keeping the atmosphere calm and adult. Expect overwater villas, serious sunsets, and a pace that encourages total rest.\n\n## Why now\n\nThe dry season brings cooler evenings and crystal-clear water, perfect for long days on the lagoon.`,
    published: 1
  }
];

const articles = [
  {
    title: 'The Quiet Architecture of Arrival',
    slug: 'quiet-architecture-of-arrival',
    category: 'the-details',
    subtitle: 'How the best hotels choreograph the first five minutes.',
    hero_image:
      'https://images.unsplash.com/photo-1501117716987-c8e1ecb21001?auto=format&fit=crop&w=1600&q=80',
    content_md: `# The Quiet Architecture of Arrival\n\nThe arrival sequence is the most underappreciated design tool in hospitality. The best hotels use it to slow the guest's nervous system before they even see a room. Lighting shifts, ceiling heights change, and the soundscape dampens. You can feel the world fall away.\n\n## The tempo matters\n\nA good arrival sequence is paced like a film edit. You glimpse the view, but not all at once. You sit, but only briefly. You are invited, but not overwhelmed. The result is a kind of trust: the guest feels the hotel is in control, and therefore they can relax.\n\n## The Turndown take\n\nThe hotels we love treat arrival as a narrative. It is the opening chapter, and when it is well written, the rest of the story flows.`,
    hotels_mentioned: ['aman-tokyo', 'aman-venice'],
    featured: 1,
    published: 1
  },
  {
    title: 'Why Silence Is the New Status Symbol',
    slug: 'silence-status-symbol',
    category: 'the-details',
    subtitle: 'In a loud world, the most luxurious thing is quiet.',
    hero_image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80',
    content_md: `# Why Silence Is the New Status Symbol\n\nLuxury used to be about spectacle. Now, it is about relief. The best hotels in the world understand this shift, creating environments that soften sound, slow time, and create room for thought.\n\n## The sound of luxury\n\nSilence is not absence; it is design. Acoustic materials, soft textiles, and deliberate layouts remove the noise that drains travelers. This is not minimalism for its own sake, but a tool that lets you feel restored.\n\n## The Turndown take\n\nThe hotels that earn our highest scores are the ones that protect quiet. In 2026, that is the most meaningful luxury.`,
    hotels_mentioned: ['aman-tokyo', 'six-senses-zighy-bay'],
    featured: 0,
    published: 1
  },
  {
    title: 'Aman Tokyo vs. Four Seasons Kyoto',
    slug: 'aman-tokyo-vs-four-seasons-kyoto',
    category: 'versus',
    subtitle: 'Two Japanese retreats, two very different energies.',
    hero_image:
      'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1600&q=80',
    content_md: `# Aman Tokyo vs. Four Seasons Kyoto\n\nThese two hotels represent different sides of Japanese luxury. Aman Tokyo is a vertical retreat: quiet, minimal, and architectural. Four Seasons Kyoto is garden-centered and more accessible, with a gentle balance between modern and traditional.\n\n## The verdict\n\nChoose Aman Tokyo if you want total calm in the heart of a city. Choose Four Seasons Kyoto if you want temple walks by day and a serene garden by night. Both are excellent, but the mood is distinct.`,
    hotels_mentioned: ['aman-tokyo', 'four-seasons-kyoto'],
    featured: 1,
    published: 1
  },
  {
    title: 'Rosewood London Opens Its New Manor Suite',
    slug: 'rosewood-london-manor-suite',
    category: 'new-openings',
    subtitle: 'A grand London suite with a modern residential feel.',
    hero_image:
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80',
    content_md: `# Rosewood London Opens Its New Manor Suite\n\nThe new Manor Suite at Rosewood London is designed for travelers who want a residential feel with all the polish of a flagship hotel. Expect velvet textures, a private dining space, and a long list of curated experiences arranged by the concierge.\n\n## Why it matters\n\nLondon's luxury suites are increasingly about privacy and personalization. Rosewood's new addition leans into that trend, pairing high design with the brand's renowned service.`,
    hotels_mentioned: ['rosewood-london'],
    featured: 0,
    published: 1
  }
];

const insertHotel = db.prepare(`
  INSERT INTO hotels (
    id, slug, name, brand, brand_slug, location, country, country_slug, region, region_slug,
    latitude, longitude, price_range, price_from, price_to, currency, style, best_for, hero_image,
    images, website, booking_url, tagline, review_intro, review_arrival, review_room, review_service,
    review_food, review_details, review_verdict, verdict_best_for, verdict_skip_if, verdict_standout,
    rating_overall, rating_room, rating_service, rating_food, rating_value, rating_location, published, featured
  ) VALUES (
    @id, @slug, @name, @brand, @brand_slug, @location, @country, @country_slug, @region, @region_slug,
    @latitude, @longitude, @price_range, @price_from, @price_to, @currency, @style, @best_for, @hero_image,
    @images, @website, @booking_url, @tagline, @review_intro, @review_arrival, @review_room, @review_service,
    @review_food, @review_details, @review_verdict, @verdict_best_for, @verdict_skip_if, @verdict_standout,
    @rating_overall, @rating_room, @rating_service, @rating_food, @rating_value, @rating_location, @published, @featured
  )
`);

const insertBrand = db.prepare(`
  INSERT INTO brands (
    id, slug, name, tagline, hero_image, content_md, hotel_count, founded_year, parent_company,
    best_property, website, published
  ) VALUES (
    @id, @slug, @name, @tagline, @hero_image, @content_md, @hotel_count, @founded_year, @parent_company,
    @best_property, @website, @published
  )
`);

const insertDestination = db.prepare(`
  INSERT INTO destinations (
    id, slug, name, country, region, hero_image, intro_md, best_time, content_md, published
  ) VALUES (
    @id, @slug, @name, @country, @region, @hero_image, @intro_md, @best_time, @content_md, @published
  )
`);

const insertArticle = db.prepare(`
  INSERT INTO articles (
    id, slug, title, subtitle, category, hero_image, content_md, hotels_mentioned, published, featured
  ) VALUES (
    @id, @slug, @title, @subtitle, @category, @hero_image, @content_md, @hotels_mentioned, @published, @featured
  )
`);

db.exec('DELETE FROM hotels');
db.exec('DELETE FROM brands');
db.exec('DELETE FROM destinations');
db.exec('DELETE FROM articles');
db.exec('DELETE FROM newsletter_subscribers');

const insertHotels = db.transaction((entries: typeof hotels) => {
  for (const hotel of entries) {
    insertHotel.run({
      id: randomUUID(),
      ...hotel,
      best_for: JSON.stringify(hotel.best_for),
      images: JSON.stringify(hotel.images),
      review_intro: introSection(hotel),
      review_arrival: arrivalSection(hotel),
      review_room: roomSection(hotel),
      review_service: serviceSection(hotel),
      review_food: foodSection(hotel),
      review_details: detailsSection(hotel),
      review_verdict: verdictSection(hotel),
      published: 1
    });
  }
});

const insertBrands = db.transaction((entries: typeof brands) => {
  for (const brand of entries) {
    insertBrand.run({ id: randomUUID(), ...brand });
  }
});

const insertDestinations = db.transaction((entries: typeof destinations) => {
  for (const destination of entries) {
    insertDestination.run({ id: randomUUID(), ...destination });
  }
});

const insertArticles = db.transaction((entries: typeof articles) => {
  for (const article of entries) {
    insertArticle.run({
      id: randomUUID(),
      ...article,
      hotels_mentioned: JSON.stringify(article.hotels_mentioned)
    });
  }
});

insertHotels(hotels);
insertBrands(brands);
insertDestinations(destinations);
insertArticles(articles);

console.log('Seed complete.');
