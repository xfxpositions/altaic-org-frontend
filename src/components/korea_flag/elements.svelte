<script>
	import { Motion } from 'svelte-motion';
	/**
	 * @type {any}
	 */
	export let seen;
	export let initilazed;
	/**
	 * @type {any}
	 */
	const variants = {
		hidden: { top: '0px', left: '0px' },
		visible: { top: '-30px', left: '-50px' }
	};
	const variants_1 = {
		hidden: { top: '50px', left: '50px' },
		visible: { top: '100px', left: '0px' }
	};
	const variants_3 = {
		hidden: { top: '0px', left: '0px' },
		visible: { top: '50px', left: '50px' }
	};
	const variants_4 = {
		hidden: { top: '0px', left: '0px' },
		visible: { top: '-30px', left: '50px' }
	};
	const again = () => {
		i = i > 0 ? 0 : 1;
	};
	export let hide;
	export let i;
	$: v = ['hidden', 'visible'][i];
	$: v_1 = ['hidden', 'visible'][i];
</script>

<div class="main">
	<div style="position: absolute">
		<Motion
			let:motion
			initial="hidden"
			animate={v}
			variants={variants_1}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div use:motion class="container-1 transition-opacity {!initilazed && 'hidden'}">
				<div class="fulstr" />
				<div class="halfcontainer">
					<div class="halfstr" />
					<div class="halfstr" />
				</div>
				<div class="fulstr" />
			</div>
		</Motion>
	</div>
	<Motion
		let:motion
		initial="hidden"
		animate={v}
		{variants}
		transition={{ duration: 0.5, delay: 0.1 }}
	>
		<div use:motion style="position: absolute;" class="">
			<div class="container-2 ">
				<div class="fulstr" />
				<div class="fulstr" />
				<div class="fulstr" />
			</div>
		</div>
	</Motion>
	<Motion
		let:motion
		initial="hidden"
		animate={v}
		variants={variants_3}
		transition={{ duration: 0.5, delay: 0.3 }}
	>
		<div use:motion style="position: absolute">
			<div class="container-3 ">
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
	</Motion>
	<Motion
		let:motion
		initial="hidden"
		animate={v}
		variants={variants_4}
		transition={{ duration: 0.5, delay: 0.4 }}
	>
		<div use:motion style="position: absolute">
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
	</Motion>
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
		top: 50px;
		left: 50px;
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
		top: 50px;
		left: 50px;
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
		top: 50px;
		left: 50px;
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
		left: 50px;
		position: relative;
		top: 50px;
		/* animation-name: useOpacity;
		animation-duration: 1ms;
		animation-delay: 500ms;
		animation-timing-function: ease; */
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
	@keyframes useOpacity {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
