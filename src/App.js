import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./Components/Header/Header";
import SignInAndSignUpPage from "./Pages/SignInAndSignUpPage/SignInAndSignUpPage";

import { auth } from "./firebase/firebase";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
