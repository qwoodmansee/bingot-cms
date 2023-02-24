'use client';

import { Goal } from '../../domain-import-only/Goal';
import { Trick } from '../../domain-import-only/Trick';
import YoutubeDisplayer from './youtube-displayer';

interface TrickDisplayProps {
  trick: Trick;
}

const TrickDisplay = ({ trick }: TrickDisplayProps) => {
  return (
    <>
      <h4>{trick.name}</h4>
      <YoutubeDisplayer videoUrl={trick.videoUrl} />
    </>
  );
};

interface GoalDisplayProps {
  goal: Goal;
}

const GoalDisplay = ({ goal }: GoalDisplayProps) => {
  return (
    <div>
      <h3>{goal.name}</h3>
      {goal.tricks.map((t) => (
        <TrickDisplay trick={t} key={t.name} />
      ))}
    </div>
  );
};

interface BingoAssistantProps {
  goals: Array<Goal>;
}

export const BingoAssistant = ({ goals }: BingoAssistantProps) => {
  return (
    <div className='flex flex-col justify-between  space-x-4 lg:flex-row lg:justify-center'>
      {goals.map((g, i) => (
        <GoalDisplay goal={g} key={`${g.name}${i}`} />
      ))}
    </div>
  );
};
