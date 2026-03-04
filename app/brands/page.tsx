import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBrands } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Brands',
  description: 'Luxury hotel brands profiled by The Turndown.'
};

export default function BrandsPage() {
  const brands = getAllBrands();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-12">
      <section>
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Brands</p>
        <h1 className="mt-4 font-serif text-5xl">Houses with a handwriting of their own.</h1>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        {brands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/brands/${brand.slug}`}
            className="group rounded-3xl border border-mist bg-white/70 p-8 shadow-soft-card transition hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Brand profile</p>
            <h2 className="mt-4 font-serif text-3xl">{brand.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{brand.tagline}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold">Read profile</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
