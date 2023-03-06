<script>
	/**
	 * @type {any}
	 */
	export let url;
	import { fly } from 'svelte/transition';
	import { Motion } from 'svelte-motion';
</script>

{#key url}
	<Motion
		initial={{ y: 10, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		exit={{ y: 0, opacity: 0 }}
		transition={{ duration: 0.8, delay: 0.1 }}
		let:motion
	>
		<div use:motion>
			<div>
				<slot />
			</div>
		</div></Motion
	>
	<!-- <div in:fly={{ x: -10, duration: 500, delay: 500 }} out:fly={{ x: 5, duration: 500 }}>
		<slot />
	</div> -->
{/key}
