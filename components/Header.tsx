'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/reviews', label: 'Reviews' },
  { href: '/brands', label: 'Brands' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/the-details', label: 'The Details' },
  { href: '/versus', label: 'Versus' },
  { href: '/new-openings', label: 'New Openings' },
  { href: '/about', label: 'About' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-mist/60 bg-ivory/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-xl uppercase tracking-[0.4em]">
          The Turndown
        </Link>
        <nav className="hidden items-center gap-8 text-[0.7rem] uppercase tracking-[0.35em] md:flex">
          {navLinks.slice(0, 5).map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-[0.7rem] uppercase tracking-[0.35em] md:hidden"
        >
          Menu
        </button>
        <Link
          href="/newsletter"
          className="hidden text-[0.7rem] uppercase tracking-[0.35em] text-charcoal/70 hover:text-gold md:inline-flex"
        >
          Newsletter
        </Link>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ivory px-6 py-8">
          <div className="flex items-center justify-between">
            <span className="text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/60">Navigation</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-[0.7rem] uppercase tracking-[0.35em]"
            >
              Close
            </button>
          </div>
          <div className="mt-10 flex flex-1 flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-3xl leading-tight"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/50">
            The Turndown — Editorial Hotel Reviews
          </div>
        </div>
      )}
    </header>
  );
}
