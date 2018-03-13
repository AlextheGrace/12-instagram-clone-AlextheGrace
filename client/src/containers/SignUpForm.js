import React, {Component } from 'react';
import {registerUser} from '../actions';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';



const mapStateToProps = state => {
    return {
            isLoggedin: state.isLoggedIn,
            users: state.users,
            isSubmitting: state.isSubmitting,

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

        const { isLoggedIn, isSubmitting } = this.props;

        if (this.props.isLoggedIn) {
            return <Redirect to="/profile" />;
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

