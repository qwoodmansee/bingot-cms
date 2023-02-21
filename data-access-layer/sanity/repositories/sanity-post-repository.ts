import { groq } from 'next-sanity';
import { Author } from '../../../domain-import-only/Author';
import { Post } from '../../../domain-import-only/Post';
import { clientFetch } from '../sanity.client';

export const getPost = async (slug: string) => {
  const sanityPost = await _getPostForSlug(slug);

  const author: Author = {
    name: 'qdfsdfs',
    picture: '',
  };

  const post: Post = {
    title: sanityPost.title,
    coverImage: sanityPost.coverImage,
    date: sanityPost.date,
    slug: sanityPost.slug.current,
    author,
    content: sanityPost.content,
    excerpt: sanityPost.excerpt,
  };
  return post;
};

export const getAllPosts = async () => {
  const sanityPosts = await _getAllPosts();

  const mappedPosts = sanityPosts.map((p) => {
    const author: Author = {
      name: 'qdfsdfs',
      picture: '',
    };

    const mappedPost: Post = {
      title: p.title,
      coverImage: p.coverImage,
      date: p.date,
      slug: p.slug.current,
      author,
      content: p.content,
      excerpt: p.excerpt,
    };

    return mappedPost;
  });

  return mappedPosts;
};

const _getAllPosts = async () => {
  return await clientFetch(groq`*[_type == 'post'] | order(date desc)`);
};

const _getPostForSlug = async (slug: string) => {
  return await clientFetch(
    groq`*[_type == 'post' && slug.current == $slug][0]`,
    { slug }
  );
};
