import { createStore } from "redux";
import { counterReducer } from "./counterReducers";

export const store = createStore(counterReducer);
