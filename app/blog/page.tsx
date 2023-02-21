import { getAllPosts } from '../../data-access-layer/factories/post-factory';
import BlogHomePage from './blog-home-page';

export default async function Page() {
  const posts = await getAllPosts(process.env.CMS);
  return <BlogHomePage allPosts={posts} />;
}
