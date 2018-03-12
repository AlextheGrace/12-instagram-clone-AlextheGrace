import React, {Component } from 'react';

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e);
    }
    render() {
        return (
        <section className="App-signup">
          <h2>This is signup</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
            Username:
            <input type="text" name="username" />
            </label>
            <label>
            Email:
            <input type="text" name="email" />
            </label>
            <label>
            Password:
            <input type="password" name="password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </section>
        )
    }

    mapStateToProps = state => ({
        users: state.users
    });
}

export default SignUpForm;
