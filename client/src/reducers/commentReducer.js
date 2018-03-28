import {
    ADD_COMMENT,
    ADD_COMMENT_FAIL
  } from "../constants";

  const initialState = {
      photos: [],
      isFetching: false
  };

  const photoReducer = (state = initialState, action) => {
      switch(action.type) {
          case FETCH_PHOTOS_START:
            return {
                ...state,
                isFetching: true
            }
           case FETCH_PHOTOS_FAILURE:
            return {
                ...state,
                isFetching: false
            }
           case FETCH_PHOTOS_SUCCESS:
            return { ...state, isFetching:false, photos: action.payload }; 

            
           default:
            return state;
      }
  };

  export default photoReducer;