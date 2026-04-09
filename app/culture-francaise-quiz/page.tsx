import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import QCMQuiz from "../components/QCMQuiz";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../components/SectionTitle";
import { getQuestionsByCategory } from "../lib/questions";
import { breadcrumbJsonLd, faqJsonLd, quizJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Quiz culture française 2026 : littérature, art, cinéma",
  description:
    "Testez votre culture française : littérature, peinture, cinéma, sciences. Idéal pour la naturalisation et pour les passionnés de la France.",
  alternates: { canonical: "/culture-francaise-quiz/" },
};

const culture = getQuestionsByCategory("culture");

const faqItems = [
  {
    question: "Pourquoi la culture en entretien ?",
    answer:
      "Parce qu'elle fait partie de l'identité du pays. Connaître quelques grands auteurs et artistes, c'est montrer que vous vous intéressez vraiment à la France.",
  },
  {
    question: "Quelles œuvres faut-il connaître ?",
    answer:
      "Au minimum : Les Misérables (Victor Hugo), Le Petit Prince (Saint-Exupéry), La Liberté guidant le peuple (Delacroix), les Nymphéas (Monet) et les grands noms des Lumières.",
  },
  {
    question: "Le cinéma français, ça tombe en entretien ?",
    answer:
      "Pas souvent comme question principale. Mais citer un film français que vous avez aimé, c'est toujours un bon point.",
  },
  {
    question: "Comment apprendre vite ?",
    answer:
      "Lisez les fiches du Livret du citoyen, écoutez la version audio dans les transports, et refaites les quiz régulièrement.",
  },
];

const figures = [
  { name: "Victor Hugo", role: "Écrivain (1802-1885)", work: "Les Misérables, Notre-Dame de Paris" },
  { name: "Marie Curie", role: "Scientifique (1867-1934)", work: "Double prix Nobel : physique 1903, chimie 1911" },
  { name: "Claude Monet", role: "Peintre (1840-1926)", work: "Les Nymphéas, Impression soleil levant" },
  { name: "Antoine de Saint-Exupéry", role: "Écrivain et aviateur (1900-1944)", work: "Le Petit Prince" },
  { name: "Simone de Beauvoir", role: "Philosophe (1908-1986)", work: "Le Deuxième Sexe" },
  { name: "Charles Baudelaire", role: "Poète (1821-1867)", work: "Les Fleurs du mal" },
];

export default function CultureFrancaisePage() {
  const url = `${SITE_URL}/culture-francaise-quiz/`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE_URL },
            { name: "Culture française", url },
          ]),
          quizJsonLd({
            name: "Quiz culture française",
            description: "Quiz sur la culture française : littérature, peinture, cinéma, sciences.",
            url,
            numQuestions: culture.length,
          }),
          faqJsonLd(faqItems),
        ]}
      />

      <Breadcrumb items={[{ href: "/culture-francaise-quiz/", label: "Culture française" }]} />

      <Hero
        badge="Quiz culture · 2026"
        title="Culture française : littérature, art, sciences"
        highlight="Culture française"
        subtitle="Testez vos connaissances sur les grands noms et les œuvres qui ont fait la France. Pour l'entretien, ou juste pour le plaisir."
        ctaLabel="Découvrir quiz, audio et mode scroll"
        ctaHref="https://cap-citoyen.fr/quiz"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-lg font-bold text-white sm:text-xl">La culture française, un patrimoine vivant</h2>
          <p className="mt-4 text-slate-300">
            La France a marqué le monde par sa littérature, ses arts, son cinéma,
            ses sciences et sa gastronomie. Connaître quelques grandes figures
            qui ont fait son histoire, c'est commencer à comprendre son âme.
          </p>
        </div>
      </section>

      <section className="container-prose mt-6 sm:mt-8">
        <SectionTitle
          eyebrow="À connaître"
          title="Six figures qu'il faut savoir nommer"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {figures.map((f) => (
            <div key={f.name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 sm:p-5 shadow-[0_18px_45px_rgba(2,8,23,0.3)]">
              <h3 className="text-base font-semibold text-white">{f.name}</h3>
              <p className="mt-1 text-xs text-blue-300">{f.role}</p>
              <p className="mt-2 text-sm text-slate-400">{f.work}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose mt-10">
        <SectionTitle
          eyebrow="Quiz"
          title="Questions de culture française"
          description="Toutes les questions du QCM sur la culture, avec corrigés."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {culture.map((q, i) => (
            <QCMQuiz key={q.id} question={q} index={i} />
          ))}
        </div>
      </section>

      <CTA
        variant="quiz"
        title="Plus de questions sur cap-citoyen.fr"
        subtitle="500+ questions, mode chrono, suivi de votre progression. Sans carte bancaire."
      />

      <FAQ items={faqItems} />
    </>
  );
}
