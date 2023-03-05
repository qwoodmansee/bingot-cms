import { Trick } from '../../../domain-import-only/Trick';
import { YoutubeVideo } from '../../../domain-import-only/YoutubeVideo';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getTrick = async (slug: string) => {
  return Trick.create({
    name: 'Fake Trick',
    video: YoutubeVideo.create({
      videoId: 'T57Hfh3bWr8',
      startTimeInSeconds: 72,
    }),
    description: 'Fake Description',
    isFundamental: false,
    difficulty: 2,
  });
};

export const getAllTricks = async () => {
  const trickOne: Trick = Trick.create({
    name: 'Fake Trick',
    video: YoutubeVideo.create({
      videoId: 'T57Hfh3bWr8',
      startTimeInSeconds: 72,
    }),
    description: 'Fake Description',
    isFundamental: false,
    difficulty: 2,
  });

  const trickTwo: Trick = Trick.create({
    name: 'Fake Trick Two',
    video: YoutubeVideo.create({
      videoId: 'T57Hfh3bWr8',
      startTimeInSeconds: 72,
    }),
    description: 'Fake Description',
    isFundamental: false,
    difficulty: 2,
  });

  return [trickOne, trickTwo];
};
