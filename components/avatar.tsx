import { Author } from '../domain-import-only/Author';

type AvatarProps = Pick<Author, 'name' | 'picture'> & Partial<Author>;

export default function Avatar({ author }: { author: AvatarProps }) {
  return (
    <div className='flex items-center'>
      <div className='relative w-12 h-12 mr-4'>{author.picture}</div>
      <div className='text-xl font-bold'>{author.name}</div>
    </div>
  );
}

// import { IAuthorFields } from '../data-access-layer/contentful/@types/generated/contentful';
// import ContentfulImage from './contentful-image';

// export default function Avatar(author: IAuthorFields) {
//   return (
//     <div className='flex items-center'>
//       <div className='relative w-12 h-12 mr-4'>
//         <ContentfulImage
//           src={author.picture?.fields.file.url}
//           fill
//           className='rounded-full'
//           alt={author.name}
//         />
//       </div>
//       <div className='text-xl font-bold'>{author.name}</div>
//     </div>
//   );
// }
