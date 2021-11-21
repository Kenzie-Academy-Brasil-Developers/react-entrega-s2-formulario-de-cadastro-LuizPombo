import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Logged from "./pages/logged";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/logged/:name">
            <Logged />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
