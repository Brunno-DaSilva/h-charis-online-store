import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../Redux/Cart/cart-action";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./checkout-Item.scss";

const CheckOutItem = ({ cartItem, clearItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>
      <span className="price">$ {price}</span>
      <span className="quantity">
        <FontAwesomeIcon className="less" icon={faMinus} /> {quantity}{" "}
        <FontAwesomeIcon className="plus" icon={faPlus} />
      </span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
