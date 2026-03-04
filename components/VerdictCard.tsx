export default function VerdictCard({
  tagline,
  bestFor,
  skipIf,
  standout
}: {
  tagline: string;
  bestFor: string;
  skipIf: string;
  standout: string;
}) {
  return (
    <div className="rounded-3xl border border-gold/60 bg-white/70 p-8 shadow-soft-card">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">The Verdict</p>
      <h3 className="mt-3 font-serif text-3xl leading-tight">{tagline}</h3>
      <div className="mt-6 grid gap-4 text-sm text-charcoal/80 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Best for</p>
          <p className="mt-2 leading-relaxed">{bestFor}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Skip if</p>
          <p className="mt-2 leading-relaxed">{skipIf}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Standout</p>
          <p className="mt-2 leading-relaxed">{standout}</p>
        </div>
      </div>
    </div>
  );
}
