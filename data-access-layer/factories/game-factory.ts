import { Game } from '../../domain-import-only/Game';

const OoT: Game = Game.create({
  name: 'The Legend of Zelda: Ocarina of Time',
  slug: 'oot',
  coverArt:
    'https://static.wikia.nocookie.net/nintendo/images/c/cd/Legend_of_Zelda_Ocarina_of_Time_%28NA%29.png/revision/latest?cb=20220417174647&path-prefix=en',
});

export const getAllGames = async () => {
  return [OoT];
};

export const getGameFromSlug = async (slug: string) => {
  if (slug === OoT.slug) {
    return OoT;
  }
};
