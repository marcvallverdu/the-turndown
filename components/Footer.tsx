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
    <footer className="bg-ivory">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-serif text-xl uppercase tracking-[0.35em]">The Turndown</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/70">
              The Turndown is a luxury hotel editorial for travelers who care about architecture, service, and the
              quiet rituals that make a stay memorable.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal/60">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <NewsletterSignup title="The Evening Edition" />
          </div>
        </div>
        <div className="mt-12 h-px w-full bg-mist" />
        <div className="mt-6 text-center text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/55">
          (c) The Turndown 2026
        </div>
      </div>
    </footer>
  );
}
