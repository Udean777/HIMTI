<script lang="ts">
	import { events } from '$lib/events';
	import { ArrowRight, Calendar } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Kegiatan HIMTI</title>
	<meta
		name="description"
		content="Dokumentasi berbagai kegiatan dan event yang diselenggarakan oleh HIMTI UNPAB."
	/>
</svelte:head>

<section class="from-primary/5 via-background to-background bg-gradient-to-br py-24 lg:py-32">
	<div class="container mx-auto max-w-7xl px-6">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h1 class="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
				Dokumentasi <span class="text-primary">Kegiatan</span> HIMTI
			</h1>
			<p class="text-muted-foreground text-xl text-pretty">
				Jelajahi berbagai pelatihan, seminar, dan acara inspiratif yang telah kami selenggarakan
				untuk mengembangkan potensi mahasiswa.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each events as event (event.slug)}
				<a
					href={`/event/${event.slug}`}
					class="bg-card text-card-foreground group hover:shadow-primary/20 flex flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-2"
				>
					<div class="relative overflow-hidden">
						<img
							src={event.coverImage}
							alt={`Foto sampul ${event.title}`}
							class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
							loading="lazy"
						/>
						<div
							class="bg-primary/80 text-primary-foreground absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm"
						>
							{event.category}
						</div>
					</div>

					<div class="flex flex-1 flex-col p-6">
						<h3 class="group-hover:text-primary text-xl font-bold">{event.title}</h3>
						<div class="text-muted-foreground mt-2 flex items-center gap-2 text-sm">
							<Calendar class="h-4 w-4" />
							<span>{event.date}</span>
						</div>
						<p class="text-muted-foreground mt-4 flex-1">{event.description}</p>
						<div
							class="text-primary mt-6 flex items-center gap-2 font-semibold group-hover:underline"
						>
							Lihat Detail
							<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
