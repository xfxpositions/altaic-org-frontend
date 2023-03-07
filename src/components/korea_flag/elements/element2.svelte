<script>
	// @ts-nocheck

	export let hide;
	export let seen;
	import { Motion } from 'svelte-motion';
</script>

<Motion
	let:motion
	initial={{ top: '50px', left: '50px' }}
	animate={seen && { top: '0px', left: 'unset' }}
	exit="{hide && { top: '100px', left: 'unset' }}}"
	transition={{ duration: 0.5 }}
>
	<div use:motion style="position: absolute;" class="-z-10">
		<div class="container-2 ">
			<div class="fulstr" />
			<div class="fulstr" />
			<div class="fulstr" />
		</div>
	</div>
</Motion>

<style>
	.container-2 {
		display: flex;
		flex-direction: column;
		gap: 2px;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(-45deg);
		position: relative;
		top: 20px;
	}
	.fulstr {
		width: 22px;
		height: 4px;
		background-color: black;
	}
</style>
