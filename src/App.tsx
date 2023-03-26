import { useSelector } from "react-redux";
import "./App.css";
import { GameMenu } from "./components/GameMenu/GameMenu";
import { GameOver } from "./components/GameOver/GameOver";
import { PersonArrivalPrompt } from "./components/PersonArrivalPrompt/PersonArrivalPrompt";
import { SettlementView } from "./components/SettlementView/SettlementView";

const selectViewedEvent = (state: any) => state.viewedEvent;
const selectIsGameOver = (state: any) => state.isGameOver;

function App() {
  const viewedEvent = useSelector(selectViewedEvent);
  const isGameOver = useSelector(selectIsGameOver);

  return (
    <div className="App">
      <SettlementView />
      <GameMenu />
      {viewedEvent && <PersonArrivalPrompt />}
      {isGameOver && <GameOver />}
    </div>
  );
}

export default App;
