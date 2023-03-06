import { Category } from '../../domain-import-only/Category';
import { MockCategoryRepository } from '../mock/repositories/mock-category-repository';

export const searchCategoriesByName = async (
  categoryName: string,
  cms: string
): Promise<Category | null> => {
  if (cms === 'Mock') {
    const repository = new MockCategoryRepository();
    return await repository.getCategoryByName(categoryName);
  } else {
    throw new Error(
      `Selected CMS (${cms}) does not provide categories. Did you implement a category repository and add it to the factory? Have you checked your environment variables?`
    );
  }
};

export const getAllCategories = async (
  cms: string
): Promise<Category[] | null> => {
  if (cms === 'Mock') {
    const repository = new MockCategoryRepository();
    return await repository.getAllCategories();
  } else {
    throw new Error(
      `Selected CMS (${cms}) does not provide categories. Did you implement a category repository and add it to the factory? Have you checked your environment variables?`
    );
  }
};
