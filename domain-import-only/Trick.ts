import { YoutubeVideo } from './YoutubeVideo';

export interface Trick {
  name: string;
  video: YoutubeVideo;
  isFundamental?: boolean;
}
