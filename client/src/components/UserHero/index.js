import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Modal } from 'semantic-ui-react';


// import './Photo.css';

export class UserHero extends Component {
  
  
  
  
  
  
  constructor(props) {
    super(props);

    this.state = {
      response: ''
    }
  }


  render() {
    const { user } = this.props;

    return (
        
        <div>
      <ul className="profile-hero">
          <div className="profile-username">{  user.username }</div>
          <div className="Photo-header__avatar-container">
            <img 
                src={user.avatar}
                className="Photo-header__avatar-img"
                alt={`${user.avatar} profile`}
            />
          </div>  
      </ul>
    </div>
    )
  }
}



export default UserHero;


