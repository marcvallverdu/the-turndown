import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const section = (paragraphs: string[]) => paragraphs.join(`\n\n`);

// ============================================================================
// APR 3 — PORTUGAL + SPAIN DESTINATION GUIDES
// ============================================================================

const destinations = [
  {
    name: `Portugal`,
    slug: `portugal`,
    country: `Portugal`,
    region: `Europe`,
    hero_image: `https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1600`,
    intro_md: `From Lisbon's tiled facades to the Douro's terraced vineyards and Madeira's Atlantic cliffs—Portugal's luxury hotels reward travelers who look beyond the obvious.`,
    best_time: `May to June, September to October`,
    content_md: `# Portugal

Portugal has spent the last decade doing something rare in European tourism: growing its luxury hotel infrastructure without losing its soul. The country that once served as a quieter, more affordable alternative to Spain and France now commands attention on its own terms, with a hotel scene that ranges from restored Lisbon palaces to wine-country retreats embedded in terraced hillsides above the Douro River. What makes Portugal distinctive is not any single headline property but the consistency of quality across regions—and the stubborn authenticity that persists even as international brands arrive.

The Portuguese hospitality temperament helps. Service here tends toward genuine warmth rather than scripted precision. Staff at the best Portuguese hotels remember your name because they care, not because a training manual told them to. There is a national allergy to pretension that keeps even the most expensive properties grounded. You will never feel overdressed or underdressed in Portugal; the country operates with an ease that makes guests comfortable without sacrificing standards.

## The Geography of Portuguese Luxury

Portugal's compact size is deceptive. Within a country smaller than Indiana, you find Atlantic-facing cliffs, river valleys producing some of Europe's finest wines, subtropical islands, medieval hill towns, and a capital city whose creative energy rivals Berlin and Barcelona. The diversity means a Portuguese itinerary can shift dramatically in tone within a two-hour drive.

### Lisbon

Lisbon in 2026 is one of Europe's most compelling cities, and the hotel scene reflects its ascent. The city has attracted serious investment without yet tipping into the overtourism that plagues Barcelona and Venice, though the Alfama and Baixa districts push close during summer months. The light here is extraordinary—a warm, Atlantic-softened glow that illuminates the city's azulejo-tiled facades and terracotta rooftops with the kind of clarity that photographers chase and painters try to reproduce.

The luxury hotel landscape has expanded dramatically. The Four Seasons Hotel Ritz Lisbon, long the city's benchmark, has been joined by serious competitors: the Vermelho, set in a restored building by architect Álvaro Siza Vieira; the Bairro Alto Hotel, reimagined by Eduardo Souto de Moura; and a growing cluster of boutique operations in Príncipe Real and Santos that deliver design-forward stays with genuine personality. The hotel market here favors properties that engage with the city's architecture and history rather than imposing generic international aesthetics.

Lisbon's food scene is a primary draw. The city runs on custard tarts from Pastéis de Belém (or the dozen excellent imitators across town), grilled sardines served on bread at June festivals, and an evolving fine dining scene led by chefs like José Avillez, whose restaurants span from casual to Michelin-starred. The seafood is exceptional—percebes (goose barnacles) pulled from wave-battered rocks, amêijoas à Bulhão Pato (clams in garlic and coriander), grilled turbot with enough simplicity to let the fish speak. The city's wine bars pour bottles from every Portuguese region at prices that make London sommeliers weep.

### Porto and the Douro Valley

Porto is Lisbon's grittier, more compact northern counterpart, and it rewards visitors who give it time. The Ribeira waterfront, a UNESCO World Heritage site, provides the postcard views—colorful buildings cascading down to the Douro, port wine lodges lining the opposite bank in Vila Nova de Gaia—but the city's pleasures extend well beyond the tourist core. The Bolhão market, recently restored, is worth an hour of browsing. The contemporary art scene, anchored by the Serralves Foundation in its Álvaro Siza-designed building, is increasingly serious. And the francesinha—Porto's absurd, glorious sandwich of ham, sausage, steak, and melted cheese, drowned in beer-tomato sauce—is one of Europe's great guilty eating experiences.

The Douro Valley, an hour's drive east, is where Portugal's luxury hospitality reaches its most distinctive expression. The valley's terraced vineyards, carved into steep hillsides above the river, produce port wine and an increasingly impressive range of table wines. Hotels here occupy converted quintas (wine estates) or purpose-built properties positioned for valley views that shift through the day as light and shadow play across the terraces.

**Six Senses Douro Valley** is the standout property. Set in a restored 19th-century manor house above the river, it delivers the brand's signature wellness-focused luxury with genuine Portuguese character. The spa draws on local ingredients—Douro olive oil, grape-seed extracts, herbs from the kitchen garden—and the cooking uses produce from the hotel's organic farm. The wine program is exceptional, with tastings that explore the valley's diversity without the pomposity that wine education sometimes attracts. The rooms balance contemporary design with the manor's original architecture, and the views from the upper-floor suites—terraces descending to the river in stepped lines of green and gold—justify every euro of the rate.

### The Algarve

The Algarve coast divides opinions. The eastern stretch, from Faro toward the Spanish border, offers salt marshes, barrier islands, and a quieter atmosphere. The central section, from Albufeira to Lagos, is package-holiday territory—golf resorts, all-inclusive complexes, and the kind of overdevelopment that Portugal generally avoids. The western Algarve, from Lagos to Sagres and around Cape St. Vincent, returns to dramatic cliff scenery, empty beaches, and a rawer Atlantic energy.

Luxury options in the Algarve tend toward resort-scale properties. Pine Cliffs Resort (a Luxury Collection property) occupies a clifftop position near Albufeira with extensive facilities. The Vila Vita Parc, near Porches, is perhaps the Algarve's most accomplished luxury resort, with multiple restaurants (including the two-Michelin-starred Ocean), a wine cellar holding 11,000 bottles, and grounds that provide genuine escape from the coast's commercialisation. For travelers seeking something more intimate, Fazenda Nova in Tavira offers boutique accommodation in a converted farmhouse with a design sensibility that feels more Ibiza than Algarve.

The western Algarve holds the coast's best secret: its wildness. The beaches around Sagres—Praia do Beliche, Praia da Mareta—are backed by cliffs rather than condominiums, and the surf culture here attracts a younger, less polished crowd. The food in the western Algarve is simpler and often better: grilled fish at beach restaurants, cataplana (the copper-pot seafood stew that is the region's signature dish), and sweet almonds in every form from marzipan to liqueur.

### Madeira

Madeira occupies a unique position in Portuguese tourism: a subtropical island in the Atlantic, closer to Morocco than to Lisbon, with a micro-climate that produces year-round mild temperatures, dramatic mountain scenery, and the kind of floral abundance that makes English garden enthusiasts lose their composure. The island has been a luxury destination since the 19th century, when British invalids came for the air and stayed for the wine.

**Belmond Reid's Palace** remains Madeira's defining hotel. The property has occupied its cliff above Funchal since 1891, watching the Atlantic with the patient confidence of a place that has outlasted every trend that tried to replace it. The gardens alone—ten acres of subtropical planting cascading down the cliff—justify a visit. Churchill painted here. George Bernard Shaw danced here. Generations of travelers have come simply to sit on the terrace and watch the ocean. Reid's works because it does not try to be contemporary; it is timeless, which is harder and more valuable.

Beyond Reid's, Madeira's hotel scene is developing. Savoy Palace, opened in 2019, brought a modern luxury option to Funchal with rooftop pool, multiple restaurants, and the kind of contemporary design that Reid's would never attempt. The island's interior—mountain villages accessible by vertiginous roads, levada walks threading through laurel forests—offers experiences unavailable anywhere else in Europe. The walking is exceptional, the wine (Madeira, the fortified wine that can age for centuries) is fascinating, and the food—espada with banana, bolo de mel, poncha made from local aguardente—has a character entirely its own.

### The Alentejo

The Alentejo, Portugal's vast, sparsely populated interior south of Lisbon, is the country's least-known luxury destination and arguably its most rewarding. Rolling cork-oak plains, whitewashed villages, megalithic sites older than Stonehenge, and a food tradition based on bread, olive oil, pork, and wild herbs create an atmosphere that feels centuries removed from Lisbon's urban energy.

São Lourenço do Barrocal, outside Monsaraz, has established itself as the Alentejo's benchmark property. The converted agricultural estate delivers luxury that grows from the landscape rather than being imposed on it—stone buildings, organic vineyards, a spa that uses local clay and botanicals. The restaurant sources almost everything from the estate or neighboring farms, and the cooking is Alentejano to its core: açorda (bread soup with coriander and egg), black pork from free-range animals fed on acorns, migas with asparagus foraged from the surrounding fields.

## Where We'd Stay

For a Portuguese itinerary that covers the country's range, consider this sequence:

**Two nights in Lisbon**, based in Príncipe Real or Chiado. Walk the city's seven hills, eat at Belcanto or Taberna da Rua das Flores, drink vinho verde on a terrace overlooking the Tagus, and visit the MAAT museum at sunset when the riverside light is at its best.

**Three nights in the Douro Valley** at Six Senses. Taste wine at a dozen quintas, walk through the terraced vineyards in early morning when mist sits in the valley, take a boat trip upriver, and let the spa work on muscles tired from travel. The pace here should be slow; the valley resists hurry.

**Two nights in the Alentejo** at São Lourenço do Barrocal or a similar property. Drive through the cork-oak landscape, visit Évora's Roman temple and bone chapel, swim in the estate pool while storks circle overhead, and eat the kind of country cooking that Michelin-starred restaurants in Paris try to elevate but rarely improve upon.

**Two nights in Madeira** at Reid's Palace. Walk a levada, eat espada at a local restaurant, drink Madeira wine in the tasting room at Blandy's, and spend an afternoon on Reid's terrace watching the Atlantic—the same view that has anchored this hotel for more than a century.

## The Food

Portuguese food is among Europe's most underrated cuisines. The cooking is built on exceptional raw ingredients—Atlantic seafood, Iberian pork, olive oil from ancient groves, breads baked in wood-fired ovens—handled with a simplicity that reflects confidence rather than limitation.

Bacalhau (salt cod) is the national obsession, prepared in purportedly 365 ways, one for each day of the year. The best preparations—bacalhau à brás (shredded with eggs and matchstick potatoes), bacalhau com natas (baked in cream), bacalhau à lagareiro (roasted with olive oil until the skin crisps)—transform a preserved ingredient into something transcendent. Every Portuguese has an opinion about the best bacalhau preparation, and they are all correct.

The pastéis de nata—custard tarts with burnt-sugar tops and flaky pastry—are a national symbol for good reason. The original recipe from Pastéis de Belém remains a closely guarded secret, but excellent versions are available across the country. Eat them warm, dusted with cinnamon, ideally standing at a counter with a strong bica (espresso) in your other hand.

The wine is the country's hidden advantage. Portugal produces extraordinary diversity from its 250+ indigenous grape varieties, most of which are unknown outside the country. Douro reds have the depth to rival Barossa Shiraz. Alentejo wines offer Mediterranean warmth with surprising elegance. Vinho verde—not the thin, slightly fizzy version exported in the 1990s, but the serious white wines from Monção and Melgaço—ranks among Europe's best summer drinking. And Madeira wine, with its unique heated-aging process and ability to last literally centuries, remains one of the wine world's great underappreciated treasures.

## Practical Matters

**Flights:** Lisbon and Porto are well-connected to European and North American hubs. TAP Air Portugal serves as the main carrier with a Lisbon hub. Funchal (Madeira) has direct European connections, especially during winter when northern Europeans seek warmth. Faro (Algarve) handles heavy seasonal traffic.

**Driving:** Portugal's roads are good, particularly the motorway network connecting Lisbon, Porto, and the Algarve. Tolls on the A-roads are reasonable. Driving in Lisbon and Porto city centres is inadvisable—narrow streets, aggressive parking, and excellent public transport make cars unnecessary. In the Douro Valley, Alentejo, and rural areas, a car is essential. Road surfaces in the interior can be poor, and GPS directions should be trusted cautiously on minor routes.

**Budget:** Portugal remains strong value at the luxury tier. A top-end hotel in Lisbon costs 30-40% less than equivalent accommodation in Paris or London. Restaurant meals, even at Michelin-starred establishments, are notably cheaper than in most Western European capitals. Wine prices, even for exceptional bottles, remain startlingly reasonable. The country rewards spending on experiences—food, wine, cultural sites—more than on accommodation, though the accommodation is increasingly excellent.

**Language:** Portuguese, not Spanish—a distinction that matters deeply to the Portuguese. English is widely spoken in tourism contexts, particularly in Lisbon, Porto, and the Algarve. In rural areas, a few phrases of Portuguese go a long way. Spanish is understood but not always appreciated; the colonial history between the two countries creates sensitivities that thoughtful travelers should respect.

## The Verdict

Portugal in 2026 is a country that has figured out how to welcome luxury travelers without losing what made it appealing in the first place. The hotels are better than ever, the food scene is thriving, the wines are extraordinary, and the country retains an authenticity that its neighbors have spent decades trying to recover.

The best Portuguese trips work because the country's scale is manageable and its variety is genuine. You can move from a cosmopolitan city to a wine valley to a medieval village to an Atlantic island within a single week, and each transition feels like entering a different country. The Portuguese themselves make this possible—a people whose warmth is not performed for tourists but simply how they are, whose melancholy (saudade) coexists with humor and hospitality in a way that foreigners find irresistible.

Portugal does not shout for attention. It never has. The country that launched an age of global exploration from its Atlantic coast has always preferred understatement to spectacle. The luxury traveler who arrives expecting Mediterranean flash will find something better: quiet excellence, genuine character, and a relationship between landscape, food, wine, and hospitality that feels organic rather than engineered. Portugal does not need to convince you. It just needs you to show up.`,
    published: 1
  },
  {
    name: `Spain`,
    slug: `spain`,
    country: `Spain`,
    region: `Europe`,
    hero_image: `https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=1600`,
    intro_md: `From Mallorcan military fortresses to Barcelona's design hotels and Andalusia's converted palaces—Spain's luxury scene is as varied as the country itself.`,
    best_time: `April to June, September to November`,
    content_md: `# Spain

Spain is enormous in ways that first-time visitors rarely anticipate. The country contains multitudes—four official languages, seventeen autonomous communities, coastlines facing two different bodies of water, and a cultural diversity that makes generalising about "Spanish hotels" roughly as useful as generalising about "European food." The luxury hotel scene reflects this complexity. There is no single Spanish hospitality identity. Instead, there are distinct regional traditions that produce wildly different experiences: a converted 19th-century fortress on Mallorca shares almost nothing in DNA with a contemporary design hotel on Barcelona's waterfront, and both are authentically, emphatically Spanish.

This diversity is Spain's greatest strength for the luxury traveler. Unlike countries where the best hotels cluster in a single region or city, Spain distributes quality across its geography. You can build an extraordinary trip through Andalusia, the Balearic Islands, Catalonia, the Basque Country, or the Canaries—or combine several regions without repeating yourself. The logistics are manageable: domestic flights are frequent and affordable, the rail network (including high-speed AVE trains) connects major cities efficiently, and the road infrastructure is excellent.

## The Geography of Spanish Luxury

### The Balearic Islands

Mallorca, Menorca, Ibiza, and Formentera form Spain's luxury heartland. The Balearics draw a disproportionate share of the country's high-end hotel investment, and for good reason: reliable weather, Mediterranean water, proximity to major European cities (two hours from London, three from most continental capitals), and a sophistication that has matured well beyond the package-holiday image that still clings to parts of Mallorca's coast.

**Mallorca** is the archipelago's anchor. The island's northwestern coast, from Deià to Sóller, offers dramatic limestone cliffs, olive groves, and a landscape that has attracted artists, writers, and escapists since Robert Graves settled in Deià in the 1930s. The luxury hotels here—Belmond La Residencia in Deià, the Cap Vermell Grand Hotel near Artà—tend toward understated Mediterranean elegance, with stone buildings, terraced gardens, and a relationship with the landscape that package tourism on the southern coast has severed.

**Cap Rocat**, on the Bay of Palma, represents something different entirely: a 19th-century military fortress converted into a hotel that treats its history as a feature rather than an inconvenience. The rooms are built into the fortifications, with walls thick enough to muffle a cannon blast and private terraces overlooking water so clear you can watch fish from your sun lounger. The property demonstrates what happens when renovation respects original architecture instead of gutting it: the military geometry creates spaces—long corridors, hidden courtyards, elevated gun emplacements repurposed as viewing platforms—that no architect designing from scratch would conceive.

**Ibiza** has bifurcated into two distinct destinations. The south and west coasts maintain the island's party reputation, with beach clubs, DJ residences, and a nightlife infrastructure that peaks in July and August. The north—Santa Gertrudis, San Juan, the road to Benirràs—offers a different Ibiza: quiet finca hotels, organic farms, yoga retreats, and a bohemian sensibility inherited from the hippie settlers who arrived in the 1960s. The luxury market serves both audiences, but the most interesting properties—Six Senses Ibiza, Atzaró, La Granja by Design Hotels—sit firmly in the north, offering a version of Balearic luxury that feels grounded rather than performative.

**Menorca** is the Balearics' quiet achiever. The smallest of the main islands (Formentera aside), it offers empty beaches, a gentler pace, and a food culture rooted in its own traditions—caldereta de langosta (lobster stew), gin distilled from a British colonial-era recipe, and cheese from Mahón that is one of Spain's great artisanal products. The luxury hotel scene is developing but still modest, which is precisely Menorca's appeal. This is an island for travelers who have seen enough of the world to know that quiet is a luxury worth more than any infinity pool.

### Barcelona and Catalonia

Barcelona is Spain's most architecturally assertive city, and its hotel scene matches the ambition. Gaudí's buildings—the Sagrada Família, Casa Batlló, Park Güell—establish a creative confidence that permeates the city's design culture, and the best hotels respond to this energy rather than ignoring it.

**Nobu Hotel Barcelona**, opened in the city's waterfront district, brings Robert De Niro and Nobu Matsuhisa's hospitality brand to a city that suits its blend of design, food, and urban energy. The hotel sits near the Barceloneta beach, giving it access to both the city's cultural core (a short taxi or metro ride to the Gothic Quarter) and the seafront promenades that give Barcelona its Mediterranean character. The Nobu restaurant is the anchor, but the hotel works on its own terms: clean-lined rooms with sea views, a rooftop pool positioned for sunset, and a service style that is attentive without the stiffness that sometimes afflicts luxury hotels in southern Europe.

Beyond Barcelona, Catalonia offers the Costa Brava—a coastline of pine-backed coves, fishing villages, and Dalí's legacy in Cadaqués and Figueres. The luxury hotel options here are more limited than the coast's beauty deserves, but properties like the Hostal de la Gavina in S'Agaró provide a Mediterranean experience more intimate than anything in Barcelona.

### Andalusia

Andalusia is where Spain's Moorish heritage, Catholic grandeur, and contemporary ambition collide most visibly. The region stretching from Seville through Córdoba to Granada contains some of Europe's most extraordinary architecture—the Alhambra, the Mezquita, the Alcázar—and a hotel scene that increasingly matches the setting.

Seville's luxury market has flourished. The Hotel Alfonso XIII, a palatial property built for the 1929 Ibero-American Exposition, remains the city's landmark hotel, with tiled courtyards, arched colonnades, and an atmosphere that transports you to a Spain that exists more in imagination than reality—except here, it is real. The Hotelito de Oro, a smaller property in the Santa Cruz neighborhood, offers an intimate alternative: fewer rooms, more personal service, and the advantage of being embedded in the old city's narrow streets rather than presiding over them.

Granada's hotel scene is defined by proximity to the Alhambra. The Parador de Granada, occupying a 15th-century convent within the Alhambra complex itself, offers what may be the most dramatic hotel location in Spain. You sleep inside the monument, walk its gardens after the day-trippers have gone, and see the palace in light—dawn, dusk, moonlit—that most visitors never experience. The rooms are modest by luxury standards, but the location is without equivalent.

The Andalusian coast—from Marbella through Málaga to Almería—provides beach-resort luxury of varying quality. Marbella's Puente Romano and the Marbella Club represent the old guard: established properties with mature gardens, proven service, and a clientele that returns annually. The newer additions tend toward the glossy and international, offering facilities that could exist anywhere warm. The best Andalusian coastal experiences are found in the smaller properties: cortijo conversions in the hills behind the coast, where the pool looks over olive groves rather than sunbed rows, and dinner is cooked by someone who grew the tomatoes that morning.

### The Basque Country

San Sebastián and the surrounding Basque coastline represent Spain's gastronomic apex. The city holds more Michelin stars per capita than anywhere except Kyoto, and the pintxo bars of the Parte Vieja old town offer what may be the world's greatest casual eating experience—stand at the bar, point at elaborate morsels arranged on the counter, eat, drink txakoli (the local slightly sparkling white wine), move to the next bar, repeat.

The hotel scene in San Sebastián has historically lagged behind the food. The Hotel María Cristina, a Belle Époque grande dame on the Urumea river, remains the prestige address, with Film Festival-era glamour and a Concha beach location. Newer boutique options—Villa Favorita, Lasala Plaza—offer more contemporary accommodation in the old town. The city works best as a food-focused stay: two or three nights of serious eating interspersed with beach time and walks along the dramatic coastline.

Bilbao, thirty minutes west, adds the Guggenheim Museum and a growing food-and-design scene to the Basque proposition. The city has transformed from post-industrial port to cultural destination with remarkable speed, and the hotel market is catching up. The Gran Hotel Domine, facing the Guggenheim, provides a stylish base.

### Madrid

The capital is Spain's most underrated luxury destination. Visitors often treat Madrid as a transit point—fly in, transfer to Andalusia or the coast—and miss a city of extraordinary museums (the Prado alone justifies a trip), late-night energy, and a food scene that rivals Barcelona's without the tourist markup.

The hotel market has exploded. The Four Seasons Madrid, opened in a converted banking district building, set a new benchmark for the city. The Mandarin Oriental Ritz, after a comprehensive renovation, returned as perhaps Spain's most polished hotel. The Rosewood Villa Magna and the new Edition Madrid round out a luxury tier that barely existed a decade ago. Madrid's hotel renaissance reflects broader investment in the city's infrastructure—pedestrianised streets, expanded cycling networks, cultural programming—that is making the capital increasingly livable and visitable.

## Where We'd Stay

A two-week Spanish itinerary covering genuine breadth:

**Three nights in Madrid** — Prado, Reina Sofía, Retiro Park, a Michelin dinner, late-night tapas in La Latina. The Four Seasons for full luxury; the Edition for design-forward energy.

**Two nights in San Sebastián** — pintxo crawls, a splurge dinner at Arzak or Mugaritz, La Concha beach, a drive along the corniche to Getaria for grilled turbot at Elkano. Hotel María Cristina for the setting.

**Three nights in Mallorca** — Cap Rocat for the fortress experience, days split between Palma's old town (cathedral, galleries, Santa Catalina market) and the Tramuntana coast (Deià, Valldemossa, Sóller). Rent a car; the island rewards exploration.

**Two nights in Seville** — Alcázar, tapas in Triana, flamenco at an intimate tablao (not a tourist show), a walk through the Parque de María Luisa at dusk. Alfonso XIII for grandeur.

**Two nights in Barcelona** — Gaudí, the Gothic Quarter, dinner at Disfrutar (Spain's current culinary pinnacle), a morning at the Boqueria market. Nobu for the waterfront.

## The Food

Spain's food culture operates at two levels, both exceptional. The first is the daily culture of markets, tapas bars, and home cooking—a tradition that values fresh ingredients, regional identity, and the social act of eating together. The second is the avant-garde restaurant scene that emerged from El Bulli's revolution and continues to produce chefs who treat cooking as a form of creative expression.

The daily level is where most visitors spend most of their eating time, and it rewards them generously. A Spanish market—the Boqueria in Barcelona, the Mercado de la Ribera in Bilbao, the Mercado de San Miguel in Madrid—is a sensory education: jamón ibérico sliced translucent, percebes glistening with seawater, pimientos de padrón glistening with olive oil, tortilla española served at room temperature from a round pan. The quality of raw ingredients in Spain is staggering, and the cooking tradition knows it—the best Spanish dishes do as little as possible to excellent ingredients.

Jamón ibérico de bellota—acorn-fed Iberian ham, aged for years until the fat turns sweet and nutty and the meat develops a complexity that rivals fine wine—is arguably Spain's single greatest contribution to global gastronomy. A plate of properly sliced bellota, eaten slowly with bread and a glass of fino sherry, is one of the great eating experiences available on Earth. The price reflects the product: the pigs roam free in oak forests, eating acorns for months before slaughter, and the ham ages for up to four years. There are no shortcuts, and the result is food that has earned every euro it costs.

## Practical Matters

**Flights:** Madrid and Barcelona are major European hubs with extensive intercontinental connections. Regional airports—Málaga, Bilbao, Palma de Mallorca, Seville—handle significant European traffic. Domestic flights are frequent and competitive; Vueling and Iberia Express serve most routes.

**Trains:** Spain's AVE high-speed network is excellent, connecting Madrid to Barcelona (2.5 hours), Seville (2.5 hours), Málaga (2.5 hours), and Valencia (1.5 hours). The trains are punctual, comfortable, and reasonably priced when booked in advance. For Madrid-Barcelona especially, the train beats flying when you account for airport time.

**Driving:** Spanish roads are excellent. The autopista motorway network covers the country efficiently, with tolls that are generally modest. City driving in Madrid and Barcelona is stressful and unnecessary. Rural Spain—the interior of Mallorca, Andalusia's white villages, the Basque coast—rewards car exploration. Parking in historic city centres is challenging; book a hotel with parking or resign yourself to garages.

**Timing:** Spain's internal clock runs later than most visitors expect. Lunch at 2pm, dinner at 9:30pm (at the earliest), and a social rhythm that peaks after 11pm. Adapting to this schedule is essential for enjoying Spanish food and nightlife at its best. Travelers who insist on eating dinner at 7pm will find themselves alone in restaurants designed for 10pm service.

**Budget:** Spain occupies a middle ground in European luxury pricing. Madrid and Barcelona's top hotels now approach London and Paris rates, but food and drink remain significantly cheaper. A world-class dinner with wine in San Sebastián costs roughly half what the equivalent would in London. The Balearics command a premium in summer that drops sharply in shoulder season. Andalusia and the interior remain strong value.

## The Verdict

Spain is too large and too varied for any single trip to capture. This is not a complaint; it is an invitation to return. The country rewards depth over breadth—three nights in one city, exploring its neighborhoods, eating at its counters, learning its rhythms, will produce better memories than a week of daily transfers between highlights.

The luxury hotel scene has matured dramatically. A decade ago, Spain's high-end options outside Madrid and Barcelona were limited to beach resorts and paradores (the state-run network of historic properties that remain an extraordinary institution, even if the service sometimes lags behind private competitors). Today, every major region offers genuine luxury choices, from international brands to independent properties run by people who understand their corner of Spain with the intimacy that only locals possess.

What Spain offers that its competitors do not is a living culture that has not been preserved in amber for tourists. The fiestas are real. The flamenco is danced by people who feel it. The ham is sliced by people who have been doing it for decades. The late dinners happen because Spanish people actually eat late, not because a hotel staged it for atmosphere. This authenticity—unforced, unpackaged, and occasionally inconvenient for visitors who want everything on a schedule—is Spain's most valuable luxury. No amount of thread count or concierge service can replicate the experience of sitting at a bar in San Sebastián at midnight, eating the best food you have ever tasted, surrounded by locals doing exactly the same thing they would be doing whether you were there or not. Spain does not perform for visitors. It simply is, and it invites you to join.`,
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
  console.log(`Starting Apr 3 seed — Portugal + Spain destination guides...`);

  for (const destination of destinations) {
    await pool.query(insertDestinationQuery, [
      randomUUID(), destination.slug, destination.name, destination.country,
      destination.region, destination.hero_image, destination.intro_md,
      destination.best_time, destination.content_md, destination.published
    ]);
    console.log(`Inserted destination: ${destination.name}`);
  }

  console.log(`Apr 3 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
