import { Metadata } from 'next';
import MarkdownContent from '@/components/MarkdownContent';

export const metadata: Metadata = {
  title: 'About',
  description: 'About The Turndown, the luxury hotel editorial.'
};

const content = `
# About The Turndown

The Turndown is a modern hotel editorial designed for travelers who believe the best stays are felt in the small details: the quiet of the lift lobby, the scent of the linen, the sound of a city filtering in at dawn.

We review hotels slowly and deliberately, returning the way a reader returns to a well-made magazine. Each review is written after extended stays, with a focus on architecture, service design, food culture, and the emotional atmosphere of a property.

## Our point of view

We care about how a hotel makes you feel. Luxury is not just about price, but about generosity, quiet, and intention. The Turndown celebrates thoughtful hospitality, discreet excellence, and a sense of place.

## Contact

For editorial partnerships and press inquiries: hello@theturndown.co
`;

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 pb-20 pt-12">
      <section className="rounded-[32px] border border-mist bg-white/70 p-10 shadow-soft-card">
        <MarkdownContent content={content} />
      </section>
    </div>
  );
}
