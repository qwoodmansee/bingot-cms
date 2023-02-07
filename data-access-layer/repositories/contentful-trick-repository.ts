import { Trick } from '../../domain-import-only/Trick';
import { contentfulClient } from '../contentful/contentful-client';
import { getEntries } from '../contentful/contentful-content-service';
import { ContentEntryByID } from '../contentful/contentful-types';

export const getTrick = async (name: string): Promise<Trick | null> => {
  const trickAsArray = await contentfulClient.getEntries<
    ContentEntryByID<'trick'>['fields']
  >({
    'fields.name': name,
    content_type: 'trick',
    include: 10,
  });

  if (trickAsArray.errors || trickAsArray.items.length < 1) {
    return null;
  }

  const first = trickAsArray[0];

  let youtubeUrl = '';
  if (
    first &&
    first.variants &&
    first.variants.length > 0 &&
    first.variants[0].fields.tutorial &&
    first.variants[0].fields.tutorial.length > 0
  ) {
    youtubeUrl =
      first.variants[0].fields.tutorial[0].fields['youtubeUrl'].toString();
  }

  const trick: Trick = {
    name: first.fields.name,
    videoUrl: youtubeUrl,
  };

  return trick;
};

export const getAllTricks = async () => {
  return await getEntries('trick');
};
