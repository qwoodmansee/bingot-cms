import Link from 'next/link';
import { getCategoryByName } from '../../../../../data-access-layer/factories/category-factory';
import { getAllTricks } from '../../../data-access-layer/factories/trick-factory';
const cms = process.env.CMS;

//TODO(quinton): this page needs work.
export async function generateStaticParams() {
  return [{ game: 'oot' }];
}

export default async function Page({ params: { game, category } }) {
  const categoryDomain = await getCategoryByName(category, cms);
  return (
    <>
      <h3>Routes</h3>
      <ul className='flex flex-wrap justify-center'>
        {category.routes.map((c) => {
          return (
            <li
              key={c.name}
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'
            >
              <Link
                href={`/${game}/learn/${c.name}`}
                className='block p-4 text-center text-lg font-medium text-gray-800 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                {c.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <h3>Tricks</h3>
      <ul className='flex flex-wrap justify-center'>
        {tricks.map((t) => {
          return (
            <li
              key={t.name}
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'
            >
              <Link
                href={`/${game}/learn/${t.name}`}
                className='block p-4 text-center text-lg font-medium text-gray-800 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                {t.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
