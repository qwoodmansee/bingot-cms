import {
  getAllPosts,
  getPost,
} from '../../../../data-access-layer/factories/post-factory';
import PostPage from './post';

const cms = process.env.CMS;

export async function generateStaticParams() {
  const allPosts = await getAllPosts(cms);

  return allPosts.map((post) => ({
    slug: encodeURI(post.slug),
  }));
}

export default async function Page({ params: { slug } }) {
  const post = await getPost(slug, cms);
  return (
    <PostPage post={post} morePosts={[]} cmsRichTextRenderingStrategy={cms} />
  );
}
