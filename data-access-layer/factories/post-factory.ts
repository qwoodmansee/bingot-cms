import { Post } from '../../domain-import-only/Post';
import {
  getAllPosts as ContentfulGetAllPosts,
  getPost as ContentfulGetPost,
} from '../contentful/repositories/contentful-post-repository';

import {
  getAllPosts as SanityGetAllPosts,
  getPost as SanityGetPost,
} from '../sanity/repositories/sanity-post-repository';

export const getPost = async (
  slug: string,
  cms: 'Contentful' | 'Sanity'
): Promise<Post | null> => {
  if (cms === 'Contentful') {
    return await ContentfulGetPost(slug);
  } else if (cms === 'Sanity') {
    return await SanityGetPost(slug);
  } else {
    throw new Error('Selected CMS Not Implemented');
  }
};

export const getAllPosts = async (cms: string) => {
  if (cms === 'Contentful') {
    return await ContentfulGetAllPosts();
  } else if (cms === 'Sanity') {
    return await SanityGetAllPosts();
  } else {
    throw new Error('Selected CMS Not Implemented');
  }
};
