import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import QCMQuiz from "../components/QCMQuiz";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../components/SectionTitle";
import { getQuestionsByCategory } from "../lib/questions";
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Histoire de France pour la naturalisation : dates clés et événements",
  description:
    "Toute l'histoire de France à connaître pour la naturalisation : Révolution 1789, Républiques successives, guerres mondiales, Ve République. Frise et QCM.",
  alternates: { canonical: "/histoire-france-naturalisation/" },
};

const histoire = getQuestionsByCategory("histoire");

const dates = [
  { y: "−52", e: "Bataille d'Alésia : Vercingétorix s'incline devant Jules César." },
  { y: "496", e: "Baptême de Clovis, roi des Francs." },
  { y: "800", e: "Charlemagne couronné empereur d'Occident." },
  { y: "1539", e: "Ordonnance de Villers-Cotterêts : le français devient la langue officielle." },
  { y: "1789", e: "Révolution française : prise de la Bastille (14 juillet) et Déclaration des droits de l'homme." },
  { y: "1792", e: "Proclamation de la Première République." },
  { y: "1804", e: "Napoléon empereur, Code civil." },
  { y: "1848", e: "Deuxième République, suffrage universel masculin." },
  { y: "1870", e: "Troisième République, après la défaite de Sedan." },
  { y: "1905", e: "Loi de séparation des Églises et de l'État." },
  { y: "1914-1918", e: "Première Guerre mondiale." },
  { y: "1936", e: "Front populaire : congés payés, semaine de 40 heures." },
  { y: "1939-1945", e: "Seconde Guerre mondiale, Résistance dirigée par De Gaulle." },
  { y: "1944", e: "Droit de vote des femmes." },
  { y: "1958", e: "Fondation de la Ve République par Charles de Gaulle." },
  { y: "1981", e: "Abolition de la peine de mort, loi Badinter." },
  { y: "2002", e: "Passage à l'euro." },
];

const faqItems = [
  {
    question: "Faut-il toutes les dates par cœur ?",
    answer:
      "Non. Concentrez-vous sur 1789, 1792, 1905, 1944, 1958, 1981. Ce sont celles qui reviennent le plus en entretien.",
  },
  {
    question: "Quel événement compte le plus aujourd'hui ?",
    answer:
      "La Révolution de 1789, sans hésiter. Elle fonde la République, les droits de l'homme et la devise Liberté, Égalité, Fraternité.",
  },
  {
    question: "Pourquoi 1905 ?",
    answer:
      "C'est la loi de séparation des Églises et de l'État. Elle pose le principe de laïcité, l'un des piliers de la République.",
  },
  {
    question: "Et 1944 ?",
    answer:
      "Les femmes françaises obtiennent enfin le droit de vote, par ordonnance du général de Gaulle.",
  },
];

export default function HistoirePage() {
  const url = `${SITE_URL}/histoire-france-naturalisation/`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE_URL },
            { name: "Histoire de France", url },
          ]),
          faqJsonLd(faqItems),
        ]}
      />

      <Breadcrumb items={[{ href: "/histoire-france-naturalisation/", label: "Histoire de France" }]} />

      <Hero
        badge="Frise · Naturalisation"
        title="Histoire de France pour la naturalisation"
        highlight="Histoire de France"
        subtitle="Une frise claire, 17 dates à retenir, et les questions du QCM qui vont avec."
        ctaLabel="Écouter en audio"
        ctaHref="https://cap-citoyen.fr/audio"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-lg font-bold text-white sm:text-xl">La France à travers son histoire</h2>
          <p className="mt-4 text-slate-300">
            On ne devient pas Français sans connaître les grandes étapes qui ont
            façonné le pays. De la Gaule romaine à la République actuelle, voilà
            la colonne vertébrale à retenir.
          </p>
        </div>
      </section>

      <section className="container-prose mt-6 sm:mt-8">
        <SectionTitle eyebrow="Frise" title="17 dates à retenir" />
        <ol className="mt-8 relative border-l border-blue-400/20 pl-6 sm:pl-8">
          {dates.map((d) => (
            <li key={d.y} className="relative mb-7 last:mb-0">
              <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-slate-950 bg-blue-500 shadow-[0_0_12px_rgba(96,165,250,0.5)] sm:-left-[37px]">
                <span className="h-1 w-1 rounded-full bg-white" aria-hidden />
              </span>
              <h3 className="text-sm font-bold text-blue-300">{d.y}</h3>
              <p className="mt-1 text-sm text-slate-300 sm:text-base">{d.e}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-prose mt-8 sm:mt-10">
        <SectionTitle
          eyebrow="Quiz"
          title="Questions d'histoire issues du QCM"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {histoire.map((q, i) => (
            <QCMQuiz key={q.id} question={q} index={i} />
          ))}
        </div>
      </section>

      <CTA
        variant="audio"
        title="L'histoire, lue à voix haute"
        subtitle="Toutes les fiches du Livret du citoyen en audio. À écouter quand vous voulez."
      />

      <FAQ items={faqItems} />
    </>
  );
}
