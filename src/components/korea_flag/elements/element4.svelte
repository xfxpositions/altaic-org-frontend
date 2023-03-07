<script>
	import { Motion } from 'svelte-motion';
	/**
	 * @type {any}
	 */
	export let seen;
	/**
	 * @type {any}
	 */
	export let hide;
	console.log(hide, seen);
</script>

<div style="position: absolute">
	<div class="container-4">
		<div class="halfcontainer">
			<div class="halfstr" />
			<div class="halfstr" />
		</div>
		<div class="fulstr" />
		<div class="halfcontainer">
			<div class="halfstr" />
			<div class="halfstr" />
		</div>
	</div>
</div>

<style>
	.container-4 {
		display: flex;
		flex-direction: column;
		gap: 2px;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
		position: relative;
		left: 100px;
		position: relative;
		top: 20px;
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
