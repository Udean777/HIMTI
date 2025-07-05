<script>
	import Button from './Button.svelte';
	import Typewriter from './Typewriter.svelte';

	export let title = 'HIMTI';
	export let imageUrl = '/himti-1.png';
	export let typeWriterText =
		'Halaman ini memuat seluruh struktur organisasi kepengurusan dari HIMTI';
</script>

<section
	class="
      text-off-white relative flex h-screen flex-col items-center
      justify-center overflow-hidden px-8 pt-20 text-center
    "
>
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('{imageUrl}');"
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
				class="mx-auto h-auto w-64 sm:w-80 md:w-full"
			/>
		</div>
	</div>
</section>
