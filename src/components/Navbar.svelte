<script>
	import LangSwitcher2 from './LangSwitcher2.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import VisitorCounter from './VisitorCounter.svelte';
	import ThemeSwitcher2 from './ThemeSwitcher2.svelte';
	import Menu from './Navbar/Menu.svelte';
</script>

<nav
	class="flex justify-end md:justify-center shadow-md p-4 py-8 bg-zinc-100 dark:bg-zinc-700 my-4 bg-opacity-50 backdrop-blur-[2px]"
>
	<this.svelte:element class="hidden md:flex gap-3">
		<LangSwitcher2 />
		<ThemeSwitcher2 />
		<VisitorCounter />
	</this.svelte:element>
	<div class="visible md:hidden flex gap-2 ">
		<ThemeSwitcher2 />

		<Menu />
	</div>
</nav>
