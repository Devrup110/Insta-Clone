# Pictogram

A responsive Instagram-style social app built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1. Push the project to a GitHub repository.
2. Open the repository on GitHub and go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` or `master` branch, or run the **Deploy to GitHub Pages** workflow manually from the **Actions** tab.

Your site will be available at:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

The workflow builds the app and publishes the `dist` folder automatically. The Vite configuration uses relative asset paths so the app works from the repository subpath used by GitHub Pages.

## Checks

```bash
npm run build
npm run typecheck
npm run lint
```
