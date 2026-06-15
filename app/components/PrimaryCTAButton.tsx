type Props = {
  label?: string;
  href?: string;
  className?: string;
};

export default function PrimaryCTAButton({
  label = "Accéder au quiz, à l'assistant IA et au coaching",
  href = "https://cap-citoyen.fr/quiz",
  className = "",
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      data-primary-cta=""
      className={`cc-btn cc-btn-primary cc-btn-lg ${className}`}
    >
      {label}
      <span aria-hidden>→</span>
    </a>
  );
}
