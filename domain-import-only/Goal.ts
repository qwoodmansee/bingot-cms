import { Trick } from './Trick';

export interface Goal {
  name: string;
  notes: string;
  tricks: Array<Trick>;
}
