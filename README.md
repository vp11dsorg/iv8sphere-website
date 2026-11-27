# iv8Sphere — Astro, static

Managed-services company website: **iv8Sphere**. One team that designs, builds, runs and staffs your technology.

Selling line, carried through every page: *"Your technology, designed, built and run by one team."*

## Seven equal practices

Web Design & Experience · Managed Hosting · Cloud & Containers · AI · Compliance Readiness · Consultancy · Staffing & Talent. Design is practice 1 of 7 only.

## Run

```
npm install
npm run dev
npm run build   # outputs dist/ — 41 pages
```

## Deploy

GitHub Pages via `.github/workflows/deploy.yml` (Astro build → Pages, branch `main`).
Live: https://vp11dsorg.github.io/iv8sphere-website/

## Structure — SEO silos

- Website Services: /services/website-services/ + 5 child pages
- Managed Hosting: /services/managed-hosting/ + 3 child pages
- Professional Services: /services/professional-services/ + 9 child pages
- Practices: /practices/ + 7 practice pages
- Work: /work/ + 3 example-scope pages (labelled example scopes, not client work)
- Whitepapers: /whitepapers/ + 3 research-brief pages (published sources, not lab tests)

## Content rules

No fake testimonials, client logos, invented prices or results. Every service page: plain English + technical detail, who it is for / NOT for, deliverables, steps, cost drivers + custom quote, FAQs. Contact form builds a project brief on the page — no fake email published.
