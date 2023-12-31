import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],

	vitePlugin: {
		inspector: true,
	},
	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x',
		}),
	},
};

export default config;
