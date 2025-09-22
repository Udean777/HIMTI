<script lang="ts">
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { Menu, X } from 'lucide-svelte'; // Ikon untuk tombol hamburger
	import DarkModeToggle from './DarkModeToggle.svelte';

	const navItems = [
		{ name: 'Beranda', href: '/' },
		{ name: 'Kepengurusan', href: '/kepengurusan' },
		{ name: 'Divisi', href: '/divisi' },
		{ name: 'Event', href: '/event' },
		{ name: 'Berita', href: '/berita' }
	];

	let scrolled = false;
	let isOpen = false;

	const handleScroll = () => {
		scrolled = window.scrollY > 50;
	};

	const toggleMenu = () => {
		isOpen = !isOpen;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	class="fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out"
	class:scrolled={scrolled || isOpen}
>
	<nav class="relative container mx-auto flex max-w-7xl items-center justify-between p-4">
		<a href="/" class="text-foreground z-10 flex items-center gap-3">
			<img src="/logo/logo-himti.png" alt="Logo Himti" class="h-12 w-auto" />
			<div>
				<span class="text-2xl font-bold">HIMTI</span>
				<p class="text-muted-foreground text-xs">Himpunan Mahasiswa Teknologi Informasi</p>
			</div>
		</a>

		<ul class="hidden items-center gap-2 md:flex">
			{#each navItems as item}
				<li>
					<a
						href={item.href}
						class="text-md hover:text-primary rounded-md px-4 py-2 font-medium transition-colors"
						class:text-primary={$page.url.pathname === item.href}
					>
						{item.name}
					</a>
				</li>
			{/each}
			<li class="ml-4">
				<DarkModeToggle />
			</li>
		</ul>

		<div class="z-10 flex items-center gap-2 md:hidden">
			<DarkModeToggle />
			<button
				on:click={toggleMenu}
				aria-label="Toggle Menu"
				class="text-foreground hover:bg-accent rounded-md p-2 transition-colors"
			>
				{#if isOpen}
					<X class="h-6 w-6" />
				{:else}
					<Menu class="h-6 w-6" />
				{/if}
			</button>
		</div>
	</nav>

	{#if isOpen}
		<div
			transition:slide={{ duration: 300, easing: quintOut }}
			class="border-border bg-background absolute top-full left-0 w-full border-b md:hidden"
		>
			<ul class="flex flex-col">
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class="border-border hover:bg-accent block border-t px-6 py-4 text-center font-medium transition-colors"
							class:active={$page.url.pathname === item.href}
							on:click={() => (isOpen = false)}
						>
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>

<style>
	/* Gaya ini akan berlaku untuk link aktif di desktop dan mobile */
	.active {
		color: hsl(var(--primary));
		font-weight: 600; /* semi-bold */
	}

	/* Saat menu mobile terbuka atau saat di-scroll, berikan background */
	.scrolled {
		background-color: hsl(var(--background) / 0.8);
		border-bottom: 1px solid hsl(var(--border) / 0.5);
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		backdrop-filter: blur(8px);
	}
</style>
