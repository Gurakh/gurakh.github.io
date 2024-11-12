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
			typography: {
				DEFAULT: {
					css: {
						letterSpacing: '-0.025em',
						lineHeight: '1.5rem',
						h2: {
							marginTop: '1em',
							marginBottom: '0.25em',
							letterSpacing: 0,
							fontWeight: 'normal',
							fontFamily: 'Cormorant Garamond'
						},
						h3: {
							marginTop: '1em',
							marginBottom: '0.25em',
							letterSpacing: '-0.025em',
							fontWeight: 'normal',
						},
						p: {
							margin: 0,
						},
						li: {
							margin: 0,
						},
						img: {
							margin: '0.75em 0',
						}
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'selector',
}
