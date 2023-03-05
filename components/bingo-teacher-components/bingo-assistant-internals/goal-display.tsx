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
      <div className='flex items-center justify-between py-4 lg:py-8'>
        <h3 className='text-2xl lg:text-3xl font-bold'>{goal.name}</h3>
        <div className='flex justify-end'>
          <button
            className='text-lg lg:text-xl font-bold bg-transparent text-pink-500 border-2 border-pink-500 py-2 px-4 rounded-full shadow hover:bg-pink-500 hover:text-white transition-colors duration-300 focus:outline-none'
            onClick={toggle}
          >
            {isOpen ? 'Hide' : 'Show'}
          </button>
          <button
            onClick={() => onXPressed(goal.name)}
            className='ml-4 text-lg lg:text-xl font-bold bg-transparent text-pink-500 border-2 border-pink-500 py-2 px-4 rounded-full shadow hover:bg-pink-500 hover:text-white transition-colors duration-300 focus:outline-none'
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
                className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4 lg:p-2'
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
