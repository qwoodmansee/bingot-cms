import { getAllPosts } from '../../data-access-layer/factories/post-factory';
import BlogHomePage from './blog-home-page';

const cms = process.env.CMS;

export default async function Page() {
  const posts = await getAllPosts(cms);
  return <BlogHomePage allPosts={posts} />;
}
