'use client';

import Container from '../../../../components/container';
import MoreStories from '../../../../components/more-stories';
import PostBody from '../../../../components/post-body';
import PostHeader from '../../../../components/post-header';
import SectionSeparator from '../../../../components/section-separator';
import { IPostFields } from '../../../../contenful/@types/generated/contentful';

type SubsetPostProps = Pick<
  IPostFields,
  'coverImage' | 'title' | 'slug' | 'date' | 'author'
> &
  Partial<IPostFields>;

interface PostProps {
  post: SubsetPostProps;
  morePosts: Array<unknown>;
}
export default function Post({ post, morePosts }: PostProps) {
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
