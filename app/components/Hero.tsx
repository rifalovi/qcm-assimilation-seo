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
  ctaHref = "https://cap-citoyen.fr/register",
  ctaLabel = "Commencer gratuitement",
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  // Highlight a substring of the title with a blue gradient (matches cap-citoyen style)
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return title;
    }
    const [before, ...rest] = title.split(highlight);
    const after = rest.join(highlight);
    return (
      <>
        {before}
        <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
          {highlight}
        </span>
        {after}
      </>
    );
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden />
      <div
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-700/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-red-700/15 blur-[120px]"
        aria-hidden
      />

      <div className="container-prose relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        {badge && (
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300">
            <span
              className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
              aria-hidden
            />
            {badge}
          </div>
        )}
        <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {renderTitle()}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 px-7 py-4 text-base font-bold text-white shadow-[0_12px_32px_rgba(37,99,235,0.45)] transition hover:brightness-110 active:scale-[0.98]"
          >
            {ctaLabel}
            <span
              aria-hidden
              className="transition group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          {secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:border-blue-400/40 hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
          <li className="flex items-center gap-2">
            <span
              aria-hidden
              className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-300"
            >
              ✓
            </span>
            100 % gratuit
          </li>
          <li className="flex items-center gap-2">
            <span
              aria-hidden
              className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-300"
            >
              ✓
            </span>
            Conforme au Livret du citoyen
          </li>
          <li className="flex items-center gap-2">
            <span
              aria-hidden
              className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-300"
            >
              ✓
            </span>
            Mis à jour 2026
          </li>
        </ul>
      </div>
    </section>
  );
}
