import { DECREMENT, INCREMENT } from "./counterTypes";

const initialState = {
  count: 42,
};

export function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
