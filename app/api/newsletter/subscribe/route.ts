import { NextResponse } from 'next/server';
import { insertNewsletterSubscriber, markNewsletterSubscriberSynced } from '@/lib/db';
import { syncContactToResendAudience } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body?.email || '').trim().toLowerCase();
    if (!email || !email.includes(`@`)) {
      return NextResponse.json({ error: `Invalid email` }, { status: 400 });
    }

    await insertNewsletterSubscriber(email);
    const contact = await syncContactToResendAudience(email);
    await markNewsletterSubscriberSynced(email, contact.id);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('newsletter subscribe failed', error);
    return NextResponse.json({ error: `Unable to subscribe` }, { status: 500 });
  }
}
