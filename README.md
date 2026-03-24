# bryanmarkham.com

Personal portfolio site for Bryan Markham — Senior Front-End Engineer specializing in HubSpot CMS and Shopify performance recovery.

Built with Vue 3, TypeScript, and Vite. Deployed on Netlify.

## Tech Stack

- **Vue 3** — Composition API with `<script setup lang="ts">`
- **TypeScript** — Strict mode with typed data and interfaces
- **Vite 5** — Build tool with path aliases
- **Tailwind CSS 3** — Named design tokens, no arbitrary values
- **Vue Router 4** — `createWebHistory` with two routes
- **Netlify** — Static hosting with SPA redirect

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Type-check and build for production. Output goes to `dist/`.

## Project Structure

```
src/
├── assets/styles/     # Tailwind directives and CSS reset
├── components/
│   ├── layout/        # SiteNav, SiteFooter
│   ├── sections/      # HeroSection, StatsBar, CaseStudiesSection, etc.
│   └── ui/            # CaseCard, SpecCard, CredentialItem, etc.
├── composables/       # useHead, useMediaQuery, useScrollPosition
├── data/              # Typed data arrays (case studies, credentials, etc.)
├── router/            # Vue Router configuration
├── types/             # TypeScript interfaces
└── views/             # HomeView, HubspotCaseStudyView
```
