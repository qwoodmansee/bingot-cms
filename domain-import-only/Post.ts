import { Author } from './Author';

export interface Post {
  title: string;
  coverImage: string; // RIP. I wasn't willing to decouple this. sorry.
  date: string;
  slug: string;
  author: Author;
  content: unknown; // RIP. I wasn't willing to decouple this. sorry.
  excerpt: string;
}
