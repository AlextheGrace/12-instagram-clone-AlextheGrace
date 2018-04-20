import React, { Component } from "react";
import { UserProfile, PhotoFeed } from '../containers';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



// const mapStateToProps = state => ({
//     auth: state.auth.auth,
//     user: state.user.user,
    
// });



export class Profile extends Component  {
  constructor(props){
    super(props);

  }


  

  render(){
    const { username } = this.props
    return (
      <div className="Profile">
        <p> Profile page </p>
          <UserProfile/>
      </div>
    );
  }
}





export default Profile;
