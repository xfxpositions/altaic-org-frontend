<div
	class="bg-slate-100 cursor-pointer transition-all duration-200 ease-in-out hover:shadow-2xl hover:-translate-y-1 lg:px-10  group rounded-md shadow-xl py-2 px-4 md:py-5 md:px-10 bg-opacity-75 backdrop-blur-[2px]"
>
	<slot />
</div>

<style>
	.card {
		display: grid;
		grid-template-columns: 5fr 1fr;
	}
</style>
