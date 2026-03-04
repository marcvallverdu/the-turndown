import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true
});

export default function MarkdownContent({ content }: { content?: string | null }) {
  if (!content) return null;
  const html = marked.parse(content);
  return <div className="prose-luxury" dangerouslySetInnerHTML={{ __html: html }} />;
}
