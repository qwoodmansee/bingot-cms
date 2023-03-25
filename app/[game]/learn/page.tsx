import { TrickLearner } from '../../../components/bingo-teacher-components/trick-learner';
import { getAllCategories } from '../../../data-access-layer/factories/category-factory';
import { CategoryMapper } from '../../../data-access-layer/mappers/category-mapper';
const cms = process.env.CMS;

export async function generateStaticParams() {
  return [{ game: 'oot' }];
}

export default async function Page({ params: { game } }) {
  const categories = await getAllCategories(cms);

  return (
    <TrickLearner
      categories={categories.map((c) => CategoryMapper.toJSON(c))}
    />
  );
}
