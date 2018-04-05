import {
	FETCH_PHOTOS_START,
	FETCH_PHOTOS_SUCCESS,
	FETCH_PHOTOS_FAILURE,
	SIGNUP_USER_START,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAILURE,
	SIGNIN_USER_START,
	SIGNIN_USER_SUCCESS,
	SIGNIN_USER_FAILURE,
	LOGOUT_USER_START,
	LOGOUT_USER_SUCESS,
	LOGOUT_USER_FAILURE,
	SIGNOUT_USER,
	ADD_COMMENT,
	UPDATE_COMMENT,
	ADD_COMMENT_FAIL,
	ADD_LIKE_START,
	ADD_LIKE_SUCESS,
	ADD_LIKE_FAIL
} from '../constants';

export const updateComment = data => ({type: UPDATE_COMMENT, payload: data})

const url = `https://5aa3cb5da53a8800141752fd.mockapi.io/photos`;
const register = 'http://localhost:3001/register';
const login = 'http://localhost:3001/login';
const myApiUrl = 'http://localhost:3001/photos';





//fetch photos

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
		
	};

	return fetch(myApiUrl)
		.then(res => res.json())
		.then(data => {
			console.log('successfully fetched photos', data);
			return dispatch(receivePhotos(data));
			
		})
		.catch(err => {
			console.error('fetch photos failed'+err);
			return dispatch({
				type: FETCH_PHOTOS_FAILURE
			});
		});
};

export const startRegisterUser = () => ({
	type: SIGNUP_USER_START
});

export const finishRegisterUser = data => ({
	type: SIGNUP_USER_SUCCESS,
	payload: data
});





//register user
export const registerUser = (newUser) => dispatch => {
    dispatch(startRegisterUser());

	const registerHeaderDetails = {
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
		},
		body: JSON.stringify(newUser),
	    method:"POST"
	}

	return fetch(register,registerHeaderDetails)
	.then( res => res.json())
	.then ( data => {
		console.log('successfully created new user', data);
		localStorage.setItem('currentUser', data.token);
		return dispatch(finishRegisterUser(data));
	}).catch( err => {
		console.error('register user failed afafa '+err);
		return dispatch({
			type: SIGNUP_USER_FAILURE
		});
	});
};





//login user 

export const startLoginUser = () => ({
	type: SIGNIN_USER_START
});

export const finishLoginUser = data => ({
	type: SIGNIN_USER_SUCCESS,
	payload: data
});

export const signOutUser  = ({
	type: SIGNOUT_USER,

});

export const loginUser = (logindetails) => dispatch => {
	dispatch(startLoginUser());


	const loginHeaderDetails = {
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
		},
		body: JSON.stringify(logindetails),
	    method:"POST"
	}

	return fetch(login,loginHeaderDetails)
	.then( res => res.json())
	.then ( data => {
			console.log(data);
			return dispatch(finishLoginUser(data));
	}).catch( err => {
		dispatch({
			type: SIGNIN_USER_FAILURE
		});
	});
}


export const logoutUser = () => dispatch => {

	localStorage.removeItem('currentUser');
	dispatch(signOutUser());

};




export const commentAdded = data => ({
		type: FETCH_PHOTOS_SUCCESS,
		payload: data
});

export const addComment = (comment) => dispatch => {
	const commentHeader = {
		headers: {
		  'Accept': 'application/json',
	      'Content-Type': 'application/json'
		},
		body: JSON.stringify(comment),
		method:"PUT"
	}

	return  fetch(`http://localhost:3001/photos/${comment.photoId}/comments/${comment.username}`,commentHeader)
	.then( res => res.json())
	.then (data => {
		console.log(data);
		dispatch(updateComment(data))
		})
		.catch( err => {
			return dispatch({
				type: "ADD_COMMENT_FAIL"
			});	
		});
	
}

export const likePhoto = (like) => {

	return console.log("liked");

}



