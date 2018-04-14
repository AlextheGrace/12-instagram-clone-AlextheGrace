import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { likePhoto } from '../../actions';






const mapStateToProps = state => ({



  });



class LikeButton extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        

    }

    handleChange(e) {
        const like = {
            photoId:  this.props.photoId,
            userId: '5ab1543f39c32c1a1622017f'
           
        }
        this.props.dispatch(likePhoto(like));
    }
    

    render(){

        const { user, photoId } = this.props;

        return(
            <button onClick={this.handleChange}>Likey</button>
        )
    }
}



export default connect(mapStateToProps)(LikeButton);
