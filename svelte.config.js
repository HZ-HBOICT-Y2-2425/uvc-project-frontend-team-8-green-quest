import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/uvc-project-frontend-team-8-green-quest' : '',
    }
  },
  preprocess: vitePreprocess(),
};

export default config;
