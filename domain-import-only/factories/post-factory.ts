import {
  getAllPosts as GetAllContentfulPosts,
  getPost as GetContentfulPost,
} from '../../data-access-layer/contentful/repositories/contentful-post-repository';

export const getPost = async ({
  name,
  for_cms = 'Contentful',
}: {
  name: string;
  for_cms?: string;
}) => {
  if (for_cms === 'Contentful') {
    return await GetContentfulPost(name);
  } else {
    throw new Error(`CMS ${for_cms} not implemented`);
  }
};

export const getAllPosts = async ({
  for_cms = 'Contentful',
}: {
  for_cms?: string;
}) => {
  if (for_cms === 'Contentful') {
    return await GetAllContentfulPosts();
  } else {
    throw new Error(`CMS ${for_cms} not implemented`);
  }
};
