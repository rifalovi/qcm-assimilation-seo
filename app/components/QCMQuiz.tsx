"use client";

import { useState } from "react";
import type { QCMQuestion } from "../lib/questions";

export default function QCMQuiz({
  question,
  index,
}: {
  question: QCMQuestion;
  index: number;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const revealed = selected !== null;
  const isCorrect = selected === question.answerIndex;

  function choose(i: number) {
    if (revealed) return;
    setSelected(i);
  }

  function reset() {
    setSelected(null);
  }

  return (
    <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-5 shadow-[0_18px_45px_rgba(2,8,23,0.4)] transition-all duration-300 hover:border-blue-400/20 sm:rounded-[1.6rem] sm:p-6">
      <header className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/15 text-xs font-bold text-blue-300">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-sm font-semibold leading-snug text-white sm:text-base">
          {question.question}
        </h3>
      </header>

      <ul className="mt-5 space-y-2.5">
        {question.choices.map((choice, i) => {
          const isAnswer = i === question.answerIndex;
          const isPicked = selected === i;

          let className =
            "flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 ";

          if (!revealed) {
            className +=
              "border-white/10 bg-white/5 text-slate-200 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white cursor-pointer";
          } else if (isAnswer) {
            className +=
              "border-emerald-400/40 bg-emerald-500/15 text-emerald-100";
          } else if (isPicked) {
            className += "border-red-400/40 bg-red-500/15 text-red-100";
          } else {
            className += "border-white/5 bg-white/[0.02] text-slate-500";
          }

          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => choose(i)}
                disabled={revealed}
                className={className}
                aria-pressed={isPicked}
              >
                <span
                  aria-hidden
                  className={
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md font-mono text-[10px] font-bold " +
                    (revealed && isAnswer
                      ? "bg-emerald-400/30 text-emerald-50"
                      : revealed && isPicked
                        ? "bg-red-400/30 text-red-50"
                        : "bg-white/10 text-slate-300")
                  }
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{choice}</span>
                {revealed && isAnswer && (
                  <span aria-hidden className="text-base text-emerald-300">
                    ✓
                  </span>
                )}
                {revealed && isPicked && !isAnswer && (
                  <span aria-hidden className="text-base text-red-300">
                    ✕
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {revealed && (
        <div
          className={
            "mt-5 rounded-xl border p-4 text-sm " +
            (isCorrect
              ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
              : "border-red-400/30 bg-red-500/10 text-red-100")
          }
        >
          <p className="font-bold">
            {isCorrect ? "Bonne réponse !" : "Pas tout à fait."}
          </p>
          {question.explanation && (
            <p className="mt-2 text-slate-200">{question.explanation}</p>
          )}
          <button
            type="button"
            onClick={reset}
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-300 hover:text-blue-200"
          >
            ↻ Recommencer
          </button>
        </div>
      )}
    </article>
  );
}
