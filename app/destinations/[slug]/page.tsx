import { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownContent from '@/components/MarkdownContent';
import ReviewCard from '@/components/ReviewCard';
import { getDestinationBySlug, getHotelsForDestination } from '@/lib/db';

export const dynamic = 'force-dynamic';

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return { title: 'Destination' };
  return {
    title: destination.name,
    description: destination.intro_md,
    alternates: {
      canonical: `https://theturndown.co/destinations/${destination.slug}`
    },
    openGraph: {
      title: destination.name,
      description: destination.intro_md,
      images: [{ url: destination.hero_image }]
    }
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm text-charcoal/60">Destination not found.</p>
      </div>
    );
  }

  const hotels = getHotelsForDestination(destination);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-10">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: destination.name }
        ]}
      />

      <section className="relative h-[60vh] min-h-[380px] overflow-hidden rounded-[40px]">
        <Image src={destination.hero_image} alt={destination.name} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">Destination guide</p>
          <h1 className="mt-3 font-serif text-5xl">{destination.name}</h1>
          <p className="mt-3 text-sm text-white/80">{destination.best_time}</p>
        </div>
      </section>

      <section className="grid gap-8 rounded-[32px] border border-mist bg-white/70 p-10 shadow-soft-card">
        <MarkdownContent content={destination.content_md} />
      </section>

      <section className="grid gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Reviewed hotels</p>
          <h2 className="section-title mt-3">Stay in {destination.name}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {hotels.map((hotel) => (
            <ReviewCard key={hotel.slug} hotel={hotel} />
          ))}
        </div>
      </section>
    </div>
  );
}
