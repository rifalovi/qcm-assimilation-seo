import Link from "next/link";

const navLinks = [
  { href: "/test-naturalisation-france/", label: "Test naturalisation" },
  { href: "/qcm-assimilation-france/", label: "QCM" },
  { href: "/livret-du-citoyen-questions/", label: "Livret du citoyen" },
  { href: "/simulation-examen-naturalisation/", label: "Simulation" },
  { href: "/a-propos/", label: "À propos" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container-prose flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-md gradient-tricolore text-[0px]">
            QCM
          </span>
          <span className="text-base sm:text-lg tracking-tight text-white">
            QCM Assimilation
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-6 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="https://cap-citoyen.fr/register"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-600"
        >
          Commencer gratuitement
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
