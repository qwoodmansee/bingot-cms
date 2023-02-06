import Link from 'next/link';
import Avatar from './avatar';
import DateComponent from './date';
import CoverImage from './cover-image';
import { IPostFields } from '../contenful/@types/generated/contentful';

type PostPreviewFields = Pick<
  IPostFields,
  'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
> &
  Partial<IPostFields>;

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: PostPreviewFields) {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage title={title} slug={slug} coverImage={coverImage} />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link href={`/blog/posts/${slug}`} className='hover:underline'>
          {title}
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <DateComponent dateString={date} />
      </div>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
      {author && (
        <Avatar
          name={author.fields.name}
          pictureUrl={author.fields.picture.fields.file.url}
        />
      )}
    </div>
  );
}
