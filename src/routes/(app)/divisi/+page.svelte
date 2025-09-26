<script lang="ts">
	import { divisionImages, members } from '$lib/dummy';

	const divisionDetails: Record<string, string> = {
		HUMAS:
			'Bertugas membangun dan menjaga hubungan baik antara HIMTI dengan pihak internal maupun eksternal.',
		Prestasi:
			'Fokus pada pengembangan prestasi anggota melalui penyelenggaraan lomba, pelatihan, dan kompetisi.',
		IPTEK:
			'Mengelola program pengembangan ilmu pengetahuan dan teknologi, seperti workshop, seminar, dan mentoring.',
		Kominfo:
			'Bertanggung jawab atas pengelolaan informasi, dokumentasi, serta media sosial organisasi.',
		DANUS:
			'Mengelola dana usaha dan sumber daya organisasi melalui berbagai kegiatan kewirausahaan.'
	};

	const divisions = [...new Set(members.map((item) => item.division))];
	let activeDivision = $state(divisions[0] || '');

	const divisionHead = $derived(
		members.find((m) => m.division === activeDivision && m.role.includes('Kepala Divisi'))
	);

	const divisionMembers = $derived(
		members.filter((m) => m.division === activeDivision && !m.role.includes('Kepala Divisi'))
	);

	const divisionDescription = $derived(
		divisionDetails[activeDivision] || 'Deskripsi untuk divisi ini belum tersedia.'
	);

	const handleTabClick = (division: string) => {
		activeDivision = division;
	};

	function animateOnScroll(node: HTMLElement) {
		node.style.opacity = '0';

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						node.classList.add('start-animation');

						observer.unobserve(node);
					}
				});
			},
			{
				threshold: 0.1
			}
		);

		observer.observe(node);

		return {
			destroy() {
				if (observer) {
					observer.disconnect();
				}
			}
		};
	}
</script>

<svelte:head>
	<title>Informasi Divisi - HIMTI</title>
	<meta name="description" content="Kumpulan informasi tentang Divisi UNPAB." />
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
				Struktur <span class="text-primary">Divisi</span>
			</h1>
			<p class="text-muted-foreground text-xl text-pretty">
				Kenali tim yang berdedikasi di balik layar, mendorong inovasi dan kolaborasi di HIMTI.
			</p>
		</div>

		<div
			class="tab-container scrollbar-hide relative mb-12 flex items-center justify-start gap-2 overflow-x-auto pb-2 md:justify-center md:overflow-visible"
		>
			{#each divisions as division}
				<button
					onclick={() => handleTabClick(division)}
					class="flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-300"
					class:bg-primary={activeDivision === division}
					class:text-primary-foreground={activeDivision === division}
					class:bg-card={activeDivision !== division}
					class:text-muted-foreground={activeDivision !== division}
					class:hover:bg-muted={activeDivision !== division}
				>
					{division}
				</button>
			{/each}
		</div>

		{#key activeDivision}
			<div class="animate-fade-in start-animation" use:animateOnScroll>
				<div class="relative mx-auto mb-16 max-w-5xl overflow-hidden rounded-xl shadow-lg">
					<img
						src={divisionImages[activeDivision]}
						alt={`Foto Sampul Divisi ${activeDivision}`}
						class="absolute top-0 h-full w-full object-cover object-center"
						loading="lazy"
					/>
					<div
						class="from-primary absolute inset-0 bg-gradient-to-t via-black/40 to-transparent"
					></div>
					<div class="relative flex h-full min-h-[400px] flex-col justify-end p-6 md:p-8">
						<div class="text-white">
							<h2 class="text-4xl font-bold">{activeDivision}</h2>
							<p class="mt-2 max-w-2xl text-slate-50">{divisionDescription}</p>
						</div>
					</div>
				</div>

				{#if divisionHead}
					<div class="animate-fly-up mb-14 flex justify-center" use:animateOnScroll>
						<div
							class="bg-card text-card-foreground group !border-primary shadow-primary/20 relative flex w-full max-w-[300px] flex-col overflow-hidden rounded-sm border-2 text-center shadow-lg transition-all duration-300 hover:-translate-y-2"
						>
							<div class="aspect-square overflow-hidden">
								<img
									src={divisionHead.image}
									alt={divisionHead.name}
									class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
									loading="lazy"
								/>
							</div>
							<div class="p-4">
								<h3 class="text-lg font-semibold">{divisionHead.name}</h3>
								<p class="text-muted-foreground text-sm">{divisionHead.role}</p>
							</div>
						</div>
					</div>
				{/if}

				{#if divisionMembers.length > 0}
					<h3 class="text-foreground mb-8 text-center text-3xl font-semibold">Anggota Divisi</h3>
					<div class="flex flex-wrap justify-center gap-6">
						{#each divisionMembers as person, i}
							<div
								class="bg-card text-card-foreground group animate-fly-up flex w-full max-w-[280px] flex-col overflow-hidden rounded-sm border text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
								use:animateOnScroll
								style="--delay: {100 * i}ms;"
							>
								<div class="aspect-square overflow-hidden">
									<img
										src={person.image}
										alt={person.name}
										class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
										loading="lazy"
									/>
								</div>
								<div class="p-4">
									<h3 class="font-semibold">{person.name}</h3>
									<p class="text-muted-foreground text-sm">{person.role}</p>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		{/key}
	</div>
</section>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

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

	.animate-fade-in,
	.animate-fly-up {
		animation-fill-mode: both;
		animation-play-state: paused;
	}

	.animate-fade-in {
		animation-name: fade-in;
		animation-duration: 400ms;
		animation-timing-function: ease-out;
		animation-delay: 150ms;
	}

	.animate-fly-up {
		--delay: 0ms;
		animation-name: fly-up;
		animation-duration: 500ms;
		animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
		animation-delay: var(--delay);
	}

	.start-animation {
		animation-play-state: running;
	}

	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
