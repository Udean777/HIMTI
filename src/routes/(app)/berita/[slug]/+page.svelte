<script lang="ts">
	import { page } from '$app/stores';
	import { allArticles } from '$lib/events';
	import { error } from '@sveltejs/kit';
	import { Calendar, Tag, ArrowLeft } from 'lucide-svelte';

	const { slug } = $page.params;

	const article = allArticles.find((a: any) => a.slug === slug);

	if (!article) {
		error(404, 'Halaman berita tidak ditemukan');
	}
</script>

<svelte:head>
	<title>{article.title}</title>
	<meta name="description" content={article.excerpt} />
</svelte:head>

<section class="py-24 lg:py-32">
	<div class="container mx-auto max-w-5xl px-6">
		<a
			href="/berita"
			class="text-primary mb-8 inline-flex items-center gap-2 transition-colors hover:underline"
		>
			<ArrowLeft class="h-4 w-4" />
			Kembali ke Semua Berita
		</a>

		<div class="mb-12">
			<h1 class="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
				{article.title}
			</h1>
			<div class="text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2">
				<div class="flex items-center gap-2">
					<Calendar class="text-primary h-5 w-5" />
					<span class="font-medium">{article.date}</span>
				</div>
				<div class="flex items-center gap-2">
					<Tag class="text-primary h-5 w-5" />
					<span class="font-medium">{article.category}</span>
				</div>
			</div>
		</div>

		<article class="mb-16 max-w-none">
			{@html article.details || article.excerpt}
		</article>

		{#if article.gallery && article.gallery.length > 0}
			<div>
				<h2 class="border-primary mb-8 border-l-4 pl-4 text-3xl font-bold">Dokumentasi Foto</h2>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{#each article.gallery as image, i}
						<div class="overflow-hidden rounded-lg shadow-md">
							<img
								src={image}
								alt={`Dokumentasi ${article.title} (${i + 1})`}
								class="aspect-video h-full w-full object-cover transition-transform duration-300 hover:scale-105"
								loading="lazy"
							/>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>
