import { Trick } from './Trick';
import { Entity } from './utility-classes/Entity';

export interface IGoalProps {
  name: string;
  notes: string;
  tricks: Trick[];
}

export class Goal extends Entity<IGoalProps> {
  private constructor(props: IGoalProps) {
    super(props, props.name);
  }

  public static create(props: IGoalProps): Goal {
    const tricks = props.tricks.map((trick) => Trick.create(trick));
    return new Goal({ ...props, tricks });
  }

  get name(): string {
    return this.props.name;
  }

  get notes(): string {
    return this.props.notes;
  }

  get tricks(): Trick[] {
    return this.props.tricks;
  }
}
