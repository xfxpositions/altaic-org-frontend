<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import axios from 'axios';
	import { onMount } from 'svelte';

	let zibidi = null;
	let { id } = $page.params;
	onMount(() => {
		axios.get(`http://localhost:7881/fetch/${id}`).then((result) => {
			console.log(result);
			zibidi = result.data.result;
			console.log(zibidi);
		});
	});
</script>

<div class="px-16">
	<div
		class="shadow-md p-6 box-border  bg-zinc-100 dark:bg-zinc-800 flex flex-col justify-center items-center"
	>
		{#if !zibidi}
			<h1 class="font-semibold text-lg">Loading..</h1>
		{:else}
			<h1 class="font-semibold text-lg px-4">{zibidi?.title}</h1>
			<div class="px-16 box-border">
				{zibidi.content}
			</div>
		{/if}
	</div>
</div>

<h1>{$page.params.id}</h1>
