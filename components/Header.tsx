import Link from 'next/link';

const navLinks = [
  { href: '/reviews', label: 'Reviews' },
  { href: '/brands', label: 'Brands' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/the-details', label: 'The Details' },
  { href: '/about', label: 'About' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-mist/70 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-2xl tracking-[0.2em] uppercase">
          The Turndown
        </Link>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/newsletter"
          className="rounded-full border border-charcoal/60 px-4 py-2 text-xs uppercase tracking-[0.3em] transition hover:border-gold hover:text-gold"
        >
          Newsletter
        </Link>
      </div>
    </header>
  );
}
