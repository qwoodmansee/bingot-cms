import { Route } from '../../domain-import-only/Route';
import { MockRouteRepository } from '../mock/repositories/mock-route-repository';

export const getRouteByName = async (
  routeName: string,
  cms: string
): Promise<Route | null> => {
  if (cms === 'Mock') {
    const repository = new MockRouteRepository();
    return await repository.getRouteByName(routeName);
  } else {
    throw new Error(
      `Selected CMS (${cms}) does not provide routes. Did you implement a route repository and add it to the factory? Have you checked your environment variables?`
    );
  }
};

export const getAllRoutes = async (cms: string): Promise<Route[] | null> => {
  if (cms === 'Mock') {
    const repository = new MockRouteRepository();
    return await repository.getAllRoutes();
  } else {
    throw new Error(
      `Selected CMS (${cms}) does not provide routes. Did you implement a route repository and add it to the factory? Have you checked your environment variables?`
    );
  }
};
