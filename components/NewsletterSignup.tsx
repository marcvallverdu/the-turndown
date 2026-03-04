'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

const copyByVariant = {
  inline: {
    title: 'Join the evening edition',
    subtitle: 'A monthly dispatch with new reviews, design notes, and openings worth flying for.'
  },
  popup: {
    title: 'Stay for a nightcap',
    subtitle: `Get our Sunday roundup of the world's most serene hotels.`
  }
};

type Props = {
  variant?: 'inline' | 'popup';
  title?: string;
  compact?: boolean;
};

export default function NewsletterSignup({ variant = 'inline', title, compact }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (variant !== 'popup') return;
    const timer = setTimeout(() => setShowPopup(true), 2200);
    return () => clearTimeout(timer);
  }, [variant]);

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

  if (variant === 'popup' && !showPopup) return null;

  const copy = copyByVariant[variant];

  return (
    <div
      className={cn(
        'relative',
        variant === 'popup' &&
          'fixed bottom-6 right-6 z-50 w-[90vw] max-w-sm rounded-3xl border border-mist bg-ivory/95 p-6 shadow-soft-card backdrop-blur'
      )}
    >
      {variant === 'popup' && (
        <button
          type="button"
          onClick={() => setShowPopup(false)}
          className="absolute right-4 top-4 text-xs uppercase tracking-[0.2em] text-charcoal/60"
        >
          Close
        </button>
      )}
      <p className={cn('font-serif text-2xl', compact && 'text-xl')}>{title || copy.title}</p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{copy.subtitle}</p>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
        <input
          type="email"
          required
          placeholder="you@domain.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-full border border-mist bg-white px-4 py-3 text-sm outline-none transition focus:border-gold"
        />
        <button
          type="submit"
          className="rounded-full border border-charcoal/70 px-5 py-3 text-xs uppercase tracking-[0.3em] transition hover:border-gold hover:text-gold"
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
