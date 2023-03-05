import { Entity } from './utility-classes/Entity';

interface GameProps {
  name: string;
  slug: string;
  coverArt: string;
}

export class Game extends Entity<GameProps> {
  private constructor(props: GameProps) {
    super(props, props.name);
  }

  public static create(props: GameProps): Game {
    return new Game(props);
  }

  get name(): string {
    return this.props.name;
  }

  get slug(): string {
    return this.props.slug;
  }

  get coverArt(): string {
    return this.props.coverArt;
  }
}
