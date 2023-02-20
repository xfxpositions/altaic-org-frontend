<script context="module">
	import Navbar from '../components/Navbar.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';

	import { browser } from '$app/environment';
	import '$lib/i18n'; // Import to initialize. Important :)
	import { locale, waitLocale, isLoading } from 'svelte-i18n';

	export const load = async () => {
		if (browser) {
			locale.set(window.navigator.language);
		}
		await waitLocale();
	};
	load();
	function change() {
		locale.set('fr');
		locale.subscribe(() => console.log('locale change'));
	}
</script>

<div class="bg-solarized-light dark:text-white dark:bg-solarized-dark ">
	<Navbar />
	<slot />
	<Footer />
</div>
