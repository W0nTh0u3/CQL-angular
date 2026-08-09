# CQL v3 application

The Angular 22 application for the CQL Business Systems Consulting redesign.

## Site structure

The public site includes Home, People, Services, The CQL Way, Industry Exposure, and Contact routes. Approved site copy is centralized in [`src/app/content/cql-content.ts`](./src/app/content/cql-content.ts).

The application uses standalone components, signals, built-in Angular control flow (`@if` and `@for`), and zoneless change detection. It has no ZoneJS dependency or third-party animation runtime.

## Development

Use Node.js 22.22.3 or newer.

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Commands

```bash
npm run build
npm test
npx tsc --noEmit -p tsconfig.app.json
```

## Deploy to GitHub Pages

The repository workflow at [`../.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml) builds and publishes the app whenever `main` is updated.

1. In GitHub, open **Settings → Pages**.
2. Set **Build and deployment** to **GitHub Actions**.
3. Push to `main`, or run **Deploy CQL to GitHub Pages** from the Actions tab.

The workflow builds for `/CQL/` and publishes `dist/CQL/browser`. [`src/404.html`](./src/404.html) handles direct clean route requests such as `/CQL/services`.

If the repository name or deployment path changes, update `repositoryBase` in `src/404.html` and the workflow’s `--base-href` value.
