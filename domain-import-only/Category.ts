import { Route } from './Route';
import { Entity } from './utility-classes/Entity';

export interface ICategoryProps {
  name: string;
  description: string;
  notes: string;
  routes: Route[];
}

export class Category extends Entity<ICategoryProps> {
  private constructor(props: ICategoryProps) {
    super(props, props.name);
  }

  public static create(props: ICategoryProps): Category {
    const routes = props.routes.map((route) => Route.create(route));
    return new Category({ ...props, routes });
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

  get routes(): Route[] {
    return this.props.routes;
  }
}
