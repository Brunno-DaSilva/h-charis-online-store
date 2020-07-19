import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faPinterest,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const InfoSection = () => {
  return (
    <div className="info-container">
      <div className="info-left">
        <div className="left__email-service">
          <FontAwesomeIcon icon={faEnvelope} /> support@h-charis.com
        </div>
        <div className="left__phone-service">
          <FontAwesomeIcon icon={faPhone} /> +1 955.555.5555
        </div>
      </div>
      <div className="info-right">
        <div className="right__login">
          <FontAwesomeIcon icon={faUser} /> Login
        </div>

        <div className="right__social-media">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faPinterest} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
