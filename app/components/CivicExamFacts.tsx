const facts = [
  {
    value: "40",
    label: "questions QCM",
    note: "en français",
  },
  {
    value: "45 min",
    label: "durée du test",
    note: "pour y répondre",
  },
  {
    value: "32/40",
    label: "score minimum",
    note: "80 % de bonnes réponses",
  },
  {
    value: "70-90 €",
    label: "coût par passage",
    note: "mieux vaut le réussir du premier coup",
  },
];

export default function CivicExamFacts() {
  return (
    <section className="container-prose mt-8 sm:mt-10">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-slate-900/60 p-5 shadow-[0_18px_45px_rgba(2,8,23,0.35)] sm:rounded-[1.6rem] sm:p-7">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="text-xl">
            📋
          </span>
          <h2 className="text-base font-extrabold tracking-tight text-white sm:text-lg">
            L'examen civique en chiffres
          </h2>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Obligatoire depuis le 1<sup>er</sup> janvier 2026 pour toute
          première demande de titre de séjour pluriannuel.
        </p>

        <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {f.label}
              </dt>
              <dd className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {f.value}
              </dd>
              <p className="mt-1 text-xs text-slate-400">{f.note}</p>
            </div>
          ))}
        </dl>

        <p className="mt-5 text-sm leading-relaxed text-slate-300">
          <strong className="text-white">Notre objectif :</strong> vous
          aider à maximiser vos chances du premier coup. Un échec coûte un
          nouveau passage, et surtout du temps.
        </p>
      </div>
    </section>
  );
}
