import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import * as routes from "./constants/routes";
import RepsContainer from "./components/Home/RepsContainer";
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
          render={() => <RepsContainer address={address} />}
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
