export interface Event {
	slug: string;
	title: string;
	category: 'Pelatihan' | 'Seminar' | 'Diskusi Ilmiah' | 'Olahraga' | 'Kolaborasi';
	date: string;
	description: string;
	coverImage: string;
	details: string;
	gallery: string[];
}

export const events: Event[] = [
	{
		slug: 'pelatihan-website-anggota-himti',
		title: 'Pelatihan Website untuk Anggota HIMTI',
		category: 'Pelatihan',
		date: '15 Agustus 2025',
		description:
			'Pelatihan intensif pembuatan website modern menggunakan teknologi terkini untuk anggota internal HIMTI.',
		coverImage:
			'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
		details:
			'Kegiatan ini bertujuan untuk meningkatkan kompetensi teknis anggota HIMTI dalam bidang pengembangan web. Materi mencakup HTML, CSS, JavaScript, dan pengenalan framework SvelteKit untuk membangun aplikasi web yang cepat dan efisien.',
		gallery: [
			'https://images.unsplash.com/photo-1556761175-b413da4b248a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600'
		]
	},
	{
		slug: 'pelatihan-website-kader',
		title: 'Pelatihan Website untuk Kader HIMTI',
		category: 'Pelatihan',
		date: '22 Agustus 2025',
		description:
			'Pembekalan dasar-dasar pengembangan web bagi para kader baru HIMTI sebagai bagian dari proses regenerasi.',
		coverImage:
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
		details:
			'Kaderisasi merupakan pilar penting organisasi. Pelatihan ini memberikan fondasi yang kuat bagi calon anggota untuk memahami alur kerja pengembangan website, mulai dari konsep dasar hingga praktik langsung.',
		gallery: [
			'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1531482615713-2c657695c282?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600'
		]
	},
	{
		slug: 'seminar-it-goes-to-school',
		title: 'Seminar: IT Goes to School',
		category: 'Seminar',
		date: '05 September 2025',
		description:
			'HIMTI berbagi pengetahuan tentang tren teknologi dan literasi digital kepada siswa-siswi SMA/SMK.',
		coverImage:
			'https://images.unsplash.com/photo-1560439538-519346413665?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
		details:
			'Sebagai bentuk pengabdian kepada masyarakat, HIMTI menyelenggarakan seminar di berbagai sekolah untuk memperkenalkan dunia Teknologi Informasi, prospek karir, dan pentingnya keamanan siber di kalangan remaja.',
		gallery: [
			'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1549213783-8284d0336c4f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600'
		]
	},
	{
		slug: 'seminar-kolaborasi-himatek-imakom',
		title: 'Seminar Kolaborasi HIMTI, HIMATEK & IMAKOM',
		category: 'Kolaborasi',
		date: '12 September 2025',
		description:
			'Seminar akbar yang menyatukan tiga himpunan mahasiswa untuk membahas sinergi antar disiplin ilmu di industri 4.0.',
		coverImage:
			'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
		details:
			'Sebuah inisiatif besar untuk membangun jembatan antara Teknologi Informasi, Teknik Elektro, dan Ilmu Komputer. Seminar ini menghadirkan para pakar industri untuk memberikan wawasan tentang bagaimana kolaborasi multidisiplin menjadi kunci inovasi di masa depan.',
		gallery: [
			'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600'
		]
	},
	{
		slug: 'himti-sport-badminton',
		title: 'HIMTI Sport: Turnamen Badminton',
		category: 'Olahraga',
		date: '20 September 2025',
		description:
			'Ajang kompetisi dan silaturahmi antar anggota HIMTI melalui turnamen badminton yang seru dan kompetitif.',
		coverImage:
			'https://images.unsplash.com/photo-1521587514332-686913b83f0b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
		details:
			'Tidak hanya fokus pada bidang akademik dan teknis, HIMTI juga mendorong gaya hidup sehat dan kebersamaan melalui kegiatan olahraga. Turnamen ini bertujuan untuk mempererat tali persaudaraan antar angkatan.',
		gallery: [
			'https://images.unsplash.com/photo-1574269584281-9b6d5145c225?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
			'https://images.unsplash.com/photo-1629681123439-16c43425a17a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600'
		]
	}
];
