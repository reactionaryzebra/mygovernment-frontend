import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import * as routes from "./constants/routes";
import MyRepresentatives from "./components/Home/RepList";
import Auth from "./components/Auth/Auth";
import Landing from "./components/Landing/Landing";
import "./App.css";

const App = props => {
  const [address, setAddress] = useState("");
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path={routes.HOME}
          render={() => <MyRepresentatives address={address} />}
        />
        <Route
          exact
          path={routes.ROOT}
          render={props => <Landing props={{ ...props, setAddress }} />}
        />
      </Switch>
    </div>
  );
};

export default App;
