import React, { Component } from "react";
import { UserProfile, PhotoFeed } from '../containers';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';




class Profile extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const {match} = this.props;
  }
  render() {

  const { username } = this.props
  return (
    <div className="Profile">
      <p> Profile page </p>
      <UserProfile username={username}/>
    </div>
  );
}
}


const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Profile);
