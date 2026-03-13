import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// MAR 13 — SANTORINI + GREECE DESTINATION GUIDES
// ============================================================================

const destinations = [
  {
    name: `Santorini`,
    slug: `santorini`,
    country: `Greece`,
    region: `Europe`,
    hero_image: `https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600`,
    intro_md: `The caldera view that launched a thousand honeymoons—where to stay on the island that redefined Greek luxury.`,
    best_time: `May to June, September to October`,
    content_md: `# Santorini

Santorini is a contradiction made physical. The island draws millions of visitors each year with its white-and-blue postcard imagery, its volcanic drama, and its sunsets that turn the Aegean into molten copper. Yet the best hotels here manage to feel private, even intimate, perched on caldera cliffs where the only sound is wind, the distant rumble of a ferry horn, and the occasional cry of a gull banking over the void below. The island's luxury hotel scene has matured considerably over the past decade. Where once there were only a handful of serious properties scattered along the caldera rim, today you find polished operations with genuine service cultures, ambitious kitchens, and design that responds to the landscape rather than competing with it.

## The Geography of Santorini Luxury

The caldera—the flooded volcanic crater that forms the island's western edge—is everything. Hotels along this crescent cliff face enjoy the views, the sunsets, and the proximity to Fira and Oia that define most visitors' experience of Santorini. The premium for caldera-facing rooms is significant, and justified. Waking up to that view—the sheer drop, the blue water, the distant silhouette of Thirassia—changes the texture of your morning in ways that rear-facing rooms cannot replicate.

**Oia** sits at the northern tip of the caldera and commands the highest prices on the island. The village itself is gorgeous but overwhelmed by cruise-ship day-trippers from midday until sunset, when the famous viewing spots become standing-room-only theater. The best Oia hotels—Canaves Oia Epitome, Grace Hotel—sit slightly apart from the crush, offering private infinity pools and terraces that make the crowds irrelevant. Oia is where you stay if the sunset ritual matters to you and you can afford a property that shields you from its worst excesses.

**Fira and Firostefani**, the island's capital and its quieter northern neighbor, offer caldera views with more practical access to restaurants, shops, and the island's modest nightlife. Hotels here tend to be slightly less expensive than Oia equivalents, with the trade-off being proximity to Fira's busy streets. Firostefani is the sweet spot: elevated above the town, walking distance to everything, but quiet enough to sleep with windows open.

**Imerovigli** is the caldera's highest point and the least developed of the main villages. The views are arguably the most dramatic—you can see both north toward Oia and south past Fira—and the atmosphere is noticeably calmer. Hotels here attract guests who want the caldera experience without any hint of crowds.

**The East Side and Beaches** — Kamari, Perissa, and Perivolos line the island's eastern and southern shores, offering black volcanic sand beaches and a different rhythm entirely. The hotels here are more affordable and more casual, and the swimming is better than anywhere on the caldera side, where access to the water typically involves a donkey path or a cable car. For families with children or travelers who prioritize beach time over views, the east side makes practical sense. But you will miss the caldera, and on Santorini, the caldera is the point.

## Where We'd Stay

**Canaves Oia Epitome** is our top pick on the island. The property sits just outside Oia proper, which gives it breathing room from the village scrum while keeping the sunset views intact. The suites are generous—white stone walls, private plunge pools, terraces that seem to float over the caldera. The kitchen takes Greek ingredients seriously without drowning them in foam or truffle oil. The service has the easy confidence of a team that knows their hotel is excellent and doesn't need to oversell it. The infinity pool, carved into the clifftop and appearing to spill directly into the Aegean several hundred meters below, is one of the great swimming experiences in European hospitality.

**Grace Hotel Santorini** (now Auberge Resorts Collection) delivers a more intimate, design-forward experience. The champagne bar at sunset is hard to beat—you sit at the edge of the caldera with a glass of rosé while the sky cycles through peach, crimson, and violet. The rooms are smaller than Canaves but more carefully designed, with a minimalist Cycladic aesthetic that lets the view do the work. The restaurant holds its own against standalone Oia dining, which is saying something given the competition from Lycabettus and Ammoudi fish tavernas below.

## When to Visit

The sweet spots are May through mid-June and mid-September through October. In these windows you get warm swimming water, clear skies, and hotels that aren't running at maximum capacity. July and August are brutally crowded—cruise ships disgorge thousands of day-trippers daily, Oia's narrow streets become impassable, and restaurant prices spike. The light is also harsh in high summer, bleaching the views that look so painterly in shoulder season.

Late September is particularly good. The sea is at its warmest, the light turns golden in the afternoons, and the island exhales. Many restaurants and hotels are still open, but the frenzy has passed. You can walk through Oia at sunset and actually see the sunset.

April and November are risky. Some hotels and restaurants are closed, the weather is unpredictable, and ferry services may be disrupted by the Meltemi wind's off-season cousins. But for travelers willing to gamble, the reward is a Santorini that belongs almost entirely to its residents—a fishing island with extraordinary geology, rather than a tourism machine.

## What Santorini Gets Right

The island's best hotels understand something that many luxury destinations miss: the setting is the product. The smartest properties on Santorini don't try to distract you from the caldera with elaborate interiors or attention-seeking design. They build white-walled, blue-doored spaces that frame the view and then get out of the way. The pools are positioned for the sunset. The terraces face west. The bedrooms have curtains you can pull back to watch the first light hit Thirassia. This restraint is the island's design genius, born not from minimalist philosophy but from Cycladic building tradition—thick walls against the wind, small windows against the heat, whitewash against the sun. Luxury hotels on Santorini have simply elevated these practical solutions into aesthetic choices.

The food scene has improved dramatically. A decade ago, tourist-trap moussaka and overpriced grilled fish were the default. Today, a new generation of Greek chefs is working with the island's remarkable terroir—cherry tomatoes intensified by volcanic soil, capers picked from clifftop bushes, fava beans grown in the island's famous ashy earth, white aubergines, and wines from some of the oldest vines in Europe. Assyrtiko, the island's signature white grape, produces wines with a mineral edge and salinity that pair brilliantly with the local seafood. Several caldera-side restaurants now offer cooking that would hold its own in Athens or Thessaloniki.

## What Santorini Gets Wrong

The crowds. There is no polite way to say this: Santorini receives more visitors than it can comfortably accommodate, and the infrastructure shows strain. Water is scarce and mostly desalinated. Waste management is a persistent challenge. The roads between villages are narrow, poorly maintained, and clogged with rental ATVs driven by people who last rode anything motorized in a go-kart park. The cruise-ship problem is acute in Oia, where narrow pathways designed for donkeys now accommodate several thousand selfie-taking visitors daily during peak season.

The prices can also feel disconnected from reality. A caldera-view suite in Oia during August will cost more than equivalent accommodation in Positano, Capri, or the French Riviera, without necessarily delivering better quality. The premium is pure demand economics—the view is that good, and everyone knows it. Travelers who visit in shoulder season get significantly better value without sacrificing the experience.

## Getting There and Getting Around

The island's airport handles direct flights from Athens (45 minutes) and seasonal routes from European cities. The runway is short, which limits aircraft size and occasionally causes weather-related delays. Ferries from Piraeus take 5-8 hours depending on the vessel, but the Blue Star high-speed cuts the journey to under 5 hours and offers a scenic arrival into the caldera itself—one of the great maritime approaches in the Mediterranean.

On the island, a car is useful but not essential if you're staying in one village. Hotels arrange transfers, and taxis are available (though scarce at peak times). The bus service connects major villages and beaches reliably. Many caldera hotels are accessible only on foot via steep steps—check before booking if mobility is a concern.

## The Verdict

Santorini earns its reputation. The caldera view is genuinely one of the natural world's great spectacles, and the best hotels on the island have learned how to serve it with intelligence and grace. The island works best as a 3-5 night stay within a broader Greek itinerary, long enough to settle into the rhythm but not so long that the crowds and limitations wear you down. Pair it with a few nights in Athens, a sailing trip through the Cyclades, or time on a quieter island like Milos or Folegandros. Santorini is the headliner, but Greece's supporting cast is often where the deeper memories are made.`,
    published: 1
  },
  {
    name: `Greece`,
    slug: `greece`,
    country: `Greece`,
    region: `Europe`,
    hero_image: `https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600`,
    intro_md: `From Cycladic cliffs to Peloponnese olive groves—the definitive guide to Greece's finest hotels.`,
    best_time: `May to June, September to October`,
    content_md: `# Greece

Greece is having a moment that feels different from previous ones. The country has always drawn visitors for its archaeology, its islands, and its light—that particular Aegean clarity that makes white walls blaze and blue domes glow. But the luxury hotel scene has transformed in the past five years. Where Greece once relied on charm and setting to compensate for inconsistent service and dated interiors, a new generation of properties now delivers genuine international-caliber hospitality. The Aman arrived in the Peloponnese. Canaves pushed the boundaries of Cycladic luxury. Boutique operations on Crete, Paros, and the mainland raised standards that forced established players to renovate or fall behind. Greece in 2026 is a luxury destination that competes with Italy, France, and the Maldives on quality, while retaining something those competitors lack: an unforced authenticity that makes you feel like a guest rather than a consumer.

## The Geography of Greek Luxury

Greece's geography is its greatest asset and its biggest logistical challenge. The country comprises a mountainous mainland, the Peloponnese peninsula, and over 6,000 islands—of which roughly 200 are inhabited. This fragmentation means that getting between destinations involves ferries, short-hop flights, or both. It also means extraordinary variety: within a single trip, you can move from volcanic Santorini to verdant Corfu, from the arid Peloponnese coast to the pine-covered slopes of Pelion.

### The Cyclades

The Cycladic islands—Santorini, Mykonos, Paros, Naxos, Milos—form the backbone of Greek island tourism and the heartland of the country's luxury hotel scene. Santorini and Mykonos are the headliners, drawing the largest crowds and commanding the highest prices. Both deliver extraordinary beauty, but both also strain under the weight of overtourism in peak season.

**Mykonos** offers a different proposition from Santorini. Where Santorini is about the view, Mykonos is about the scene—beach clubs, nightlife, fashion, and a social energy that attracts a younger, louder crowd. The luxury hotels here range from party-adjacent (Cavo Tagoo, with its cave pool and DJ-fueled atmosphere) to genuinely serene (the better villas at Mykonos Grand). The island works for travelers who want their Greek luxury with a social component. It exhausts those who don't.

**Paros and Naxos** offer Cycladic beauty with fewer crowds and lower prices. Paros has emerged as a serious contender in recent years, with properties like Parīlio (a Design Hotels member) delivering boutique luxury with genuine taste. The island feels like Mykonos might have felt twenty years ago: beautiful, developing, but not yet overwhelmed. Naxos, the largest Cycladic island, offers agricultural richness, long sandy beaches, and a handful of quality accommodations.

**Milos** is the current darling of Greek island cognoscenti. The volcanic island's coastline produces beaches of surreal beauty—Sarakiniko's lunar white rocks, Kleftiko's sea caves accessible only by boat—and the luxury infrastructure is developing rapidly. The hotel scene is still emerging, with boutique properties leading the way, but for travelers who value natural spectacle over polished amenities, Milos is extraordinary.

### The Peloponnese

The Peloponnese represents Greece's most exciting luxury development frontier. The peninsula—technically an island since the Corinth Canal was cut—offers dramatic coastline, archaeological significance (Olympia, Mycenae, Epidaurus), and a landscape of olive groves, citrus orchards, and stone villages that feels like a more honest version of Tuscany.

**Amanzoe** put the Peloponnese on the luxury map. Aman's hilltop retreat near Porto Heli delivers the brand's signature blend of architectural precision, generous space, and service that anticipates without intruding. The setting is extraordinary—a contemporary acropolis of stone pavilions overlooking the Argolic Gulf, surrounded by olive groves and wild thyme. The beach club below, reached by shuttle, offers swimming in water so clear you can count pebbles at five meters.

**Costa Navarino** on the western coast represents a different model: large-scale resort development that aims for sustainability alongside luxury. The Romanos and W Costa Navarino occupy a spectacular stretch of Messinian coastline, with championship golf courses, extensive spa facilities, and multiple dining venues. The scale is significant—this is resort tourism, not boutique hospitality—but the execution is strong and the commitment to environmental practice is genuine.

### The Mainland

Athens has transformed from a city you passed through on your way to the islands into a destination that rewards extended stays. The hotel scene reflects this shift: the new Aman residences, the Athens Capital Hotel, and a growing number of boutique properties in Plaka and Koukaki provide genuine luxury options. The food scene is among Europe's most exciting, with tavernas serving traditional dishes alongside new-wave restaurants rethinking Greek cuisine. The Acropolis remains magnificent, and the recently expanded National Archaeological Museum deserves a full day.

**The Pelion Peninsula**, on the eastern mainland, offers a less-travelled alternative. Mountain villages, hidden coves, and a landscape of chestnut forests and stone paths create an atmosphere closer to the Lake District than the Cyclades. Luxury accommodation is limited but developing, and for travelers who want mountain-and-sea Greece without island logistics, Pelion delivers.

### Crete

Greece's largest island deserves its own section. Crete operates almost as an independent destination, with a culture, cuisine, and landscape distinct from both the mainland and the Cyclades. The western end—Chania, with its Venetian harbor, and the Apokoronas coast—offers the island's strongest luxury options, including the excellent Domes Zeen (an Autograph Collection property) and several quality boutique hotels.

Cretan cuisine is arguably the finest regional cooking in Greece, drawing on the island's extraordinary agricultural diversity. The olive oil alone—rich, peppery, and used with abandon—justifies a visit. The hiking is world-class, from the famous Samaria Gorge to quieter trails through the White Mountains. And the archaeological sites—Knossos, Phaistos, Gortyna—provide historical depth that matches anything on the mainland.

## Where We'd Stay

For a first Greek trip focused on luxury, the ideal itinerary looks something like this:

Start with **two nights in Athens**, enough to see the Acropolis, explore the food scene, and absorb the city's manic creative energy. Stay in Plaka or Syntagma for walkability.

Fly to **Santorini for three nights** — Canaves Oia Epitome or Grace Hotel, depending on whether you prioritize space (Canaves) or design intimacy (Grace). Time your visit for late May or September.

Then take a ferry or short flight to a **quieter island for three nights** — Milos for natural spectacle, Paros for village charm, or Naxos for agricultural richness and swimming beaches.

If time allows, add **two nights at Amanzoe** in the Peloponnese. Fly from the islands back to Athens, then drive (or helicopter) to the Argolic Gulf. Amanzoe provides a fitting conclusion: the grand view, the deep quiet, the sense of Greece distilled to its essential elements.

## The Hotel Landscape

Greek luxury operates across several tiers:

**International brands** — Aman (Amanzoe), Four Seasons (Astir Palace, Athens), One&Only (Aesthesis, Athens), and the growing Marriott Luxury Collection presence provide globally consistent standards. These properties deliver reliability and infrastructure that independent hotels often struggle to match. The trade-off is sometimes a dilution of local character.

**Serious Greek operators** — Canaves, Katikies, Vedema, Grace/Auberge, and Costa Navarino represent Greek-owned or Greek-managed luxury that understands the local context deeply. These properties tend to feel more authentically Greek while maintaining high service standards. They're often the best value at the top end.

**Boutique properties** — A growing category of 10-30 room hotels offering design-forward accommodation with personal service. Properties like Parīlio on Paros, Verina on Sifnos, and a dozen emerging Cretan operations offer experiences that larger hotels cannot replicate. The quality varies, but the best are exceptional.

## The Food

Greek food deserves more respect than it receives. The cuisine has suffered from decades of tourist-oriented mediocrity—lukewarm moussaka, grey grilled fish, salads with supermarket tomatoes—but the reality on the ground has changed dramatically. A new generation of Greek chefs is rediscovering regional ingredients, traditional techniques, and the extraordinary agricultural wealth that the country's geography provides.

**Santorini's terroir** produces ingredients unavailable anywhere else: cherry tomatoes grown in volcanic ash that taste more intensely of tomato than you thought possible, white aubergines, split peas for the island's famous fava, and Assyrtiko grapes that make wines of startling mineral complexity.

**Cretan cuisine** draws on the island's wild herbs, exceptional olive oil, mountain cheeses, and a foraging tradition that predates written history. A meal at a good Cretan taverna—dakos (barley rusk with tomato and myzithra cheese), lamb with stamnagathi (wild greens), honey-drenched loukoumades—is one of the great eating experiences in the Mediterranean.

**Athens** has become a genuine food city, with everything from traditional tavernas (Diporto, in the basement near the Central Market, serves two dishes, both perfect) to ambitious modern restaurants (Spondi holds two Michelin stars and deserves them).

## Practical Matters

**Flights:** Athens is well-connected to major European and Middle Eastern hubs. Santorini and Mykonos have direct seasonal flights from many European cities. Inter-island connections often route through Athens.

**Ferries:** The Greek ferry network is extensive, generally reliable, and far more pleasant than its reputation suggests. The Blue Star and Seajets high-speed services cut travel times dramatically. Book in advance during July-August. The Cycladic ferry routes are frequent; remoter islands may have limited schedules.

**Driving:** Mainland and Crete driving is straightforward on main roads, chaotic on village streets. Island driving varies—Santorini and Mykonos are manageable but congested; larger islands like Naxos and Crete benefit from car hire. Rental costs are reasonable.

**Budget:** Greece offers strong value at the luxury end compared to Italy, France, or the Maldives. A caldera suite on Santorini costs less than an equivalent room on the Amalfi Coast. Dining is significantly cheaper—a superb meal for two with wine might cost €80-120 at a top taverna, versus €200+ in equivalent Italian or French settings.

## The Verdict

Greece in 2026 represents the best value in European luxury travel. The hotel infrastructure has caught up with the natural beauty, the food scene has matured beyond recognition, and the variety of experiences—islands, mainland, mountains, archaeology, beaches—exceeds any single-country competitor. The logistics require patience (ferries, short flights, occasional delays), but the reward is a country that still feels genuinely welcoming rather than merely transactional.

The best Greek trips combine planning with flexibility. Book your hotels and ferry tickets in advance, but leave room for the unexpected—the taverna a local recommends, the beach you discover while walking, the archaeological site that moves you more than any famous ruin. Greece rewards curiosity more than any itinerary, and the travelers who return most often are those who remain open to what the country wants to show them.`,
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

const insertDestinationQuery = `INSERT INTO destinations (${destinationColumns.join(`, `)}) VALUES (${destinationColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting Mar 13 seed — Santorini + Greece destination guides...`);

  for (const destination of destinations) {
    await pool.query(insertDestinationQuery, [
      randomUUID(), destination.slug, destination.name, destination.country,
      destination.region, destination.hero_image, destination.intro_md,
      destination.best_time, destination.content_md, destination.published
    ]);
    console.log(`Inserted destination: ${destination.name}`);
  }

  console.log(`Mar 13 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
