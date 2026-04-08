type CTAVariant = "register" | "quiz" | "audio";

const variants: Record<
  CTAVariant,
  { href: string; label: string; sub: string; icon: string }
> = {
  register: {
    href: "https://cap-citoyen.fr/register",
    label: "Créer mon compte gratuit",
    sub: "Sans carte bancaire — accès immédiat",
    icon: "→",
  },
  quiz: {
    href: "https://cap-citoyen.fr/quiz",
    label: "Démarrer le quiz",
    sub: "Plus de 500 questions corrigées",
    icon: "▶",
  },
  audio: {
    href: "https://cap-citoyen.fr/audio",
    label: "Écouter le Livret du citoyen",
    sub: "Format audio, à apprendre partout",
    icon: "♪",
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
    <section className="container-prose my-20 sm:my-24">
      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-8 sm:p-12 shadow-[0_25px_70px_rgba(2,8,23,0.6)]">
        <div className="absolute inset-x-0 top-0 h-1 gradient-tricolore" aria-hidden />
        <div
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-red-600/15 blur-3xl"
          aria-hidden
        />

        <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <span className="inline-block rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300">
              cap-citoyen.fr
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white">
              {title ?? "Prêt à réussir votre entretien d'assimilation ?"}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              {subtitle ??
                "Inscription gratuite. Testez votre niveau, suivez votre progression et accédez aux fiches du Livret du citoyen."}
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3">
            <a
              href={v.href}
              target="_blank"
              rel="noopener"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 px-6 py-4 text-base font-bold text-white shadow-[0_12px_32px_rgba(37,99,235,0.45)] transition hover:brightness-110 active:scale-[0.98]"
            >
              <span aria-hidden className="text-lg">
                {v.icon}
              </span>
              {v.label}
            </a>
            <p className="text-center text-xs text-slate-400">{v.sub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
