import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// APR 24 — BEST SPA HOTELS IN EUROPE + BEST HOTELS IN EUROPE: THE DEFINITIVE GUIDE
// Week 7: Swiss Alps + Europe roundup
// ============================================================================

const articles = [
  {
    title: `Best Spa Hotels in Europe`,
    slug: `best-spa-hotels-in-europe`,
    category: `roundup`,
    subtitle: `The European addresses where the spa is not a token basement add-on but the real emotional engine of the stay.`,
    hero_image: `https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1600`,
    content_md: `# Best Spa Hotels in Europe

Europe has enough luxury hotels with polished treatment menus and cucumber water to fill a small continent of their own. Most of them are not true spa hotels. They are hotels with spas attached, which is a different proposition entirely.

A real spa hotel changes the rhythm of your stay. It makes time feel slower. It gives the body a reason to exhale before the brain has caught up. It understands that thermal circuits, pools, steam, mountain air, silence, and the quality of light matter just as much as facials with improbably expensive serums. The best ones do not treat wellness as decorative programming for stressed bankers. They build the whole experience around repair.

Europe does this particularly well because it has the raw ingredients. Thermal water in old imperial spa towns. Alpine air that makes city lungs feel fraudulent. Coastal climates that invite long walks and long lunches in equal measure. Generations of bathing culture. Architectural traditions that understand retreat not as sterile minimalism but as atmosphere, ritual, and duration.

What follows is not a list of hotels with nice robes. It is a list of places where the spa feels central to the proposition, where I would actively choose the property because of how it makes the body feel, not merely because the suites photograph well. Some are urban sanctuaries. Some are mountain institutions. Some are old-money hideaways in landscapes that do half the therapeutic work for free. All are worth knowing.

## What Actually Makes a Great European Spa Hotel

First, the spa has to be more than a corridor of treatment rooms. If all you have is a massage menu and a softly spoken therapist, you have a service, not a spa destination. The best properties build layers into the experience: pools worth lingering in, thermal areas that feel architecturally resolved, spaces for silence, and enough room that the whole thing does not collapse into a damp queue in matching slippers.

Second, context matters. Some hotels borrow wellness language as a branding exercise while doing nothing with the place they occupy. The stronger properties use the destination itself. In the Alps, that means mountain air, snow, and the contrast between cold outdoors and deep internal warmth. In city hotels, it means offering genuine decompression against urban intensity rather than simply pretending the traffic outside does not exist. In old spa regions, it means taking the water and bathing culture seriously rather than treating them as a quaint backstory for Instagram captions.

Third, service has to understand pace. A great spa stay dies quickly when everything else around it feels rushed or managerial. You want staff who can be exact without breaking the spell. The best spa hotels understand that wellness is often less about treatment quality alone than about the removal of small frictions: robes that arrive on time, tea that tastes of something, lunch that is clean and satisfying rather than pious, a room quiet enough that post-treatment drowsiness can turn into sleep instead of irritation.

## 1. Badrutt's Palace, St Moritz, Switzerland

At first glance, Badrutt's Palace may seem like an odd candidate for a spa ranking because it is better known as a grand alpine institution than as a modern wellness temple. But that is exactly why it works. The hotel's restoration and spa offering understand something many newer wellness resorts miss: spa culture does not have to be beige, solemn, and humorless to be effective.

The palace sits above Lake St Moritz with one of the great mountain-hotel outlooks in Europe. In winter, the cold outside becomes part of the whole physical logic of the stay. You ski, walk, or simply breathe the hard Engadin air, then return to a spa environment that feels deeply earned. Pools, saunas, treatments, and rest spaces all benefit from the surrounding climate. Warmth here is not a decorative setting on a thermostat. It feels medicinal.

What makes Badrutt's especially appealing is that it pairs spa pleasure with the social confidence of an old grand hotel. You can do a proper thermal-and-treatment morning, disappear into a robe, then dress for dinner in a room that still believes hotels should have some glamour after dark. That combination is rarer than it should be. Too many wellness properties make you feel as though enjoyment itself might set back your progress.

Badrutt's never makes that mistake. It allows for pleasure and repair in the same trip. If you want your spa hotel to feel quietly monastic, choose elsewhere. If you want wellness with altitude, polish, and a little grand-hotel voltage, this is one of Europe's strongest options.

## 2. The Dolder Grand, Zurich, Switzerland

The Dolder Grand is one of the best examples in Europe of how a city-adjacent hotel can use spa infrastructure to become far more than a smart address. Set above Zurich rather than in the middle of it, the property gains precisely the psychological distance a serious spa stay needs. You are close enough for convenience, far enough for the city to loosen its grip.

The spa is large by European urban standards and, crucially, designed with real breadth. There are pools that invite actual time rather than symbolic dipping, thermal experiences that feel coherent instead of improvised, and treatment spaces that match the building's broader confidence. The Dolder's advantage is that it never feels like a wellness brand cosplaying as a hotel. It feels like a proper luxury hotel that has invested heavily and intelligently in physical restoration.

That matters because the rest of the stay supports the spa rather than merely surrounding it. Rooms are spacious and calm. The hillside setting adds air, light, and a useful sense of removal. Service is efficient in the Swiss way, which suits a spa property better than one might think. There is something deeply soothing about staff who understand logistics, temperature, and timing.

If your idea of a spa trip includes cultural access, easy airport reach, and the possibility of slipping between urban activity and bodily repair without major friction, The Dolder Grand is hard to fault. It is one of the few city spa hotels in Europe I would recommend even to people who think they dislike city spa hotels.

## 3. Chenot Palace Weggis, Switzerland

If Badrutt's and The Dolder prove that classic luxury and wellness can coexist, Chenot Palace Weggis represents the other end of the spectrum: the health-first European medical-wellness retreat taken seriously and executed at very high level.

This is not the place for three martinis and a late tasting menu. It is the place for diagnostics, programs, discipline, and the sort of body-focused reset that begins to border on strategy. Some travelers will find that thrilling. Others will find it oppressive. I think honesty matters here. Chenot is excellent, but it is not trying to flatter everybody.

What it does exceptionally well is integrate medicalized wellness into a property that still feels luxurious rather than clinical. The setting on Lake Lucerne is calm and beautiful. The treatment and assessment infrastructure is serious. The food is precise without becoming punitive. And the whole operation is built around outcomes rather than vibes.

I would not send every traveler here. But if someone says they do not want a pretty hotel with a spa, they want a structured, high-end reset in Europe where wellness is the whole point, Chenot Palace Weggis belongs near the top of the conversation.

## 4. Lanserhof Sylt, Germany

Lanserhof Sylt is another place where wellness moves from accessory to governing principle. The design is austere in a way that will divide opinion, but the seriousness of the operation is undeniable. Set on the island of Sylt, with its long beaches, sea air, and slightly severe northern beauty, the property uses landscape well. You feel stripped back rather than pampered into oblivion.

The treatments, diagnostics, movement programs, and nutritional philosophy are all part of a highly structured system. This is a place for people who enjoy the idea of being rebuilt. It is not lush, and it is not trying to be. But that exactness is its appeal. Europe remains very good at this form of disciplined wellness, where the end goal is not only relaxation but measurable improvement.

If you want softness, choose one of the Alpine hotels. If you want a sharper intervention, Lanserhof Sylt is among the strongest names in the field.

## 5. Lefay Resort & SPA Lago di Garda, Italy

Lefay understands one of the oldest truths in hospitality: when the landscape is this calming, the hotel should not interrupt it. Above Lake Garda, with broad views and enough distance from the busier shoreline zones, the resort creates a softer, more breathable kind of European spa experience than the Swiss heavyweights.

The spa is extensive and integrated with the hillside setting. Pools, saunas, and treatment areas all feel tied to the view and the air beyond the glass. The whole property leans into slowness without becoming sanctimonious about it. That is harder than it sounds. Plenty of wellness resorts confuse serenity with self-righteousness.

Lefay is particularly strong for couples or tired professionals who want to come back better rested rather than morally improved. You eat well, move gently, take the treatments seriously enough, and let Lake Garda do the rest. There are stricter wellness resorts in Europe, and more glamorous ones too. Few are as consistently pleasant to inhabit.

## 6. Euphoria Retreat, Greece

Euphoria Retreat is one of the few newer European wellness properties that feels genuinely thought through rather than merely assembled from current spa language. In the Peloponnese, away from the frantic tourism circuits that dominate much of Greek luxury, it builds a more immersive reset around holistic health, movement, and emotional repair.

The architecture matters here. The spherical interiors, Byzantine references, warm materials, and softly theatrical thermal areas give the retreat an identity of its own. Too many wellness hotels now flatten themselves into the same pale-toned neutrality. Euphoria at least takes a position.

The programming can lean more spiritually expansive than some travelers want, but for guests open to that register, the property offers a level of intention and immersion that many Mediterranean spas never reach. It is especially good for people who want a wellness trip that feels like an actual pause in life rather than a nice hotel with a better massage menu.

## 7. Corinthia London, United Kingdom

Corinthia London remains one of Europe's strongest urban spa hotels because the ESPA Life complex is not an afterthought buried beneath a business hotel. It is a proper wellness engine in the center of one of the noisiest, most overstimulating cities in Europe.

London usually defeats spa logic. The city is too hurried, too distracted, too fond of scheduling dinner three hours after a deep-tissue massage. Corinthia solves this by making the spa large and atmospheric enough to create genuine separation. The thermal floor, pool, treatment rooms, and overall design have a confidence many city spas lack. You do not feel as though you are hiding in a basement trying to forget Whitehall exists. You feel that the hotel has built a parallel climate.

It helps that the rooms are large by London standards and the service is reliable. A spa stay only works when the rest of the hotel does not undermine it. Corinthia gets that. If you need a London weekend that includes restoration rather than just expenditure, this is still the best call in the city.

## 8. Palazzo Fiuggi, Italy

Palazzo Fiuggi sits in one of Italy's classic spa-water regions and uses that heritage intelligently. The building brings old grandeur; the program brings modern health ambition. Like Chenot and Lanserhof, this is a more purpose-led wellness destination than a conventional luxury hotel with extra thermal facilities.

The draw is the integration of medical expertise, nutrition, movement, and recovery in a setting that still has elegance. You are not in a clinic. But neither are you in a place pretending a sea-salt scrub alone counts as transformation. There is seriousness here, and for the right guest that seriousness is exactly the luxury.

Europe remains ahead of much of the world in this specific category of health-driven palace wellness. Palazzo Fiuggi proves why. It takes a classic setting and gives it modern utility.

## How to Choose the Right One

If you want **grand-hotel glamour plus real wellness**, go to **Badrutt's Palace**.

If you want **the best city-adjacent luxury spa balance**, choose **The Dolder Grand**.

If you want **structured medical-style reset**, look first at **Chenot Palace Weggis**, **Lanserhof Sylt**, or **Palazzo Fiuggi**.

If you want **soft scenery, couples' calm, and a more romantic pace**, **Lefay Lago di Garda** is a lovely answer.

If you want **urban restoration in London**, **Corinthia** is still the benchmark.

If you want **a more immersive holistic retreat in the Mediterranean**, **Euphoria Retreat** deserves attention.

## The Verdict

The best spa hotels in Europe are not unified by a single design style or wellness philosophy. What unites them is seriousness. They understand that rest requires infrastructure, not slogans. They treat water, heat, air, silence, movement, and timing as core materials of hospitality. They know a spa is not a marketing department with a flute soundtrack. It is an operating system for how a stay feels in the body.

My personal shortlist would begin with **Badrutt's Palace**, **The Dolder Grand**, **Lefay Resort & SPA Lago di Garda**, and **Corinthia London**, because they combine proper luxury-hotel pleasure with genuinely useful wellness infrastructure. If the brief becomes more medical, more structured, or more transformative, then **Chenot Palace Weggis**, **Lanserhof Sylt**, and **Palazzo Fiuggi** come sharply into focus.

Europe remains the strongest region in the world for this category because it never had to invent bathing culture from scratch. It simply had to stop cheapening it. At the best addresses, it has remembered how to do that beautifully.`,
    hotels_mentioned: [`badrutts-palace`, `dolder-grand`, `corinthia-london`],
    featured: 1,
    published: 1
  },
  {
    title: `Best Hotels in Europe: The Definitive Guide`,
    slug: `best-hotels-in-europe-the-definitive-guide`,
    category: `roundup`,
    subtitle: `From Mayfair grandees to alpine palaces, clifftop retreats, and lakefront legends, the European hotels that still justify obsession.`,
    hero_image: `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600`,
    content_md: `# Best Hotels in Europe: The Definitive Guide

Europe is the easiest continent in the world on which to stay very well and the hardest on which to choose correctly. There is simply too much history, too much inherited glamour, too much coastal light, too many mountain views, too many famous addresses still trading on one excellent decade in the 1960s, and too many new hotels mistaking expensive stone for character.

So the question is not whether Europe has great hotels. Of course it does. The question is which ones still feel alive, specific, and worth crossing a border for.

I am not interested in making a democratic list full of safe names included merely because everyone else includes them. A definitive guide should make distinctions. Some hotels matter because they define a city. Some matter because they frame a landscape so perfectly that the trip would lose its shape without them. Some matter because the service remains so far ahead of the market that staying elsewhere begins to feel like a false economy. And some matter because they still have a point of view in an era where luxury often settles for polished neutrality.

This guide covers the European hotels I would most readily recommend to travelers who care not just about thread count and square footage but about mood, memory, and the sense that a place could not be anywhere else.

## London: Where the Grand Hotel Still Has Teeth

If I had to pick one European city that still understands the emotional power of hotels better than anywhere else, I would pick London. Paris has seduction, Rome has drama, Venice has delirium, but London has hotel culture. People in London still meet in hotel bars, still judge addresses, still care which lobby tells what kind of story.

### Claridge's

Claridge's remains the grand old answer for a reason. The checkered lobby floor, the floral scent, the art deco confidence, the staff who understand ritual without turning it into theatre for tourists, all of it still works. It is one of the few famous hotels in Europe that can survive its own reputation. More importantly, it still feels like a hotel rather than a luxury monument with room keys.

What Claridge's does especially well is make tradition feel inhabited rather than embalmed. The rooms are elegant, the service is deeply practiced, the public spaces carry charge, and the whole property understands that luxury should feel specific. If you want to understand the European grand-hotel tradition at full volume, start here.

### The Connaught

The Connaught is the more restrained sibling, the hotel for travelers who prefer calm power to visible glamour. I often recommend it to people who say they want the best service in London but would rather not feel they are living inside someone else's photo shoot. The design is quieter, the mood more composed, and the Connaught Bar alone is enough to justify serious affection.

This is one of Europe's finest examples of understatement done properly. Not timid. Not plain. Controlled. That distinction matters.

### The Berkeley

The Berkeley earns its place because it brings a more contemporary London energy without sacrificing standards. The rooftop pool remains a rarity in the city, the dining is strong, and the whole hotel feels more current than heritage-heavy rivals. For fashion-week London, shopping-heavy London, or travelers who want polish without period-drama overtones, it is a shrewd choice.

## Paris and the Myth of Easy Excellence

Paris has more famous palace hotels than almost anywhere in Europe, but fame is not enough. The city is full of properties trading on address and floral abundance. The best ones still create atmosphere, not merely expensive reassurance.

I would readily send classicists to **Hôtel Plaza Athénée** for the full fashion-fantasy version of Paris, and romantics to **Le Bristol** for service warmth and left-bank escape energy in a right-bank shell. **Cheval Blanc Paris** is the modern heavyweight if money is irrelevant and you want a newer interpretation of Paris luxury with genuinely excellent river-facing drama. But the broader rule matters more than any one name: in Paris, choose a hotel that suits the version of the city you want. Grandeur here can turn cold quickly if the fit is wrong.

## The Alps: Hotels That Understand Weather, Ritual, and Appetite

Europe's great mountain hotels remain one of the continent's clearest competitive advantages. The Alps produce a kind of hospitality that pairs logistics with atmosphere, which is exactly what serious winter or summer mountain travel requires.

### Badrutt's Palace, St Moritz

Badrutt's Palace belongs on any serious European list because it does something almost nobody else manages now: it combines old-world society-hotel confidence with enough genuine comfort and self-awareness to remain fun rather than fossilized. The setting above the lake is magnificent, the winter rhythm is deeply satisfying, and the hotel still knows how to create evenings, not just overnight stays.

For skiers, celebratory families, and anyone who likes their mountain trip sharpened by a little dressing-for-dinner energy, Badrutt's remains the benchmark.

### The Dolder Grand, Zurich

The Dolder is not alpine in the strict postcard sense, but it earns European-best status because of how cleverly it balances city access, space, art, and wellness. Some hotels are useful. Some are memorable. The Dolder manages both. If I needed a Swiss hotel for a short restorative break with impeccable operating standards, it would be very near the top.

## The Lakes: Italy at Its Most Persuasive

Italian lake hotels can be dangerous because beauty covers many sins. A mediocre hotel with a stupendous view still risks fooling people into calling the stay transcendent. The best properties do not need the help.

### Grand Hotel Tremezzo, Lake Como

Grand Hotel Tremezzo is one of Europe's easiest hotels to love because it understands pleasure in a direct, adult way. The floating pool, the terrace views, the unapologetic color, the old-school service, the feeling that lunch should absolutely slide into aperitivo, all of it feels gloriously unembarrassed.

It avoids the trap of becoming too precious. Tremezzo knows Como is beautiful and decides, sensibly, to enjoy that fact rather than solemnize it. For many travelers, it is the right first answer on Lake Como.

### Belmond Hotel Splendido, Portofino

Splendido operates in a more cinematic register. Perched above Portofino, with terraced gardens and one of the Mediterranean's most mythologized village views, it delivers the glamorous Riviera fantasy better than almost anywhere. It is not the place for affordability or democratic charm. It is the place for believing, briefly, that the good life should involve linen, boats, and a room with a harbor view.

## Spain and Portugal: The Peninsula of Brilliant Contrasts

I think Spain remains undervalued by luxury travelers who default lazily to France and Italy. The country offers extraordinary range, stronger hotel scenes than many outsiders realize, and a seriousness about food, landscape, and regional identity that rewards repeat visits.

### Cap Rocat, Mallorca

Cap Rocat is one of Europe's most distinctive stays because the physical structure is so unusual. A former military fortress above the Bay of Palma should by all rights feel severe. Instead it feels private, dramatic, and seductively still. The architecture does half the work; the service and atmosphere do the rest.

This is a hotel for travelers who want romance without sugary softness, for people who prefer stone, shadow, and sea wind to overt decorative charm.

### Six Senses Douro Valley, Portugal

Portugal's hotel scene has sharpened dramatically over the last decade, and Six Senses Douro Valley remains one of its clearest standouts. The location amid terraced vineyards, the spa-and-wine-country balance, and the sense of rural calm all land beautifully. It is luxurious without losing the Douro's agricultural reality, which matters more than many designers seem to realize.

### Reid's Palace, Madeira

Reid's Palace earns its European place through longevity, setting, and old-fashioned confidence. Madeira is still ignored by too many luxury travelers, which is their mistake. The Atlantic light, the gardens, the cliffside perch, the unhurried rhythm, this is the sort of hotel that makes overprogrammed itineraries look childish.

## Greece: Hotels That Know the Value of Light

Greek luxury works best when the architecture understands the light and refuses to overcomplicate the setting.

### Amanzoe, Peloponnese

Amanzoe remains one of Europe's great retreat hotels. The hilltop acropolis concept, the olive groves, the disciplined stillness, and the way the property frames the Peloponnesian landscape all create something that feels both ancient and radically modern. It is expensive, remote, and not for people who need bustle. That is exactly why it is so good.

### Canaves Oia Epitome and Grace Hotel Santorini

Santorini can be vulgar very quickly. The island's beauty attracts a lot of nonsense. Canaves Oia Epitome and Grace Hotel Santorini both work because they understand restraint. They let the caldera and the whitewashed geometry do the seduction. If you insist on Santorini at luxury level, these are the sort of names worth filtering toward.

## The Mediterranean Riviera: For When Glamour Is the Brief

### Cheval Blanc St-Tropez

St-Tropez is easy to dismiss and harder to replace. When done properly, the town still offers one of Europe's best combinations of beach ease and social voltage. Cheval Blanc St-Tropez is the cleanest high-end answer because it pairs a genuinely attractive beach location with service sharp enough to keep the whole thing from dissolving into vanity.

This is not a deeply soulful hotel. It is a very polished one in a town where polish counts. That can be enough.

## How to Think About the "Best" in Europe

A definitive guide should not pretend that a single hotel can be best for every traveler. Europe is too varied for that. So I would break the continent's strongest hotels down like this:

- For **grand-hotel London**, choose **Claridge's** or **The Connaught**.
- For **alpine glamour**, choose **Badrutt's Palace**.
- For **Swiss spa-and-city balance**, choose **The Dolder Grand**.
- For **Italian lakes pleasure**, choose **Grand Hotel Tremezzo**.
- For **Riviera romance**, choose **Belmond Hotel Splendido**.
- For **architectural drama in Spain**, choose **Cap Rocat**.
- For **wine-country restoration**, choose **Six Senses Douro Valley**.
- For **Atlantic old-world escape**, choose **Reid's Palace**.
- For **serious retreat in Greece**, choose **Amanzoe**.
- For **Mediterranean social glamour**, choose **Cheval Blanc St-Tropez**.

## The Personal Shortlist

If you forced me to choose the European hotels I would recommend most often across very different moods, the shortlist would be:

### Claridge's
Because it proves the grand hotel is not dead, only often imitated badly.

### The Connaught
Because restraint, when done at this level, is one of the most convincing luxuries there is.

### Badrutt's Palace
Because very few hotels anywhere understand weather, appetite, and occasion so well.

### Grand Hotel Tremezzo
Because it makes pleasure look intelligent.

### Amanzoe
Because silence, space, and architectural control can still feel radical.

### Cap Rocat
Because no other European hotel stages romance with quite the same severity and beauty.

## The Verdict

The best hotels in Europe do not share one aesthetic. Some are floral and theatrical. Some are severe and monastic. Some are old palaces built for display. Some are contemporary retreats designed to remove noise. What they share is conviction. They know what mood they are creating and they do not apologize for it.

That, to me, is what separates the truly great from the merely expensive. Great European hotels still believe hospitality can shape the emotional weather of a trip. They understand breakfast as ritual, bars as social architecture, views as part of memory, and service as a way of reducing life's stupid little abrasions.

If you want the safest possible luxury, Europe can provide plenty of that too. But the hotels worth crossing the continent for are the ones with edge, atmosphere, and an understanding that elegance is not the same thing as neutrality. The best of them still leave marks. That is why they matter.`,
    hotels_mentioned: [
      `claridges`,
      `the-connaught`,
      `the-berkeley`,
      `badrutts-palace`,
      `dolder-grand`,
      `grand-hotel-tremezzo`,
      `belmond-hotel-splendido`,
      `cap-rocat`,
      `six-senses-douro-valley`,
      `reids-palace`,
      `amanzoe`,
      `canaves-oia-epitome`,
      `grace-hotel-santorini`,
      `cheval-blanc-st-tropez`
    ],
    featured: 1,
    published: 1
  }
];

const articleColumns = [
  `id`, `slug`, `title`, `subtitle`, `category`, `hero_image`, `content_md`,
  `hotels_mentioned`, `published`, `featured`
];

const insertArticleQuery = `INSERT INTO articles (${articleColumns.join(`, `)}) VALUES (${articleColumns.map((_, i) => `$${i + 1}`).join(`, `)}) ON CONFLICT (slug) DO NOTHING`;

const seed = async () => {
  console.log(`Starting Apr 24 seed...`);
  console.log(`Articles to insert: ${articles.length}`);

  for (const article of articles) {
    await pool.query(insertArticleQuery, [
      randomUUID(), article.slug, article.title, article.subtitle, article.category,
      article.hero_image, article.content_md, JSON.stringify(article.hotels_mentioned),
      article.published, article.featured
    ]);
    console.log(`✅ Inserted article: ${article.title}`);
  }

  console.log(`Apr 24 seed complete! 2 articles published.`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
