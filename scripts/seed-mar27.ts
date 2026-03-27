import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// MAR 27 CONTENT: Thailand destination guide + essay
// ============================================================================

const destinations = [
  {
    name: `Thailand`,
    slug: `thailand`,
    country: `Thailand`,
    region: `Asia`,
    hero_image: `https://images.unsplash.com/photo-1528181304800-259b08848526?w=1600`,
    intro_md: `From Bangkok's vertical energy to island slowness—where luxury actually means something different.`,
    best_time: `November to March`,
    content_md: `# Thailand

Thailand has spent the last two decades quietly becoming one of the most interesting luxury hotel markets on the planet. Not because it chases the latest trends—the country has never been interested in Dubai-style spectacle or Swiss-style restraint—but because it has figured out how to do luxury on its own terms. The best Thai hotels share a quality that is difficult to name and impossible to fake: a generosity of spirit that infuses everything from architecture to service to the way someone places a glass of lemongrass water beside your pool chair without being asked.

This is not the Thailand of gap-year hostels and full-moon parties, though that Thailand still exists and always will. The country's luxury tier operates at a level that competes with anywhere on Earth while costing meaningfully less. A night at the Four Seasons Koh Samui delivers an experience that rivals the Four Seasons Bora Bora at roughly half the price. The Capella Bangkok gives you river-view suites and Michelin-level dining for what a mid-range room costs in central Paris. The value proposition is staggering, and it persists because Thailand's cost structure—land, labour, food—remains fundamentally different from Western markets.

## The Geography of Thai Luxury

Understanding where to stay in Thailand means understanding that the country is really three or four distinct destinations sharing a passport stamp.

**Bangkok** is the vertical city, a place of rooftop bars, riverside terraces, and traffic that moves at the speed of philosophy. The luxury hotel scene here is among Asia's strongest. The Mandarin Oriental Bangkok has been the city's grande dame since 1876, and the Authors' Wing still trades on associations with Somerset Maugham and Joseph Conrad. Capella Bangkok, opened in 2020, immediately established itself as the city's most exciting new property—a riverfront compound designed by André Fu with suites that feel like private apartments. The Peninsula Bangkok sits across the Chao Phraya River, offering space and gardens that the city centre cannot match. Rosewood Bangkok occupies a tower in the Phloen Chit neighbourhood with interiors by Tony Chi that rank among his finest work. The competition between these properties benefits guests enormously; standards are high and complacency is punished.

**Koh Samui** is the island that proved tropical Thailand could do genuine luxury. The Four Seasons arrived in 2007, placing its villas on a hillside above Laem Yai Beach, and the island's trajectory changed permanently. The resort combines Four Seasons reliability with a site that would be extraordinary regardless of what was built on it—coconut palms, granite boulders, a crescent of pale sand, water that shifts from turquoise to deep blue within swimming distance. The Six Senses Samui occupies a headland on the island's northern tip, offering a wellness-focused alternative. Smaller boutique properties—Sala Samui, the Library—provide character at lower price points. Samui's airport, privately operated by Bangkok Airways, keeps the island more exclusive than it might otherwise be; the flight from Bangkok takes an hour and lands you on a runway surrounded by palm trees.

**Koh Kood** is where you go when Samui feels too busy. Thailand's fourth-largest island remains sparsely developed, with Soneva Kiri as its crown jewel. The resort is a 45-minute speedboat ride from the mainland or a short hop by private plane to the island's tiny airstrip. Koh Kood attracts guests who want genuine seclusion—the kind of isolation where your phone loses signal not because the hotel blocks it but because there are no towers to receive. The jungle is dense, the beaches are empty, and the pace approaches something close to actual silence.

**Chiang Mai and the North** offer a different Thailand entirely. The mountainous north trades beaches for temples, rice paddies, and a cultural depth that the islands cannot match. The Four Seasons Resort Chiang Mai occupies a rice terrace setting that provides one of Asia's most photographed hotel backdrops. The Dhara Dhevi (formerly Mandarin Oriental) reproduces a Lanna kingdom village at full scale—an ambitious project that divided critics but delights guests who appreciate its commitment. Smaller properties in the old city provide boutique alternatives with genuine cultural immersion. The northern climate is cooler, the food is spicier, and the atmosphere is gentler than Bangkok's relentless energy.

**Phuket** remains Thailand's most developed beach destination, which is both its strength and its weakness. The island has everything—Amanpuri set the standard when it opened in 1988, and the Trisara, Como Point Yamu, and Rosewood Phuket have since added further luxury options. The west coast beaches, particularly those around the Surin and Bang Tao areas, host most of the high-end properties. The challenge is overdevelopment; Phuket's southern end can feel congested in ways that undermine the tropical escape narrative. The best strategy is to choose properties on quieter stretches and treat the resort as your primary experience rather than the island.

## What Defines Thai Luxury

Thai luxury is built on service, and that service is built on something cultural rather than commercial. The concept of *kreng jai*—a Thai value that roughly translates as consideration for others, awareness of their feelings, desire to avoid causing discomfort—permeates hotel interactions in ways that are difficult to articulate but immediately felt. Staff at the best Thai hotels anticipate not just what you need but how you feel. They read moods, adjust energy, and provide space or attention based on signals that would go unnoticed elsewhere. This is not the obsequious service of hotels where staff have been trained to be invisible; it is warm, present, and genuinely caring.

Food is central to Thai luxury in a way that it is not in many other markets. A great Thai hotel is expected to serve great Thai food, which means access to proper ingredients, skilled cooks who understand regional variations, and a willingness to serve dishes with actual heat rather than the tamed versions that tourist restaurants often provide. The best hotel kitchens—Nahm at the COMO Metropolitan, Paste Bangkok, the cooking schools at Four Seasons properties—take Thai cuisine seriously as a sophisticated culinary tradition rather than treating it as exotic background flavour.

Wellness is the other pillar. Thai massage is the most widely practised therapeutic bodywork tradition in the world, and the best practitioners have spent years studying techniques that Western spa therapists encounter only in abbreviated certification courses. The difference is palpable. A traditional Thai massage at a proper spa—Chiva-Som in Hua Hin being the gold standard—involves stretching, pressure point work, and energy line manipulation that leave you feeling genuinely different afterward, not just relaxed but recalibrated.

## Making the Choice

Choosing where to stay in Thailand depends on what you are looking for and how much time you have.

**For a first visit:** Start with Bangkok (3-4 nights) and add one island. Koh Samui is the easiest addition, with direct flights from Bangkok. This combination gives you urban energy and tropical relaxation in a manageable itinerary.

**For a return visit:** Go deeper. Koh Kood for genuine seclusion. Chiang Mai for cultural depth. Hua Hin for wellness immersion at Chiva-Som. These destinations reward travellers who have moved past the highlights and want to understand the country's subtler pleasures.

**For families:** Koh Samui provides the best infrastructure—Four Seasons has excellent kids' programming, and the island offers activities beyond the resort. Bangkok with children is rewarding but requires planning; the temples, river boats, and street food create memorable experiences for kids who are old enough to handle heat and stimulation.

**For couples:** Soneva Kiri delivers romance through isolation. Capella Bangkok provides urban sophistication. Amanpuri offers the classic tropical escape. The choice depends on whether your relationship thrives on adventure, culture, or pure relaxation.

## The Best Time

Thailand's best months for travel are November through February, when temperatures are warm but manageable and rainfall is minimal across most of the country. March and April bring punishing heat, particularly in Bangkok and the central plains. The monsoon season (roughly May through October) brings regular rainfall but also lower prices, fewer crowds, and a lushness to the landscape that the dry season cannot match. The Gulf Coast islands—Samui, Koh Phangan, Koh Tao—follow a different weather pattern, with their wettest months in November and December, making them good options when the Andaman Coast is at its rainiest.

Songkran (Thai New Year, mid-April) transforms the country into a giant water fight and is either extraordinary or exhausting depending on your tolerance. Loy Krathong (November full moon) offers one of Asia's most beautiful festivals—floating lanterns and candlelit offerings on water—and is worth planning a trip around.

## Practical Considerations

Thailand offers exceptional value at the luxury tier. Properties that would command $1,500-2,000 per night in Europe or the United States often price below $800 in Thailand, with comparable or superior facilities and service. Dining, massage, and transportation costs are similarly favourable. The savings do not indicate lower quality; they reflect Thailand's cost structure and the abundance of skilled hospitality workers.

Bangkok's Suvarnabhumi Airport is a major hub with connections to virtually everywhere. Domestic flights to islands and northern cities are frequent, affordable, and generally reliable. Private transfers—speedboats to islands, cars to resorts—can be arranged through hotels and provide smoother transitions than public options. Bangkok traffic is genuinely terrible; allow at least 90 minutes for any airport transfer during peak hours, and consider the Airport Rail Link for its predictable timing.

Health and safety are generally good at the luxury tier, with international-standard medical facilities available in Bangkok and Samui. The usual precautions apply: drink bottled water, use sunscreen aggressively, and respect the sun—the tropical UV is significantly stronger than most visitors expect, and sunburn remains the most common health complaint among travellers.`,
    published: 1
  }
];

