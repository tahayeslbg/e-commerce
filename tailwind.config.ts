import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: { min: "0px", max: "414px" },
			md: { min: "415px", max: "768px" },
			lg: { min: "769px", max: "1024px" },
			xl: { min: "1025px", max: "1440px" },
		},
		extend: {},
	},
	plugins: [],
};
export default config;
