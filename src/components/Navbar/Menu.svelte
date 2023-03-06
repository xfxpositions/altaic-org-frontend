<script lang="ts">
	import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@rgossiaux/svelte-headlessui';

	function classNames(...classes: (string | false | null | undefined)[]) {
		return classes.filter(Boolean).join(' ');
	}
	function resolveClass({ active, disabled }: { active: boolean; disabled: boolean }) {
		return classNames(
			'flex justify-between w-full px-4 py-2 text-sm leading-5 text-left',
			active
				? 'dark:bg-[#003f4f] bg-solarized-light transition-color duration-200 ease rounded-sm backdrop-blur-[2px] text-gray-900 dark:text-white'
				: 'dark:text-white',
			disabled && 'cursor-not-allowed opacity-50'
		);
	}
</script>

<div class="flex justify-center">
	<div class="relative inline-block text-left">
		<Menu>
			<span class="rounded-md shadow-sm">
				<MenuButton
					class="transition-all duration-300 ease-in-out group hover:bg-solarized-light dark:text-solarized-light dark:hover:bg-solarized-dark dark:hover:text-solarized-light hover:text-black  p-2 rounded-md border-2 border-zinc-200"
				>
					<span>Options</span>
				</MenuButton>
			</span>

			<Transition
				enter="transition duration-300 ease-[cubic-bezier(.17,.67,.07,1)]"
				enterFrom="transform scale-95 opacity-0"
				enterTo="transform scale-100 opacity-100"
				leave="transition duration-300 ease-[cubic-bezier(.17,.67,.07,1)]"
				leaveFrom="transform scale-100 fzdopacity-100"
				leaveTo="transform scale-95 opacity-0"
			>
				<MenuItems
					class="bg-opacity-100 backdrop-blur-[2px] absolute right-0 w-56 mt-2 origin-top-right bg-zinc-100 dark:bg-solarized-dark dark:text-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
				>
					<div class="py-1">
						<MenuItem as="a" href="#account-settings" class={resolveClass}>Change Language</MenuItem
						>
						<MenuItem as="a" href="#support" class={resolveClass}>Change Theme</MenuItem>

						<MenuItem as="a" href="#license" class={resolveClass}>Total Visitors:</MenuItem>
					</div>
				</MenuItems>
			</Transition>
		</Menu>
	</div>
</div>
