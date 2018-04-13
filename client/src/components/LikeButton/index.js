import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { likePhoto } from '../../actions';






const mapStateToProps = state => ({

    user: state.user.user

  });



class LikeButton extends Component {

    constructor(props) {
        super(props);
        

    }

    handleChange(e) {
        const like = {
            photoId: photo._id,
            userId: user._id
        }
        this.props.dispatch(likePhoto(like));
    }
    

    render(){

        const { user, photo } = this.props;

        return(
            <button onClick={this.handleChange}>Likey</button>
        )
    }
}



export default connect(mapStateToProps)(LikeButton);
