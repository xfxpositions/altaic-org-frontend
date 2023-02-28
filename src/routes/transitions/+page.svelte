<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	let i = 0;
</script>

<Motion
	initial={{ opacity: 0, y: 20 }}
	animate={{ opacity: 100, y: 0 }}
	transition={{ duration: 0.9, delay: 0.1 }}
	let:motion
>
	<div use:motion class="p-4">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem eveniet amet eius,
		excepturi modi corporis praesentium fugit? Delectus omnis recusandae voluptatibus rerum iusto!
		Cumque qui eius, reprehenderit voluptas quo, est, delectus inventore asperiores excepturi cum
		enim illum repellat deleniti reiciendis corporis? Hic animi, illum facilis sint distinctio
		quibusdam libero beatae doloremque earum? Necessitatibus eum voluptatem quasi molestiae
		reprehenderit harum beatae minima quisquam, tempora distinctio eveniet repudiandae, ratione
		incidunt facere blanditiis a, nisi dolore eaque impedit similique eius dignissimos? Aut dolorum
		similique quos molestiae illum cum sint. Porro repudiandae eaque ut, ipsum recusandae culpa
		obcaecati, repellat voluptate, animi quam natus!
	</div>
</Motion>
<button on:click={() => (i = 100)}>turn</button>
