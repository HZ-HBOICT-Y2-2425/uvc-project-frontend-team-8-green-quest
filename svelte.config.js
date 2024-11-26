import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'inde.html',
      precompress: false,
      strict: false
    }),
    paths: {
      base: '/uvc-project-frontend-team-8-green-quest',
    },
    prerender: {
      entries: [
        '/',          // Pre-render the home page
        '/challenges', 
		'/challenges/1',
		'/challenges/2',
		'/challenges/3',    // Example: Pre-render specific static routes
        '/shop',    // Example: Pre-render dynamic routes
        ],
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
