
import React, { Component } from "react";
import { connect } from 'react-redux';

import {
  fetchPhotos
} from '../actions';
import { Photo } from "../components/Photo";

class PhotoFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(fetchPhotos())
  }

  render() {
    const { photos } = this.props;

    // if(isFetching) {
    //     return (
    //         <p>loading...</p>
    //     );
    // }

    return (
        
      <ul className="frow column-center">
        {
          photos.map((photo) => (
            <li key={photo.id}>
              <Photo photo={photo} />
            </li>
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos,
  isFetching: state.isFetching
});

export default connect(mapStateToProps)(PhotoFeed);