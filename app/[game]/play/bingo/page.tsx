import { BingoAssistant } from '../../../../components/bingo-teacher-components/bingo-assistant';
import { getGoalsFromNames } from '../../../../data-access-layer/factories/goal-factory';

export default async function Page() {
  const goals = await getGoalsFromNames(
    [
      '7 Songs',
      'All 5 Skulltulas in Sprit Temple',
      'Defeat a Skull Kid',
      'Keaton Mask',
      'Clear 10 Silver Rupee Rooms',
    ],
    process.env.CMS
  );
  return <BingoAssistant goals={goals} />;
}
