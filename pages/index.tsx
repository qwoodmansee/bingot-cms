import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';

export default function Index({ preview, children }) {
  return (
    <>
      <Layout preview={preview}>{children}</Layout>
    </>
  );
}
