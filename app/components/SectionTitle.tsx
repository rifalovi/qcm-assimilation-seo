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
        <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-slate-300 sm:text-lg">{description}</p>
      )}
    </header>
  );
}
