<script>
	import { page } from '$app/stores';

	const navItems = [
		{ name: 'Beranda', href: '/', iconClass: 'material-symbols--home-rounded' },
		{ name: 'Kepengurusan', href: '/kepengurusan', iconClass: 'material-symbols--home-rounded' },
		{ name: 'Divisi', href: '/divisi', iconClass: 'material-symbols--home-rounded' },
		{ name: 'Event', href: '/event', iconClass: 'material-symbols--home-rounded' },
		{ name: 'Berita', href: '/berita', iconClass: 'material-symbols--home-rounded' }
	];
</script>

<nav
	class="
    bg-off-white border-dark-black brutal-shadow text-dark-black fixed
    bottom-0 left-0 z-50 flex
    w-full items-center justify-around border-t-3 px-1
    py-2 lg:hidden xl:hidden
    2xl:hidden
  "
>
	{#each navItems as item}
		<a
			href={item.href}
			class="
        mx-1 flex flex-grow flex-col items-center
        justify-center rounded-lg border-2
        border-transparent p-2 transition-colors
        duration-150 ease-in-out
        {item.href === $page.url.pathname
				? 'bg-pastel-yellow brutal-shadow-sm border-dark-black'
				: 'bg-pastel-blue brutal-shadow-sm border-dark-black'}
      "
		>
			<!-- <span class="text-2xl">
				<span class={item.iconClass}></span>
			</span> -->
			<span class="mt-1 text-xs leading-none font-bold">{item.name}</span>
		</a>
	{/each}
</nav>
