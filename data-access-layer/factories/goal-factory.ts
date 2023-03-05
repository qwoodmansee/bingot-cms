import { Goal } from '../../domain-import-only/Goal';
import { MockGoalRepository } from '../mock/repositories/mock-goal-repository';

export const searchGoalsByNames = async (
  goalNames: string[],
  cms: string
): Promise<Goal[] | null> => {
  if (cms === 'Mock') {
    const repository = new MockGoalRepository();
    return await repository.searchGoalsByNames(goalNames);
  } else {
    throw new Error(
      `Selected CMS (${cms}) does not provide goals. did you implement a goal repository and add it to the factory? Have you checked your environment variables?`
    );
  }
};

export const getAllGoals = async (cms: string): Promise<Goal[] | null> => {
  if (cms === 'Mock') {
    const repository = new MockGoalRepository();
    return await repository.getAllGoals();
  } else {
    throw new Error(
      `Selected CMS (${cms}) does not provide goals. did you implement a goal repository and add it to the factory? Have you checked your environment variables?`
    );
  }
};
