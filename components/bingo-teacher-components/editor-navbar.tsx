import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
export default function EditorNavbar(props) {
  return (
    <div>
      <div>
        {/* <Link href='/'>
          <ArrowUturnLeftIcon className='h-6 w-6 mr-2' />
          Return to website
        </Link> */}
        <>{props.renderDefault(props)}</>
      </div>
    </div>
  );
}
