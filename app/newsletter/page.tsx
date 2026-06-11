import { Metadata } from 'next';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: `The Turndown Newsletter`,
  description: `Subscribe to The Turndown for new luxury hotel reviews, destination guides, opening notes, and design dispatches.`,
  alternates: { canonical: `/newsletter` },
  openGraph: {
    type: 'website',
    url: `/newsletter`,
    title: `The Turndown Newsletter`,
    description: `Subscribe to The Turndown for new luxury hotel reviews, destination guides, opening notes, and design dispatches.`
  },
  twitter: {
    card: 'summary_large_image',
    title: `The Turndown Newsletter`,
    description: `Subscribe to The Turndown for new luxury hotel reviews, destination guides, opening notes, and design dispatches.`
  }
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-12">
      <section className="body-max">
        <p className="kicker">Newsletter</p>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl">Stay for the nightcap.</h1>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
          We send an automatic letter when new reviews, forthcoming openings, and design notes are ready.
        </p>
        <div className="mt-8">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
