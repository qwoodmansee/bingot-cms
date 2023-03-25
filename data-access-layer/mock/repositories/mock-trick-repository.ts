import { Trick } from '../../../domain-import-only/Trick';
import { YoutubeVideo } from '../../../domain-import-only/YoutubeVideo';
import { ITrickReporistory } from '../../repository-interfaces/trick-repository';
import { LEGACY_TRICKS, legacy_trick_to_trick } from '../legacy-tricks';

export class MockTrickRepository implements ITrickReporistory {
  async getTrick(trickName: string): Promise<Trick> {
    const tricksByName = LEGACY_TRICKS.filter(
      (lt) => lt.trickName == trickName
    ).map((lt) => {
      if (lt.trickUrl) {
        return legacy_trick_to_trick(lt);
      } else {
        return null;
      }
    });

    const fallbackTrick: Trick = Trick.create({
      name: 'Fake Trick',
      video: YoutubeVideo.create({
        videoId: 'T57Hfh3bWr8',
        startTimeInSeconds: 72,
      }),
      description: 'Fake Description',
      isFundamental: false,
      difficulty: 2,
    });

    return tricksByName.length > 0 ? tricksByName[0] : fallbackTrick;
  }

  async getAllTricks(): Promise<Trick[]> {
    return LEGACY_TRICKS.map((lt) => {
      return legacy_trick_to_trick(lt);
    });
  }
}
