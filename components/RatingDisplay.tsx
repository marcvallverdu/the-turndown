import { formatRating } from '@/lib/utils';
import { cn } from '@/lib/cn';

type Props = {
  value?: number;
  compact?: boolean;
};

export default function RatingDisplay({ value, compact }: Props) {
  return (
    <div className={cn('flex items-baseline gap-2', compact && 'gap-1')}>
      <span className={cn('font-serif text-2xl', compact && 'text-lg')}>{formatRating(value)}</span>
      <span className={cn('text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/60', compact && 'text-[0.55rem]')}>
        /10
      </span>
    </div>
  );
}
