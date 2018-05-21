import React, { Component } from "react";
import { connect } from 'react-redux';
import { Comment, CommentForm } from "../components";



class UserPhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    const { photos } = this.props;

    if(!photos || photos === undefined) {
    return (<div>No photos to be found</div> );
    }

    return ( 
      <ul className="photo-grid">
        {
          photos.map((photo) => (
            <div className="photo-item"  key={photo._id}>
              {photo.imageUrl}
            </div>
            )
          )
        }
      </ul>
    );
}
}

export default UserPhotoGrid;