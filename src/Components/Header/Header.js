import React from "react";
import InfoSection from "../InfoSection/InfoSection";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/hcharis-01.svg/hcharis-01.svg";
import SearchArea from "../SearchArea/SearchArea";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartDropDown from "../CartDropDown/CartDropDown";
import CartIcon from "../CartIcon/CartIcon";
import { selectCartHidden } from "../../Redux/Cart/cart-selectors";

import "./header.scss";

const Header = ({ hidden }) => {
  return (
    <div className="header-container">
      <InfoSection />
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="search-container">
          <SearchArea />
        </div>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/contact">
            CONTACT
          </Link>
          <Link className="option colored" to="/about">
            ABOUT
          </Link>

          <CartIcon />
        </div>
        {hidden ? "" : <CartDropDown />}
      </div>
    </div>
  );
};

const mapStateProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateProps)(Header);
