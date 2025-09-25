<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Hero from '$lib/components/Hero.svelte';
	import { ArrowRight } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { kepengurusan } from '$lib/dummy';

	// Data Misi dan Divisi tetap sama
	const divisions = [
		{
			name: 'Divisi Humas',
			description:
				'Bertugas membangun dan menjaga hubungan baik antara HIMTI dengan pihak internal maupun eksternal.'
		},
		{
			name: 'Divisi Prestasi',
			description:
				'Fokus pada pengembangan prestasi anggota melalui penyelenggaraan lomba, pelatihan, dan kompetisi.'
		},
		{
			name: 'Divisi IPTEK',
			description:
				'Mengelola program pengembangan ilmu pengetahuan dan teknologi, seperti workshop, seminar, dan mentoring.'
		},
		{
			name: 'Divisi Kominfo',
			description:
				'Bertanggung jawab atas pengelolaan informasi, dokumentasi, serta media sosial organisasi.'
		},
		{
			name: 'Divisi Danus',
			description:
				'Mengelola dana usaha dan sumber daya organisasi melalui berbagai kegiatan kewirausahaan.'
		}
	];

	const misiList = [
		{
			title: 'Pengembangan Kompetensi',
			description:
				'Menyediakan pelatihan dan workshop untuk meningkatkan keterampilan teknis dan non-teknis anggota.',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-primary"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`
		},
		{
			title: 'Kolaborasi dan Jaringan',
			description:
				'Membangun jaringan yang kuat antara mahasiswa, alumni, dan profesional di bidang teknologi.',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-primary"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>`
		},
		{
			title: 'Inovasi dan Kreativitas',
			description:
				'Mendorong anggota untuk berinovasi dan menciptakan proyek yang dapat memberikan dampak positif.',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-primary"><path d="M15.042 21.672L13.684 16.6m0 0l-2.5-2.5m2.5 2.5l5.016-1.672M13.684 16.6L21 5l-5.016-1.672M13.684 16.6L3 19l1.672-5.016m0 0l2.5-2.5m-2.5 2.5L1 11l5.016 1.672m-5.016-1.672L9 3l1.672 5.016M11.316 8.332l2.5 2.5m-2.5-2.5l5.016 1.672"/></svg>`
		}
	];

	const bph = kepengurusan.filter((p) => p.division === 'BPH');
</script>

<svelte:head>
	<title>Himpunan Mahasiswa Teknologi Informasi</title>
	<meta
		name="description"
		content="Himpunan Mahasiswa Teknologi Informasi (HIMTI) berkomitmen untuk menjadi organisasi mahasiswa yang terdepan dalam pengembangan teknologi informasi di lingkungan akademik maupun masyarakat luas."
	/>
</svelte:head>

