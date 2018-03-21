import {
    SIGNUP_USER_START,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    SIGNIN_USER_START,
	SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAILURE,
    SIGNOUT_USER,
    
  } from "../constants";

  const initialState = {
      user: {
        username:null,
        isSubmitting: false,
        auth: localStorage.getItem('currentUser') ? true : false,
      } 
      
  };

  const userReducer = (state = initialState, action) => {
      switch(action.type) {
        case SIGNUP_USER_START:
            return {
                ...state,
                user: {
                    username:null,
                    isSubmitting: false,
                    isLoggedIn: false,
                    auth: false,
            
                  } 
            }
        case SIGNUP_USER_FAILURE:
            return {
                ...state,
                user: {
                    username:null,
                    isSubmitting: false,
                    isLoggedIn: false,
                    auth: false,
                  }
            }
        case SIGNUP_USER_SUCCESS:
            return {
                 ...state,
                  user: {
                    isSubmitting: false,
                    username: action.payload.user.username,
                    auth: action.payload.auth,
                    token: action.payload.token
                  }
                  
            };
            case SIGNIN_USER_START:
            return {
                ...state,
                user: {
                    username:null,
                    isSubmitting: false,
                    isLoggedIn: false,
                    auth: false,
            
                  } 
            }
        case SIGNIN_USER_FAILURE:
            return {
                ...state,
                user: {
                    username:null,
                    isSubmitting: false,
                    isLoggedIn: false,
                    auth: false,
                  }
            }

        case SIGNIN_USER_SUCCESS:
            return {
                 ...state,
                  user: {
                    isSubmitting: false,
                    username: action.payload.user.username,
                    auth: action.payload.auth,
                    token: action.payload.token
                  }
                  
            }; 

        case SIGNOUT_USER:
            return {
                ...state,
                user: {
                    username:null,
                    isSubmitting: null,
                    isLoggedIn: false,
                    auth: false,
                  }
            };

        default:
            return state;
      }
  };

  export default userReducer;