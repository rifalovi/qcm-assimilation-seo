import Link from "next/link";

export type BreadcrumbItem = {
  href: string;
  label: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="container-prose pt-8">
      <ol
        className="flex flex-wrap items-center gap-1.5 text-xs font-medium"
        style={{ color: "var(--cc-text-muted)" }}
      >
        <li>
          <Link href="/" className="cc-link-muted">
            Accueil
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            <span aria-hidden style={{ color: "var(--cc-border-strong)" }}>/</span>
            {i === items.length - 1 ? (
              <span style={{ color: "var(--cc-primary)" }}>{item.label}</span>
            ) : (
              <Link href={item.href} className="cc-link-muted">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
