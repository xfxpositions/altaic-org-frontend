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
</script>

<div class="main">
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
	<div style="position: absolute;">
		<div class="container-2 hide-3">
			<div class="fulstr" />
			<div class="fulstr" />
			<div class="fulstr" />
		</div>
	</div>
	<div style="position: absolute">
		<div class="container-3 hide-3">
			<div class="halfcontainer">
				<div class="halfstr" />
				<div class="halfstr" />
			</div>
			<div class="halfcontainer">
				<div class="halfstr" />
				<div class="halfstr" />
			</div>
			<div class="halfcontainer">
				<div class="halfstr" />
				<div class="halfstr" />
			</div>
		</div>
	</div>
	<div style="position: absolute">
		<div class="container-4 hide-4">
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
</div>

<style>
	.main {
		display: flex;
		transform: scale(1.5);
		position: relative;
		right: 140px;
		bottom: 100px;
	}

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
	.container-3 {
		display: flex;
		flex-direction: column;
		gap: 2px;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(-45deg);
		position: relative;
		top: 100px;
		left: 100px;
	}
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
	.hide-4 {
		position: relative;
		left: 50px;
		top: 50px;
	}
	.hide-3 {
		position: relative;
		left: 50px;
		top: 50px;
	}
</style>
