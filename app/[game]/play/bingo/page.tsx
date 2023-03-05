import React from 'react';
import { BingoAssistant } from '../../../../components/bingo-teacher-components/bingo-assistant';
import { getAllGoals } from '../../../../data-access-layer/factories/goal-factory';
import { GoalMapper } from '../../../../data-access-layer/mappers/goal-mapper';

export default async function Page() {
  const goals = await getAllGoals(process.env.CMS);

  return (
    <div>
      <div>
        <BingoAssistant goals={goals.map((g) => GoalMapper.toJSON(g))} />
      </div>
    </div>
  );
}
