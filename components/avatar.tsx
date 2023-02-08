import { Author } from '../domain-import-only/Author';
import Image from 'next/image';

type AvatarProps = Pick<Author, 'name' | 'picture'> & Partial<Author>;

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props) => {
  return (
    <Image
      loader={contentfulLoader}
      alt='contentful-image'
      {...props}
      style={{
        maxWidth: '100%',
      }}
    />
  );
};
export default function Avatar({ author }: { author: AvatarProps }) {
  return (
    <div className='flex items-center'>
      <div className='relative w-12 h-12 mr-4'>
        <ContentfulImage
          src={author.picture}
          fill
          className='rounded-full'
          alt={author.name}
        />
      </div>
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
