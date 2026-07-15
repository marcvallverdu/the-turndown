import type { Metadata } from 'next';
import { Cormorant_Garamond, Source_Serif_4 } from 'next/font/google';
import Script from 'next/script';
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
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/rss.xml'
    }
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }]
  },
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
      <head>
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen bg-ivory bg-linen">{children}</main>
        <Footer />
        <Script
          defer
          src="https://dashboard.remarcablevc.com/script.js"
          data-website-id="4ae0043f-c1ff-4b59-87e1-eae401e7ab66"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
