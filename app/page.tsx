import Link from 'next/link';
import HeroImage from '@/components/HeroImage';
import ReviewCard from '@/components/ReviewCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getAllBrands, getFeaturedHotels, getLatestArticleByCategory, getLatestHotels } from '@/lib/db';

export const dynamic = `force-dynamic`;

export default async function HomePage() {
  const [featuredHotels, latestReviews, latestEssay, brands] = await Promise.all([
    getFeaturedHotels(1),
    getLatestHotels(4),
    getLatestArticleByCategory(`the-details`),
    getAllBrands()
  ]);
  const [featured] = featuredHotels;
  const essayQuote =
    latestEssay?.content_md
      ?.split(`\n`)
      .find((line: string) => line.trim() && !line.trim().startsWith(`#`) && !line.trim().startsWith(`##`)) || ``;

  return (
    <div className="flex w-full flex-col gap-16 pb-24">
      {featured && (
        <section>
          <HeroImage
            src={featured.hero_image}
            title={featured.name}
            subtitle={`${featured.brand} · ${featured.location}`}
          />
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-6 text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/60">
            <p>Featured review</p>
            <Link href={`/reviews/${featured.slug}`} className="hover:text-gold">
              Read the full review
            </Link>
          </div>
        </section>
      )}

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker">Latest reviews</p>
            <h2 className="section-title mt-4 text-4xl sm:text-5xl">The newest arrivals</h2>
          </div>
          <Link href="/reviews" className="text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/60 hover:text-gold">
            View all reviews
          </Link>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          {latestReviews[0] && <ReviewCard hotel={latestReviews[0]} variant="feature" />}
          <div className="flex flex-col gap-10 lg:pt-12">
            {latestReviews.slice(1, 3).map((hotel) => (
              <ReviewCard key={hotel.slug} hotel={hotel} variant="standard" />
            ))}
          </div>
        </div>
      </section>

      {latestEssay && (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="kicker">The Details</p>
              <h2 className="section-title mt-4 text-4xl sm:text-5xl">{latestEssay.title}</h2>
            </div>
            <Link
              href={`/the-details/${latestEssay.slug}`}
              className="text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/60 hover:text-gold"
            >
              Read the essay
            </Link>
          </div>
          <div className="section-rule" />
          <p className="pull-quote">{essayQuote || latestEssay.subtitle}</p>
          <p className="body-max text-sm text-charcoal/70">{latestEssay.subtitle}</p>
        </section>
      )}

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div>
          <p className="kicker">Browse by brand</p>
          <h2 className="section-title mt-4 text-4xl sm:text-5xl">Houses with a point of view</h2>
        </div>
        <div className="flex gap-10 overflow-x-auto pb-4">
          {brands.map((brand) => (
            <Link key={brand.slug} href={`/brands/${brand.slug}`} className="min-w-[240px]">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">Brand profile</p>
              <h3 className="mt-4 font-serif text-3xl">{brand.name}</h3>
              <p className="mt-3 text-sm text-charcoal/70">{brand.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
        <div className="section-rule" />
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="kicker">Newsletter</p>
            <h2 className="section-title mt-4 text-4xl sm:text-5xl">A quieter kind of inbox</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/70">
              Subscribe for long-form reviews, opening notes, and seasonal destinations. No flash sales, no clutter —
              just thoughtful hotel writing.
            </p>
          </div>
          <NewsletterSignup compact />
        </div>
      </section>
    </div>
  );
}
