'use client';

import React from 'react';
import { useState } from 'react';
import { GoalDto } from '../../data-access-layer/mappers/goal-mapper';
import Button from '../tailwind-components-kimia-ui/button/button';
import { getGoalsFromUrl } from '../utils/get_goals_from_bingo_popout';
import { GoalDisplay } from './bingo-assistant-internals/goal-display';
import { GoalSearchAutocomplete } from './bingo-assistant-internals/goal-search-autocomplete';
import { PopoutUrlParseInput } from './bingo-assistant-internals/popout-url-parse-input';
import { CheckboxButton } from './checkbox-button';

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
    <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-4/7 px-1'>
          {goalsToDisplay.length > 0 ? (
            <div className='flex flex-wrap justify-between items-center mt-4'>
              <CheckboxButton
                initialViewState={showFundamentals}
                onToggle={() => setShowFundamentals(!showFundamentals)}
              >
                {showFundamentals ? 'Hide Fundmentals' : 'Show Fundamentals'}
              </CheckboxButton>
              <Button
                className='text-m lg:text-l font-bold bg-transparent text-white-500 border-2 border-white-500 py-1 px-2 shadow hover:bg-pink-500 hover:text-white transition-colors duration-300 focus:outline-none ml-4'
                onClick={() => setGoalsToDisplay([])}
              >
                Remove All Goals
              </Button>
            </div>
          ) : (
            <h2>Search for goals or paste in a popout card url!</h2>
          )}

          <div className='grid gap-6 mt-4'>
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
        </div>

        <div className='w-full lg:w-1/4 lg:pl-3 mt-4 lg:mt-0'>
          <div className='mb-4'>
            <GoalSearchAutocomplete
              searchBarValue={searchBarValue}
              handleSearchValueChanged={handleSearchValueChanged}
              allGoalNames={allGoalNames}
            />
          </div>

          <PopoutUrlParseInput
            bingoUrl={bingoUrl}
            setBingoUrl={setBingoUrl}
            handleParseClicked={handleParseClicked}
          />
        </div>
      </div>
    </div>
  );
};
