import {
    ADD_COMMENT,
    UPDATE_COMMENT,
    FETCH_PHOTOS_START,
    FETCH_PHOTOS_FAILURE,
    FETCH_PHOTOS_SUCCESS,
    LIKE_PHOTO,
    UNLIKE_PHOTO
  } from "../constants";

import  update  from 'immutability-helper';

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
            return {
                 ...state, isFetching:false, photos: action.payload
            };
            case ADD_COMMENT:
            const photoId = state.photos.findIndex(photo => photo._id === action.payload.photoId);
            const nextState = update(state, {
                photos:{
                    [photoId]:{
                        comments:{
                            $push: [action.payload]
                        }
                    }
                }
            });
            
            return nextState;

            case UPDATE_COMMENT:
            return {
              ...state,
              photos: state.photos.map(photo => {
                if (photo._id === action.payload._id) {
                  photo.comments = action.payload.comments
                }
                return photo
              })
            }

           default:
            return state;
      }
  };

  export default photoReducer;