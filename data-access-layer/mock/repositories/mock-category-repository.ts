import { Category } from '../../../domain-import-only/Category';
import { ICategoryRepository } from '../../repository-interfaces/category-repository';
import { MockRouteRepository } from './mock-route-repository';

export class MockCategoryRepository implements ICategoryRepository {
  async getAllCategories(): Promise<Category[]> {
    const routeRepository = new MockRouteRepository();
    const oldSchoolAnyPercentRoute = await routeRepository.getRouteByName(
      'Old School Any Percent'
    );
    const defeatGanonNoSRM = Category.create({
      name: 'Defeat Ganon No SRM',
      description: 'Complete the game as fast as possible by defeating ganon',
      notes: 'Similar to Any Percent Before GIM & SRM',
      routes: [oldSchoolAnyPercentRoute],
    });

    return [defeatGanonNoSRM];
  }

  async getCategoryByName(name: string): Promise<Category | null> {
    const routeRepository = new MockRouteRepository();
    const fakeRoute = await routeRepository.getRouteByName('Fake Route');
    const fakeCategory = Category.create({
      name: name,
      description: 'This is a mocked category',
      notes: 'these are notes for the mocked category',
      routes: [fakeRoute],
    });

    return fakeCategory;
  }
}
