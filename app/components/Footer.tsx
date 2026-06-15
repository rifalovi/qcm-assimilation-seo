import Link from "next/link";

type FooterLink = { href: string; label: string; external?: boolean };

const sections: { title: string; links: FooterLink[] }[] = [
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
      { href: "https://cap-citoyen.fr/contact", label: "Contact", external: true },
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
    <footer
      className="mt-16 pb-24 sm:mt-20 lg:pb-0"
      style={{ borderTop: "1px solid var(--cc-border)", background: "var(--cc-surface-alt)" }}
    >
      <div className="h-0.5 gradient-tricolore" aria-hidden />
      <div className="container-prose py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black text-white"
                style={{ background: "var(--cc-primary)" }}
              >
                Qa
              </span>
              <span className="text-base font-bold" style={{ color: "var(--cc-text)" }}>
                QCM Assimilation
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--cc-text-muted)" }}>
              Préparer l'examen civique, la naturalisation et mieux connaître la France.
            </p>
            <a
              href="https://cap-citoyen.fr/register"
              target="_blank"
              rel="noopener"
              className="cc-badge cc-badge-info mt-5 inline-flex font-bold uppercase tracking-widest"
            >
              cap-citoyen.fr →
            </a>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--cc-primary)" }}
              >
                {section.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {section.links.map((link) =>
                  link.external ? (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener"
                        className="cc-link-muted transition"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.href}>
                      <Link href={link.href} className="cc-link-muted transition">
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-10 flex flex-col items-start justify-between gap-4 pt-6 text-xs sm:flex-row sm:items-center"
          style={{ borderTop: "1px solid var(--cc-border)", color: "var(--cc-text-disabled)" }}
        >
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
              className="cc-link-primary font-semibold"
            >
              cap-citoyen.fr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
