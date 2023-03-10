import Link from 'next/link';
import Avatar from './avatar';
import DateComponent from './date';
import CoverImage from './cover-image';
import { Post } from '../domain-import-only/Post';

type HeroPostFields = Pick<
  Post,
  'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
> &
  Partial<Post>;

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: HeroPostFields) {
  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <CoverImage slug={slug} coverImage={coverImage} />
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
        <div>
          <h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
            <Link
              href={`/blog/posts/${slug}`}
              className='hover:underline'
              data-cy='hero-post-title'
            >
              {title}
            </Link>
          </h3>
          <div className='mb-4 md:mb-0 text-lg'>
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
          {author && <Avatar author={author} />}
        </div>
      </div>
    </section>
  );
}
