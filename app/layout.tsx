import { Inter, Roboto_Mono } from '@next/font/google';
import { BingoTeacherNavBar } from '../components/bingo-teacher-components/bingoTeacherNavBar';
import Footer from '../components/footer';
import PreviewModeAlert from '../components/preview-mode-alert';
import '../styles/index.css';
import { previewData } from 'next/headers';

const inter = Inter({
  variable: '--font-inter',
  display: 'optional',
});

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  display: 'optional',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${roboto_mono.variable} bg-gray-800 text-white`}
    >
      <body>
        <nav className='bg-gray-900'>
          <BingoTeacherNavBar />
          {previewData() && <PreviewModeAlert />}
        </nav>
        <main className='container mx-auto'>
          <div className='min-h-screen'>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
