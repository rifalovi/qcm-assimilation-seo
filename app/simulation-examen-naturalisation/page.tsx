import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../components/SectionTitle";
import { breadcrumbJsonLd, faqJsonLd, quizJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Simulation d'examen de naturalisation française 2026",
  description:
    "Passez une simulation d'examen de naturalisation en conditions réelles : 20 questions, 15 minutes, score immédiat. Identique à l'entretien d'assimilation en préfecture.",
  alternates: { canonical: "/simulation-examen-naturalisation/" },
};

const faqItems = [
  {
    question: "Comment ça se passe en préfecture ?",
    answer:
      "Vous êtes reçu seul par un agent. Il vérifie votre dossier, puis il pose des questions sur la France et sur votre vie. Comptez 30 minutes à 1 heure.",
  },
  {
    question: "C'est vraiment chronométré ?",
    answer:
      "Oui : 15 minutes pour 20 questions, soit 45 secondes par question. C'est exactement le rythme d'un échange en entretien.",
  },
  {
    question: "Et si je dépasse le temps ?",
    answer:
      "Vous obtenez quand même votre score, mais les questions sans réponse comptent comme fausses. Un bon indicateur de votre rapidité.",
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
      "15 à 25 questions issues du Livret du citoyen : symboles, histoire, institutions, valeurs.",
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
              "Simulation chronométrée type préfecture : 20 questions en 15 minutes.",
            url,
            numQuestions: 20,
          }),
          faqJsonLd(faqItems),
        ]}
      />

      <Breadcrumb items={[{ href: "/simulation-examen-naturalisation/", label: "Simulation d'examen" }]} />

      <Hero
        badge="Chrono · 15 minutes"
        title="Passez l'examen comme à la préfecture"
        highlight="examen"
        subtitle="20 questions, 15 minutes, score à la fin. La meilleure façon de dégonfler le stress avant le jour J."
        ctaLabel="Lancer la simulation"
        ctaHref="https://cap-citoyen.fr/quiz"
      />

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

      <section className="container-prose mt-10">
        <SectionTitle
          eyebrow="Pourquoi simuler"
          title="Trois bonnes raisons de s'y mettre"
        />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            { t: "Dégonfler le stress", d: "Plus vous répétez, moins le jour J vous fera peur." },
            { t: "Voir vos points faibles", d: "Le score détaillé vous dit exactement quoi réviser." },
            { t: "Gagner en rapidité", d: "Vous apprenez à répondre en moins d'une minute, comme à l'oral." },
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
        subtitle="Simulation chronométrée sur cap-citoyen.fr, score à la fin, corrigés détaillés."
      />

      <FAQ items={faqItems} />
    </>
  );
}
