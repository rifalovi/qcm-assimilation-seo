import Link from "next/link";

export type BreadcrumbItem = {
  href: string;
  label: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="container-prose pt-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-400">
        <li>
          <Link href="/" className="hover:text-white">
            Accueil
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1">
            <span aria-hidden>/</span>
            {i === items.length - 1 ? (
              <span className="text-slate-200">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
