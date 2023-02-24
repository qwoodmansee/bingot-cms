'use client';

import Container from '../../../../components/container';
import MoreStories from '../../../../components/more-stories';
import PostBody from '../../../../components/post-body';
import PostHeader from '../../../../components/post-header';
import SectionSeparator from '../../../../components/section-separator';
import { Post } from '../../../../domain-import-only/Post';

// really ugly thing here - cms is necessary to know how to render rich text style content.
// didn't want to make the env var public so it will come down from the server. Switching this
// version on the client would be possible but worthless, it would just ruin rendering.
export default function PostScreen({
  post,
  morePosts,
  cmsRichTextRenderingStrategy,
}: {
  post: Post;
  morePosts: Array<Post>;
  cmsRichTextRenderingStrategy: string;
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
          <PostBody content={post.content} cms={cmsRichTextRenderingStrategy} />
        </article>
        <SectionSeparator />
        {morePosts && morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </>
    </Container>
  );
}
