
import React, { Component } from "react";
import { connect } from 'react-redux';
import { Comment, CommentForm } from "../components";



class CommentFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    const { comments } = this.props;

    return (
        
      <ul className="frow column-center">
        {
          comments.map((comment) => (
            <li key={comment._id}>
              <Comment comment={comment} />
            </li>
            )
          )
        }
      </ul>
    );
}
}

export default CommentFeed;