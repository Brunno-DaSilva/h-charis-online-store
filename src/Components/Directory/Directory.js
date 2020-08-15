import React from "react";
import MenuItem from "../MenuItem/MenuItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../Redux/Directory/Directory-selectors";
import "./directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const matStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(matStateToProps)(Directory);
