'use client';

import Container from '../../../../components/container';
import MoreStories from '../../../../components/more-stories';
import PostBody from '../../../../components/post-body';
import PostHeader from '../../../../components/post-header';
import SectionSeparator from '../../../../components/section-separator';
import { Post } from '../../../../domain-import-only/Post';

export default function Post({
  post,
  morePosts,
}: {
  post: Post;
  morePosts: Array<Post>;
}) {
  return (
    <Container>
      <>
        <article>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
          />
          <PostBody content={post.content} />
        </article>
        <SectionSeparator />
        {morePosts && morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </>
    </Container>
  );
}
