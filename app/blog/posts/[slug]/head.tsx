import { getPostFromSlug } from '../../../../contenful/contentful-content-service';

export default async function Head({ params }) {
  const post = await getPostFromSlug(params.slug);

  return (
    <>
      <title>{post.title}</title>
    </>
  );
}
