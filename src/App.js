import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainCMP from "./components/MainCMP";
import {HashRouter} from "react-router-dom";
import {store} from "./redux/ConfigureStore";
import {Provider} from "react-redux"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <HashRouter>
        <MainCMP/>
      </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
