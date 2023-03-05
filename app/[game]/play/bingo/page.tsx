import { BingoAssistant } from '../../../../components/bingo-teacher-components/bingo-assistant';
import { searchGoalsByNames } from '../../../../data-access-layer/factories/goal-factory';
import { GoalMapper } from '../../../../data-access-layer/mappers/goal-mapper';

export default async function Page() {
  const goals = await searchGoalsByNames(
    [
      '7 Songs',
      'All 5 Skulltulas in Sprit Temple',
      'Defeat a Skull Kid',
      'Keaton Mask',
      'Clear 10 Silver Rupee Rooms',
    ],
    process.env.CMS
  );
  return <BingoAssistant goals={goals.map((g) => GoalMapper.toJSON(g))} />;
}
