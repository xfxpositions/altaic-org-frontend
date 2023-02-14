<script>
	import { t, locales } from '../lib/index.js';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import Card from '../components/Card.svelte';
	/**
	 * @type {any[]}
	 */
	let posts = [];
	onMount(async () => {
		axios.get('http://localhost:7881/').then((response) => {
			posts = response.data.result;
			console.log(posts);
		});
	});
	let a = locales.get();
	console.log(a);
</script>

<div class="px-20 bg-solarized-light h-screen flex flex-col items-center">
	<div class="text-center mt-24 ">
		<h1 class="text-3xl font-bold underline">{$t('home.mainTitle')}</h1>
		<h1 class="text-3xl font-bold underline">Welcome to altaic.org</h1>

		<div class="shadow-md p-4 mx-4 bg-zinc-100 my-4 bg-opacity-50 backdrop-blur-[2px]">
			<h2 class="text-xl">What's that?</h2>
			<p class="ml-3">
				Altaic.org is a website based about Altaic Language Family.
				<br />
				Currently the website is under heavy development.
			</p>
		</div>
		<div class="shadow-md p-4 mx-4 bg-zinc-100 my-4 bg-opacity-50 backdrop-blur-[2px]">
			<h2 class="text-xl">What is Altaic Language Family?</h2>
			<p class="ml-3">
				Altaic (/ælˈteɪ.ɪk/) is a controversial proposed language family that would include the
				Turkic, Mongolic and Tungusic language families and possibly also the Japonic and Koreanic
				languages.
			</p>
		</div>

		<h2 class="font-bold text-2xl">Latest Posts</h2>
		{#each posts as post}
			<Card>
				<h2 class="text-xl">{post.title}</h2>
				<p>{post.content}</p>
			</Card>
		{/each}
	</div>
</div>
