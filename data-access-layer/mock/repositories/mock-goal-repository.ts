import { Goal } from '../../../domain-import-only/Goal';

export const getGoalsFromNames = async (goalNames: string[]) => {
  const mockGoals = goalNames.map((name) => createExampleGoal(name));
  return Promise.resolve(mockGoals);
};

const createExampleGoal = (name: string) => {
  const goal: Goal = {
    name: name,
    notes: `RBA Bugs with Odd Potion then Saw on C-Right then collect two additional songs.`,
    tricks: [
      {
        name: 'All 5 Spirit Skulls Route',
        videoUrl: 'https://youtu.be/eeT4BRTQN8Y?t=111',
      },
      {
        name: 'Spirit Entrance Block Skip',
        videoUrl: 'https://youtu.be/QisEMB_uNRA',
      },
      {
        name: 'Defeat Skull Kid ISG',
        videoUrl: 'https://youtu.be/i7htaVwLJm4',
      },
    ],
  };

  return goal;
};
