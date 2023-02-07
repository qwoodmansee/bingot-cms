import Avatar from './avatar';
import DateComponent from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import { Post } from '../domain-import-only/Post';

type PostHeaderFields = Pick<
  Post,
  'title' | 'coverImage' | 'date' | 'author' | 'slug'
> &
  Partial<Post>;

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  slug,
}: PostHeaderFields) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='hidden md:block md:mb-12'>
        {author && <Avatar author={author} />}
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <CoverImage coverImage={coverImage} slug={slug} />
      </div>
      <div className='max-w-2xl mx-auto'>
        <div className='block md:hidden mb-6'>
          {author && <Avatar author={author} />}
        </div>
        <div className='mb-6 text-lg'>
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  );
}
