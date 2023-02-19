<script>
	let darkMode = true;
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}

	import { Sun, Icon } from 'svelte-hero-icons';
</script>

<button
	on:click={handleSwitchDarkMode}
	class="transition-all duration-300 ease-in-out group hover:bg-solarized-light dark:text-solarized-light dark:hover:bg-solarized-dark dark:hover:text-solarized-light hover:text-black p-2 rounded-md border-2 border-zinc-200"
	><Icon src={Sun} solid class=" h-6 w-6" /></button
>
