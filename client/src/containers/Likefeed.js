import React, { Component } from "react";





class LikeFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    const { likes } = this.props;

    return (
      <div>
        <li>likes: {likes.length}</li>
      </div>
    )
  }
}

export default LikeFeed;