import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
    
  } from "../constants";

  const initialState = {
      user:{}
         // localStorage.getItem('currentUser') ? true : false,   
  }

  const userReducer = (state = initialState, action) => {
      switch(action.type) {
          
        case FETCH_USER_START:
            return {
                ...state
            }
        case FETCH_USER_FAILURE:
            return {
                ...state
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                    user: action.payload.user,
            };
        
        default:
            return state;
      }
  };

  export default userReducer;