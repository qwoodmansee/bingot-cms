import { Trick } from './Trick';
import { Entity } from './utility-classes/Entity';

export interface IRouteProps {
  name: string;
  description: string;
  notes: string;
  tricks: Trick[];
}

export class Route extends Entity<IRouteProps> {
  private constructor(props: IRouteProps) {
    super(props, props.name);
  }

  public static create(props: IRouteProps): Route {
    const tricks = props.tricks.map((trick) => Trick.create(trick));
    return new Route({ ...props, tricks });
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get notes(): string {
    return this.props.notes;
  }

  get tricks(): Trick[] {
    return this.props.tricks;
  }
}
