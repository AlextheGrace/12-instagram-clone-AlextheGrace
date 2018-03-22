import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';




const mapStateToProps = state => {
   user: state.user.user
   isLoggedIn: state.user.user.auth,
   
  }

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
    alert(this.state.commentBody);
    

  }

  render() { 
    this.props = {  user };

    return (
        <form onSubmit={this.handleSubmit}>
            <label>
            <input type="text"
                     value={this.state.commentBody} 
                        onChange={this.handleChange} 
                            name="commentBody" />
            </label> 
            <input type="submit" value="Submit" />
        </form>
    )
  }
}



export default connect(CommentForm)(mapStateToProps)