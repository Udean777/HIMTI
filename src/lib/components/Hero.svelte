<script lang="ts">
	import { ArrowRight, Code } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<section
	id="beranda"
	class="from-primary/20 via-background to-background relative w-full overflow-hidden bg-gradient-to-br py-24 lg:py-32"
>
	<div
		class="from-primary/30 to-secondary/20 absolute top-20 right-20 -z-10 h-72 w-72 rounded-full bg-gradient-to-br blur-3xl"
	></div>
	<div
		class="from-accent/10 to-primary/30 absolute bottom-20 left-20 -z-10 h-96 w-96 rounded-full bg-gradient-to-br blur-3xl"
	></div>

	<div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div class="space-y-8">
				<div class="space-y-6">
					<div
						class="bg-primary inline-flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium text-white"
					>
						<Code class="h-4 w-4" />
						<span>Himpunan Mahasiswa Teknologi Informasi</span>
					</div>
					<h1 class="text-4xl leading-tight font-bold text-balance lg:text-6xl">
						Bergabunglah dengan
						<span class="text-primary"> HIMTI UNPAB </span>
					</h1>
					<p class="text-muted-foreground text-xl leading-relaxed text-pretty">
						Wadah mahasiswa Teknologi Informasi untuk mengembangkan potensi, berbagi ilmu, dan
						membangun jaringan profesional di era digital.
					</p>
				</div>

				<div class="flex flex-col gap-4 sm:flex-row">
					<Button size="lg" class="group text-white shadow-lg">
						Daftar Sekarang
						<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
					</Button>
					<Button size="lg" variant="outline">Pelajari Lebih Lanjut</Button>
				</div>
			</div>

			<div class="relative">
				<div
					class="border-primary/20 bg-primary/10 shadow-primary relative rounded-3xl border p-2 shadow-2xl backdrop-blur-sm md:h-96"
				>
					<img
						src="/himti-1.png"
						alt="Aktivitas Mahasiswa HIMTI"
						loading="lazy"
						class="h-auto w-full rounded-2xl object-cover md:h-full"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
