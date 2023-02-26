'use client';

import { useState } from 'react';
import { Goal } from '../../domain-import-only/Goal';
import { Trick } from '../../domain-import-only/Trick';
import Collapse from '../tailwind-components-kimia-ui/collapse/collapse';
import YoutubeDisplayer from './youtube-displayer';

interface TrickDisplayProps {
  trick: Trick;
}

const TrickDisplay = ({ trick }: TrickDisplayProps) => {
  return (
    <>
      <h4>{trick.name}</h4>
      <YoutubeDisplayer title={trick.name} youtubeVideo={trick.video} />
    </>
  );
};

interface GoalDisplayProps {
  goal: Goal;
}

const GoalDisplay = ({ goal }: GoalDisplayProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='flex items-center justify-between py-4 lg:py-8'>
        <h3 className='text-2xl lg:text-3xl font-bold'>{goal.name}</h3>
        <button
          className='text-lg lg:text-xl font-bold bg-transparent text-pink-500 border-2 border-pink-500 py-2 px-4 rounded-full shadow hover:bg-pink-500 hover:text-white transition-colors duration-300 focus:outline-none'
          onClick={toggle}
        >
          Toggle
        </button>
      </div>
      <Collapse isOpen={isOpen}>
        <div className='flex flex-wrap justify-center lg:justify-start'>
          {goal.tricks.map((t) => (
            <div
              key={t.name}
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 lg:p-2'
            >
              <div className='bg-white shadow-lg rounded-lg p-4'>
                <TrickDisplay trick={t} />
              </div>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

interface BingoAssistantProps {
  goals: Array<Goal>;
}

export const BingoAssistant = ({ goals }: BingoAssistantProps) => {
  return (
    <div>
      {goals.map((g, i) => (
        <GoalDisplay goal={g} key={`${g.name}${i}`} />
      ))}
    </div>
  );
};
