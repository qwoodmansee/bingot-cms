import { Author } from '../../../domain-import-only/Author';
import { Post } from '../../../domain-import-only/Post';

export const getPost = async (slug: string) => {
  const author: Author = {
    name: '',
    picture: '',
  };

  const post: Post = {
    title: '',
    coverImage: '',
    date: '',
    slug: '',
    author,
    content: '',
    excerpt: '',
  };
  return post;
};

export const getAllPosts = async () => {
  const author: Author = {
    name: '',
    picture: '',
  };

  const post: Post = {
    title: '',
    coverImage: '',
    date: '',
    slug: '',
    author,
    content: '',
    excerpt: '',
  };
  return [post];
};
