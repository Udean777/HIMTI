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
			href: 'https://www.tiktok.com/@himtiunpab'
		},
		{
			name: 'Facebook',
			icon: 'hugeicons--facebook-02',
			href: 'https://www.facebook.com/profile.php?id=61575473677944'
		},
		{
			name: 'YouTube',
			icon: 'hugeicons--youtube',
			href: 'https://youtube.com/@himtiunpab'
		}
	];
</script>

<footer class="bg-slate-900 text-slate-300">
	<div class="mx-auto w-full max-w-7xl px-8">
		<div class="flex flex-col items-center justify-center gap-12 py-16 md:flex-row">
			<div class="text-left">
				<div class="flex items-center justify-center gap-3">
					<img src="/logo-himti.png" alt="Logo Himti" class="h-12 w-12" />
					<div>
						<h2 class="text-2xl font-semibold text-white">HIMTI</h2>
						<p class="text-sm text-slate-400">Himpunan Mahasiswa Teknologi Informasi</p>
					</div>
				</div>
				<p class="mt-4 max-w-xs text-justify text-sm text-slate-400">
					Organisasi mahasiswa yang berfokus pada pengembangan inovasi dan kolaborasi di bidang
					teknologi.
				</p>
			</div>
		</div>

		<div
			class="flex flex-col-reverse items-center justify-between gap-4 border-t border-slate-700 py-6 sm:flex-row"
		>
			<p class="text-sm text-slate-400">&copy; {currentYear} HIMTI. All rights reserved.</p>

			<div class="flex items-center gap-6">
				{#each socialLinks as link}
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.name}
						class="text-slate-400 transition-colors hover:text-white"
					>
						<span class="inline-block h-6 w-6 text-white {link.icon}"></span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
