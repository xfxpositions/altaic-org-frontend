<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="bg-solarized-light h-screen ">
	<Navbar />
	<slot />
</div>
