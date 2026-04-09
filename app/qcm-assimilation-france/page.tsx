import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import QCMQuiz from "../components/QCMQuiz";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import AlertBlock from "../components/AlertBlock";
import Differentiator from "../components/Differentiator";
import MidPageCTA from "../components/MidPageCTA";
import CivicExamFacts from "../components/CivicExamFacts";
import { questions } from "../lib/questions";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  quizJsonLd,
  SITE_URL,
} from "../lib/site";

export const metadata: Metadata = {
  title: "QCM d'assimilation 2026 : examen civique et naturalisation",
  description:
    "Le QCM d'assimilation 2026 pour l'examen civique (titre de séjour pluriannuel) et la naturalisation : 50 questions sur les symboles, l'histoire, les institutions et les valeurs de la République.",
  alternates: { canonical: "/qcm-assimilation-france/" },
};

const faqItems = [
  {
    question: "C'est quoi, un QCM d'assimilation ?",
    answer:
      "C'est une série de questions sur la France à choix multiples. Vous choisissez la bonne réponse, on vous dit si c'est juste. Pratique pour réviser avant l'entretien.",
  },
  {
    question: "Ce QCM est-il officiel ?",
    answer:
      "Il n'y a pas de QCM officiel unique. Chaque préfecture pioche ses questions dans le Livret du citoyen. Le nôtre couvre tous les thèmes du livret.",
  },
  {
    question: "Combien de questions selon l'épreuve ?",
    answer:
      "Deux cas distincts. L'examen civique (titre de séjour pluriannuel, obligatoire depuis 2026) : exactement 40 questions QCM en 45 minutes, score minimum 32/40. L'entretien de naturalisation en préfecture : un oral sans nombre fixe de questions, qui dure entre 30 minutes et 1 heure selon la préfecture. Nos 50 questions couvrent les deux formats.",
  },
  {
    question: "Un score minimum pour réussir ?",
    answer:
      "Pas officiellement. Mais visez 80 % de bonnes réponses : vous serez à l'aise. L'agent regarde aussi votre français et votre attitude.",
  },
  {
    question: "Le QCM en PDF, ça existe ?",
    answer:
      "Oui. Avec un compte sur cap-citoyen.fr, vous récupérez les fiches PDF imprimables et le Livret du citoyen complet.",
  },
];

const grouped = {
  symboles: questions.filter((q) => q.category === "symboles"),
  histoire: questions.filter((q) => q.category === "histoire"),
  institutions: questions.filter((q) => q.category === "institutions"),
  valeurs: questions.filter((q) => q.category === "valeurs"),
  geographie: questions.filter((q) => q.category === "geographie"),
  culture: questions.filter((q) => q.category === "culture"),
  vie: questions.filter((q) => q.category === "vie-quotidienne"),
};

const sectionMeta: Record<keyof typeof grouped, { label: string; color: string }> = {
  symboles: { label: "Symboles de la République", color: "text-blue-300" },
  histoire: { label: "Histoire de France", color: "text-red-300" },
  institutions: { label: "Institutions", color: "text-blue-300" },
  valeurs: { label: "Valeurs de la République", color: "text-slate-200" },
  geographie: { label: "Géographie", color: "text-blue-300" },
  culture: { label: "Culture française", color: "text-red-300" },
  vie: { label: "Vie quotidienne", color: "text-slate-200" },
};

export default function QCMPage() {
  const url = `${SITE_URL}/qcm-assimilation-france/`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE_URL },
            { name: "QCM d'assimilation", url },
          ]),
          quizJsonLd({
            name: "QCM d'assimilation France",
            description: "QCM complet de 50 questions corrigées pour la naturalisation française.",
            url,
            numQuestions: 50,
          }),
          faqJsonLd(faqItems),
        ]}
      />

      <Breadcrumb items={[{ href: "/qcm-assimilation-france/", label: "QCM d'assimilation" }]} />

      <Hero
        badge="50 questions · 7 thèmes"
        title="Le QCM d'assimilation, version complète"
        highlight="assimilation"
        subtitle="Valable pour l'examen civique obligatoire depuis 2026 et pour l'entretien de naturalisation. Cliquez sur une réponse, le corrigé apparaît tout de suite."
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
          <h2 className="text-lg font-bold text-white sm:text-xl">À quoi ça sert ?</h2>
          <p className="mt-4 text-slate-300">
            À réviser avant l'entretien, que ce soit pour la naturalisation, un
            titre de séjour pluriannuel, ou par simple curiosité. Les 50 questions
            ci-dessous sont toutes corrigées et expliquées en quelques mots.
          </p>
          <p className="mt-3 text-slate-300">
            Faites-les dans l'ordre, ou directement par thème. L'objectif : répondre
            à 80 % des questions sans hésiter.
          </p>
        </div>
      </section>

      {(Object.keys(grouped) as (keyof typeof grouped)[]).map((key) => {
        const list = grouped[key];
        if (list.length === 0) return null;
        const meta = sectionMeta[key];
        return (
          <section key={key} className="container-prose mt-8 sm:mt-10">
            <header className="flex items-end justify-between gap-4">
              <div>
                <p className={`text-xs font-bold uppercase tracking-wider ${meta.color}`}>
                  Thème
                </p>
                <h2 className="mt-1 text-lg font-bold text-white sm:text-xl">{meta.label}</h2>
              </div>
              <span className="text-sm text-slate-500">{list.length} questions</span>
            </header>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {list.map((q, i) => (
                <QCMQuiz key={q.id} question={q} index={i} />
              ))}
            </div>
          </section>
        );
      })}

      <MidPageCTA />

      <CTA
        variant="quiz"
        title="Envie d'un test chronométré ?"
        subtitle="Lancez la simulation sur cap-citoyen.fr et voyez votre score à la fin."
      />

      <FAQ items={faqItems} />
    </>
  );
}
