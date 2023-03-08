<script>
	import { onMount } from 'svelte';
	import { Motion } from 'svelte-motion';
	import Yang from './Yang.svelte';
	const variants = {
		jpn: { borderTop: '0px solid #c40e2f', borderBottom: 'solid 0px #003478' },
		kr: { borderTop: '50px solid #c40e2f', borderBottom: 'solid 50px #003478' }
	};
	import Elements from './korea_flag/elements.svelte';
	import Yin from './Yin.svelte';
	let i = 0;
	let zibidi = true;
	let initilazed = false;
	$: v = ['jpn', 'kr'][i];

	const again = () => {
		i = i > 0 ? 0 : 1;
		zibidi = zibidi ? false : true;
		console.log(i, zibidi);
	};
	onMount(() => {
		setTimeout(() => {
			initilazed = true;
		}, 500);
	});
</script>

<div class="container">
	<div class="flags">
		<Motion
			initial={{ backgroundColor: '' }}
			animate={v}
			{variants}
			transition={{ duration: 0.5 }}
			let:motion
		>
			<div use:motion class="circle-1 z-10">
				<Yin {i} {v} zibidi={initilazed} />
				<Yang {i} {v} zibidi={initilazed} />
			</div>
		</Motion>
		<Elements seen={i == 1} hide={i != 1} {i} />
	</div>
</div>

<button on:click={again}>again</button>

<style>
	.container {
		width: 300px;
		height: 200px;
	}
	.flags {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ffffff;
		width: 100%;
		height: 100%;
	}
	.circle-1 {
		border-radius: 50%;
		background-color: #bc002d;
		width: 100px;
		height: 100px;
	}
	.fullstr {
		background: #000;
		width: 50px;
		height: 8px;
		margin-bottom: 8px;
	}
	.halfstr {
		background: #fff;
		width: 10px;
		border-left: solid 11px #000;
		border-right: solid 11px #000;
		height: 8px;
		margin-bottom: 8px;
	}
	#strcontainer1 {
		position: absolute;
		margin: 0px 200px 0 45px;
		margin-bottom: 100px;
		margin-left: 50px;
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
	}
	#strcontainer2 {
		position: absolute;
		margin: 175px 0 0 45px;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}
</style>
