import { Pool } from 'pg';
import { randomUUID } from 'crypto';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ============================================================================
// MAY 29 — THE HOTEL BAR IS THE LAST CIVILISED PUBLIC ROOM
// Ongoing weekly cadence
// ============================================================================

const articles = [
  {
    title: `The Hotel Bar Is the Last Civilised Public Room`,
    slug: `the-hotel-bar-is-the-last-civilised-public-room`,
    category: `the-details`,
    subtitle: `When cities get louder, smaller, and more transactional, the best hotel bars still understand the value of a dim room, a proper chair, and the right kind of anonymity.`,
    hero_image: `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600`,
    content_md: `# The Hotel Bar Is the Last Civilised Public Room

A good hotel bar performs a quiet miracle. It makes strangers tolerable, solitude elegant, and time feel slightly less bullied.

Most modern public space does the opposite. Cafés want laptop occupation or fast turnover. Restaurants want bookings and revenue per seat. Members' clubs want proof that you belong. Airport lounges are fluorescent holding pens with hummus. Even beautiful city bars often ask you to choose between noise, spectacle, and the sort of forced intimacy created by tiny tables and loud music. The old pleasures of lingering in public without either hurrying or justifying yourself have been stripped out of urban life with remarkable efficiency.

The hotel bar still resists that logic, at least when it is run by people with standards. It offers one of the last places where you can arrive alone, sit well, order properly, stay longer than planned, and feel neither exposed nor rushed. You are in public, but partly protected from it. You are seen, but not interrogated. That balance is rare enough now to feel almost aristocratic.

## Why Hotel Bars Still Matter

The best hotel bars understand something most hospitality businesses have forgotten: not every guest wants stimulation. Sometimes what people want is atmosphere without demand. A chair with a bit of privacy. Lighting kind enough to flatter the room. Staff who notice before they intrude. A martini that tastes like someone bothered. The ability to read, think, flirt, wait, eavesdrop, or do absolutely nothing without being made to feel like dead inventory.

This is harder than it sounds. Hospitality has become obsessed with activation: DJ sets, bar takeovers, branded rituals, signature smoke, ice carved into clever little shapes, menus that read like graduate theses in fragrance. Some of that is fun. Much of it is compensation. When a bar has no confidence in the room itself, it starts throwing props at the evening.

A serious hotel bar works the other way around. The room is the event. The bar exists to let city life settle into a more attractive register. That is why the great ones are never only about cocktails. They are about proportion, acoustics, pace, and social permission.

## The Civilised Qualities

First, a civilised hotel bar allows for **anonymity without loneliness**. This matters more than designers or operators usually admit. There is a specific pleasure in occupying a room where nobody needs anything from you. At home, solitude can feel domestic. In a normal bar, it can feel performative or vulnerable. In a hotel bar, solitude often feels chosen. You can sit at the bar and talk if you like, or vanish into a corner banquette with a newspaper, a Negroni, and your own thoughts. The room lets both choices coexist.

Second, it respects **duration**. A great hotel bar is not built for one quick drink before the real evening begins. It is the real evening, or at least a credible version of one. You can begin there at six with tea or a martini and still be there at ten having quietly drifted into oysters, whisky, and one unexpectedly useful conversation. That temporal elasticity is part of the luxury. The bar does not shove you onward. It lets the night happen at human speed.

Third, it values **comfort over concept**. Comfort is embarrassingly underrated in stylish bars. Too many places are designed for photographs rather than for knees, elbows, and lower backs. The best hotel bars remember that elegance is physical. Chairs need depth. Stools need foot rails. Tables need to hold more than one glass and a phone. The room should absorb sound rather than ricochet it. There should be places for pairs, places for trios, places for one person with a book, and places for someone pretending not to wait for someone else.

Fourth, it understands **service as calibration**. The right bartender in a hotel bar is not merely making drinks. They are regulating the tone of the room. They know when to be brisk, when to tell a story, when to rescue a bad order, and when to leave a guest in peace. The old luxury skill was never grovelling. It was discretion with timing. You feel it most clearly in bars, where one unnecessary interruption can puncture the mood completely.

## Why the Best Ones Belong to Hotels

Independent bars can be brilliant, of course, but they rarely have the same structural advantages. A hotel bar borrows gravity from the building around it. People arrive from flights, from meetings, from bad dates, from weddings, from cities they do not quite know. They bring slight dislocation with them, and dislocation makes rooms more interesting. A hotel bar collects temporary lives.

That temporary quality is part of the charm. In a neighborhood bar, regulars dominate the social weather. In a hotel bar, everyone is passing through, even the locals who come because the room is better than the alternatives. That creates a more relaxed form of urban theatre. Nobody expects continuity. Encounters can remain fragmentary, which often makes them better. One drink, one conversation, one recommendation scribbled on a receipt, one person in a camel coat reading alone at the end of the room: the pleasure lies partly in the fact that none of it has to become anything.

Hotels also understand occasion better than most standalone operators. They know how to make a room feel complete at different hours. Morning coffee in a bar lounge. Afternoon tea that shades into aperitifs. A late martini after the restaurant. A final whisky when the city outside has gone damp and ugly. The strongest hotel bars manage this transition without losing identity. They do not reset the room every two hours like a retail environment with a playlist strategy.

## The Enemy: Overproduction

The current threat to hotel bars is not decline so much as overproduction. Too many hoteliers have realised that bars photograph well, generate local buzz, and signal cultural relevance. The result is a wave of bars determined to prove they are not boring, which is usually the first step toward becoming exhausting.

You see it everywhere: the hotel bar that wants to be a nightclub by nine; the bar menu full of conceptual drinks involving pine smoke, beet reductions, and tiny lectures from staff; the room with lighting so dramatic you cannot read your own bill; the soundtrack chosen as though the purpose of a drink were to survive it. These places are not civilised. They are hospitality content machines.

Civilisation requires a little restraint. It requires confidence in low frequencies: polished wood, decent lamps, linen napkins, proper snacks, a bartender who knows how cold a Martini should be, and a room that looks better at 10 p.m. than it did at 6. It also requires standards about who gets to dominate the atmosphere. If one loud table can ruin the whole room, the bar is weaker than it looks.

## The Drinks Matter, But Less Than You Think

A hotel bar should serve excellent drinks. Obviously. Bad Martinis are unforgivable, watery ice is a moral failure, and any Old Fashioned sweet enough to pass for pudding deserves consequences. But drinks alone do not explain why certain bars become institutions.

What matters more is whether the bar gives the drink a setting worthy of it. A flawless Gibson in a charmless room is only technical competence. A slightly imperfect martini in a room of serious grace can still feel like an event. This is not an argument for mediocrity. It is a reminder that bars are social architecture, not just liquid craft.

The best hotel bars also understand food in a modest but crucial way. Not every room needs a full dinner menu, but every serious bar needs proper bar food: oysters, fries that arrive hot, a club sandwich built by someone who respects the form, nuts warmed rather than poured from a packet, perhaps a burger late enough in the evening to feel faintly irresponsible. Civilisation, in hotel terms, is often one level above hunger.

## Why Cities Need These Rooms

Cities have become increasingly efficient at sorting people into functions. Work here. Spend here. Eat here. Move along. The hotel bar disrupts that sorting. It is one of the few urban rooms left where the purpose can remain pleasantly vague. You may be there for a meeting, a nightcap, a date, a solo hour between obligations, or because your own flat is too small and your own thoughts too loud. The room does not ask you to declare which.

That generosity matters. Public life becomes thinner when every space demands a specific use case. The best hotel bars preserve ambiguity. They are meeting rooms for people who do not want a meeting room, offices for those avoiding the office, dining rooms for those not ready for dinner, and sanctuaries for people who simply want to sit somewhere better than home for an hour.

This is especially true in cities where domestic space is cramped and social life has been flattened into booking culture. London still understands the hotel bar unusually well because the city has long relied on them as semi-public drawing rooms. Paris does too, though in a more performative register. New York can still manage it when it remembers that a hotel bar should not feel like a casting call. The cities that get hotel bars right are usually the cities that still believe adults deserve rooms in which to loiter beautifully.

## What Makes One Great

If I had to reduce it to a checklist, I would ask six questions.

**Is the room comfortable enough to stay in for three hours?** If not, nothing else matters.

**Can you hear yourself think without hearing every neighboring word?** Acoustics are destiny.

**Do the staff understand the difference between attentiveness and interruption?** Too much friendliness can be as destructive as indifference.

**Does the drinks list suggest taste rather than trend-chasing?** I want confidence, not theatre.

**Would the room still feel good with only a dozen people in it?** Many fashionable bars collapse when the crowd thins. Great hotel bars deepen.

**Could you go there alone on a Tuesday and feel pleased with yourself?** This, more than anything, is the test.

## The Verdict

The hotel bar endures because it offers a form of public life that the rest of the city keeps trying to eliminate. It lets adults linger without apology. It turns waiting into pleasure. It provides a polished version of anonymity. And it remembers that luxury is not always spectacle. Sometimes it is simply a deeply comfortable chair, a very cold martini, and a room that knows how to behave.

That may sound minor. It is not. Civilisation is built from rooms like this.

When so much hospitality now mistakes noise for energy and novelty for style, the good hotel bar remains a corrective. It says that evenings do not need to be conquered. They need to be composed. It says that public space can still have manners. It says that being left alone, elegantly, is one of the finer services money can buy.

And in a world increasingly arranged around speed, friction, and display, that feels not old-fashioned but radical.`,
    hotels_mentioned: [`the-connaught`, `claridges`, `rosewood-london`, `aman-tokyo`],
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
  console.log(`Starting May 29 seed...`);
  console.log(`Articles: ${articles.length}`);

  for (const article of articles) {
    await pool.query(insertArticleQuery, [
      randomUUID(), article.slug, article.title, article.subtitle, article.category,
      article.hero_image, article.content_md, JSON.stringify(article.hotels_mentioned),
      article.published, article.featured
    ]);
    console.log(`Inserted article: ${article.title}`);
  }

  console.log(`May 29 seed complete!`);
};

seed()
  .catch((error) => {
    console.error(`Seed error:`, error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
