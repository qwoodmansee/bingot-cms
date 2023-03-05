'use client';

import React from 'react';
import { useState } from 'react';
import { GoalDto } from '../../data-access-layer/mappers/goal-mapper';
import { TrickDto } from '../../data-access-layer/mappers/trick-mapper';
import Autocomplete from '../tailwind-components-kimia-ui/autocomplete/autocomplete';
import Collapse from '../tailwind-components-kimia-ui/collapse/collapse';
import { getGoalsFromUrl } from '../utils/get_goals_from_bingo_popout';
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
  goal: GoalDto;
  showFundamentals: boolean;
  onXPressed: (goalName: string) => void;
}

const GoalDisplay = ({
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

interface BingoAssistantProps {
  goals: Array<GoalDto>;
}

export const BingoAssistant = ({ goals }: BingoAssistantProps) => {
  const [showFundamentals, setShowFundamentals] = useState(false);
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [bingoUrl, setBingoUrl] = React.useState(
    'https://ootbingo.github.io/bingo/bingo-popout.html#ROW4%3DObtain%20all%205%20Small%20Keys%20in%20Forest%20Temple%3B%3B%3B30%20Different%20Skulltulas%3B%3B%3BMap%20%26%20Compass%20in%20Bottom%20of%20the%20Well%3B%3B%3BMap%20%26%20Compass%20in%20Spirit%20Temple%3B%3B%3BWater%20Medallion'
  );
  const allGoalNames = goals.map((g) => g.name);
  const [goalsToDisplay, setGoalsToDisplay] = useState<Array<GoalDto>>([]);

  const handleParseClicked = () => {
    const foundGoals = getGoalsFromUrl(bingoUrl, goals);
    const filteredFoundGoals = foundGoals.filter((foundGoal) => {
      return !goalsToDisplay.some((goal) => goal.name === foundGoal[0]?.name);
    });

    setGoalsToDisplay([...goalsToDisplay, ...filteredFoundGoals]);
  };

  const handleSearchValueChanged = (goalName) => {
    setSearchBarValue(goalName);
    if (!goalsToDisplay.find((g) => g.name === goalName)) {
      const goal = goals.find((g) => g.name === goalName);
      if (goal) {
        setGoalsToDisplay([...goalsToDisplay, goal]);
        setSearchBarValue('');
      }
    } else {
      setSearchBarValue(goalName);
    }
  };

  const handleRemoveGoal = (goalName: string) => {
    const newGoalsToDisplay = goalsToDisplay.filter((g) => g.name !== goalName);
    setGoalsToDisplay(newGoalsToDisplay);
  };

  return (
    <div>
      <CheckboxButton
        initialViewState={showFundamentals}
        onToggle={() => setShowFundamentals(!showFundamentals)}
      >
        {showFundamentals ? 'Hide Fundmentals' : 'Show Fundamentals'}
      </CheckboxButton>
      <div className='m-8'>
        <Autocomplete
          value={searchBarValue}
          setValue={handleSearchValueChanged}
          name='search'
          label='Goals'
          placeholder='Search for a goal...'
          suggestions={allGoalNames}
          notFound='No goals found with that name!'
        />
        <div className='flex mt-4'>
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
            Parse Bingo Popout URL
          </button>
        </div>
      </div>
      {goalsToDisplay.map((g, i) => (
        <div key={`${g.name}${i}`} className='relative'>
          <GoalDisplay
            goal={g}
            showFundamentals={showFundamentals}
            onXPressed={handleRemoveGoal}
          />
        </div>
      ))}
    </div>
  );
};
