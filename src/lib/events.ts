export interface NewsArticle {
	slug: string;
	title: string;
	category: 'Teknologi' | 'Prestasi' | 'Kegiatan' | 'Info Kampus';
	date: string;
	coverImage: string;
	excerpt: string;
	details?: string;
	gallery?: string[];
}

export const allArticles: NewsArticle[] = [
	{
		slug: 'mengenal-himti-unpab',
		title: 'Mengenal HIMTI UNPAB: Wadah Inovasi dan Kolaborasi Mahasiswa TI',
		category: 'Info Kampus',
		date: '01 Oktober 2025',
		coverImage: '/himti-1.png',
		excerpt:
			'HIMTI adalah organisasi yang mewadahi seluruh mahasiswa Teknologi Informasi di UNPAB untuk mengembangkan potensi, kreativitas, dan kepemimpinan.',
		details: `
      <p class="text-xl leading-7 [&:not(:first-child)]:mt-6">
        Himpunan Mahasiswa Teknologi Informasi (HIMTI) adalah organisasi mahasiswa yang mewadahi seluruh mahasiswa program studi Teknologi Informasi di Universitas Pembangunan Panca Budi (UNPAB). HIMTI diresmikan pada Tanggal 1 Oktober 2025.
      </p>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        HIMTI hadir sebagai sarana untuk mengembangkan potensi akademik, keterampilan, kreativitas, dan kepemimpinan mahasiswa, serta menjadi jembatan komunikasi antara mahasiswa, dosen, dan pihak kampus.
      </p>
      <h2 class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Tiga Pilar Utama HIMTI
      </h2>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Sebagai sebuah Organisasi, HIMTI berfokus pada tiga pilar utama:
      </p>
      <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Akademik</h3>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Mendukung pengembangan ilmu pengetahuan, riset, serta kompetensi mahasiswa di bidang teknologi informasi.
      </p>
      <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Pengembangan Diri</h3>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Membangun soft skill, kepemimpinan, manajemen organisasi, dan kerja sama tim.
      </p>
      <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Pengabdian Masyarakat</h3>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Berkontribusi nyata melalui kegiatan sosial dan penerapan teknologi untuk memberikan manfaat bagi masyarakat luas.
      </p>
      <blockquote class="mt-6 border-l-2 pl-6 italic">
        "Dengan semangat kebersamaan, HIMTI berkomitmen menjadi wadah yang aktif, inovatif, dan kolaboratif, serta mencetak generasi muda yang berdaya saing tinggi di era digital."
      </blockquote>
      <h2 class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Peran & Manfaat HIMTI
      </h2>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><strong>Bagi Mahasiswa:</strong> wadah aspirasi, pengembangan diri, dan jejaring.</li>
        <li><strong>Bagi Program Studi:</strong> mitra strategis dalam mendukung kegiatan akademik & non-akademik.</li>
        <li><strong>Bagi Masyarakat:</strong> sarana kontribusi nyata melalui penerapan ilmu teknologi informasi.</li>
      </ul>
    `,
		gallery: []
	},
	{
		slug: 'himti-sport-badminton',
		title: 'HIMTI Sport: Turnamen Badminton',
		category: 'Kegiatan',
		date: '20 September 2025',
		coverImage:
			'https://images.unsplash.com/photo-1521587514332-686913b83f0b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
		excerpt:
			'Ajang kompetisi dan silaturahmi antar anggota HIMTI melalui turnamen badminton yang seru dan kompetitif.',
		details:
			'Tidak hanya fokus pada bidang akademik dan teknis, HIMTI juga mendorong gaya hidup sehat dan kebersamaan melalui kegiatan olahraga. Turnamen ini bertujuan untuk mempererat tali persaudaraan antar angkatan.',
		gallery: [
			'https://images.unsplash.com/photo-1574269584281-9b6d5145c225?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1629681123439-16c43425a17a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600'
		]
	},
	{
		slug: 'seminar-kolaborasi-himatek-imakom',
		title: 'Seminar Kolaborasi HIMTI, HIMATEK & IMAKOM',
		category: 'Kegiatan',
		date: '12 September 2025',
		coverImage:
			'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/seminar%20kolaborasi.jpeg?updatedAt=1758807967110',
		excerpt:
			'Seminar akbar yang menyatukan tiga himpunan mahasiswa untuk membahas sinergi antar disiplin ilmu di industri 4.0.',
		details:
			'Sebuah inisiatif besar untuk membangun jembatan antara Teknologi Informasi, Teknik Elektro, dan Ilmu Komputer. Seminar ini menghadirkan para pakar industri untuk memberikan wawasan tentang bagaimana kolaborasi multidisiplin menjadi kunci inovasi di masa depan.',
		gallery: [
			'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600'
		]
	},
	{
		slug: 'seminar-it-goes-to-school',
		title: 'Seminar: IT Goes to School',
		category: 'Kegiatan',
		date: '05 September 2025',
		coverImage:
			'https://images.unsplash.com/photo-1560439538-519346413665?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
		excerpt:
			'HIMTI berbagi pengetahuan tentang tren teknologi dan literasi digital kepada siswa-siswi SMA/SMK.',
		details:
			'Sebagai bentuk pengabdian kepada masyarakat, HIMTI menyelenggarakan seminar di berbagai sekolah untuk memperkenalkan dunia Teknologi Informasi, prospek karir, dan pentingnya keamanan siber di kalangan remaja.',
		gallery: [
			'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1549213783-8284d0336c4f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600'
		]
	},
	{
		slug: 'pelatihan-website-kader',
		title: 'Pelatihan Website untuk Kader HIMTI',
		category: 'Kegiatan',
		date: '22 Agustus 2025',
		coverImage:
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
		excerpt:
			'Pembekalan dasar-dasar pengembangan web bagi para kader baru HIMTI sebagai bagian dari proses regenerasi.',
		details:
			'Kaderisasi merupakan pilar penting organisasi. Pelatihan ini memberikan fondasi yang kuat bagi calon anggota untuk memahami alur kerja pengembangan website, mulai dari konsep dasar hingga praktik langsung.',
		gallery: [
			'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1531482615713-2c657695c282?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600'
		]
	},
	{
		slug: 'pelatihan-website-anggota-himti',
		title: 'Pelatihan Website untuk Anggota HIMTI',
		category: 'Kegiatan',
		date: '15 Agustus 2025',
		coverImage:
			'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
		excerpt:
			'Pelatihan intensif pembuatan website modern menggunakan teknologi terkini untuk anggota internal HIMTI.',
		details:
			'Kegiatan ini bertujuan untuk meningkatkan kompetensi teknis anggota HIMTI dalam bidang pengembangan web. Materi mencakup HTML, CSS, JavaScript, dan pengenalan framework SvelteKit untuk membangun aplikasi web yang cepat dan efisien.',
		gallery: [
			'https://images.unsplash.com/photo-1556761175-b413da4b248a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600'
		]
	}
];
