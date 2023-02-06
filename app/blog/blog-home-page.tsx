'use client';

import Head from 'next/head';
import Container from '../../components/container';
import MoreStories from '../../components/more-stories';
import HeroPost from '../../components/hero-post';
import Intro from '../../components/intro';

export default function BlogHomePage({ allPosts }) {
  const heroPost = allPosts[0];
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
            title={heroPost.fields.title}
            coverImage={heroPost.fields.coverImage}
            date={heroPost.fields.date}
            author={heroPost.fields.author}
            slug={heroPost.fields.slug}
            excerpt={heroPost.fields.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  );
}
