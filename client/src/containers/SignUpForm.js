import React from 'react';

const SignUpForm = () => {
    return (
        <section className="App-signup">
          <h2>This is signup</h2>
          <form>
            <label>
            Name:
            <input type="text" name="name" />
            </label>
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

export default SignUpForm;
