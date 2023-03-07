<script>
	/**
	 * @type {any}
	 */
	export let url;
	import { fade } from 'svelte/transition';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	$: url = url.pathname;
	import AnimatePresence from 'svelte-motion/src/components/AnimatePresence/AnimatePresence.svelte';
</script>

{#key url}
	<!-- <Motion
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
	> -->

	<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
		<slot />
	</div>
{/key}
