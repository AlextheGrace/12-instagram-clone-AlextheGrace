import React, { Component } from "react";





class LikeFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    const { likes } = this.props;

    return (
       
      // <ul>
      //   {
      //     likes.map((like) => (
      //       <li key={like._id}>
      //         <p>{like.count}</p>
      //       </li>
      //     ))
      //   }
      // </ul>
      <div>
        <li>likes: {likes.length}</li>
      </div>
    )
  }
}

export default LikeFeed;