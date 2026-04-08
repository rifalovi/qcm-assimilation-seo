# QCM Assimilation SEO

Site Next.js statique pour le domaine [qcm-assimilation.fr](https://qcm-assimilation.fr).

Machine à trafic SEO qui prépare les candidats à la naturalisation française et redirige vers l'application complète sur [cap-citoyen.fr](https://cap-citoyen.fr).

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4** (avec plugin Typography)
- `output: "export"` — site 100 % statique
- Hébergement **Netlify**

## Démarrage

```bash
npm install
npm run dev
```

Le site démarre sur http://localhost:3000.

## Build

```bash
npm run build
```

Le build statique est généré dans le dossier `out/`.

## Structure

```
app/
  components/   # Header, Footer, CTA, FAQ, QCMCard, Hero...
  lib/          # 50 questions QCM, helpers JSON-LD, constantes
  [page]/       # 14 pages thématiques + accueil
  layout.tsx
  page.tsx
  globals.css
public/
  favicon.svg
netlify.toml    # config build Netlify
next.config.ts  # output: "export"
```

## Pages

- `/` Accueil
- `/test-naturalisation-france/`
- `/questions-entretien-naturalisation/`
- `/qcm-assimilation-france/`
- `/livret-du-citoyen-questions/`
- `/simulation-examen-naturalisation/`
- `/nationalite-francaise-demande/`
- `/culture-francaise-quiz/`
- `/histoire-france-naturalisation/`
- `/valeurs-republique-francaise/`
- `/droits-devoirs-citoyen-francais/`
- `/a-propos/`
- `/contact/`
- `/mentions-legales/`
- `/politique-de-confidentialite/`

## Charte

- Dark theme, fond `slate-950`
- Accents tricolores : bleu `#1e3a8a`, blanc `#f8fafc`, rouge `#dc2626`
- Style cohérent avec cap-citoyen.fr

## SEO

- Balises `<title>`, `description`, `canonical` sur chaque page
- JSON-LD : Organization, WebSite, BreadcrumbList, FAQPage, Quiz
- `sitemap.xml` et `robots.txt` générés automatiquement
- 50 questions QCM uniques, contenus longs, FAQ, ancres

## CTAs

- `https://cap-citoyen.fr/register` — création de compte
- `https://cap-citoyen.fr/quiz` — quiz interactifs
- `https://cap-citoyen.fr/audio` — version audio du Livret du citoyen
