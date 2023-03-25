import { Provider } from "react-redux";
import "./App.css";
import { GameMenu } from "./components/GameMenu/GameMenu";
import { SettlementView } from "./components/SettlementView/SettlementView";
import { store } from "./redux/gameStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SettlementView />
        <GameMenu />
      </div>
    </Provider>
  );
}

export default App;
