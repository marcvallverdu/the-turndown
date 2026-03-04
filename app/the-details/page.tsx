import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getArticlesByCategory } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'The Details',
  description: 'Long-form essays on luxury hotel culture, design, and hospitality.'
};

export default function TheDetailsPage() {
  const articles = getArticlesByCategory('the-details');

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-12">
      <section>
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">The Details</p>
        <h1 className="mt-4 font-serif text-5xl">Essays for the slow reader.</h1>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/the-details/${article.slug}`}
            className="group overflow-hidden rounded-3xl border border-mist bg-white/70 shadow-soft-card"
          >
            <div className="relative h-52">
              <Image
                src={article.hero_image}
                alt={article.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Essay</p>
                <h2 className="mt-2 font-serif text-3xl">{article.title}</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed text-charcoal/70">{article.subtitle}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
