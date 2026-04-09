import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../components/SectionTitle";
import AlertBlock from "../components/AlertBlock";
import Differentiator from "../components/Differentiator";
import MidPageCTA from "../components/MidPageCTA";
import CivicExamFacts from "../components/CivicExamFacts";
import { breadcrumbJsonLd, faqJsonLd, quizJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Simulation d'examen de naturalisation française 2026",
  description:
    "Simulation d'entraînement pour l'examen civique 2026 et l'entretien de naturalisation : 20 questions tirées du Livret du citoyen, score immédiat, corrigés détaillés sur cap-citoyen.fr.",
  alternates: { canonical: "/simulation-examen-naturalisation/" },
};

const faqItems = [
  {
    question: "Comment ça se passe en préfecture ?",
    answer:
      "Vous êtes reçu seul par un agent. Il vérifie votre dossier, puis il pose des questions sur la France et sur votre vie. Comptez 30 minutes à 1 heure.",
  },
  {
    question: "Est-ce que c'est chronométré ?",
    answer:
      "Sur cap-citoyen.fr, vous avez le choix : entraînement libre ou mode chrono pour vous mettre la pression. À noter : l'entretien réel en préfecture, lui, n'est pas un examen chronométré au sens strict, c'est une discussion qui dure entre 30 minutes et 1 heure.",
  },
  {
    question: "Et si je rate des questions ?",
    answer:
      "Vous obtenez quand même votre score, et le détail question par question pour comprendre où vous avez calé. C'est tout l'intérêt : repérer ce qu'il faut réviser.",
  },
  {
    question: "Je peux voir mes erreurs après ?",
    answer:
      "Oui, sur cap-citoyen.fr vous avez le détail question par question, avec la bonne réponse et l'explication.",
  },
  {
    question: "Combien de simulations je peux faire ?",
    answer:
      "Autant que vous voulez. À chaque session, le tirage de questions change.",
  },
];

const steps = [
  {
    n: "01",
    title: "Vérification du dossier",
    description:
      "L'agent passe en revue votre pièce d'identité, vos justificatifs de domicile, fiches de paie, casier judiciaire et certificat de français.",
  },
  {
    n: "02",
    title: "Vous parlez de vous",
    description:
      "Votre parcours : pays d'origine, arrivée en France, famille, études, travail, projets.",
  },
  {
    n: "03",
    title: "Questions sur la France",
    description:
      "Questions issues du Livret du citoyen : symboles, histoire, institutions, valeurs. L'examen civique en compte 40, l'entretien oral varie selon la préfecture.",
  },
  {
    n: "04",
    title: "Adhésion aux valeurs",
    description:
      "L'agent vérifie que vous adhérez à la laïcité, l'égalité, la liberté, et que vous voulez vraiment devenir Français.",
  },
];

export default function SimulationPage() {
  const url = `${SITE_URL}/simulation-examen-naturalisation/`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE_URL },
            { name: "Simulation d'examen", url },
          ]),
          quizJsonLd({
            name: "Simulation d'examen de naturalisation",
            description:
              "Simulation d'entraînement de 20 questions tirées du Livret du citoyen.",
            url,
            numQuestions: 20,
          }),
          faqJsonLd(faqItems),
        ]}
      />

      <Breadcrumb items={[{ href: "/simulation-examen-naturalisation/", label: "Simulation d'examen" }]} />

      <Hero
        badge="Entraînement · 20 questions"
        title="Entraînez-vous avant l'examen ou l'entretien"
        highlight="avant"
        subtitle="20 questions tirées du Livret du citoyen, score à la fin et corrigés détaillés. Valable pour l'examen civique 2026 comme pour l'entretien de naturalisation."
        ctaLabel="Découvrir quiz, audio et mode scroll"
        ctaHref="https://cap-citoyen.fr/quiz"
      />

      <CivicExamFacts />

      <AlertBlock
        title="L'examen et l'entretien ne s'improvisent pas"
        message="Chaque année, des candidats échouent non par manque de volonté, mais par manque de préparation adaptée. Un passage raté, c'est 70 à 90 € et plusieurs semaines perdues."
      />

      <Differentiator />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-lg font-bold text-white sm:text-xl">Comment ça se passe le jour J</h2>
          <p className="mt-4 text-slate-300">
            L'entretien se déroule en préfecture, dans un bureau, en face-à-face
            avec un agent. Il dure 30 minutes à 1 heure et passe par quatre
            grandes étapes. Notre simulation reproduit la troisième, celle qui
            stresse le plus : les questions sur la France.
          </p>
        </div>
      </section>

      <section className="container-prose mt-6 sm:mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 sm:p-5 shadow-[0_18px_45px_rgba(2,8,23,0.4)]">
            <span className="text-xs font-bold text-blue-400">Étape {s.n}</span>
            <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{s.description}</p>
          </div>
        ))}
      </section>

      <MidPageCTA />

      <section className="container-prose mt-10">
        <SectionTitle
          eyebrow="Pourquoi simuler"
          title="Trois bonnes raisons de s'y mettre"
        />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            { t: "Dégonfler le stress", d: "Plus vous répétez, moins le jour J vous fera peur." },
            { t: "Voir vos points faibles", d: "Le score détaillé vous dit exactement quoi réviser." },
            { t: "Gagner en aisance", d: "Vous apprenez à formuler des réponses claires et naturelles." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 sm:p-5 shadow-[0_18px_45px_rgba(2,8,23,0.3)]">
              <h3 className="text-base font-semibold text-white">{c.t}</h3>
              <p className="mt-2 text-sm text-slate-400">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA
        variant="quiz"
        title="Prêt à vous lancer ?"
        subtitle="Simulation d'entraînement sur cap-citoyen.fr, score à la fin, corrigés détaillés."
      />

      <FAQ items={faqItems} />
    </>
  );
}
