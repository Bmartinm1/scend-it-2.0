import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import CragIndex from './CragIndex'
import CragClimbsIndex from './CragClimbsIndex'
import ClimbPage from './ClimbPage'
import LandingPage from './LandingPage'
import AboutPage from './AboutPage'

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(() => {
        setCurrentUser(null);
      });
  }, []);
  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/crags" component={CragIndex} />
        <Route exact path="/crags/:id" component={CragClimbsIndex} />
        <Route exact path="/climbs/:id" component={ClimbPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
};

export default hot(App);
