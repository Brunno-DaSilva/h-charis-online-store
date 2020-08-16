import React from "react";
import { Route, Router } from "react-router-dom";

import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import CollectionPage from "../../Pages/CollectionPage/CollectionPage";

import "./shop-page.scss";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
