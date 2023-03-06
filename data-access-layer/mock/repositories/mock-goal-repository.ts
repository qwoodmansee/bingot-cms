import { Goal } from '../../../domain-import-only/Goal';
import { IGoalReporistory } from '../../repository-interfaces/goal-repository';
import { LEGACY_SOURCE_GOALS, legacy_goal_to_goal } from '../legacy-goals';
import { MockTrickRepository } from './mock-trick-repository';

export class MockGoalRepository implements IGoalReporistory {
  /**
   * Gets mocked goals based on a list of names, not utilizing a CMS at all.
   * @param goalNames the names of the goals you'd like to search for.
   * @returns an array of complete goal domain objects which have a naming matching your param.
   */
  async searchGoalsByNames(goalNames: string[]): Promise<Goal[]> {
    const legacyGoals = LEGACY_SOURCE_GOALS.filter((lg) =>
      goalNames.includes(lg.goalName)
    );
    const trickRepository = new MockTrickRepository();
    const allTricks = await trickRepository.getAllTricks();

    return legacyGoals.map((lg) => legacy_goal_to_goal(lg, allTricks));
  }

  /**
   * Gets all available mocked goals, not utilizing a CMS at all.
   * @returns All available mock goals, as complete domain objects
   */
  async getAllGoals(): Promise<Goal[]> {
    const goals = [];
    const trickRepository = new MockTrickRepository();
    const allTricks = await trickRepository.getAllTricks();
    for (const legacyGoal of LEGACY_SOURCE_GOALS) {
      const goal = await legacy_goal_to_goal(legacyGoal, allTricks);
      goals.push(goal);
    }

    return goals;
  }
}
