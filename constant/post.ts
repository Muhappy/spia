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
        title: 'Festival Pendidikan Indonesia',
        desc: 'Hello sobat Mahasiswa....',
        startDate: 'tanggal postingan kapan..',
        endDate: 'tanggal postingan kapan..',
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
        title: 'Yudisium 2024',
        desc: 'Hello sobat Mahasiswa....',
        startDate: 'tanggal postingan kapan..',
        endDate: 'tanggal postingan kapan..',
      },
      {
        id: 2,
        image: 'yudisium2',
        title: 'Yudisium kedua',
        desc: 'Deskripsi Postingan',
        startDate: 'tanggal postingan',
        endDate: 'tanggal postingan',
      },
    ],
  },
];
