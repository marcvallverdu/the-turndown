import { connection } from 'next/server';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { getArticlesByCategory } from '@/lib/db';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: `Luxury Hotel Comparisons`,
  description: `Head-to-head comparisons of the world’s best hotels, resorts, and luxury hospitality brands.`,
  alternates: { canonical: `/versus` },
  openGraph: {
    type: 'website',
    url: `/versus`,
    title: `Luxury Hotel Comparisons`,
    description: `Head-to-head comparisons of the world’s best hotels, resorts, and luxury hospitality brands.`
  },
  twitter: {
    card: 'summary_large_image',
    title: `Luxury Hotel Comparisons`,
    description: `Head-to-head comparisons of the world’s best hotels, resorts, and luxury hospitality brands.`
  }
};

export default async function VersusPage() {
  await connection();
  const articles = await getArticlesByCategory(`versus`);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Luxury Hotel Comparisons',
    url: 'https://theturndown.co/versus',
    description: 'Head-to-head comparisons of the world’s best hotels, resorts, and luxury hospitality brands.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://theturndown.co/versus/${article.slug}`,
        name: article.title
      }))
    }
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-12">
      <section>
        <p className="kicker">Versus</p>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl">Head-to-head on the best addresses.</h1>
      </section>
      <section className="flex flex-col gap-12">
        {articles.map((article) => (
          <Link key={article.slug} href={`/versus/${article.slug}`} className="group">
            <div className="grid gap-6 border-b border-mist pb-10 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={article.hero_image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/70">Versus</p>
                  <h2 className="mt-2 font-serif text-3xl">{article.title}</h2>
                </div>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-charcoal/70">{article.subtitle}</p>
                <p className="mt-4 text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">Read comparison</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
      </div>
    </>
  );
}
