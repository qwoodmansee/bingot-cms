import Image from 'next/image';
import cn from 'classnames';

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

export default function CoverImage({
  coverImage,
  slug,
}: {
  coverImage: string;
  slug: string;
}) {
  slug; // utilize this later
  return (
    <div className='sm:mx-0'>
      <ContentfulImage
        width={2000}
        height={1000}
        src={coverImage}
        className={cn('shadow-small')}
        alt={'cover image'}
      />
    </div>
  );
}

// import ContentfulImage from './contentful-image';
// import cn from 'classnames';
// import { IPostFields } from '../data-access-layer/contentful/@types/generated/contentful';

// type CoverImageFields = Pick<IPostFields, 'coverImage' | 'title' | 'slug'> &
//   Partial<IPostFields>;

// export default function CoverImage(post: CoverImageFields) {
//   const coverImageUrl = post.coverImage.fields.file.url;
//   const postTitle = post.title;
//   const slug = post.slug;

//   const image = (
//     <ContentfulImage
//       width={2000}
//       height={1000}
//       alt={`Cover Image for ${postTitle}`}
//       className={cn('shadow-small', {
//         'hover:shadow-medium transition-shadow duration-200': post.slug,
//       })}
//       src={coverImageUrl}
//     />
//   );

//   return (
//     <div className='sm:mx-0'>
//       {slug
//         ? // <Link
//           //   href={`/blog/posts/${slug}`}
//           //   aria-label={postTitle}
//           //   legacyBehavior
//           // >
//           //   {image}
//           // </Link>
//           image
//         : image}
//     </div>
//   );
// }
