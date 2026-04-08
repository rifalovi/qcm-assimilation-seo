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
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
      <div className="h-0.5 gradient-tricolore" aria-hidden />
      <div className="container-prose flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 font-bold">
          <span
            aria-hidden
            className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 text-sm font-black text-white shadow-[0_8px_24px_rgba(37,99,235,0.45)]"
          >
            Qa
          </span>
          <span className="text-base sm:text-lg tracking-tight text-white">
            QCM Assimilation
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-7 text-sm font-medium text-slate-300">
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
          className="inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 px-4 py-2 text-sm font-bold text-white shadow-[0_8px_22px_rgba(37,99,235,0.4)] transition hover:brightness-110 active:scale-[0.98]"
        >
          Commencer
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
