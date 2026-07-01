import { connection } from 'next/server';
import { getRecentNewsletterArticles } from '@/lib/db';
import { SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/seo';

export const revalidate = 3600;

const categoryPaths: Record<string, string> = {
  'the-details': 'the-details',
  versus: 'versus',
  'new-openings': 'new-openings'
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  await connection();
  const articles = await getRecentNewsletterArticles(30);

  const items = articles
    .map((article) => {
      const categoryPath = categoryPaths[article.category] || article.category;
      const url = absoluteUrl(`/${categoryPath}/${article.slug}`);
      const published = new Date(article.created_at).toUTCString();

      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.subtitle || '')}</description>
      <pubDate>${published}</pubDate>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Latest luxury hotel reviews, comparisons, opening notes, and hotel essays from The Turndown.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  });
}
