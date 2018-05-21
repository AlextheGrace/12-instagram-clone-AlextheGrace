import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { default as Authenticate } from '../Protected/Authenticate';
import { Navbar } from '../';
import {
  Home,
  Profile,
  Explore,
  SignIn,
  SignUp,
  Upload
} from "../../views";

import './App.css';




const App = (children) => (
    <React.Fragment>
      <Navbar/>  
      <Switch>
        <Route exact path="/" component={Authenticate(Home)} />
        <Route path="/profile" component={Authenticate(Profile)} />
        <Route path="/explore" component={Explore} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/upload" component={Authenticate(Upload)} />
      </Switch>
    </React.Fragment>
)

export default (App);