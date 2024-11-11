import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
				mono: ['Space Mono', ...defaultTheme.fontFamily.mono],
				sans: ['Karla Variable', ...defaultTheme.fontFamily.sans],
			  },
			colors: {
				primary: '#000000',
				secondary: '#ffffff',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'selector',
}
