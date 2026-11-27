// iv8Sphere — brand config. Legal document title is the full legal name on
// EVERY page (40 chars); SEO length is carried by the meta description,
// which holds the keyword phrase "web design, managed hosting & cloud in Canada".
export const BRAND_NAME = 'iv8Sphere';
export const LEGAL_NAME = 'iv8Sphere Technologies & Consulting Inc.';
export const BRAND_TAGLINE = 'Design. Build. Run.';
export const LOGO = '/iv8sphere-website/images/logo-8-sphere.svg';
export const FAVICON = '/iv8sphere-website/images/favicon-sphere.png';
export const OG_IMAGE = '/iv8sphere-website/images/og-sphere.png';
export const KEYWORD_DESCRIPTION = 'Web design, managed hosting & cloud in Canada — iv8Sphere designs, builds and runs websites, stores and apps, with one team start to finish and no lock-in.';

/** Every page title is the full legal name, exactly. Kept for callers that pass a page name. */
export function seoTitle(_page: string): string {
  return LEGAL_NAME;
}
export const BASE = '/iv8sphere-website';
export const SITE_URL = 'https://vp11dsorg.github.io/iv8sphere-website';
export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
];
