import { Route } from '../../domain-import-only/Route';

export interface IRouteRepository {
  getRouteByName(name: string): Promise<Route | null>;
  getAllRoutes(): Promise<Route[]>;
}
