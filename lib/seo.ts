export const SITE_URL = 'https://theturndown.co';
export const SITE_NAME = 'The Turndown';
export const DEFAULT_OG_IMAGE = '/og-default.png';

export const publisher = {
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`
};

export function absoluteUrl(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function imageUrl(src?: string | null) {
  if (!src) return undefined;
  return absoluteUrl(src);
}

export function compactJsonLd<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined && entry !== null && entry !== '')
  ) as T;
}

export function breadcrumbJsonLd(items: { label: string; href?: string }[], currentPath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href || currentPath)
    }))
  };
}

export function articleJsonLd(article: any, path: string, sectionName: string) {
  const url = absoluteUrl(path);
  return compactJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    name: article.title,
    description: article.subtitle,
    image: article.hero_image ? [imageUrl(article.hero_image)] : undefined,
    url,
    datePublished: article.created_at,
    dateModified: article.updated_at || article.created_at,
    articleSection: sectionName,
    author: publisher,
    publisher,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  });
}

export function itemListJsonLd(name: string, items: { slug: string; name: string }[], pathPrefix = '/reviews') {
  return {
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(`${pathPrefix}/${item.slug}`),
      name: item.name
    }))
  };
}
