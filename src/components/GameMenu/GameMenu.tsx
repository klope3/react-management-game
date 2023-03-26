import { useDispatch, useSelector } from "react-redux";
import { advanceTime } from "../../redux/gameActions";
import "./GameMenu.css";

const selectTime = (state: any) => state.time;
const selectPopulation = (state: any) => state.population;
const selectFood = (state: any) => state.food;

export function GameMenu() {
  const time = useSelector(selectTime);
  const population = useSelector(selectPopulation);
  const food = useSelector(selectFood);
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
