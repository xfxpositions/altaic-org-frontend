<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import Card from '../../../components/Card.svelte';
	import { fade, fly, slide, blur, draw, crossfade, scale } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { locale, _ } from 'svelte-i18n';

	let zibidi = null;
	let { id } = $page.params;
	onMount(() => {
		axios.get(`http://localhost:7881/fetch/${id}`).then((result) => {
			console.log(result);
			zibidi = result.data.result;
			console.log(zibidi);
		});
	});
	let copy_ing = false;
	function copy() {
		copy_ing = true;
		const input = document.createElement('input');
		input.setAttribute('value', window.location.href);
		document.body.appendChild(input);
		input.select();
		document.execCommand('copy');
		document.body.removeChild(input);
		// setTimeout(() => {
		// 	copy_ing = false;
		// }, 1500);
	}
	function dateOfPost(date) {
		if (browser) {
			var options = { year: 'numeric', month: 'long', day: 'numeric' };
			let lang = localStorage.getItem('lang');

			// @ts-ignore

			return date.toLocaleDateString(lang || 'en', options);
		}
	}
</script>

<div class="px-4 md:px-12 lg:px-16">
	{#if !zibidi}
		<h1 class="font-semibold text-lg">Loading..</h1>
	{:else}
		<Card reading={true} author={zibidi.author} id={zibidi._id} index={1} title={zibidi.title}>
			<div class="flex">
				<span>{$_('postby')}&nbsp</span>
				<a class="underline font-semibold">{zibidi.author}</a>
			</div>
			<h2 class="text-xl text-center font-bold ">{zibidi.title}</h2>
			<p>
				{zibidi.content}
			</p>
			<p class="text-start font-semibold mt-4">
				{dateOfPost(new Date(zibidi.createdAt))}
			</p>
		</Card>
	{/if}
</div>

<h1>{$page.params.id}</h1>
