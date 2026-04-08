export default function AlertBlock({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <section className="container-prose mt-6 sm:mt-8">
      <div className="flex items-start gap-3 rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-500/10 to-orange-500/5 p-4 shadow-[0_18px_45px_rgba(245,158,11,0.15)] sm:gap-4 sm:p-5">
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-500/15 text-lg"
        >
          ⚠️
        </span>
        <div>
          <h2 className="text-sm font-bold text-amber-100 sm:text-base">
            {title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-amber-50/80 text-justify hyphens-auto">
            {message}
          </p>
        </div>
      </div>
    </section>
  );
}
