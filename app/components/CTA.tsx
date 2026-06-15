type CTAVariant = "register" | "quiz" | "audio" | "assistant";

const variants: Record<
  CTAVariant,
  { href: string; label: string; sub: string }
> = {
  register: {
    href: "https://cap-citoyen.fr/quiz",
    label: "Accéder au quiz, à l'assistant IA et au coaching personnalisé",
    sub: "Quiz, coaching IA, assistant démarches et messagerie communautaire",
  },
  quiz: {
    href: "https://cap-citoyen.fr/quiz",
    label: "Obtenir mon coaching IA gratuit",
    sub: "Coach personnalisé après chaque quiz, explications IA après chaque erreur",
  },
  audio: {
    href: "https://cap-citoyen.fr/audio",
    label: "Audio, quiz et coaching IA",
    sub: "Révisez en audio, testez-vous, et progressez avec le coach IA",
  },
  assistant: {
    href: "https://cap-citoyen.fr/quiz",
    label: "Poser ma question à l'assistant démarches",
    sub: "Assistant IA naturalisation, titre de séjour et examen civique",
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
      <div
        className="relative overflow-hidden rounded-[1.6rem] px-5 py-7 sm:rounded-[2rem] sm:px-8 sm:py-9"
        style={{
          border: "1px solid var(--cc-border)",
          background: "var(--cc-primary-soft)",
          boxShadow: "var(--cc-shadow-lg)",
        }}
      >
        <div className="absolute inset-x-0 top-0 h-0.5 gradient-tricolore" aria-hidden />
        <div className="relative text-center">
          <h2
            className="mx-auto max-w-xl text-xl font-extrabold leading-tight tracking-tight sm:text-2xl lg:text-3xl"
            style={{ color: "var(--cc-text)" }}
          >
            {title ?? "Prêt à réussir votre entretien d'assimilation ?"}
          </h2>
          <p
            className="mx-auto mt-3 max-w-lg text-sm leading-relaxed sm:text-base"
            style={{ color: "var(--cc-text-muted)" }}
          >
            {subtitle ??
              "Inscription en 30 secondes. Testez votre niveau, suivez votre progression et accédez aux fiches du Livret du citoyen."}
          </p>
          <a
            href={v.href}
            target="_blank"
            rel="noopener"
            data-primary-cta=""
            className="cc-btn cc-btn-primary cc-btn-lg mx-auto mt-6 w-full max-w-xs"
          >
            {v.label}
            <span aria-hidden>→</span>
          </a>
          <p className="mt-3 text-xs" style={{ color: "var(--cc-text-muted)" }}>{v.sub}</p>
        </div>
      </div>
    </section>
  );
}
