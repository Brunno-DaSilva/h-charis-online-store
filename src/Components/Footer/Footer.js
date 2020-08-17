import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/hcharis-01.svg/hcharis-02.svg";
import { ReactComponent as Wave } from "../../assets/wave-gray.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas, faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faPinterest,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.scss";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <Wave />
      <div className="footer">
        <div className="footer-brands">
          <div className="brands-logos">
            <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1597118601/h-charis-online-store/icons8-nike-500_m3e7ad.png" />
          </div>
          <div className="brands-logos">
            <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1597118601/h-charis-online-store/icons8-adidas-trefoil-500_kzy5lk.png" />
          </div>
          <div className="brands-logos">
            <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1597118601/h-charis-online-store/icons8-air-jordan-500_xspox8.png" />
          </div>
          <div className="brands-logos">
            <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1597118601/h-charis-online-store/icons8-etsy-480_ui34k1.png" />
          </div>
        </div>
        <div className="footer-info">
          <div className="info-columns">
            <div className="column-one">
              <Link className="logo-container" to="/">
                <Logo className="logo" />
              </Link>
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

                <FontAwesomeIcon
                  className="info-icons social"
                  icon={faTwitter}
                />

                <FontAwesomeIcon
                  className="info-icons social"
                  icon={faLinkedin}
                />
              </div>
            </div>

            <div className="column-two">
              <p className="info-title">Information</p>
              <div className="info-links">
                <Link className="info-link" to="/">
                  About Us
                </Link>
                <Link className="info-link" to="/">
                  Checkout
                </Link>
                <Link className="info-link" to="/">
                  Contact
                </Link>
                <Link className="info-link" to="/">
                  Career
                </Link>
              </div>
            </div>

            <div className="column-three">
              <p className="info-title">My Account</p>
              <div className="info-links">
                <Link className="info-link" to="/">
                  My Account
                </Link>
                <Link className="info-link" to="/">
                  Contact
                </Link>
                <Link className="info-link" to="/">
                  Shopping Cart
                </Link>
                <Link className="info-link" to="/">
                  Shop
                </Link>
              </div>
            </div>

            <div className="column-four">
              <p className="info-title">Join Our Newsletter Now</p>
              <span>
                Get E-mail updates about our latest shop and special offers
              </span>
              <div className="footer__search-container">
                <form>
                  <input
                    className="newsletter"
                    type="text"
                    label="newsletter"
                    placeholder="Enter Your Email"
                    name="newsletter"
                  />
                  <button id="search-btn" type="submit">
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="bottom-section">
            <img
              className="b-logo"
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1588899368/Logo/blogo-gray_doyoy3.png"
            />
            <p className="bruno">
              <span>{getYear()}</span> Bruno DaSilva
              <span> Front-End Developer</span>
            </p>

            <div className="more-projects">
              <p>
                More <span>Projects</span>
              </p>

              <div>
                <a href="https://github.com/Brunno-DaSilva" target="_blank">
                  <i>
                    <FontAwesomeIcon icon={faGithub} />
                  </i>
                </a>

                <a
                  href="https://www.linkedin.com/in/bruno-dasilva/"
                  target="_blank"
                >
                  <i>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </i>
                </a>

                <a href="http://bruno-dasilva.com/" target="_blank">
                  <i>
                    <FontAwesomeIcon icon={faGlobeAmericas} />
                  </i>
                </a>
              </div>
            </div>

            <div className="copyright">
              <p>
                Copyright <span>©{getYear()}</span> All rights reserved | made
                with <FontAwesomeIcon className="tomato" icon={faHeart} /> by
                Bruno DaSilva Software Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
