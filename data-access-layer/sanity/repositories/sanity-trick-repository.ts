import { Trick } from '../../../domain-import-only/Trick';
import { YoutubeVideo } from '../../../domain-import-only/YoutubeVideo';

export const getTrick = async (slug: string) => {
  const trick: Trick = {
    name: 'Fake Trick',
    video: YoutubeVideo.create({
      videoId: 'T57Hfh3bWr8',
      startTimeInSeconds: 72,
    }),
};

export const getAllTricks = async () => {
  const trickOne: Trick = {
    name: 'Fake Trick One',
    video: YoutubeVideo.create({
      videoId: 'T57Hfh3bWr8',
      startTimeInSeconds: 72,
    }),

  const trickTwo: Trick = {
    name: 'Fake Trick Two',
    video: YoutubeVideo.create({
      videoId: 'T57Hfh3bWr8',
      startTimeInSeconds: 72,
    }),
  return [trickOne, trickTwo];
};
