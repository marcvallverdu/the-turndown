import { Metadata } from 'next';
import MarkdownContent from '@/components/MarkdownContent';
import { DEFAULT_OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
  title: `About The Turndown`,
  description: `About The Turndown, an editorial guide to luxury hotels, destination intelligence, and considered travel.`,
  alternates: { canonical: `/about` },
  openGraph: {
    type: 'website',
    url: `/about`,
    title: `About The Turndown`,
    description: `About The Turndown, an editorial guide to luxury hotels, destination intelligence, and considered travel.`,
    images: [DEFAULT_OG_IMAGE]
  },
  twitter: {
    card: 'summary_large_image',
    title: `About The Turndown`,
    description: `About The Turndown, an editorial guide to luxury hotels, destination intelligence, and considered travel.`,
    images: [DEFAULT_OG_IMAGE]
  }
};

const content = `
# About The Turndown

The Turndown helps readers compare luxury hotels, destinations and room choices before booking.

Start with our [destination guides](/destinations) to choose a base, compare [hotel reviews](/reviews), or browse [room and booking guides](/the-details) for the differences between categories, facilities and rate conditions.

Room details, inclusions and availability can change. Confirm the exact category and current terms with the hotel before paying. A booking guide is not a report of a personal stay unless it explicitly says so.

## Contact

For editorial partnerships and press inquiries: hello [at] theturndown.co
`;

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-12">
      <section className="body-max">
        <MarkdownContent content={content} />
      </section>
    </div>
  );
}
