import Image from 'next/image';
import Link from 'next/link';
import BrandBadge from '@/components/BrandBadge';
import RatingDisplay from '@/components/RatingDisplay';

export default function ReviewCard({ hotel }: { hotel: any }) {
  return (
    <Link
      href={`/reviews/${hotel.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-mist bg-white/70 shadow-soft-card transition"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={hotel.hero_image}
          alt={hotel.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <BrandBadge label={hotel.brand} />
        </div>
      </div>
      <div className="flex h-full flex-col gap-3 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60">{hotel.location}</p>
          <h3 className="mt-2 font-serif text-2xl leading-tight">{hotel.name}</h3>
        </div>
        <p className="text-sm leading-relaxed text-charcoal/70">{hotel.tagline}</p>
        <div className="mt-auto flex items-center justify-between border-t border-mist pt-4">
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">Rating</p>
          <RatingDisplay value={hotel.rating_overall} compact />
        </div>
      </div>
    </Link>
  );
}
