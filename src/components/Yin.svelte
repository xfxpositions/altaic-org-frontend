<script>
	import { Motion } from 'svelte-motion';
	export let i;
	/**
	 * @type {any}
	 */
	export let v;
	const variants = {
		jpn: { scale: 0, opacity: 0 },
		kr: { scale: 1 },
		mon: { scale: 0, translateY: '30px', opacity: 0 }
	};
	/**
	 * @type {any}
	 */
	export let zibidi;
</script>

<Motion animate={v} {variants} transition={{ duration: 0.5 }} let:motion>
	<div use:motion class="{!zibidi && 'hidden'} yin" />
</Motion>

<style>
	.yin {
		background: #c40e2f;
		width: 50px;
		height: 50px;
		margin-top: -25px;
		position: absolute;
		border-radius: 40px;
		-moz-border-radius: 40px;
		-webkit-border-radius: 40px;
	}
</style>
