# Portfolio — Hamza Ben Messaoud

Site perso construit avec Next.js (App Router) + Tailwind CSS v4.

## Lancer en local

```bash
npm install
npm run dev
```
Puis ouvre http://localhost:3000

## Structure du contenu — ce que tu vas éditer chaque semaine

- `src/data/macro.ts` — tes revues macro hebdomadaires. Duplique l'entrée
  "modele" (slug unique à chaque fois) et remplis les crochets.
- `src/data/projets.ts` — tes projets académiques et compétitions.
- `src/app/evaluations/page.tsx` — tes évaluations d'entreprises (tableau
  `evaluations` en haut du fichier).

## Déployer gratuitement (Vercel)

1. Crée un repo GitHub, pousse ce dossier dedans :
   ```bash
   git init
   git add .
   git commit -m "Site initial"
   git branch -M main
   git remote add origin <url-de-ton-repo>
   git push -u origin main
   ```
2. Va sur vercel.com, connecte ton compte GitHub, importe le repo.
3. Vercel détecte Next.js automatiquement — clique "Deploy". Site en ligne
   en ~1 minute, avec un domaine gratuit `*.vercel.app` (tu peux brancher un
   domaine perso ensuite si tu veux, ex. hamzabenmessaoud.com).

## Prochaines étapes suggérées

1. **Dashboard S&P en direct** — `src/components/SPDashboard.tsx` utilise
   des données d'exemple. Crée une route API (`src/app/api/sp500/route.ts`)
   qui interroge une source gratuite (Alpha Vantage, Financial Modeling
   Prep, ou Stooq — pas de clé requise pour Stooq) et fetch ces données
   côté client.
2. **Revue macro → Markdown/MDX** — pour l'instant les revues vivent dans
   un fichier TypeScript (`src/data/macro.ts`), simple pour démarrer vite.
   Si l'écriture hebdo devient un vrai rythme, migrer vers des fichiers
   `.mdx` (un fichier par semaine) sera plus agréable pour écrire.
3. **Version anglaise** — utile pour les rôles internationaux ; peut
   attendre que le contenu FR soit stable.
4. **Photo / visuel personnel** — le site est actuellement 100% typographie
   et données ; un portrait discret sur la page d'accueil peut ajouter de
   la chaleur si tu veux.

## Direction de design

Palette encre/papier + accent laiton (`--signal`), typographie Fraunces
(display) / Inter (texte) / IBM Plex Mono (données, labels, dates) — pensée
pour évoquer un document financier soigné plutôt qu'un site vitrine
générique. Le bandeau de cotation en haut de chaque page est l'élément
signature : à terme il peut afficher de vraies données (même source que le
dashboard S&P).
