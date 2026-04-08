type Props = {
  label?: string;
  href?: string;
  className?: string;
};

/**
 * Bouton CTA principal réutilisable.
 * Marqué avec data-primary-cta pour que la barre sticky mobile
 * sache se cacher quand ce bouton est dans le viewport.
 */
export default function PrimaryCTAButton({
  label = "Faire le test complet",
  href = "https://cap-citoyen.fr/quiz",
  className = "",
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      data-primary-cta=""
      className={
        "group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(37,99,235,0.4)] transition hover:brightness-110 active:scale-[0.98] sm:text-base " +
        className
      }
    >
      {label}
      <span aria-hidden className="transition group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}
