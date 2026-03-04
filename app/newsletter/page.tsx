import { Metadata } from 'next';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Subscribe to The Turndown newsletter.'
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 pb-20 pt-12">
      <section className="rounded-[32px] border border-mist bg-white/70 p-10 shadow-soft-card">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Newsletter</p>
        <h1 className="mt-4 font-serif text-4xl">Stay for the nightcap.</h1>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
          We send a monthly letter with new reviews, forthcoming openings, and design notes from the hotels we love.
        </p>
        <div className="mt-8">
          <NewsletterSignup variant="inline" />
        </div>
      </section>
    </div>
  );
}
