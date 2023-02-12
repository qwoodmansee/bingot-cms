import { Trick } from '../../domain-import-only/Trick';
import {
  getAllTricks as ContentfulGetAllTricks,
  getTrick as ContentfulGetTrick,
} from '../contentful/repositories/contentful-trick-repository';

import {
  getAllTricks as SanityGetAllTricks,
  getTrick as SanityGetTrick,
} from '../sanity/repositories/sanity-trick-repository';

export const getTrick = async (
  slug: string,
  cms: 'Contentful' | 'Sanity'
): Promise<Trick | null> => {
  if (cms === 'Contentful') {
    return await ContentfulGetTrick(slug);
  } else if (cms === 'Sanity') {
    return await SanityGetTrick(slug);
  } else {
    throw new Error('Selected CMS Not Implemented');
  }
};

export const getAllTricks = async (cms: string) => {
  if (cms === 'Contentful') {
    return await ContentfulGetAllTricks();
  } else if (cms === 'Sanity') {
    return await SanityGetAllTricks();
  } else {
    throw new Error('Selected CMS Not Implemented');
  }
};
