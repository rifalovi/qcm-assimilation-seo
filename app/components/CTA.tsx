type CTAVariant = "register" | "quiz" | "audio";

const variants: Record<
  CTAVariant,
  { href: string; label: string; sub: string }
> = {
  register: {
    href: "https://cap-citoyen.fr/register",
    label: "Créer mon compte gratuit",
    sub: "Sans carte bancaire — accès immédiat",
  },
  quiz: {
    href: "https://cap-citoyen.fr/quiz",
    label: "Démarrer le quiz",
    sub: "Plus de 500 questions corrigées",
  },
  audio: {
    href: "https://cap-citoyen.fr/audio",
    label: "Écouter le Livret du citoyen",
    sub: "Format audio, à apprendre partout",
  },
};

export default function CTA({
  variant = "register",
  title,
  subtitle,
}: {
  variant?: CTAVariant;
  title?: string;
  subtitle?: string;
}) {
  const v = variants[variant];

  return (
    <section className="container-prose my-16">
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-8 sm:p-12">
        <div className="absolute inset-x-0 top-0 h-1 gradient-tricolore" aria-hidden />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-700/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-red-700/15 blur-3xl" aria-hidden />

        <div className="relative grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {title ?? "Prêt à réussir votre entretien d'assimilation ?"}
            </h2>
            <p className="mt-3 text-base text-slate-300">
              {subtitle ??
                "Inscription gratuite. Testez votre niveau, suivez votre progression et accédez aux fiches du Livret du citoyen."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={v.href}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-xl transition hover:bg-slate-100"
            >
              {v.label}
              <span className="transition group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </a>
            <p className="text-center text-xs text-slate-400">{v.sub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
