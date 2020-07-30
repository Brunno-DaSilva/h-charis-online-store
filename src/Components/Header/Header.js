import React from "react";
import InfoSection from "../InfoSection/InfoSection";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/hcharis-01.svg/hcharis-01.svg";
import SearchArea from "../SearchArea/SearchArea";
import { auth } from "../../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import "./header.scss";

const Header = () => {
  return (
    <>
      <InfoSection />
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <SearchArea />

        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/contact">
            CONTACT
          </Link>
          <Link className="option" to="/contact">
            <FontAwesomeIcon className="info-icons" icon={faShoppingBag} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
