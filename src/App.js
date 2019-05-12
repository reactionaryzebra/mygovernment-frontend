import React from "react";
import { Switch, Route } from "react-router-dom";

import * as routes from "./constants/routes";
import Login from "./components/Auth/Login/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={routes.HOME} render={() => <Login />} />
      </Switch>
    </div>
  );
}

export default App;
