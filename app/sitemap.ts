import type { MetadataRoute } from 'next';
import { getAllBrands, getAllDestinations, getAllHotels, getArticlesForSitemap } from '@/lib/db';

export const dynamic = `force-dynamic`;

const articleCategoryPaths: Record<string, string> = {
  'the-details': 'the-details',
  versus: 'versus',
  'new-openings': 'new-openings'
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [hotels, brands, destinations, articles] = await Promise.all([
    getAllHotels(),
    getAllBrands(),
    getAllDestinations(),
    getArticlesForSitemap()
  ]);

  const baseUrl = `https://theturndown.co`;
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now },
    { url: `${baseUrl}/reviews`, lastModified: now },
    { url: `${baseUrl}/brands`, lastModified: now },
    { url: `${baseUrl}/destinations`, lastModified: now },
    { url: `${baseUrl}/the-details`, lastModified: now },
    { url: `${baseUrl}/versus`, lastModified: now },
    { url: `${baseUrl}/new-openings`, lastModified: now },
    { url: `${baseUrl}/about`, lastModified: now },
    { url: `${baseUrl}/newsletter`, lastModified: now },
    ...hotels.map((hotel) => ({
      url: `${baseUrl}/reviews/${hotel.slug}`,
      lastModified: new Date(hotel.updated_at || hotel.created_at)
    })),
    ...brands.map((brand) => ({
      url: `${baseUrl}/brands/${brand.slug}`,
      lastModified: new Date(brand.updated_at || brand.created_at)
    })),
    ...destinations.map((destination) => ({
      url: `${baseUrl}/destinations/${destination.slug}`,
      lastModified: new Date(destination.updated_at || destination.created_at)
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/${articleCategoryPaths[article.category]}/${article.slug}`,
      lastModified: new Date(article.updated_at || article.created_at)
    }))
  ];
}
