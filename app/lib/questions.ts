export type QCMQuestion = {
  id: number;
  category:
    | "symboles"
    | "histoire"
    | "institutions"
    | "valeurs"
    | "geographie"
    | "culture"
    | "vie-quotidienne";
  question: string;
  choices: string[];
  answerIndex: number;
  explanation?: string;
};

export const questions: QCMQuestion[] = [
  {
    id: 1,
    category: "symboles",
    question: "Quelle est la devise de la République française ?",
    choices: [
      "Honneur, Patrie, Liberté",
      "Liberté, Égalité, Fraternité",
      "Travail, Famille, Patrie",
      "Union, Force, Vertu",
    ],
    answerIndex: 1,
    explanation:
      "« Liberté, Égalité, Fraternité » est inscrite à l'article 2 de la Constitution. Elle est héritée de la Révolution française.",
  },
  {
    id: 2,
    category: "symboles",
    question: "Quelles sont les couleurs du drapeau français, dans l'ordre ?",
    choices: ["Rouge, blanc, bleu", "Bleu, blanc, rouge", "Bleu, rouge, blanc", "Blanc, bleu, rouge"],
    answerIndex: 1,
    explanation:
      "Le drapeau tricolore est composé de trois bandes verticales : bleu (côté hampe), blanc, rouge.",
  },
  {
    id: 3,
    category: "symboles",
    question: "Comment s'appelle l'hymne national français ?",
    choices: ["Le Chant du départ", "La Marseillaise", "L'Internationale", "Le Chant des partisans"],
    answerIndex: 1,
    explanation:
      "Composée à Strasbourg en 1792 par Rouget de Lisle, La Marseillaise est devenue hymne national en 1795.",
  },
  {
    id: 4,
    category: "symboles",
    question: "Quel est le surnom de la femme qui personnifie la République française ?",
    choices: ["Jeanne", "Marianne", "Liberté", "Hélène"],
    answerIndex: 1,
    explanation:
      "Marianne, coiffée d'un bonnet phrygien, est l'allégorie de la République française depuis 1792.",
  },
  {
    id: 5,
    category: "symboles",
    question: "Quel animal est un symbole traditionnel de la France ?",
    choices: ["L'aigle", "Le lion", "Le coq", "Le cheval"],
    answerIndex: 2,
    explanation:
      "Le coq gaulois est l'un des plus anciens symboles de la France, lié au mot latin « gallus » signifiant à la fois « coq » et « Gaulois ».",
  },
  {
    id: 6,
    category: "geographie",
    question: "Quelle est la capitale de la France ?",
    choices: ["Lyon", "Marseille", "Paris", "Toulouse"],
    answerIndex: 2,
  },
  {
    id: 7,
    category: "geographie",
    question: "Quel fleuve traverse la ville de Paris ?",
    choices: ["La Loire", "Le Rhône", "La Seine", "La Garonne"],
    answerIndex: 2,
  },
  {
    id: 8,
    category: "geographie",
    question: "Quel est le plus haut sommet de France métropolitaine ?",
    choices: ["Le Puy de Dôme", "Le Mont Blanc", "Le Pic du Midi", "Le Mont Aiguille"],
    answerIndex: 1,
    explanation:
      "Le Mont Blanc culmine à 4 808 m dans les Alpes, à la frontière entre la France et l'Italie.",
  },
  {
    id: 9,
    category: "geographie",
    question: "Combien y a-t-il de régions en France métropolitaine depuis 2016 ?",
    choices: ["13", "18", "22", "27"],
    answerIndex: 0,
    explanation:
      "Depuis la réforme territoriale de 2016, la France métropolitaine compte 13 régions (et 18 en tout avec l'outre-mer).",
  },
  {
    id: 10,
    category: "geographie",
    question: "Combien y a-t-il de départements en France ?",
    choices: ["96", "100", "101", "110"],
    answerIndex: 2,
    explanation:
      "La France compte 101 départements : 96 en métropole et 5 en outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte).",
  },
  {
    id: 11,
    category: "histoire",
    question: "Quel événement marque le 14 juillet 1789 ?",
    choices: [
      "Le sacre de Napoléon",
      "La prise de la Bastille",
      "La fête de la Fédération",
      "La proclamation de la République",
    ],
    answerIndex: 1,
    explanation:
      "La prise de la Bastille est devenue le symbole de la Révolution française et de la fin de l'absolutisme.",
  },
  {
    id: 12,
    category: "histoire",
    question: "En quelle année la Première République est-elle proclamée ?",
    choices: ["1789", "1791", "1792", "1799"],
    answerIndex: 2,
    explanation:
      "La Première République est proclamée le 22 septembre 1792 par la Convention nationale.",
  },
  {
    id: 13,
    category: "histoire",
    question: "Qui est le fondateur de la Ve République ?",
    choices: ["Léon Blum", "Charles de Gaulle", "Georges Pompidou", "François Mitterrand"],
    answerIndex: 1,
    explanation:
      "Charles de Gaulle fonde la Ve République en 1958, après l'adoption d'une nouvelle Constitution.",
  },
  {
    id: 14,
    category: "histoire",
    question: "En quelle année les femmes ont-elles obtenu le droit de vote en France ?",
    choices: ["1936", "1944", "1946", "1958"],
    answerIndex: 1,
    explanation:
      "Le droit de vote des femmes est instauré par l'ordonnance du 21 avril 1944, signée par le général de Gaulle.",
  },
  {
    id: 15,
    category: "histoire",
    question: "Quelle loi française abolit la peine de mort en 1981 ?",
    choices: [
      "La loi Veil",
      "La loi Badinter",
      "La loi Pleven",
      "La loi Neuwirth",
    ],
    answerIndex: 1,
    explanation:
      "La loi Badinter, du nom du garde des Sceaux Robert Badinter, abolit la peine de mort le 9 octobre 1981.",
  },
  {
    id: 16,
    category: "histoire",
    question: "Que commémore-t-on le 8 mai en France ?",
    choices: [
      "L'armistice de 1918",
      "La libération de Paris",
      "La victoire de 1945 sur l'Allemagne nazie",
      "La fin de la guerre d'Algérie",
    ],
    answerIndex: 2,
  },
  {
    id: 17,
    category: "histoire",
    question: "Que commémore-t-on le 11 novembre ?",
    choices: [
      "La fin de la Seconde Guerre mondiale",
      "L'armistice de 1918",
      "La libération de la France",
      "La proclamation de la République",
    ],
    answerIndex: 1,
  },
  {
    id: 18,
    category: "histoire",
    question: "Quelle déclaration fondatrice est adoptée en 1789 ?",
    choices: [
      "La Déclaration universelle des droits de l'homme",
      "La Déclaration des droits de l'homme et du citoyen",
      "La Charte des libertés",
      "La Déclaration de Philadelphie",
    ],
    answerIndex: 1,
  },
  {
    id: 19,
    category: "histoire",
    question: "Quelle loi de 1905 est fondamentale pour la France ?",
    choices: [
      "La loi sur l'école obligatoire",
      "La loi de séparation des Églises et de l'État",
      "La loi sur le travail des enfants",
      "La loi sur l'impôt sur le revenu",
    ],
    answerIndex: 1,
    explanation:
      "Adoptée en 1905, elle pose le principe de laïcité : la République ne reconnaît, ne salarie ni ne subventionne aucun culte.",
  },
  {
    id: 20,
    category: "institutions",
    question: "Qui est le chef de l'État en France ?",
    choices: [
      "Le Premier ministre",
      "Le Président de la République",
      "Le Président de l'Assemblée nationale",
      "Le Président du Sénat",
    ],
    answerIndex: 1,
  },
  {
    id: 21,
    category: "institutions",
    question: "Quelle est la durée d'un mandat présidentiel ?",
    choices: ["4 ans", "5 ans", "6 ans", "7 ans"],
    answerIndex: 1,
    explanation:
      "Depuis la révision constitutionnelle de 2000, le mandat présidentiel est de 5 ans, renouvelable une seule fois consécutivement.",
  },
  {
    id: 22,
    category: "institutions",
    question: "Qui nomme le Premier ministre ?",
    choices: [
      "L'Assemblée nationale",
      "Le Sénat",
      "Le Président de la République",
      "Le Conseil constitutionnel",
    ],
    answerIndex: 2,
  },
  {
    id: 23,
    category: "institutions",
    question: "Combien de députés siègent à l'Assemblée nationale ?",
    choices: ["348", "500", "577", "925"],
    answerIndex: 2,
  },
  {
    id: 24,
    category: "institutions",
    question: "Combien de sénateurs compte le Sénat français ?",
    choices: ["348", "400", "577", "650"],
    answerIndex: 0,
  },
  {
    id: 25,
    category: "institutions",
    question: "Comment s'appelle le palais où réside le Président de la République ?",
    choices: ["Le palais Bourbon", "L'Élysée", "Matignon", "Le Luxembourg"],
    answerIndex: 1,
  },
  {
    id: 26,
    category: "institutions",
    question: "Quel rôle a le Conseil constitutionnel ?",
    choices: [
      "Voter le budget de l'État",
      "Vérifier la conformité des lois à la Constitution",
      "Nommer les ministres",
      "Diriger les forces armées",
    ],
    answerIndex: 1,
  },
  {
    id: 27,
    category: "institutions",
    question: "Où siège le Parlement européen une partie de l'année ?",
    choices: ["Paris", "Bruxelles", "Strasbourg", "Lyon"],
    answerIndex: 2,
    explanation:
      "Strasbourg accueille les sessions plénières du Parlement européen, ce qui en fait l'une des capitales européennes.",
  },
  {
    id: 28,
    category: "valeurs",
    question: "Que signifie le principe de laïcité ?",
    choices: [
      "L'interdiction de toutes les religions",
      "L'obligation de pratiquer une religion",
      "La séparation des religions et de l'État, et la liberté de conscience",
      "La fusion des cultes et de l'État",
    ],
    answerIndex: 2,
  },
  {
    id: 29,
    category: "valeurs",
    question: "Que garantit la Déclaration des droits de l'homme et du citoyen de 1789 ?",
    choices: [
      "Uniquement le droit de propriété",
      "Les droits naturels et imprescriptibles : liberté, propriété, sûreté, résistance à l'oppression",
      "Le droit de vote des femmes",
      "L'abolition de l'esclavage",
    ],
    answerIndex: 1,
  },
  {
    id: 30,
    category: "valeurs",
    question: "Qu'est-ce que l'égalité entre les femmes et les hommes en France ?",
    choices: [
      "Une option laissée aux entreprises",
      "Un principe constitutionnel et un objectif des politiques publiques",
      "Un débat encore non tranché",
      "Une coutume locale",
    ],
    answerIndex: 1,
  },
  {
    id: 31,
    category: "valeurs",
    question: "Quel est le principe central de la République française ?",
    choices: [
      "La République est divisible et religieuse",
      "La République est indivisible, laïque, démocratique et sociale",
      "La République est confédérale",
      "La République est aristocratique",
    ],
    answerIndex: 1,
    explanation:
      "Article 1 de la Constitution : « La France est une République indivisible, laïque, démocratique et sociale. »",
  },
  {
    id: 32,
    category: "valeurs",
    question: "Quel droit fondamental les citoyens français exercent-ils aux élections ?",
    choices: [
      "Le droit de pétition",
      "Le droit de vote au suffrage universel",
      "Le droit de tirage au sort",
      "Le droit de représentation par procuration uniquement",
    ],
    answerIndex: 1,
  },
  {
    id: 33,
    category: "vie-quotidienne",
    question: "Quelle est la monnaie utilisée en France ?",
    choices: ["Le franc", "La livre", "L'euro", "Le dollar"],
    answerIndex: 2,
    explanation:
      "L'euro a remplacé le franc le 1er janvier 2002 comme monnaie en circulation.",
  },
  {
    id: 34,
    category: "vie-quotidienne",
    question: "À quel âge devient-on majeur en France ?",
    choices: ["16 ans", "18 ans", "21 ans", "20 ans"],
    answerIndex: 1,
  },
  {
    id: 35,
    category: "vie-quotidienne",
    question: "Quelle est la langue officielle de la République française ?",
    choices: ["Le français", "L'anglais", "L'occitan", "Le latin"],
    answerIndex: 0,
    explanation:
      "Article 2 de la Constitution : « La langue de la République est le français. »",
  },
  {
    id: 36,
    category: "vie-quotidienne",
    question: "Quelle institution gère la Sécurité sociale en France ?",
    choices: [
      "Une assurance privée",
      "L'État via différentes caisses (CPAM, CAF, etc.)",
      "Les mairies uniquement",
      "Les régions",
    ],
    answerIndex: 1,
  },
  {
    id: 37,
    category: "vie-quotidienne",
    question: "Quel âge marque le début de l'instruction obligatoire en France ?",
    choices: ["3 ans", "5 ans", "6 ans", "7 ans"],
    answerIndex: 0,
    explanation: "Depuis 2019, l'instruction est obligatoire à partir de 3 ans.",
  },
  {
    id: 38,
    category: "culture",
    question: "Qui a écrit « Les Misérables » ?",
    choices: ["Émile Zola", "Victor Hugo", "Honoré de Balzac", "Marcel Proust"],
    answerIndex: 1,
  },
  {
    id: 39,
    category: "culture",
    question: "Qui est l'auteur du « Petit Prince » ?",
    choices: [
      "Antoine de Saint-Exupéry",
      "Jean de La Fontaine",
      "Alexandre Dumas",
      "Albert Camus",
    ],
    answerIndex: 0,
  },
  {
    id: 40,
    category: "culture",
    question: "Qui a peint « La Liberté guidant le peuple » ?",
    choices: ["Claude Monet", "Eugène Delacroix", "Jacques-Louis David", "Édouard Manet"],
    answerIndex: 1,
    explanation:
      "Tableau de 1830, conservé au Louvre, qui célèbre la révolution des Trois Glorieuses.",
  },
  {
    id: 41,
    category: "culture",
    question: "Quel philosophe des Lumières est l'auteur du « Contrat social » ?",
    choices: ["Voltaire", "Montesquieu", "Jean-Jacques Rousseau", "Diderot"],
    answerIndex: 2,
  },
  {
    id: 42,
    category: "culture",
    question: "Quelle scientifique d'origine polonaise a reçu deux prix Nobel et s'est illustrée en France ?",
    choices: ["Rosalind Franklin", "Marie Curie", "Irène Joliot-Curie", "Sophie Germain"],
    answerIndex: 1,
    explanation:
      "Marie Curie a reçu le Nobel de physique en 1903 et celui de chimie en 1911.",
  },
  {
    id: 43,
    category: "culture",
    question: "Qui a peint la série des « Nymphéas » ?",
    choices: ["Edgar Degas", "Claude Monet", "Pierre-Auguste Renoir", "Paul Cézanne"],
    answerIndex: 1,
  },
  {
    id: 44,
    category: "culture",
    question: "Quel cinéaste français a réalisé « Les 400 coups » ?",
    choices: ["François Truffaut", "Jean-Luc Godard", "Agnès Varda", "Claude Chabrol"],
    answerIndex: 0,
  },
  {
    id: 45,
    category: "histoire",
    question: "Qui était Simone Veil ?",
    choices: [
      "Une chanteuse populaire",
      "Une rescapée de la Shoah, ministre, qui a fait voter la loi sur l'IVG en 1975",
      "La première femme Premier ministre",
      "Une résistante exécutée en 1944",
    ],
    answerIndex: 1,
  },
  {
    id: 46,
    category: "histoire",
    question: "Qui a été la première femme Première ministre en France ?",
    choices: ["Simone Veil", "Édith Cresson", "Élisabeth Borne", "Martine Aubry"],
    answerIndex: 1,
    explanation:
      "Édith Cresson a été nommée Première ministre par François Mitterrand en 1991.",
  },
  {
    id: 47,
    category: "vie-quotidienne",
    question: "Quel document atteste de la nationalité française ?",
    choices: [
      "Une simple attestation sur l'honneur",
      "Le certificat de nationalité française (CNF)",
      "Un avis d'imposition",
      "Une carte d'électeur",
    ],
    answerIndex: 1,
  },
  {
    id: 48,
    category: "valeurs",
    question: "Qu'implique la fraternité, troisième terme de la devise ?",
    choices: [
      "Une obligation religieuse",
      "Une solidarité entre tous les membres de la nation",
      "Une appartenance à un parti politique",
      "Une obligation militaire",
    ],
    answerIndex: 1,
  },
  {
    id: 49,
    category: "institutions",
    question: "Comment s'appelle l'hôtel où réside le Premier ministre français ?",
    choices: ["L'Élysée", "Matignon", "Le palais Bourbon", "Le palais du Luxembourg"],
    answerIndex: 1,
    explanation:
      "L'hôtel de Matignon, dans le 7e arrondissement de Paris, est la résidence officielle du Premier ministre depuis 1935.",
  },
  {
    id: 50,
    category: "geographie",
    question: "Avec quel pays la France partage-t-elle sa plus longue frontière terrestre ?",
    choices: ["L'Espagne", "La Belgique", "L'Allemagne", "Le Brésil (via la Guyane)"],
    answerIndex: 3,
    explanation:
      "Grâce à la Guyane, la France a une frontière de plus de 700 km avec le Brésil — la plus longue frontière française.",
  },
];

export function getQuestionsByCategory(category: QCMQuestion["category"]) {
  return questions.filter((q) => q.category === category);
}

export function getRandomQuestions(count: number) {
  return [...questions].sort(() => Math.random() - 0.5).slice(0, count);
}
