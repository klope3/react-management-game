import { randEventChance } from "./constants";
import { GameEvent } from "./types/eventTypes";

export function shouldStartOfDayEventHappen(day: number) {
  return Math.random() < randEventChance;
}

export function getRandomEvent(): GameEvent {
  return {
    type: "Person Arrival",
  };
}
