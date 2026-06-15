import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://qcm-assimilation.fr"),
  title: {
    default: "QCM Assimilation : examen civique, naturalisation, culture française",
    template: "%s | QCM Assimilation",
  },
  description:
    "Préparez l'examen civique 2026 et la naturalisation avec un assistant IA naturalisation, un coach examen civique personnalisé et une aide démarches titre de séjour. Questions du Livret du citoyen, corrigés détaillés.",
  keywords: [
    "examen civique 2026",
    "examen civique titre de séjour",
    "QCM assimilation",
    "test naturalisation",
    "entretien naturalisation",
    "livret du citoyen",
    "questions assimilation France",
    "simulation examen naturalisation",
    "culture française",
    "valeurs République",
    "assistant IA naturalisation",
    "coach examen civique",
    "aide démarches titre de séjour",
  ],
  authors: [{ name: "QCM Assimilation" }],
  creator: "QCM Assimilation",
  publisher: "QCM Assimilation",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://qcm-assimilation.fr",
    siteName: "QCM Assimilation",
    title: "QCM Assimilation : examen civique, naturalisation, culture française",
    description:
      "Préparez l'examen civique 2026 et la naturalisation avec assistant IA, coaching personnalisé et aide démarches. Questions du Livret du citoyen, corrigés détaillés.",
    images: [
      {
        url: "https://qcm-assimilation.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "QCM Assimilation : examen civique, naturalisation, culture française",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QCM Assimilation : examen civique et naturalisation",
    description:
      "Préparation à l'examen civique 2026 et à la naturalisation. Assistant IA, coach personnalisé et aide démarches.",
    images: ["https://qcm-assimilation.fr/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-blue-700 focus:px-3 focus:py-2 focus:text-white focus:rounded"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
