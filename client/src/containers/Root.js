

import React from 'react';
import { createStore, applyMiddleware } from "redux";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { App } from '../components';
import { Provider } from 'react-redux';


 const store = {
  
 }
const Root = () => {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={App}/>
          </Switch>
        </Router>
      </Provider>
    );
};
  
export default Root;