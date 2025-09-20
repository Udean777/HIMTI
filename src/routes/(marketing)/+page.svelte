<script>
	import Button from '$lib/components/Button.svelte';
	import Hero from '$lib/components/Hero.svelte';

	const divisions = [
		{
			name: 'Divisi Humas',
			description:
				'Bertugas membangun dan menjaga hubungan baik antara HIMTI dengan pihak internal maupun eksternal, serta mengelola komunikasi dan publikasi kegiatan organisasi.'
		},
		{
			name: 'Divisi Prestasi',
			description:
				'Fokus pada pengembangan prestasi anggota melalui penyelenggaraan lomba, pelatihan, serta mendukung partisipasi dalam kompetisi di bidang teknologi informasi.'
		},
		{
			name: 'Divisi IPTEK',
			description:
				'Mengelola program pengembangan ilmu pengetahuan dan teknologi, seperti workshop, seminar, dan mentoring untuk meningkatkan kompetensi anggota.'
		},
		{
			name: 'Divisi Kominfo',
			description:
				'Bertanggung jawab atas pengelolaan informasi, dokumentasi, serta media sosial HIMTI untuk memastikan informasi tersampaikan dengan baik kepada seluruh anggota.'
		},
		{
			name: 'Divisi Danus',
			description:
				'Mengelola dana usaha dan sumber daya organisasi melalui berbagai kegiatan kewirausahaan guna mendukung operasional HIMTI.'
		}
	];

	const misiList = [
		{
			title: 'Pengembangan Kompetensi',
			description:
				'Menyediakan pelatihan, seminar, dan workshop untuk meningkatkan keterampilan teknis dan non-teknis anggota, sehingga mereka siap menghadapi tantangan di dunia kerja.'
		},
		{
			title: 'Kolaborasi dan Jaringan',
			description:
				'Membangun jaringan yang kuat antara mahasiswa, alumni, dan profesional di bidang teknologi informasi untuk saling berbagi pengetahuan, pengalaman, dan peluang.'
		},
		{
			title: 'Inovasi dan Kreativitas',
			description:
				'Mendorong anggota untuk berinovasi dan menciptakan proyek yang dapat memberikan dampak positif bagi masyarakat, serta memfasilitasi kompetisi dan hackathon.'
		},
		{
			title: 'Kegiatan Sosial',
			description:
				'Mengadakan kegiatan sosial yang bertujuan untuk memberikan kontribusi kepada masyarakat dan meningkatkan kesadaran akan pentingnya teknologi informasi dalam kehidupan sehari-hari.'
		},
		{
			title: 'Dukungan Akademis',
			description:
				'Menjadi wadah bagi anggota untuk saling mendukung dalam hal akademis, termasuk bimbingan belajar, diskusi kelompok, dan penyediaan sumber daya belajar.'
		},
		{
			title: 'Peningkatan Kesadaran Teknologi',
			description:
				'Mengedukasi masyarakat tentang pentingnya teknologi informasi dan dampaknya, serta mempromosikan penggunaan teknologi yang bertanggung jawab.'
		}
	];
</script>

<div>
	<!-- Hero Section -->
	<Hero
		title="HIMTI"
		typeWriterText="Selamat datang di Website Himpunan Mahasiswa Teknologi Informasi👋🏻"
	>
		<div slot="action">
			<Button text="Gabung Sekarang" color="bg-pastel-blue" textColor="text-dark-black" />
		</div>
	</Hero>

	<!-- About Section -->
	<section class="container mx-auto max-w-7xl px-8 py-20">
		<h2 class="mb-12 text-center text-5xl font-extrabold">Tentang Kami</h2>

		<div class="border-dark-black brutal-shadow-lg bg-pastel-blue text-dark-black border-4 p-10">
			<p class="text-center text-lg leading-relaxed">
				Himpunan Mahasiswa Teknologi Informasi (HIMTI) berkomitmen untuk menjadi organisasi
				mahasiswa yang terdepan dalam pengembangan teknologi informasi di lingkungan akademik maupun
				masyarakat luas. Kami percaya bahwa kemajuan teknologi harus selaras dengan nilai-nilai
				sosial dan tanggung jawab profesional. Oleh karena itu, HIMTI berupaya tidak hanya
				menciptakan inovasi yang berdampak positif bagi masyarakat dan industri, tetapi juga
				membangun ekosistem yang mendorong kolaborasi, kreativitas, dan kepemimpinan.
			</p>
		</div>
	</section>

	<!-- Visi -->
	<section class="container mx-auto max-w-7xl px-8 py-20">
		<h2 class="brutal-text-stroke mb-12 text-center text-5xl font-extrabold">Visi</h2>
		<div class="border-dark-black brutal-shadow bg-pastel-yellow text-dark-black border-4 p-8">
			<h3 class="mb-4 text-3xl font-bold">Visi</h3>
			<p class="text-lg leading-relaxed">
				Menjadi organisasi mahasiswa terdepan dalam pengembangan teknologi informasi yang
				berkontribusi positif bagi masyarakat dan industri, serta menciptakan lingkungan yang
				mendukung pertumbuhan profesional dan pribadi anggotanya.
			</p>
		</div>
	</section>

	<!-- Misi -->
	<section class="container mx-auto max-w-7xl px-8 py-20">
		<h2 class="mb-12 text-center text-5xl font-extrabold">Misi</h2>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each misiList as misi, index}
				<div
					class="border-dark-black brutal-shadow hover:brutal-shadow-lg text-dark-black
                transform border-4
                p-6 transition-transform
                hover:-translate-y-2
                {index % 2 === 0 ? 'bg-pastel-yellow' : 'bg-pastel-blue'}
                "
				>
					<div
						class="
                        brutal-shadow-sm
                        text-dark-black
                        border-dark-black relative
                        -top-4 -left-4 flex h-12 w-12 items-center
                        justify-center border-4 text-2xl font-extrabold
                        {index % 2 === 0 ? 'bg-pastel-blue' : 'bg-pastel-yellow'}"
					>
						{index + 1}
					</div>
					<h3 class="mt-4 mb-4 text-2xl font-bold">{misi.title}</h3>
					<p class="text-base leading-relaxed">{misi.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Divisi -->
	<section class="container mx-auto max-w-7xl px-8 py-20">
		<h2 class="mb-12 text-center text-5xl font-extrabold">Divisi Kami</h2>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each divisions as division, index}
				<div
					class="border-dark-black brutal-shadow-sm hover:brutal-shadow-lg
                    text-dark-black transform
                     border-4 p-6 transition-transform hover:-translate-y-2
                     {index % 2 === 0 ? 'bg-pastel-yellow' : 'bg-pastel-blue'}"
				>
					<h3 class="mb-2 text-2xl font-bold">{division.name}</h3>
					<p class="mb-4 text-base">{division.description}</p>
					<a href="/divisi" class="font-bold underline transition-colors hover:text-blue-500">
						Lihat Detail &rarr;</a
					>
				</div>
			{/each}
		</div>
	</section>
</div>
