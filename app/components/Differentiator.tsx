const items = [
  {
    label: "Basé sur le Livret du citoyen officiel",
    icon: "📘",
  },
  {
    label: "Inspiré de situations réelles d'entretien",
    icon: "🗣️",
  },
  {
    label: "Conçu pour identifier les pièges fréquents",
    icon: "🎯",
  },
];

export default function Differentiator() {
  return (
    <section className="container-prose mt-8 sm:mt-10">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-sky-500/5 p-5 shadow-[0_18px_45px_rgba(2,8,23,0.35)] sm:rounded-[1.6rem] sm:p-7">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="text-2xl">
            🎯
          </span>
          <h2 className="text-base font-extrabold tracking-tight text-white sm:text-lg">
            Ce test est différent
          </h2>
        </div>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-3 sm:gap-3">
          {items.map((it) => (
            <li
              key={it.label}
              className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-sm text-slate-200"
            >
              <span aria-hidden className="text-base leading-none">
                {it.icon}
              </span>
              <span className="leading-snug">{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
