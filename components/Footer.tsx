import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';

const links = [
  { href: '/reviews', label: 'Reviews' },
  { href: '/brands', label: 'Brands' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/the-details', label: 'The Details' },
  { href: '/versus', label: 'Versus' },
  { href: '/new-openings', label: 'New Openings' },
  { href: '/about', label: 'About' }
];

export default function Footer() {
  return (
    <footer className="border-t border-mist/70 bg-ivory">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-serif text-xl uppercase tracking-[0.2em]">The Turndown</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/70">
            The Turndown is an editorial guide to the world&apos;s most considered hotels, written for travelers who care
            about quiet luxury, architecture, and the art of arrival.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em]">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-charcoal/70 hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-mist bg-white/60 p-6 shadow-soft-card">
          <NewsletterSignup variant="inline" title="Letters from The Turndown" />
        </div>
      </div>
      <div className="border-t border-mist/70 py-6 text-center text-xs uppercase tracking-[0.3em] text-charcoal/60">
        (c) The Turndown 2026
      </div>
    </footer>
  );
}
