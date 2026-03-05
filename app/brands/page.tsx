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
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-12">
      <section>
        <p className="kicker">Brands</p>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl">Houses with a handwriting of their own.</h1>
      </section>
      <section className="flex flex-col gap-10">
        {brands.map((brand, index) => (
          <Link key={brand.slug} href={`/brands/${brand.slug}`} className="group">
            <div className="flex items-center justify-between gap-6 border-b border-mist pb-6">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">
                  Brand profile {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-4 font-serif text-4xl">{brand.name}</h2>
                <p className="mt-3 max-w-2xl text-sm text-charcoal/70">{brand.tagline}</p>
              </div>
              <span className="hidden text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55 group-hover:text-gold md:inline">
                Read profile
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
