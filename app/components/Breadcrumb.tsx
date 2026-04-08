import Link from "next/link";

export type BreadcrumbItem = {
  href: string;
  label: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="container-prose pt-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-500">
        <li>
          <Link href="/" className="hover:text-blue-300">
            Accueil
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            <span aria-hidden className="text-slate-700">
              /
            </span>
            {i === items.length - 1 ? (
              <span className="text-blue-300">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-blue-300">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
