<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const navItems = [
		{ name: 'Beranda', href: '/' },
		{ name: 'Kepengurusan', href: '/kepengurusan' },
		{ name: 'Divisi', href: '/divisi' },
		{ name: 'Event', href: '/event' },
		{ name: 'Berita', href: '/berita' }
	];

	let scrolled = false;

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	class="
    fixed top-0 left-0 z-50
    w-full transition-colors
    duration-300 ease-in-out
    {scrolled ? 'bg-off-white brutal-shadow border-dark-black border-b-3' : 'bg-transparent'}
    hidden p-4
    font-bold md:block
  "
>
	<nav class="mx-auto flex max-w-7xl items-center justify-between">
		<a href="/" class="flex items-center gap-2 {scrolled ? 'text-dark-black' : 'text-off-white'}">
			<img src="/logo/logo-himti.png" alt="Logo Himti" class="h-14 w-auto" />
			<div>
				<span class="hidden text-3xl md:block">HIMTI</span>
				<p class="text-sm">Himpunan Mahasiswa Teknologi Informasi</p>
			</div>
		</a>

		<ul class="flex gap-4">
			{#each navItems as item}
				<li class="relative">
					<a
						href={item.href}
						class="
              border-dark-black brutal-shadow hover:bg-pastel-yellow hover:text-dark-black
              block rounded-lg
              border-4
              px-6 py-2 transition-all
              duration-150 ease-in-out active:translate-x-1
              active:translate-y-1 active:shadow-none
              {item.href === $page.url.pathname
							? 'bg-pastel-yellow text-dark-black'
							: 'bg-pastel-blue text-dark-black'}
            "
					>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
