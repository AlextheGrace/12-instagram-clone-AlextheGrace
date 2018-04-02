import React, { Component } from 'react'
import { connect } from 'react-redux'






const mapStateToProps = state => ({
   
    
  });



class LikeButton extends Component {

    
    
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        
    }

    render(){
        return(
            <button onClick={this.handleChange}>Likey</button>
        )
    }
}



export default LikeButton;
