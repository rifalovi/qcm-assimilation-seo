type CTAVariant = "register" | "quiz" | "audio";

const variants: Record<
  CTAVariant,
  { href: string; label: string; sub: string }
> = {
  register: {
    href: "https://cap-citoyen.fr/quiz",
    label: "Découvrir quiz, audio et mode scroll",
    sub: "Trois formats pour réviser à votre rythme",
  },
  quiz: {
    href: "https://cap-citoyen.fr/quiz",
    label: "Quiz, audio et mode scroll",
    sub: "Tout est là, sur cap-citoyen.fr",
  },
  audio: {
    href: "https://cap-citoyen.fr/audio",
    label: "Audio, quiz et mode scroll",
    sub: "Trois façons de réviser, un seul compte",
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
    <section className="container-prose mt-10 sm:mt-14">
      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/92 to-slate-800/92 px-5 py-7 shadow-[0_25px_70px_rgba(2,8,23,0.42)] backdrop-blur-xl sm:rounded-[2rem] sm:px-8 sm:py-9">
        <div className="absolute inset-x-0 top-0 h-0.5 gradient-tricolore" aria-hidden />
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-red-600/15 blur-3xl"
          aria-hidden
        />

        <div className="relative text-center">
          <h2 className="mx-auto max-w-xl text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
            {title ?? "Prêt à réussir votre entretien d'assimilation ?"}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
            {subtitle ??
              "Inscription en 30 secondes. Testez votre niveau, suivez votre progression et accédez aux fiches du Livret du citoyen."}
          </p>
          <a
            href={v.href}
            target="_blank"
            rel="noopener"
            data-primary-cta=""
            className="mx-auto mt-6 inline-flex w-full max-w-xs items-center justify-center gap-2.5 rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(37,99,235,0.4)] transition hover:brightness-110 active:scale-[0.98] sm:text-base"
          >
            {v.label}
            <span aria-hidden>→</span>
          </a>
          <p className="mt-3 text-xs text-slate-500">{v.sub}</p>
        </div>
      </div>
    </section>
  );
}
