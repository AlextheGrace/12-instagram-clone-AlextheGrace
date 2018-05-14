import React, {Component } from 'react';
import { registerUser } from '../actions';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Form, Button, Loader } from 'semantic-ui-react';



const mapStateToProps = state => {
    return {
            auth: state.auth.auth,
            isSubmitting: state.user.isSubmitting,

           };
  }


class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this); 
        this.state = {
            username: '',
            email: '',
            password: ''

        }
    }
    

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });     
    }
    handleSubmit(e) {
        e.preventDefault();
        
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }

        this.props.dispatch(registerUser(newUser));
    }
    render() {

        const { auth, isSubmitting } = this.props;

        if (auth) {
            return <Redirect to="/profile"/>;
        }
    

        if(isSubmitting) {
            return (
                <p>loading...</p>
            );
        }
        return (
        <section className="App-signup">
          <h2>This is signup</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
            Username:
            <input type="text" onChange={this.onChange} value={this.state.username} name="username" />
            </label>
            <label>
            Email:
            <input type="text" onChange={this.onChange}  value={this.state.email} name="email" />
            </label>
            <label>
            Password:
            <input type="password" onChange={this.onChange}  value={this.state.password} name="password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </section>
        )
    }

   
}


export default connect(mapStateToProps)(SignUpForm);

