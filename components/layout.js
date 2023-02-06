import PreviewModeAlert from '../components/preview-mode-alert';
import Footer from '../components/footer';
import { BingoTeacherNavBar } from './bingo-teacher-components/bingoTeacherNavBar';

export default function Layout({ preview, children }) {
  return (
    <>
      <BingoTeacherNavBar />
      <div className='min-h-screen'>
        {preview && <PreviewModeAlert />}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
