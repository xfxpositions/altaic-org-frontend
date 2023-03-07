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
	export const loadLang = async () => {
		if (browser) {
			locale.set(window.navigator.language);
		}
		await waitLocale();
	};

	//get current url for page transitions
	/**
	 * @type {URL}
	 */

	loadLang();
	/**
	 * @type {any}
	 */
	let a;
	// @ts-ignore
	export function load({ url }) {
		console.log('URl');

		console.log(url);
	}
	import { page } from '$app/stores';
</script>

<script>
	console.log($page.url);
</script>

<div class="bg-solarized-light dark:text-white dark:bg-solarized-dark min-h-screen">
	<Navbar />
	<PageTransition url={$page.url}>
		<slot />
	</PageTransition>
	<Footer />
</div>