const articles = [
  {
    title: `The Death of the Grand Hotel Lobby`,
    slug: `death-of-the-grand-hotel-lobby`,
    category: `the-details`,
    subtitle: `How check-in apps, coworking spaces, and Instagram killed the most civilised room in travel.`,
    hero_image: `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600`,
    content_md: `# The Death of the Grand Hotel Lobby

There was a time when a hotel lobby was the most important room in a city. Not the most expensive, not the most beautiful—though many were both—but the most *important*, in the sense that it was where a city's disparate worlds collided. The lobby of the Waldorf Astoria in the 1920s, the Raffles Singapore in the 1930s, the Beverly Hills Hotel in the 1950s: these were spaces where deals were struck, affairs were begun, reputations were made and ruined. The lobby was a theatre with no stage, a party with no host, a public space that belonged to a private enterprise. It was, for a particular slice of society, the living room of the world.

That room is dying. Not physically—the lobbies still exist, often more gorgeous than ever, renovated at staggering expense with hand-selected marble and commissioned art. The death is functional. The lobby has lost its purpose, and no amount of Italian stone can bring it back.

## What the Lobby Used to Be

To understand what we are losing, you have to understand what the grand hotel lobby once provided. Before mobile phones, before email, before the internet collapsed distance and made physical presence optional, the lobby was the only place where certain kinds of encounters could happen. If you wanted to meet someone whose office you could not enter, whose home you were not invited to, whose social circle did not overlap with yours—you went to the lobby. You sat, you ordered a drink, you waited. Sooner or later, the right person walked through.

The lobby functioned as a social equaliser of a specific kind. You did not need a reservation, a membership, or an invitation. You needed only the confidence to sit down and the wardrobe to avoid being questioned. The bartender at the Connaught, the concierge at the Ritz Paris, the doorman at the Plaza—these were the gatekeepers, and their criteria were aesthetic rather than financial. If you looked like you belonged, you were welcome. This was exclusionary, obviously, but it was exclusionary in a different way than a private members' club or a corporate boardroom. The lobby admitted ambiguity. It allowed people to be whoever they appeared to be.

Writers understood this better than anyone. Graham Greene practically lived in hotel lobbies; they provided the chance encounters and overheard conversations that fuelled his fiction. Somerset Maugham used the Eastern & Oriental in Penang and Raffles in Singapore as settings precisely because these lobbies attracted characters from every corner of empire. Hemingway's bars were often hotel bars—the Ritz in Paris, the Gritti Palace in Venice—because hotel bars sat within hotel lobbies, and hotel lobbies were where the stories were.

## What Killed It

The lobby did not die from a single wound. It bled out from a thousand cuts, each one seemingly minor, each one irreversible.

**Digital check-in** was the first serious blow. When hotels began offering mobile check-in—bypass the desk, go straight to your room—they removed the primary reason many guests interacted with the lobby at all. The efficiency argument was compelling: nobody *wants* to queue at a desk after a long flight. But the queue was never just a queue. It was a forced pause, a moment of transition between the outside world and the hotel world, a ritual that slowed you down and oriented you to a different pace. Without it, guests pass through the lobby like commuters through a train station—present but not participating.

**Coworking culture** delivered the second blow. As hotels converted lobby seating into quasi-offices—adding power outlets, improving Wi-Fi, placing tables at laptop-friendly heights—they optimised the space for productivity and destroyed it for sociability. A lobby full of people staring at screens is not a public space; it is a shared private space, each occupant sealed in their own digital world. The energy is wrong. The body language of someone working on a laptop—hunched, focused, earbuds in—repels the kind of casual interaction that lobbies once facilitated. Hotels thought they were adding value; they were subtracting atmosphere.

**Instagram** transformed the lobby from a space for being into a space for appearing. The grand hotel lobby became a backdrop, a set for photographs that would be posted and forgotten. The Instagrammable lobby is designed for angles rather than encounters, for lighting rather than lingering. Hotels began designing lobbies not for guests but for cameras—statement furniture, dramatic flower arrangements, murals that photograph well. The lobby became a gallery rather than a gathering place, and galleries are spaces you walk through, not spaces you inhabit.

**Privacy culture** completed the process. As wealth became more visible and security concerns more real, wealthy travellers began to avoid public spaces entirely. The rise of the private check-in, the direct-to-suite escort, the separate VIP entrance—all of these removed the people who once gave lobbies their energy. When the most interesting guests bypass the lobby entirely, the lobby becomes a space for everyone else, which is to say, for no one in particular.

## What We Lost

The death of the grand hotel lobby represents the loss of something more than a room. It represents the loss of a particular kind of public life—one that was imperfect, exclusive in its own ways, but genuinely valuable.

We lost the chance encounter. The friend of a friend spotted across a marble floor. The conversation started over shared amusement at an outrageous flower arrangement. The business connection made because two people happened to sit near each other at the right moment. These encounters cannot be replicated by algorithms or networking events; they require the particular alchemy of a space that encourages lingering without requiring participation.

We lost the transition. The lobby used to mark a boundary between the world outside and the world within the hotel. Crossing the lobby was a ritual of arrival, a psychological shift from the pace of the city to the pace of hospitality. Without that transition—with guests whisked directly to rooms via apps and private elevators—the hotel experience begins abruptly, without the sensory preparation that the lobby once provided. You miss the scent, the light, the temperature change, the particular quality of quiet that a well-designed lobby creates.

We lost the theatre. The grand hotel lobby was one of the last places where people dressed for a space rather than an occasion. You put on something decent to cross the lobby not because you were going to dinner or a meeting but because the space itself demanded a certain standard. That demand created a visual richness—a pageant of humanity at various stages of elegance and effort—that made the lobby interesting to inhabit. The contemporary lobby, filled with athleisure and laptop bags, offers no such spectacle.

## Can It Be Saved?

Some hotels understand what has been lost and are attempting to recover it. The Ned in London, despite its flaws, generated genuine lobby energy by combining a hotel with a members' club, creating a space where people actually wanted to be rather than merely pass through. The public areas buzz in a way that traditional hotel lobbies no longer manage. The approach has trade-offs—the scene can feel performative, and the atmosphere is more nightclub than drawing room—but the energy is real.

Aman properties have taken the opposite approach, designing lobbies that are so beautiful and so calm that guests actually want to sit in them. The Aman Tokyo sky lobby, with its camphorwood screens and views over the Imperial Palace gardens, attracts guests who choose the space for its qualities rather than its connectivity. The secret is that Aman lobbies offer nothing except beauty and peace—no Wi-Fi bars, no co-working stations, no Instagram walls—and that emptiness becomes its own attraction.

The Connaught in London preserves something of the old lobby spirit through scale and design. The lobby is compact, which forces proximity. The seating is limited, which creates value. The Tadao Ando water feature provides a focal point that encourages contemplation rather than productivity. Guests sit because the space rewards sitting, not because it facilitates working.

But these are exceptions, and they succeed precisely because they resist the trends that have killed lobbies elsewhere. The broader trajectory is clear: the lobby as a vital public space is being replaced by the lobby as a transitional corridor, a photographic set, or an extension of the office. The forces driving this change—technology, privacy, productivity culture—are too powerful to reverse through design alone.

## What Comes Next

The honest answer is that the grand hotel lobby as a social institution is probably gone for good. The conditions that created it—limited communication technology, a relatively small global elite, a culture that valued physical presence over digital connection—no longer exist. We can preserve the architecture, maintain the furniture, polish the marble until it gleams. But we cannot recreate the social function, because that function depended on a world that has moved on.

What we can do is mourn it intelligently. The grand hotel lobby was one of civilisation's better inventions: a space that brought strangers together in comfort and beauty, that facilitated the kinds of encounters that make life interesting, that insisted on a certain standard of public behaviour simply by existing. Its loss is not a catastrophe—the world has plenty of problems more pressing than the decline of hotel common areas—but it is a diminishment, a small subtraction from the richness of public life.

The next time you pass through a hotel lobby, pause. Sit down, even if you are not staying there. Order a drink, if they will let you. Look around at the room, at the other people, at the architecture that someone designed with care and ambition. Notice how few people are doing what you are doing—simply being present in the space. And then consider what it would have felt like to sit in that same spot fifty years ago, when the lobby was alive with a purpose that went beyond transit and photography, when it was, for a few hours at a time, the most interesting room in the city.

You are sitting in a beautiful corpse. Appreciate it while you can.`,
    hotels_mentioned: [`the-connaught`, `aman-new-york`, `claridges`, `raffles-singapore`],
    featured: 1,
    published: 1
  }
];

