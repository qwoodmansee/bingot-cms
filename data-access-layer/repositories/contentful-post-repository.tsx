import { Post } from '../../domain-import-only/Post';
import { Author } from '../../domain-import-only/Author';
import { contentfulClient } from '../contentful/contentful-client';
import { ContentEntryByID } from '../contentful/contentful-types';
import { getEntries } from '../contentful/contentful-content-service';
import { Entry } from 'contentful';
import { IPostFields } from '../contentful/@types/generated/contentful';

export const getPost = async (slug: string): Promise<Post | null> => {
  const postAsArray = await contentfulClient.getEntries<
    ContentEntryByID<'post'>['fields']
  >({
    'fields.slug': decodeURI(slug),
    content_type: 'post',
  });

  if (postAsArray.errors || postAsArray.items.length < 1) {
    return null;
  }

  const contentfulPost = postAsArray.items[0];

  const post: Post = convertContentfulPostToPost(contentfulPost);

  return post;
};

export const getAllPosts = async () => {
  const allPosts = await getEntries('post');
  return allPosts.items.map((p) => convertContentfulPostToPost(p));
};

function convertContentfulPostToPost(contentfulPost: Entry<IPostFields>) {
  const author: Author = {
    name: contentfulPost.fields.author.fields.name,
    picture: contentfulPost.fields.author.fields.picture.fields.file.url,
  };

  const post: Post = {
    title: contentfulPost.fields.title,
    coverImage: contentfulPost.fields.coverImage.fields.file.url,
    date: contentfulPost.fields.date,
    slug: contentfulPost.fields.slug,
    author,
    content: contentfulPost.fields.content,
    excerpt: contentfulPost.fields.excerpt,
  };
  return post;
}
