import { PreviewModeAlert } from '../components/preview-mode-alert';
import Footer from '../components/footer';
import Meta from '../components/meta';
import { BingoTeacherNavBar } from './bingo-teacher-components/bingoTeacherNavBar';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <BingoTeacherNavBar />
      <div className='min-h-screen'>
        {preview && <PreviewModeAlert />}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
