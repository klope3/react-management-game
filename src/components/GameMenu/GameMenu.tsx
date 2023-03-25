import { useDispatch, useSelector } from "react-redux";
import { advanceTime } from "../../redux/gameActions";
import "./GameMenu.css";

const selectTime = (state: any) => state.time;

export function GameMenu() {
  const time = useSelector(selectTime);
  const dispatch = useDispatch();
  const dayText = `Day ${Math.floor(time / 2)} (${time % 2 === 0 ? "D" : "N"})`;

  return (
    <div className="game-menu">
      <div>{dayText}</div>
      <div>
        <button>Settlement</button>
        <button>Projects</button>
        <button>Missions</button>
        <button>Events</button>
      </div>
      <div>
        <button onClick={() => dispatch(advanceTime())}>{">>"}</button>
      </div>
    </div>
  );
}
