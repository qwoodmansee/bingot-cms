export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <nav></nav>
        <main>
          <div className='min-h-screen'>{children}</div>
        </main>
      </body>
    </html>
  );
}
