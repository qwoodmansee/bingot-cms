import Link from 'next/link';
import { getAllTricks } from '../../data-access-layer/factories/trick-factory';

const cms = process.env.CMS;

export default async function Page({ params: { game } }) {
  const tricks = await getAllTricks(cms);
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
