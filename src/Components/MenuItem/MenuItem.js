import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`menu-item ${size} animated fadeInUp`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content animated delay-1s fadeInUp">
        <h1 className="title animated delay-1shalf fadeInUp">
          {title.toUpperCase()}
        </h1>
        <span className="subtitle animated delay-2s fadeInUp">Shop</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
