<script>
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			name: 'Instagram',
			icon: 'hugeicons--instagram',
			href: 'https://www.instagram.com/himtiunpab'
		},
		{
			name: 'TikTok',
			icon: 'hugeicons--tiktok',
			href: 'https://www.tiktok.com/@himtiunpab?_t=ZS-8vnTpERe9Kc&_r=1'
		},
		{
			name: 'Facebook',
			icon: 'hugeicons--facebook-02',
			href: 'https://www.facebook.com/profile.php?id=61575473677944'
		},
		{
			name: 'YouTube',
			icon: 'hugeicons--youtube',
			href: 'https://youtube.com/@himtiunpab?si=b2-oFcE0bvBBXfXr'
		}
	];
</script>

<footer
	class="bg-dark-black text-off-white border-pastel-yellowmt-16 items-centerpx-8 flex
         flex-col py-10 text-center font-bold"
>
	<div class="mx-auto flex w-full max-w-7xl flex-col items-center justify-between md:flex-row">
		<!-- <div class="mb-6">
			<h3 class="text-pastel-yellow mb-4 text-xl">Tautan</h3>
			<ul class="flex flex-col justify-center gap-x-6 gap-y-2">
				<li><a href="/" class="hover:text-pastel-blue transition-colors">Beranda</a></li>
				<li>
					<a href="/kepengurusan" class="hover:text-pastel-blue transition-colors">Kepengurusan</a>
				</li>
				<li><a href="/divisi" class="hover:text-pastel-blue transition-colors">Divisi</a></li>
				<li><a href="/event" class="hover:text-pastel-blue transition-colors">Event</a></li>
				<li><a href="/berita" class="hover:text-pastel-blue transition-colors">Kontak</a></li>
			</ul>
		</div> -->

		<div class="mb-6 flex flex-col items-center">
			<img src="/logo/logo-himti.png" alt="Logo Himti" class="mb-2 h-20 w-20" />
			<span class="text-off-white text-3xl">HIMTI</span>
			<p class="mt-1 text-sm">Himpunan Mahasiswa Teknologi Informasi</p>
		</div>

		<div class="mb-6">
			<h3 class="brutal-text-stroke text-pastel-yellow text-xl">Ikuti Kami</h3>
			<div class="flex justify-center gap-6 my-3">
				{#each socialLinks as link}
					<a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
						<span class={link.icon}></span>
					</a>
				{/each}
			</div>
			<p class="text-sm">
				&copy; {currentYear} HIMTI. All rights reserved.
			</p>
		</div>
	</div>
</footer>
