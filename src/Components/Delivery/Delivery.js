import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTruck,
  faCreditCard,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import "./delivery.scss";

const Delivery = () => {
  return (
    <div className="delivery-container">
      <div className="delivery__shipping">
        <FontAwesomeIcon className="icons" icon={faTruck} />
        <div className="description">
          <p>
            Get free shipping
            <br />
            <span> For all order over 99$</span>
          </p>
        </div>
      </div>
      <div className="delivery__time">
        <FontAwesomeIcon className="icons" icon={faClock} />
        <div className="description">
          <p>
            delivery on time
            <br />
            <span> If good have problems</span>
          </p>
        </div>
      </div>
      <div className="delivery__payment">
        <FontAwesomeIcon className="icons" icon={faCreditCard} />
        <div className="description">
          <p>
            secure payment
            <br />
            <span> 100% secure payment</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
