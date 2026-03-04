import { Metadata } from 'next';
import ReviewCard from '@/components/ReviewCard';
import FilterBar from '@/components/FilterBar';
import { getAllBrands, getAllDestinations, getAllHotels } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'All hotel reviews from The Turndown, filterable by brand, destination, and price.'
};

type PageProps = {
  searchParams?: Promise<{ brand?: string; destination?: string; price?: string }>;
};

export default async function ReviewsPage({ searchParams }: PageProps) {
  const sp = searchParams ? await searchParams : {};
  const brands = getAllBrands();
  const destinations = getAllDestinations();

  const price = sp?.price;
  const filters = {
    brandSlug: sp?.brand || undefined,
    destinationSlug: sp?.destination || undefined,
    minPrice: price === 'mid' ? 900 : price === 'high' ? 1600 : undefined,
    maxPrice: price === 'low' ? 900 : price === 'mid' ? 1600 : undefined
  };

  const hotels = getAllHotels(filters);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-12">
      <section>
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Reviews</p>
        <h1 className="mt-4 font-serif text-5xl">Every review, curated.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/70">
          Filter by brand, destination, or nightly rate to find the stays that match your pace.
        </p>
      </section>
      <FilterBar
        brands={brands}
        destinations={destinations}
        current={{ brand: sp?.brand, destination: sp?.destination, price }}
      />
      <section className="grid gap-6 md:grid-cols-2">
        {hotels.map((hotel) => (
          <ReviewCard key={hotel.slug} hotel={hotel} />
        ))}
      </section>
    </div>
  );
}
