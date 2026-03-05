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
    <div className="border-l-2 border-gold bg-white/40 px-8 py-10">
      <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold">The Verdict</p>
      <h3 className="mt-4 font-serif text-3xl leading-tight">{tagline}</h3>
      <div className="mt-8 grid gap-6 text-sm text-charcoal/80 md:grid-cols-3">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/50">Best for</p>
          <p className="mt-3 leading-relaxed">{bestFor}</p>
        </div>
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/50">Skip if</p>
          <p className="mt-3 leading-relaxed">{skipIf}</p>
        </div>
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/50">Standout</p>
          <p className="mt-3 leading-relaxed">{standout}</p>
        </div>
      </div>
    </div>
  );
}
