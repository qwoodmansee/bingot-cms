import {
  getAllPosts,
  getPost,
} from '../../../../data-access-layer/contentful/repositories/contentful-post-repository';
import PostPage from './post';

export async function generateStaticParams() {
  const allPosts = await getAllPosts();

  return allPosts.map((post) => ({
    slug: encodeURI(post.slug),
  }));
}

export default async function Page({ params: { slug } }) {
  const post = await getPost(slug);
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
