import {
  foodCostPerDayPerPerson,
  getStartingPopulation,
  isMaxStarvationReached,
  startingFood,
} from "../constants";
import { getRandomEvent, shouldStartOfDayEventHappen } from "../eventFunctions";
import { getRandomPerson } from "../personFunctions";
import {
  ADD_PERSON,
  ADVANCE_TIME,
  DISMISS_EVENT,
  NEW_GAME,
} from "../types/actionTypes";

const initialState = {
  time: 0,
  population: getStartingPopulation(),
  food: startingFood,
  isGameOver: false,
};

export function gameReducer(state = initialState, action: any) {
  const switchingToDay = (state.time + 1) % 2 === 0;
  const event =
    switchingToDay &&
    shouldStartOfDayEventHappen(state.time) &&
    getRandomEvent();
  const newFood = !switchingToDay
    ? state.food - state.population.length * foodCostPerDayPerPerson
    : state.food;
  const maxStarvation = isMaxStarvationReached(
    newFood,
    state.population.length
  );

  switch (action.type) {
    case ADVANCE_TIME:
      return {
        ...state,
        time: state.time + 1,
        viewedEvent: event,
        food: newFood,
        isGameOver: maxStarvation,
      };
    case DISMISS_EVENT:
      return {
        ...state,
        viewedEvent: undefined,
      };
    case ADD_PERSON:
      return {
        ...state,
        viewedEvent: undefined,
        population: [...state.population, getRandomPerson()],
      };
    case NEW_GAME:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
