import Link from "next/link";

type HeroProps = {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  ctaHref?: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function Hero({
  badge,
  title,
  highlight,
  subtitle,
  ctaHref = "https://cap-citoyen.fr/quiz",
  ctaLabel = "Découvrir quiz, audio et mode scroll",
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return title;
    }
    const [before, ...rest] = title.split(highlight);
    const after = rest.join(highlight);
    return (
      <>
        {before}
        <span style={{ color: "var(--cc-primary)" }}>{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <section className="container-prose pt-5 sm:pt-8">
      <div
        className="relative overflow-hidden rounded-[1.6rem] sm:rounded-[2rem]"
        style={{
          border: "1px solid var(--cc-border)",
          background: "var(--cc-surface-alt)",
          boxShadow: "var(--cc-shadow-lg)",
        }}
      >
        <div className="absolute inset-x-0 top-0 h-0.5 gradient-tricolore" aria-hidden />

        <div className="relative px-5 py-8 text-center sm:px-8 sm:py-10">
          {badge && (
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest sm:text-xs"
              style={{
                border: "1px solid var(--cc-border)",
                background: "var(--cc-primary-soft)",
                color: "var(--cc-primary)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--cc-primary)" }}
                aria-hidden
              />
              {badge}
            </div>
          )}
          <h1
            className="mx-auto max-w-2xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl"
            style={{ color: "var(--cc-text)" }}
          >
            {renderTitle()}
          </h1>
          <p
            className="mx-auto mt-3 max-w-xl text-sm leading-relaxed sm:mt-4 sm:text-base"
            style={{ color: "var(--cc-text-muted)" }}
          >
            {subtitle}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener"
              data-primary-cta=""
              className="cc-btn cc-btn-primary cc-btn-lg w-full max-w-xs"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </a>
            {secondaryHref && (
              <Link
                href={secondaryHref}
                className="cc-btn cc-btn-secondary cc-btn-lg w-full max-w-xs"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
          <ul
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-[13px]"
            style={{ color: "var(--cc-text-muted)" }}
          >
            <li className="flex items-center gap-1.5">
              <span aria-hidden style={{ color: "var(--cc-success)" }}>✓</span>
              Accès offert
            </li>
            <li className="flex items-center gap-1.5">
              <span aria-hidden style={{ color: "var(--cc-success)" }}>✓</span>
              Conforme au Livret du citoyen
            </li>
            <li className="flex items-center gap-1.5">
              <span aria-hidden style={{ color: "var(--cc-success)" }}>✓</span>
              Mis à jour 2026
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
