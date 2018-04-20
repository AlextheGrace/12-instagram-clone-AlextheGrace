import React, { Component } from "react";
import { Photo, PhotoModal } from "../components/Photo";
import { Modal, Image, Header } from 'semantic-ui-react';
import { PhotoFeed } from '../containers';
import './css/style.css';





  
class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};

   
  }


  render() {
    const { photos, isFetching } = this.props;
 //bug on semantic ui to style th
    const inlineStyle = {
      modal : {
        marginTop: '0px !important',
        marginLeft: 'auto',
        marginRight: 'auto',
      }
    }; 

    if(isFetching) {
        return (
            <p>loading...</p>
        );
    }

    return (
    <div className="photo-grid-container">
      <ul className="photo-grid">
        {
          photos.map((photo) => (
            <li key={photo._id}>
                <Modal 
                style={inlineStyle.modal}
                trigger={<img src={photo.imageUrl}/>}>
                <Modal.Content image>
                <Image wrapped size='medium' src={photo.imageUrl} />
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>We've found the following gravatar image associated with your e-mail address.</p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
                </Modal.Content> 
                </Modal> 
            </li>
          ))
        }
      </ul>
    </div>

    );
  }
}



export default PhotoGrid;