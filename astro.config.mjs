import { defineConfig } from 'astro/config';


import netlify from '@astrojs/netlify';


// import vercel from '@astrojs/vercel';
// adapter: vercel()


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: 'https://portfolio-prado.netlify.app',
});