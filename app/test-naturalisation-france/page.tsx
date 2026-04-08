import type { Metadata } from "next";
import Link from "next/link";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import QCMCard from "../components/QCMCard";
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
  title: "Test de naturalisation française gratuit — QCM 2026",
  description:
    "Faites le test de naturalisation française gratuitement. 50 questions du Livret du citoyen, corrigés détaillés, simulation type entretien préfecture.",
  alternates: { canonical: "/test-naturalisation-france/" },
};

const faqItems = [
  {
    question: "À quoi sert le test de naturalisation ?",
    answer:
      "Il permet de vérifier votre niveau de connaissance de la France avant l'entretien d'assimilation : histoire, valeurs, institutions et vie quotidienne. C'est un excellent indicateur de votre niveau réel.",
  },
  {
    question: "Le test est-il chronométré ?",
    answer:
      "Sur cap-citoyen.fr, vous pouvez choisir entre un mode entraînement libre et une simulation chronométrée (15 minutes pour 20 questions, comme en conditions réelles).",
  },
  {
    question: "Quelle note faut-il viser ?",
    answer:
      "Il n'y a pas de note officielle imposée par les préfectures, mais on considère qu'à partir de 80 % de bonnes réponses, vous êtes prêt pour l'entretien.",
  },
  {
    question: "Puis-je refaire le test plusieurs fois ?",
    answer:
      "Oui, autant de fois que vous le souhaitez. Les questions sont mélangées à chaque session pour éviter la mémorisation par cœur.",
  },
  {
    question: "Le test prépare-t-il aussi à l'oral ?",
    answer:
      "Le QCM prépare la partie connaissances. Pour l'oral, écoutez le mode audio du Livret du citoyen et entraînez-vous à reformuler chaque réponse à voix haute.",
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
        badge="Test gratuit · 50 questions"
        title="Test de naturalisation française gratuit"
        subtitle="Évaluez en 15 minutes votre niveau réel sur les connaissances exigées en entretien d'assimilation. Corrigé instantané, explications détaillées."
        ctaLabel="Démarrer le test"
        ctaHref="https://cap-citoyen.fr/quiz"
        secondaryHref="/livret-du-citoyen-questions/"
        secondaryLabel="Réviser le Livret du citoyen"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white">Pourquoi passer un test de naturalisation avant l'entretien ?</h2>
          <p className="mt-4 text-slate-300">
            L'entretien d'assimilation est l'une des étapes les plus stressantes de la
            procédure de naturalisation. Faire un test à blanc à plusieurs reprises est
            le meilleur moyen de baisser la pression : vous identifiez vos lacunes,
            vous mémorisez les bonnes réponses, et vous arrivez serein devant l'agent
            de préfecture.
          </p>
          <p className="mt-3 text-slate-300">
            Notre test couvre les sept thématiques principales du Livret du citoyen :
            symboles de la République, histoire, institutions, valeurs, vie quotidienne,
            culture et géographie. Chaque question est suivie d'une explication courte
            qui vous permet de comprendre, et pas seulement de retenir.
          </p>
        </div>
      </section>

      <section className="container-prose mt-12 grid gap-6 md:grid-cols-3">
        {[
          { n: "01", t: "50 questions corrigées", d: "Du symbole tricolore à la loi de 1905, tous les thèmes y passent." },
          { n: "02", t: "Simulation chrono", d: "Mode 15 minutes pour reproduire les conditions réelles d'examen." },
          { n: "03", t: "Score & progression", d: "Visualisez vos points faibles et concentrez votre révision dessus." },
        ].map((s) => (
          <div key={s.n} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <span className="text-xs font-bold text-blue-400">{s.n}</span>
            <h3 className="mt-2 text-lg font-semibold text-white">{s.t}</h3>
            <p className="mt-2 text-sm text-slate-400">{s.d}</p>
          </div>
        ))}
      </section>

      <section className="container-prose mt-20">
        <SectionTitle
          eyebrow="Aperçu"
          title="8 questions du test de naturalisation"
          description="Faites un échauffement avec ces extraits avant de passer le test complet."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {sample.map((q, i) => (
            <QCMCard key={q.id} question={q} index={i} />
          ))}
        </div>
      </section>

      <CTA
        variant="quiz"
        title="Prêt pour le test complet ?"
        subtitle="Lancez le test de naturalisation chronométré sur cap-citoyen.fr et recevez votre score immédiatement."
      />

      <section className="container-prose">
        <SectionTitle
          title="Les autres ressources utiles"
          description="Combinez plusieurs entraînements pour progresser plus vite."
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
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-blue-700/60"
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
