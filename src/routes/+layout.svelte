<script context="module">
	import Navbar from '../components/Navbar.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import PageTransition from '../components/PageTransition.svelte';

	import { browser } from '$app/environment';
	import '$lib/i18n'; // Import to initialize. Important :)
	import { locale, waitLocale, isLoading } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { page } from '$app/stores';
	export const load = async () => {
		if (browser) {
			locale.set(window.navigator.language);
		}
		await waitLocale();
	};

	//get current url for page transitions
	/**
	 * @type {URL}
	 */

	load();
</script>

<div class="bg-solarized-light dark:text-white dark:bg-solarized-dark min-h-screen">
	<Navbar />
	<PageTransition url={$page.url}>
		<slot />
	</PageTransition>
	<Footer />
</div>
