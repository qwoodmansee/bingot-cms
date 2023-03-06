'use client';

import { useState } from 'react';

interface CheckboxButtonProps {
  initialViewState: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const CheckboxButton = ({
  initialViewState,
  onToggle,
  children,
}: CheckboxButtonProps) => {
  const [isChecked, setIsChecked] = useState(initialViewState);

  const handleOnChange = () => {
    onToggle();
    setIsChecked(!isChecked);
  };

  return (
    <div className='flex'>
      <input
        type='checkbox'
        id='checkbox-button'
        className='peer hidden'
        checked={isChecked}
        onChange={handleOnChange}
      />
      <label
        htmlFor='checkbox-button'
        className='select none text-m lg:text-l font-bold bg-transparent text-white-500 border-2 border-white-500 py-1 px-2 shadow hover:bg-pink-500 hover:text-white transition-colors duration-300 focus:outline-none ml-4'
      >
        {children}
      </label>
    </div>
  );
};
