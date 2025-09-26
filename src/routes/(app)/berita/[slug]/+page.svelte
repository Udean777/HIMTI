<script lang="ts">
	import { page } from '$app/stores';
	import { allArticles } from '$lib/events';
	import { error } from '@sveltejs/kit';
	import { ArrowLeft, Calendar, Tag } from 'lucide-svelte';

	import * as Dialog from '$lib/components/ui/dialog/index.js';

	const { slug } = $page.params;
	const article = allArticles.find((a) => a.slug === slug);

	if (!article) {
		error(404, 'Halaman berita tidak ditemukan');
	}

	let isDialogOpen = $state(false);
	let selectedImageUrl: string | null = $state(null);
	let selectedImageAlt = $state('');

	function handleImageClick(imageUrl: string, imageAlt: string) {
		selectedImageUrl = imageUrl;
		selectedImageAlt = imageAlt;
		isDialogOpen = true;
	}
</script>

<svelte:head>
	<title>{article.title}</title>
	<meta name="description" content={article.excerpt} />
	<script async src="//www.instagram.com/embed.js"></script>
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
		<article class="prose prose-lg dark:prose-invert mb-16 max-w-none">
			{@html article.details || article.excerpt}
		</article>

		{#if article.gallery && article.gallery.length > 0}
			<div>
				<h2 class="border-primary mb-8 border-l-4 pl-4 text-3xl font-bold">Dokumentasi Foto</h2>
				{#each article.gallery as gallerySection}
					<div class="mb-12">
						<h3 class="mb-6 text-2xl font-semibold tracking-tight">{gallerySection.title}</h3>
						<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{#each gallerySection.images as imageUrl, i}
								{@const imageAlt = `Dokumentasi ${gallerySection.title} (${i + 1})`}
								<button
									onclick={() => handleImageClick(imageUrl, imageAlt)}
									class="group focus:ring-primary relative block w-full overflow-hidden rounded-lg shadow-md focus:ring-2 focus:ring-offset-2 focus:outline-none"
								>
									<img
										src={imageUrl}
										alt={imageAlt}
										class="aspect-video h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
										loading="lazy"
									/>
									<div
										class="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100"
									></div>
								</button>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<Dialog.Root bind:open={isDialogOpen}>
	<Dialog.Content
		class="flex h-[90vh] w-[90vw] items-center justify-center border-none bg-transparent p-0 shadow-none"
	>
		{#if selectedImageUrl}
			<img
				src={selectedImageUrl}
				alt={selectedImageAlt}
				class="h-auto w-auto rounded-lg object-contain"
			/>
		{/if}
	</Dialog.Content>
</Dialog.Root>
