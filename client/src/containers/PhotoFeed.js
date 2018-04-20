import React, { Component } from "react";
import { Photo } from "../components/Photo";
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions';



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
            <p>loading...</p>
        );
    }

    return (
    // <div className="ui-container">
      <ul className="ui-container">
        {
          photos.map((photo) => (
            <li key={photo._id}>
              <Photo photo={photo} />
            </li>
          ))
        }
      </ul>
    // </div>

    );
  }
}

export default connect(mapStateToProps)(PhotoFeed);