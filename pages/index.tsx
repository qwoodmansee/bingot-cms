import Layout from '../components/layout';

export default function Index({ preview, children }) {
  return (
    <>
      <Layout preview={preview}>{children}</Layout>
    </>
  );
}
