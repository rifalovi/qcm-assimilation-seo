export const SITE_URL = "https://qcm-assimilation.fr";

export const SITE_NAME = "QCM Assimilation";

export const CTA_URLS = {
  register: "https://cap-citoyen.fr/register",
  quiz: "https://cap-citoyen.fr/quiz",
  audio: "https://cap-citoyen.fr/audio",
} as const;

export const ALL_PAGES: { path: string; label: string }[] = [
  { path: "/", label: "Accueil" },
  { path: "/test-naturalisation-france/", label: "Test de naturalisation" },
  { path: "/questions-entretien-naturalisation/", label: "Questions d'entretien" },
  { path: "/qcm-assimilation-france/", label: "QCM d'assimilation" },
  { path: "/livret-du-citoyen-questions/", label: "Livret du citoyen" },
  { path: "/simulation-examen-naturalisation/", label: "Simulation d'examen" },
  { path: "/nationalite-francaise-demande/", label: "Demande de nationalité" },
  { path: "/culture-francaise-quiz/", label: "Quiz culture française" },
  { path: "/histoire-france-naturalisation/", label: "Histoire de France" },
  { path: "/valeurs-republique-francaise/", label: "Valeurs de la République" },
  { path: "/droits-devoirs-citoyen-francais/", label: "Droits et devoirs" },
  { path: "/a-propos/", label: "À propos" },
  { path: "/contact/", label: "Contact" },
  { path: "/mentions-legales/", label: "Mentions légales" },
  { path: "/politique-de-confidentialite/", label: "Politique de confidentialité" },
];

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: ["https://cap-citoyen.fr"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "fr-FR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function quizJsonLd({
  name,
  description,
  url,
  numQuestions,
}: {
  name: string;
  description: string;
  url: string;
  numQuestions: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name,
    description,
    url,
    educationalLevel: "Adult",
    inLanguage: "fr-FR",
    numberOfQuestions: numQuestions,
    about: {
      "@type": "Thing",
      name: "Naturalisation française",
    },
  };
}
