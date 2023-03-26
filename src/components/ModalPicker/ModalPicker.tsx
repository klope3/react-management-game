import { useSelector } from "react-redux";
import { GameState } from "../../types/gameStateTypes";
import { GameOver } from "../GameOver/GameOver";
import { PersonArrivalPrompt } from "../PersonArrivalPrompt/PersonArrivalPrompt";

export function ModalPicker() {
  const isGameOver = useSelector((state: GameState) => state.isGameOver);
  const viewedEvent = useSelector((state: GameState) => state.viewedEvent);

  return (
    <>
      {viewedEvent && viewedEvent.type === "Person Arrival" && (
        <PersonArrivalPrompt />
      )}
      {isGameOver && <GameOver />}
    </>
  );
}
