import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Modal } from 'semantic-ui-react';
import { logoutUser } from '../../actions';
import './hero.css';


// import './Photo.css';
const mapStateToProps = state => ({
  user: state.user.user,
  
});

export class UserHero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.dispatch(logoutUser()); 
  }


  render() {
    const { user } = this.props;

    return (
        
    <div>
      <ul className="profile-hero"> 
          <div className="Photo-header__avatar-container">
            <img 
                src={user.avatar}
                className="Photo-header__avatar-img"
                alt={`${user.avatar} profile`}
            />
          </div>
            <div className="profile-username">
            {  user.username }
            <button className="logout_button" onClick={this.handleSubmit}>Logout</button>
            </div>
        </ul>     
    </div>
    )
  }
}



export default connect(mapStateToProps)(UserHero);


