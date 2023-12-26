import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1 className="app__title">Rick and Morty</h1>
        <p className="app__subtitle">
          You can like your favorite characters and remove unloved ones!
        </p>
      </div>
    </Provider>
  );
}

export default App;
