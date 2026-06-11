export type NewsletterArticle = {
  slug: string;
  title: string;
  subtitle?: string | null;
  category: string;
  created_at: string | Date;
};

export type NewsletterSendLog = {
  article_slug: string;
  sent_at: string | Date;
};

export type NewsletterIssue = {
  key: string;
  subject: string;
  preview: string;
  articles: NewsletterArticle[];
};

const CATEGORY_PATHS: Record<string, string> = {
  'the-details': '/the-details',
  versus: '/versus',
  'new-openings': '/new-openings',
  reviews: '/reviews'
};

const CATEGORY_LABELS: Record<string, string> = {
  'the-details': 'The Details',
  versus: 'Versus',
  'new-openings': 'New Openings',
  reviews: 'Reviews'
};

export function categoryPath(category: string, slug: string) {
  const base = CATEGORY_PATHS[category] ?? `/${category}`;
  return `${base}/${slug}`;
}

export function selectUnsentArticles(
  articles: NewsletterArticle[],
  sendLogs: NewsletterSendLog[],
  limit = 5
): NewsletterArticle[] {
  const sentSlugs = new Set(sendLogs.map((log) => log.article_slug));
  return articles.filter((article) => !sentSlugs.has(article.slug)).slice(0, limit);
}

function htmlEscape(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function shortTopic(title: string) {
  const shortened = title
    .replace(/^The\s+/i, '')
    .replace(/\s+Are\s+Back$/i, '')
    .replace(/\s+Worth\s+Watching$/i, 's')
    .toLowerCase();
  return shortened.replace(/\blondon\b/g, 'London').replace(/\bparis\b/g, 'Paris').replace(/\btokyo\b/g, 'Tokyo');
}

function buildSubject(articles: NewsletterArticle[]) {
  const topics = articles.slice(0, 2).map((article) => shortTopic(article.title));
  if (topics.length === 0) return 'The Turndown';
  if (topics.length === 1) return `The Turndown: ${topics[0]}`;
  return `The Turndown: ${topics.join(', ')}`;
}

export function buildNewsletterIssue(articles: NewsletterArticle[], now = new Date()): NewsletterIssue {
  const day = now.toISOString().slice(0, 10);
  const slugList = articles.map((article) => article.slug).join(',');
  return {
    key: `${day}:${slugList}`,
    subject: buildSubject(articles),
    preview: articles[0]?.subtitle || 'The latest from The Turndown.',
    articles
  };
}

export function buildNewsletterHtml(issue: NewsletterIssue, siteUrl = 'https://theturndown.co') {
  const articleCards = issue.articles
    .map((article) => {
      const href = `${siteUrl}${categoryPath(article.category, article.slug)}`;
      const label = CATEGORY_LABELS[article.category] ?? article.category;
      return `
        <tr>
          <td style="padding: 24px 0; border-top: 1px solid #e5e1d8;">
            <p style="margin:0 0 8px; color:#8a7660; font: 11px Arial, sans-serif; letter-spacing: .18em; text-transform: uppercase;">${htmlEscape(label)}</p>
            <h2 style="margin:0 0 10px; color:#15110d; font: 28px Georgia, serif; line-height:1.15;">${htmlEscape(article.title)}</h2>
            ${article.subtitle ? `<p style="margin:0 0 16px; color:#4f463d; font: 15px Arial, sans-serif; line-height:1.6;">${htmlEscape(article.subtitle)}</p>` : ''}
            <a href="${href}" style="color:#15110d; font: 700 13px Arial, sans-serif; letter-spacing:.12em; text-transform:uppercase; text-decoration:none;">Read it →</a>
          </td>
        </tr>`;
    })
    .join('');

  return `<!doctype html>
<html>
  <body style="margin:0; padding:0; background:#f6f1e8;">
    <div style="display:none; max-height:0; overflow:hidden;">${htmlEscape(issue.preview)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f1e8; padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px; background:#fffaf1; border:1px solid #e5dccf;">
            <tr>
              <td style="padding:34px 32px 8px;">
                <p style="margin:0 0 8px; color:#8a7660; font: 11px Arial, sans-serif; letter-spacing:.24em; text-transform:uppercase;">The Turndown</p>
                <h1 style="margin:0; color:#15110d; font: 36px Georgia, serif; line-height:1.1;">The latest notes from the better end of hotel life.</h1>
              </td>
            </tr>
            <tr><td style="padding:0 32px 8px;">${articleCards ? `<table role="presentation" width="100%" cellspacing="0" cellpadding="0">${articleCards}</table>` : ''}</td></tr>
            <tr>
              <td style="padding:24px 32px 34px; border-top:1px solid #e5dccf; color:#7b6a58; font:12px Arial, sans-serif; line-height:1.6;">
                You are receiving this because you subscribed to The Turndown. To unsubscribe, reply with “unsubscribe”.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildNewsletterText(issue: NewsletterIssue, siteUrl = 'https://theturndown.co') {
  const articles = issue.articles
    .map((article) => `${article.title}\n${article.subtitle ? `${article.subtitle}\n` : ''}${siteUrl}${categoryPath(article.category, article.slug)}`)
    .join('\n\n');
  return `The Turndown\n\n${articles}\n\nYou are receiving this because you subscribed to The Turndown. To unsubscribe, reply with “unsubscribe”.`;
}
