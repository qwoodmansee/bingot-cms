import { g } from '../../../../data-access-layer/contentful/contentful-content-service';

export default async function Head({ params }) {
  const post = await getPostFromSlug(params.slug);

  return (
    <>
      <title>{post.title}</title>
    </>
  );
}
