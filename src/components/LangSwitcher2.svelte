<script>
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription,
		TransitionChild,
		TransitionRoot,
		Transition
	} from '@rgossiaux/svelte-headlessui';
	import { locale } from 'svelte-i18n';
	import { browser } from '$app/environment';

	import { each } from 'svelte/internal';

	let isOpen = false;
	function closeModal() {
		isOpen = false;
	}
	function openModal() {
		isOpen = true;
	}
	let avabileLanguages = [
		{ name: 'Turkish', code: 'tr' },
		{ name: 'English', code: 'en' }
	];
	let selectedLanguage = {
		name: '',
		code: ''
	};

	/**
	 * @param {string | null | undefined} language
	 */
	function changeLang(language) {
		if (browser) {
			localStorage.setItem('lang', selectedLanguage.code);
		}
		locale.set(language);
		locale.subscribe(() => console.log('locale change'));
	}
</script>

<div>
	<div class="inset-0 flex items-center">
		<button
			on:click={openModal}
			class="transition-all duration-300 ease-in-out hover:bg-solarized-light hover:text-black p-2 rounded-md border-2 border-zinc-200"
			>Change Language</button
		>
	</div>
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
							class="w-full max-w-md dark:bg-zinc-800 dark:text-white transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all"
						>
							<DialogTitle
								as="h3"
								class="text-lg font-medium leading-6 text-gray-900 dark:text-white"
							>
								Change The Language
							</DialogTitle>
							<div class="flex justify-center mt-50 items-center">
								<div class="mt-4 text-center">
									<p class="text-sm text-gray-500 dark:text-gray-200">Avaible Languages</p>
									<div class="flex gap-2">
										{#each avabileLanguages as language}
											<div class="flex gap-5 mt-1">
												<!-- svelte-ignore a11y-click-events-have-key-events -->
												<div
													on:click={() => {
														selectedLanguage = language;
													}}
													class="p-4 bg-opacity-50 cursor-pointer transition-all duration-200 bg-slate-200 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-500 {selectedLanguage.name ==
													language.name
														? 'bg-opacity-90 bg-solarized-green hover:bg-solarized-green hover:bg-opacity-100'
														: 'bg-slate-200'} shadow-lg bg-opacity-50 cursor-pointer transition-all duration-200  ease-in-out hover:bg-slate-200"
												>
													{language.name}
												</div>
												<!-- svelte-ignore a11y-click-events-have-key-events -->
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
										changeLang(selectedLanguage.code);
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
