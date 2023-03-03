import Link from 'next/link';
import { getAllTricks } from '../../../data-access-layer/factories/trick-factory';
const cms = process.env.CMS;

//TODO(quinton): this page needs work.
export async function generateStaticParams() {
  return [{ game: 'oot' }];
}

export default async function Page({ params: { slug } }) {
  const tricks = await getAllTricks(cms);
  return (
    <ul>
      {tricks.map((t) => {
        return (
          <Link
            key={t.name}
            href={`/learn/${t.name}/${t.name}`}
            className='hover:underline'
          >
            {t.name}
          </Link>
        );
      })}
    </ul>
  );
}
