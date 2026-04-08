import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";
import JsonLd from "../components/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site QCM Assimilation : données personnelles, cookies, droits RGPD, contact DPO.",
  alternates: { canonical: "/politique-de-confidentialite/" },
};

export default function ConfidentialitePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: SITE_URL },
          { name: "Confidentialité", url: `${SITE_URL}/politique-de-confidentialite/` },
        ])}
      />

      <Breadcrumb items={[{ href: "/politique-de-confidentialite/", label: "Confidentialité" }]} />

      <article className="container-prose py-12 sm:py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">Politique de confidentialité</h1>
        <p className="mt-3 text-sm text-slate-400">
          Dernière mise à jour : avril 2026
        </p>

        <div className="prose prose-invert mt-10 max-w-none">
          <h2>Données collectées</h2>
          <p>
            QCM Assimilation est un site statique. Il ne vous demande aucune
            information personnelle pour accéder aux contenus. Aucun formulaire,
            aucun compte, aucun suivi publicitaire ne sont présents sur le site.
          </p>

          <h2>Cookies</h2>
          <p>
            Le site n'utilise <strong>aucun cookie de tracking</strong>. Seuls les
            cookies techniques nécessaires au bon fonctionnement de la plateforme
            d'hébergement Netlify peuvent être déposés.
          </p>

          <h2>Logs serveur</h2>
          <p>
            L'hébergeur Netlify peut conserver des logs techniques (adresse IP,
            user-agent) à des fins de sécurité et de prévention des abus, pour
            une durée limitée. Ces logs ne sont pas exploités à des fins
            commerciales.
          </p>

          <h2>Liens externes</h2>
          <p>
            Le site contient des liens vers cap-citoyen.fr et vers d'autres sites
            (service-public.fr, etc.). Lorsque vous cliquez sur ces liens, vous
            quittez le site QCM Assimilation et êtes soumis à la politique de
            confidentialité du site visité.
          </p>

          <h2>Vos droits (RGPD)</h2>
          <p>
            Conformément au Règlement général sur la protection des données (RGPD),
            vous disposez d'un droit d'accès, de rectification, d'effacement et
            d'opposition. Pour exercer ces droits, écrivez à{" "}
            <a href="mailto:contact@qcm-assimilation.fr">contact@qcm-assimilation.fr</a>.
          </p>

          <h2>Réclamation</h2>
          <p>
            En cas de litige, vous pouvez introduire une réclamation auprès de la
            CNIL (Commission Nationale de l'Informatique et des Libertés) :{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener">
              www.cnil.fr
            </a>
            .
          </p>
        </div>
      </article>
    </>
  );
}
