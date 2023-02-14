<div
	class="bg-slate-100  group card rounded-md shadow-xl py-2 px-4 md:py-5 md:px-10 bg-opacity-75 backdrop-blur-[2px]"
>
	<slot />
	<div
		class="bg-sky-300 flex justify-center items-center transition-all duration-300 ease-in-out group-hover:translate-x-2 opacity-0 group-hover:opacity-100"
	>
		GO
	</div>
</div>

<style>
	.card {
		display: grid;
		grid-template-columns: 5fr 1fr;
	}
</style>
