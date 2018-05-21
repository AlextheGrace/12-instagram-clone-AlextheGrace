import React, { Component } from "react";
import { UserProfile, PhotoFeed } from '../containers';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';




export class Profile extends Component  {
  constructor(props){
    super(props);

  }

  componentWillMount() {

  }


  

  render(){
    const { username } = this.props
    return (
      <div className="Profile">
          <UserProfile/>
      </div>
    );
  }
}





export default Profile;
