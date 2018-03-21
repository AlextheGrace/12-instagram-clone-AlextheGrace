import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Modal } from 'semantic-ui-react';
import { Comments } from '../Comments'

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
    const { photo } = this.props;

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



            {/* comments   */}
            
            <li key={photo.comments._id}>
              <Comments comment={comment} />
            </li>





          </div>
        </div>
      </article>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Photo)