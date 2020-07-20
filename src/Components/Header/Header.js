import React from "react";
import InfoSection from "../InfoSection/InfoSection";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/hcharis-01.svg/hcharis-01.svg";
import "./header.scss";

const Header = () => {
  return (
    <>
      <InfoSection />
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/">
            SHOP
          </Link>
          <Link className="option" to="/">
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
