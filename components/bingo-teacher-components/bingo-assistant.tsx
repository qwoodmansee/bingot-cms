'use client';

import React from 'react';
import { useState } from 'react';
import { GoalDto } from '../../data-access-layer/mappers/goal-mapper';
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
    <div>
      <GoalSearchAutocomplete
        searchBarValue={searchBarValue}
        handleSearchValueChanged={handleSearchValueChanged}
        allGoalNames={allGoalNames}
      />

      <PopoutUrlParseInput
        bingoUrl={bingoUrl}
        setBingoUrl={setBingoUrl}
        handleParseClicked={handleParseClicked}
      />

      <CheckboxButton
        initialViewState={showFundamentals}
        onToggle={() => setShowFundamentals(!showFundamentals)}
      >
        {showFundamentals ? 'Hide Fundmentals' : 'Show Fundamentals'}
      </CheckboxButton>

      <button
        className='text-lg lg:text-xl font-bold bg-transparent text-white-500 border-2 border-white-500 py-2 px-4 rounded-full shadow hover:bg-pink-500 hover:text-white transition-colors duration-300 focus:outline-none'
        onClick={() => setGoalsToDisplay([])}
      >
        Remove All Goals
      </button>

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
