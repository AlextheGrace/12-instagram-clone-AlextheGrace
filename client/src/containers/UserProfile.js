import { PhotoGrid } from "../containers";
import { Photo, UserHero, } from "../components";
import { Redirect } from 'react-router-dom';
import React, { Component } from "react";
import {Button, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import {
  registerUser,
  logoutUser,
  fetchUser
} from '../actions';



const mapStateToProps = state => ({
  user: state.user.user,
  photos: state.user.user.photos,
  auth: state.auth.auth,
  
});





class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const tokenData = localStorage.getItem('currentUser');
    const decodedData = jwt_decode(tokenData);
    console.log(decodedData.username);
    this.props.dispatch(fetchUser(decodedData.username));
   
  
  }

  logoutOnSubmit(e){
    e.preventDefault();
    // this.props.dispatch(logoutUser());
  }

  render() {
    const { user, auth, photos, match } = this.props;


    if (!auth) {
      return <Redirect to="/signin"/>;
    }
    if(!photos) {
      return <div> error uploading userprofile please try again</div>
    }
   

  return (
    <div>
    <UserHero user={user}/>
    <PhotoGrid photos={photos}/>
    </div>
    );
  }  
}    
        /* <UserPhotoGrid photos={user.photos}/>   */
        
   /* <ul>
    {photos.photos.map(photo =>
      <li keys={photo._id}>
      <Photo photo={photo} />
      </li>
    )} 
    </ul> */
 

export default connect(mapStateToProps)(UserProfile);