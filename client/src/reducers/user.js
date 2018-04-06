import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
    
  } from "../constants";

  const initialState = {
      user: {
        username:"",
        isSubmitting: false,
         auth: false 
         // localStorage.getItem('currentUser') ? true : false,
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
                    username:"",
                    isSubmitting: false,
                    isLoggedIn: false,
                    auth: false,
                  }
            };

        default:
            return state;
      }
  };

  export default userReducer;