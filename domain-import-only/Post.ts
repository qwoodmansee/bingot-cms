import { ReactNode } from 'react';
import { Author } from './Author';

export interface Post {
  title: string;
  coverImage: ReactNode; // RIP. I wasn't willing to decouple this. sorry.
  date: Date;
  slug: string;
  author: Author;
  content: ReactNode; // RIP. I wasn't willing to decouple this. sorry.
  excerpt: string;
}
