<script>
	import { Icon, Moon, Sun } from 'svelte-hero-icons';
	import { writable } from 'svelte/store';
	const theme = writable('system');
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription,
		TransitionChild,
		TransitionRoot,
		Transition
	} from '@rgossiaux/svelte-headlessui';
	let isOpen = false;
	let avaibleThemes = [
		{ name: 'Solarized Light', dark: false },
		{ name: 'Solarized Dark', dark: true },
		{ name: 'Ayu Dark', dark: true }
	];
	let selectedTheme = {
		name: '',
		dark: false
	};
	// selectedTheme.name = localStorage.getItem('theme-name') || avaibleThemes[0].name;
	// selectedTheme.dark = localStorage.getItem('theme-dark') || Boolean(avaibleThemes[0].dark);

	function closeModal() {
		isOpen = false;
	}
	function openModal() {
		isOpen = true;
	}
	/**
	 * @param {string} themeToChange
	 */
	function changeTheme(themeToChange) {
		selectedTheme.name = themeToChange;
		// localStorage.setItem('theme-name', selectedTheme.name);
		// localStorage.setItem('theme-dark', String(selectedTheme.dark));
	}
</script>

<div class="flex justify-center items-center">
	<!-- use Windi CSS or tailwindcss classes directly -->
	<button
		on:click={openModal}
		class="transition-all duration-300 ease-in-out hover:bg-solarized-light p-2 rounded-md border-2 border-zinc-200"
	>
		Change Theme
		<!-- <Icon src={Moon} solid class="h-6 text-solarized-dark w-6" /> -->
	</button>
	<TransitionRoot appear show={isOpen}>
		<Dialog as="div" on:close={closeModal} class="relative z-10 ">
			<TransitionRoot
				enter="duration-300 ease-out"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="duration-200 ease-in"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div class="fixed inset-0 bg-black bg-opacity-25" />
			</TransitionRoot>

			<div class="fixed inset-0 overflow-y-auto">
				<div class="flex min-h-full items-center justify-center p-4 text-center">
					<TransitionChild
						enter="duration-300 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<DialogOverlay
							class="w-full max-w-md  transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all"
						>
							<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
								Change Theme
							</DialogTitle>
							<div class="flex justify-center mt-50 items-center">
								<div class="mt-4 text-center">
									<p class="text-sm text-gray-500">Avaible Themes</p>
									<div class="flex gap-5 p-2">
										{#each avaibleThemes as theme}
											<!-- svelte-ignore a11y-click-events-have-key-events -->
											<div
												on:click={() => {
													changeTheme(theme.name);
												}}
												class="p-4 transition-all duration-200 ease-in-out	 rounded-md {selectedTheme.name ==
												theme.name
													? 'bg-opacity-90 bg-solarized-green hover:bg-solarized-green hover:bg-opacity-100'
													: 'bg-slate-200'} shadow-lg bg-opacity-50 cursor-pointer transition-all duration-200  ease-in-out hover:bg-slate-200"
											>
												{theme.name}
											</div>
										{/each}
									</div>
								</div>
							</div>

							<div class="mt-4">
								<button
									type="button"
									class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
									on:click={() => {
										isOpen = false;
									}}
								>
									Change!
								</button>
							</div>
						</DialogOverlay>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</div>
