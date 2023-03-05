import { Trick } from '../../domain-import-only/Trick';
import { YoutubeVideoMapper } from './youtube-video-mapper';

export interface TrickDto {
  name: string;
  description: string;
  isFundamental: boolean;
  difficulty: number;
  video: {
    videoId: string;
    startTimeInSeconds: number;
  };
}

export class TrickMapper {
  public static toJSON(trick: Trick) {
    return {
      name: trick.name,
      description: trick.description,
      isFundamental: trick.isFundamental,
      difficulty: trick.difficulty,
      video: YoutubeVideoMapper.toJSON(trick.video),
    };
  }

  public static toDomain({
    name,
    description,
    difficulty,
    video,
    isFundamental,
  }): Trick {
    return Trick.create({
      name: name,
      description: description,
      difficulty: difficulty,
      video: YoutubeVideoMapper.toDomain(video),
      isFundamental: isFundamental,
    });
  }
}
