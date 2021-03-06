import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase";
import { selectCurrentUser } from "../../Redux/User/user-selectors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faPinterest,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./info-section.scss";

const InfoSection = ({ currentUser }) => {
  return (
    <div className="info-container">
      <div className="info-left">
        <div className="left__email-service">
          <FontAwesomeIcon className="info-icons" icon={faEnvelope} />{" "}
          <span>support@h-charis.com</span>
        </div>
        <div className="left__phone-service">
          <FontAwesomeIcon className="info-icons" icon={faPhone} />{" "}
          <span>+1 955.555.5555</span>
        </div>
        <div className="left__social-media">
          <FontAwesomeIcon className="info-icons social" icon={faFacebook} />
          <FontAwesomeIcon className="info-icons social" icon={faPinterest} />
          <FontAwesomeIcon className="info-icons social" icon={faTwitter} />
          <FontAwesomeIcon className="info-icons social" icon={faLinkedin} />
        </div>
      </div>
      <div className="info-right">
        <div className="right__login">
          <FontAwesomeIcon className="info-icons" icon={faUser} />{" "}
          {currentUser ? (
            <span className="login__option" onClick={() => auth.signOut()}>
              <span className="option__username">
                {currentUser.displayName}{" "}
              </span>{" "}
              Log Out
            </span>
          ) : (
            <Link className="option" to="/sign-in">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(InfoSection);
