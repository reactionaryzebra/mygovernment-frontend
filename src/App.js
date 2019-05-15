import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import * as routes from "./constants/routes";
import RepsContainer from "./components/Home/RepsContainer";
import Auth from "./components/Auth/Auth";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const App = props => {
  const [address, setAddress] = useState("");
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <NavBar user={user} logged={logged} />
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
        <Route
          exact
          path={routes.AUTH}
          render={props => <Auth props={{ ...props, setUser, setLogged }} />}
        />
      </Switch>
    </div>
  );
};

export default App;
