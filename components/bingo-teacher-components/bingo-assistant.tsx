'use client';

import { useState } from 'react';
import { Goal } from '../../domain-import-only/Goal';
import { TrickDto } from '../../data-access-layer/mappers/trick-mapper';
import Collapse from '../tailwind-components-kimia-ui/collapse/collapse';
import { CheckboxButton } from './checkbox-button';
import YoutubeDisplayer from './youtube-displayer';

interface TrickDisplayProps {
  trick: TrickDto;
}

const TrickDisplay = ({ trick }: TrickDisplayProps) => {
  const bgColor = trick.isFundamental ? 'bg-secondary text-white' : 'bg-white';
  return (
    <div className={`${bgColor} shadow-lg rounded-lg p-4 font-bold`}>
      <h4>{trick.name}</h4>
      <YoutubeDisplayer title={trick.name} youtubeVideo={trick.video} />
    </div>
  );
};

interface GoalDisplayProps {
  goal: Goal;
  showFundamentals: boolean;
}

const GoalDisplay = ({ goal, showFundamentals }: GoalDisplayProps) => {
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
          {isOpen ? 'Hide' : 'Show'}
        </button>
      </div>

      <Collapse isOpen={isOpen}>
        <div className='flex flex-wrap justify-center lg:justify-start'>
          {goal.tricks.map((t) => {
            if (t.isFundamental && !showFundamentals) {
              return null;
            }

            return (
              <div
                key={t.name}
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

interface BingoAssistantProps {
  goals: Array<Goal>;
}

export const BingoAssistant = ({ goals }: BingoAssistantProps) => {
  const [showFundamentals, setShowFundamentals] = useState(false);
  return (
    <div>
      <CheckboxButton
        initialViewState={showFundamentals}
        onToggle={() => setShowFundamentals(!showFundamentals)}
      >
        {showFundamentals ? 'Hide Fundmentals' : 'Show Fundamentals'}
      </CheckboxButton>
      {goals.map((g, i) => (
        <GoalDisplay
          goal={g}
          key={`${g.name}${i}`}
          showFundamentals={showFundamentals}
        />
      ))}
    </div>
  );
};
