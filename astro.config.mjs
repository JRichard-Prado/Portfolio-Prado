import { defineConfig } from 'astro/config';


// import netlify from '@astrojs/netlify';


import vercel from '@astrojs/vercel';
// adapter: vercel()


// https://astro.build/config
// el adaptador de Netlify modo "server" no es compatible con Netlify, ya que Netlify solo soporta despliegues estáticos o funciones serverless, no servidores persistentes.
export default defineConfig({
  output: 'server',
  adapter: vercel(),
});