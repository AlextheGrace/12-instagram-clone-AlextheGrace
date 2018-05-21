import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';




export default function(ComposedComponent) {
    class Authenticate extends Component {
        
        componentWillUpdate(nextProps) {
            if(!nextProps.isLoggedIn) {
                return <Redirect to="/signin"/>
            }
        }
        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }

    }

    const mapStateToProps = state => {
        return state.auth.isLoggedIn
    }

    return connect(mapStateToProps)(Authenticate);
}
