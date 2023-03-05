import { Goal } from '../../domain-import-only/Goal';

export interface IGoalReporistory {
  searchGoalsByNames(goalNames: string[]): Promise<Goal[]>;
}
