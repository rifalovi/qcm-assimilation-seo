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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        borderBottom: "1px solid var(--cc-border)",
        background: "var(--cc-surface)",
        boxShadow: "var(--cc-shadow-sm)",
      }}
    >
      <div className="h-0.5 gradient-tricolore" aria-hidden />
      <div className="container-prose flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 font-bold"
        >
          <span
            aria-hidden
            className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl text-sm font-black text-white"
            style={{ background: "var(--cc-primary)" }}
          >
            Qa
          </span>
          <span
            className="text-base sm:text-lg tracking-tight"
            style={{ color: "var(--cc-text)" }}
          >
            QCM Assimilation
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:block" aria-label="Navigation principale">
          <ul
            className="flex items-center gap-7 text-sm font-medium"
            style={{ color: "var(--cc-text-muted)" }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors"
                  style={{ color: "var(--cc-text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cc-text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cc-text-muted)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://cap-citoyen.fr/register"
          target="_blank"
          rel="noopener"
          className="cc-btn cc-btn-primary hidden lg:inline-flex"
        >
          Quiz et assistant IA
          <span aria-hidden>→</span>
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition lg:hidden"
          style={{
            border: "1px solid var(--cc-border)",
            background: "var(--cc-surface-alt)",
            color: "var(--cc-text)",
          }}
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
          className="lg:hidden"
          style={{ borderTop: "1px solid var(--cc-border)", background: "var(--cc-surface)" }}
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
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition"
                    style={{
                      border: "1px solid var(--cc-border)",
                      background: "var(--cc-surface-alt)",
                      color: "var(--cc-text)",
                    }}
                  >
                    {link.label}
                    <span aria-hidden style={{ color: "var(--cc-primary)" }}>→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://cap-citoyen.fr/register"
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="cc-btn cc-btn-primary cc-btn-lg mt-4 w-full"
            >
              Quiz, assistant IA et coaching personnalisé
              <span aria-hidden>→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
