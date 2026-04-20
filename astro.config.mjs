import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://stackandsleep.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  output: 'static',
});
