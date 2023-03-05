import { Goal } from '../../../domain-import-only/Goal';
import { IGoalReporistory } from '../../repository-interfaces/goal-repository';
import { MockTrickRepository } from './mock-trick-repository';

export class MockGoalRepository implements IGoalReporistory {
  async searchGoalsByNames(goalNames: string[]): Promise<Goal[]> {
    // use the domain layer to create domain objects in their entirety.
    const goals = [];
    for (const gname of goalNames) {
      const eg = await createExampleGoal(gname);
      goals.push(eg);
    }

    // return the created domain objects
    return goals;
  }
}

const createExampleGoal = async (name: string) => {
  // our "raw data" is the goal names and the tricks, but we mock those out
  // also, tricks having their own mock repository makes this trivial anyway
  const trickRepository = new MockTrickRepository();
  const mockTricks = (await trickRepository.getAllTricks()).slice(0, 5);

  const goal = Goal.create({
    name: name,
    notes: `RBA Bugs with Odd Potion then Saw on C-Right then collect two additional songs.`,
    tricks: mockTricks,
  });

  return goal;
};
