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
        className='select-none cursor-pointer rounded-lg border-2 border-gray-200
   py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 '
      >
        {children}
      </label>
    </div>
  );
};
