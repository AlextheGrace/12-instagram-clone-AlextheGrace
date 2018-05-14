import {
    SIGNUP_USER_START,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    SIGNIN_USER_START,
	SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAILURE,
    SIGNOUT_USER_START,
    SIGNOUT_USER_FAILURE,
    SIGNOUT_USER_SUCCESS
    
  } from "../constants";

  const initialState = {
        isSubmitting: false,
         auth: false,
         errorMessage: '',
         isLoggedIn: false,
         user: {}
         
         
        // ocalStorage.getItem('currentUser') ? true : false, 
  };

  const authReducer = (state = initialState, action) => {
      switch(action.type) {
        case SIGNUP_USER_START:
            return {
                ...state,
                    isSubmitting: true,
                    auth: false
                    
                  } 
            
        case SIGNUP_USER_FAILURE:
            return {
                ...state, 
                    isLoggedIn: false,
                    auth: false,
                  
            }
        case SIGNUP_USER_SUCCESS:
            return {
                 ...state,
                    isSubmitting: false,
                    auth: action.payload.auth,
                    token: action.payload.token,
                    
                  
            };
            case SIGNIN_USER_START:
            return {
                ...state,
                    isSubmitting: true,
                    isLoggedIn: false,
                    auth: false,
            
                  } 
            
        case SIGNIN_USER_FAILURE:
            return {
                ...state,
                
                    username:null,
                    isSubmitting: false,
                    isLoggedIn: false,
                    auth: false,
                    errorMessage: action.payload.errorMessage
                  
            }

        case SIGNIN_USER_SUCCESS:
            return {
                 ...state,
                    isSubmitting: false,
                    isLoggedIn:true,
                    auth: action.payload.auth,
                    token: action.payload.token,
                    user: action.payload.user
                    
            }; 

        case SIGNOUT_USER_START:
            return {
                ...state,
                    isSubmitting: true,
                    isLoggedIn: true,
                    auth: true,
            };
        case SIGNOUT_USER_FAILURE:
            return {
                ...state,
                    isSubmitting: false,
                    isLoggedIn: true,
                    auth: true,
            };

            case SIGNOUT_USER_SUCCESS:
            return {
                ...state,
                    isSubmitting: false,
                    isLoggedIn: false,
                    auth: false,
            };

        default:
            return state;
      }
  };

  export default authReducer;