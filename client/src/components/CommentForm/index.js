import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';



export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        commentBody:''
    }
  }
  
  handleChange(e) {
    this.setState({commentBody: e.target.value})
    console.log(e.target.value);
  }

  handleSubmit(e) {
    alert(this.state.commentBody)
    e.preventDefault();

  }

  render() { 
    // this.props = { addComment };

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



export default CommentForm;