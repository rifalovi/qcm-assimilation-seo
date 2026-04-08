import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://qcm-assimilation.fr"),
  title: {
    default: "QCM Assimilation — Réussir l'entretien d'assimilation et la naturalisation française",
    template: "%s | QCM Assimilation",
  },
  description:
    "Préparez gratuitement l'entretien d'assimilation, le QCM de naturalisation et le test de culture française. Questions issues du Livret du citoyen, corrigés et CTA vers l'app cap-citoyen.fr.",
  keywords: [
    "QCM assimilation",
    "test naturalisation",
    "entretien naturalisation",
    "livret du citoyen",
    "questions assimilation France",
    "simulation examen naturalisation",
    "culture française",
    "valeurs République",
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
    title: "QCM Assimilation — Réussir l'entretien et la naturalisation française",
    description:
      "Préparez gratuitement votre entretien d'assimilation et votre QCM de naturalisation. Questions du Livret du citoyen, corrigés détaillés.",
  },
  twitter: {
    card: "summary_large_image",
    title: "QCM Assimilation — Réussir la naturalisation française",
    description:
      "Tests gratuits, QCM, simulations d'examen et fiches sur les valeurs de la République.",
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
      <body className="bg-slate-950 text-slate-200">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-blue-700 focus:px-3 focus:py-2 focus:text-white focus:rounded"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
