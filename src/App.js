import React from "react";
import { Switch, Route } from "react-router-dom";

import * as routes from "./constants/routes";
import MyRepresentatives from "./components/Home/RepList";
import Auth from "./components/Auth/Auth";
import Landing from "./components/Landing/Landing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={routes.HOME} render={() => <MyRepresentatives />} />
        <Route exact path={routes.ROOT} render={() => <Landing />} />
      </Switch>
    </div>
  );
}

export default App;
