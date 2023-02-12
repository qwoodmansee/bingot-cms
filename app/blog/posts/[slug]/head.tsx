import { getPost } from '../../../../data-access-layer/factories/post-factory';

const cms = process.env.CMS;

export default async function Head({ params }) {
  const post = await getPost(params.slug, cms);

  return (
    <>
      <title>{post.title}</title>
    </>
  );
}
