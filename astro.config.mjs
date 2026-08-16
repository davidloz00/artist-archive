import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://davidloz00.github.io',
  base: '/artist-archive',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  }
});
