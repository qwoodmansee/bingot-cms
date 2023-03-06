'use client';
import { useState } from 'react';
import { GoalDto } from '../../../data-access-layer/mappers/goal-mapper';
import Collapse from '../../tailwind-components-kimia-ui/collapse/collapse';
import { TrickDisplay } from './trick-display';

interface GoalDisplayProps {
  goal: GoalDto;
  showFundamentals: boolean;
  onXPressed: (goalName: string) => void;
}

export const GoalDisplay = ({
  goal,
  showFundamentals,
  onXPressed,
}: GoalDisplayProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='flex items-center justify-between py-2 lg:py-4'>
        <h3 className='text-xl lg:text-1.5xl font-bold'>{goal.name}</h3>
        <div className='flex justify-end'>
          <button
            className='text-md lg:text-l font-bold bg-transparent text-pink-500 border-2 border-pink-500 py-1 px-2 rounded-full shadow hover:bg-pink-500 hover:text-white transition-colors duration-300 focus:outline-none'
            onClick={toggle}
          >
            {isOpen ? 'Hide' : 'Show'}
          </button>
          <button
            onClick={() => onXPressed(goal.name)}
            className='ml-2 text-md lg:text-l font-bold bg-transparent text-pink-500 border-2 border-pink-500 py-1 px-2 rounded-full shadow hover:bg-pink-500 hover:text-white transition-colors duration-300 focus:outline-none'
          >
            X
          </button>
        </div>
      </div>

      <Collapse isOpen={isOpen}>
        <div className='flex flex-wrap justify-center lg:justify-start'>
          {goal.tricks.map((t) => {
            if (t.isFundamental && !showFundamentals) {
              return null;
            }

            return (
              <div
                key={`${goal.name}${t.name}`}
                className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2 lg:p-2'
              >
                <TrickDisplay trick={t} />
              </div>
            );
          })}
        </div>
      </Collapse>
    </div>
  );
};
