import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import MarkdownContent from '@/components/MarkdownContent';
import ReviewCard from '@/components/ReviewCard';
import { getArticleBySlugAndCategory, getHotelsBySlugs } from '@/lib/db';
import { articleJsonLd } from '@/lib/seo';
import { jsonParse } from '@/lib/utils';

export const revalidate = 3600;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlugAndCategory(slug, `versus`);
  if (!article) return { title: `Versus` };
  const path = `/versus/${article.slug}`;
  return {
    title: article.title,
    description: article.subtitle,
    alternates: {
      canonical: `https://theturndown.co${path}`
    },
    openGraph: {
      type: 'article',
      url: path,
      title: article.title,
      description: article.subtitle,
      images: [{ url: article.hero_image }]
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.subtitle,
      images: [article.hero_image]
    }
  };
}

export default async function VersusArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlugAndCategory(slug, `versus`);
  if (!article) notFound();

  const path = `/versus/${article.slug}`;
  const hotelSlugs = jsonParse<string[]>(article.hotels_mentioned, []).slice(0, 4);
  const mentionedHotels = await getHotelsBySlugs(hotelSlugs);

  return (
    <div className="flex w-full flex-col gap-16 pb-24">
      <JsonLd data={articleJsonLd(article, path, `Versus`)} />
      <div className="mx-auto w-full max-w-6xl px-6 pt-8">
        <Breadcrumbs
          currentPath={path}
          items={[
            { label: 'Home', href: '/' },
            { label: 'Versus', href: '/versus' },
            { label: article.title }
          ]}
        />
      </div>

      <section className="relative h-[65vh] min-h-[380px] w-full">
        <Image src={article.hero_image} alt={article.title} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-10 left-8 text-white sm:left-12">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/70">Versus</p>
          <h1 className="mt-4 font-serif text-5xl">{article.title}</h1>
          <p className="mt-4 max-w-2xl text-sm text-white/80">{article.subtitle}</p>
        </div>
      </section>

      <section className="body-max px-6">
        <MarkdownContent content={article.content_md} demoteH1 />
      </section>

      {mentionedHotels.length > 0 && (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
          <div className="border-t border-charcoal/10 pt-10">
            <p className="kicker">Hotels in this comparison</p>
            <h2 className="section-title mt-4 text-4xl sm:text-5xl">Read the full reviews</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-charcoal/70">
              Compare the verdicts above with The Turndown's individual hotel reviews, room notes, service calls, and booking-fit caveats.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {mentionedHotels.map((hotel) => (
              <ReviewCard key={hotel.slug} hotel={hotel} variant="compact" />
            ))}
          </div>
        </section>
      )}

      <section className="body-max px-6">
        <div className="border-t border-charcoal/10 pt-10">
          <p className="kicker">Keep reading</p>
          <h2 className="mt-4 font-serif text-3xl text-charcoal">The decision is rarely just one hotel.</h2>
          <p className="mt-4 text-sm leading-7 text-charcoal/70">
            The Turndown newsletter sends the sharper hotel calls: new reviews, destination shortlists, and the details that separate a merely expensive stay from a genuinely memorable one.
          </p>
          <Link href="/newsletter" className="mt-6 inline-flex border-b border-charcoal/70 pb-2 text-[0.65rem] uppercase tracking-[0.35em] hover:border-gold hover:text-gold">
            Join the newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}
