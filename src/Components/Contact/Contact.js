import React, { Component } from "react";
import emailjs from "emailjs-com";

import CustomButton from "../CustomButton/CustomButton";
import { ReactComponent as Logo } from "../../assets/hcharis-01.svg/hcharis-02.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faPhone,
  faUser,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faPinterest,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./contact.scss";

class Contact extends Component {
  state = {
    messageSent: false,
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "bruno_portfolio_message",
        "#contactForm",
        "user_oyLJWpa6rPOwCCyxCKMdJ"
      )
      .then()
      .catch();

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      messageSent: true,
    });
  };
  render() {
    return (
      <section id="contactme">
        <div className="landing-page">
          <div className="parallax">
            <Logo />
          </div>
        </div>

        <div className="contact-container">
          <h1 className="contact-title animated fadeInLeft">Get in touch</h1>

          <div className="contact__top-icons">
            <div className="top-icons__left">
              <div>
                <FontAwesomeIcon className="info-icons" icon={faPhone} />{" "}
                <span>+1 955.555.5555</span>
              </div>
              <div>
                <FontAwesomeIcon className="info-icons" icon={faEnvelope} />{" "}
                <span>support@h-charis.com</span>
              </div>
            </div>

            <div className="top-icons__right">
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

          <div className="container__block animated fadeInRight">
            <div className="contact ">
              {this.state.messageSent ? (
                <div className="alert animated fadeInUp">
                  Your Message has been sent
                </div>
              ) : (
                ""
              )}

              <form
                onSubmit={this.handleSubmit}
                className="animated delay-1s fadeInRight"
                id="contactForm"
              >
                <div className="name-email">
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    id="form-name"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    className="flex-item-1 form-input-label"
                  />

                  <br />
                  <input
                    name="email"
                    type="email"
                    placeholder="E-mail Address"
                    id="form-email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="flex-item-2 form-input-label"
                  />
                </div>

                <br />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  id="form-subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                  className="flex-item-3"
                />
                <textarea
                  name="message"
                  type="text"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  rows="4"
                  id="form-message"
                  required
                  className="flex-item-4"
                ></textarea>
                <br />

                <div className="btn-holder">
                  <CustomButton>Send</CustomButton>
                </div>
                <br />
              </form>
            </div>
            <div className="required-column">
              <span className="required no-padding">
                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
              </span>
              <span className="required">
                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
              </span>

              <span className="required">
                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
