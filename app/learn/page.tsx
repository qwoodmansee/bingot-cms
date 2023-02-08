import Link from 'next/link';
import { getAllTricks } from '../../data-access-layer/repositories/contentful-trick-repository';

export default async function Page({ params: { game } }) {
  const tricks = await getAllTricks();
  return (
    <ul>
      {tricks.map((t) => {
        return (
          <Link
            key={t.name}
            href={`/learn/oot/${t.name}`}
            className='hover:underline'
          >
            {t.name}
          </Link>
        );
      })}
    </ul>
  );
}
