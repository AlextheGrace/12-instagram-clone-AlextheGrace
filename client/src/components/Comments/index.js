import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Modal } from 'semantic-ui-react';

// import './Photo.css';

export class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {

        body:""
    }
  }

  componentDidMount() {
  }

  render() {
    const { comment } = this.props;

    return (

        
   
               

    );
  }
}

const mapStateToProps = (state) => ({



})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)