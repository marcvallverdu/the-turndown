import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// APR 10 — WHY EVERY LUXURY HOTEL LOOKS THE SAME NOW + ROYAL MANSOUR VS LA MAMOUNIA
// Week 5: Morocco + Africa
// ============================================================================

const articles = [
  {
    title: `Why Every Luxury Hotel Looks the Same Now`,
    slug: `why-every-luxury-hotel-looks-the-same-now`,
    category: `essay`,
    subtitle: `The beige conspiracy of oak, travertine, silent playlists, and wellness language, and why so many expensive hotels now feel like copies of a copy.`,
    hero_image: `https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600`,
    content_md: `# Why Every Luxury Hotel Looks the Same Now

Walk into enough newly opened luxury hotels and a strange thing happens. You begin to feel you have already checked in.

Not metaphorically. Literally. The same pale oak. The same matte stone. The same giant dried branch in a vessel heavy enough to survive artillery. The same low sofa in a fabric the marketing team will call oatmeal, mushroom, parchment, or sand, as if the problem were not sameness but insufficiently poetic naming. The same soundtrack of almost-music. The same spa language about grounding and rituals and intention. The same restaurant menu where local ingredients are treated with global technique and everyone involved seems afraid of butter.

Luxury hotels used to compete on personality. Now many of them compete on the absence of offense. The result is an international aesthetic of studied calm that has spread from resorts in the Cyclades to towers in Tokyo to vineyard retreats in California to new safari lodges in places where safari lodges once had the decency to look like they belonged to the landscape rather than to a premium skincare brand. A modern high-end hotel is likely to be tasteful, expensive, and thoroughly unobjectionable. It is also increasingly likely to be forgettable.

## The Rise of Luxury Beige

The dominant style of the last decade is easy to recognize and annoyingly hard to criticize without sounding like you object to good lighting and natural materials. The palette is pale but not white. The wood is limed or smoked. The stone is matte, porous-looking, and expensive enough to imply restraint rather than shout it. Lighting is warm, indirect, and flattering in that democratic way modern hotels love, where every guest is granted the complexion of someone who sleeps eight hours and drinks more water than wine. The room smells faintly of fig leaf, cedar, or a custom fragrance called something like Quiet Air.

None of this is bad on its own. That is part of the problem. Contemporary luxury sameness is built out of individually sensible decisions. Guests like calm spaces. Designers know that heavy pattern dates faster than clean lines. Owners want rooms that photograph well on Instagram, age decently, and offend nobody spending $1,400 a night. Beige won because beige is low risk. It flatters skin tones, it survives trends, and it travels well across markets.

But add together ten sensible decisions made by ten different hotel groups under ten different creative directors all reading the same mood boards, and you get a monoculture. The issue is not that these hotels are ugly. Many are beautiful. The issue is that beauty without point of view becomes a kind of visual Muzak. Pleasant. Professional. Empty in the memory.

## The Pinterest-ification of Taste

Part of the blame belongs to the internet, and specifically to the way visual culture now circulates. Twenty years ago, a hotel designer might have been inspired by architecture, local craft, cinema, old houses, or a slightly mad patron with strong preferences. Now inspiration is filtered through image platforms, brand decks, hospitality trend reports, and the soft tyranny of what performs well in a feed.

If one hotel in Mallorca proves that linen-colored daybeds against plaster walls perform beautifully online, twenty more will appear in Tulum, Napa, and Paros within eighteen months. If a Japanese ryokan influence works in a city spa hotel, suddenly every developer wants oak slats, paper screens, and a bathing ritual whether or not the destination has any relationship to Japan beyond a fondness for minimalist references. Local context survives only if it can be translated into this shared premium language.

This is how design stops being expressive and becomes legible. Hotels are now built not just to be inhabited but to be understood instantly in photographs. A guest should be able to post one image of a tub, a robe, and a stone wall and have their audience grasp the intended message at once: expensive, serene, tasteful, desirable. What gets lost is surprise. Surprise is difficult to standardize. It can also be ugly before it becomes beloved, which is unacceptable when your sales strategy depends on pre-opening press coverage and influencer soft-launches.

## Owners Want Certainty, Not Character

Developers will talk warmly about authenticity and storytelling, but what most of them really want is yield. That is not a moral criticism, only an operational truth. Hotels are expensive assets, and owners want design choices that protect rates, appeal to international travelers, and reduce the chance of looking dated in five years. Strong personality introduces volatility. A hotel with conviction can become iconic. It can also become divisive.

The great old hotels, the ones people still talk about with affection, often contain elements that would never survive a contemporary approval process. Their lobbies are too dark or too loud. Their rooms are eccentric in layout. Their fabrics have opinions. Their bars are built for adults rather than content capture. Their color schemes assume a guest might have emotional resilience. They risk bad photographs in daylight because they are designed for atmosphere at night.

Today's institutional preference is for something smoother. If you can make a hotel feel faintly Scandinavian, faintly Japanese, faintly Mediterranean, faintly wellness-oriented, and entirely inoffensive to a global premium customer, you have created an asset class rather than a destination. The hotel may even be excellent in service, comfort, and food. But the physical experience has been engineered to remove friction, and in removing friction it often removes character too.

## The Tyranny of the Wellness Vocabulary

Design sameness is not only visual. It is linguistic. Read enough luxury hotel copy and you begin to suspect the entire industry now shares one consciousness. Every spa is immersive. Every treatment is restorative. Every stay is intentional. Every menu celebrates seasonality. Every suite is a sanctuary. Every scent is grounding. Every staff interaction is somehow both intuitive and personalized, as though no concierge in history has ever simply been competent.

This language matters because it shapes the spaces themselves. Hotels increasingly build for a narrow idea of how a premium guest wants to feel: soothed, purified, slowed down, reset. Even urban hotels now aspire to be sanctuaries. The result is that properties in fundamentally different cities often express the same emotional pitch. London whispers. Bangkok whispers. Mexico City whispers. New York, astonishingly, now whispers whenever a luxury developer gets hold of enough limestone and a consultant with a meditation app.

There is nothing wrong with calm. I like calm. But constant calm is deadening. A great hotel should sometimes exhilarate, seduce, provoke appetite, sharpen your senses, or make you feel gloriously over-dressed. It should not always behave like a retreat designed for someone recovering from an email-related injury.

## Brand Expansion Has Flattened the Edges

Another reason luxury hotels look the same is that the brands themselves have become more similar. Groups that once stood for distinct things now borrow from one another with astonishing shamelessness. A heritage grand-hotel brand wants to feel younger and more wellness-driven. A formerly minimalist Asian brand wants a little more warmth and social energy. A party-adjacent lifestyle group wants legitimacy through serious design. Everyone raids everyone else's best ideas until the differences are managerial rather than emotional.

When expansion accelerates, distinctiveness usually weakens. The first hotels in a brand are often the purest because they are solving a specific problem for a specific audience. By hotel number fifteen or thirty, the proposition becomes harder to articulate. So the brand leans on broad luxury indicators that travel well: noble materials, restrained palettes, artisanal references, spa seriousness, destination dining, and staff trained to say welcome home in a tone suggesting nobody has ever weaponized that phrase before.

This is especially obvious in resort markets. Whether you are on an island in Greece, a clifftop in Bali, or a desert edge in the Gulf, the same design grammar now appears with minor local substitutions. One region gets woven lanterns. Another gets volcanic stone. Another gets more olive trees in the arrival sequence. But the emotional architecture is identical. Cool arrival. Silent suite. Oversized tub. Treatment room. Firepit. Listening bar or chef's counter. Repeat.

## Local Craft Has Been Reduced to Texture

The saddest part is how often genuinely rich local traditions are reduced to mood. Many of the destinations now full of luxury sameness have extraordinary design languages of their own. Morocco has zellige, carved cedar, tadelakt, color, shadow, geometry, and a long understanding of how architecture manages heat and privacy. India has enough decorative and material intelligence to sustain a century of hotel design without repeating itself once. Mexico offers stone, pigment, craft, regional modernisms, and indigenous traditions that deserve more than occasional pottery in a niche.

Yet contemporary luxury often takes the easiest extractive route. Local craft becomes surface seasoning applied over a global hospitality template. A woven object here, a handmade bowl there, perhaps one hero wall behind reception to assure the guest that the destination has been respectfully acknowledged. What disappears is structure, not just ornament. Hotels borrow the texture of place while refusing the discipline of place.

That is why the most memorable luxury properties now feel so refreshing. Royal Mansour in Marrakech is unforgettable because it uses Moroccan craft as the architecture itself, not as decorative garnish sprinkled over international luxury logic. La Mamounia works because it still believes in glamour with local perfume. Raffles Singapore remains itself because its colonial bones and rituals have not been sanded down into generic premium calm. These hotels may be imperfect, but at least they risk being specific.

## Social Media Rewards Consensus Beauty

We should also admit that guests are complicit. Many travelers say they want originality, but a huge number actually want recognizable luxury. They want to know, before arrival, what the robe will feel like, what the breakfast terrace will look like, and what sort of self they will be able to perform inside the property. The same visual cues that bore seasoned travelers reassure occasional luxury buyers. Familiarity signals safety.

Social media amplifies this tendency. Consensus beauty travels further than idiosyncratic beauty because it requires less explanation. You do not need a caption to understand a freestanding tub facing a neutral stone wall. You do need a caption, or at least a more cultivated eye, to appreciate a lacquered 1920s bar, a deeply patterned suite, or a hotel dining room that looks slightly disreputable at noon and magnificent at midnight. Safe beauty wins because it compresses well.

That does not mean travelers are shallow. It means digital platforms privilege immediate legibility over slow affection. Many of the world's best hotel interiors are spaces that improve after an hour, a cocktail, or the right weather. Algorithms are not built for that. They are built for the thumbnail.

## Why This Matters

Some will say this is all snobbery, that if the bed is good and the shower pressure strong, who cares whether the travertine resembles every other slab of travertine from here to the Dolomites. Fair enough. Comfort matters. There are worse problems in the world than elegant hotels being slightly repetitive.

But sameness matters because hotels shape the emotional texture of travel. A truly great hotel does more than remove inconvenience. It teaches you something about where you are, heightens certain senses, introduces a tempo, and leaves behind a memory that could not have happened elsewhere. When every property speaks the same visual and emotional language, travel risks becoming a series of interchangeable acts of consumption against different skies.

Luxury is supposed to buy access to distinction. If it only buys more expensive sameness, then something has gone wrong. The point of paying premium rates in a city or landscape with its own history should not be to enter an atmosphere that could be rebuilt at an airport-adjacent wellness resort three continents away.

## What the Best Hotels Still Understand

The most memorable luxury hotels today are not necessarily the most modern or the most expensive. They are the ones with nerve. They choose a mood and commit to it. They allow themselves darkness, color, wit, asymmetry, noise, seduction, even a little impracticality. They understand that elegance is not the same as neutrality.

Some of this comes from old buildings with strong bones and inherited rituals. Some comes from owners or designers willing to resist trend compliance. Some comes from a confidence that not every guest needs to be pleased in exactly the same way. A hotel can be magnificent and still be divisive. In fact, that is often the price of memorability.

The best luxury hotels also understand that local identity is not a procurement exercise. You do not create a sense of place by ordering more handmade baskets. You create it by letting the destination shape the architecture, the light, the rhythms of the day, the menu, the social life, and the scale of the spaces. You let local craft do more than accessorize. You let it govern.

## The Way Out of Sameness

The cure is not maximalism for its own sake, nor some reactionary return to tassels, marble everywhere, and chandeliers with delusions of empire. The cure is courage.

Owners need to tolerate design with more personality. Designers need to stop pretending restraint is inherently superior to expression. Brand teams need to write like adults and stop using sanctuary as if sleep itself were a breakthrough innovation. And guests, if they really want more distinctive hotels, need to reward specificity with bookings rather than punishing it for being less instantly familiar.

I do not want every luxury hotel to become loud. I simply want more of them to be themselves. A city hotel in New York should feel different from a clifftop resort in the Cyclades, not merely denser in traffic and more expensive at checkout. A desert camp should not look like a Malibu wellness bungalow with woven lighting. A palace in Marrakech should not apologize for pattern in the name of global tastefulness.

The tragedy of modern luxury sameness is not that it is ugly. It is that it is often so pretty, so competent, and so professionally assembled that people forget to ask for more. But travel is richer when places leave marks. The hotels worth remembering are still the ones with a point of view strong enough to survive the market research.

Everything else is just very expensive beige.`,
    hotels_mentioned: [],
    featured: 1,
    published: 1
  },
  {
    title: `Royal Mansour vs La Mamounia: Marrakech Privacy or Marrakech Glamour?`,
    slug: `royal-mansour-vs-la-mamounia`,
    category: `versus`,
    subtitle: `Two of Marrakech's greatest hotels, one built like a private medina for disappearing, the other staged like a grand seduction for being seen.`,
    hero_image: `https://images.unsplash.com/photo-1548013146-72479768bada?w=1600`,
    content_md: `# Royal Mansour vs La Mamounia

Marrakech has many beautiful hotels, but only two feel like arguments. Royal Mansour and La Mamounia are not merely the city's best-known luxury addresses. They are rival interpretations of what high-end hospitality in Marrakech should be.

Royal Mansour says luxury is privacy, craftsmanship, and control. It takes the visual language of the medina, strips out the friction, and rebuilds it with king-level funding and almost unnerving precision. La Mamounia says luxury is atmosphere, glamour, and social electricity. It takes the fantasy of Marrakech, perfumes it, lights it from below, and pours you a drink before you have quite decided whether you wanted one.

Both are extraordinary. Both are expensive. Both make a strong case for never booking anywhere mediocre in this city again. But they are not interchangeable, and choosing between them is less about rates or even facilities than about mood. One hotel is for disappearing. The other is for surrendering to the scene.

## The Core Difference

If you remember one thing, let it be this.

**Royal Mansour is a private world. La Mamounia is a public dream.**

At Royal Mansour, you stay in a three-storey riad hidden behind its own door, with staff moving through underground passages so discreetly that service feels conjured rather than delivered. The entire property is built around seclusion. Even when you are in a restaurant or the gardens, there is a sense that guests are distributed rather than displayed.

At La Mamounia, the shared spaces are part of the point. The arrival, the bars, the gardens, the glow of the corridors at dusk, the feeling that everyone has become slightly better dressed by cocktail hour, all of this is the product. You can absolutely hide here if you want to, but the hotel is at its best when you let it seduce you into being out among its rooms and rituals.

For some travelers this choice is immediate. If you value privacy above almost everything, book Royal Mansour. If you travel partly for atmosphere, people-watching, and old-school glamour, book La Mamounia. Most of the finer distinctions follow from that first one.

## Design and Sense of Place

**Royal Mansour** is a monument to Moroccan craftsmanship. Commissioned by King Mohammed VI, it was built by hundreds of artisans and the result is almost absurd in its level of finish. Zellige tile, carved cedar, bronze, plasterwork, lattice, fountains, courtyards, every element feels made rather than sourced. The hotel is less a single building than a miniature medina laid out as a luxury ecosystem. Because it is composed of private riads, gardens, and hidden paths, the architecture creates intimacy by default.

Importantly, the design does not treat Moroccan craft as decorative texture laid on top of international hotel logic. It is the architecture itself. That distinction is why Royal Mansour feels morally different from so many luxury properties that gesture vaguely toward local culture with a few baskets and a brave wall color. Here the craft does the structural work of the hotel.

**La Mamounia** offers a different, equally persuasive version of place. Its bones are those of a great 1920s grand hotel set within historic royal gardens, and Jacques Garcia's decorative language pushes everything toward sensual excess: lacquer, velvet, black marble, warm reds, lantern glow, polished surfaces that flatter skin and suggest vice without requiring it. Purists will complain that Garcia can be overripe. They are not wrong. They are also missing the fact that La Mamounia is supposed to feel rich, fragrant, and a little theatrical. Neutrality would ruin it.

In terms of pure craft and execution, Royal Mansour wins. In terms of atmosphere and emotional voltage, La Mamounia remains intoxicating.

## Rooms vs Riads

This is the clearest practical divide.

At **Royal Mansour**, you do not book a room. You book a riad. Even the entry categories unfold vertically across multiple levels, usually with a salon on the ground floor, bedroom above, and roof terrace on top. That changes everything. You have your own staircase, your own front door, your own sense of domestic retreat. The riad layout is not just luxurious. It changes how you inhabit the hotel. You are not one guest among many on a corridor. You are briefly the owner of a tiny, exquisitely made Marrakech house.

The upsides are obvious: privacy, quiet, architectural drama, and the pleasure of feeling hidden. The downside, if there is one, is that the experience is slightly less spontaneous. Royal Mansour encourages retreat so effectively that some guests may find themselves using the public spaces less than they expected.

At **La Mamounia**, the rooms are more conventional in layout, though hardly ordinary. The best ones face the gardens or Koutoubia Mosque and make clever use of light, rich fabrics, and that Garcia moodiness. Suites can be magnificent, and the hotel's private riads offer a much more Royal Mansour-like level of seclusion for those willing to pay heavily. But the standard room experience is still recognizably a grand-hotel room experience, not a full architectural reset of how you live during a stay.

If you care deeply about the accommodation itself, Royal Mansour has the stronger proposition. Its riads are among the most compelling accommodations in the world. La Mamounia's rooms are seductive, but they are not the primary reason the hotel is legendary.

## Public Spaces and Social Life

This is where **La Mamounia** strikes back hard.

Its public rooms are not filler between bedroom and breakfast. They are a social theatre of their own. The bars remain lively for a reason. The lounges are genuinely inviting. The garden paths encourage drifting. The whole hotel understands that luxury can be communal without becoming crowded. There is always another atmospheric corner, another low-lit room, another terrace, another possibility for a very good drink to turn into a surprisingly long evening.

It also helps that La Mamounia attracts a guest mix that gives the place pulse. Fashion people, old-money Europeans, well-heeled romantics, celebratory couples, and people who simply enjoy a grand hotel with conviction. When the property is in form, it feels alive in a way many modern luxury hotels do not.

**Royal Mansour's** public spaces are beautiful, but they are not its main seduction. The gardens are superb, the restaurants elegant, the spa almost sacred in its visual composition, yet the atmosphere is intentionally hushed. This is not the hotel you choose for a sense of scene. It is the hotel you choose when the idea of scene sounds exhausting.

If your favorite luxury hotels include bars you actually remember, La Mamounia probably has your number.

## Service Style

Both hotels deliver top-tier service, but the texture differs.

**Royal Mansour** is one of the most operationally impressive hotels anywhere. Service is astonishingly discreet, due partly to the underground tunnel system that allows staff to move unseen between riads and service points. Bags vanish, rooms are reset, preferences are noted, and the whole operation functions with a precision that borders on eerie. The advantage is obvious: almost no friction, almost no visual clutter, and a sense that the hotel exists to preserve your rhythm rather than impose its own.

The slight trade-off is that Royal Mansour can feel so polished it leaves little room for spontaneity. It is warm when you want warmth, silent when you want silence, and almost never wrong. But some guests may admire it more than love it.

**La Mamounia** offers service with more visible personality. Staff interactions tend to feel warmer, more characterful, and a touch less tightly drilled. Concierges and bartenders often bring real charm. Breakfast service in the gardens can feel genuinely affectionate rather than merely efficient. At the same time, La Mamounia is slightly more vulnerable to the occasional wobble: a delayed poolside order, a pace at dinner that drifts from relaxed to slow, a small detail needing a reminder.

So the question becomes one of preference. Do you want immaculate precision or charismatic grand-hotel warmth? Royal Mansour wins on control. La Mamounia wins on human texture.

## Food and Drink

Neither hotel is weak here, but again they excel in different ways.

**Royal Mansour** is more consistently refined. Breakfasts are beautiful and composed, served in garden settings that feel calm rather than performative. Moroccan cooking is handled seriously, and the overall standard across the property is very high. Room service is also excellent, which matters more in a hotel designed around private retreat. There is a sense of culinary discipline throughout, and that suits the property.

**La Mamounia** has more of a food-and-drink identity. The restaurants are strong, especially when they lean into Moroccan generosity and flavor. But the bars are equally important. Churchill remains one of Marrakech's best places for a proper evening drink, not because it is newly fashionable but because it still knows how to be a bar. This matters. Many luxury hotels now have beverage programs but no real drinking culture. La Mamounia still has drinking culture.

Breakfast in the gardens at La Mamounia is also one of the city's great hotel rituals. If Royal Mansour breakfast feels elegant and exacting, La Mamounia breakfast feels expansive and flirtatious. Depends what you are hungry for.

For pure culinary polish, Royal Mansour has a slight edge. For the total pleasure of restaurants plus bars plus atmosphere, La Mamounia may be more fun.

## Spa, Gardens, and Amenities

**Royal Mansour's spa** is spectacular in a nearly spiritual way. The white latticework atrium, filtered light, long indoor pool, and sense of monumental calm make it one of the most beautiful hotel spas in the world. If wellness matters seriously to you, Royal Mansour has a decisive advantage. Its whole spa experience feels architectural as much as therapeutic.

**La Mamounia's spa** is darker, moodier, more sensuous, and very good in its own right. The hammam treatments are excellent, and the overall atmosphere is deeply Marrakech: steam, black soap, polished surfaces, that delicious feeling of being scrubbed back into life. But if forced to choose on spa alone, I would choose Royal Mansour.

On **gardens**, the competition is tighter. La Mamounia's historic grounds are one of the hotel world's great landscapes, seven hectares of palms, roses, olive trees, cactus, and pathways that turn even a short walk into a mood shift. They are magnificent, and crucially they carry history, not just design skill.

Royal Mansour's gardens are also beautiful, more composed and private, and they serve the overall architecture of retreat wonderfully. But La Mamounia's grounds have broader emotional range. They feel legendary because they are.

So: spa to Royal Mansour. Gardens, by a whisper, to La Mamounia.

## Which Hotel Feels More Like Marrakech?

This sounds like an impossible question, but it matters.

**Royal Mansour** feels like the idealized architectural intelligence of Marrakech, privacy, geometry, craft, shadow, inner courtyards, the city reinterpreted as perfect control. It is Marrakech without friction, without randomness, without the jolts and collisions that define the actual medina.

**La Mamounia** feels closer to Marrakech's emotional truth, the perfume, excess, sociability, rhythm, late-night glamour, and that mix of beauty and slight exhaustion which makes the city so addictive. It does not reproduce the medina, exactly, but it translates the city's intensity into a luxurious register that still feels alive.

For a first-time visitor, this distinction matters. If you know Marrakech will thrill you but also wear you out, Royal Mansour is the safer refuge. If you want the hotel itself to participate in the city's seduction, La Mamounia is the sharper choice.

## Who Should Book Royal Mansour?

Book **Royal Mansour** if:

- You want maximum privacy, especially as a couple or on a high-stakes celebratory trip.
- You care about architecture and craftsmanship as much as service.
- You like the idea of staying in a private riad rather than a hotel room.
- You want the best spa in the city.
- You prefer precision, calm, and control to social buzz.
- You know you will need refuge from Marrakech's intensity and do not want to compromise on beauty while getting it.

Royal Mansour is the stronger hotel for honeymooners who actually value privacy, for discreet high-net-worth travelers, for design obsessives, and for anyone who believes luxury should feel like access to a parallel world.

## Who Should Book La Mamounia?

Book **La Mamounia** if:

- You want glamour, atmosphere, and one of the great grand-hotel experiences in the world.
- You care about bars, public spaces, and social life as much as the room.
- You love historic hotels with a pulse and a little vanity.
- You want legendary gardens and the feeling of stepping into an expensive film.
- You don't mind a little theater in your luxury, in fact, you actively welcome it.
- You travel partly for memory-making rituals, breakfast in the garden, a late drink in Churchill, a dramatic entrance at dusk.

La Mamounia is the better fit for romantics with a taste for glamour, seasoned grand-hotel lovers, and travelers who want to feel Marrakech's heat and perfume filtered through silk rather than soundproofing.

## The Verdict

If I had to choose only one for a traveler who asked which hotel is **better**, I would answer with irritating honesty: **Royal Mansour is the more impressive hotel, La Mamounia is the more seductive one.**

Royal Mansour is probably the higher achievement. The craftsmanship is beyond argument. The riad concept is unmatched. The service is almost impossibly well run. The spa is magnificent. If you are scoring purely on execution, it wins.

But hotels are not judged only by execution. They are judged by memory, atmosphere, appetite, and the strange chemistry between a place and a traveler. That is where La Mamounia remains dangerous. It gets under the skin. It is less perfect and, for some people, therefore more lovable.

My recommendation is simple.

If you are going to Marrakech to **retreat beautifully**, book **Royal Mansour**.

If you are going to Marrakech to **be seduced by the city in grand-hotel form**, book **La Mamounia**.

And if you are very lucky, do what the smartest travelers do. Start at Royal Mansour, exhale, recalibrate, and let the city come to you gently. Then move to La Mamounia, dress for dinner, order a drink, and let Marrakech have the last word.`,
    hotels_mentioned: [`royal-mansour-marrakech`, `la-mamounia`],
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
  console.log(`Starting Apr 10 seed...`);
  console.log(`Articles to insert: ${articles.length}`);

  for (const article of articles) {
    await pool.query(insertArticleQuery, [
      randomUUID(), article.slug, article.title, article.subtitle, article.category,
      article.hero_image, article.content_md, JSON.stringify(article.hotels_mentioned),
      article.published, article.featured
    ]);
    console.log(`✅ Inserted article: ${article.title}`);
  }

  console.log(`Apr 10 seed complete! 2 articles published.`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
