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
      this.state = {file: '',imagePreviewUrl: '', description:''};
    }

    handleChange(e) {
      console.log(e.target.value);
      this.setState({description: e.target.value})
    }
  
    handleSubmit(e) {
      e.preventDefault();
      
      console.log('handle uploading-', this.state.file);
    }
  
    handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      
        const Photo = {
          file: file,
          imagePreviewUrl: reader.result
        }
  
      reader.readAsDataURL(file)
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
          <Form onSubmit={(e)=>this.handleSubmit(e)}>
            <Input className="fileInput" 
              type="file" 
              onChange={(e)=>this.handleImageChange(e)} />
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