'use client';

import Head from 'next/head';
import Container from '../../components/container';
import MoreStories from '../../components/more-stories';
import HeroPost from '../../components/hero-post';
import Intro from '../../components/intro';
import { Post } from '../../domain-import-only/Post';

export default function BlogHomePage({ allPosts }: { allPosts: Post[] }) {
  const heroPost = allPosts[0] || null;
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Head>
        <title>BingoTeacher</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  );
}
