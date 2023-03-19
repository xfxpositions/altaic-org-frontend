<script>
	import LangSwitcher2 from './LangSwitcher2.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import VisitorCounter from './VisitorCounter.svelte';
	import ThemeSwitcher2 from './ThemeSwitcher2.svelte';
	import Menu from './Navbar/Menu.svelte';
	import Logo from './Logo.svelte';
</script>

<nav
	class="flex sticky top-0 z-10 justify-end md:justify-center shadow-md p-4 py-2 md:py-8 bg-zinc-100/80 dark:bg-zinc-700/80 my-2 md:my-4 filter-backdrop backdrop-blur-[10px]"
>
	<div class="backdrop-filter ">
		<div class="grid grid-cols-2 ">
			<Logo />
			<div>
				<this.svelte:element class="hidden md:inline-flex gap-3 ">
					<LangSwitcher2>
						<div class="inset-0 flex items-center">
							<button
								class="transition-all duration-300 ease-in-out hover:bg-solarized-light hover:text-black dark:hover:bg-solarized-dark dark:hover:text-solarized-light p-2 rounded-md border-2 border-zinc-200"
								>Change Language</button
							>
						</div>
					</LangSwitcher2>
					<ThemeSwitcher2 />
					<VisitorCounter />
				</this.svelte:element>
				<div class="visible md:hidden inline-flex gap-2 ">
					<ThemeSwitcher2 />
					<Menu />
				</div>
			</div>
		</div>
	</div>
</nav>
