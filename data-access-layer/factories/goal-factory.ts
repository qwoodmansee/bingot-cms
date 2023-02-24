import { Goal } from '../../domain-import-only/Goal';
import { getGoalsFromNames as MockGetGoalsFromNames } from '../mock/repositories/mock-goal-repository';

export const getGoalsFromNames = async (
  goalNames: string[],
  cms: string
): Promise<Goal[] | null> => {
  if (cms === 'Mock') {
    return await MockGetGoalsFromNames(goalNames);
  } else {
    throw new Error(
      `Selected CMS (${cms}) does not provide goals. did you implement a goal repository and add it to the factory? Have you checked your environment variables?`
    );
  }
};
