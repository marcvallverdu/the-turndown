import { renderMarkdown } from '@/lib/markdown';

type MarkdownContentProps = {
  content?: string | null;
  demoteH1?: boolean;
};

export default function MarkdownContent({ content, demoteH1 = false }: MarkdownContentProps) {
  if (!content) return null;
  const markdown = demoteH1 ? content.replace(/^# /gm, '## ') : content;
  const html = renderMarkdown(markdown);
  return <div className="prose-luxury" dangerouslySetInnerHTML={{ __html: html }} />;
}
