import React from "react";
import "./cart-item.scss";

const CartItem = ({ item: { imgUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imgUrl} alt={name} />
    </div>
  );
};

export default CartItem;
