import { Trick } from '../../../domain-import-only/Trick';

export const getTrick = async (slug: string) => {
  const trick: Trick = {
    name: 'Fake Trick',
    videoUrl:
      'https://youtu.be/T57Hfh3bWr8?list=TLPQMjAwNjIwMjCT5KarRPwM5g&t=72',
  };
  return trick;
};

export const getAllTricks = async () => {
  const trickOne: Trick = {
    name: 'Fake Trick One',
    videoUrl:
      'https://youtu.be/T57Hfh3bWr8?list=TLPQMjAwNjIwMjCT5KarRPwM5g&t=72',
  };

  const trickTwo: Trick = {
    name: 'Fake Trick Two',
    videoUrl:
      'https://youtu.be/T57Hfh3bWr8?list=TLPQMjAwNjIwMjCT5KarRPwM5g&t=72',
  };
  return [trickOne, trickTwo];
};
