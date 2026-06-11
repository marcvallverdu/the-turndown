import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items, currentPath }: { items: Crumb[]; currentPath?: string }) {
  const fallbackCurrentPath = [...items].reverse().find((item) => item.href)?.href || '/';

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items, currentPath || fallbackCurrentPath)} />
      <nav className="text-xs uppercase tracking-[0.3em] text-charcoal/50" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
              {index < items.length - 1 && <span>/</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
