import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase";

import "./sign-in.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("sign-in handle submit", error);
    }
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            required
            value={this.state.email}
            handleChange={this.handleChange}
          />

          <FormInput
            name="password"
            type="password"
            label="password"
            required
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
