import React, { Component } from "react";
import { Comment, CommentForm } from "../components";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Form, Button } from 'semantic-ui-react';
import { uploadPhoto } from "../actions";


const mapStateToProps = state => ({
    user: state.user.user,
    auth: state.user.auth
});


class UploadImage extends Component {
    constructor(props) {
      super(props);
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {upload:'',imagePreviewUrl: '', description:''};
    }

    handleChange(e) {
      const target = e.target
		  const name = target.name;

  }
  
    handleSubmit(e) {
      e.preventDefault();
      
      console.log('handle uploading-', this.state.upload);

      const newPhoto = {
        upload: this.state.upload,
        description: 'testing',
        userId: '5ab1543f39c32c1a1622017f'

      }

      const testPhoto = new FormData();
      testPhoto.append('upload',this.state.upload);
      
      console.log(testPhoto);
      this.props.dispatch(uploadPhoto(testPhoto));
      
    }
    
  
    handleImageChange(e) {
      e.preventDefault();

       console.log(e.target.files[0]);
       let reader = new FileReader();
       let file = e.target.files[0];
    
       this.setState({ upload: e.target.files[0] })
      // let reader = new FileReader();
      // let file = e.target.files[0];

      // reader.onloadend = () => {
      //   this.setState({
      //     photo: file,
      //     imagePreviewUrl: reader.result
      //   });
      

      // reader.readAsDataURL(file)


    }
    
  
    render() {

      
      const { auth,  } = this.props;
      
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
          <Form onSubmit={this.handleSubmit} enctype="multipart/form-data">
            <Input className="fileInput" 
              type="file" name="upload"
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