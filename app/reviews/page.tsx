import { Metadata } from 'next';
import ReviewCard from '@/components/ReviewCard';
import FilterBar from '@/components/FilterBar';
import JsonLd from '@/components/JsonLd';
import { getAllBrands, getAllDestinations, getAllHotels } from '@/lib/db';

export const revalidate = 3600;

const title = `Luxury Hotel Reviews`;
const description = `Independent luxury hotel reviews from The Turndown, curated by brand, destination, style, and nightly rate.`;

type SearchParams = { brand?: string; destination?: string; price?: string };
type PageProps = {
  searchParams?: Promise<SearchParams>;
};

function hasFilters(sp: SearchParams = {}) {
  return Boolean(sp.brand || sp.destination || sp.price);
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = searchParams ? await searchParams : {};
  const filtered = hasFilters(sp);

  return {
    title,
    description,
    alternates: { canonical: `/reviews` },
    robots: filtered ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: 'website',
      url: `/reviews`,
      title,
      description
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export default async function ReviewsPage({ searchParams }: PageProps) {
  const sp = searchParams ? await searchParams : {};
  const [brands, destinations] = await Promise.all([getAllBrands(), getAllDestinations()]);

  const price = sp?.price;
  const filters = {
    brandSlug: sp?.brand || undefined,
    destinationSlug: sp?.destination || undefined,
    minPrice: price === `mid` ? 900 : price === `high` ? 1600 : undefined,
    maxPrice: price === `low` ? 900 : price === `mid` ? 1600 : undefined
  };

  const hotels = await getAllHotels(filters);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    url: 'https://theturndown.co/reviews',
    description,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: hotels.map((hotel, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://theturndown.co/reviews/${hotel.slug}`,
        name: hotel.name
      }))
    }
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-12">
        <section>
          <p className="kicker">Reviews</p>
          <h1 className="mt-4 font-serif text-5xl sm:text-6xl">Every review, curated.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/70">
            Filter by brand, destination, or nightly rate to find the stays that match your pace.
          </p>
        </section>
        <FilterBar
          brands={brands}
          destinations={destinations}
          current={{ brand: sp?.brand, destination: sp?.destination, price }}
        />
        <section className="grid gap-12 md:grid-cols-2">
          {hotels.map((hotel, index) => (
            <ReviewCard key={hotel.slug} hotel={hotel} className={index % 2 === 1 ? `md:mt-16` : ``} />
          ))}
        </section>
      </div>
    </>
  );
}
