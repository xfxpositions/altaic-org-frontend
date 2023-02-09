<script>
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription,
		Transition
	} from '@rgossiaux/svelte-headlessui';
	let isOpen = false;
</script>

<div>
	<button
		on:click={() => {
			isOpen = !isOpen;
		}}
		class="transition-all duration-300 ease-in-out hover:bg-solarized-light p-2 rounded-md border-2 border-zinc-200"
		>Change Language</button
	>

	<Transition
		show={isOpen}
		enter="transition duration-100 ease-out"
		enterFrom="transform scale-95 opacity-0"
		enterTo="transform scale-100 opacity-100"
		leave="transition duration-75 ease-out"
		leaveFrom="transform scale-100 opacity-100"
		leaveTo="transform scale-95 opacity-0"
	>
		<Dialog
			class="w-full m-auto max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
		>
			<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
				Change The Language
			</DialogTitle>
			<div class="flex justify-center items-center">
				<div class="mt-4 text-center">
					<p class="text-sm text-gray-500">Avaible Languages</p>
					<div class="flex gap-5">
						<div
							class="p-4 bg-opacity-50 cursor-pointer transition-all duration-200 bg-slate-200 ease-in-out hover:bg-slate-200"
						>
							Turkish
						</div>
						<div
							class="p-4 bg-opacity-50 cursor-pointer transition-all duration-200 bg-slate-200 ease-in-out hover:bg-slate-200"
						>
							English
						</div>
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
					Got it, thanks!
				</button>
			</div>
		</Dialog>
	</Transition>
</div>
