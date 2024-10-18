
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
