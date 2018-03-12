

import React from 'react';
import { createStore, applyMiddleware, combineReducers } from "redux";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { App } from '../components';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import  { rootReducer, commentReducer }  from '../reducers';

const middleware = [ thunk ];


 const allReducers = combineReducers({
   rootReducer,
   commentReducer
 });
 
 const store = createStore(
   rootReducer, applyMiddleware(...middleware));

 console.log(store.getState());

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