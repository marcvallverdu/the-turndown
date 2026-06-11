import { NextResponse } from 'next/server';
import {
  getConfirmedNewsletterSubscribers,
  getNewsletterSendLogs,
  getRecentNewsletterArticles,
  recordNewsletterSend
} from '@/lib/db';
import { buildNewsletterHtml, buildNewsletterIssue, buildNewsletterText, selectUnsentArticles } from '@/lib/newsletter';
import { sendNewsletterBatch } from '@/lib/email';

export const dynamic = 'force-dynamic';

function isAuthorized(request: Request) {
  const secret = process.env.NEWSLETTER_CRON_SECRET || process.env.CRON_SECRET;
  if (!secret) return false;
  const authorization = request.headers.get('authorization') || '';
  return authorization === `Bearer ${secret}`;
}

function chunk<T>(items: T[], size: number) {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => ({}));
    const dryRun = Boolean(body?.dryRun);
    const maxArticles = Number(body?.maxArticles || 5);

    const [articles, sendLogs, subscribers] = await Promise.all([
      getRecentNewsletterArticles(16),
      getNewsletterSendLogs(),
      getConfirmedNewsletterSubscribers()
    ]);

    const selectedArticles = selectUnsentArticles(articles, sendLogs, maxArticles);
    if (selectedArticles.length === 0) {
      return NextResponse.json({ ok: true, skipped: true, reason: 'No unsent articles', sent: 0 });
    }

    const issue = buildNewsletterIssue(selectedArticles);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theturndown.co';
    const html = buildNewsletterHtml(issue, siteUrl);
    const text = buildNewsletterText(issue, siteUrl);

    if (subscribers.length === 0) {
      return NextResponse.json({
        ok: true,
        skipped: true,
        reason: 'No confirmed subscribers',
        issueKey: issue.key,
        articles: selectedArticles.map((article) => article.slug),
        sent: 0
      });
    }

    if (dryRun) {
      return NextResponse.json({
        ok: true,
        dryRun: true,
        issueKey: issue.key,
        subject: issue.subject,
        recipients: subscribers.length,
        articles: selectedArticles.map((article) => article.slug),
        sent: 0
      });
    }

    const providerMessageIds: string[] = [];
    for (const subscriberChunk of chunk(subscribers, 100)) {
      const ids = await sendNewsletterBatch(
        subscriberChunk.map((subscriber) => ({
          to: subscriber.email,
          subject: issue.subject,
          html,
          text
        }))
      );
      providerMessageIds.push(...ids);
    }

    await recordNewsletterSend(issue.key, selectedArticles, subscribers.length, providerMessageIds);

    return NextResponse.json({
      ok: true,
      issueKey: issue.key,
      subject: issue.subject,
      recipients: subscribers.length,
      articles: selectedArticles.map((article) => article.slug),
      sent: subscribers.length
    });
  } catch (error) {
    console.error('newsletter send failed', error);
    return NextResponse.json({ error: 'Failed to send newsletter' }, { status: 500 });
  }
}
