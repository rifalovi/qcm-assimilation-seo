export default function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span
          className="cc-badge cc-badge-info inline-block font-bold uppercase tracking-widest"
          style={{ fontSize: "0.625rem" }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl"
        style={{ color: "var(--cc-text)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-3 text-sm leading-relaxed sm:text-base"
          style={{ color: "var(--cc-text-muted)" }}
        >
          {description}
        </p>
      )}
    </header>
  );
}
