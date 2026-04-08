import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Livret du citoyen — Toutes les questions et réponses",
  description:
    "Le Livret du citoyen pour la naturalisation française : toutes les fiches résumées par chapitre, en version texte et audio. Préparez l'entretien d'assimilation.",
  alternates: { canonical: "/livret-du-citoyen-questions/" },
};

const chapters = [
  {
    title: "1. Les principes et symboles de la République",
    summary:
      "La devise (Liberté, Égalité, Fraternité), le drapeau tricolore, La Marseillaise, Marianne, le coq gaulois, la fête nationale du 14 juillet et l'idée que la France est une République indivisible, laïque, démocratique et sociale.",
    keypoints: [
      "Article 1 de la Constitution : République indivisible, laïque, démocratique et sociale.",
      "Devise : Liberté, Égalité, Fraternité (1848, inscrite dans la Constitution en 1946).",
      "Drapeau bleu, blanc, rouge — adopté en 1794.",
      "La Marseillaise composée par Rouget de Lisle en 1792, hymne en 1795.",
    ],
  },
  {
    title: "2. L'histoire de France",
    summary:
      "Des Gaulois à la Ve République : les grands moments — Charlemagne, Saint Louis, Louis XIV, la Révolution de 1789, Napoléon, les guerres mondiales, la décolonisation, la construction européenne.",
    keypoints: [
      "1789 : prise de la Bastille, Déclaration des droits de l'homme et du citoyen.",
      "1792 : proclamation de la Première République.",
      "1905 : loi de séparation des Églises et de l'État.",
      "1944 : droit de vote des femmes.",
      "1958 : fondation de la Ve République par Charles de Gaulle.",
      "1981 : abolition de la peine de mort (loi Badinter).",
    ],
  },
  {
    title: "3. Les institutions de la République",
    summary:
      "Le Président, le gouvernement, l'Assemblée nationale, le Sénat, le Conseil constitutionnel, la justice, les collectivités territoriales et l'Union européenne.",
    keypoints: [
      "Président : élu pour 5 ans au suffrage universel direct.",
      "Gouvernement dirigé par le Premier ministre, nommé par le Président.",
      "577 députés à l'Assemblée nationale, 348 sénateurs au Sénat.",
      "Le Conseil constitutionnel veille à la conformité des lois à la Constitution.",
    ],
  },
  {
    title: "4. Les valeurs de la République",
    summary:
      "Liberté, égalité, fraternité, laïcité, démocratie, refus des discriminations, égalité femmes-hommes, solidarité nationale, respect de l'environnement.",
    keypoints: [
      "Laïcité : séparation des religions et de l'État, liberté de conscience.",
      "Égalité femmes-hommes : principe constitutionnel.",
      "Liberté d'expression, de la presse, de réunion et d'association.",
    ],
  },
  {
    title: "5. La vie en France",
    summary:
      "Le système éducatif, la santé, le travail, le logement, les impôts, la Sécurité sociale, l'engagement citoyen, la vie associative.",
    keypoints: [
      "Instruction obligatoire de 3 à 16 ans.",
      "Sécurité sociale : assurance maladie, famille, retraite, accidents du travail.",
      "Code du travail garantit congés payés, durée légale, salaire minimum.",
    ],
  },
  {
    title: "6. La culture et la langue",
    summary:
      "La langue française comme langue de la République, les grands écrivains, peintres, scientifiques, le patrimoine architectural et naturel, la gastronomie.",
    keypoints: [
      "Article 2 : la langue de la République est le français.",
      "Patrimoine UNESCO : Mont-Saint-Michel, Versailles, Lyon, etc.",
      "Marie Curie : double prix Nobel (physique 1903, chimie 1911).",
    ],
  },
  {
    title: "7. La géographie de la France",
    summary:
      "Métropole et outre-mer, les fleuves, les massifs montagneux, les frontières, les régions, les principales villes, le climat.",
    keypoints: [
      "Métropole : 13 régions, 96 départements.",
      "Outre-mer : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte.",
      "Plus haut sommet : Mont Blanc (4 808 m).",
      "Plus longue frontière : avec le Brésil (via la Guyane).",
    ],
  },
];

const faqItems = [
  {
    question: "Qu'est-ce que le Livret du citoyen ?",
    answer:
      "C'est un document publié par l'État français qui présente les connaissances de base sur la France attendues pour la naturalisation. Il sert de référence pour l'entretien d'assimilation.",
  },
  {
    question: "Le Livret du citoyen est-il obligatoire à connaître par cœur ?",
    answer:
      "Non, mais vous devez en maîtriser les grandes lignes : symboles, valeurs, dates clés, institutions. Pas besoin de réciter — il faut comprendre et savoir reformuler.",
  },
  {
    question: "Existe-t-il une version audio du Livret du citoyen ?",
    answer:
      "Oui, sur cap-citoyen.fr/audio vous trouvez la version audio gratuite, idéale pour réviser dans les transports.",
  },
  {
    question: "Combien de chapitres contient le Livret du citoyen ?",
    answer:
      "Sept grands chapitres, des principes de la République à la géographie. Nous résumons chacun ci-dessus.",
  },
  {
    question: "Le Livret évolue-t-il chaque année ?",
    answer:
      "Il est mis à jour à chaque grande réforme (territoriale, constitutionnelle, etc.). Notre version est à jour pour 2026.",
  },
];

export default function LivretPage() {
  const url = `${SITE_URL}/livret-du-citoyen-questions/`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE_URL },
            { name: "Livret du citoyen", url },
          ]),
          faqJsonLd(faqItems),
        ]}
      />

      <Breadcrumb items={[{ href: "/livret-du-citoyen-questions/", label: "Livret du citoyen" }]} />

      <Hero
        badge="Livret du citoyen 2026"
        title="Le Livret du citoyen, chapitre par chapitre"
        highlight="Livret du citoyen"
        subtitle="Toutes les fiches essentielles pour la naturalisation française : symboles, histoire, institutions, valeurs, vie quotidienne, culture, géographie."
        ctaLabel="Écouter en audio"
        ctaHref="https://cap-citoyen.fr/audio"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-lg font-bold text-white sm:text-xl">Pourquoi maîtriser le Livret du citoyen ?</h2>
          <p className="mt-4 text-slate-300">
            Le Livret du citoyen est la base de l'entretien d'assimilation. Les agents
            de préfecture s'en inspirent directement pour formuler leurs questions. Le
            connaître, c'est savoir d'avance ce qu'on va vous demander — et surtout,
            comprendre ce que la France attend de vous.
          </p>
        </div>
      </section>

      <section className="container-prose mt-6 sm:mt-8 grid gap-4 lg:grid-cols-2">
        {chapters.map((c) => (
          <article
            key={c.title}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 sm:p-5 shadow-[0_18px_45px_rgba(2,8,23,0.4)]"
          >
            <h2 className="text-lg font-bold text-white">{c.title}</h2>
            <p className="mt-3 text-sm text-slate-300">{c.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {c.keypoints.map((kp) => (
                <li key={kp} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden />
                  <span>{kp}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <CTA
        variant="audio"
        title="Le Livret du citoyen, lu pour vous"
        subtitle="Apprenez en marchant ou dans les transports : la version audio gratuite vous attend sur cap-citoyen.fr."
      />

      <FAQ items={faqItems} />
    </>
  );
}
