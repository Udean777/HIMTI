<script>
	import Button from '$lib/components/Button.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<Hero
	title="Event"
	typeWriterText="Halaman ini memuat seluruh kegiatan yang dihadiri dan dibuat oleh HIMTI."
>
	<div slot="action">
		<Button text="Coming Soon" color="bg-pastel-blue" textColor="text-dark-black" />
	</div>
</Hero>
