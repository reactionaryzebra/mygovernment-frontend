import React from "react";
import { Switch, Route } from "react-router-dom";

import * as routes from "./constants/routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={routes.HOME} render={() => <div>ROOT</div>} />
      </Switch>
    </div>
  );
}

export default App;
