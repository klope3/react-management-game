import { ReactNode } from "react";
import { GameEvent } from "./eventTypes";
import { Person } from "./personTypes";

export type GameState = {
  time: number;
  population: Person[];
  food: number;
  isGameOver: boolean;
  viewedEvent: GameEvent | undefined; //will also have viewedMission, viewedCitizen, etc. for different types of modals
};
