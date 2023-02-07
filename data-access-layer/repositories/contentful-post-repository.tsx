import { Post } from '../../domain-import-only/Post';
import { Author } from '../../domain-import-only/Author';
import { contentfulClient } from '../contentful/contentful-client';
import { ContentEntryByID } from '../contentful/contentful-types';

const createCoverImage = (contentfulCoverImage) => {
  return '';
};

const createDate = (contentfulDate) => {
  return new Date();
};

const createAuthorPicture = (authorPicture) => {
  return '';
};

const createContent = (contentfulContent) => {
  return <></>;
};
export const getPost = async (slug: string): Promise<Post | null> => {
  const postAsArray = await contentfulClient.getEntries<
    ContentEntryByID<'post'>['fields']
  >({
    'fields.slug': slug,
    content_type: 'post',
  });

  if (postAsArray.errors || postAsArray.items.length < 1) {
    return null;
  }

  const contentfulPost = postAsArray.items[0];

  const author: Author = {
    name: contentfulPost.fields.author.fields.name,
    picture: createAuthorPicture(contentfulPost.fields.author.fields.picture),
  };

  const post: Post = {
    title: contentfulPost.fields.title,
    coverImage: createCoverImage(contentfulPost.fields.coverImage),
    date: createDate(contentfulPost.fields.date),
    slug: contentfulPost.fields.slug,
    author,
    content: createContent(contentfulPost.fields.content), // RIP. I wasn't willing to decouple this. sorry.
    excerpt: contentfulPost.fields.excerpt,
  };

  return post;
};
