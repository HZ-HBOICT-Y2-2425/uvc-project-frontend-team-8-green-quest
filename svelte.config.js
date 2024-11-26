import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',    // Output directory for the built files
      assets: 'build',   // Directory for static assets
      fallback: null,    // No fallback for static hosting
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/uvc-project-frontend-team-8-green-quest' : '', // Use your GitHub Pages repo name here
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
