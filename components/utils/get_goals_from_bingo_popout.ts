import { GoalDto } from '../../data-access-layer/mappers/goal-mapper';

export const getGoalsFromUrl = (url: string, goals: Array<GoalDto>) => {
  const splitURL = url.split('%3D');
  if (splitURL.length === 1) return [];
  const encodedGoalsString = splitURL[1];
  const encodedGoalsList = encodedGoalsString.split('%3B%3B%3B');
  const checkSet = new Set();
  encodedGoalsList.forEach((encodedGoalString) => {
    let decodedGoalName = decodeURI(encodedGoalString);
    // special cases that decodeURI misses
    decodedGoalName = decodedGoalName.replace('%26', '&');
    checkSet.add(decodeURI(decodedGoalName));
  });

  const foundGoals = goals.filter((goal) => checkSet.has(goal.name));
  return foundGoals;
};
