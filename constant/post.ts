export interface Post {
  id: number;
  image: string; // Ini akan merujuk ke key dari imageMap
  title: string;
  desc: string;
  startDate: string;
  endDate: string;
}

// Definisikan tipe untuk konten
export interface Content {
  id: string;
  posts: Post[];
}

export const content: Content[] = [
  {
    id: 'event',
    posts: [
      {
        id: 1,
        image: 'event1',
        title: 'Administrasi Niaga Festival 2023',
        desc: 'Hallo Folks. Finally the biggest event has finally arrived. With our special guest star: Suara Kayu dan DJ Rizqung.',
        startDate: "07 Agustus 2023",
        endDate: "10 Agustus 2023"
      },
      {
        id: 2,
        image: 'event2',
        title: 'SETENGAHPORSI AJA: Food Bazaar Festival Campus',
        desc: 'Hai, sobat anti food waste! Yuk, meriahkan event spesial kami yang bertujuan untuk mengurangi food waste! Jangan sampai ketinggalan keseruan ini! Ajak teman dan keluarga, dan mari bersama-sama mengurangi food waste.',
        startDate: '03 Aguatus 2024',
        endDate: '04 Agustus 2024',
      },
    ],
  },
  {
    id: 'beasiswa',
    posts: [
      {
        id: 1,
        image: 'beasiswa1',
        title: 'BSI Scholarship Inspirasi',
        desc: 'BSI Scholarship merupakan Program Beasiswa Jenjang Sarjana yang bertujuan untuk membentuk pemimpin masa depan umat khususnya di Bidang Industri Ekonomi dan Keuangan Syariah. Tahun 2024 ini, BSI Scholarship membuka pendaftaran dari tanggal 2 September – 13 Oktober 2024 untuk BSI Scholarship Inspirasi.',
        startDate: "2 September 2024",
        endDate: "12 November 2024",
      },
      {
        id: 2,
        image: 'beasiswa2',
        title: 'Beasiswa Basolang 2024 ',
        desc: 'Beasiswa basolang adalah beasiswa yang diberikan untuk mahasiswa baru. Beasiswa berupa uang saku yang bisa digunakan untuk menunjang pembelajaran seperti beli buku, beli kuota internet dan kebutuhan lainnya.',
        startDate: '20 September 2024',
        endDate: '20 Oktober 2024',
      },
    ],
  },
  {
    id: 'lomba',
    posts: [
      {
        id: 1,
        image: 'lomba1',
        title: 'Milau UAD: Lomba Poster Digital 2023',
        desc: 'Masih dalam serangkaian Milad ke-63 Universitas Ahmad Dahlan mengadakan lomba poster “𝗜𝗺𝗽𝗹𝗲𝗺𝗮𝗻𝘁𝗮𝘀𝗶 𝗔𝗹 𝗜𝘀𝗹𝗮𝗺 𝗱𝗮𝗻 𝗞𝗲𝗺𝘂𝗵𝗮𝗺𝗺𝗮𝗱𝗶𝘆𝗮𝗵𝗮𝗻 𝗽𝗮𝗱𝗮 𝗲𝗿𝗮 𝗦𝗼𝗰𝗶𝗲𝘁𝘆 𝟱.𝟬”',
        startDate: '13 November 2023',
        endDate: '30 November 2023',
      },
      {
        id: 2,
        image: 'lomba2',
        title: 'Lomba Poster dalam rangka Dies Natalis STIKKU Ke-16',
        desc: 'Hallo Semua👋 Dalam Rangka Dies Natalis yang ke 16, STIKes Kuningan akan melaksanakan perlombaan “Desain Poster, Lomba Tiktok Dan Video Pendek dengan Tema “Sinergi Mahasiswa Peduli Stunting”',
        startDate: '10 Oktober 2022',
        endDate: '18 November 2022',
      },
    ],
  },
  {
    id: 'yudisium',
    posts: [
      {
        id: 1,
        image: 'yudisium1',
        title: 'YUDISIUM Genap Tahun Akademik 2022/2023',
        desc: 'Yudisium Fakultas Ekonomi dan Bisnis Universitas Pancasila (FEB UP) Semester Genap TA. 2022/2023 diselenggarakan pada 19 September 2023, Program studi S1 Kelas Internasional dan Unggulan, S1 Manajemen, S1 Akuntansi, D3 Akuntansi dan D3 Perpajakan. Berlangsung meriah, kegiatan tersebut dilaksanakan di Aula FEB UP lt.4 di hadiri oleh Alumni FEB UP angkatan 2014 Reza Regzy Bahniardi yang saat ini menjabat sebagai Priority Banking Relationship Manager at PT Bank Syariah Indonesia Tbk., dan diselenggarakan pada 19 September 2023.',
        startDate: "19 September 2023",
        endDate: "21 September 2023"
      },
      {
        id: 2,
        image: 'yudisium2',
        title: 'YUDISIUM KE 27 AKADEMI KOMUNIKASI RADYA BINATAMA',
        desc: 'Program Studi Penyiaran Akademi Komunikasi Radya Binatama (AKRB) menggelar yudisium untuk mahasiswa Diploma 3, Sabtu, 30 Oktober 2021. Yudisium ke 27 ini diikuti 55 mahasiswa dari 1 (satu) prodi. Upacara Yudisium ini diselenggarakan di Kampus 2 Akademi Komunikasi Radya Binatama, Jl. Bantul No 77 Suryodiningratan, Mantrijeron, Yogyakarta secara virtual (online).',
        startDate: '30 Oktober 2021',
        endDate: '6 November 2021'
      },
    ],
  },
];
