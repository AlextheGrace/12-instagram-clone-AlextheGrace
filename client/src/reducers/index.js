    // export { default as commentReducer } from './commentReducer';
    // export { default as rootReducer } from './rootReducer';
    // export { default as userReducer } from './userReducer';


import { combineReducers } from "redux";
import userReducer from './userReducer';
import photoReducer from './photoReducer';
import authReducer from "./auth";




const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    photos: photoReducer
});

export default rootReducer;