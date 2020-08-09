import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-brands">
        <div className="nike">Nike</div>
        <div className="adidas">adidas</div>
        <div className="polo">polo</div>
        <div className="lacoste">lacoste</div>
      </div>
      <div className="footer-info">
        <div className="info-columns">
          <div className="column-one">
            <div class="footer-logo">
              <img src="#" alt="Logo Helena Charis" />
            </div>
            <div className="contact-info">
              <p>
                Address: <span>1212 B Avenue Dallas, Texas 750058</span>
              </p>
              <p>
                Phone: <span>4693072015</span>
              </p>
              <p>
                Email: <span>hi.dasilvab@gmail.com</span>
              </p>
            </div>
            <div className="left__social-media">
              <FontAwesomeIcon
                className="info-icons social"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="info-icons social"
                icon={faPinterest}
              />
              <FontAwesomeIcon className="info-icons social" icon={faTwitter} />
              <FontAwesomeIcon
                className="info-icons social"
                icon={faLinkedin}
              />
            </div>
          </div>
          <div className="column-two">
            <p className="info-title">Information</p>
            <span>About Us</span>
            <span>Checkout</span>
            <span>Contact</span>
            <span>Career</span>
          </div>
          <div className="column-three">
            <p className="info-title">My Account</p>
            <span>My Account</span>
            <span>Contact</span>
            <span>Shopping Cart</span>
            <span>Shop</span>
          </div>
          <div className="column-four">
            <p className="info-title">Join Our Newsletter Now</p>
            <span>
              Get E-mail updates about our latest shop and special offers
            </span>
            <div className="footer__search-container">
              <form>
                <input
                  className="search-box"
                  type="text"
                  label="search"
                  placeholder="search"
                  name="search"
                />
                <button id="search-btn" type="submit">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="copyright">
            <p>Copyright ©2020 All rights reserved - Bruno DaSilva</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
