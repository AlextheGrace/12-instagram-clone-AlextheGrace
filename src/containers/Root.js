

import React from 'react';
import { createStore, applyMiddleware } from "redux";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { App } from '../components/App';
import { Provider } from 'react-redux';

const Root = () => {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route path="/" component={App}/>
          </Switch>
        </Router>
      </Provider>
    );
};
  
export default Root;