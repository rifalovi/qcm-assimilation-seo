import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import QCMQuiz from "../components/QCMQuiz";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import { questions } from "../lib/questions";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  quizJsonLd,
  SITE_URL,
} from "../lib/site";

export const metadata: Metadata = {
  title: "QCM d'assimilation France — 50 questions corrigées",
  description:
    "Le QCM d'assimilation gratuit pour la naturalisation : 50 questions sur les symboles, l'histoire, les institutions et les valeurs de la République française.",
  alternates: { canonical: "/qcm-assimilation-france/" },
};

const faqItems = [
  {
    question: "Qu'est-ce qu'un QCM d'assimilation ?",
    answer:
      "Un QCM (Questionnaire à Choix Multiples) d'assimilation est une série de questions sur la France posées sous forme de cases à cocher. Il sert à vérifier vos connaissances avant ou pendant l'entretien de naturalisation.",
  },
  {
    question: "Le QCM d'assimilation est-il officiel ?",
    answer:
      "Il n'existe pas de QCM officiel unique. Chaque préfecture compose ses questions à partir du Livret du citoyen. Notre QCM couvre l'intégralité des thèmes du livret.",
  },
  {
    question: "Combien de questions vais-je avoir en entretien ?",
    answer:
      "En général, 15 à 25 questions sont posées. Notre QCM de 50 questions vous permet de couvrir un spectre plus large que ce qui sera effectivement demandé.",
  },
  {
    question: "Y a-t-il un score minimum pour réussir ?",
    answer:
      "Officiellement non, mais visez au moins 80 % de bonnes réponses pour être à l'aise. L'agent évaluera aussi votre français et votre attitude.",
  },
  {
    question: "Puis-je télécharger le QCM en PDF ?",
    answer:
      "Oui, en créant un compte gratuit sur cap-citoyen.fr, vous accédez aux fiches PDF imprimables et au Livret du citoyen complet.",
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
        badge="50 questions · 7 thématiques"
        title="QCM d'assimilation France — 50 questions"
        highlight="assimilation"
        subtitle="Le QCM complet pour la naturalisation française : symboles, histoire, institutions, valeurs, géographie, culture, vie quotidienne. Cliquez sur une réponse pour voir le corrigé."
        ctaLabel="Démarrer le QCM interactif"
        ctaHref="https://cap-citoyen.fr/quiz"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white">À quoi sert ce QCM d'assimilation ?</h2>
          <p className="mt-4 text-slate-300">
            Ce QCM est un outil de révision avant l'entretien d'assimilation, qu'il
            soit pour une demande de naturalisation, un titre de séjour pluriannuel
            ou une simple curiosité sur la France. Les 50 questions ci-dessous sont
            toutes accompagnées de la bonne réponse et d'une courte explication
            pédagogique.
          </p>
          <p className="mt-3 text-slate-300">
            Faites-les dans l'ordre, ou directement par thématique. L'objectif est
            d'arriver à répondre à 80 % des questions sans hésitation.
          </p>
        </div>
      </section>

      {(Object.keys(grouped) as (keyof typeof grouped)[]).map((key) => {
        const list = grouped[key];
        if (list.length === 0) return null;
        const meta = sectionMeta[key];
        return (
          <section key={key} className="container-prose mt-16">
            <header className="flex items-end justify-between gap-4">
              <div>
                <p className={`text-xs font-bold uppercase tracking-wider ${meta.color}`}>
                  Thématique
                </p>
                <h2 className="mt-1 text-2xl font-bold text-white">{meta.label}</h2>
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

      <CTA
        variant="quiz"
        title="Vous voulez vous tester en mode chronométré ?"
        subtitle="Lancez la simulation d'examen sur cap-citoyen.fr et obtenez un score instantané."
      />

      <FAQ items={faqItems} />
    </>
  );
}
