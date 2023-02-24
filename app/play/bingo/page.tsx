import { BingoAssistant } from '../../../components/bingo-teacher-components/bingo-assistant';
import { getGoalsFromNames } from '../../../data-access-layer/factories/goal-factory';

export default async function Page() {
  const goals = await getGoalsFromNames(
    ['Fake Goal One', 'Fake Goal Two', 'Fake Goal Three'],
    process.env.CMS
  );
  return <BingoAssistant goals={goals} />;
}
