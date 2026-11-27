# iv8 website — Astro, static

Brand-neutral build. **Brand name is undecided (iv8Sphere vs iv8nexus).**
Switch it in one place: `src/site.ts` — change `BRAND_NAME` and `LOGO`
(`public/images/logo-iv8sphere.webp` / `logo-iv8nexus.webp`).

## Run
```
npm install
npm run dev
npm run build   # outputs dist/
```

## Deploy
GitHub Pages via `.github/workflows/deploy.yml` (Astro build → Pages, branch `main`).
Live: https://vp11dsorg.github.io/iv8-website/

## Structure — SEO silos
- Website Services: /services/website-services/ + child pages (web design, UX, builder, app builder, eCommerce)
- Managed Hosting: /services/managed-hosting/ + child pages (WordPress, VPS, dedicated)
- Professional Services: /services/professional-services/ + child pages (cloud, Kubernetes, OpenShift, containers, compliance readiness, AI, consultancy, staffing, talent marketplace)
- One service = one page, one keyword, one URL. No fake testimonials, logos, ratings or prices — pricing is custom quote.
