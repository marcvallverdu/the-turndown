import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import BrandBadge from '@/components/BrandBadge';
import RatingDisplay from '@/components/RatingDisplay';
import VerdictCard from '@/components/VerdictCard';
import ReviewCard from '@/components/ReviewCard';
import { getHotelBySlug, getHotelsByBrand, getHotelsByRegion } from '@/lib/db';
import { formatPriceRange, jsonParse } from '@/lib/utils';

export const dynamic = 'force-dynamic';

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);
  if (!hotel) return { title: 'Review' };
  return {
    title: hotel.name,
    description: hotel.tagline,
    alternates: {
      canonical: `https://theturndown.co/reviews/${hotel.slug}`
    },
    openGraph: {
      title: hotel.name,
      description: hotel.tagline,
      images: [{ url: hotel.hero_image }]
    }
  };
}

export default async function ReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);
  if (!hotel) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm text-charcoal/60">Review not found.</p>
      </div>
    );
  }

  const bestFor = jsonParse<string[]>(hotel.best_for, []);
  const relatedByBrand = getHotelsByBrand(hotel.brand_slug).filter((item) => item.slug !== hotel.slug).slice(0, 2);
  const relatedByRegion = getHotelsByRegion(hotel.region_slug, 2).filter((item) => item.slug !== hotel.slug);
  const gallery = jsonParse<string[]>(hotel.images, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: hotel.name,
    description: hotel.tagline,
    url: `https://theturndown.co/reviews/${hotel.slug}`,
    image: hotel.hero_image,
    address: {
      '@type': 'PostalAddress',
      addressLocality: hotel.location,
      addressCountry: hotel.country
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: hotel.rating_overall,
      bestRating: 10,
      worstRating: 0,
      ratingCount: 1
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: hotel.rating_overall,
        bestRating: 10
      },
      author: {
        '@type': 'Organization', name: 'The Turndown'
      },
      reviewBody: hotel.review_verdict
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Reviews', href: '/reviews' },
          { label: hotel.name }
        ]}
      />

      <section className="relative overflow-hidden rounded-[40px]">
        <div className="relative h-[70vh] min-h-[420px]">
          <Image src={hotel.hero_image} alt={hotel.name} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>
        <div className="absolute inset-x-8 bottom-8 flex flex-col gap-4 text-white">
          <BrandBadge label={hotel.brand} />
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl">{hotel.name}</h1>
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">{hotel.location}</p>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">The Introduction</p>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{hotel.review_intro}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">The Arrival</p>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{hotel.review_arrival}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">The Room</p>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{hotel.review_room}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">The Service</p>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{hotel.review_service}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Food & Drink</p>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{hotel.review_food}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">The Details</p>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{hotel.review_details}</p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-mist bg-white/70 p-6 shadow-soft-card">
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Overall</p>
            <div className="mt-3">
              <RatingDisplay value={hotel.rating_overall} />
            </div>
            <div className="mt-5 space-y-3 text-sm text-charcoal/70">
              <div className="flex items-center justify-between">
                <span>Room</span>
                <span>{hotel.rating_room}/10</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Service</span>
                <span>{hotel.rating_service}/10</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Food</span>
                <span>{hotel.rating_food}/10</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Value</span>
                <span>{hotel.rating_value}/10</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Location</span>
                <span>{hotel.rating_location}/10</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-mist bg-white/70 p-6 text-sm shadow-soft-card">
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">At a glance</p>
            <ul className="mt-4 space-y-3 text-charcoal/70">
              <li className="flex items-center justify-between">
                <span>Style</span>
                <span>{hotel.style}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Price</span>
                <span>{formatPriceRange(hotel.price_range)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Best for</span>
                <span>{bestFor.join(', ')}</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={hotel.website}
                className="rounded-full border border-charcoal/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-center hover:border-gold hover:text-gold"
              >
                Official site
              </Link>
              <Link
                href={hotel.booking_url}
                className="rounded-full border border-charcoal/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-center hover:border-gold hover:text-gold"
              >
                Booking link
              </Link>
            </div>
          </div>
        </aside>
      </section>

      {gallery.length > 0 && (
        <section className="grid gap-4 md:grid-cols-3">
          {gallery.slice(0, 3).map((image: string) => (
            <div key={image} className="relative h-64 overflow-hidden rounded-3xl">
              <Image
                src={image}
                alt={`${hotel.name} gallery`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </section>
      )}

      <section className="space-y-6">
        <VerdictCard
          tagline={hotel.tagline}
          bestFor={hotel.verdict_best_for}
          skipIf={hotel.verdict_skip_if}
          standout={hotel.verdict_standout}
        />
        <p className="text-sm leading-relaxed text-charcoal/80">{hotel.review_verdict}</p>
      </section>

      {(relatedByBrand.length > 0 || relatedByRegion.length > 0) && (
        <section className="grid gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">More like this</p>
            <h2 className="section-title mt-3">More from {hotel.brand}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedByBrand.map((item) => (
              <ReviewCard key={item.slug} hotel={item} />
            ))}
            {relatedByBrand.length < 2 &&
              relatedByRegion.slice(0, 2 - relatedByBrand.length).map((item) => (
                <ReviewCard key={item.slug} hotel={item} />
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
