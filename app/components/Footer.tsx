import Link from "next/link";

const sections = [
  {
    title: "Préparer l'examen",
    links: [
      { href: "/test-naturalisation-france/", label: "Test de naturalisation" },
      { href: "/qcm-assimilation-france/", label: "QCM d'assimilation" },
      { href: "/simulation-examen-naturalisation/", label: "Simulation d'examen" },
      { href: "/questions-entretien-naturalisation/", label: "Questions d'entretien" },
    ],
  },
  {
    title: "Comprendre la France",
    links: [
      { href: "/livret-du-citoyen-questions/", label: "Livret du citoyen" },
      { href: "/valeurs-republique-francaise/", label: "Valeurs de la République" },
      { href: "/histoire-france-naturalisation/", label: "Histoire de France" },
      { href: "/culture-francaise-quiz/", label: "Culture française" },
      { href: "/droits-devoirs-citoyen-francais/", label: "Droits et devoirs" },
    ],
  },
  {
    title: "Démarches",
    links: [
      { href: "/nationalite-francaise-demande/", label: "Demande de nationalité" },
      { href: "/a-propos/", label: "À propos" },
      { href: "/contact/", label: "Contact" },
    ],
  },
  {
    title: "Mentions",
    links: [
      { href: "/mentions-legales/", label: "Mentions légales" },
      { href: "/politique-de-confidentialite/", label: "Confidentialité" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 bg-slate-950 pb-24 sm:mt-20 lg:pb-0">
      <div className="h-0.5 gradient-tricolore" aria-hidden />
      <div className="container-prose py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 text-sm font-black text-white shadow-[0_8px_24px_rgba(37,99,235,0.45)]"
              >
                Qa
              </span>
              <span className="text-base font-bold text-white">QCM Assimilation</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Préparer la naturalisation française et l'entretien d'assimilation, en toute sérénité.
            </p>
            <a
              href="https://cap-citoyen.fr/register"
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300 transition hover:bg-blue-500/20"
            >
              cap-citoyen.fr →
            </a>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300">
                {section.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} QCM Assimilation. Site indépendant, sans
            lien officiel avec l'État français.
          </p>
          <p>
            Propulsé par{" "}
            <a
              href="https://cap-citoyen.fr"
              target="_blank"
              rel="noopener"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              cap-citoyen.fr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
