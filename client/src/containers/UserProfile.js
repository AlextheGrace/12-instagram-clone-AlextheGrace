import { Redirect } from 'react-router-dom';
import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  registerUser
} from '../actions';
import { Photo } from "../components/Photo";


const mapStateToProps = state => ({
  isLoggedIn: state.user.user.auth,
  user: state.user.user
});

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <li> welcome {user.username}</li>
      </ul>
    );
  }
}



export default connect(mapStateToProps)(UserProfile);