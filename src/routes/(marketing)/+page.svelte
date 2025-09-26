<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { ArrowRight, FileText, Lightbulb, Users } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { kepengurusan } from '$lib/dummy';

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
				observer.disconnect();
			}
		};
	}

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
			icon: FileText
		},
		{
			title: 'Kolaborasi dan Jaringan',
			description:
				'Membangun jaringan yang kuat antara mahasiswa, alumni, dan profesional di bidang teknologi.',
			icon: Users
		},
		{
			title: 'Inovasi dan Kreativitas',
			description:
				'Mendorong anggota untuk berinovasi dan menciptakan proyek yang dapat memberikan dampak positif.',
			icon: Lightbulb
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
			class="bg-card shadow-primary ring-border animate-fly-up my-16 rounded-2xl p-8 text-center shadow-lg ring-1"
			use:animateOnScroll
		>
			<p class="text-muted-foreground text-lg leading-8">
				Kami berupaya membangun ekosistem yang mendorong kolaborasi, kreativitas, dan kepemimpinan
				di antara anggota untuk menghadapi tantangan teknologi masa depan.
			</p>
		</div>

		<div class="mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button size="lg" class="group text-white shadow-lg" href="/berita">
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
						class="bg-card ring-border shadow-primary animate-fly-up flex flex-col rounded-2xl p-8 ring-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
						use:animateOnScroll
						style="--delay: {150 * index}ms;"
					>
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
						class="group bg-card ring-border animate-fly-up flex flex-col items-center rounded-2xl p-6 text-center shadow-lg ring-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
						use:animateOnScroll
						style="--delay: {100 * index}ms;"
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
						class="group bg-card/80 ring-border shadow-primary flex flex-col justify-center rounded-2xl p-8 ring-1 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md {colSpan} animate-fly-up"
						use:animateOnScroll
						style="--delay: {100 * index}ms;"
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
		animation-duration: 800ms;
		animation-delay: var(--delay);
		animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
		animation-fill-mode: both;
		animation-play-state: paused;
	}

	.start-animation {
		animation-play-state: running;
	}
</style>
