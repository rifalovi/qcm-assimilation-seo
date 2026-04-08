import type { QCMQuestion } from "../lib/questions";

export default function QCMCard({
  question,
  index,
}: {
  question: QCMQuestion;
  index: number;
}) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-blue-800/60">
      <header className="flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-700/20 text-xs font-bold text-blue-300">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-base font-semibold text-white">{question.question}</h3>
      </header>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {question.choices.map((choice, i) => {
          const isAnswer = i === question.answerIndex;
          return (
            <li
              key={i}
              className={
                isAnswer
                  ? "flex items-start gap-2 rounded-md border border-green-700/40 bg-green-700/10 px-3 py-2 text-green-200"
                  : "flex items-start gap-2 rounded-md border border-slate-800 bg-slate-950/40 px-3 py-2"
              }
            >
              <span aria-hidden className="font-mono text-xs">
                {String.fromCharCode(65 + i)}.
              </span>
              <span>{choice}</span>
              {isAnswer && (
                <span className="ml-auto text-xs font-bold uppercase text-green-300">
                  Bonne réponse
                </span>
              )}
            </li>
          );
        })}
      </ul>
      {question.explanation && (
        <p className="mt-3 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Explication —</span>{" "}
          {question.explanation}
        </p>
      )}
    </article>
  );
}
