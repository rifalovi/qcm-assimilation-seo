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
import CivicExamFacts from "./components/CivicExamFacts";
import { questions } from "./lib/questions";
import { faqJsonLd, organizationJsonLd, websiteJsonLd } from "./lib/site";

export const metadata: Metadata = {
  title: "QCM Assimilation : examen civique, naturalisation, culture française 2026",
  description:
    "Préparez l'examen civique obligatoire (titre de séjour pluriannuel), l'entretien de naturalisation ou enrichissez votre connaissance de la France. 500+ questions corrigées, mises à jour 2026.",
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
      "Non, vous pouvez parcourir ce site librement. Pour la préparation complète (quiz, audio, mode scroll, suivi de progression, fiches imprimables), rendez-vous sur cap-citoyen.fr.",
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
    border: "hover:border-blue-400/30",
    bar: "from-blue-500 to-indigo-500",
    iconBg: "border-blue-400/30 bg-blue-500/15 text-blue-300",
  },
  blanc: {
    border: "hover:border-white/30",
    bar: "from-slate-200 to-slate-400",
    iconBg: "border-white/20 bg-white/10 text-slate-100",
  },
  rouge: {
    border: "hover:border-red-400/30",
    bar: "from-red-500 to-rose-500",
    iconBg: "border-red-400/30 bg-red-500/15 text-red-300",
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
        ctaLabel="Découvrir quiz, audio et mode scroll"
        secondaryHref="/qcm-assimilation-france/"
        secondaryLabel="Voir le QCM"
      />

      <CivicExamFacts />

      <Differentiator />

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
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-5 shadow-[0_18px_45px_rgba(2,8,23,0.35)] transition-all duration-300 ${acc.border}`}
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
                <h3 className="mt-3 text-base font-bold text-white">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                  {a.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 transition group-hover:gap-2 group-hover:text-blue-200">
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
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 shadow-[0_18px_45px_rgba(2,8,23,0.3)] transition hover:border-blue-400/20 sm:p-5"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-500/15 text-[11px] font-bold text-blue-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-sm font-bold text-white sm:text-[15px]">
                {f.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">
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
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-blue-400/40 hover:bg-white/10 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
          >
            Voir les 50 questions
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <CTA
        variant="register"
        title="On vous accompagne jusqu'au bout"
        subtitle="Compte cap-citoyen.fr, progression sauvegardée, accès aux fiches. Pas de carte bancaire."
      />

      <FAQ items={faqItems} />
    </>
  );
}
