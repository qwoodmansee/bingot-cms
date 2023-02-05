import Container from './container';
import cn from 'classnames';
import Link from 'next/link';

export default function PreviewModeAlert() {
  return (
    <div className={cn('border-b bg-accent-7 border-accent-7 text-white')}>
      <Container>
        <div className='py-2 text-center text-sm'>
          <>
            This is page is a preview.{' '}
            <Link
              href='/api/exit-preview'
              className='underline hover:text-cyan duration-200 transition-colors'
            >
              Click here
            </Link>{' '}
            to exit preview mode.
          </>
        </div>
      </Container>
    </div>
  );
}
