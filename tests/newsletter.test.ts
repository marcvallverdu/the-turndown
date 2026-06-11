import assert from 'node:assert/strict';
import {
  buildNewsletterIssue,
  buildNewsletterHtml,
  categoryPath,
  selectUnsentArticles,
  type NewsletterArticle,
  type NewsletterSendLog
} from '../lib/newsletter';

const articles: NewsletterArticle[] = [
  {
    slug: 'hotel-bars-are-back',
    title: 'Hotel Bars Are Back',
    subtitle: 'A note on the rooms that still work.',
    category: 'the-details',
    created_at: '2026-06-10T10:00:00.000Z'
  },
  {
    slug: 'aman-vs-six-senses',
    title: 'Aman vs Six Senses',
    subtitle: 'Which kind of luxury are you buying?',
    category: 'versus',
    created_at: '2026-06-09T10:00:00.000Z'
  },
  {
    slug: 'new-hotel-london',
    title: 'The New London Hotel Worth Watching',
    subtitle: 'A new opening with a useful point of view.',
    category: 'new-openings',
    created_at: '2026-06-08T10:00:00.000Z'
  }
];

const logs: NewsletterSendLog[] = [
  { article_slug: 'aman-vs-six-senses', sent_at: '2026-06-09T12:00:00.000Z' }
];

assert.equal(categoryPath('the-details', 'hotel-bars-are-back'), '/the-details/hotel-bars-are-back');
assert.equal(categoryPath('versus', 'aman-vs-six-senses'), '/versus/aman-vs-six-senses');
assert.equal(categoryPath('new-openings', 'new-hotel-london'), '/new-openings/new-hotel-london');

const selected = selectUnsentArticles(articles, logs, 2);
assert.deepEqual(
  selected.map((article) => article.slug),
  ['hotel-bars-are-back', 'new-hotel-london'],
  'already-sent article slugs should be excluded while preserving latest-first order'
);

const issue = buildNewsletterIssue(selected, new Date('2026-06-11T08:00:00.000Z'));
assert.equal(issue.key, '2026-06-11:hotel-bars-are-back,new-hotel-london');
assert.equal(issue.subject, 'The Turndown: hotel bars, new London hotels');

const html = buildNewsletterHtml(issue, 'https://theturndown.co');
assert.match(html, /Hotel Bars Are Back/);
assert.match(html, /https:\/\/theturndown\.co\/the-details\/hotel-bars-are-back/);
assert.match(html, /unsubscribe/i);

console.log('newsletter tests passed');
