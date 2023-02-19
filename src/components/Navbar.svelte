<script>
	import LangSwitcher2 from './LangSwitcher2.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import VisitorCounter from './VisitorCounter.svelte';
</script>

<nav
	class="flex justify-center gap-4 shadow-md p-4 py-8 bg-zinc-100 my-4 bg-opacity-50 backdrop-blur-[2px]"
>
	<LangSwitcher2 />
	<ThemeSwitcher />
	<VisitorCounter />
</nav>
