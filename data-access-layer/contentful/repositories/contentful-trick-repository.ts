import { Entry } from 'contentful';
import { Trick } from '../../../domain-import-only/Trick';
import { ITrickFields } from '../@types/generated/contentful';
import contentfulClient from '../contentful-client';
import { getEntries, getEntry } from '../contentful-content-service';
import { ContentEntryByID } from '../contentful-types';
import { videoId as GetYoutubeIdFromUrl } from '@gonetone/get-youtube-id-by-url';
import { YoutubeVideo } from '../../../domain-import-only/YoutubeVideo';

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
  const trick = await _createTrickFromContentfulTrick(contentfulTrick);

  return trick;
};

export const getAllTricks = async () => {
  const allTricks = await getEntries('trick');
  if (allTricks.errors || allTricks.items.length < 1) {
    return [];
  }

  const mappedTricks = await Promise.all(
    allTricks.items.map(async (t) => {
      const trick = await _createTrickFromContentfulTrick(t);
      return trick;
    })
  );

  return mappedTricks;
};

const _getVideoUrlFromContentfulTrick = async (
  contentfulTrick: Entry<ITrickFields>
) => {
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
};

const _createTrickFromContentfulTrick = async (contentfulTrick) => {
  const videoUrl = await _getVideoUrlFromContentfulTrick(contentfulTrick);
  const videoId = await GetYoutubeIdFromUrl(videoUrl);
  const startTime = 0; // TODO:fix this if we want to go back to contentful

  const trick: Trick = Trick.create({
    name: contentfulTrick.fields.name,
    video: YoutubeVideo.create({
      videoId,
      startTimeInSeconds: startTime,
    }),
    description: '',
    difficulty: 1,
  });

  return trick;
};
