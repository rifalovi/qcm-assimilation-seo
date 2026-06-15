export default function AlertBlock({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <section className="container-prose mt-6 sm:mt-8">
      <div
        className="flex items-start gap-3 rounded-2xl p-4 sm:gap-4 sm:p-5"
        style={{
          border: "1px solid var(--cc-warning)",
          background: "var(--cc-warning-soft)",
        }}
      >
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg"
          style={{
            border: "1px solid var(--cc-warning)",
            background: "var(--cc-surface)",
          }}
        >
          ⚠️
        </span>
        <div>
          <h2
            className="text-sm font-bold sm:text-base"
            style={{ color: "var(--cc-text)" }}
          >
            {title}
          </h2>
          <p
            className="mt-1.5 text-sm leading-relaxed text-justify hyphens-auto"
            style={{ color: "var(--cc-text-muted)" }}
          >
            {message}
          </p>
        </div>
      </div>
    </section>
  );
}
