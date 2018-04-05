import { Redirect } from 'react-router-dom';
import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  registerUser,
  logoutUser
} from '../actions';
import { Photo } from "../components/Photo";


const mapStateToProps = state => ({
  isLoggedIn: state.user.user.auth,
  user: state.user.user
});



const mapDispatchToProps = dispatch => {
  
}

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logoutOnSubmit(e){
    e.preventDefault();
    this.props.dispatch(logoutUser());
  }

  componentDidMount() {
  
  }

  render() {
    const { user, isLoggedIn } = this.props;

    if (!isLoggedIn) {
      return <Redirect to="/signin"/>;
    }

    return (
        
      <ul className="frow column-center">
          <p>{user.username}</p>
          <button onClick={this.logoutOnSubmit}>Logout</button>
        
      </ul>
    );
  }
}



export default connect(mapStateToProps)(UserProfile);