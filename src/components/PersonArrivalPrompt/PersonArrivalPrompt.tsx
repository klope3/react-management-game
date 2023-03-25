import { useDispatch } from "react-redux";
import { addPerson, dismissEvent } from "../../redux/gameActions";

export function PersonArrivalPrompt() {
  const dispatch = useDispatch();
  const dismiss = () => dispatch(dismissEvent());

  return (
    <div className="modal-bg">
      <div className="modal">
        <div>A person wants to join your settlement.</div>
        <button onClick={() => dispatch(addPerson())}>Accept</button>
        <button onClick={dismiss}>Reject</button>
        <button className="modal-x" onClick={dismiss}>
          X
        </button>
      </div>
    </div>
  );
}
