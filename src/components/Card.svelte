<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	export let id;
	export let author;
	export let title;
	export let index;
	import { fade, fly, slide, blur, draw, crossfade, scale } from 'svelte/transition';
	console.log(1000 + 200 * Number(index));
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={() => {
		goto(`/post/${title}.${author}.${id}`);
	}}
	in:slide={{ duration: 400 + 200 * Number(index) }}
	class="bg-slate-100 dark:bg-zinc-800 cursor-pointer transition-all duration-200 ease-in-out hover:shadow-2xl hover:-translate-y-1 lg:px-10  group rounded-md shadow-xl py-2 px-4 md:py-5 md:px-10 bg-opacity-75 backdrop-blur-[2px]"
>
	<slot />
</div>

<style>
	.card {
		display: grid;
		grid-template-columns: 5fr 1fr;
	}
</style>
