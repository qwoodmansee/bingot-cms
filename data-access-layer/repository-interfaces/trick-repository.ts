import { Trick } from '../../domain-import-only/Trick';

export interface ITrickReporistory {
  getTrick(trickName: string): Promise<Trick>;
  getAllTricks(): Promise<Trick[]>;
}
