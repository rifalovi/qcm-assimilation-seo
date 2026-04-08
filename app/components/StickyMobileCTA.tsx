"use client";

import { useEffect, useState } from "react";

/**
 * Barre sticky en bas d'écran sur mobile.
 * Se cache automatiquement quand un bouton portant
 * data-primary-cta est visible dans le viewport.
 * Utilise IntersectionObserver, sans re-render coûteux.
 */
export default function StickyMobileCTA() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-primary-cta]")
    );

    if (targets.length === 0) return;

    // Track which targets are currently in view
    const visible = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target);
          } else {
            visible.delete(entry.target);
          }
        }
        setHidden(visible.size > 0);
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.25 }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={
        "fixed inset-x-0 bottom-0 z-30 px-3 pb-3 lg:hidden transition-transform duration-300 " +
        (hidden ? "translate-y-full" : "translate-y-0")
      }
      aria-hidden={hidden}
    >
      <a
        href="https://cap-citoyen.fr/quiz"
        target="_blank"
        rel="noopener"
        className="group flex w-full items-center justify-center gap-2.5 rounded-2xl border border-blue-400/40 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 px-5 py-3.5 text-sm font-bold text-white shadow-[0_-8px_32px_rgba(37,99,235,0.45)] backdrop-blur transition hover:brightness-110 active:scale-[0.98]"
      >
        Faire le test complet
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </a>
    </div>
  );
}
