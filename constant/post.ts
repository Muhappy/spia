
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
        title: 'Festival Pendidikan Indonesia',
        desc: 'Hello sobat Mahasiswa....',
        startDate: "tanggal postingan kapan..",
        endDate: "tanggal postingan kapan.."
      },
      {
        id: 2,
        image: 'yudisium2',
        title: 'Judul Postingan dengan kategori event',
        desc: 'Deskripsi Postingan',
        startDate: 'tanggal postingan',
        endDate: 'tanggal postingan'
      },
    ],
  },
];
