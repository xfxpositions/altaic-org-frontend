<script>
	// @ts-nocheck

	export let hide;
	export let seen;
	import { Motion } from 'svelte-motion';
</script>

<div style="position: absolute">
	<Motion
		let:motion
		animate={seen && { top: '50px', left: '50px' }}
		exit="{hide && { top: '100px', left: 'unset' }}}"
		transition={{ duration: 0.5 }}
	>
		<div use:motion class="container-1">
			<div class="fulstr" />
			<div class="halfcontainer">
				<div class="halfstr" />
				<div class="halfstr" />
			</div>
			<div class="fulstr" />
		</div>
	</Motion>
</div>

<style>
	.container-1 {
		display: flex;
		flex-direction: column;
		gap: 2px;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
		position: relative;
		top: 100px;
	}
	.fulstr {
		width: 22px;
		height: 4px;
		background-color: black;
	}
	.halfstr {
		width: 9px;
		height: 4px;
		background-color: black;
	}
	.halfcontainer {
		display: flex;
		gap: 3px;
	}
</style>
