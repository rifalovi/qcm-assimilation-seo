import type { Metadata } from "next";
import Link from "next/link";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import QCMQuiz from "../components/QCMQuiz";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../components/SectionTitle";
import { questions } from "../lib/questions";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  quizJsonLd,
  SITE_URL,
} from "../lib/site";

export const metadata: Metadata = {
  title: "Test de naturalisation française gratuit, QCM 2026",
  description:
    "Faites le test de naturalisation française gratuitement. 50 questions du Livret du citoyen, corrigés détaillés, simulation type entretien préfecture.",
  alternates: { canonical: "/test-naturalisation-france/" },
};

const faqItems = [
  {
    question: "À quoi sert le test ?",
    answer:
      "À mesurer où vous en êtes avant l'entretien : histoire, valeurs, institutions, vie quotidienne. C'est un thermomètre fiable de votre niveau réel.",
  },
  {
    question: "Le test est-il chronométré ?",
    answer:
      "Sur cap-citoyen.fr vous avez le choix : entraînement libre ou mode chrono (15 minutes pour 20 questions, comme à la préfecture).",
  },
  {
    question: "Quel score viser ?",
    answer:
      "Aucune note officielle n'est imposée par les préfectures. Visez 80 % de bonnes réponses : vous serez à l'aise le jour J.",
  },
  {
    question: "Puis-je le refaire plusieurs fois ?",
    answer:
      "Oui, autant que vous voulez. Les questions sont mélangées à chaque session pour éviter d'apprendre par cœur.",
  },
  {
    question: "Et pour l'oral ?",
    answer:
      "Le QCM travaille les connaissances. Pour l'oral, écoutez la version audio du Livret et reformulez chaque réponse à voix haute.",
  },
];

const sample = questions.slice(0, 8);

export default function TestNaturalisationPage() {
  const url = `${SITE_URL}/test-naturalisation-france/`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE_URL },
            { name: "Test de naturalisation", url },
          ]),
          quizJsonLd({
            name: "Test de naturalisation française",
            description:
              "QCM gratuit de préparation à l'entretien d'assimilation et à la naturalisation française.",
            url,
            numQuestions: 50,
          }),
          faqJsonLd(faqItems),
        ]}
      />

      <Breadcrumb items={[{ href: "/test-naturalisation-france/", label: "Test de naturalisation" }]} />

      <Hero
        badge="Gratuit · 50 questions"
        title="Le test pour voir où vous en êtes"
        highlight="test"
        subtitle="15 minutes pour mesurer votre niveau sur les questions qu'on vous posera en préfecture. Corrigé tout de suite, et on vous explique pourquoi."
        ctaLabel="Démarrer le test"
        ctaHref="https://cap-citoyen.fr/quiz"
        secondaryHref="/livret-du-citoyen-questions/"
        secondaryLabel="Réviser le Livret"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-lg font-bold text-white sm:text-xl">Pourquoi un test à blanc, ça change tout</h2>
          <p className="mt-4 text-slate-300">
            L'entretien d'assimilation, ça stresse. Faire le test plusieurs fois
            avant le jour J est la meilleure façon de relâcher la pression : vous
            voyez vos points faibles, vous fixez les bonnes réponses, et vous
            arrivez détendu en face de l'agent.
          </p>
          <p className="mt-3 text-slate-300">
            Le test couvre les sept gros thèmes du Livret du citoyen : symboles,
            histoire, institutions, valeurs, vie quotidienne, culture, géographie.
            Chaque question est suivie d'une explication courte pour comprendre,
            pas juste pour retenir.
          </p>
        </div>
      </section>

      <section className="container-prose mt-6 sm:mt-8 grid gap-4 md:grid-cols-3">
        {[
          { n: "01", t: "50 questions corrigées", d: "Du drapeau tricolore à la loi de 1905, tout y passe." },
          { n: "02", t: "Mode chrono", d: "15 minutes top chrono, comme le jour de l'entretien." },
          { n: "03", t: "Score et suivi", d: "Vous voyez vos points faibles, vous savez quoi réviser." },
        ].map((s) => (
          <div key={s.n} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 sm:p-5 shadow-[0_18px_45px_rgba(2,8,23,0.4)]">
            <span className="text-xs font-bold text-blue-400">{s.n}</span>
            <h3 className="mt-2 text-lg font-semibold text-white">{s.t}</h3>
            <p className="mt-2 text-sm text-slate-400">{s.d}</p>
          </div>
        ))}
      </section>

      <section className="container-prose mt-10">
        <SectionTitle
          eyebrow="Échauffement"
          title="8 questions pour démarrer"
          description="Cliquez, voyez le corrigé. Quand vous êtes chaud, lancez le test complet."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {sample.map((q, i) => (
            <QCMQuiz key={q.id} question={q} index={i} />
          ))}
        </div>
      </section>

      <CTA
        variant="quiz"
        title="Prêt pour le test complet ?"
        subtitle="Lancez le test chronométré sur cap-citoyen.fr et recevez votre score à la fin."
      />

      <section className="container-prose">
        <SectionTitle
          title="Pour aller plus loin"
          description="Mélangez les formats : c'est ce qui marche le mieux."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { href: "/qcm-assimilation-france/", t: "QCM d'assimilation", d: "Les 50 questions complètes." },
            { href: "/livret-du-citoyen-questions/", t: "Livret du citoyen", d: "Toutes les fiches à réviser." },
            { href: "/simulation-examen-naturalisation/", t: "Simulation d'examen", d: "Mode chronométré type préfecture." },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 sm:p-5 shadow-[0_18px_45px_rgba(2,8,23,0.3)] hover:border-blue-700/60"
            >
              <h3 className="text-base font-semibold text-white">{c.t}</h3>
              <p className="mt-2 text-sm text-slate-400">{c.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <FAQ items={faqItems} />
    </>
  );
}
