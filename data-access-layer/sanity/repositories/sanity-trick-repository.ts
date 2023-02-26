import { Trick } from '../../../domain-import-only/Trick';

export const getTrick = async (slug: string) => {
  const trick: Trick = {
    name: 'Fake Trick',
    video: {
      videoId: 'T57Hfh3bWr8',
      startTimeInSeconds: 72,
    },
  };
  return trick;
};

export const getAllTricks = async () => {
  const trickOne: Trick = {
    name: 'Fake Trick One',
    video: {
      videoId: 'T57Hfh3bWr8',
      startTimeInSeconds: 72,
    },
  };

  const trickTwo: Trick = {
    name: 'Fake Trick Two',
    video: {
      videoId: 'T57Hfh3bWr8',
      startTimeInSeconds: 72,
    },
  };
  return [trickOne, trickTwo];
};
