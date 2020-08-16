import React, { Component } from "react";

import { Link } from "react-router-dom";

import Slider from "react-slick";

import "./carousel-style.scss";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1596833062/h-charis-online-store/3_lmcig0.png " />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1596833062/h-charis-online-store/2_bwq1uv.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1596833062/h-charis-online-store/1_aidbr3.png" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
