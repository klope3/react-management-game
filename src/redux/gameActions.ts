import { ADD_PERSON, ADVANCE_TIME, DISMISS_EVENT } from "../types/actionTypes";

export function advanceTime() {
  return {
    type: ADVANCE_TIME,
  };
}

export function dismissEvent() {
  return {
    type: DISMISS_EVENT,
  };
}

export function addPerson() {
  return {
    type: ADD_PERSON,
  };
}
