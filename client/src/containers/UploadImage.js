import React, { Component } from "react";
import { Comment, CommentForm } from "../components";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Form, Button } from 'semantic-ui-react';


const mapStateToProps = state => ({
    user: state.user.user,
    auth: state.user.auth
});


class UploadImage extends Component {
    constructor(props) {
      super(props);
      this.state = {photo: '',imagePreviewUrl: '', description:''};
    }

    handleChange(e) {
      const target = e.target
		const name = target.name;
		this.setState({
			[name]: e.target.value
    });
  }
  
    handleSubmit(e) {
      e.preventDefault();
      
      console.log('handle uploading-', this.state.photo);
    }
  
    handleImageChange(e) {
      e.preventDefault();
  
       
    }
  
    render() {

      
      const { auth } = this.props;
      
      // if (!auth) {
      //   return <Redirect to="/signin"/>;
      // }

      let {imagePreviewUrl} = this.state;
      let imagePreview = null;
      if (imagePreviewUrl) {
        imagePreview = (
        <div>
        <img src={imagePreviewUrl} />
         
        <Input name="description" onChange={this.handleChange}/>
        
        </div>);
      } else {
        imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        <div className="previewComponent">
          <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <Input className="fileInput" 
              type="file" id="photo"
              onChange={this.handleImageChange} />
            <Button className="submitButton" 
              type="submit" 
              onClick={(e)=>this.handleSubmit(e)}>Upload Image</Button>
          </Form>
          <div className="imgPreview">
            {imagePreview}
          </div>
        </div>
      )
    }
  }

export default connect(mapStateToProps)(UploadImage);