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
    <article
      className="rounded-2xl p-4 transition-all duration-300 sm:p-5"
      style={{
        border: "1px solid var(--cc-border)",
        background: "var(--cc-surface)",
        boxShadow: "var(--cc-shadow-sm)",
      }}
    >
      <header className="flex items-start gap-2.5">
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold"
          style={{
            border: "1px solid var(--cc-border)",
            background: "var(--cc-primary-soft)",
            color: "var(--cc-primary)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3
          className="text-sm font-semibold leading-snug sm:text-[15px]"
          style={{ color: "var(--cc-text)" }}
        >
          {question.question}
        </h3>
      </header>

      <ul className="mt-4 space-y-2">
        {question.choices.map((choice, i) => {
          const isAnswer = i === question.answerIndex;
          const isPicked = selected === i;

          let borderColor = "var(--cc-border)";
          let bgColor = "var(--cc-surface-alt)";
          let textColor = "var(--cc-text)";
          let cursor = "pointer";

          if (revealed) {
            if (isAnswer) {
              borderColor = "var(--cc-success)";
              bgColor = "var(--cc-success-soft)";
            } else if (isPicked) {
              borderColor = "var(--cc-danger)";
              bgColor = "var(--cc-danger-soft)";
            } else {
              bgColor = "var(--cc-surface)";
              textColor = "var(--cc-text-disabled)";
            }
            cursor = "default";
          }

          const letterBg = revealed && isAnswer
            ? "var(--cc-success)"
            : revealed && isPicked
              ? "var(--cc-danger)"
              : "var(--cc-surface-raised)";
          const letterColor = revealed && (isAnswer || isPicked) ? "#fff" : "var(--cc-text-muted)";

          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => choose(i)}
                disabled={revealed}
                className="flex w-full items-start gap-2.5 rounded-xl px-3.5 py-2.5 text-left text-sm transition-all duration-200"
                style={{ border: `1px solid ${borderColor}`, background: bgColor, color: textColor, cursor }}
                aria-pressed={isPicked}
              >
                <span
                  aria-hidden
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md font-mono text-[10px] font-bold"
                  style={{ background: letterBg, color: letterColor }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{choice}</span>
                {revealed && isAnswer && (
                  <span aria-hidden className="text-sm" style={{ color: "var(--cc-success)" }}>✓</span>
                )}
                {revealed && isPicked && !isAnswer && (
                  <span aria-hidden className="text-sm" style={{ color: "var(--cc-danger)" }}>✕</span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {revealed && (
        <div
          className="mt-4 rounded-xl p-3.5 text-sm"
          style={{
            border: `1px solid ${isCorrect ? "var(--cc-success)" : "var(--cc-danger)"}`,
            background: isCorrect ? "var(--cc-success-soft)" : "var(--cc-danger-soft)",
          }}
        >
          <p className="font-bold" style={{ color: "var(--cc-text)" }}>
            {isCorrect ? "Bonne réponse !" : "Pas tout à fait."}
          </p>
          {question.explanation && (
            <p
              className="mt-1.5 text-[13px] leading-relaxed"
              style={{ color: "var(--cc-text-muted)" }}
            >
              {question.explanation}
            </p>
          )}
          <button
            type="button"
            onClick={reset}
            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold"
            style={{ color: "var(--cc-primary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cc-primary-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cc-primary)")}
          >
            ↻ Recommencer
          </button>
        </div>
      )}
    </article>
  );
}
