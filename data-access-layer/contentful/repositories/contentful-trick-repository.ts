import { Entry } from 'contentful';
import { Trick } from '../../../domain-import-only/Trick';
import { ITrickFields } from '../@types/generated/contentful';
import { contentfulClient } from '../contentful-client';
import { getEntries, getEntry } from '../contentful-content-service';
import { ContentEntryByID } from '../contentful-types';

export const getTrick = async (name: string): Promise<Trick | null> => {
  const trickAsArray = await contentfulClient.getEntries<
    ContentEntryByID<'trick'>['fields']
  >({
    'fields.name': decodeURI(name),
    content_type: 'trick',
  });

  if (trickAsArray.errors || trickAsArray.items.length < 1) {
    return null;
  }

  const contentfulTrick = trickAsArray.items[0];
  const videoUrl = await getVideoUrlFromContentfulTrick(contentfulTrick);

  const trick: Trick = {
    name: contentfulTrick.fields.name,
    videoUrl: videoUrl,
  };

  return trick;
};

export const getAllTricks = async () => {
  const allTricks = await getEntries('trick');
  if (allTricks.errors || allTricks.items.length < 1) {
    return [];
  }

  const mappedTricks = await Promise.all(
    allTricks.items.map(async (t) => {
      const videoUrl = await getVideoUrlFromContentfulTrick(t);
      const trick: Trick = {
        name: t.fields.name,
        videoUrl: videoUrl,
      };

      return trick;
    })
  );

  return mappedTricks;
};
async function getVideoUrlFromContentfulTrick(
  contentfulTrick: Entry<ITrickFields>
) {
  let videoUrl = '';
  if (
    contentfulTrick.fields.variants &&
    contentfulTrick.fields.variants.length > 0 &&
    contentfulTrick.fields.variants[0].fields.tutorial.length > 0
  ) {
    const tutorial = await getEntry(
      contentfulTrick.fields.variants[0].fields.tutorial[0].sys.id,
      'tutorial'
    );
    videoUrl = tutorial.fields.youtubeUrl;
  }
  return videoUrl;
}
