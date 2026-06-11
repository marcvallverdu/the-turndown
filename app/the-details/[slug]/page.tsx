import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import MarkdownContent from '@/components/MarkdownContent';
import { getArticleBySlugAndCategory } from '@/lib/db';
import { articleJsonLd } from '@/lib/seo';

export const revalidate = 3600;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlugAndCategory(slug, `the-details`);
  if (!article) return { title: `Essay` };
  const path = `/the-details/${article.slug}`;
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

export default async function TheDetailsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlugAndCategory(slug, `the-details`);
  if (!article) notFound();

  const path = `/the-details/${article.slug}`;

  return (
    <div className="flex w-full flex-col gap-16 pb-24">
      <JsonLd data={articleJsonLd(article, path, `The Details`)} />
      <div className="mx-auto w-full max-w-6xl px-6 pt-8">
        <Breadcrumbs
          currentPath={path}
          items={[
            { label: 'Home', href: '/' },
            { label: 'The Details', href: '/the-details' },
            { label: article.title }
          ]}
        />
      </div>

      <section className="relative h-[65vh] min-h-[380px] w-full">
        <Image src={article.hero_image} alt={article.title} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-10 left-8 text-white sm:left-12">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/70">Essay</p>
          <h1 className="mt-4 font-serif text-5xl">{article.title}</h1>
          <p className="mt-4 max-w-2xl text-sm text-white/80">{article.subtitle}</p>
        </div>
      </section>

      <section className="body-max px-6">
        <MarkdownContent content={article.content_md} demoteH1 />
      </section>
    </div>
  );
}
