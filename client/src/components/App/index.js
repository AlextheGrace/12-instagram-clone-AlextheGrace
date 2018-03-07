import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from '../';
import {
  Home,
  Profile,
  Explore,
  SignIn,
  SignUp,
} from "../../views";

import './App.css';

const App = (children) => (
    <React.Fragment>
      <Navbar/>  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/explore" component={Explore} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    
    </React.Fragment>
)

export default App;