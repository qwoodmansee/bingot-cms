import { Trick } from '../../domain-import-only/Trick';
import {
  getAllTricks as ContentfulGetAllTricks,
  getTrick as ContentfulGetTrick,
} from '../contentful/repositories/contentful-trick-repository';

import {
  getAllTricks as SanityGetAllTricks,
  getTrick as SanityGetTrick,
} from '../sanity/repositories/sanity-trick-repository';

import { MockTrickRepository } from '../mock/repositories/mock-trick-repository';

export const getTrick = async (
  slug: string,
  cms: string
): Promise<Trick | null> => {
  if (cms === 'Contentful') {
    return await ContentfulGetTrick(slug);
  } else if (cms === 'Sanity') {
    return await SanityGetTrick(slug);
  } else if (cms === 'Mock') {
    const repository = new MockTrickRepository();
    return await repository.getTrick(slug);
  } else {
    throw new Error('Selected CMS Not Implemented for getTrick');
  }
};

export const getAllTricks = async (cms: string) => {
  if (cms === 'Contentful') {
    return await ContentfulGetAllTricks();
  } else if (cms === 'Sanity') {
    return await SanityGetAllTricks();
  } else if (cms === 'Mock') {
    const repository = new MockTrickRepository();
    return await repository.getAllTricks();
  } else {
    throw new Error('Selected CMS Not Implemented');
  }
};
