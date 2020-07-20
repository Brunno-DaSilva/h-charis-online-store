import React from "react";
import "./search-area.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/hcharis-01.svg/hcharis-01.svg";

const SearchArea = () => {
  return (
    <div className="search-container">
      <div className="search__logo-container">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="search-box">
        <input type="search" />
        <div className="search__options">
          <Link className="search__options--option" to="/">
            SHOP
          </Link>
          <Link className="search__options--option" to="/">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
