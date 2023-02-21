<script>
	// @ts-nocheck

	import { locale, _ } from 'svelte-i18n';
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import { Transition } from '@rgossiaux/svelte-headlessui';
	import axios from 'axios';
	import Card from '../components/Card.svelte';
	export let localChanged;

	/**
	 * @type {any[]}
	 */
	let posts = null;
	let unsubscribe;
	let langChanged = false;
	onMount(async () => {
		unsubscribe = locale.subscribe((value) => {
			console.log('Language changed');
			langChanged = true;
		});
		axios.get('http://localhost:7881/multifetch?limit=3').then((response) => {
			posts = response.data.result.reverse();
			console.log(posts);
		});
		onDestroy(() => {
			unsubscribe();
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
			langChanged = false;

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
		<div class="flex flex-col gap mt-5 gap-5 mb-5">
			{#if !posts}
				<h1 class="text-xl font-semibold ">Loading...</h1>
			{:else}
				{#each posts as post}
					<Transition
						show={true}
						enter="transition-opacity duration-500"
						enterFrom="opacity-0 translate-y-10"
						enterTo="opacity-100 translate-y-0"
						leave="transition-opacity duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Card author={post.author} title={post.title} id={post._id}>
							<div class="">
								<div class="flex">
									<span>{$_('postby')}&nbsp</span>
									<a class="underline font-semibold">{post.author}</a>
								</div>
								<h2 class="text-xl hover:underline cursor-pointer">{post.title}</h2>
								<p class="hover:underline cursor-pointer">
									{post.content.substring(0, 200)}<span class="hidden md:inline"
										>{post.content.substring(200, 400)}</span
									>...
								</p>
								<p class="text-start">
									{dateOfPost(new Date(post.createdAt))}
								</p>
							</div>
						</Card>
					</Transition>
				{/each}
			{/if}
		</div>
		<button
			class="p-4 bg-green-700 bg-opacity-80 hover:translate-y-[0.15rem] hover:bg-opacity-100 transition-all duration-200 ease-in-out text-white shadow-md rounded-md inline-block mb-5"
			>{$_('loadmore')}</button
		>
	</div>
</div>
