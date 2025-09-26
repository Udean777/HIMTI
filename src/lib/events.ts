export interface GallerySection {
	title: string;
	images: string[];
}

export interface NewsArticle {
	slug: string;
	title: string;
	category: 'Teknologi' | 'Prestasi' | 'Kegiatan' | 'Info Kampus';
	date: string;
	coverImage: string;
	excerpt: string;
	details?: string;
	gallery?: GallerySection[];
	instagramPostUrl?: string;
}

export const allArticles: NewsArticle[] = [
	{
		slug: 'mengenal-himti-unpab',
		title: 'Mengenal HIMTI UNPAB: Wadah Inovasi dan Kolaborasi Mahasiswa TI',
		category: 'Info Kampus',
		date: '26 September 2025',
		coverImage: '/himti-1.png',
		excerpt:
			'HIMTI adalah organisasi yang mewadahi seluruh mahasiswa Teknologi Informasi di UNPAB untuk mengembangkan potensi, kreativitas, dan kepemimpinan.',
		details: `
      <p class="text-xl leading-7 [&:not(:first-child)]:mt-6">
        Himpunan Mahasiswa Teknologi Informasi (HIMTI) adalah organisasi mahasiswa yang mewadahi seluruh mahasiswa program studi Teknologi Informasi di Universitas Pembangunan Panca Budi (UNPAB). HIMTI diresmikan pada Tanggal 30 September 2025.
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
		date: '26 September 2025',
		coverImage:
			'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/himti-sport.jpeg?updatedAt=1758891541426',
		excerpt:
			'Ajang kompetisi dan silaturahmi antar anggota HIMTI melalui turnamen badminton yang seru dan kompetitif.',
		details: `
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Tidak hanya fokus pada bidang akademik dan teknis, HIMTI juga mendorong gaya hidup sehat dan kebersamaan melalui kegiatan olahraga. Turnamen Badminton HIMTI menjadi salah satu program kerja unggulan dari departemen Minat dan Bakat yang bertujuan untuk mempererat tali persaudaraan antar angkatan.
      </p>
      <h2 class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Tujuan Kegiatan
      </h2>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Acara ini diselenggarakan dengan beberapa tujuan utama:
      </p>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Meningkatkan solidaritas dan rasa kekeluargaan di antara anggota HIMTI.</li>
        <li>Menjadi ajang penyaluran minat dan bakat di bidang olahraga.</li>
        <li>Mendorong gaya hidup sehat dan seimbang di tengah kesibukan akademik.</li>
        <li>Menjaring bibit-bibit atlet untuk mewakili program studi di ajang yang lebih tinggi.</li>
      </ul>
      <h2 class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Pelaksanaan dan Hasil
      </h2>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Turnamen diikuti oleh puluhan peserta yang terbagi dalam kategori tunggal putra dan ganda putra. Pertandingan berlangsung sengit namun tetap menjunjung tinggi sportivitas. Setelah melalui babak penyisihan hingga final, para pemenang diumumkan dan diberikan penghargaan sebagai bentuk apresiasi.
      </p>
      <blockquote class="mt-6 border-l-2 pl-6 italic">
        "Kemenangan bukanlah segalanya, yang terpenting adalah semangat juang dan kebersamaan yang kita bangun di lapangan. Sampai jumpa di HIMTI Sport selanjutnya!"
      </blockquote>
    `,
		gallery: [
			{
				title: 'Dokumentasi Turnamen',
				images: [
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/badminton1.jpeg?updatedAt=1758897127275',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/badminton2.jpeg?updatedAt=1758897128674',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/badminton3.jpeg?updatedAt=1758897135118',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/badminton4.jpeg?updatedAt=1758897135452'
				]
			}
		]
	},
	{
		slug: 'seminar-kolaborasi-himatek-imakom',
		title: 'Sukses Besar! Kuliah Umum Kolaborasi HIMTI, IMAKOM & HIMATEK',
		category: 'Kegiatan',
		date: '26 September 2025',
		coverImage:
			'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/seminar%20kolaborasi.jpeg?updatedAt=1758807967110',
		excerpt:
			'Kuliah umum bersama narasumber internasional, Marek Barilla, yang membahas tuntas rahasia sukses dalam manajemen proyek perangkat lunak.',
		instagramPostUrl: 'https://www.instagram.com/p/C39_332R4mB/',
		details: `
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Sebuah kolaborasi akbar antara <strong>HIMTI (Teknologi Informasi)</strong>, <strong>IMAKOM (Sistem Komputer)</strong>, dan <strong>HIMATEK (Ilmu Komputer)</strong> telah sukses menggelar Kuliah Umum dengan tajuk <strong>"Becoming a Successful Software Project Management: The Right Skills, Strategies, and Mindset"</strong>! 🚀💡
      </p>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Acara yang merupakan inisiatif bersama tiga himpunan mahasiswa di bawah naungan Fakultas Sains dan Teknologi ini berhasil menarik antusiasme tinggi dari mahasiswa dan kalangan akademisi. Acara dibuka dengan sambutan hangat dari Dekan Fakultas, yang memuji sinergi antar-program studi sebagai langkah strategis untuk menghadapi tantangan industri.
      </p>
      <h2 class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Wawasan Berharga dari Pakar Internasional 🔥
      </h2>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Puncak acara adalah sesi pemaparan materi oleh narasumber internasional, <strong>Marek Barilla</strong>. Beliau membagikan wawasan mendalam mengenai tiga pilar utama untuk menjadi manajer proyek yang sukses:
      </p>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><strong>The Right Skills:</strong> Kombinasi antara kemampuan teknis, komunikasi yang efektif, dan kepemimpinan yang kuat.</li>
        <li><strong>The Right Strategies:</strong> Penerapan metodologi Agile dan Scrum, serta teknik manajemen risiko yang proaktif.</li>
        <li><strong>The Right Mindset:</strong> Pentingnya memiliki pola pikir yang adaptif, fokus pada solusi, dan kemauan untuk terus belajar.</li>
      </ul>
      <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Kolaborasi dengan Dosen UNPAB</h3>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Sesi ini juga diperkaya dengan diskusi panel bersama para dosen UNPAB yang memberikan konteks lokal dan menjawab berbagai pertanyaan dari peserta, menciptakan diskusi yang dinamis dan relevan.
      </p>
      <blockquote class="mt-6 border-l-2 pl-6 italic">
        "Manajemen proyek yang hebat bukan tentang menghindari kegagalan, tetapi tentang bagaimana meresponsnya dengan cepat dan cerdas."
      </blockquote>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Terima kasih kami ucapkan kepada Marek Barilla, para dosen UNPAB, seluruh panitia dari HIMTI, IMAKOM, dan HIMATEK, serta seluruh peserta yang telah berpartisipasi dengan penuh semangat! Sampai jumpa di event inspiratif berikutnya! 😉✨
      </p>
      <div style="display: flex; justify-content: center; margin-top: 40px; margin-bottom: 20px;">
          <blockquote 
            class="instagram-media" 
            data-instgrm-permalink="https://www.instagram.com/p/C39_332R4mB/" 
            data-instgrm-version="14" 
            style="max-width:540px; width: calc(100% - 2px);">
          </blockquote>
      </div>
    `,
		gallery: [
			{
				title: 'Dokumentasi Kuliah Umum',
				images: [
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/seminar-collab1.jpeg?updatedAt=1758897168202',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/seminar-collab2.jpeg?updatedAt=1758897169177',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/seminar-collab3.jpeg?updatedAt=1758897169858',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/seminar-collab4.jpeg?updatedAt=1758897170895'
				]
			}
		]
	},
	{
		slug: 'seminar-it-goes-to-school',
		title: 'Roadshow HIMTI: IT Goes to School Series',
		category: 'Kegiatan',
		date: '26 September 2025',
		coverImage:
			'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/goes%20to%20school.jpeg?updatedAt=1758809154495',
		excerpt:
			'Rangkaian kunjungan HIMTI ke berbagai sekolah untuk berbagi pengetahuan tentang tren teknologi, mulai dari Metaverse, Animasi 3D, hingga literasi digital.',
		details: `
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Sebagai wujud nyata pilar Pengabdian Masyarakat, Prodi Teknologi Informasi UNPAB melalui HIMTI aktif menyelenggarakan program "IT Goes to School". Program ini merupakan roadshow ke berbagai Sekolah Menengah Kejuruan (SMK) untuk memperkenalkan dunia IT, membuka wawasan karir, dan membekali siswa dengan pengetahuan teknologi terkini.
      </p>
      <h2 class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Kunjungan ke SMKN 1 Stabat
      </h2>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        <strong>Tanggal:</strong> 19 Agustus 2025<br>
        <strong>Lokasi:</strong> SMKN 1 Stabat<br>
        Kegiatan seminar ini menjadi pembuka rangkaian roadshow, di mana para siswa diperkenalkan secara umum dengan Program Studi Teknologi Informasi UNPAB, prospek karir di dunia digital, dan pentingnya adaptasi teknologi.
      </p>
      <h2 class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Diskusi Ilmiah di SMK Telkom Medan
      </h2>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        <strong>Tanggal:</strong> 10 September 2025<br>
        <strong>Lokasi:</strong> SMK Telkom Medan<br>
        <strong>Tema:</strong> Digitalisasi Pembelajaran Berbasis Smart Class Metaverse<br>
      </p>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Diskusi ini diikuti oleh siswa/i untuk memperluas wawasan mengenai perkembangan teknologi pendidikan. Peserta mendapatkan pemahaman mendalam tentang:
      </p>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Konsep smart class berbasis metaverse.</li>
        <li>Transformasi digital dalam dunia pendidikan.</li>
        <li>Potensi pemanfaatan teknologi untuk pengalaman belajar yang interaktif dan imersif.</li>
      </ul>
      <blockquote class="mt-6 border-l-2 pl-6 italic">
        "Terima kasih kepada SMK Telkom Medan atas sambutan hangat dan kesempatan untuk berbagi ilmu. Semoga kegiatan ini mempererat hubungan akademik antara perguruan tinggi dan sekolah."
      </blockquote>
      <h2 class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Diskusi Ilmiah di SMK N 9 Medan
      </h2>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        <strong>Tanggal:</strong> 04 September 2025<br>
        <strong>Lokasi:</strong> SMK N 9 Medan<br>
        <strong>Tema:</strong> Penerapan Animasi 3D dalam Project Simulasi Pembelajaran Interaktif<br>
      </p>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Kegiatan ini memperkenalkan siswa/i pada pemanfaatan teknologi animasi 3D dalam dunia pendidikan. Melalui seminar ini, peserta diperkenalkan pada:
      </p>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Konsep dasar animasi 3D.</li>
        <li>Implementasi animasi sebagai media pembelajaran interaktif.</li>
        <li>Potensi pengembangan project digital dalam mendukung proses belajar mengajar.</li>
      </ul>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Harapannya, pengetahuan yang diperoleh dapat menjadi bekal bagi generasi muda untuk terus berinovasi serta beradaptasi dengan perkembangan teknologi di era digital. 🌐✨
      </p>
    `,
		gallery: [
			{
				title: 'Seminar di SMKN 1 Stabat',
				images: [
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/SnapInsta.to_548191829_17923247862116347_7488009901267928533_n.jpg?updatedAt=1758894669277',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/SnapInsta.to_548837290_17923247898116347_476644360602657000_n.jpg?updatedAt=1758894669311',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/SnapInsta.to_549206112_17923247859116347_1642647927285607660_n.jpg?updatedAt=1758894672285',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/SnapInsta.to_548477344_17923247880116347_8270686405634898916_n.jpg?updatedAt=1758894674302',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/SnapInsta.to_548721067_17923247889116347_6103138388853253986_n.jpg?updatedAt=1758894675620',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/SnapInsta.to_548927362_17923247877116347_8219566882834531271_n.jpg?updatedAt=1758894675609'
				]
			},
			{
				title: 'Diskusi Ilmiah di SMK Telkom Medan',
				images: [
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/smk1-telkom-1.HEIC?updatedAt=1758897886029',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/smk1-telkom-3.HEIC?updatedAt=1758897897573',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/smk1-telkom-2.HEIC?updatedAt=1758897899860'
				]
			},
			{
				title: 'Diskusi Ilmiah di SMK N 9 Medan',
				images: [
					'/images/smkn9-1.JPG',
					'/images/smkn9-2.JPG',
					'/images/smkn9-3.JPG',
					'/images/smkn9-4.JPG',
					'/images/smkn9-5.JPG'
				]
			}
		]
	},
	{
		slug: 'pelatihan-website-kader',
		title: 'Pelatihan Website untuk Kader HIMTI',
		category: 'Kegiatan',
		date: '26 September 2025',
		coverImage:
			'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/pelatihan-website-kader.jpeg?updatedAt=1758891537130',
		excerpt:
			'Pembekalan dasar-dasar pengembangan web bagi para kader baru HIMTI sebagai bagian dari proses regenerasi.',
		details: `
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Kaderisasi merupakan pilar penting dalam keberlanjutan sebuah organisasi. Untuk memastikan regenerasi berjalan dengan baik, HIMTI mengadakan Pelatihan Website Dasar yang ditujukan khusus bagi para kader dan anggota baru. Pelatihan ini memberikan fondasi teknis yang kuat agar para penerus organisasi memiliki kompetensi yang relevan.
      </p>
      <h2 class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Kurikulum Pelatihan
      </h2>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Materi disusun secara sistematis untuk membimbing peserta dari nol hingga mampu membuat proyek sederhana.
      </p>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><strong>HTML5:</strong> Mempelajari struktur dasar dan elemen semantik untuk membangun kerangka situs web yang kokoh.</li>
        <li><strong>CSS3:</strong> Fokus pada styling modern, termasuk Flexbox, Grid, dan konsep Desain Responsif untuk memastikan tampilan optimal di berbagai perangkat.</li>
        <li><strong>JavaScript Dasar:</strong> Pengenalan konsep fundamental seperti variabel, fungsi, DOM manipulation, dan event handling untuk menciptakan interaktivitas.</li>
        <li><strong>Pengenalan Git & GitHub:</strong> Membekali peserta dengan dasar-dasar version control untuk kolaborasi dan manajemen kode yang efisien.</li>
      </ul>
      <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Proyek Akhir</h3>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Sebagai puncak dari pelatihan, setiap peserta diwajibkan untuk membuat sebuah halaman portofolio pribadi. Proyek ini berfungsi sebagai bukti pemahaman mereka terhadap seluruh materi yang telah diajarkan sekaligus menjadi karya pertama yang dapat mereka banggakan.
      </p>
      <blockquote class="mt-6 border-l-2 pl-6 italic">
        "Pelatihan ini bukan hanya tentang coding, tetapi tentang menanamkan pola pikir problem-solving dan semangat belajar berkelanjutan kepada setiap kader HIMTI."
      </blockquote>
    `,
		gallery: [
			{
				title: 'Dokumentasi Pelatihan Kader',
				images: [
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/pelatihan-kader1.jpeg?updatedAt=1758897197957',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/pelatihan-kader2.jpeg?updatedAt=1758897198176',
					'https://ik.imagekit.io/odinyangasli/dokumentasi%20himti/pelatihan-kader3.jpeg?updatedAt=1758897198838'
				]
			}
		]
	}
];
