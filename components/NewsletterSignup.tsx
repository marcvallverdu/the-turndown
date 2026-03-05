'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  title?: string;
  subtitle?: string;
  compact?: boolean;
};

export default function NewsletterSignup({ title, subtitle, compact }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="relative">
      <p className={cn('font-serif text-2xl', compact && 'text-xl')}>{title || 'The Evening Edition'}</p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
        {subtitle || 'A monthly dispatch of new reviews, openings, and the details worth slowing down for.'}
      </p>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
        <input
          type="email"
          required
          placeholder="you@domain.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border-b border-mist bg-transparent px-2 py-3 text-sm outline-none transition focus:border-gold"
        />
        <button
          type="submit"
          className="self-start border-b border-charcoal/70 pb-2 text-xs uppercase tracking-[0.35em] transition hover:border-gold hover:text-gold"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending' : 'Subscribe'}
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-sage">Welcome to The Turndown.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-red-500">Try again shortly.</p>
      )}
    </div>
  );
}
