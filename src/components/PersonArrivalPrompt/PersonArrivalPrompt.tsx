import { useDispatch } from "react-redux";
import { addPerson, dismissEvent } from "../../redux/gameActions";
import { Modal } from "../Modal/Modal";

export function PersonArrivalPrompt() {
  const dispatch = useDispatch();
  const dismiss = () => dispatch(dismissEvent());

  return (
    <Modal xButtonFunction={dismiss}>
      <div>A person wants to join your settlement.</div>
      <button onClick={() => dispatch(addPerson())}>Accept</button>
      <button onClick={dismiss}>Reject</button>
    </Modal>
  );
}
