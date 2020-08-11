import React from "react";
import Timer from "react-compound-timer";

import CustomButton from "../CustomButton/CustomButton";

import "./deal-of-the-week.scss";

const DealOfTheWeek = () => {
  return (
    <div className="deal-container">
      <div className="deal__col-1">
        <div className="col-1--title">
          <h2>Deal of the Week</h2>
        </div>
        <div className="col-1--description">
          <p>
            With clothing hand selected by our expert stylists for your unique
            size & style, you’ll always look and feel your best. No subscription
            required.
          </p>
        </div>
        <div className="col-1--price">
          <p>
            $ 99.99 <span>+ taxes</span>
          </p>
        </div>
        <div className="col-1--time">
          <Timer
            initialTime={365 * 24 * 60 * 60 * 1000}
            lastUnit="d"
            direction="backward"
          >
            {() => (
              <React.Fragment>
                <div className="col-1__time--days">
                  <Timer.Days /> <span>days</span>
                </div>
                <div className="col-1__time--hours">
                  <Timer.Hours /> <span>hrs</span>
                </div>
                <div className="col-1__time--mins">
                  <Timer.Minutes /> <span>min</span>
                </div>
                <div className="col-1__time--secs">
                  <Timer.Seconds className="col-1__time--secs" />
                  <span>secs</span>
                </div>
              </React.Fragment>
            )}
          </Timer>
        </div>
        <div className="deal__btn-wrapper">
          <CustomButton>Shop Now</CustomButton>
        </div>
      </div>
      <div className="deal__col-2">
        <img
          src="https://res.cloudinary.com/duprwuo4j/image/upload/v1597177171/h-charis-online-store/Mens/MW40_41MU_08_COLE_HAAN_CLAY_SET_lw6pen.webp"
          alt="Men's clothing box"
        />
      </div>
    </div>
  );
};

export default DealOfTheWeek;
