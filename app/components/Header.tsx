"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/test-naturalisation-france/", label: "Test naturalisation" },
  { href: "/qcm-assimilation-france/", label: "QCM" },
  { href: "/livret-du-citoyen-questions/", label: "Livret du citoyen" },
  { href: "/simulation-examen-naturalisation/", label: "Simulation" },
  { href: "/a-propos/", label: "À propos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/85 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/70">
      <div className="h-0.5 gradient-tricolore" aria-hidden />
      <div className="container-prose flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 font-bold"
        >
          <span
            aria-hidden
            className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 text-sm font-black text-white shadow-[0_8px_24px_rgba(37,99,235,0.45)]"
          >
            Qa
          </span>
          <span className="text-base sm:text-lg tracking-tight text-white">
            QCM Assimilation
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://cap-citoyen.fr/quiz"
          target="_blank"
          rel="noopener"
          className="hidden lg:inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 px-4 py-2 text-sm font-bold text-white shadow-[0_8px_22px_rgba(37,99,235,0.4)] transition hover:brightness-110 active:scale-[0.98]"
        >
          Quiz, audio et scroll
          <span aria-hidden>→</span>
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-blue-400/40 hover:bg-white/10 lg:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl"
        >
          <nav
            aria-label="Navigation principale (mobile)"
            className="container-prose py-5"
          >
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base font-semibold text-white transition hover:border-blue-400/40 hover:bg-blue-500/10"
                  >
                    {link.label}
                    <span aria-hidden className="text-blue-300">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://cap-citoyen.fr/quiz"
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 px-5 py-3.5 text-base font-bold text-white shadow-[0_12px_32px_rgba(37,99,235,0.45)] transition hover:brightness-110 active:scale-[0.98]"
            >
              Quiz, audio et mode scroll
              <span aria-hidden>→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
