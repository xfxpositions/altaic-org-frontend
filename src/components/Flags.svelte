<script>
	import { onMount } from 'svelte';
	import { Motion } from 'svelte-motion';
	import Yang from './Yang.svelte';
	const variants = {
		jpn: { borderTop: '0px solid #c40e2f', borderBottom: 'solid 0px #003478' },
		kr: { borderTop: '50px solid #c40e2f', borderBottom: 'solid 50px #003478' }
	};
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
			<div use:motion class="circle-1">
				<Yin {i} {v} zibidi={initilazed} />
				<Yang {i} {v} zibidi={initilazed} />
			</div>
		</Motion>
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
</style>
