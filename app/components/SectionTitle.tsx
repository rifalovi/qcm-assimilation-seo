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
        <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-300 sm:text-xs">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </header>
  );
}
