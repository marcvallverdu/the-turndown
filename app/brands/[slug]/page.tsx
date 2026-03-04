import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownContent from '@/components/MarkdownContent';
import ReviewCard from '@/components/ReviewCard';
import { getBrandBySlug, getHotelsByBrand } from '@/lib/db';

export const dynamic = 'force-dynamic';

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return { title: 'Brand' };
  return {
    title: brand.name,
    description: brand.tagline,
    alternates: {
      canonical: `https://theturndown.co/brands/${brand.slug}`
    },
    openGraph: {
      title: brand.name,
      description: brand.tagline,
      images: [{ url: brand.hero_image }]
    }
  };
}

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm text-charcoal/60">Brand not found.</p>
      </div>
    );
  }

  const hotels = getHotelsByBrand(brand.slug);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-10">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Brands', href: '/brands' },
          { label: brand.name }
        ]}
      />

      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative h-[420px] overflow-hidden rounded-[36px]">
          <Image src={brand.hero_image} alt={brand.name} fill className="object-cover" sizes="100vw" />
        </div>
        <div className="flex flex-col justify-between rounded-[36px] border border-mist bg-white/70 p-8 shadow-soft-card">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Brand profile</p>
            <h1 className="mt-4 font-serif text-4xl">{brand.name}</h1>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{brand.tagline}</p>
          </div>
          <div className="mt-8 grid gap-4 text-sm text-charcoal/70">
            <div className="flex items-center justify-between">
              <span>Founded</span>
              <span>{brand.founded_year}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Parent</span>
              <span>{brand.parent_company}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Signature</span>
              <span>{brand.best_property}</span>
            </div>
          </div>
          <Link
            href={brand.website}
            className="mt-6 rounded-full border border-charcoal/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-center hover:border-gold hover:text-gold"
          >
            Visit brand
          </Link>
        </div>
      </section>

      <section className="rounded-[32px] border border-mist bg-white/70 p-10 shadow-soft-card">
        <MarkdownContent content={brand.content_md} />
      </section>

      <section className="grid gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Reviewed hotels</p>
          <h2 className="section-title mt-3">The Turndown on {brand.name}</h2>
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
