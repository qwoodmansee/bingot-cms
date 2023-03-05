import { YoutubeVideo } from '../../domain-import-only/YoutubeVideo';

export class YoutubeVideoMapper {
  public static toJSON(video: YoutubeVideo) {
    return {
      videoId: video.videoId,
      startTimeInSeconds: video.startTimeInSeconds,
    };
  }

  public static toDomain(raw: {
    videoId: string;
    startTimeInSeconds: number;
  }): YoutubeVideo {
    return YoutubeVideo.create({
      videoId: raw.videoId,
      startTimeInSeconds: raw.startTimeInSeconds,
    });
  }
}
