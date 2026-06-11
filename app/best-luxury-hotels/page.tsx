import { connection } from 'next/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllDestinations, getHotelsForDestination } from '@/lib/db';
import JsonLd from '@/components/JsonLd';
import { itemListJsonLd } from '@/lib/seo';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Best Luxury Hotels by Destination',
  description: 'Edited The Turndown shortlists for the best luxury hotels in each destination we cover.',
  alternates: { canonical: '/best-luxury-hotels' },
  openGraph: {
    type: 'website',
    url: '/best-luxury-hotels',
    title: 'Best Luxury Hotels by Destination',
    description: 'Edited The Turndown shortlists for the best luxury hotels in each destination we cover.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Luxury Hotels by Destination',
    description: 'Edited The Turndown shortlists for the best luxury hotels in each destination we cover.'
  }
};

export default async function BestLuxuryHotelsIndexPage() {
  await connection();

  const destinations = await getAllDestinations();
  const destinationsWithEnoughReviews = (
    await Promise.all(
      destinations.map(async (destination) => ({
        destination,
        hotels: await getHotelsForDestination(destination)
      }))
    )
  ).filter(({ hotels }) => hotels.length >= 2);

  const itemList = itemListJsonLd(
    'Best luxury hotels by destination',
    destinationsWithEnoughReviews.map(({ destination }) => ({ slug: destination.slug, name: destination.name })),
    '/best-luxury-hotels'
  );

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-12">
      <JsonLd data={{ '@context': 'https://schema.org', ...itemList }} />
      <section>
        <p className="kicker">Search guides</p>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl">Best luxury hotels, by destination.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/70">
          Clean, indexable destination shortlists for readers searching where to stay next.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {destinationsWithEnoughReviews.map(({ destination, hotels }) => (
          <Link
            key={destination.slug}
            href={`/best-luxury-hotels/${destination.slug}`}
            className="group border border-charcoal/10 bg-ivory/70 p-6 transition hover:border-gold/60"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/45">Best hotels in</p>
            <h2 className="mt-3 font-serif text-3xl group-hover:text-gold">{destination.name}</h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/65">
              {hotels.length} reviewed stays, plus when to go and how to choose between them.
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
