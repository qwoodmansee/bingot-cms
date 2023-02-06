import {
  getEntries,
  getPostFromSlug,
} from '../../../../contenful/contentful-content-service';
import PostPage from './post';

export async function generateStaticParams() {
  const allPosts = await getEntries('post');

  return allPosts.items.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function Page({ params: { slug } }) {
  const post = await getPostFromSlug(slug);
  return <PostPage post={post} morePosts={[]} />;
}

// export async function getStaticProps({ params, preview = false }) {
//   const data = await getPostAndMorePosts(params.slug, preview);

//   return {
//     props: {
//       preview,
//       post: data?.post ?? null,
//       morePosts: data?.morePosts ?? null,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug();
//   return {
//     paths: allPosts?.map(({ slug }) => `/blog/posts/${slug}`) ?? [],
//     fallback: true,
//   };
// }
