import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import * as routes from "./constants/routes";
import RepsContainer from "./components/Home/RepsContainer";
import Auth from "./components/Auth/Auth";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import EditAccount from "./components/Account/EditAccount";
import Footer from './styles/Footer'
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
          path={routes.ACCT}
          render={props => <EditAccount props={{ ...props, user, setUser, setLogged }} />}
        />
        <Route
          exact
          path={routes.HOME}
          render={() => <RepsContainer address={user.address || address} />}
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
      <Footer>This app is powered by  <a href="https://developers.google.com/civic-information/">Google Civic Info API</a> ,  <a href="https://www.propublica.org/datastore/api/propublica-congress-api"> ProPublica Congress API </a> , and <a href="https://newsapi.org/docs/get-started">News API</a></Footer>
    </div>
  );
};

export default App;
