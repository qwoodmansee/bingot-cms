import { NonNegativeInteger } from './value-objects/NonNegativeInteger';

export interface YoutubeVideo {
  videoId: string;
  startTimeInSeconds: NonNegativeInteger<number>;
}
