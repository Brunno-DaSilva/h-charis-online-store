import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./carousel-style.scss";

const IMAGE_DATA = [
  {
    id: 0,
    imageURL:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1596833062/h-charis-online-store/3_lmcig0.png",
    alt: "Shop Now House",
    router: "/shop/house",
  },
  {
    id: 1,
    imageURL:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1596833062/h-charis-online-store/2_bwq1uv.png",
    alt: "Shop Now Women",
    router: "/shop/women",
  },
  {
    id: 2,
    imageURL:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1596833062/h-charis-online-store/1_aidbr3.png",
    alt: "Shop Now Kids",
    router: "/shop/kids",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrent] = useState(0);
  const [imageList, setImageList] = useState(IMAGE_DATA);

  const nextSlide = () => {
    setCurrent(currentSlide === imageList.length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrent(currentSlide === 0 ? imageList.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setImageList(IMAGE_DATA);
  }, []);

  return (
    <div className="carousel-container animated fadeInUp">
      <div className="carousel-arrow left-arrow" onClick={prevSlide}>
        <FontAwesomeIcon className="icons" icon={faArrowLeft} />
      </div>
      <div className="carousel-arrow right-arrow" onClick={nextSlide}>
        <FontAwesomeIcon className="icons" icon={faArrowRight} />
      </div>

      {imageList.map(({ id, imageURL, alt, router }) => {
        return (
          <div
            className={
              id === currentSlide
                ? "image-container active"
                : "image-container "
            }
            key={id}
          >
            {id === currentSlide && (
              <Link to={router}>
                <img src={imageURL} alt={alt} />
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
