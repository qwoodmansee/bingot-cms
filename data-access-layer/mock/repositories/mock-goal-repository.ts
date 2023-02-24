import { Goal } from '../../../domain-import-only/Goal';

export const getGoalsFromNames = async (goalNames: string[]) => {
  const mockGoals = goalNames.map((name) => createExampleGoal(name));
  return Promise.resolve(mockGoals);
};

const createExampleGoal = (name: string) => {
  const goal: Goal = {
    name: name,
    notes: `Fake notes for goal ${name}`,
    tricks: [
      {
        name: 'Fake Trick One',
        videoUrl:
          'https://youtu.be/T57Hfh3bWr8?list=TLPQMjAwNjIwMjCT5KarRPwM5g&t=72',
      },
      {
        name: 'Fake Trick Two',
        videoUrl:
          'https://youtu.be/T57Hfh3bWr8?list=TLPQMjAwNjIwMjCT5KarRPwM5g&t=72',
      },
    ],
  };

  return goal;
};
