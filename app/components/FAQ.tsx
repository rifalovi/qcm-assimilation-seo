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
    <section className="container-prose my-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300">
          FAQ
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mt-12 mx-auto max-w-3xl space-y-3">
        {items.map((item, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-6 shadow-[0_18px_45px_rgba(2,8,23,0.35)] transition hover:border-blue-400/20"
          >
            <summary className="flex items-start justify-between gap-4">
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {item.question}
              </h3>
              <span
                aria-hidden
                className="faq-icon mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/15 text-base text-blue-300"
              >
                +
              </span>
            </summary>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
