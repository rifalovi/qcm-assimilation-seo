import Link from "next/link";

type HeroProps = {
  badge?: string;
  title: string;
  subtitle: string;
  ctaHref?: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function Hero({
  badge,
  title,
  subtitle,
  ctaHref = "https://cap-citoyen.fr/register",
  ctaLabel = "Commencer gratuitement",
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="container-prose relative pt-16 pb-12 sm:pt-24 sm:pb-16">
        {badge && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-700/40 bg-blue-700/10 px-3 py-1 text-xs font-medium text-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden />
            {badge}
          </div>
        )}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-900/30 transition hover:bg-blue-600"
          >
            {ctaLabel}
            <span aria-hidden>→</span>
          </a>
          {secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800/40"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
          <span>✓ 100 % gratuit</span>
          <span>✓ Conforme au Livret du citoyen</span>
          <span>✓ Mis à jour 2026</span>
        </div>
      </div>
    </section>
  );
}
