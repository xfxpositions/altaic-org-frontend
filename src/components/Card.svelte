<div class="">
	<div
		class="ml-[25%] my-4 mx-1 shadow-md bg-opacity-50 bg-zinc-100 p-10 lg:p-6 md:p-12 max-w-[50%] backdrop-blur-[2px] rounded-lg"
	>
		<div class="card p-4">
			<div class="bg-solarized-green">
				<slot />
			</div>
			<div class="p-2 bg-sky-400 flex justify-center items-center">Go</div>
		</div>
	</div>
</div>

<style>
	.card {
		display: grid;
		grid-template-columns: 5fr 1fr;
	}
</style>
