import { getAllPosts } from '../../data-access-layer/contentful/repositories/contentful-post-repository';
import BlogHomePage from './blog-home-page';

export default async function Page() {
  const posts = await getAllPosts();
  return <BlogHomePage allPosts={posts} />;
}
