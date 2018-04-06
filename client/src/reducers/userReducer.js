import {
    FETCH_USER_START,
    FETCH_USER_FAILURE,
    FETCH_USER_SUCCESS
    
  
  } from "../constants";

  const initialState = {
      user: null
       
         // localStorage.getItem('currentUser') ? true : false,
      
      
  };

  const userReducer = (state = initialState, action) => {
      switch(action.type) {
        case FETCH_USER_START:
            return {
                ...state,
                user: null
            }
        
       
        case FETCH_USER_FAILURE:
            return {
                 ...state,
                  user:null
                  
            };
            case FETCH_USER_SUCCESS:
            return {
                ...state,
                user:action.payload.user
            }

        default:
            return state;
      }
  };

  export default userReducer;