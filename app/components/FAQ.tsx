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
        <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-300 sm:text-xs">
          FAQ
        </span>
        <h2 className="mt-3 text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl">
          {title}
        </h2>
      </div>
      <div className="mt-6 mx-auto max-w-3xl space-y-2.5 sm:mt-8">
        {items.map((item, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 shadow-[0_18px_45px_rgba(2,8,23,0.3)] transition hover:border-blue-400/20 sm:p-5"
          >
            <summary className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-semibold text-white sm:text-base">
                {item.question}
              </h3>
              <span
                aria-hidden
                className="faq-icon mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/15 text-sm text-blue-300"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 text-justify hyphens-auto">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
