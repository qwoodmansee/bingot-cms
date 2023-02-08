import {
  getAllTricks as GetAllContentfulTricks,
  getTrick as GetContentfulTrick,
} from '../../data-access-layer/repositories/contentful-trick-repository';

export const getTrick = async ({
  name,
  for_cms = 'Contentful',
}: {
  name: string;
  for_cms?: string;
}) => {
  if (for_cms === 'Contentful') {
    return await GetContentfulTrick(name);
  } else {
    throw new Error(`CMS ${for_cms} not implemented`);
  }
};

export const getAllTricks = async ({
  for_cms = 'Contentful',
}: {
  for_cms?: string;
}) => {
  if (for_cms === 'Contentful') {
    return await GetAllContentfulTricks();
  } else {
    throw new Error(`CMS ${for_cms} not implemented`);
  }
};
