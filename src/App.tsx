import "./App.css";
import { GameMenu } from "./components/GameMenu/GameMenu";
import { ModalPicker } from "./components/ModalPicker/ModalPicker";
import { SettlementView } from "./components/SettlementView/SettlementView";

function App() {
  return (
    <div className="App">
      <SettlementView />
      <GameMenu />
      <ModalPicker />
    </div>
  );
}

export default App;
