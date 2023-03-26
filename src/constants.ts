import { getRandomPerson } from "./personFunctions";
import { store } from "./redux/gameStore";
import { Person } from "./types/personTypes";

const startingPopulation = 5;
export const randEventChance = 0.3;
export const startingFood = 50;
export const foodCostPerDayPerPerson = 2;

export function getStartingPopulation(): Person[] {
  return new Array(startingPopulation).fill(() => getRandomPerson());
}

export function isMaxStarvationReached(food: number, populationCount: number) {
  return food < 0; //change this in future to allow for a period of starvation before game over
}

export function checkGameOver() {
  const state = store.getState();
  const maxStarvation = isMaxStarvationReached(
    state.food,
    state.population.length
  );

  return maxStarvation;
}
