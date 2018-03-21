
import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  fetchPhotos
} from '../actions';
import { Photo } from "../components/Photo";

class CommentFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

//   componentDidMount() {
//     this.props.dispatch(fetchPhotos())
//   }

  render() {
    const { photo } = this.props;

    // if(isFetching) {
    //     return (
    //         <p>loading...</p>
    //     );
    // }

    return (
        
      <ul className="frow column-center">
        {
          photo.comments.map((comment) => (
            <li key={comment._id}>
              <Comments comment={comment} />
            </li>
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
  isFetching: state.photos.isFetching
});

export default connect(mapStateToProps)(PhotoFeed);