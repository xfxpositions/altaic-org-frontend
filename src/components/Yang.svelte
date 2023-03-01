<script>
	import { Motion } from 'svelte-motion';
	/**
	 * @type {number}
	 */
	export let i;
	/**
	 * @type {any}
	 */
	export let zibidi;
	/**
	 * @type {any}
	 */
	export let v;
	const variants = {
		jpn: { scale: 0, translateY: '30px', opacity: 0 },
		kr: { scale: 1, translateY: '-50px' }
	};
</script>

<Motion
	initial={{ scale: 0 }}
	animate={v}
	{variants}
	exit={{ opacity: 0 }}
	transition={{ duration: 0.5 }}
	let:motion
>
	<div use:motion class="{!zibidi && 'hidden'} yang " />
</Motion>

<style>
	.yang {
		background: #003478;
		width: 50px;
		height: 50px;
		margin: 25px 0 0 50px;
		position: absolute;
		border-radius: 40px;
		-moz-border-radius: 40px;
		-webkit-border-radius: 40px;
	}
</style>
