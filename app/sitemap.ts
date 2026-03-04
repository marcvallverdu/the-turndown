import type { MetadataRoute } from 'next';
import { getAllBrands, getAllDestinations, getAllHotels } from '@/lib/db';
import db from '@/lib/db';

export const dynamic = 'force-dynamic';

export default function sitemap(): MetadataRoute.Sitemap {
  const hotels = getAllHotels();
  const brands = getAllBrands();
  const destinations = getAllDestinations();
  const articles = db
    .prepare('SELECT slug, category FROM articles WHERE published = 1')
    .all() as { slug: string; category: string }[];

  const baseUrl = 'https://theturndown.co';

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/reviews`, lastModified: new Date() },
    { url: `${baseUrl}/brands`, lastModified: new Date() },
    { url: `${baseUrl}/destinations`, lastModified: new Date() },
    { url: `${baseUrl}/the-details`, lastModified: new Date() },
    { url: `${baseUrl}/versus`, lastModified: new Date() },
    { url: `${baseUrl}/new-openings`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/newsletter`, lastModified: new Date() },
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
      url: `${baseUrl}/${article.category}/${article.slug}`,
      lastModified: new Date()
    }))
  ];
}
