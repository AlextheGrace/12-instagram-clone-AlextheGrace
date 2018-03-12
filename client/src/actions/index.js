
import {
    FETCH_PHOTOS_START,
    FETCH_PHOTOS_SUCCESS,
    FETCH_PHOTOS_FAILURE,
    CREATE_USER_START,
    CREATE_USER_SUCESS,
    CREATE_USER_FAILURE,
    ADD_COMMENT
  } from "../constants";
  

const url = `https://5aa3cb5da53a8800141752fd.mockapi.io/photos`;
const myApiUrl = 'http://localhost:3002/photos';

export const requestPhotos = () => ({
  type: FETCH_PHOTOS_START
});

export const receivePhotos = data => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: data
});

export const fetchPhotos = () => dispatch => {
  dispatch(requestPhotos());

  const requestData = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Vary': 'Origin'
      },
      mode: "no-cors"
  }



  return fetch(myApiUrl,requestData)
    .then(res => res.json())
    .then((data) => {
      console.log("successfully fetched photos", data);
      return dispatch(receivePhotos(data));
      debugger;
    })
    .catch(response => {
      console.error("fetch photos failed");
      return dispatch({
        type: FETCH_PHOTOS_FAILURE
      });
    });
};

// export registerUser = 

// requestDetails = {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }

//     method:"POST"
// }


// return fetch('/users',requestDetails) 


