INSERT INTO public.hotels(id,slug,name,brand,brand_slug,location,country,country_slug,region,region_slug,currency,best_for,images,tagline,published,featured,created_at,updated_at)
VALUES
 ('hotel-published','fixture-hotel','Fixture Hotel','Fixture Brand','fixture-brand','London','United Kingdom','united-kingdom','Europe','europe','GBP','["city"]','[]','Published fixture',1,1,'2025-01-01T00:00:00Z','2025-02-01T00:00:00Z'),
 ('hotel-draft','draft-hotel','Draft Hotel',NULL,NULL,'Paris','France','france','Europe','europe','EUR','[]','[]','Unpublished fixture',0,0,'2025-03-01T00:00:00Z','2025-03-02T00:00:00Z');
INSERT INTO public.brands(id,slug,name,tagline,content_md,hotel_count,published,created_at,updated_at)
VALUES('brand-published','fixture-brand','Fixture Brand','A fixture brand.','Fixture brand body.',1,1,'2025-01-01T00:00:00Z','2025-02-01T00:00:00Z');
INSERT INTO public.destinations(id,slug,name,country,region,intro_md,content_md,published,created_at,updated_at)
VALUES('destination-draft','fixture-destination','Fixture Destination','France','Europe','Intro','Body',0,'2025-01-01T00:00:00Z','2025-02-01T00:00:00Z');
INSERT INTO public.articles(id,slug,title,subtitle,category,content_md,hotels_mentioned,published,featured,created_at,updated_at)
VALUES('article-published','fixture-article','Fixture Article','Fixture subtitle','the-details','## Fixture body','[]',1,0,'2025-01-01T00:00:00Z','2025-02-01T00:00:00Z');
INSERT INTO public.newsletter_subscribers(email,confirmed) VALUES('fixture@example.com',1);
