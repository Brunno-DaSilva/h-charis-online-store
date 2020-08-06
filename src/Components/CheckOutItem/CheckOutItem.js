import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../Redux/Cart/cart-action";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./checkout-Item.scss";
import { addItemToCart } from "../../Redux/Cart/cart-utils";

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>
      <span className="price">$ {price}</span>
      <div className="quantity">
        <span onClick={() => removeItem(cartItem)}>
          {" "}
          <FontAwesomeIcon className="less" icon={faMinus} />{" "}
        </span>
        {quantity}
        <span onClick={() => addItem(cartItem)}>
          {" "}
          <FontAwesomeIcon className="plus" icon={faPlus} />
        </span>
      </div>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
