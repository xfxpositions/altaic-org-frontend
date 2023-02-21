<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import Card from '../../components/Card.svelte';
	import { browser } from '$app/environment';
	import { locale, _ } from 'svelte-i18n';
	import { Transition } from '@rgossiaux/svelte-headlessui';
	import { fade, fly, slide, blur, draw, crossfade, scale } from 'svelte/transition';
	let animate = false;

	export let localChanged;

	/**
	 * @type {any[]}
	 */
	let posts = null;
	onMount(() => {
		axios.get('http://localhost:7881/multifetch?limit=3').then((response) => {
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
			return date.toLocaleDateString('en', options);
		}
	}
</script>

<label>
	<input type="checkbox" bind:checked={animate} />
	Animate
</label>

{#if animate}
	<p transition:slide>There are no mistakes, only happy accidents.</p>
{/if}

{#if posts}
	<div class="flex flex-col gap mt-5 gap-5 mb-5 px-6 md:px-14 lg:px-32">
		{#each posts as post}
			{#if posts}
				<Card author={post.author} title={post.title} id={post._id}>
					<div transition:scale class="">
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
			{/if}
		{/each}
	</div>
{/if}

<style>
	label {
		position: absolute;
		bottom: 4%;
		left: 4%;
		font-size: 1rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
</style>
