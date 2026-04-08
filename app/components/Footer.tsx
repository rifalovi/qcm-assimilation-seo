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
    <footer className="mt-24 border-t border-slate-800/80 bg-slate-950">
      <div className="h-1 gradient-tricolore" aria-hidden />
      <div className="container-prose py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md gradient-tricolore text-[0px]">
                QCM
              </span>
              <span className="text-base font-bold text-white">QCM Assimilation</span>
            </Link>
            <p className="mt-3 text-sm text-slate-400">
              Préparer la naturalisation française et l'entretien d'assimilation, gratuitement.
            </p>
            <a
              href="https://cap-citoyen.fr/register"
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              Tester sur cap-citoyen.fr →
            </a>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} QCM Assimilation — Site indépendant, non
            affilié à l'État français.
          </p>
          <p>
            Propulsé par{" "}
            <a
              href="https://cap-citoyen.fr"
              target="_blank"
              rel="noopener"
              className="text-slate-400 hover:text-white"
            >
              cap-citoyen.fr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
