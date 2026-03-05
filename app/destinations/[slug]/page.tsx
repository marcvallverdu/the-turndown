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
    <div className="flex w-full flex-col gap-16 pb-24">
      <div className="mx-auto w-full max-w-6xl px-6 pt-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: destination.name }
          ]}
        />
      </div>

      <section className="relative h-[70vh] min-h-[420px] w-full">
        <Image src={destination.hero_image} alt={destination.name} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-10 left-8 text-white sm:left-12">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/70">Destination guide</p>
          <h1 className="mt-4 font-serif text-5xl">{destination.name}</h1>
          <p className="mt-4 text-sm text-white/80">{destination.best_time}</p>
        </div>
      </section>

      <section className="body-max px-6">
        <MarkdownContent content={destination.content_md} />
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div>
          <p className="kicker">Reviewed hotels</p>
          <h2 className="section-title mt-4 text-4xl sm:text-5xl">Stay in {destination.name}</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {hotels.map((hotel, index) => (
            <ReviewCard key={hotel.slug} hotel={hotel} className={index % 2 === 1 ? 'md:mt-16' : ''} />
          ))}
        </div>
      </section>
    </div>
  );
}
