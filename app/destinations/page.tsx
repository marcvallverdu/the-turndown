import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllDestinations } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Destinations',
  description: 'Destination guides and hotel reviews across the world.'
};

export default function DestinationsPage() {
  const destinations = getAllDestinations();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-12">
      <section>
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Destinations</p>
        <h1 className="mt-4 font-serif text-5xl">Where to spend the slow season.</h1>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        {destinations.map((destination) => (
          <Link
            key={destination.slug}
            href={`/destinations/${destination.slug}`}
            className="group overflow-hidden rounded-3xl border border-mist bg-white/70 shadow-soft-card"
          >
            <div className="relative h-52">
              <Image
                src={destination.hero_image}
                alt={destination.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Destination guide</p>
                <h2 className="mt-2 font-serif text-3xl">{destination.name}</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed text-charcoal/70">{destination.intro_md}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
