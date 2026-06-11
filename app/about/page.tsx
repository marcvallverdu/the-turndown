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

The Turndown is a luxury hotel editorial for readers who care about the small, defining moments: the hush of a lift lobby, the weight of a brass key, the way a room catches the late afternoon light. We travel slowly and write with the same pace, returning to properties the way a reader returns to a favorite magazine.

Every review is reported after extended stays. We pay attention to architecture, service design, food culture, and the emotional atmosphere of a property. The work is deliberate, observational, and honest.

## Our point of view

Luxury is not a price point; it is a feeling. It is generosity without noise, craft without theater, and a sense that someone cared about the experience before you arrived. We champion places that feel considered, and we say it plainly when they do not.

## Review standards

The Turndown evaluates hotels on rooms, service, food, atmosphere, design, and the details that shape a stay. We prioritize editorial independence and update reviews and guides as properties renovate, service changes, or new openings reshape a destination.

## Contact

For editorial partnerships and press inquiries: hello@theturndown.co
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
