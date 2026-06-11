import { connection } from 'next/server';
import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { getAllBrands } from '@/lib/db';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: `Luxury Hotel Brands`,
  description: `Profiles of the luxury hotel brands shaping modern travel, from Aman and Belmond to boutique hospitality houses.`,
  alternates: { canonical: `/brands` },
  openGraph: {
    type: 'website',
    url: `/brands`,
    title: `Luxury Hotel Brands`,
    description: `Profiles of the luxury hotel brands shaping modern travel, from Aman and Belmond to boutique hospitality houses.`
  },
  twitter: {
    card: 'summary_large_image',
    title: `Luxury Hotel Brands`,
    description: `Profiles of the luxury hotel brands shaping modern travel, from Aman and Belmond to boutique hospitality houses.`
  }
};

export default async function BrandsPage() {
  await connection();
  const brands = await getAllBrands();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Luxury Hotel Brands',
    url: 'https://theturndown.co/brands',
    description: 'Profiles of the luxury hotel brands shaping modern travel, from Aman and Belmond to boutique hospitality houses.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: brands.map((brand, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://theturndown.co/brands/${brand.slug}`,
        name: brand.name
      }))
    }
  };

  return (
    <>
      <JsonLd data={jsonLd} />
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
                  Brand profile {String(index + 1).padStart(2, `0`)}
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
    </>
  );
}
