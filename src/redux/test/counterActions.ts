import { DECREMENT, INCREMENT } from "./counterTypes";

export function incrementCounter() {
  return {
    type: INCREMENT,
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT,
  };
}
