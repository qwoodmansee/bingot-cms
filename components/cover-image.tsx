export default function CoverImage({
  coverImage,
  slug,
}: {
  coverImage: ReactNode;
  slug: string;
}) {
  slug; // utilize this later
  return <div className='sm:mx-0'>{coverImage}</div>;
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
