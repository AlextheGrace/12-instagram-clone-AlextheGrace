import { Photo } from "../components/Photo";
import { Redirect } from 'react-router-dom';
import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  registerUser,
  logoutUser,
  fetchUser
} from '../actions';



const mapStateToProps = state => ({
  user: state.user.user,
  auth: state.auth.auth
});



const mapDispatchToProps = dispatch => {
  
}



class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const {match} = this.props;

    this.props.dispatch(fetchUser('alexander'));
  }

  logoutOnSubmit(e){
    e.preventDefault();
    // this.props.dispatch(logoutUser());
  }

  render() {
    const { user, auth } = this.props;

    if (!auth) {
      return <Redirect to="/signin"/>;
    }

    return (
    <div>
    <div>
      <ul className="frow column-center">
          <p>{user.username}</p>
          <img
              src={user.avatar}
              className="Photo-header__avatar-img"
              alt={`${user.avatar} profile`}
            />
          <button onClick={this.logoutOnSubmit}>Logout</button>
      </ul>
    </div>
    <div>
    </div>
    </div>


    );
  }
}



export default connect(mapStateToProps)(UserProfile);