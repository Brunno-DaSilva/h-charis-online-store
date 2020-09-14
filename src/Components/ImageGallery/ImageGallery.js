import React from "react";

import CustomButton from "../CustomButton/CustomButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadSideCoughSlash,
  faHeadSideMask,
} from "@fortawesome/free-solid-svg-icons";

import "./image-gallery.scss";

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <div className="gallery__left-item">
        <div className="image">
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1600117827/h-charis-online-store/mask_py0o2k.jpg"
            alt="image-section"
          />
        </div>
      </div>
      <div className="gallery__right-item">
        <div className="right-item__title">
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1598037812/h-charis-online-store/hcharis-01_ygeuf2.svg"
            alt="logo"
          />
        </div>
        <div className="right-item__title">
          <h1>REUSABLE FACE MASKS</h1>
        </div>
        <div className="right-item__icons">
          <FontAwesomeIcon className="info-icons" icon={faHeadSideCoughSlash} />
          <FontAwesomeIcon className="info-icons" icon={faHeadSideMask} />
        </div>

        <div className="right-item__shopnow">
          <CustomButton>SHOP NOW</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
