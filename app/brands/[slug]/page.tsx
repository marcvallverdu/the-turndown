import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownContent from '@/components/MarkdownContent';
import ReviewCard from '@/components/ReviewCard';
import JsonLd from '@/components/JsonLd';
import { getBrandBySlug, getHotelsByBrand } from '@/lib/db';

export const revalidate = 3600;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = await getBrandBySlug(slug);
  if (!brand) return { title: `Brand` };
  const hotels = await getHotelsByBrand(brand.slug);
  return {
    title: `${brand.name} Hotels: Brand Guide & Best Properties`,
    description: brand.tagline,
    alternates: {
      canonical: `https://theturndown.co/brands/${brand.slug}`
    },
    robots: hotels.length ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: `${brand.name} Hotels: Brand Guide & Best Properties`,
      description: brand.tagline,
      images: [{ url: brand.hero_image }]
    }
  };
}

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params;
  const brand = await getBrandBySlug(slug);
  if (!brand) notFound();

  const hotels = await getHotelsByBrand(brand.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: brand.name,
    description: brand.tagline,
    url: `https://theturndown.co/brands/${brand.slug}`,
    image: brand.hero_image,
    sameAs: brand.website,
    subjectOf: {
      '@type': 'ItemList',
      name: `${brand.name} hotel reviews`,
      itemListElement: hotels.map((hotel, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://theturndown.co/reviews/${hotel.slug}`,
        name: hotel.name
      }))
    }
  };

  return (
    <div className="flex w-full flex-col gap-16 pb-24">
      <JsonLd data={jsonLd} />
      <div className="mx-auto w-full max-w-6xl px-6 pt-8">
        <Breadcrumbs
          currentPath={`/brands/${brand.slug}`}
          items={[
            { label: 'Home', href: '/' },
            { label: 'Brands', href: '/brands' },
            { label: brand.name }
          ]}
        />
      </div>

      <section className="relative h-[65vh] min-h-[420px] w-full">
        <Image src={brand.hero_image} alt={brand.name} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-10 left-8 text-white sm:left-12">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/70">Brand profile</p>
          <h1 className="mt-4 font-serif text-5xl">{brand.name}</h1>
          <p className="mt-4 max-w-xl text-sm text-white/80">{brand.tagline}</p>
        </div>
      </section>

      <section className="body-max px-6">
        <div className="section-rule" />
        <div className="mt-6 grid gap-4 text-sm text-charcoal/70">
          <div className="flex items-center justify-between">
            <span>Founded</span>
            <span>{brand.founded_year}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Parent</span>
            <span>{brand.parent_company}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Signature property</span>
            <span>{brand.best_property}</span>
          </div>
        </div>
        <a
          href={brand.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex border-b border-charcoal/70 pb-2 text-[0.65rem] uppercase tracking-[0.35em] hover:border-gold hover:text-gold"
        >
          Visit brand
        </a>
      </section>

      <section className="body-max px-6">
        <MarkdownContent content={brand.content_md} demoteH1 />
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div>
          <p className="kicker">Reviewed hotels</p>
          <h2 className="section-title mt-4 text-4xl sm:text-5xl">The Turndown on {brand.name}</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {hotels.map((hotel, index) => (
            <ReviewCard key={hotel.slug} hotel={hotel} className={index % 2 === 1 ? `md:mt-16` : ``} />
          ))}
        </div>
      </section>
    </div>
  );
}
