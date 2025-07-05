<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Button from './Button.svelte';
	import Typewriter from './Typewriter.svelte';

	export let title = 'HIMTI';
	export let imageUrl = '/himti-1.png'; // URL gambar asli
	export let typeWriterText =
		'Halaman ini memuat seluruh struktur organisasi kepengurusan dari HIMTI';

	let sectionRef: HTMLElement; // Referensi ke elemen section
	let backgroundImageLoaded = false; // Status untuk melacak apakah gambar sudah dimuat

	let observer: IntersectionObserver;

	onMount(() => {
		if (sectionRef) {
			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting && !backgroundImageLoaded) {
							// Ketika section masuk viewport dan gambar belum dimuat
							backgroundImageLoaded = true; // Setel status menjadi dimuat
							observer.unobserve(sectionRef); // Berhenti mengamati setelah dimuat
						}
					});
				},
				{
					rootMargin: '0px 0px 50px 0px' // Muat 50px sebelum section masuk viewport
				}
			);

			observer.observe(sectionRef);
		}
	});

	onDestroy(() => {
		if (observer && sectionRef) {
			observer.unobserve(sectionRef);
		}
	});
</script>

<section
	bind:this={sectionRef}
	class="
      text-off-white relative flex h-screen flex-col items-center
      justify-center overflow-hidden px-8 pt-20 text-center
    "
>
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('{backgroundImageLoaded ? imageUrl : ''}');"
		role="img"
		aria-label="Gambar Kepengurusan HIMTI 2024/2025"
	>
		<div class="bg-dark-black absolute inset-0 opacity-50"></div>
	</div>

	<div
		class="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 md:flex-row"
	>
		<div class="w-full text-left md:w-1/2">
			<h1 class="brutal-text-stroke mb-6 text-6xl font-extrabold">{title}</h1>
			<div
				class="brutal-shadow bg-pastel-yellow border-dark-black text-dark-black mb-8
                flex min-h-[80px] w-[20rem] max-w-lg border-4 p-4 lg:w-[40rem]"
			>
				<Typewriter text={typeWriterText} speed={50} delay={1000} />
			</div>

			<slot name="action" />
		</div>
		<div class="hidden w-1/3 md:block">
			<img
				src="/logo/logo-himti.png"
				alt="Logo Himti"
				loading="lazy"
				width="256"
				height="256"
				class="mx-auto h-auto w-64 sm:w-80 md:w-full"
			/>
		</div>
	</div>
</section>
