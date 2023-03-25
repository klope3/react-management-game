import { createStore } from "redux";
import { timeReducer } from "./gameReducers";

export const store = createStore(timeReducer);
