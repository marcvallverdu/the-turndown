import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllDestinations } from '@/lib/db';

export const dynamic = `force-dynamic`;

export const metadata: Metadata = {
  title: `Destinations`,
  description: `Destination guides and hotel reviews across the world.`
};

export default async function DestinationsPage() {
  const destinations = await getAllDestinations();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-12">
      <section>
        <p className="kicker">Destinations</p>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl">Where to spend the slow season.</h1>
      </section>
      <section className="flex flex-col gap-12">
        {destinations.map((destination) => (
          <Link key={destination.slug} href={`/destinations/${destination.slug}`} className="group">
            <div className="grid gap-6 border-b border-mist pb-10 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.hero_image}
                  alt={destination.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/70">Destination guide</p>
                  <h2 className="mt-2 font-serif text-3xl">{destination.name}</h2>
                </div>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-charcoal/70">{destination.intro_md}</p>
                <p className="mt-4 text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">
                  Best time: {destination.best_time}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
