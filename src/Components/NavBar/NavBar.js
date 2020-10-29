import React from "react";

import MenuItem from "../MenuItem/MenuItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../Redux/Directory/Directory-selectors";

import "./nav-bar.scss";

const NavBar = ({ sections }) => {
  return (
    <nav className="navbar">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </nav>
  );
};

const matStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(matStateToProps)(NavBar);
