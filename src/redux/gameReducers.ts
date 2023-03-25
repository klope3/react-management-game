import { ADVANCE_TIME } from "../types/actionTypes";

const initialState = {
  time: 0,
};

export function timeReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADVANCE_TIME:
      return {
        ...state,
        time: state.time + 1,
      };
    default:
      return state;
  }
}
