import { IAuthorFields } from '../contenful/@types/generated/contentful';
import ContentfulImage from './contentful-image';

export default function Avatar(author: IAuthorFields) {
  return (
    <div className='flex items-center'>
      <div className='relative w-12 h-12 mr-4'>
        <ContentfulImage
          src={author.picture?.fields.file.url}
          fill
          className='rounded-full'
          alt={author.name}
        />
      </div>
      <div className='text-xl font-bold'>{author.name}</div>
    </div>
  );
}
