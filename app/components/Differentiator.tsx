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
      <div
        className="rounded-2xl p-5 sm:rounded-[1.6rem] sm:p-7"
        style={{
          border: "1px solid var(--cc-border)",
          background: "var(--cc-surface-alt)",
          boxShadow: "var(--cc-shadow-sm)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="text-2xl">🎯</span>
          <h2
            className="text-base font-extrabold tracking-tight sm:text-lg"
            style={{ color: "var(--cc-text)" }}
          >
            Ce test est différent
          </h2>
        </div>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-3 sm:gap-3">
          {items.map((it) => (
            <li
              key={it.label}
              className="flex items-start gap-2.5 rounded-xl px-3.5 py-3 text-sm"
              style={{
                border: "1px solid var(--cc-border)",
                background: "var(--cc-surface)",
                color: "var(--cc-text)",
              }}
            >
              <span aria-hidden className="text-base leading-none">{it.icon}</span>
              <span className="leading-snug">{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
