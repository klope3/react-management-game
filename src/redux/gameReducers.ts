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
import { GameState } from "../types/gameStateTypes";

const initialState: GameState = {
  time: 0,
  population: getStartingPopulation(),
  food: startingFood,
  isGameOver: false,
  viewedEvent: undefined,
};

export function gameReducer(state = initialState, action: any): GameState {
  switch (action.type) {
    case ADVANCE_TIME:
      return doAdvanceTime(state);
    case DISMISS_EVENT:
      return doDismissEvent(state);
    case ADD_PERSON:
      return doAddPerson(state);
    case NEW_GAME:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

function doAdvanceTime(prevState: GameState): GameState {
  const switchingToDay = (prevState.time + 1) % 2 === 0;
  const event =
    switchingToDay && shouldStartOfDayEventHappen(prevState.time)
      ? getRandomEvent()
      : undefined;
  const newFood = !switchingToDay
    ? prevState.food - prevState.population.length * foodCostPerDayPerPerson
    : prevState.food;
  const maxStarvation = isMaxStarvationReached(
    newFood,
    prevState.population.length
  );

  return {
    ...prevState,
    time: prevState.time + 1,
    viewedEvent: event,
    food: newFood,
    isGameOver: maxStarvation,
  };
}

function doDismissEvent(prevState: GameState): GameState {
  return {
    ...prevState,
    viewedEvent: undefined,
  };
}

function doAddPerson(prevState: GameState): GameState {
  return {
    ...prevState,
    viewedEvent: undefined,
    population: [...prevState.population, getRandomPerson()],
  };
}
