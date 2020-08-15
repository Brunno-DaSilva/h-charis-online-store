import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../Redux/Shop/shop-selector";

import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";

import "./shop-page.scss";

// import SHOP_DATA from "./ShopData";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
