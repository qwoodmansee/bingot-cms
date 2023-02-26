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
        video: {
          videoId: '',
          startTimeInSeconds: 100,
        },
      },
      {
        name: 'Spirit Entrance Block Skip',
        video: {
          videoId: 'QisEMB_uNRA',
          startTimeInSeconds: 0,
        },
      },
      {
        name: 'Defeat Skull Kid ISG',
        video: {
          videoId: 'i7htaVwLJm4',
          startTimeInSeconds: 0,
        },
      },
    ],
  };

  return goal;
};
