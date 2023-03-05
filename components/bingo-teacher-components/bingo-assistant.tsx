'use client';

import React from 'react';
import { useState } from 'react';
import { GoalDto } from '../../data-access-layer/mappers/goal-mapper';
import { TrickDto } from '../../data-access-layer/mappers/trick-mapper';
import Autocomplete from '../tailwind-components-kimia-ui/autocomplete/autocomplete';
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
  goal: GoalDto;
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

export const getGoalsFromUrl = (url: string, goals: Array<GoalDto>) => {
  const splitURL = url.split('%3D');
  if (splitURL.length === 1) return [];
  const encodedGoalsString = splitURL[1];
  const encodedGoalsList = encodedGoalsString.split('%3B%3B%3B');
  const checkSet = new Set();
  encodedGoalsList.forEach((encodedGoalString) => {
    let decodedGoalName = decodeURI(encodedGoalString);
    // special cases that decodeURI misses
    decodedGoalName = decodedGoalName.replace('%26', '&');
    checkSet.add(decodeURI(decodedGoalName));
  });

  const foundGoals = goals.filter((goal) => checkSet.has(goal.name));
  return foundGoals;
};

export const BingoAssistant = ({ goals }: BingoAssistantProps) => {
  const [showFundamentals, setShowFundamentals] = useState(false);
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [bingoUrl, setBingoUrl] = React.useState('');
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
            className='px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-gray-100'
            onClick={handleParseClicked}
          >
            Parse Bingo URL
          </button>
        </div>
      </div>
      {goalsToDisplay.map((g, i) => (
        <GoalDisplay
          goal={g}
          key={`${g.name}${i}`}
          showFundamentals={showFundamentals}
        />
      ))}
    </div>
  );
};
