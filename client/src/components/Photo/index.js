import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { Modal } from 'semantic-ui-react';
import { CommentFeed } from '../../containers'
import { CommentForm } from '../../components'


// import './Photo.css';

export class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: ''
    }
  }

  componentDidMount() {
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(res => {
    //     debugger;
    //     this.setState({response: res})
    //   })
    //   .catch(err => console.error(err))
  }

  render() {
    const { photo, user, isLoggedIn } = this.props;

    // if(!isLoggedIn) {
    //     return <Redirect to="/signin"/>;
    // }

    return (
      <article className="Photo__root">
        <div className="Photo-header">
          <div className="Photo-header__avatar-container">
            <img
              src={"yea"}
              className="Photo-header__avatar-img"
              alt={`${'username'} profile`}
            />
          </div>
          <div className="Photo-header__metadata-container">
            <div className="Photo-header__username">
              <Link to={`/${'johnny'}`}>{'John Appleseed'}</Link>
            </div>
            <div className="Photo-header__address">
              <Link to={`/explore/locations/${0}`}>{'New York City'}</Link>
            </div>
          </div>
          <div className="Photo-header__timestamp">
            <small>10 hours ago</small>
          </div>
        </div>
        <div
          className={`Photo__body`}>
          <Link to={`/photos/${photo._id}` }>
          <img src={photo.imageUrl} />
          </Link>
        </div>
        <div className="Photo__footer">
          <div className="Photo__action-box">
            <div className="Photo__like-button">
              <button>Like</button>
            </div>
            <CommentFeed comments={photo.comments}/>
              <CommentForm photoId={photo._id}/>
          </div>
        </div>
      </article>
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