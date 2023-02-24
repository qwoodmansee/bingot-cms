import Link from 'next/link';

const cssForNow =
  'text-lg font-bold bg-transparent text-pink-500 border-2 border-pink-500 py-16 px-4 rounded-xl shadow hover:bg-pink-500 hover:text-white transition-colors duration-300 w-full';

const cssToIterate =
  'text-lg font-bold bg-pink-500 bg-gradient-to-br from-pink-500 to-pink-400 border-2 border-pink-500 py-16 px-4 rounded-xl shadow transition-all duration-300 w-full';

function BingoButton({ label, href }) {
  const style = {
    button:
      'flex items-center justify-center w-full bg-white rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110',
    iconBox:
      'h-12 w-12 bg-pink-500 rounded-md mr-4 flex items-center justify-center text-white',
    label: 'text-lg font-medium text-gray-900',
  };
  return (
    <Link href={href} className={style.button}>
      <div className='flex items-center'>
        <div className={style.iconBox}></div>
        <div className={style.label}>{label}</div>
      </div>
    </Link>
  );
}

function ContributeButton({ label, href }) {
  const style = {
    button: cssForNow,
  };
  return (
    <Link href={href} className={style.button}>
      {label}
    </Link>
  );
}

function LearnButton({ label, href }) {
  const style = {
    link: cssForNow,
  };
  return (
    <Link href={href} className={style.link}>
      {label}
    </Link>
  );
}

export default function LandingPageCTAs() {
  return (
    <div className='flex flex-col justify-between  space-x-4 lg:flex-row lg:justify-center'>
      <LearnButton label='Learn' href='/learn' />
      <BingoButton label='Bingo' href='/play' />
      <ContributeButton label='Contribute' href='/contribute' />
    </div>
  );
}
