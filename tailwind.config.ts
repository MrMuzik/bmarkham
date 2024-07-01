import { join } from 'path';
import type { Config } from 'tailwindcss';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		fontFamily: {
			'sans': ['"open-sans"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
		},
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			// '2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  },
		extend: {
			fontFamily: {
				'brandname': ['"proxima-nova"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
				'headline': ['"roboto-condensed"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
			  },
		},
	},
	plugins: [
		skeleton({
			themes: { preset: [ "skeleton" ] }
		})
	]
} satisfies Config;

export default config;
						