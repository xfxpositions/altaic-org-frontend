<script>
	import LangSwitcher2 from './LangSwitcher2.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import VisitorCounter from './VisitorCounter.svelte';
	import ThemeSwitcher2 from './ThemeSwitcher2.svelte';
</script>

<nav
	class="flex justify-center gap-4 shadow-md p-4 py-8 bg-zinc-100 dark:bg-zinc-700 my-4 bg-opacity-50 backdrop-blur-[2px]"
>
	<LangSwitcher2 />
	<ThemeSwitcher2 />
	<VisitorCounter />
</nav>
