import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import ReviewCard from '@/components/ReviewCard';
import { getDestinationBySlug, getHotelsForDestination } from '@/lib/db';
import { absoluteUrl, itemListJsonLd } from '@/lib/seo';

export const revalidate = 3600;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);
  if (!destination) return { title: 'Best Luxury Hotels' };

  const hotels = await getHotelsForDestination(destination);
  const shouldIndex = hotels.length >= 2;
  const title = `Best Luxury Hotels in ${destination.name}`;
  const description = `The Turndown's edited guide to the best luxury hotels in ${destination.name}, with reviewed stays, standout rooms, service notes, and when to go.`;
  const path = `/best-luxury-hotels/${destination.slug}`;

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    robots: shouldIndex ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      type: 'website',
      url: path,
      title,
      description,
      images: [{ url: destination.hero_image }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [destination.hero_image]
    }
  };
}

export default async function BestLuxuryHotelsDestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);
  if (!destination) notFound();

  const hotels = await getHotelsForDestination(destination);
  const path = `/best-luxury-hotels/${destination.slug}`;
  const title = `Best Luxury Hotels in ${destination.name}`;
  const intro = `An edited shortlist of the ${destination.name} stays worth planning around, pulled from The Turndown's reviewed hotels and destination notes.`;
  const faqItems = [
    {
      question: `What are the best luxury hotels in ${destination.name}?`,
      answer: hotels.length
        ? `The Turndown shortlist for ${destination.name} currently includes ${hotels.map((hotel) => hotel.name).join(', ')}.`
        : `The Turndown is still building a shortlist for ${destination.name}.`
    },
    {
      question: `When is the best time to visit ${destination.name}?`,
      answer: destination.best_time || `Seasonality depends on the trip style and hotel availability.`
    }
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: title,
        url: absoluteUrl(path),
        description: intro,
        mainEntity: itemListJsonLd(`Best luxury hotels in ${destination.name}`, hotels)
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-8">
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        currentPath={path}
        items={[
          { label: 'Home', href: '/' },
          { label: 'Best Luxury Hotels', href: '/best-luxury-hotels' },
          { label: destination.name }
        ]}
      />

      <section className="grid gap-8 border-b border-charcoal/10 pb-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="kicker">Search guide</p>
          <h1 className="mt-4 font-serif text-5xl sm:text-6xl">{title}</h1>
        </div>
        <div className="space-y-5 text-base leading-[1.8] text-charcoal/75">
          <p>{intro}</p>
          <p>
            Use this as the clean, bookmarkable version of the filtered reviews page: one destination, the reviewed hotels,
            and enough context to decide whether to keep reading the full destination guide.
          </p>
          <Link href={`/destinations/${destination.slug}`} className="inline-flex border-b border-charcoal/70 pb-2 text-[0.65rem] uppercase tracking-[0.35em] hover:border-gold hover:text-gold">
            Read the full {destination.name} guide
          </Link>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        {hotels.map((hotel, index) => (
          <ReviewCard key={hotel.slug} hotel={hotel} className={index % 2 === 1 ? `md:mt-16` : ``} />
        ))}
      </section>

      <section className="grid gap-6 border-t border-charcoal/10 pt-10 md:grid-cols-2">
        {faqItems.map((item) => (
          <div key={item.question}>
            <h2 className="font-serif text-2xl">{item.question}</h2>
            <p className="mt-3 text-sm leading-7 text-charcoal/70">{item.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
