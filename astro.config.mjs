import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://africaglobalengineering.com',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
});
