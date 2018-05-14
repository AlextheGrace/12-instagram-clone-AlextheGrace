import React from "react";
import { SignInForm } from '../containers';
import './style.css';


const Signin = () => {
  return (
    <div className="Signin">
      <div class="ui two column centered grid">
        <SignInForm/>
      </div>
    </div>
  );
};


export default Signin;