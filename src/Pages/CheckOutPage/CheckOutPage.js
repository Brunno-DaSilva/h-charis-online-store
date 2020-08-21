import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckOutItem from "../../Components/CheckOutItem/CheckOutItem";
import StripeButton from "../../Components/StripeButton/StripeButton";

import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/Cart/cart-selectors";

import "./check-out.scss";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="products-table">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Name</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>&#10005;</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <div className="checkout-total">
        <div className="total">
          <div>Total</div>
          <span>$ {total}</span>

          <StripeButton price={total} />
        </div>
      </div>
      <div className="test-warning">
        *💳 Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: Any future date - CVV: Any 3 digits
        <p>Ex. exp: 05/2035 cvv: 123</p>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
