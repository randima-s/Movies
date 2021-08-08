import './App.css';
import MainCMP from "./components/MainCMP";
import {HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <MainCMP/>
      </HashRouter>
    </div>
  );
}

export default App;
