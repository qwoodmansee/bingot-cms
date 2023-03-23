import { Route } from '../../../domain-import-only/Route';
import { IRouteRepository } from '../../repository-interfaces/route-repository';
import { MockTrickRepository } from './mock-trick-repository';

const _old_any_percent_trick_names = [
  'Aqua Escape',
  'WESS',
  'Deku Tree B1 Skip',
  'Gohma Double KO',
  'Deku Wrong Warp to Ganon (Ganondoor)',
];

const _old_any_percent_tricks = async (tricks) => {
  return _old_any_percent_trick_names.map((trickName) =>
    tricks.find((t) => t.name === trickName)
  );
};

const _old_school_any_percent_route = async (tricks) => {
  return Route.create({
    name: 'Old School Any Percent',
    description: 'This is the old route back when times were simpler',
    notes: 'Some notes about the route',
    tricks: await _old_any_percent_tricks(tricks),
  });
};

export class MockRouteRepository implements IRouteRepository {
  async getAllRoutes(): Promise<Route[]> {
    const trickRepository = new MockTrickRepository();
    const allTricks = await trickRepository.getAllTricks();
    const allRoutes = [await _old_school_any_percent_route(allTricks)];
    return allRoutes;
  }

  async getRouteByName(name: string): Promise<Route | null> {
    const trickRepository = new MockTrickRepository();
    const allTricks = await trickRepository.getAllTricks();
    if (name === 'Old School Any Percent') {
      return await _old_school_any_percent_route(allTricks);
    } else {
      return Route.create({
        name: 'A Fake Route',
        description: 'the route you passed doesnt actually exist',
        notes: 'Some notes about the route',
        tricks: (await _old_any_percent_tricks(allTricks)).slice(0, 2),
      });
    }
  }
}
