import type { Metadata } from 'next';
import { Cormorant_Garamond, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DEFAULT_OG_IMAGE } from '@/lib/seo';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  weight: ['300', '400', '500', '600', '700'],
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
    siteName: 'The Turndown',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'The Turndown luxury hotel reviews'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Turndown',
    description: 'Luxury hotel reviews, brand profiles, and destination guides.',
    images: [DEFAULT_OG_IMAGE]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSerif.variable}`}>
      <body>
        <Header />
        <main className="min-h-screen bg-ivory bg-linen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
