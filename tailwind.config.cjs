/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'solarized-light': '#f0e7db',
				'solarized-green': '#859900',
				'solarized-dark': '#002b36'
			}
		}
	},

	plugins: []
};
