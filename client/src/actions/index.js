import {
	FETCH_PHOTOS_START,
	FETCH_PHOTOS_SUCCESS,
	FETCH_PHOTOS_FAILURE,
	CREATE_USER_START,
	CREATE_USER_SUCCESS,
	CREATE_USER_FAILURE,
	ADD_COMMENT
} from '../constants';

const url = `https://5aa3cb5da53a8800141752fd.mockapi.io/photos`;
const userUrl = `https://5aa3cb5da53a8800141752fd.mockapi.io/users`;
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
		// headers: {
		// 	'Access-Control-Allow-Origin': '*',
		// 	Vary: 'Origin'
		// },
		// mode: 'no-cors'
	};

	return fetch(url, requestData)
		.then(res => res.json())
		.then(data => {
			console.log('successfully fetched photos', data);
			return dispatch(receivePhotos(data));
			
		})
		.catch(response => {
			console.error('fetch photos failed');
			return dispatch({
				type: FETCH_PHOTOS_FAILURE
			});
		});
};

export const startRegisterUser = () => ({
	type: CREATE_USER_START
});

export const finishRegisterUser = data => ({
	type: CREATE_USER_SUCCESS,
	payload: data
});

export const registerUser = (newUser) => dispatch => {
    dispatch(startRegisterUser());

	const requestDetails = {
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
		},

		body: JSON.stringify(newUser),

	    method:"POST"
	}

	return fetch(userUrl,requestDetails)
	.then( res => res.json())
	.then( data => {
		console.log('successfully created new user', data);
		return dispatch(finishRegisterUser(data));
	}).catch( err => {
		console.error('register user failed');
		return dispatch({
			type: CREATE_USER_FAILURE
		});
	});
};