import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sidwindow.studio',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  }
});
