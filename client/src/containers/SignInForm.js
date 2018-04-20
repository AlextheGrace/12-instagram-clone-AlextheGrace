import React, {Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { Input, Form, Button, Loader } from 'semantic-ui-react';

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
            password: '',
            passwordVal: null
        }
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);

        if(this.state.password.length < 8) {
             this.setState({passwordVal: "error" });
             console.log("error");
        }  
        else {
            console.log("good")
        }
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


        const { auth, isSubmitting, passwordVal } = this.props;

        if (auth) {
            return <Redirect to="/profile"/>;
        }

        if(isSubmitting) {
            return <Loader active inline='centered' />
        }
      
        return(
        <section className="App-signup">
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
            <label>
            Email:
            <Form.Input type="text" onChange={this.onChange}  value={this.state.email} name="email" error/>
            </label>
            </Form.Field>
            <Form.Field>
            <label>
            Password:
            <Form.Input type="password" onChange={this.onChange} value={this.state.password} name="password" sucess/>
            </label> 
            </Form.Field>
            <Button onSubmit={this.handleSubmit}>Submit</Button>
          </Form>
                <Link to="/signup">Signup</Link> here if you dont have an account
        </section>
        )
    }    
}

export default connect(mapStateToProps)(SignInForm);