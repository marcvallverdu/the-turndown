import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import BrandBadge from '@/components/BrandBadge';
import RatingDisplay from '@/components/RatingDisplay';
import VerdictCard from '@/components/VerdictCard';
import ReviewCard from '@/components/ReviewCard';
import ReviewMethodology from '@/components/ReviewMethodology';
import JsonLd from '@/components/JsonLd';
import { getHotelBySlug, getHotelsByBrand, getHotelsByRegion } from '@/lib/db';
import { absoluteUrl, compactJsonLd, imageUrl, publisher } from '@/lib/seo';
import { formatPriceRange, jsonParse } from '@/lib/utils';

function Paragraphs({ text }: { text?: string | null }) {
  if (!text) return null;
  const paragraphs = text.split(`\n\n`).filter((p) => p.trim());
  return (
    <div className="mt-6 space-y-5">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-base leading-[1.8] text-charcoal/80 sm:text-[17px] sm:leading-[1.85]">
          {p.trim()}
        </p>
      ))}
    </div>
  );
}

export const revalidate = 3600;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hotel = await getHotelBySlug(slug);
  if (!hotel) return { title: `Review` };
  return {
    title: `${hotel.name} Review`,
    description: hotel.tagline,
    alternates: {
      canonical: `https://theturndown.co/reviews/${hotel.slug}`
    },
    openGraph: {
      type: 'article',
      url: `https://theturndown.co/reviews/${hotel.slug}`,
      title: `${hotel.name} Review`,
      description: hotel.tagline,
      images: [{ url: hotel.hero_image }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${hotel.name} Review`,
      description: hotel.tagline,
      images: [hotel.hero_image]
    }
  };
}

export default async function ReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const hotel = await getHotelBySlug(slug);
  if (!hotel) notFound();

  const bestFor = jsonParse<string[]>(hotel.best_for, []);
  const [relatedByBrand, relatedByRegion] = await Promise.all([
    getHotelsByBrand(hotel.brand_slug),
    getHotelsByRegion(hotel.region_slug, 2)
  ]);
  const filteredByBrand = relatedByBrand.filter((item) => item.slug !== hotel.slug).slice(0, 2);
  const filteredByRegion = relatedByRegion.filter((item) => item.slug !== hotel.slug);
  const gallery = jsonParse<string[]>(hotel.images, []);
  const getPullQuote = (text: string) => {
    const sentence = text.split(`. `).find((line) => line.trim().length > 0);
    if (!sentence) return ``;
    return sentence.endsWith(`.`) ? sentence : `${sentence}.`;
  };

  const reviewUrl = absoluteUrl(`/reviews/${hotel.slug}`);
  const jsonLd = compactJsonLd({
    '@context': `https://schema.org`,
    '@type': `Review`,
    headline: `${hotel.name} Review`,
    name: `${hotel.name} Review`,
    description: hotel.tagline,
    url: reviewUrl,
    image: imageUrl(hotel.hero_image),
    datePublished: hotel.created_at,
    dateModified: hotel.updated_at || hotel.created_at,
    author: publisher,
    publisher,
    reviewBody: hotel.review_verdict,
    reviewRating: hotel.rating_overall
      ? {
          '@type': `Rating`,
          ratingValue: hotel.rating_overall,
          bestRating: 10,
          worstRating: 0
        }
      : undefined,
    itemReviewed: {
      '@type': `Hotel`,
      name: hotel.name,
      description: hotel.tagline,
      url: hotel.website,
      image: imageUrl(hotel.hero_image),
      address: {
        '@type': `PostalAddress`,
        addressLocality: hotel.location,
        addressCountry: hotel.country
      }
    },
    mainEntityOfPage: {
      '@type': `WebPage`,
      '@id': reviewUrl
    }
  });

  return (
    <div className="flex w-full flex-col gap-16 pb-24">
      <JsonLd data={jsonLd} />

      <div className="mx-auto w-full max-w-6xl px-6 pt-8">
        <Breadcrumbs
          currentPath={`/reviews/${hotel.slug}`}
          items={[
            { label: 'Home', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: hotel.name }
          ]}
        />
      </div>

      <section className="relative h-[80vh] min-h-[520px] w-full">
        <Image src={hotel.hero_image} alt={hotel.name} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-10 left-8 flex max-w-3xl flex-col gap-4 text-white sm:left-12">
          <BrandBadge label={hotel.brand} />
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl">{hotel.name}</h1>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/70">{hotel.location}</p>
        </div>
      </section>

      <section className="body-max">
        <div className="flex flex-wrap items-center gap-6 text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/60">
          <span>{hotel.style}</span>
          <span>{formatPriceRange(hotel.price_range)}</span>
          <span>{bestFor.join(', ')}</span>
        </div>
        <div className="mt-6 flex items-baseline gap-6">
          <RatingDisplay value={hotel.rating_overall} />
          <div className="text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">
            Room {hotel.rating_room} · Service {hotel.rating_service} · Food {hotel.rating_food}
          </div>
        </div>
      </section>

      <section className="body-max">
        <div className="section-rule" />
        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">The Introduction</p>
        <Paragraphs text={hotel.review_intro} />
      </section>

      {gallery[0] && (
        <section className="relative h-[520px] w-full">
          <Image src={gallery[0]} alt={`${hotel.name} gallery`} fill className="object-cover" sizes="100vw" />
        </section>
      )}

      <section className="body-max">
        <div className="section-rule" />
        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">The Arrival</p>
        <Paragraphs text={hotel.review_arrival} />
      </section>

      <section className="body-max">
        <p className="pull-quote">{getPullQuote(hotel.review_arrival)}</p>
      </section>

      <section className="body-max">
        <div className="section-rule" />
        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">The Room</p>
        <Paragraphs text={hotel.review_room} />
      </section>

      {gallery[1] && (
        <section className="relative h-[520px] w-full">
          <Image src={gallery[1]} alt={`${hotel.name} gallery`} fill className="object-cover" sizes="100vw" />
        </section>
      )}

      <section className="body-max">
        <div className="section-rule" />
        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">The Service</p>
        <Paragraphs text={hotel.review_service} />
      </section>

      <section className="body-max">
        <p className="pull-quote">{getPullQuote(hotel.review_service)}</p>
      </section>

      <section className="body-max">
        <div className="section-rule" />
        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">Food & Drink</p>
        <Paragraphs text={hotel.review_food} />
      </section>

      {gallery[2] && (
        <section className="relative h-[520px] w-full">
          <Image src={gallery[2]} alt={`${hotel.name} gallery`} fill className="object-cover" sizes="100vw" />
        </section>
      )}

      <section className="body-max">
        <div className="section-rule" />
        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">The Details</p>
        <Paragraphs text={hotel.review_details} />
      </section>

      <section className="body-max">
        <p className="pull-quote">{getPullQuote(hotel.review_details)}</p>
      </section>

      <section className="body-max space-y-10 px-6">
        <VerdictCard
          tagline={hotel.tagline}
          bestFor={hotel.verdict_best_for}
          skipIf={hotel.verdict_skip_if}
          standout={hotel.verdict_standout}
        />
        <div>
          <div className="section-rule" />
          <p className="mt-4 text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">The Verdict</p>
          <Paragraphs text={hotel.review_verdict} />
        </div>
        <div className="grid gap-4 text-[0.7rem] uppercase tracking-[0.35em] text-charcoal/60 sm:grid-cols-2">
          <a
            href={hotel.website}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-charcoal/70 pb-2 hover:border-gold hover:text-gold"
          >
            Official site
          </a>
          <a
            href={hotel.booking_url}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="border-b border-charcoal/70 pb-2 hover:border-gold hover:text-gold"
          >
            Booking link
          </a>
        </div>
      </section>

      <ReviewMethodology />

      {(filteredByBrand.length > 0 || filteredByRegion.length > 0) && (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
          <div>
            <p className="kicker">More like this</p>
            <h2 className="section-title mt-4 text-4xl sm:text-5xl">More from {hotel.brand}</h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {filteredByBrand[0] && <ReviewCard hotel={filteredByBrand[0]} variant="feature" />}
            <div className="flex flex-col gap-10 lg:pt-12">
              {filteredByBrand.slice(1).map((item) => (
                <ReviewCard key={item.slug} hotel={item} />
              ))}
              {filteredByBrand.length < 2 &&
                filteredByRegion.slice(0, 2 - filteredByBrand.length).map((item) => (
                  <ReviewCard key={item.slug} hotel={item} />
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
