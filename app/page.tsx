import Link from "next/link";
import type { Metadata } from "next";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import QCMQuiz from "./components/QCMQuiz";
import JsonLd from "./components/JsonLd";
import SectionTitle from "./components/SectionTitle";
import Differentiator from "./components/Differentiator";
import MidPageCTA from "./components/MidPageCTA";
import ShareButtons from "./components/ShareButtons";
import CivicExamFacts from "./components/CivicExamFacts";
import { questions } from "./lib/questions";
import { faqJsonLd, organizationJsonLd, websiteJsonLd } from "./lib/site";

export const metadata: Metadata = {
  title: "QCM Assimilation : examen civique, naturalisation, culture française 2026",
  description:
    "Préparez l'examen civique et la naturalisation avec un assistant IA naturalisation, un coach examen civique personnalisé et une aide démarches titre de séjour. 500+ questions corrigées, mises à jour 2026.",
  alternates: { canonical: "/" },
};

const faqItems = [
  {
    question: "C'est quoi, l'examen civique obligatoire depuis 2026 ?",
    answer:
      "Depuis le 1er janvier 2026, toute première demande de titre de séjour pluriannuel passe par un examen civique : 40 questions QCM en 45 minutes, avec un score minimum de 32/40 (80 % de bonnes réponses). Un passage coûte entre 70 et 90 euros, donc autant le préparer sérieusement pour éviter de repasser.",
  },
  {
    question: "Et l'entretien de naturalisation, c'est différent ?",
    answer:
      "Oui. L'entretien de naturalisation est un oral individuel en préfecture, une discussion de 30 minutes à 1 heure sur la France, les valeurs républicaines et votre parcours. Les connaissances attendues se recoupent largement avec l'examen civique : les mêmes révisions servent pour les deux.",
  },
  {
    question: "Le QCM est-il le même qu'à l'examen ?",
    answer:
      "Il n'existe pas de QCM officiel public. Nos questions sont conçues à partir du Livret du citoyen et des thèmes confirmés : symboles, histoire, institutions, valeurs, vie quotidienne, culture, géographie.",
  },
  {
    question: "Faut-il payer pour s'entraîner ici ?",
    answer:
      "Non, vous pouvez parcourir ce site librement. Pour la préparation complète (quiz, assistant IA démarches, coach IA personnalisé après chaque quiz, explications IA après chaque erreur, messagerie communautaire, audio, suivi de progression), rendez-vous sur cap-citoyen.fr.",
  },
  {
    question: "À qui s'adresse ce site ?",
    answer:
      "Trois publics : ceux qui préparent l'examen civique pour un titre de séjour pluriannuel, ceux qui préparent l'entretien de naturalisation, et les personnes simplement curieuses de mieux connaître la France.",
  },
  {
    question: "Combien de temps pour bien se préparer ?",
    answer:
      "Avec 15 à 30 minutes par jour, deux à quatre semaines suffisent pour maîtriser l'essentiel du Livret du citoyen et viser les 80 % de bonnes réponses sans stress.",
  },
];

const featuredQuestions = questions.slice(0, 6);

const audiences = [
  {
    title: "Examen civique 2026",
    description:
      "Vous passez l'examen obligatoire pour un titre de séjour pluriannuel : 40 questions, 45 minutes, 32/40 minimum. Mettez toutes les chances de votre côté.",
    href: "/qcm-assimilation-france/",
    accent: "bleu",
    icon: "🪪",
  },
  {
    title: "Naturalisation française",
    description:
      "Vous préparez l'entretien oral en préfecture pour devenir Français. Les mêmes révisions servent, avec un focus sur les valeurs républicaines.",
    href: "/test-naturalisation-france/",
    accent: "blanc",
    icon: "🇫🇷",
  },
  {
    title: "Curieux de la France",
    description:
      "Vous voulez (re)découvrir l'histoire, les institutions et la culture du pays. Des QCM clairs, des fiches courtes, sans jargon.",
    href: "/culture-francaise-quiz/",
    accent: "rouge",
    icon: "✨",
  },
];

const accentMap = {
  bleu: {
    border: "hover:border-[var(--cc-primary)]",
    bar: "from-[var(--cc-primary)] to-[var(--cc-primary-hover)]",
    iconBg: "border-[var(--cc-border)] bg-[var(--cc-primary-soft)] text-[var(--cc-primary)]",
  },
  blanc: {
    border: "hover:border-[var(--cc-border-strong)]",
    bar: "from-[var(--cc-border)] to-[var(--cc-border-strong)]",
    iconBg: "border-[var(--cc-border)] bg-[var(--cc-surface-alt)] text-[var(--cc-text-muted)]",
  },
  rouge: {
    border: "hover:border-[var(--cc-danger)]",
    bar: "from-[var(--cc-danger)] to-[var(--cc-flag-red)]",
    iconBg: "border-[var(--cc-border)] bg-[var(--cc-danger-soft)] text-[var(--cc-danger)]",
  },
} as const;

