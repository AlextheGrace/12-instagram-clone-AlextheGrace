import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import  { addComment } from '../../actions';



const mapStateToProps = state => ({
  user: state.user.user,
  
});

export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
        commentBody:''
    }
  }
  
  handleChange(e) {
    this.setState({commentBody: e.target.value})
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`${this.props.user.username} ${this.state.commentBody} photoid: ${this.props.photoId}`);

    const comment = {
      photoId: this.props.photoId,  
      username: this.props.user.username,
      body: this.state.commentBody
    }
    this.props.dispatch(addComment(comment));
  }



  render() { 

   
    
    const { user, photoId } = this.props;
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                <Input  type="text"
                        value={this.state.commentBody} 
                        onChange={this.handleChange} 
                        name="commentBody" />
                </label> 
            <Input type="submit" value="Send  " />
        </form>
    )
  }

 
}

// const mapStateToProps = state => ({
//   isLoggedIn: state.user.user.auth,
//   user: state.user.user
// });



export default connect(mapStateToProps)(CommentForm);