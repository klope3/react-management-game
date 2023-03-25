import { getStartingPopulation } from "../constants";
import { getRandomEvent, shouldStartOfDayEventHappen } from "../eventFunctions";
import { getRandomPerson } from "../personFunctions";
import { ADD_PERSON, ADVANCE_TIME, DISMISS_EVENT } from "../types/actionTypes";

const initialState = {
  time: 0,
  population: getStartingPopulation(),
};

export function gameReducer(state = initialState, action: any) {
  const switchingToDay = (state.time + 1) % 2 === 0;
  const event =
    switchingToDay &&
    shouldStartOfDayEventHappen(state.time) &&
    getRandomEvent();

  switch (action.type) {
    case ADVANCE_TIME:
      return {
        ...state,
        time: state.time + 1,
        viewedEvent: event,
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
    default:
      return state;
  }
}
