import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";
import JsonLd from "../components/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site QCM Assimilation : éditeur, hébergeur, propriété intellectuelle, responsabilité, droit applicable.",
  alternates: { canonical: "/mentions-legales/" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: SITE_URL },
          { name: "Mentions légales", url: `${SITE_URL}/mentions-legales/` },
        ])}
      />

      <Breadcrumb items={[{ href: "/mentions-legales/", label: "Mentions légales" }]} />

      <article className="container-prose py-12 sm:py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">Mentions légales</h1>
        <p className="mt-3 text-sm text-slate-400">
          Dernière mise à jour : avril 2026
        </p>

        <div className="prose prose-invert mt-10 max-w-none">
          <h2>Éditeur du site</h2>
          <p>
            Le site <strong>qcm-assimilation.fr</strong> est édité par l'équipe de
            cap-citoyen.fr. Pour toute demande, écrivez à{" "}
            <a href="mailto:contact@cap-citoyen.fr">contact@cap-citoyen.fr</a>.
          </p>

          <h2>Directeur de la publication</h2>
          <p>L'équipe éditoriale de QCM Assimilation.</p>

          <h2>Hébergeur</h2>
          <p>
            Netlify, Inc.<br />
            512 2nd Street, Suite 200, San Francisco, CA 94107, USA<br />
            <a href="https://www.netlify.com" target="_blank" rel="noopener">
              www.netlify.com
            </a>
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu présent sur ce site (textes, QCM, illustrations,
            mise en page) est protégé par le droit d'auteur. Toute reproduction,
            représentation, modification ou exploitation, totale ou partielle, sans
            l'autorisation expresse de l'éditeur, est interdite.
          </p>

          <h2>Responsabilité</h2>
          <p>
            QCM Assimilation est un site indépendant, sans aucun lien officiel avec
            l'État français. Les informations publiées sur ce site ont une vocation
            pédagogique et informative. Elles ne constituent en aucun cas un avis
            juridique. Pour toute question relative à votre dossier de naturalisation,
            adressez-vous à votre préfecture ou consultez{" "}
            <a href="https://service-public.fr" target="_blank" rel="noopener">
              service-public.fr
            </a>
            .
          </p>

          <h2>Liens vers cap-citoyen.fr</h2>
          <p>
            Le site contient des liens vers cap-citoyen.fr, application
            partenaire qui propose des fonctionnalités complémentaires
            (suivi de progression, version audio, fiches imprimables).
          </p>

          <h2>Droit applicable</h2>
          <p>
            Le présent site est soumis au droit français. Tout litige relatif à son
            utilisation relèvera de la compétence exclusive des tribunaux français.
          </p>
        </div>
      </article>
    </>
  );
}
