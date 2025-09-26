<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import 'animate.css';

	let { children } = $props();
</script>

<Header />

<main>
	{@render children()}
</main>

<Footer />

<style>
	main {
		/* min-height: calc(100vh - 100px); */
		/* max-width: 1200px; */
		margin: 0 auto;
		/* padding: 2rem 1rem; */
		min-height: 80vh;
	}
</style>
