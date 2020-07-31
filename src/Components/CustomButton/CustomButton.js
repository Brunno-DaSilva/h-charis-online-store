import React from "react";
import "./custom-button.scss";

const CustomButton = ({ children, isGoogleSignIn, invert, ...otherProps }) => {
  return (
    <button
      className={`${invert ? "invert" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
