import { Category } from '../../domain-import-only/Category';

export interface ICategoryRepository {
  getCategoryByName(name: string): Promise<Category | null>;
  getAllCategories(): Promise<Category[]>;
}
