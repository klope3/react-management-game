import { useDispatch, useSelector } from "react-redux";
import { advanceTime } from "../../redux/gameActions";
import { GameState } from "../../types/gameStateTypes";
import "./GameMenu.css";

export function GameMenu() {
  const time = useSelector((state: GameState) => state.time);
  const population = useSelector((state: GameState) => state.population);
  const food = useSelector((state: GameState) => state.food);
  const dispatch = useDispatch();
  const dayText = `Day ${Math.floor(time / 2)} (${time % 2 === 0 ? "D" : "N"})`;
  const populationText = `Population: ${population.length}`;
  const foodText = `Food: ${food}`;

  return (
    <div className="game-menu">
      <div>{dayText}</div>
      <div>{populationText}</div>
      <div>{foodText}</div>
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
