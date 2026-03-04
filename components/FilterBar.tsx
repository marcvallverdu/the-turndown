import { cn } from '@/lib/cn';

export default function FilterBar({
  brands,
  destinations,
  current
}: {
  brands: { slug: string; name: string }[];
  destinations: { slug: string; name: string }[];
  current: { brand?: string; destination?: string; price?: string };
}) {
  return (
    <form
      method="GET"
      className="grid gap-4 rounded-3xl border border-mist bg-white/70 p-6 text-sm shadow-soft-card md:grid-cols-[1fr_1fr_1fr_auto]"
    >
      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-charcoal/60">
        Brand
        <select
          name="brand"
          defaultValue={current.brand || ''}
          className="rounded-full border border-mist bg-white px-4 py-3 text-sm"
        >
          <option value="">All</option>
          {brands.map((brand) => (
            <option key={brand.slug} value={brand.slug}>
              {brand.name}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-charcoal/60">
        Destination
        <select
          name="destination"
          defaultValue={current.destination || ''}
          className="rounded-full border border-mist bg-white px-4 py-3 text-sm"
        >
          <option value="">Everywhere</option>
          {destinations.map((destination) => (
            <option key={destination.slug} value={destination.slug}>
              {destination.name}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-charcoal/60">
        Price
        <select
          name="price"
          defaultValue={current.price || ''}
          className="rounded-full border border-mist bg-white px-4 py-3 text-sm"
        >
          <option value="">Any</option>
          <option value="low">Under $900</option>
          <option value="mid">$900-$1,600</option>
          <option value="high">$1,600+</option>
        </select>
      </label>
      <button
        type="submit"
        className={cn(
          'h-12 self-end rounded-full border border-charcoal/70 px-6 text-xs uppercase tracking-[0.3em] transition hover:border-gold hover:text-gold'
        )}
      >
        Filter
      </button>
    </form>
  );
}
