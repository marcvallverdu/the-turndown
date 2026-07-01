import type { MetadataRoute } from 'next';
import { connection } from 'next/server';
import {
  getAllBrands,
  getAllDestinations,
  getAllHotels,
  getArticlesForSitemap,
  getHotelsByBrand,
  getHotelsForDestination
} from '@/lib/db';

export const revalidate = 3600;

const articleCategoryPaths: Record<string, string> = {
  'the-details': 'the-details',
  versus: 'versus',
  'new-openings': 'new-openings'
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection();

  const [hotels, brands, destinations, articles] = await Promise.all([
    getAllHotels(),
    getAllBrands(),
    getAllDestinations(),
    getArticlesForSitemap()
  ]);

  const [brandRows, destinationRows] = await Promise.all([
    Promise.all(
      brands.map(async (brand) => ({
        brand,
        hotels: await getHotelsByBrand(brand.slug)
      }))
    ),
    Promise.all(
      destinations.map(async (destination) => ({
        destination,
        hotels: await getHotelsForDestination(destination)
      }))
    )
  ]);

  const brandsWithReviewedHotels = brandRows.filter(({ hotels }) => hotels.length > 0);
  const destinationsWithReviewedHotels = destinationRows.filter(({ hotels }) => hotels.length > 0);
  const destinationsWithLandingPages = destinationRows.filter(({ hotels }) => hotels.length >= 2);

  const baseUrl = `https://theturndown.co`;

  return [
    { url: baseUrl },
    { url: `${baseUrl}/reviews` },
    { url: `${baseUrl}/brands` },
    { url: `${baseUrl}/destinations` },
    { url: `${baseUrl}/best-luxury-hotels` },
    { url: `${baseUrl}/the-details` },
    { url: `${baseUrl}/versus` },
    { url: `${baseUrl}/new-openings` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/newsletter` },
    ...hotels.map((hotel) => ({
      url: `${baseUrl}/reviews/${hotel.slug}`,
      lastModified: new Date(hotel.updated_at || hotel.created_at)
    })),
    ...brandsWithReviewedHotels.map(({ brand }) => ({
      url: `${baseUrl}/brands/${brand.slug}`,
      lastModified: new Date(brand.updated_at || brand.created_at)
    })),
    ...destinationsWithReviewedHotels.map(({ destination }) => ({
      url: `${baseUrl}/destinations/${destination.slug}`,
      lastModified: new Date(destination.updated_at || destination.created_at)
    })),
    ...destinationsWithLandingPages.map(({ destination }) => ({
      url: `${baseUrl}/best-luxury-hotels/${destination.slug}`,
      lastModified: new Date(destination.updated_at || destination.created_at)
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/${articleCategoryPaths[article.category]}/${article.slug}`,
      lastModified: new Date(article.updated_at || article.created_at)
    }))
  ];
}
