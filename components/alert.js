import Container from './container';
import cn from 'classnames';

export default function Alert({ message }) {
  return (
    <div className={cn('border-b bg-accent-1 border-accent-2')}>
      <Container>
        <div className='py-2 text-center text-sm'>{message}</div>
      </Container>
    </div>
  );
}
