import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true
});

type MarkdownContentProps = {
  content?: string | null;
  demoteH1?: boolean;
};

export default function MarkdownContent({ content, demoteH1 = false }: MarkdownContentProps) {
  if (!content) return null;
  const markdown = demoteH1 ? content.replace(/^# /gm, '## ') : content;
  const html = marked.parse(markdown);
  return <div className="prose-luxury" dangerouslySetInnerHTML={{ __html: html }} />;
}
