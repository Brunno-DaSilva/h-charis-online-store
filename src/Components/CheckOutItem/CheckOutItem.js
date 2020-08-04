import React from "react";
import "./checkout-Item.scss";

const CheckOutItem = ({ cartItem: { name, price, imageUrl, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>
      <span className="price">$ {price}</span>
      <span className="quantity">{quantity}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckOutItem;
