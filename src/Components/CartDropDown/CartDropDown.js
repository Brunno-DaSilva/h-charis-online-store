import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./cart-dropdown.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Check Out Items</CustomButton>
    </div>
  );
};

export default CartDropDown;
