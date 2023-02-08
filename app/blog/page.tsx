import { getAllPosts } from '../../data-access-layer/repositories/contentful-post-repository';
import BlogHomePage from './blog-home-page';

export default async function Page() {
  const posts = await getAllPosts();
  return <BlogHomePage allPosts={posts} />;
}
