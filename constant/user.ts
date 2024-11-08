import { Post } from "./post";

  
 
  export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    phone: string;
    bio: string;
    profilePicture: string;
    posts: Post[];
  }

  export const user: User[] = [
    {
      id: '1',
      email: 'admin@gmail.com',
      password: 'admin',
      name: 'Admin',
      phone: '081234567890',
      bio: 'I am an admin',
      profilePicture: 'https://via.placeholder.com/150',
      posts: []
    },
   
    {
        id: '2',
        email: 'admin@gmail.com',
        password: 'admin',
        name: 'Admin',
        phone: '081234567890',
        bio: 'I am an admin',
        profilePicture: 'https://via.placeholder.com/150',
        posts: []
      }
  ]