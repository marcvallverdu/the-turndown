import Link from 'next/link';
import HeroImage from '@/components/HeroImage';
import ReviewCard from '@/components/ReviewCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import MarkdownContent from '@/components/MarkdownContent';
import { getAllBrands, getFeaturedHotels, getLatestArticleByCategory, getLatestHotels } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const [featured] = getFeaturedHotels(1);
  const latestReviews = getLatestHotels(4);
  const latestEssay = getLatestArticleByCategory('the-details');
  const brands = getAllBrands();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-12">
      {featured && (
        <section className="flex flex-col gap-6">
          <HeroImage
            src={featured.hero_image}
            title={featured.name}
            subtitle={`${featured.brand} - ${featured.location}`}
          />
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-charcoal/60">
            <p>Featured review</p>
            <Link href={`/reviews/${featured.slug}`} className="hover:text-gold">
              Read the full review
            </Link>
          </div>
        </section>
      )}

      <section className="grid gap-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Latest Reviews</p>
            <h2 className="section-title mt-3">The newest arrivals</h2>
          </div>
          <Link href="/reviews" className="text-xs uppercase tracking-[0.3em] text-charcoal/60 hover:text-gold">
            View all reviews
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {latestReviews.map((hotel) => (
            <ReviewCard key={hotel.slug} hotel={hotel} />
          ))}
        </div>
      </section>

      {latestEssay && (
        <section className="rounded-[32px] border border-mist bg-white/70 p-10 shadow-soft-card">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">The Details</p>
              <h2 className="mt-3 font-serif text-3xl">{latestEssay.title}</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal/70">
                {latestEssay.subtitle}
              </p>
            </div>
            <Link
              href={`/the-details/${latestEssay.slug}`}
              className="rounded-full border border-charcoal/60 px-6 py-3 text-xs uppercase tracking-[0.3em] transition hover:border-gold hover:text-gold"
            >
              Read the essay
            </Link>
          </div>
          <div className="mt-8 h-px w-full gradient-divider" />
          <div className="mt-8 line-clamp-5 text-sm text-charcoal/80">
            <MarkdownContent content={latestEssay.content_md?.split('\n').slice(0, 3).join('\n')} />
          </div>
        </section>
      )}

      <section className="grid gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Browse by Brand</p>
          <h2 className="section-title mt-3">Houses with a point of view</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="min-w-[240px] rounded-3xl border border-mist bg-white/70 p-6 shadow-soft-card transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">Brand profile</p>
              <h3 className="mt-3 font-serif text-2xl">{brand.name}</h3>
              <p className="mt-2 text-sm text-charcoal/70">{brand.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-mist bg-white/70 p-10 shadow-soft-card">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Newsletter</p>
          <h2 className="section-title mt-3">A quieter kind of inbox</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/70">
            Subscribe for long-form reviews, opening notes, and seasonal destinations. No flash sales, no clutter -- just
            thoughtful hotel writing.
          </p>
        </div>
        <NewsletterSignup variant="inline" compact />
      </section>

      <NewsletterSignup variant="popup" />
    </div>
  );
}
