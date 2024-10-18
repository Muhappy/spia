
export interface Post {
    id: number;
    image: string;  // Ini akan merujuk ke key dari imageMap
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
        title: 'Festival Pendidikan Indonesia',
        desc: 'Hello sobat Mahasiswa....',
        startDate: "tanggal postingan kapan..",
        endDate: "tanggal postingan kapan.."
      },
      {
        id: 2,
        image: 'event2',
        title: 'Judul Postingan dengan kategori event',
        desc: 'Deskripsi Postingan',
        startDate: 'tanggal postingan',
        endDate: 'tanggal postingan',
      },
    ],
  },
  {
    id: 'beasiswa',
    posts: [
      {
        id: 1,
        image: 'beasiswa1',
        title: 'Festival Pendidikan Indonesia',
        desc: 'Hello sobat Mahasiswa....',
        startDate: "tanggal postingan kapan..",
        endDate: "tanggal postingan kapan..",
      },
      {
        id: 2,
        image: 'beasiswa2',
        title: 'Judul Postingan dengan kategori event',
        desc: 'Deskripsi Postingan',
        startDate: 'tanggal postingan',
        endDate: 'tanggal postingan',
      },
    ],
  },
  {
    id: 'lomba',
    posts: [
      {
        id: 1,
        image: 'lomba1',
        title: 'Festival Pendidikan Indonesia',
        desc: 'Hello sobat Mahasiswa....',
        startDate: "tanggal postingan kapan..",
        endDate: "tanggal postingan kapan.."
      },
      {
        id: 2,
        image: 'lomba2',
        title: 'Judul Postingan dengan kategori event',
        desc: 'Deskripsi Postingan',
        startDate: 'tanggal postingan',
        endDate: 'tanggal postingan'
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
