import { Entity } from './utility-classes/Entity';

export interface IYoutubeVideoProps {
  videoId: string;
  startTimeInSeconds: number;
}

export class YoutubeVideo extends Entity<IYoutubeVideoProps> {
  private constructor(props: IYoutubeVideoProps) {
    super(props, `${props.videoId}-${props.startTimeInSeconds}`);
  }

  public static create(props: IYoutubeVideoProps): YoutubeVideo {
    return new YoutubeVideo(props);
  }

  get videoId(): string {
    return this.props.videoId;
  }

  get startTimeInSeconds(): number {
    return this.props.startTimeInSeconds;
  }
}
