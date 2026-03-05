import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';

export default function ReviewCard({
  hotel,
  variant = 'standard',
  className
}: {
  hotel: any;
  variant?: 'standard' | 'feature' | 'compact';
  className?: string;
}) {
  return (
    <Link
      href={`/reviews/${hotel.slug}`}
      className={cn('group block', className)}
    >
      <div className={cn('relative overflow-hidden', variant === 'compact' ? 'h-[260px]' : 'h-[360px]', variant === 'feature' && 'h-[520px] md:h-[620px]')}>
        <Image
          src={hotel.hero_image}
          alt={hotel.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/75">{hotel.brand}</p>
          <h3
            className={cn(
              'mt-2 font-serif leading-tight',
              variant === 'feature' ? 'text-4xl sm:text-5xl' : 'text-3xl'
            )}
          >
            {hotel.name}
          </h3>
          <p className="mt-3 text-[0.65rem] uppercase tracking-[0.35em] text-white/70">{hotel.location}</p>
        </div>
      </div>
      <p className={cn('mt-4 max-w-xl text-sm text-charcoal/70', variant === 'feature' && 'text-base')}>
        {hotel.tagline}
      </p>
    </Link>
  );
}
