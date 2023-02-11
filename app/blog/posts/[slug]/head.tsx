import { getPost } from '../../../../data-access-layer/contentful/repositories/contentful-post-repository';

export default async function Head({ params }) {
  const post = await getPost(params.slug);

  return (
    <>
      <title>{post.title}</title>
    </>
  );
}
