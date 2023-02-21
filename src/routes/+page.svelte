<script>
	import { locale, _ } from 'svelte-i18n';
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import axios from 'axios';
	import Card from '../components/Card.svelte';
	export let localChanged;

	/**
	 * @type {any[]}
	 */
	let posts = [];
	onMount(async () => {
		axios.get('http://localhost:7881/').then((response) => {
			posts = response.data.result.reverse();
			console.log(posts);
		});
	});
	/**
	 * @param {Date} date
	 */
	function dateOfPost(date) {
		if (browser) {
			var options = { year: 'numeric', month: 'long', day: 'numeric' };
			let lang = localStorage.getItem('lang');

			// @ts-ignore
			return date.toLocaleDateString(lang || 'en', options);
		}
	}
</script>

<div class="px-20 bg-solarized-light dark:bg-[#202023]  flex flex-col items-center">
	<div class="text-center mt-12 ">
		<h1 class="text-3xl font-bold underline">{$_('greeting')}</h1>
		<h1 class="text-3xl font-bold underline">{$_('home.greeting')}</h1>

		<div
			class="shadow-md p-4 mx-4 bg-zinc-100 dark:bg-zinc-800 my-4 bg-opacity-50 backdrop-blur-[2px]"
		>
			<h2 class="text-xl">{$_('box1.title')}</h2>
			<p class="ml-3">
				{$_('box1.content1')}
				<br />
				{$_('box1.content2')}
			</p>
		</div>
		<div
			class="shadow-md p-4 mx-4 bg-zinc-100 dark:bg-zinc-800 my-4 bg-opacity-50 backdrop-blur-[2px]"
		>
			<h2 class="text-xl">
				{$_('box2.title')}
			</h2>
			<p class="ml-3">
				{$_('box2.content1')}
			</p>
		</div>

		<h2 class="font-bold text-2xl">
			{$_('home.latestArticlesTitle')}
		</h2>
		<div class="flex flex-col gap mt-5 gap-5 mb-7">
			{#each posts as post}
				<Card author={post.author} title={post.title} id={post._id}>
					<div class="">
						<div class="flex">
							<span>by&nbsp</span>
							<a class="underline font-semibold">{post.author}</a>
						</div>
						<h2 class="text-xl hover:underline cursor-pointer">{post.title}</h2>
						<p class="hover:underline cursor-pointer">
							{post.content.substring(0, 200)}...
						</p>
						<p class="text-start">
							{dateOfPost(new Date(post.createdAt))}
						</p>
					</div>
				</Card>
			{/each}
		</div>
	</div>
</div>
