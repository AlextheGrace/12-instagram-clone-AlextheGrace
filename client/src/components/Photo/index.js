import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { Modal, Image } from 'semantic-ui-react';
import { CommentFeed, LikeFeed } from '../../containers'
import { CommentForm, LikeButton } from '../../components'
import './photo.css';


// import './Photo.css';

export class Photo extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      response: ''
    }
  }

  render() {
    const { photo, user, isLoggedIn } = this.props;

    // if(!isLoggedIn) {
    //     return <Redirect to="/signin"/>;
    // }

    

    return (
      <div className="card">
        <div className="content">
        
          <div className="Photo-header__avatar-container">
            <Image
              src={photo.author.avatar}
              className="Photo-header__avatar-img"
              alt={`${photo.author.avatar} profile`}
            />
          </div>
          <div className="Photo-header__metadata-container">
            
              <Link className="username-link" to={`/${photo.author.username}`}>{photo.author.username}</Link>
          
          </div>
          <div className="right floated meta">
            <small>{photo.createdAt}</small>
          </div>
        </div>
        <div className="content">
        <div
          className={`Photo__body`}>
          <Link to={`/photos/${photo._id}` }>
          <Image src={photo.imageUrl} fluid />
          </Link>
        </div>
        <div className="Photo__footer">
          <LikeFeed likes={photo.likes}/>
          <div className="Photo__action-box">
            <div className="Photo__like-button">
              <LikeButton photoId={photo._id} userId={photo.author.userId}/>
            </div>
            
            <CommentFeed comments={photo.comments}/>
            <div className="extra content">
              <CommentForm photoId={photo._id}/>
            </div>
          </div>
          </div>
        </div>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  isLoggedIn: state.user.user.auth
});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Photo)