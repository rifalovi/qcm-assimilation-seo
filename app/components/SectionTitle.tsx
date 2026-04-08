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
    <header className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-300 sm:text-xs">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:mt-5 sm:text-base lg:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
