# CQL Business Systems Consulting

A zoneless Angular 22 single-page site rebuilt from the original CQL design.

## Development

Use Node.js 22.22.3 or newer.

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Commands

```bash
npm run build  # production bundle
npm test       # Vitest suite
```

The app uses standalone components, signal-driven mobile navigation, and Angular built-in control flow (`@if` and `@for`). It intentionally has no ZoneJS dependency.
