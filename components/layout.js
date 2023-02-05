import Alert from '../components/alert';
import Footer from '../components/footer';
import Meta from '../components/meta';
import { BingoTeacherNavBar } from './bingo-teacher-components/bingoTeacherNavBar';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className='min-h-screen'>
        <BingoTeacherNavBar />
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
