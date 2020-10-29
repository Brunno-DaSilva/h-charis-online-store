import React from "react";

import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import { addItem } from "../../Redux/Cart/cart-action";

import "./collection-item.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item animated fadeInUp">
      <div
        className="image animated fadeInUp"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name animated delay-1s fadeInRight">{name}</span>
        <span className="price animated delay-1s fadeInLeft ">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
