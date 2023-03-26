import { useDispatch } from "react-redux";
import { newGame } from "../../redux/gameActions";
import { Modal } from "../Modal/Modal";

export function GameOver() {
  const dispatch = useDispatch();
  return (
    <Modal>
      Game Over
      <button onClick={() => dispatch(newGame())}>New Game</button>
    </Modal>
  );
}
