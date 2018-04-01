import React, { Component } from 'react'
import { connect } from 'react-redux'










class LikeButton extends Component {

    
    
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        console.log("likey");
    }

    render(){
        return(
            <button onClick={this.handleChange}>Likey</button>
        )
    }
}



export default LikeButton;