<div class="bg-background text-foreground">
	<Hero />

	<section class="container mx-auto max-w-5xl px-6 py-24">
		<div class="text-center">
			<h2 class="mb-4 text-3xl font-bold text-balance lg:text-4xl">
				Tentang <span class="text-primary">Kami</span>
			</h2>
			<p class="text-muted-foreground mx-auto max-w-3xl text-xl text-pretty">
				HIMTI berkomitmen menjadi organisasi terdepan dalam pengembangan teknologi, menciptakan
				inovasi yang berdampak positif bagi masyarakat dan industri.
			</p>
		</div>

		<div
			class="bg-card shadow-primary ring-border my-16 rounded-2xl p-8 text-center shadow-lg ring-1"
			in:fly={{ y: 30, duration: 800, easing: quintOut }}
		>
			<p class="text-muted-foreground text-lg leading-8">
				Kami berupaya membangun ekosistem yang mendorong kolaborasi, kreativitas, dan kepemimpinan
				di antara anggota untuk menghadapi tantangan teknologi masa depan.
			</p>
		</div>

		<div class="mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button size="lg" class="group text-white shadow-lg" href="/berita/mengenal-himti-unpab">
				Baca Selengkapnya
				<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
			</Button>
		</div>
	</section>

	<section class="bg-muted py-24">
		<div class="container mx-auto max-w-7xl px-6">
			<div class="mx-auto mb-16 max-w-3xl text-center">
				<h2 class="mb-4 text-3xl font-bold tracking-tight text-balance lg:text-4xl">
					Visi & <span class="text-primary">Misi</span>
				</h2>
				<p class="text-muted-foreground text-xl text-pretty">
					Menjadi organisasi mahasiswa terdepan yang berkontribusi positif bagi masyarakat dan
					industri melalui inovasi teknologi.
				</p>
			</div>

			<div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
				{#each misiList as misi, index}
					<div
						class="bg-card ring-border shadow-primary flex flex-col rounded-2xl p-8 ring-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
						in:fly={{ y: 30, duration: 600, delay: 150 * index, easing: quintOut }}
					>
						<div class="mb-4">{@html misi.icon}</div>
						<h3 class="text-card-foreground text-xl font-semibold">{misi.title}</h3>
						<p class="text-muted-foreground mt-2 flex-auto text-base leading-7">
							{misi.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-24">
		<div class="container mx-auto max-w-7xl px-6">
			<div class="mx-auto mb-16 max-w-3xl text-center">
				<h2 class="mb-4 text-3xl font-bold tracking-tight text-balance lg:text-4xl">
					Struktur <span class="text-primary">Inti</span> Organisasi
				</h2>
				<p class="text-muted-foreground text-xl text-pretty">
					Diperkenalkan jajaran Badan Pengurus Harian (BPH) yang menjadi motor penggerak HIMTI
					periode 2024/2025.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
				{#each bph as member, index}
					<div
						class="group bg-card ring-border flex flex-col items-center rounded-2xl p-6 text-center shadow-lg ring-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
						in:fly={{ y: 30, duration: 600, delay: 100 * index, easing: quintOut }}
					>
						<div class="ring-primary/20 overflow-hidden rounded-full ring-4">
							<img
								src={member.image}
								alt="Foto {member.name}"
								class="h-40 w-40 object-cover transition-transform duration-300 group-hover:scale-110 md:h-52 md:w-52"
							/>
						</div>
						<div class="mt-4 flex-grow">
							<h3 class="text-card-foreground text-lg font-bold">{member.name}</h3>
							<p class="text-primary font-medium">{member.role}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section
		class="from-primary/20 via-background to-background relative w-full overflow-hidden bg-gradient-to-tl py-24 lg:py-32"
	>
		<div
			class="from-primary/30 to-secondary/20 absolute top-20 right-20 -z-10 h-72 w-72 rounded-full bg-gradient-to-br blur-3xl"
		></div>
		<div
			class="from-accent/10 to-primary/30 absolute bottom-20 left-20 -z-10 h-96 w-96 rounded-full bg-gradient-to-br blur-3xl"
		></div>

		<div class="relative mx-auto w-full max-w-7xl overflow-hidden px-6">
			<div class="mx-auto mb-16 max-w-3xl text-center">
				<h2 class="mb-4 text-3xl font-bold tracking-tight text-balance lg:text-4xl">
					Divisi <span class="text-primary">Kami</span>
				</h2>
				<p class="text-muted-foreground text-xl text-pretty">
					Setiap divisi memiliki peran penting dalam mencapai tujuan organisasi dan memberdayakan
					anggota.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				{#each divisions as division, index}
					{@const colSpan =
						index === 4
							? 'md:col-span-3'
							: index === 0 || index === 3
								? 'md:col-span-2'
								: 'md:col-span-1'}
					<div
						class="group bg-card/80 ring-border shadow-primary flex flex-col justify-center rounded-2xl p-8 ring-1 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md {colSpan}"
						in:fly={{ y: 30, duration: 600, delay: 100 * index, easing: quintOut }}
					>
						<h3
							class="text-card-foreground group-hover:text-primary text-2xl font-semibold transition-colors"
						>
							{division.name}
						</h3>
						<p class="text-muted-foreground mt-3 text-base leading-7">{division.description}</p>
					</div>
				{/each}
			</div>

			<div class="mt-16 flex justify-center">
				<Button size="lg" class="group text-white shadow-lg" href="/divisi">
					Lihat Semua Divisi
					<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
				</Button>
			</div>
		</div>
	</section>
</div>
