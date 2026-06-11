export default function ReviewMethodology() {
  return (
    <section className="body-max px-6">
      <div className="section-rule" />
      <p className="mt-4 text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">Review standards</p>
      <div className="mt-6 grid gap-6 text-sm leading-relaxed text-charcoal/70 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-2xl text-charcoal">How we review</h2>
          <p className="mt-3">
            The Turndown evaluates hotels on rooms, service, food, atmosphere, design, and the details that shape a stay.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-charcoal">What we disclose</h2>
          <p className="mt-3">
            We prioritize editorial independence and call out what matters: who the stay suits, where it falls short, and whether it earns the rate.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-charcoal">How often we update</h2>
          <p className="mt-3">
            Reviews and guides are revisited as properties renovate, service changes, or new competitors reshape the destination.
          </p>
        </div>
      </div>
    </section>
  );
}
