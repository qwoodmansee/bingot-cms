'use client';

interface PopoutUrlParseInputProps {
  bingoUrl: string;
  label?: string;
  setBingoUrl: (url: string) => void;
  handleParseClicked: () => void;
}
export const PopoutUrlParseInput = ({
  bingoUrl,
  setBingoUrl,
  handleParseClicked,
  label = '',
}: PopoutUrlParseInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type='text'
        value={bingoUrl}
        onChange={(e) => setBingoUrl(e.target.value)}
        placeholder='Paste your Bingo URL here...'
        className='border border-gray-400 rounded-l-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent flex-1'
      />
      <button
        type='button'
        className='px-4 py-2 rounded-r-md text-white bg-gradient-to-r from-pink-500 to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all duration-300 ease-in-out transform '
        onClick={handleParseClicked}
      >
        Parse Popout URL
      </button>
    </div>
  );
};
