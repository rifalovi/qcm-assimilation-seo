const facts = [
  { value: "40",     label: "questions QCM", note: "en français" },
  { value: "45 min", label: "durée du test",  note: "pour y répondre" },
  { value: "32/40",  label: "score minimum",  note: "80 % de bonnes réponses" },
  { value: "70-90 €",label: "coût par passage",note: "mieux vaut le réussir du premier coup" },
];

export default function CivicExamFacts() {
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
          <span aria-hidden className="text-xl">📋</span>
          <h2
            className="text-base font-extrabold tracking-tight sm:text-lg"
            style={{ color: "var(--cc-text)" }}
          >
            L'examen civique en chiffres
          </h2>
        </div>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--cc-text-muted)" }}>
          Obligatoire depuis le 1<sup>er</sup> janvier 2026 pour toute
          première demande de titre de séjour pluriannuel.
        </p>

        <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-xl p-4"
              style={{
                border: "1px solid var(--cc-border)",
                background: "var(--cc-surface)",
              }}
            >
              <dt
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "var(--cc-text-disabled)" }}
              >
                {f.label}
              </dt>
              <dd
                className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl"
                style={{ color: "var(--cc-text)" }}
              >
                {f.value}
              </dd>
              <p className="mt-1 text-xs" style={{ color: "var(--cc-text-muted)" }}>
                {f.note}
              </p>
            </div>
          ))}
        </dl>

        <p className="mt-5 text-sm leading-relaxed" style={{ color: "var(--cc-text)" }}>
          <strong>Notre objectif :</strong> vous aider à maximiser vos chances du premier coup.
          Un échec coûte un nouveau passage, et surtout du temps.
        </p>
      </div>
    </section>
  );
}
