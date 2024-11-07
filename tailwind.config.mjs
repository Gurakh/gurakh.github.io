import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
				mono: ['Space Mono', ...defaultTheme.fontFamily.mono],
			  },
			colors: {
				primary: '#003926',
				secondary: '#FEFAE0',
			},
		},
	},
	plugins: [],
	darkMode: 'selector',
}
