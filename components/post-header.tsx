import Avatar from './avatar';
import DateComponent from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import { IPostFields } from '../contenful/@types/generated/contentful';

type PostHeaderFields = Pick<
  IPostFields,
  'title' | 'coverImage' | 'date' | 'author' | 'slug'
> &
  Partial<IPostFields>;

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
        {author && (
          <Avatar name={author.fields.name} picture={author.fields.picture} />
        )}
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      </div>
      <div className='max-w-2xl mx-auto'>
        <div className='block md:hidden mb-6'>
          {author && (
            <Avatar name={author.fields.name} picture={author.fields.picture} />
          )}
        </div>
        <div className='mb-6 text-lg'>
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  );
}
