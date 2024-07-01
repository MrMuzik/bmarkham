import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
		  output: {
			assetFileNames: '%sveltekit.assets%/[name].[hash].[ext]'
		  }
		}
	}
});
