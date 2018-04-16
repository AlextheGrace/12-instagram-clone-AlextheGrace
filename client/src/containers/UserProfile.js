import { PhotoGrid } from "../containers";
import { Photo, UserHero, } from "../components";
import { Redirect } from 'react-router-dom';
import React, { Component } from "react";
import {Button, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
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

  componentWillMount() {
  
    this.props.dispatch(fetchUser(this.props.user.username));
   
  
  }

  logoutOnSubmit(e){
    e.preventDefault();
    this.props.dispatch(logoutUser());
  }

  render() {
    const { user, auth, photos, match } = this.props;


    if (!auth) {
      return <Redirect to="/signin"/>;
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