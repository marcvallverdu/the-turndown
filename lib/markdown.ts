import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export const MARKDOWN_RENDERER_ID = 'the-turndown-marked-gfm-breaks-sanitized-v1' as const;
export const markdownOptions = { gfm: true, breaks: true } as const;

export function renderMarkdown(markdown: string): string {
  const rendered = marked.parse(markdown, markdownOptions) as string;
  return sanitizeHtml(rendered, {
    allowedTags: [
      'a', 'blockquote', 'br', 'code', 'del', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'hr', 'li', 'ol', 'p', 'pre', 'strong', 'table', 'tbody', 'td', 'th', 'thead', 'tr', 'ul'
    ],
    allowedAttributes: {
      a: ['href', 'title']
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    allowProtocolRelative: false,
    disallowedTagsMode: 'discard'
  });
}

function decodeHtml(value: string): string {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

export function inspectRenderedMarkdown(markdown: string) {
  const html = renderMarkdown(markdown);
  const links = [...html.matchAll(/<a\b[^>]*\bhref=["']([^"']*)["'][^>]*>/gi)]
    .map((match) => decodeHtml(match[1]));
  const images = [...html.matchAll(/<img\b[^>]*\bsrc=["']([^"']*)["'][^>]*>/gi)]
    .map((match) => decodeHtml(match[1]));
  const text = decodeHtml(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
  ).trim();
  return { html, links, images, text };
}
