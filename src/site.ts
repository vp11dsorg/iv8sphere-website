// iv8Sphere — brand config. Sphere logo (sphere/orbit "8"), navy + cyan.
export const BRAND_NAME = 'iv8Sphere';
export const BRAND_TAGLINE = 'Design. Build. Run.';
export const LOGO = '/iv8sphere-website/images/logo-8-sphere.svg';
export const FAVICON = '/iv8sphere-website/images/favicon-sphere.png';
export const OG_IMAGE = '/iv8sphere-website/images/og-sphere.png';
export const REPO_URL = 'https://github.com/vp11dsorg/iv8sphere-website';

/** Build a 50–60 char SEO title: "<page> | <brand> — Design, Hosting & Cloud". */
export function seoTitle(page: string): string {
  const brand = BRAND_NAME;
  const cands = [
    `${page} | ${brand} — Design, Hosting & Cloud`,
    `${page} | ${brand} — Design, Hosting & Cloud in Canada`,
    `${page} | ${brand} — Design, Hosting & Cloud Services in Canada`,
    `${page} Services | ${brand} — Design, Hosting & Cloud`,
    `${page} Services | ${brand} — Canada`,
    `${page} | ${brand} — Canada`,
  ];
  for (const c of cands) if (c.length >= 50 && c.length <= 60) return c;
  const suffix = ` | ${brand} — Canada`;
  let p = page;
  while (p.length > 1 && (p + suffix).length > 60) {
    const sp = p.lastIndexOf(' ');
    p = sp > 10 ? p.slice(0, sp) : p.slice(0, -1);
  }
  return p + suffix;
}
export const BASE = '/iv8sphere-website';
export const SITE_URL = 'https://vp11dsorg.github.io/iv8sphere-website';
export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
];
