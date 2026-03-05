import { NextResponse } from 'next/server';
import { insertNewsletterSubscriber } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body?.email || '').trim().toLowerCase();
    if (!email || !email.includes(`@`)) {
      return NextResponse.json({ error: `Invalid email` }, { status: 400 });
    }

    await insertNewsletterSubscriber(email);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: `Unable to subscribe` }, { status: 500 });
  }
}
