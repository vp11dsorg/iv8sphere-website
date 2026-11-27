// iv8Sphere — brand config. Sphere logo (sphere/orbit "8"), navy + cyan.
export const BRAND_NAME = 'iv8Sphere';
export const BRAND_TAGLINE = 'Design. Build. Run.';
export const LOGO = '/iv8sphere-website/images/logo-iv8sphere.png';
export const FAVICON = '/iv8sphere-website/images/favicon.png';
export const OG_IMAGE = '/iv8sphere-website/images/og.png';
export const REPO_URL = 'https://github.com/vp11dsorg/iv8sphere-website';

/** Build a 50–60 char SEO title: "<page> | <brand> — Design, Hosting & Cloud". */
export function seoTitle(page: string): string {
  const full = `${page} | ${BRAND_NAME} — Design, Hosting & Cloud`;
  if (full.length > 60) {
    const t = `${page} | ${BRAND_NAME} — Canada`;
    return t.length < 50 ? `${page} Services | ${BRAND_NAME} — Canada` : t;
  }
  if (full.length < 50) {
    const t = `${page} | ${BRAND_NAME} — Design, Hosting & Cloud in Canada`;
    return t.length < 50 ? `${page} | ${BRAND_NAME} — Design, Hosting & Cloud Services in Canada` : t;
  }
  return full;
}
export const BASE = '/iv8sphere-website';
export const SITE_URL = 'https://vp11dsorg.github.io/iv8sphere-website';
export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Whitepapers', href: '/whitepapers' },
];
