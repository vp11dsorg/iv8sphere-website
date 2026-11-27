import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  site: 'https://vp11dsorg.github.io',
  base: '/iv8sphere-website',
  trailingSlash: 'never',
  vite: { plugins: [tailwindcss()] },
});
