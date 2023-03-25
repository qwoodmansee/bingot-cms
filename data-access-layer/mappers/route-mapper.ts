import { Route } from '../../domain-import-only/Route';
import { TrickDto, TrickMapper } from './trick-mapper';

export interface RouteDto {
  name: string;
  description: string;
  notes: string;
  tricks: TrickDto[];
}

export class RouteMapper {
  public static toJSON(route: Route): RouteDto {
    return {
      name: route.name,
      notes: route.notes,
      description: route.description,
      tricks: route.tricks.map((trick) => TrickMapper.toJSON(trick)),
    };
  }

  public static toDomain({
    name,
    description,
    notes,
    tricks,
  }: RouteDto): Route {
    return Route.create({
      name: name,
      notes: notes,
      description: description,
      tricks: tricks.map((t) => TrickMapper.toDomain(t)),
    });
  }
}
