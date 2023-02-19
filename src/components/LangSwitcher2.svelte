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
	let isOpen = false;
	function closeModal() {
		isOpen = false;
	}
	function openModal() {
		isOpen = true;
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
							class="w-full max-w-md  transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all"
						>
							<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
								Change The Language
							</DialogTitle>
							<div class="flex justify-center mt-50 items-center">
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
