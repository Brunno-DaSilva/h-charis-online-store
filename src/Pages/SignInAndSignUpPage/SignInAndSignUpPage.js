import React from "react";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";

import "./sign-in-and-sign-up-page.scss";

const SignInAndSignUpPage = () => {
  const [hasAccount, setHasAccount] = React.useState(true);

  const hasAccountHandler = () => {
    setHasAccount((prevMode) => !prevMode);
  };

  return (
    <div className="sign-in-and-sign-up">
      <div className="container-sign-in-and-up">
        {hasAccount ? <SignIn /> : <SignUp />}
      </div>
      <button className="btn-sign-up" onClick={hasAccountHandler}>
        {hasAccount ? "No account? Sign Up" : "Already has an account? Sign In"}
      </button>
    </div>
  );
};

export default SignInAndSignUpPage;
