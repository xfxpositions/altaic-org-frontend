/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'solarized-light': '#f0e7db',
				'solarized-green': '#859900',
				'solarized-dark': '#002b36'
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
				deneme: 'cubic-bezier(.17,.67,1,.06)'
			}
		}
	},

	plugins: []
};
