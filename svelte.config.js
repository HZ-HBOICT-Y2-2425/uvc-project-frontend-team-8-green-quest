import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: false
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/uvc-project-frontend-team-8-green-quest' : '',
    },
    prerender: {
      entries: [
        '/',          // Pre-render the home page
        '/challenges',     // Example: Pre-render specific static routes
        '/shop',    // Example: Pre-render dynamic routes
        ],
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
