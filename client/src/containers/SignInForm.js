import React, {Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions';


const mapStateToProps = state => {
    return {
            isLoggedIn: state.user.user.auth,
            isSubmitting: state.user.isSubmitting,

           };
  }


class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this); 
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });     
    }
    handleSubmit(e) {
        e.preventDefault();
        
        const User = {
            
            email: this.state.email,
            password: this.state.password,
        }
        console.log("submitting");
        this.props.dispatch(loginUser(User));
    }

    render() {


        const { isLoggedIn, isSubmitting } = this.props;

        if (isLoggedIn) {
            return <Redirect to="/profile"/>;
        }
      
        return(
        <section className="App-signup">
          <h2>This is signin</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
            Email:
            <input type="text" onChange={this.onChange}  value={this.state.email} name="email" />
            </label>
            <label>
            Password:
            <input type="password" onChange={this.onChange} value={this.state.password} name="password" />
            </label> 
            <input type="submit" value="Submit" />
          </form>
        </section>
        )
    }    
}

export default connect(mapStateToProps)(SignInForm);