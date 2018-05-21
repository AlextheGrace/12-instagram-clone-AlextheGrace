import React, { Component } from "react";
import { Photo } from "../components/Photo";
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions';
import { Loader } from 'semantic-ui-react';



const mapStateToProps = state => ({
  photos: state.photos.photos,
  
});
  
class PhotoFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(fetchPhotos());

  }

  render() {
    const { photos, isFetching } = this.props;

    if(isFetching) {
        return (
          <Loader active inline='centered' />
        );
    }

    return (
      <ul>
        {
          photos.map((photo) => (
            <li key={photo._id}>
              <Photo photo={photo} />
            </li>
          ))
        }
       </ul>
    );
  }
}

export default connect(mapStateToProps)(PhotoFeed);