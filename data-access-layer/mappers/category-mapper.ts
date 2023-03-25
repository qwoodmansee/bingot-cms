import { Category } from '../../domain-import-only/Category';
import { RouteDto, RouteMapper } from './route-mapper';

export interface CategoryDto {
  name: string;
  description: string;
  notes: string;
  routes: RouteDto[];
}

export class CategoryMapper {
  public static toJSON(category: Category): CategoryDto {
    return {
      name: category.name,
      description: category.description,
      notes: category.notes,
      routes: category.routes.map((route) => RouteMapper.toJSON(route)),
    };
  }

  public static toDomain({
    name,
    description,
    notes,
    routes,
  }: CategoryDto): Category {
    return Category.create({
      name: name,
      description: description,
      notes: notes,
      routes: routes.map((r) => RouteMapper.toDomain(r)),
    });
  }
}
