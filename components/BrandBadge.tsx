export default function BrandBadge({ label }: { label?: string }) {
  if (!label) return null;
  return (
    <span className="rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal">
      {label}
    </span>
  );
}
