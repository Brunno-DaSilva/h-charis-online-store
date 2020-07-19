import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faPinterest,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./info-section.scss";

const InfoSection = () => {
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
          <FontAwesomeIcon className="info-icons" icon={faFacebook} />
          <FontAwesomeIcon className="info-icons" icon={faPinterest} />
          <FontAwesomeIcon className="info-icons" icon={faTwitter} />
          <FontAwesomeIcon className="info-icons" icon={faLinkedin} />
        </div>
      </div>
      <div className="info-right">
        <div className="right__login">
          <FontAwesomeIcon className="info-icons" icon={faUser} />{" "}
          <span>Login</span>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
