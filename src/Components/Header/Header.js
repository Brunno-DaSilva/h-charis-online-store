import React from "react";
import InfoSection from "../InfoSection/InfoSection";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/hcharis-01.svg/hcharis-01.svg";
import SearchArea from "../SearchArea/SearchArea";

import { connect } from "react-redux";
import CartDropDown from "../CartDropDown/CartDropDown";
import CartIcon from "../CartIcon/CartIcon";

import "./header.scss";

const Header = ({ hidden }) => {
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

          <CartIcon />
        </div>
        {hidden ? "" : <CartDropDown />}
      </div>
    </>
  );
};

const mapStateProps = ({ cart: { hidden } }) => ({
  hidden,
});

export default connect(mapStateProps)(Header);
