# Marlen Franto Portfolio

Static Astro portfolio for Marlen Franto, positioned around senior Flutter and mobile engineering, production-grade systems, client-facing delivery, case studies, technical SEO, and a dark-space visual system.

## Requirements

- Node 24 LTS
- npm

Use `.nvmrc` if you have `nvm` installed:

```bash
nvm use
```

## Local Development

```bash
npm install
npm run dev
```

Astro will print a local URL, usually:

```bash
http://localhost:4321/
```

## Verification

```bash
npm run check
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
npm run test:lighthouse
npm audit --omit=dev
```

`npm run build` runs Astro type checking, creates the static production site, and validates required routes, metadata, structured data, local links, draft exclusion, sitemap/RSS/robots output, and asset budgets.

`npm run test:e2e` runs desktop and mobile Chromium checks for the homepage, fixed galaxy design, work index, case-study delivery sections, and contact form accessibility.

`npm run test:lighthouse` runs Lighthouse CI against the built static site and enforces launch thresholds for performance, accessibility, SEO, best practices, and JavaScript budget.

## Main Routes

- `/`
- `/work/`
- `/work/perfecta-smart-grill-flutter/`
- `/work/eurogrip-offline-first-flutter/`
- `/work/pegasus-construction-mobile-app/`
- `/work/hidden-kingdoms-native-mobile-app/`
- `/work/optx-real-time-casino-operations/`
- `/about/`
- `/resume/`
- `/insights/`
- `/insights/offline-first-flutter-apps/`
- `/rss.xml`
- `/robots.txt`
