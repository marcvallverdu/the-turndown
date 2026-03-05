export default function BrandBadge({ label }: { label?: string }) {
  if (!label) return null;
  return (
    <span className="text-[0.65rem] uppercase tracking-[0.35em] text-white/80">
      {label}
    </span>
  );
}
