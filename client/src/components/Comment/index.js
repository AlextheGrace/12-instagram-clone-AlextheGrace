import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Modal } from 'semantic-ui-react';


// import './Photo.css';

export class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: ''
    }
  }


  render() {
    const { comment } = this.props;

    return (
        
        <p>
        <Link to={`/${comment.username}`}><strong>{comment.username}</strong></Link>:
        {comment.body}
        </p>
    )
  }
}



export default Comment;