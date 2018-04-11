import React, { Component } from "react";
import { Photo } from "../components/Photo";
import { PhotoFeed } from '../containers';
import './css/style.css';





  
class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    
  }

  render() {
    const { photos } = this.props;

    // if(isFetching) {
    //     return (
    //         <p>loading...</p>
    //     );
    // }

    return (
    <div className="photo-grid-container">
      <ul className="photo-grid">
        {
          photos.map((photo) => (
            <li key={photo._id}>
                <img src={photo.imageUrl}/>
            </li>
          ))
        }
      </ul>
    </div>

    );
  }
}



export default PhotoGrid;