import { Provider } from "react-redux";
import "./App.css";
import { SettlementView } from "./components/SettlementView/SettlementView";
import { store } from "./redux/test/counterStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SettlementView />
      </div>
    </Provider>
  );
}

export default App;
