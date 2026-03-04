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
  if (!article) return { title: 'New opening' };
  return {
    title: article.title,
    description: article.subtitle,
    alternates: {
      canonical: `https://theturndown.co/new-openings/${article.slug}`
    },
    openGraph: {
      title: article.title,
      description: article.subtitle,
      images: [{ url: article.hero_image }]
    }
  };
}

export default async function NewOpeningPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm text-charcoal/60">Article not found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pb-20 pt-10">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'New Openings', href: '/new-openings' },
          { label: article.title }
        ]}
      />

      <section className="relative h-[50vh] min-h-[320px] overflow-hidden rounded-[36px]">
        <Image src={article.hero_image} alt={article.title} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">New opening</p>
          <h1 className="mt-3 font-serif text-4xl">{article.title}</h1>
          <p className="mt-3 text-sm text-white/80">{article.subtitle}</p>
        </div>
      </section>

      <section className="rounded-[32px] border border-mist bg-white/70 p-10 shadow-soft-card">
        <MarkdownContent content={article.content_md} />
      </section>
    </div>
  );
}
