export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>BingoTeacher</title>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#000' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      <meta
        name='description'
        content={`A tool to help speedrunners learn new tricks.`}
      />
    </>
  );
}
