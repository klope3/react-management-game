import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  decrementCounter,
  incrementCounter,
} from "../../redux/test/counterActions";
import "./SettlementView.css";

const selectCount = (state: any) => state.count;

export function SettlementView() {
  const placeholder = new Array(16).fill({});
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <div className="settlement-view">
        {placeholder.map((_) => (
          <div></div>
        ))}
      </div>
      <div>{count}</div>
      <button onClick={() => dispatch(decrementCounter())}>-</button>
      <button onClick={() => dispatch(incrementCounter())}>+</button>
    </>
  );
}
