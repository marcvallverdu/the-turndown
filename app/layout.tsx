import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theturndown.co'),
  title: {
    default: 'The Turndown | Luxury Hotel Editorial Reviews',
    template: '%s | The Turndown'
  },
  description:
    'The Turndown is a luxury hotel editorial, delivering considered reviews, brand profiles, and destination guides for modern travelers.',
  openGraph: {
    type: 'website',
    title: 'The Turndown',
    description:
      'Luxury hotel reviews, brand profiles, and destination guides with a magazine sensibility.',
    url: 'https://theturndown.co',
    siteName: 'The Turndown'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Turndown',
    description: 'Luxury hotel reviews, brand profiles, and destination guides.'
  },
  alternates: {
    canonical: 'https://theturndown.co'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main className="min-h-screen bg-ivory bg-linen">{children}</main>
        <Footer />
        <Script
          src="https://example-analytics.com/script.js"
          data-website-id="UMAMI-PLACEHOLDER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
