export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({
  items,
  title = "Questions fréquentes",
}: {
  items: FAQItem[];
  title?: string;
}) {
  return (
    <section className="container-prose mt-10 sm:mt-14">
      <div className="mx-auto max-w-2xl text-center">
        <span
          className="cc-badge cc-badge-info inline-block font-bold uppercase tracking-widest"
          style={{ fontSize: "0.625rem" }}
        >
          FAQ
        </span>
        <h2
          className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl"
          style={{ color: "var(--cc-text)" }}
        >
          {title}
        </h2>
      </div>
      <div className="mt-6 mx-auto max-w-3xl space-y-2.5 sm:mt-8">
        {items.map((item, i) => (
          <details
            key={i}
            className="group rounded-2xl p-4 transition sm:p-5"
            style={{
              border: "1px solid var(--cc-border)",
              background: "var(--cc-surface)",
              boxShadow: "var(--cc-shadow-sm)",
            }}
          >
            <summary className="flex items-start justify-between gap-3">
              <h3
                className="text-sm font-semibold sm:text-base"
                style={{ color: "var(--cc-text)" }}
              >
                {item.question}
              </h3>
              <span
                aria-hidden
                className="faq-icon mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{
                  border: "1px solid var(--cc-border)",
                  background: "var(--cc-primary-soft)",
                  color: "var(--cc-primary)",
                }}
              >
                +
              </span>
            </summary>
            <p
              className="mt-3 text-sm leading-relaxed text-justify hyphens-auto"
              style={{ color: "var(--cc-text-muted)" }}
            >
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
