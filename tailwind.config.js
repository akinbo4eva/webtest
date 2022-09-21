/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xl: { max: '1200px' },
			lg: { max: '1100px' },
			md: { max: '750px' },
			sm: { max: '450px' },
			xs: { max: '375px' },
		},
		extend: {
			fontFamily: {
				sarabun: ['Sarabun', 'sans-serif'],
				sarabunlight: ['Sarabun-light', 'sans-serif'],
				sarabunextra: ['Sarabun-extralight', 'sans-serif'],
				sarabunmedium: ['Sarabun-medium', 'sans-serif'],
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
