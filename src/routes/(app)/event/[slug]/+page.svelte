<script lang="ts">
	import { page } from '$app/stores';
	import { events } from '$lib/events';
	import { error } from '@sveltejs/kit';
	import { Calendar, Tag, ArrowLeft } from 'lucide-svelte';

	const { slug } = $page.params;

	// console.log('SLUG DARI URL:', slug);
	// console.log(
	// 	'SEMUA SLUG TERSEDIA:',
	// 	events.map((e) => e.slug)
	// );

	const event = events.find((e) => e.slug === slug);

	if (!event) {
		error(404, 'Halaman kegiatan tidak ditemukan');
	}
</script>

<svelte:head>
	<title>{event.title}</title>
	<meta name="description" content={event.description} />
</svelte:head>

<section class="py-24 lg:py-32">
	<div class="container mx-auto max-w-5xl px-6">
		<a
			href="/events"
			class="text-primary mb-8 inline-flex items-center gap-2 transition-colors hover:underline"
		>
			<ArrowLeft class="h-4 w-4" />
			Kembali ke Semua Kegiatan
		</a>

		<div class="mb-12">
			<h1 class="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
				{event.title}
			</h1>
			<div class="text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2">
				<div class="flex items-center gap-2">
					<Calendar class="text-primary h-5 w-5" />
					<span class="font-medium">{event.date}</span>
				</div>
				<div class="flex items-center gap-2">
					<Tag class="text-primary h-5 w-5" />
					<span class="font-medium">{event.category}</span>
				</div>
			</div>
		</div>

		<article class="prose prose-lg dark:prose-invert mb-16 max-w-none">
			<p>{event.details}</p>
		</article>

		<div>
			<h2 class="border-primary mb-8 border-l-4 pl-4 text-3xl font-bold">Dokumentasi Foto</h2>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each event.gallery as image, i}
					<div class="overflow-hidden rounded-lg shadow-md">
						<img
							src={image}
							alt={`Dokumentasi ${event.title} (${i + 1})`}
							class="aspect-video h-full w-full object-cover transition-transform duration-300 hover:scale-105"
							loading="lazy"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
