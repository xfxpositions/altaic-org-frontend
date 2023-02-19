<script context="module">
	import Navbar from '../components/Navbar.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import { t, locales, locale, loadTranslations } from '../lib/index.js';
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async () => {
		const initialLocale = 'en'; // get from cookie / url / fetch from server...
		await loadTranslations(initialLocale); // keep this just before the `return`
		return {};
	};
</script>

<div class="bg-solarized-light">
	<Navbar />
	<slot />
	<Footer />
</div>