const features = [
  {
    title: "500+ questions corrigées",
    description:
      "Tout le Livret du citoyen est couvert, avec les thèmes qui reviennent le plus à l'examen.",
  },
  {
    title: "Simulations d'entraînement",
    description:
      "Tests au format 40 questions / 45 minutes, avec score et corrigé question par question.",
  },
  {
    title: "Fiches au bon format",
    description:
      "Symboles, histoire, institutions, valeurs : ce qu'il faut savoir, ni plus ni moins.",
  },
  {
    title: "Mode audio",
    description:
      "Le Livret du citoyen lu à voix haute, pour réviser pendant les trajets.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd(), faqJsonLd(faqItems)]} />

      <Hero
        badge="Mis à jour · 2026"
        title="Examen civique, naturalisation ou curiosité : préparez-vous avec les bonnes questions"
        highlight="les bonnes questions"
        subtitle="Examen civique obligatoire depuis le 1er janvier 2026, entretien de naturalisation, ou simple envie de mieux connaître la France : un même socle de révision, trois publics."
        ctaHref="https://cap-citoyen.fr/quiz"
        ctaLabel="Accéder au quiz, à l'assistant IA et au coaching personnalisé"
        secondaryHref="/qcm-assimilation-france/"
        secondaryLabel="Voir le QCM"
      />

      <CivicExamFacts />

      <Differentiator />

      {/* Pourquoi Cap Citoyen ? */}
      <section className="container-prose mt-10 sm:mt-14">
        <SectionTitle
          eyebrow="Nouveau"
          title="Pourquoi Cap Citoyen ?"
          description="Quatre fonctionnalités IA qui changent la donne pour votre préparation."
        />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "🤖",
              title: "Assistant IA démarches",
              description:
                "Posez vos questions sur la naturalisation, le titre de séjour ou l'examen civique. L'IA vous répond instantanément.",
            },
            {
              icon: "🎯",
              title: "Coach IA personnalisé",
              description:
                "Après chaque quiz, le coach IA analyse vos résultats et vous guide sur ce qu'il faut réviser en priorité.",
            },
            {
              icon: "💡",
              title: "Explications IA",
              description:
                "Chaque mauvaise réponse déclenche une explication IA claire et pédagogique pour comprendre, pas juste retenir.",
            },
            {
              icon: "💬",
              title: "Messagerie communautaire",
              description:
                "Échangez avec d'autres candidats en temps réel. Partagez vos conseils, vos retours d'expérience et vos questions.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="cc-card p-4 transition hover:shadow-md sm:p-5"
            >
              <span
                aria-hidden
                className="flex h-10 w-10 items-center justify-center rounded-xl border text-xl"
                style={{ borderColor: "var(--cc-border)", background: "var(--cc-primary-soft)" }}
              >
                {f.icon}
              </span>
              <h3 className="mt-3 text-sm font-bold sm:text-[15px]" style={{ color: "var(--cc-text)" }}>
                {f.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--cc-text-muted)]">
                {f.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="https://cap-citoyen.fr/quiz"
            target="_blank"
            rel="noopener"
            className="cc-link-primary inline-flex items-center gap-2 text-sm font-bold transition"
          >
            Découvrir Cap Citoyen gratuitement <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* Audiences */}
      <section className="container-prose mt-6 sm:mt-8">
        <SectionTitle
          eyebrow="Pour qui"
          title="Trois publics, un même socle"
          description="Examen civique pour le titre de séjour, entretien de naturalisation, ou simple curiosité : la préparation est la même, seule l'intensité change."
        />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {audiences.map((a) => {
            const acc = accentMap[a.accent as keyof typeof accentMap];
            return (
              <Link
                key={a.title}
                href={a.href}
                className={`cc-card cc-card-interactive group relative overflow-hidden p-5 transition-all duration-300 ${acc.border}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${acc.bar}`}
                  aria-hidden
                />
                <span
                  aria-hidden
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border text-xl ${acc.iconBg}`}
                >
                  {a.icon}
                </span>
                <h3 className="mt-3 text-base font-bold" style={{ color: "var(--cc-text)" }}>{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--cc-text-muted)]">
                  {a.description}
                </p>
                <span className="cc-link-primary mt-3 inline-flex items-center gap-1.5 text-xs font-bold transition group-hover:gap-2">
                  S'entraîner <span aria-hidden>→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="container-prose mt-10 sm:mt-14">
        <SectionTitle
          eyebrow="Ce qu'on propose"
          title="Une prépa carrée, sans chichi"
          description="Pensé pour les candidats à l'examen civique, à la naturalisation, et pour tous les curieux, par des gens qui sont passés par là."
        />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="cc-card p-4 transition hover:shadow-md sm:p-5"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border text-[11px] font-bold text-[var(--cc-primary)]" style={{ borderColor: "var(--cc-border)", background: "var(--cc-primary-soft)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-sm font-bold sm:text-[15px]" style={{ color: "var(--cc-text)" }}>
                {f.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--cc-text-muted)]">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <MidPageCTA />

      {/* Sample QCM */}
      <section className="container-prose mt-10 sm:mt-14">
        <SectionTitle
          eyebrow="À vous de jouer"
          title="6 questions pour s'échauffer"
          description="Cliquez sur une réponse, le corrigé apparaît tout de suite."
        />
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {featuredQuestions.map((q, i) => (
            <QCMQuiz key={q.id} question={q} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/qcm-assimilation-france/"
            className="cc-btn cc-btn-secondary cc-btn-lg w-full sm:w-auto"
          >
            Voir les 50 questions
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <ShareButtons path="/" message="Je prépare mon examen civique 🇫🇷" />

      <CTA
        variant="register"
        title="On vous accompagne jusqu'au bout"
        subtitle="Assistant IA démarches, coaching personnalisé après chaque quiz, explications IA et messagerie communautaire. Sans carte bancaire."
      />

      <FAQ items={faqItems} />
    </>
  );
}
