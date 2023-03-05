import { Goal } from '../../domain-import-only/Goal';
import { TrickMapper } from './trick-mapper';

export interface GoalDto {
  name: string;
  notes: string;
  tricks: {
    name: string;
    description: string;
    isFundamental: boolean;
    difficulty: number;
    video: {
      videoId: string;
      startTimeInSeconds: number;
    };
  }[];
}

export class GoalMapper {
  public static toJSON(goal: Goal): GoalDto {
    return {
      name: goal.name,
      notes: goal.notes,
      tricks: goal.tricks.map((trick) => TrickMapper.toJSON(trick)),
    };
  }

  public static toDomain({ name, notes, tricks }: GoalDto): Goal {
    return Goal.create({
      name: name,
      notes: notes,
      tricks: tricks.map((t) => TrickMapper.toDomain(t)),
    });
  }
}
