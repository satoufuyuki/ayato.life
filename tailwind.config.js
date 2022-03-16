module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	mode: "jit",
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
}
