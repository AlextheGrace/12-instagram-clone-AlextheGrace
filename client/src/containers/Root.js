

import React from 'react';
import { createStore, applyMiddleware } from "redux";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { App } from '../components';
import { Provider } from 'react-redux';


const testReducer = () => {
    return "ya man";
}
//combine reducers 
// const allReducers = combineReducers({
  
// })

 const store = createStore(
   testReducer
 )

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