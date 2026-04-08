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
    <section className="container-prose my-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
      <div className="mt-8 divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/50">
        {items.map((item, i) => (
          <details key={i} className="group p-5 sm:p-6">
            <summary className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-white">{item.question}</h3>
              <span
                aria-hidden
                className="faq-icon mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-blue-300"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
