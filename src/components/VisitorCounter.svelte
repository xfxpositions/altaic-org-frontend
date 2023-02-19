<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	/**
	 * @type {any}
	 */
	let counter;
	onMount(async () => {
		axios.get('http://localhost:7881/increasevisitorcounter').then((response) => {
			counter = response.data.result;
			console.log(response.data);
		});
	});
</script>

<div
	class="select-none transition-all duration-300 ease-in-out dark:hover:bg-solarized-dark dark:hover:text-solarized-light hover:bg-solarized-light hover:text-black p-2 rounded-md border-2 border-zinc-200"
>
	<p>
		{#if counter}
			Visitor Counter: <span class="font-semibold">{counter}</span>
		{/if}
	</p>
</div>
