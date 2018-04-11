import React, {Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { Input, Form, Button } from 'semantic-ui-react';

const mapStateToProps = state => {
    return {
            auth: state.auth.auth,
            isSubmitting: state.auth.isSubmitting,
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


        const { auth, isSubmitting } = this.props;

        if (auth) {
            return <Redirect to="/profile"/>;
        }
      
        return(
        <section className="App-signup">
          <h2>This is signin</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
            <label>
            Email:
            <Input type="text" onChange={this.onChange}  value={this.state.email} name="email" />
            </label>
            </Form.Field>
            <Form.Field>
            <label>
            Password:
            <Input type="password" onChange={this.onChange} value={this.state.password} name="password" />
            </label> 
            </Form.Field>
            <Button onSubmit={this.handleSubmit}>Submit</Button>
          </Form>
        </section>
        )
    }    
}

export default connect(mapStateToProps)(SignInForm);