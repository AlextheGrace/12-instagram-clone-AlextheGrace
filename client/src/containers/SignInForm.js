

import React,{ Component } from 'react';
import {connect} from 'react-redux';
class SignInForm extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
        <section className="App-signup">
          <h2>This is signin</h2>
          <form onSubmit="">
            <label>
            Email:
            <input type="text" name="name" />
            </label>
            <label>
            Password:
            <input type="text" name="name" />
            </label> 
            <input type="submit" value="Submit" />
          </form>
        </section>
        )
    }

     
}

export default SignInForm;