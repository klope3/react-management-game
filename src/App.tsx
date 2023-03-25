import { Provider, useSelector } from "react-redux";
import "./App.css";
import { GameMenu } from "./components/GameMenu/GameMenu";
import { PersonArrivalPrompt } from "./components/PersonArrivalPrompt/PersonArrivalPrompt";
import { SettlementView } from "./components/SettlementView/SettlementView";
import { store } from "./redux/gameStore";

const selectViewedEvent = (state: any) => state.viewedEvent;

function App() {
  const viewedEvent = useSelector(selectViewedEvent);

  return (
    <div className="App">
      <SettlementView />
      <GameMenu />
      {viewedEvent && <PersonArrivalPrompt />}
    </div>
  );
}

export default App;
