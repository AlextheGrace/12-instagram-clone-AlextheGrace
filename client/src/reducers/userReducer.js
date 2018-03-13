import {
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
    
  } from "../constants";

  const initialState = {
      users: [],
      isSubmitting: false,
      isLoggedIn: false
  };

  const userReducer = (state = initialState, action) => {
      switch(action.type) {
          case CREATE_USER_START:
            return {
                ...state,
                isSubmitting: true
            }
           case CREATE_USER_FAILURE:
            return {
                ...state,
                isSubmitting:false
            }
           case CREATE_USER_SUCCESS:
            return {
                 ...state,
                  isSubmitting:false,
                  isloggedIn:true,
                  users: action.payload
            }; 
           default:
            return state;
      }
  };

  export default userReducer;