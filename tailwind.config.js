/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xl: { max: "1200px" },
			lg: { max: "1100px" },
			md: { max: "750px" },
			sm: { max: "450px" },
			xs: { max: "375px" },
		},
		extend: {},
	},
	plugins: [],
};
