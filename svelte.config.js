import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	it: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/uvc-project-frontend-team-8-green-quest' : '', // Use your repo name here
		},
	}
};

export default config;
