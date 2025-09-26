<script lang="ts">
	import { allArticles } from '$lib/events';
	import { Calendar } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Berita & Informasi - HIMTI</title>
	<meta
		name="description"
		content="Kumpulan berita, informasi, dan artikel terkini dari HIMTI UNPAB."
	/>
</svelte:head>

<section
	class="from-primary/20 via-background to-background relative w-full overflow-hidden bg-gradient-to-br py-24 lg:py-32"
>
	<div
		class="from-primary/30 to-secondary/20 absolute top-20 right-20 -z-10 h-72 w-72 rounded-full bg-gradient-to-br blur-3xl"
	></div>
	<div
		class="from-accent/10 to-primary/30 absolute bottom-20 left-20 -z-10 h-96 w-96 rounded-full bg-gradient-to-br blur-3xl"
	></div>

	<div class="container mx-auto max-w-7xl px-6">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h1 class="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
				Berita & <span class="text-primary">Informasi</span> Terkini
			</h1>
			<p class="text-muted-foreground text-xl text-pretty">
				Ikuti terus perkembangan terbaru seputar teknologi, prestasi, dan kegiatan yang kami
				selenggarakan.
			</p>
		</div>

		<div class="grid auto-rows-auto grid-cols-1 grid-rows-none gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each allArticles as article, i}
				{#if i === 0}
					<a
						href={`/berita/${article.slug}`}
						class="group hover:shadow-primary/20 animate-fly-up relative col-span-1 row-span-1 flex flex-col justify-end overflow-hidden rounded-xl border shadow-sm transition-shadow duration-300 md:col-span-2 lg:row-span-2"
						style="--delay: {i * 100}ms;"
					>
						<img
							src={article.coverImage}
							alt={article.title}
							class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
						></div>
						<div class="relative z-10 space-y-2 p-6 text-white">
							<div
								class="bg-primary text-primary-foreground inline-block rounded-full px-3 py-1 text-xs font-semibold"
							>
								{article.category}
							</div>
							<h3 class="text-2xl leading-tight font-bold text-balance">
								{article.title}
							</h3>
							<div class="flex items-center gap-2 text-sm opacity-80">
								<Calendar class="h-4 w-4" />
								<span>{article.date}</span>
							</div>
						</div>
					</a>
				{:else}
					<a
						href={`/berita/${article.slug}`}
						class="bg-card text-card-foreground group hover:shadow-primary/20 animate-fly-up flex flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-1"
						style="--delay: {i * 100}ms;"
					>
						<div class="overflow-hidden">
							<img
								src={article.coverImage}
								alt={article.title}
								class="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</div>
						<div class="flex flex-1 flex-col p-4">
							<div class="mb-2">
								<div
									class="bg-secondary text-secondary-foreground inline-block rounded-full px-2 py-0.5 text-xs font-medium"
								>
									{article.category}
								</div>
							</div>
							<h3 class="group-hover:text-primary flex-1 font-semibold">{article.title}</h3>
							<div class="text-muted-foreground mt-3 flex items-center gap-2 text-xs">
								<Calendar class="h-3 w-3" />
								<span>{article.date}</span>
							</div>
						</div>
					</a>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
	@keyframes fly-up {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fly-up {
		--delay: 0ms;
		animation-name: fly-up;
		animation-duration: 500ms;
		animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
		animation-fill-mode: both;
		animation-delay: var(--delay);
	}
</style>
