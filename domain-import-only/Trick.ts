import { Entity } from './utility-classes/Entity';
import { YoutubeVideo } from './YoutubeVideo';

export interface ITrickProps {
  id?: string;
  name: string;
  description: string;
  video: YoutubeVideo;
  isFundamental?: boolean;
  difficulty: number;
}

export class Trick extends Entity<ITrickProps> {
  private constructor(props: ITrickProps) {
    super(props, props.id || props.name);
  }

  public static create(props: ITrickProps): Trick {
    return new Trick(props);
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get difficulty(): number {
    return this.props.difficulty;
  }

  get video(): YoutubeVideo {
    return this.props.video;
  }

  get isFundamental(): boolean {
    return this.props.isFundamental;
  }
}
