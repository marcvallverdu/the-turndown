import { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownContent from '@/components/MarkdownContent';
import { getArticleBySlug } from '@/lib/db';

export const dynamic = 'force-dynamic';

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Versus' };
  return {
    title: article.title,
    description: article.subtitle,
    alternates: {
      canonical: `https://theturndown.co/versus/${article.slug}`
    },
    openGraph: {
      title: article.title,
      description: article.subtitle,
      images: [{ url: article.hero_image }]
    }
  };
}

export default async function VersusArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm text-charcoal/60">Comparison not found.</p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-16 pb-24">
      <div className="mx-auto w-full max-w-6xl px-6 pt-8">
        <Breadcrumbs
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
        <MarkdownContent content={article.content_md} />
      </section>
    </div>
  );
}
