import React, { Component } from "react";
import { Comment, CommentForm } from "../components";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';



const mapStateToProps = state => ({
    user: state.user.user,
    auth: state.user.auth
});


class UploadImage extends Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    handleSubmit(e) {
      e.preventDefault();
      
      console.log('handle uploading-', this.state.file);
    }
  
    handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
        const { auth } = this.props;
      
      if (!auth) {
        return <Redirect to="/signin"/>;
      }

      let {imagePreviewUrl} = this.state;
      let imagePreview = null;
      if (imagePreviewUrl) {
        imagePreview = (
        <div>
        <img src={imagePreviewUrl} />
        <input name="description"></input>
        <input name="stuff"></input>
        
        </div>);
      } else {
        imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </form>
          <div className="imgPreview">
            {imagePreview}
          </div>
        </div>
      )
    }
  }

export default connect(mapStateToProps)(UploadImage);