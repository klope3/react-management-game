import { getRandomPerson } from "./personFunctions";
import { Person } from "./types/personTypes";

const startingPopulation = 5;
export const randEventChance = 0.3;

export function getStartingPopulation(): Person[] {
  return new Array(startingPopulation).fill(() => getRandomPerson());
}
