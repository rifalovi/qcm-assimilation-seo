"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-primary-cta]")
    );

    if (targets.length === 0) return;

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
        className="flex w-full items-center justify-center gap-2.5 rounded-2xl px-5 py-3 text-sm font-bold text-white transition"
        style={{
          background: "var(--cc-primary)",
          boxShadow: "0 -4px 20px rgba(27, 82, 153, 0.35)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cc-primary-hover)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "var(--cc-primary)")}
      >
        <span className="flex flex-col items-center leading-tight">
          <span className="text-[11px] font-medium text-white/80">
            Sur cap-citoyen.fr
          </span>
          <span className="flex items-center gap-1.5">
            Quiz, coaching IA et assistant démarches
            <span aria-hidden>→</span>
          </span>
        </span>
      </a>
    </div>
  );
}