// ============================================================================
// DATABASE OPERATIONS
// ============================================================================

const destinationColumns = [
  `id`, `slug`, `name`, `country`, `region`, `hero_image`, `intro_md`,
  `best_time`, `content_md`, `published`
];

const articleColumns = [
  `id`, `slug`, `title`, `subtitle`, `category`, `hero_image`, `content_md`,
  `hotels_mentioned`, `published`, `featured`
];

const insertDestinationQuery = `INSERT INTO destinations (${destinationColumns.join(`, `)}) VALUES (${destinationColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;
const insertArticleQuery = `INSERT INTO articles (${articleColumns.join(`, `)}) VALUES (${articleColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting Mar 27 seed...`);
  console.log(`Destinations to insert: ${destinations.length}`);
  console.log(`Articles to insert: ${articles.length}`);

  for (const destination of destinations) {
    await pool.query(insertDestinationQuery, [
      randomUUID(), destination.slug, destination.name, destination.country,
      destination.region, destination.hero_image, destination.intro_md,
      destination.best_time, destination.content_md, destination.published
    ]);
    console.log(`Inserted destination: ${destination.name}`);
  }

  for (const article of articles) {
    await pool.query(insertArticleQuery, [
      randomUUID(), article.slug, article.title, article.subtitle, article.category,
      article.hero_image, article.content_md, JSON.stringify(article.hotels_mentioned),
      article.published, article.featured
    ]);
    console.log(`Inserted article: ${article.title}`);
  }

  console.log(`Mar 27 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
