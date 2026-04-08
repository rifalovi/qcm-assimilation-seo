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
    <section className="container-prose pt-5 sm:pt-8">
      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/92 to-slate-800/92 shadow-[0_25px_70px_rgba(2,8,23,0.42)] backdrop-blur-xl sm:rounded-[2rem]">
        <div className="absolute inset-x-0 top-0 h-0.5 gradient-tricolore" aria-hidden />
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-red-600/10 blur-3xl"
          aria-hidden
        />

        <div className="relative px-5 py-8 text-center sm:px-8 sm:py-10">
          {badge && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-300 sm:text-xs">
              <span
                className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                aria-hidden
              />
              {badge}
            </div>
          )}
          <h1 className="mx-auto max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            {renderTitle()}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:mt-4 sm:text-base">
            {subtitle}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener"
              className="group inline-flex w-full max-w-xs items-center justify-center gap-2.5 rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(37,99,235,0.4)] transition hover:brightness-110 active:scale-[0.98] sm:text-base"
            >
              {ctaLabel}
              <span aria-hidden className="transition group-hover:translate-x-0.5">
                →
              </span>
            </a>
            {secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-blue-400/40 hover:bg-white/10 sm:text-base"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500 sm:text-[13px]">
            <li className="flex items-center gap-1.5">
              <span aria-hidden className="text-emerald-400">
                ✓
              </span>
              100 % gratuit
            </li>
            <li className="flex items-center gap-1.5">
              <span aria-hidden className="text-emerald-400">
                ✓
              </span>
              Conforme au Livret du citoyen
            </li>
            <li className="flex items-center gap-1.5">
              <span aria-hidden className="text-emerald-400">
                ✓
              </span>
              Mis à jour 2026
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
