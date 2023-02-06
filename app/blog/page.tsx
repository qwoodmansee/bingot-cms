import { getEntries } from '../../contenful/contentful-content-service';
import BlogHomePage from './blog-home-page';

async function getAllPosts({ preview = false }) {
  const posts = await getEntries('post');
  if (posts.errors) {
    console.error('No posts found');
    return [];
  }

  return posts.items;
}

export default async function Page() {
  const posts = await getAllPosts({});
  return <BlogHomePage allPosts={posts} />;
}
